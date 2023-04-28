import { MP4File } from 'mp4box'
import { WorkerSprite } from './worker-sprite'
import { convertFile2Stream, recodemux } from '../mp4-utils'

interface ITimeItem {
  offset: number
  duration: number
  sprite: WorkerSprite
}

// todo: 编码、canvas 应从 Timeline中剥离
export class Timeline {
  #timeItems: ITimeItem[] = []

  #ts = 0

  #cvs

  #ctx

  #closeOutStream: (() => void) | null = null

  #remux: {
    encodeVideo: (frame: VideoFrame, options?: VideoEncoderEncodeOptions) => void
    close: () => void
    mp4file: MP4File
  }

  constructor (resolutions: { width: number, height: number }) {
    const { width, height } = resolutions
    this.#cvs = new OffscreenCanvas(width, height)
    // this.#cvs = document.querySelector('#canvas') as HTMLCanvasElement
    const ctx = this.#cvs.getContext('2d', { alpha: false })
    if (ctx == null) throw Error('Can not create 2d offscreen context')
    this.#ctx = ctx

    console.time('cost')
    this.#remux = recodemux({
      video: {
        width,
        height,
        expectFPS: 30
      },
      bitrate: 1_500_000
    }, {
      onEnded: () => {
        console.log('===== output ended ======', this.#ts)
        this.#closeOutStream?.()
        console.timeEnd('cost')
      }
    })
  }

  async add (
    sprite: WorkerSprite,
    opts: { offset: number, duration: number }
  ): Promise<void> {
    await sprite.ready
    this.#timeItems.push({
      sprite,
      ...opts
    })
  }

  output (): ReadableStream<ArrayBuffer> {
    const lastIt = this.#timeItems.at(-1)
    if (lastIt == null) throw Error('Timeline is empty')
    const maxTime = lastIt.offset + lastIt.duration

    // 33ms, 30FPS
    const timeSlice = 33 * 1000
    let canceled = false
    const run = async (): Promise<void> => {
      let frameCnt = 0
      while (this.#ts <= maxTime) {
        if (canceled) break

        for (const it of this.#timeItems) {
          if (this.#ts < it.offset || this.#ts > it.offset + it.duration) {
            continue
          }
          await it.sprite.offscreenRender(this.#ctx, this.#ts - it.offset)
        }
        const vf = new VideoFrame(this.#cvs, {
          duration: timeSlice,
          timestamp: this.#ts
        })
        this.#ts += timeSlice
        // console.log(4444, vf.duration)

        this.#remux.encodeVideo(vf, {
          keyFrame: frameCnt % 150 === 0
        })
        vf.close()
        this.#ctx.resetTransform()
        this.#ctx.clearRect(0, 0, this.#cvs.width, this.#cvs.height)

        frameCnt += 1
      }
    }

    run().catch(console.error)

    const { stream, stop: closeOutStream } = convertFile2Stream(
      this.#remux.mp4file,
      500,
      () => {
        canceled = true
        this.#remux.close()
      }
    )
    this.#closeOutStream = closeOutStream

    return stream
  }
}