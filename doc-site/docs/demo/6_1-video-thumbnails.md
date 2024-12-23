---
nav: DEMO
group:
  title: 剪辑
  order: 2

order: 1
---

# 缩略图

视频缩略图常用于剪辑工具的时间轴模块中，该 DEMO 抽取视频所有关键帧，生成默认宽度 100px（可自定义）的缩略图，并提供对应的时间戳。

<code src="./6_1_1-video-thumbnails.tsx"></code>

## 自定义：时间区间、步长与图片宽度

指定视频时间区间、步长（单位**微秒**）来获取视频图像帧，用于需要展示更精细的图像帧场景；比如，视频编辑时间轴组件放大后展示更多图像帧。
若将步长设置足够小（如 10ms `step: 10e3`）， 相当于查看指定时间区间的所有图像帧。

:::info
时间区间不宜过大，避免生成缩略图耗时太长。
:::

该 DEMO 演示从视频 10s - 20s 之间每隔 1s 抽取一帧，缩略图宽度 200px。

<code src="./6_1_2-video-thumbnails.tsx"></code>

:::info
DEMO 中的“耗时”包括：解码视频帧 + 编码缩略图的消耗，不包含网络加载视频资源消耗的时间。
:::
