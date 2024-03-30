# [0.1.0](https://github.com/hughfenghen/WebAV/compare/v0.3.3...v0.1.0) (2024-03-30)

### Bug Fixes

- conflict ([86ea902](https://github.com/hughfenghen/WebAV/commit/86ea902eabf64ac3d0a1c9c54d7652fb1a038c46))
- doc-site typo ([5818972](https://github.com/hughfenghen/WebAV/commit/581897200e6e3490dd45d3ad0be8a3c3854a30b9))

### Features

- **simple-git-hooks:** add commit message verification script ([57c78f7](https://github.com/hughfenghen/WebAV/commit/57c78f70797c82dec9c77d8ad56eeda303f241d4))

# 0.1.0 (2024-03-22)

### Bug Fixes

- [#26](https://github.com/leewakin/WebAV/issues/26) need resume when AudioContext.state is suspended ([dc0245b](https://github.com/leewakin/WebAV/commit/dc0245b7488411d70e94da488308fb802db6fa7d))
- 1s 视频可能导致声音丢失 ([0373235](https://github.com/leewakin/WebAV/commit/0373235a45541f10ff3a7a4127ab27d3690e5fd5))
- 超短时间视频，可能导致音轨丢失 ([d2f9da7](https://github.com/leewakin/WebAV/commit/d2f9da75eed2d8aeb4c410604948acc35cea985e))
- 定时器执行异常 ([9fb1770](https://github.com/leewakin/WebAV/commit/9fb17700003ca27f779605017c88af1dcd639e21))
- 丢失部分 audioData的问题 ([d68721c](https://github.com/leewakin/WebAV/commit/d68721ce010ffb1e40f62c164950c46e82faba52))
- 动画逻辑判断错误，可能出现空指针 ([312fc0d](https://github.com/leewakin/WebAV/commit/312fc0df765161178648c2d3c7659041c241fbbb))
- 合并视频后，音频可能偏移错误 ([cda643b](https://github.com/leewakin/WebAV/commit/cda643b9d6df4b3fea6c1276f4fb1105b628d51b))
- 画蛇添足的优化 ([761ca8c](https://github.com/leewakin/WebAV/commit/761ca8c0cd0ae723c0c90209a800f37db246c3e6))
- 旧版 mac（intel）画面闪烁；取消编码器控制，增加视频默认码率 ([b591034](https://github.com/leewakin/WebAV/commit/b591034874a5b5feb4525d27e6bab7e6c7e2b34a))
- 旧版 mac（intel）画面闪烁；取消编码器控制，增加视频默认码率 ([3fcabb9](https://github.com/leewakin/WebAV/commit/3fcabb9a5801788c30f717a9d573dbf44432cec8))
- 没有音频文件可能报错 ([f93a5c0](https://github.com/leewakin/WebAV/commit/f93a5c0b7e5ef19905f720017dbdbb3e67584288))
- 某些设备可能不支持视频编码 ([ca4cba6](https://github.com/leewakin/WebAV/commit/ca4cba6efb731fc10c2c9a57883b2366d80e69a2))
- 如果没有音频，录制的webm不正常 ([7eb5416](https://github.com/leewakin/WebAV/commit/7eb5416f2b61823e3b4ae8b6bd180f19b1ebc1c3))
- 视频的声音不应该播放出来 ([c10702a](https://github.com/leewakin/WebAV/commit/c10702a2fac6e17056db1ae7cf644a3a362a49d5))
- 视频sample 在前，声音可能延后 ([034c63a](https://github.com/leewakin/WebAV/commit/034c63aa00913825644f49efff3d0b9c6fb6150d))
- 首次访问，gif 只能解析第一帧 ([58525c1](https://github.com/leewakin/WebAV/commit/58525c10b3fc055a6b1190e5c0c80e631404d213))
- 首次写文件，需确保关键 box 已完成 ([fac65e4](https://github.com/leewakin/WebAV/commit/fac65e47164b0be219602eedf5912d170f740b82))
- 网速较慢时，任务提前停止 ([dc819bd](https://github.com/leewakin/WebAV/commit/dc819bd069f3ab75a45ab980b30bedf657a282b1))
- 未等待图片加载 ([51128bb](https://github.com/leewakin/WebAV/commit/51128bbacb3c816d6f82fca4177ffd103b0db09c))
- 未及时退出合成过程 ([dfd279a](https://github.com/leewakin/WebAV/commit/dfd279ac73fbf26759252f92842d9eef1ab5539e))
- 无音轨mp4 合成失败 ([aabc23d](https://github.com/leewakin/WebAV/commit/aabc23d3bb4686bb05827d54c6210bf6488a3837))
- 页面后台时定时器不（或延迟）执行 ([01589c6](https://github.com/leewakin/WebAV/commit/01589c67df53d8ffec0e976b93f193455ae79a80))
- 在ctrl上按下，鼠标样式错误 ([b5ee944](https://github.com/leewakin/WebAV/commit/b5ee944eebe0ae1af5cfa3f782cdc9bf565ce713))
- 重采样导致的声音卡顿（顺序错误） ([642fa10](https://github.com/leewakin/WebAV/commit/642fa10f986fa3f07dde18883cf67278a1a3e699))
- 重封装后音视频长度不匹配 ([3c7a2cc](https://github.com/leewakin/WebAV/commit/3c7a2ccec74eb83c3469539debbcbfbb6356d55b))
- 主视频 duration 若为 0，合成失败 ([ad1e00b](https://github.com/leewakin/WebAV/commit/ad1e00b40f2887184922a9b72b57b710bb6d0494))
- audio clip tick 返回数据错误 ([df22c66](https://github.com/leewakin/WebAV/commit/df22c6621da05470e5b2e7173ef281e237fd1d64))
- audio codec config error ([9dfa94f](https://github.com/leewakin/WebAV/commit/9dfa94f12c4abda4b830c83fbac082acc279b9ee))
- av-canvas build failed ([0bd2ec5](https://github.com/leewakin/WebAV/commit/0bd2ec5ab5ae1132ed0a4eb48aa9ca6ecafab341))
- av-canvas module field incorrect ([ac2e9ce](https://github.com/leewakin/WebAV/commit/ac2e9ced6bb9ff0ed6203b15f1056d89c2eb49bf))
- av-recorder build failed ([40fd8a3](https://github.com/leewakin/WebAV/commit/40fd8a30933f49e68419bdc550cbc413adda6a02))
- avcanvas unit test error ([0922bb8](https://github.com/leewakin/WebAV/commit/0922bb80af5271ae1b0e9680c71a04176352da68))
- build demo ([5013c36](https://github.com/leewakin/WebAV/commit/5013c36ba98dea92c0195734ced3cf12ae8c5bb4))
- build error ([52fd66d](https://github.com/leewakin/WebAV/commit/52fd66d16fc48f618da97368b6d743e7fafffa1a))
- cavas 被污染，无法导出图片 ([d70f719](https://github.com/leewakin/WebAV/commit/d70f7199675f189f82bb92615f6a068a41036113))
- chrome 首次录屏文件损坏；mac 无声音 ([61976fb](https://github.com/leewakin/WebAV/commit/61976fbb58efe2c70c44be2058d003ce4271765b))
- decode m4a 的 demo 中，声道数据错误 ([4f8a98c](https://github.com/leewakin/WebAV/commit/4f8a98cced29515ac173feb2b9280fd79bce043e))
- demo 导出的 webm duration异常 ([135935b](https://github.com/leewakin/WebAV/commit/135935bf960101b5f4e8f7f45f308ea013ce11a3))
- demo assets prefix url ([5f2989e](https://github.com/leewakin/WebAV/commit/5f2989ed48df59f45184850f18d0711d14e70c3d))
- demo failed to run on a win device. ([5d447e6](https://github.com/leewakin/WebAV/commit/5d447e6335e6b086fd5bc31de86d4bbebf2891b9))
- deploy demo failed ([e9181aa](https://github.com/leewakin/WebAV/commit/e9181aa43b1d22055568307e94a51dce11f7e147))
- deploy demo media file ([59d3a02](https://github.com/leewakin/WebAV/commit/59d3a02d9ae7ddf0f65136a072e168386a919e27))
- destroy 拼写错误 ([8d87e45](https://github.com/leewakin/WebAV/commit/8d87e45b6e54abb1f57a7fde29b4e8ea758d1f96))
- dmeo 动态显示 进度 ([8b0b20b](https://github.com/leewakin/WebAV/commit/8b0b20b19e1bebe40709773dc2804826183b2816))
- doc-site typo ([5818972](https://github.com/leewakin/WebAV/commit/581897200e6e3490dd45d3ad0be8a3c3854a30b9))
- **doc-site:** img load failed ([ce7106c](https://github.com/leewakin/WebAV/commit/ce7106c2fd24324d43ff5403bd50647f2d7788e3))
- dts、cts error ([90d9c6c](https://github.com/leewakin/WebAV/commit/90d9c6c09832901ec041eb276a00f67eb7bef903))
- ECYCLE ([fcdcb90](https://github.com/leewakin/WebAV/commit/fcdcb90abb2f33c705a69938da22bc56ec36d809))
- Eliminate popping noise introduced by resampling ([5addbb3](https://github.com/leewakin/WebAV/commit/5addbb32f2eb4f046040b40eb1207a5cc8ac79d8))
- Error: Cant create gl context on safari ([d44ad2f](https://github.com/leewakin/WebAV/commit/d44ad2ff9a15ad7772ee15b0c00c5f81b1db2581))
- eslint error ([df023ed](https://github.com/leewakin/WebAV/commit/df023ed0f6d3fafd5f3f9437a4fb622581340534))
- exec ctx.createBuffer throw error when audio length is zero ([182243a](https://github.com/leewakin/WebAV/commit/182243ac51c38f7db8a33947c6de12569573f292))
- Exiting before initialization completes, causing the inability to generate file ([7cd3a7b](https://github.com/leewakin/WebAV/commit/7cd3a7b05b61c051b98476bc18219b00bf55bd82))
- exporter webm demo error ([7a72f86](https://github.com/leewakin/WebAV/commit/7a72f8602ca3f2b544f61230841305fb4ff66708))
- fastConcatMP4 loss esds box ([bb259ee](https://github.com/leewakin/WebAV/commit/bb259ee36459071a791144c07edb730bca6e1adc))
- first audio chunk, not have description ([bcf6c84](https://github.com/leewakin/WebAV/commit/bcf6c8419236536bfd86b3cc5d74c4844a6526ca))
- gh-pages action ([1156043](https://github.com/leewakin/WebAV/commit/11560435c493fe12feefeac3677e1b59fb1e6431))
- gh-pages deploy demo ([fc3cae9](https://github.com/leewakin/WebAV/commit/fc3cae9337b9497ceb7fb5534f0c67a63d7c9481))
- hide codesandbox icon, because not working ([9354613](https://github.com/leewakin/WebAV/commit/9354613fd512b9541e7a6d7d1bad8651ea5c3753))
- install mp4box timeout ([86068f1](https://github.com/leewakin/WebAV/commit/86068f15f5538a2972e3deb3d6e6a4e001754f65))
- lerna config error ([872427a](https://github.com/leewakin/WebAV/commit/872427ae1e2d0b011a28519f7b6fb24673e25eaa))
- lerna version error ([38bdf53](https://github.com/leewakin/WebAV/commit/38bdf534f76a0f7015a4638e4cbee6eb3120fcf6))
- lib type check error ([2266078](https://github.com/leewakin/WebAV/commit/226607874185bb61e887badc09c6d6823d086cac))
- link incorrect ([5701dfb](https://github.com/leewakin/WebAV/commit/5701dfb927da2fe66990f07d5a9c03b2040dde54))
- memory leak [#16](https://github.com/leewakin/WebAV/issues/16) ([f2dbeef](https://github.com/leewakin/WebAV/commit/f2dbeeffd8537145fdb861eb12e139a50e8dddb8))
- misspell ([0cf7e6d](https://github.com/leewakin/WebAV/commit/0cf7e6dd397fceccaf81875016adec949c8bf486))
- mp4box type not equal codec ([ae0829e](https://github.com/leewakin/WebAV/commit/ae0829ee529da0ce8022827942df00f0627fa076))
- MP4Clip 获取音频可能死循环 ([f57963a](https://github.com/leewakin/WebAV/commit/f57963a71b4de34de16e8667cbb6ab4e9c59da22))
- mp4clip 未丢帧，导致时间画面不匹配 ([c38febb](https://github.com/leewakin/WebAV/commit/c38febb30fc9ed34ed4e90d7779692e5b2cc89fb))
- mp4clip, demuxcode 可能死循环 ([a6a2a5b](https://github.com/leewakin/WebAV/commit/a6a2a5bb2df642de1ba495752a1b79a2e59f8a86))
- MP4Previewer demo throw error ([99f0f4d](https://github.com/leewakin/WebAV/commit/99f0f4d1ca1c4f0b469cf51f298f327e082f983d))
- null point error, read track_width of null ([0a1a63d](https://github.com/leewakin/WebAV/commit/0a1a63dbf9a31b07b795eb64853dcfc02763c54d))
- PMC长度不一致，可能导致数据混乱 ([ee09a6f](https://github.com/leewakin/WebAV/commit/ee09a6f76c50584d0f2d7cadaefeffe46a775c39))
- Proactively close the VideoFrame ([395de1e](https://github.com/leewakin/WebAV/commit/395de1e4c54afb355a828196ef4f13f9ae3a5b3f))
- progress is NaN ([e766cb0](https://github.com/leewakin/WebAV/commit/e766cb02d859169f67ffcb11f556b2a526311f28))
- progress value error ([c81fd8b](https://github.com/leewakin/WebAV/commit/c81fd8bd95c5b22061b7899a1da7f65173acafc0))
- progress value error ([ff654fb](https://github.com/leewakin/WebAV/commit/ff654fb44124111f0d954bfce7418719aa4943a2))
- publish-ziberr ([647ac34](https://github.com/leewakin/WebAV/commit/647ac343b406b464a619da0db9c4cc81d5524fbc))
- Record a static image and stop outputting data after a few seconds. [#25](https://github.com/leewakin/WebAV/issues/25) ([8b5dc96](https://github.com/leewakin/WebAV/commit/8b5dc9635ea247374431b8278fa9d53c95f206ab))
- recording video output does not have audio ([f5bd174](https://github.com/leewakin/WebAV/commit/f5bd174138b9cfe7d01cb12b27068b8fa2166b4e))
- remove audio of mp4clip ([e4c1343](https://github.com/leewakin/WebAV/commit/e4c134388a99dc829e11cee8c24462e28da39567))
- sprite 销毁过早 ([240c0ad](https://github.com/leewakin/WebAV/commit/240c0ade437b84ae86be90eaaeebc455f5032bb5))
- Sprite activation judgment error after reorder ([e1e90da](https://github.com/leewakin/WebAV/commit/e1e90daf9f6c313800dcc5d5ea34285f44d471eb))
- Sprite manipulation may fail when avcanvas aspect ratio changes ([1e5f5fb](https://github.com/leewakin/WebAV/commit/1e5f5fb876f00d1c9f5007f6c9608ae6ff4613d7))
- sprite.actived status error ([b609757](https://github.com/leewakin/WebAV/commit/b609757625c618b229c55fef8cba28986e96248c))
- srt 字幕出现纯数字内容 可能报错 ([bc1c033](https://github.com/leewakin/WebAV/commit/bc1c0332ec2ca27cf2a25b91bbb93fb236701a1b))
- stream cancel 必须等待当前read结束，否则报错 ([2b123b5](https://github.com/leewakin/WebAV/commit/2b123b5912493bf9e6385a354f1e935c337d7515))
- The output image is flipped when an ImageBitmap is passed in ([5ec3f05](https://github.com/leewakin/WebAV/commit/5ec3f052359f60396effb8e28ebdd865f2bb3e2b))
- The timestamp of the last frame may be 0 ([7ee26e9](https://github.com/leewakin/WebAV/commit/7ee26e9fe9d0ebfe58313d7794adc7210a317d6d))
- trun track id unknown, no tfhd was found ([8e7334a](https://github.com/leewakin/WebAV/commit/8e7334a589fe043f7a2a51a92613992b0569a2ef))
- ts-standard monorepo not working ([c2de752](https://github.com/leewakin/WebAV/commit/c2de752866ea3096d0eef6d2dcb50a03ecf1247a))
- tsc error ([3fbffba](https://github.com/leewakin/WebAV/commit/3fbffbae73b18a9858b376ec601ab13707022a50))
- type conflict between dom and webworker ([9b11233](https://github.com/leewakin/WebAV/commit/9b1123370efa897661a69375f12f9ac635eb8242))
- unit test ([7fc1da8](https://github.com/leewakin/WebAV/commit/7fc1da8d6fbe2d64f5ca666ec1ee5bfa226bdc3b))
- unit test error ([8d12e81](https://github.com/leewakin/WebAV/commit/8d12e8126d1f4246c3ffa90dfab115b99800f7c8))
- unit test error ([bf517e6](https://github.com/leewakin/WebAV/commit/bf517e671a76c6197d80b8dec2bd51844e24cc0b))
- unit-test error ([a3ba13d](https://github.com/leewakin/WebAV/commit/a3ba13d3f4a8544df8270ae72f601c0295dde160))
- video frame was garbage collected without being closed ([9bb7d7c](https://github.com/leewakin/WebAV/commit/9bb7d7cf873efbeea1d2d9db95bb7edaec9be3aa))
- webpack can't parse import.meta ([f14cfd3](https://github.com/leewakin/WebAV/commit/f14cfd3c82ab7ab113e86187f10ba0ecc054335c))
- When stopped, the camera was not successfully turned off ([b244859](https://github.com/leewakin/WebAV/commit/b244859859b1ece2a87b13426ccee0244af9d609))

### Features

- 避免多个 Combinator 并行，导致显存溢出 ([a0f70be](https://github.com/leewakin/WebAV/commit/a0f70be8571e6846d4b06ae05e86da8966ea705d))
- 不必要的循环，等待 flush 即可 ([39433d2](https://github.com/leewakin/WebAV/commit/39433d29f7100ec0745fd667d8b1013f6842ba9e))
- 不再支持opus 编码音频 ([0d8374a](https://github.com/leewakin/WebAV/commit/0d8374a496160abadad778509fe8c1ff62f7a99c))
- 尝试合并 MP3 MP4 ([fedb5df](https://github.com/leewakin/WebAV/commit/fedb5df3991816e2448554237e41fa4659455904))
- 超出边界的 ctrl 不可见 ([1a82652](https://github.com/leewakin/WebAV/commit/1a82652b900548952093f614cb4b7a0023176b77))
- 抽离 sprite 激活逻辑，实现动态鼠标样式 ([391b1d7](https://github.com/leewakin/WebAV/commit/391b1d751eae6835b12bb03b23b30c3d8d1d8301))
- 初始居中sprite ([d524a21](https://github.com/leewakin/WebAV/commit/d524a21fcfa4717504dcdbc2238f99f35d7ce9fa))
- 大幅提升音频重编码性能 ([06908fc](https://github.com/leewakin/WebAV/commit/06908fcfd955d02f656c2657cde8ccbd5cfa71df))
- 导出webm的demo移动至 av-exporter 模块 ([7e6bb3c](https://github.com/leewakin/WebAV/commit/7e6bb3cc9c5a20a6d231535c2260c9da4ab0d023))
- 等比例缩放 ([8ea3bf4](https://github.com/leewakin/WebAV/commit/8ea3bf4d9e56ab2e8ce4f47f71eb0c00db91617c))
- 调大等待时间，避免过频繁的回调，提升性能 ([1090b96](https://github.com/leewakin/WebAV/commit/1090b966fbf49bcb5699722e1d5dd93912a67a11))
- 调大等待时间，避免过频繁的回调，提升性能 ([73bc4b5](https://github.com/leewakin/WebAV/commit/73bc4b52f091b4f1b892a7700f8aa8b7d275422e))
- 调整 rotate ctrl 大小 ([19236c1](https://github.com/leewakin/WebAV/commit/19236c1f0a9ee70a2cfe395f8af999ba2a2a09dd))
- 调整控制点大小 ([c9bf59f](https://github.com/leewakin/WebAV/commit/c9bf59f0cb626f05951bb9d07a2f8afd4aecd6be))
- 调整释放sample数据位置，减少重复代码 ([222b00b](https://github.com/leewakin/WebAV/commit/222b00b52f72e8fbae996191d9e02a82f6ca0743))
- 调整释放sample数据位置，减少重复代码 ([703b550](https://github.com/leewakin/WebAV/commit/703b550a04a56e393fcc6392da2145b6b143b116))
- 调整audioclip入参类型，与videoclip保持一致 ([dd5cc4c](https://github.com/leewakin/WebAV/commit/dd5cc4c4d638b2a8a13860b7e7aa18968ef99117))
- 独立 rect 模块，checkHit 逻辑移动到 Rect 中 ([a60d73a](https://github.com/leewakin/WebAV/commit/a60d73a769b66400f7b9aed0de5c3aa603190f40))
- 复用 mp4box.d.ts ([f757904](https://github.com/leewakin/WebAV/commit/f757904cc74cc079b6f1e59bc201a8d8dca6e7ea))
- 复杂动画 demo ([6006663](https://github.com/leewakin/WebAV/commit/6006663a014adcfebf8cd280f59c5465be2f91d3))
- 改进 concat-mp4 demo ([23eaab7](https://github.com/leewakin/WebAV/commit/23eaab784ee24147a4574a06e4f2129037a777cc))
- 改进 demo 体验 与 测试效率 ([13a88b6](https://github.com/leewakin/WebAV/commit/13a88b6f1cf6b37489feb915ff42f51bf786cebb))
- 给 demo 添加兼容性判断 ([84fda18](https://github.com/leewakin/WebAV/commit/84fda18a18d7223c9cdce899077c41e36f9e9c6a))
- 更新 cliper fast concat demo ([3387675](https://github.com/leewakin/WebAV/commit/3387675855d9945bec849f93132f5e461d6e7c07))
- 更新 cliper fast concat demo ([c052c99](https://github.com/leewakin/WebAV/commit/c052c99021cb6883865b031da926f6af764ad5ca))
- 合并是支持资源层级控制 ([8fb15e2](https://github.com/leewakin/WebAV/commit/8fb15e2620beabbaec56ec76eeddfcfb0bc8aded))
- 合成可以旋转的 视频 ([50f1e3d](https://github.com/leewakin/WebAV/commit/50f1e3d82c814342fc6f89c5c94808de01eb5519))
- 合成文字demo ([88b954e](https://github.com/leewakin/WebAV/commit/88b954e719df1c37be0f6a0926069b51ba55b7b2))
- 绘制多行字幕 ([7ff67eb](https://github.com/leewakin/WebAV/commit/7ff67ebb4963c9cdc8d9d0ef5770f979785f32b1))
- 绘制多行字幕 ([d8a89e1](https://github.com/leewakin/WebAV/commit/d8a89e132b04156d30bb9d73e7333bb4575cc766))
- 混合mp4 加 音频，避免重编码视频 ([5f9df47](https://github.com/leewakin/WebAV/commit/5f9df47e9ee033fce2be35bd4b1e17e48834aa2a))
- 及时销毁用完的资源 ([057dd92](https://github.com/leewakin/WebAV/commit/057dd92112cae28391befd08235a1c907ff4f145))
- 兼容某些视频首帧有偏移 ([55da626](https://github.com/leewakin/WebAV/commit/55da626208d27fb184ccb0976e538100c3979fb1))
- 简化抠图api，无需传入 width height ([f245d2a](https://github.com/leewakin/WebAV/commit/f245d2a5c89575c454cf0c389c4ffaa8c6c0a93d))
- 降低显存压力，大幅提升性能 ([9062aa3](https://github.com/leewakin/WebAV/commit/9062aa37fde82d88d1d0dd4b49b6a13d60843729))
- 降低显存压力，大幅提升性能 ([ab99ffc](https://github.com/leewakin/WebAV/commit/ab99ffc858470fa463d232a2853ec9a1c0054023))
- 解码各种图片 ([ef75750](https://github.com/leewakin/WebAV/commit/ef75750541747711fddbee7687d65e8313433f15))
- 解码时主动释放已使用帧的数据 ([6651930](https://github.com/leewakin/WebAV/commit/665193034f5e387d49f5c36246671e1801545df3))
- 解码时主动释放已使用帧的数据 ([4805c8d](https://github.com/leewakin/WebAV/commit/4805c8d394ac707778e31715d509b5427f8e144d))
- 精细控制流式处理时的等待逻辑，提升25% 左右的性能 ([21a4aa1](https://github.com/leewakin/WebAV/commit/21a4aa13c67ca709c9606cb51ca25c9e256bda07))
- 精细控制流式处理时的等待逻辑，提升25% 左右的性能 ([67d283e](https://github.com/leewakin/WebAV/commit/67d283e0b0e1fde6a08dfa03a72d6e9d283ee98f))
- 绝对事件获取视频帧 ([2054a32](https://github.com/leewakin/WebAV/commit/2054a32bfdad697db19e3ce4e0af520a3741df1e))
- 抠图 然后合成视频 demo ([110dab6](https://github.com/leewakin/WebAV/commit/110dab6a66e8c7bed37e1d24dd87eb9217976362))
- 快速合并 mp4 支持 hevc 编码的视频 ([d91da5d](https://github.com/leewakin/WebAV/commit/d91da5d4511494ba04237f0f5d725fb7af6cd298))
- 快速合并mp4，用流式API解析替换实现 ([8aefba1](https://github.com/leewakin/WebAV/commit/8aefba1f25a5fd87153ca8d591fabd52965d9e32))
- 快速合并mp4，用流式API解析替换实现 ([f4a9f40](https://github.com/leewakin/WebAV/commit/f4a9f40714fa36411909ef04caf3c6677e30b44f))
- 每次渲染后需要清空画布 ([f4e8f90](https://github.com/leewakin/WebAV/commit/f4e8f9009a2e7d9402de9c30eed792282b132a2c))
- 能在 worker 中运行的 WorkSprite，用于实现快速到处视频 ([430a600](https://github.com/leewakin/WebAV/commit/430a600b6522c5e02170793cb0cbd882879bd779))
- 跑通合并 mp4 文件的demo ([b03d2d2](https://github.com/leewakin/WebAV/commit/b03d2d2dfb36359f47c64fbad183f9aa61ffad58))
- 缺少声道时应从 第一个声道复制 ([0f426ba](https://github.com/leewakin/WebAV/commit/0f426baa798a702b78d9e5d228ec06294eb3f4c4))
- 设定 AudioClip 目标采样率；优化代码 ([37c939a](https://github.com/leewakin/WebAV/commit/37c939a224a2d6379175dfbfeaaa316d539f1908))
- 实现FontSprite; ctrls 实现 移动到 av-canvas ([df5586f](https://github.com/leewakin/WebAV/commit/df5586f0a00bdcff93ac7b6f2a36843cb0573d34))
- 使用 dom 绘制 rect ctrls ([d9fb9b9](https://github.com/leewakin/WebAV/commit/d9fb9b965a75c1957ec7cd44cda4ac4dc12da8b8))
- 输入输出的流类型保持一致 ReadableStream<Uint8Array> ([0d7b7ee](https://github.com/leewakin/WebAV/commit/0d7b7ee6ac91e02458f0c9a6694c430140a0daf0))
- 顺序快速合并多个mp4流 ([11eea14](https://github.com/leewakin/WebAV/commit/11eea1439b88ebc86e0efd39695166176a7e61f4))
- 添加 av-exporter 模块 ([02d8c00](https://github.com/leewakin/WebAV/commit/02d8c00f20cb93f182544e2d38341fd42ba2f9bd))
- 添加 decode-media demo ([85f6004](https://github.com/leewakin/WebAV/commit/85f6004161aae099fa6f80e20d35c48b9087789e))
- 同步解析mp4 audio sample 和 mp3 ([97a885d](https://github.com/leewakin/WebAV/commit/97a885d39e35db72b4474d945203a0d0d9501820))
- 统一 ts-standard ([139544b](https://github.com/leewakin/WebAV/commit/139544bf573081d2814035ec329560fb20e6d730))
- 统一音频声道数量 ([95981bc](https://github.com/leewakin/WebAV/commit/95981bcbe8fdaa677f7d19f17ddca5d4fb2aa352))
- 退出前确保 已解析完成 ([62d9d47](https://github.com/leewakin/WebAV/commit/62d9d47115734dbc4ce8a196239777f266ebecc1))
- 外界传参单位 秒，内部转化为 微秒 ([e27c6d8](https://github.com/leewakin/WebAV/commit/e27c6d81a04db71614383c5b964daf74be8e1771))
- 完成绝对时间取帧 ([069f6db](https://github.com/leewakin/WebAV/commit/069f6db2d89d0ecd8fdb7d5f538817f1fffaf2e3))
- 完成绿幕抠图 ([9eef467](https://github.com/leewakin/WebAV/commit/9eef4677b0dcd3b00081aefb9b760ca777e29f89))
- 为音轨创建 esds box ([c15aec0](https://github.com/leewakin/WebAV/commit/c15aec09c660b030ebe1d40ffcc7e8704ccba0bc))
- 未激活，不应绘制ctrls ([212ce21](https://github.com/leewakin/WebAV/commit/212ce2182d4b990c770ab601c096c63155d1c17b))
- 显示 demo 使用的媒体资源列表 ([4a94018](https://github.com/leewakin/WebAV/commit/4a94018b7c3ecde2399c53a6c0585754556de3aa))
- 线性动画 ([c8a27cd](https://github.com/leewakin/WebAV/commit/c8a27cd9682bfcf25550f21aa7f1aecc5a07436f))
- 向期望FPS靠齐 ([daaed6b](https://github.com/leewakin/WebAV/commit/daaed6bf61a6bb284d31e73840aee2be9fb854d5))
- 修改音频重编码API，解决flush AudioEncoder 导致的音频卡顿问题 ([75213bf](https://github.com/leewakin/WebAV/commit/75213bf54488ed5dd08bfde52c69f00c8634b463))
- 旋转 sprite ([2d81749](https://github.com/leewakin/WebAV/commit/2d81749a56a56a2e0d4de2648135c07fb9737e18))
- 音频重采样 ([1886ed6](https://github.com/leewakin/WebAV/commit/1886ed65a895b134b37f773bad0592dcee8dceda))
- 优化 解码视频、合并音视频 demo ([a7e2a7a](https://github.com/leewakin/WebAV/commit/a7e2a7a141b23bcb3890d204a60a6683d27787c6))
- 优化 AudioClip 音量控制的实现 ([b5c4941](https://github.com/leewakin/WebAV/commit/b5c4941bf4978c26aded8bebba181635d1d94f86))
- 优化 concat-media demo ([438e850](https://github.com/leewakin/WebAV/commit/438e8505a9507652f646d7a526263811fbe04994))
- 优化 demo close 事件 ([104ed53](https://github.com/leewakin/WebAV/commit/104ed53296f82a66f33a078b7c22161fc08e8d6a))
- 优化测试资源大小，改善demo 体验 ([99de9fa](https://github.com/leewakin/WebAV/commit/99de9fa0f63f54a449038cbad458a9d663acddb8))
- 优化读取流控制 ([b2fabb8](https://github.com/leewakin/WebAV/commit/b2fabb82a812aaa15099200d657eb66e8a499f3f))
- 优化读取流控制 ([03b99f3](https://github.com/leewakin/WebAV/commit/03b99f3b61379849df16231e3a1914066a8a088c))
- 优化读取流时等待逻辑的实现 ([10873c5](https://github.com/leewakin/WebAV/commit/10873c5d2aa4ca18a756dbbd86449d43b31c6200))
- 优化读取流时等待逻辑的实现 ([4fcfb87](https://github.com/leewakin/WebAV/commit/4fcfb876ef916fbd2e00c7c09ef13d3713f7e57b))
- 优化音频轨道参数类型 ([c5a4a58](https://github.com/leewakin/WebAV/commit/c5a4a588d461fb21f6dac68eb8bddc69e3e469ad))
- 优化音频重采样后音质问题 ([c0da8b7](https://github.com/leewakin/WebAV/commit/c0da8b77e1b8562d682bed5390b08b730c411609))
- 优化资源加载中，demo展示效果 ([f0f9c22](https://github.com/leewakin/WebAV/commit/f0f9c22e56d41c8bdec58a4111020972088790d3))
- 优化demo展示效果 ([6731e87](https://github.com/leewakin/WebAV/commit/6731e871195b69a0aec7f486d00ef46779d4dba8))
- 优化sample时间取值 ([cae6109](https://github.com/leewakin/WebAV/commit/cae610988cfe0110d3b17f56e8a05b50a8b2500b))
- 允许配置字幕偏移底部距离 ([0abd04a](https://github.com/leewakin/WebAV/commit/0abd04aa39e5ecae70f02aba5cb02581defe452c))
- 允许所有sprite 缺省 duration 参数 ([0bb30f4](https://github.com/leewakin/WebAV/commit/0bb30f446419b4237fe3f02504514575cd3711d4))
- 支持1080分辨率，自定义码率示例 ([e5530a5](https://github.com/leewakin/WebAV/commit/e5530a582bd6ebdfe036ee73df29c8719e1335c9))
- 支持不透明度动画 ([ffffc19](https://github.com/leewakin/WebAV/commit/ffffc19bdc4397fd554c2971a7b36d0d31c83239))
- 支持解码 vpx、h264 ([ee70c8c](https://github.com/leewakin/WebAV/commit/ee70c8cb48b8603ae0a6a26a9f0b83c0c93bcf18))
- 支持缺省所有 sprite 的duration，新增支持指定 main sprite ([5071bf0](https://github.com/leewakin/WebAV/commit/5071bf054d6517f699a43f889a2cede2880e5be0))
- 支持设置字幕的阴影、描边样式 ([1d2c047](https://github.com/leewakin/WebAV/commit/1d2c04761fec95386a4ff039d63b52390f83e55f))
- 支持无音轨MP4 添加 音频 ([3bcebee](https://github.com/leewakin/WebAV/commit/3bcebeee3d60b1a3f5688ee64eb573e2362fe547))
- 主动回收所有编解码器 ([96d795b](https://github.com/leewakin/WebAV/commit/96d795b9e3a41e7d34e4460c4ab95445cf151f22))
- 字幕绘制 ([b210481](https://github.com/leewakin/WebAV/commit/b2104818012fb07c8eef6d6d3e183a8e7e79956e))
- 字幕绘制 ([3724148](https://github.com/leewakin/WebAV/commit/3724148bd18fcc2408dc9b3797044cab7e561c06))
- 字幕阴影 ([977feea](https://github.com/leewakin/WebAV/commit/977feea31d24be8729670a4dd6484424eaf95659))
- 字幕阴影 ([8d32266](https://github.com/leewakin/WebAV/commit/8d32266abd41085c932f3eb8c329e4c4b6a35130))
- 字幕demo ([3fb55a9](https://github.com/leewakin/WebAV/commit/3fb55a925c8dc2ff7131ba59161bd102b3d85d80))
- 字幕demo ([a626fe0](https://github.com/leewakin/WebAV/commit/a626fe07005b91986a24e81a96d658f8f5aaf654))
- adapter audio sampleRate and channel count ([bfc389a](https://github.com/leewakin/WebAV/commit/bfc389af2d7b7950e36d43990f7e4f902a2f353b))
- add demo to cliper readme ([3dc7c55](https://github.com/leewakin/WebAV/commit/3dc7c55960c019aa0d8f644394f2a42786384b9c))
- add state change event [#50](https://github.com/leewakin/WebAV/issues/50) ([80c272a](https://github.com/leewakin/WebAV/commit/80c272ac3db041a09dd506e0cb8858ac6d9775e2))
- Allow MP4Clip to run in a WebWorker [#19](https://github.com/leewakin/WebAV/issues/19) ([df19ca9](https://github.com/leewakin/WebAV/commit/df19ca95bf4f840ad54ced1f46b1e941d67b70af))
- audio clip 支持设置音量 ([1e986d2](https://github.com/leewakin/WebAV/commit/1e986d235926560745bd275bb73a6257d7d9826b))
- audio clip 支持循环播放 ([8ccd6f9](https://github.com/leewakin/WebAV/commit/8ccd6f99b34e32ec0ac12c9c62274ab13cc249b4))
- audio sampleRate 默认 48000 ([cc78098](https://github.com/leewakin/WebAV/commit/cc78098bd3dbfad52545eed1721e558b81e43600))
- audio sprite ([aa2efd0](https://github.com/leewakin/WebAV/commit/aa2efd0addce6c638d2cdf1fbbdf5b1fece85416))
- AudioClip ([dafd30b](https://github.com/leewakin/WebAV/commit/dafd30bc56db6d6b5ecc0b08101a7d08ccbbf0ee))
- AudioClip loop ([1be044e](https://github.com/leewakin/WebAV/commit/1be044e4ce0957a8e7b806847ba50b04b6f6dfb0))
- AudioClip tick 返回 float32array ([109bc4f](https://github.com/leewakin/WebAV/commit/109bc4f329e31a647b2b434ecbfaf380921e49f4))
- auto publish ([3f9f4b8](https://github.com/leewakin/WebAV/commit/3f9f4b8ec736603c8a72d06d0cd66a9e6243188f))
- av-cliper 更新导出内容 ([760fe7d](https://github.com/leewakin/WebAV/commit/760fe7da6d03107febdf9b290bf7d8aea32a735b))
- AVRecorder supports pause/resume [#22](https://github.com/leewakin/WebAV/issues/22) ([af1a1e1](https://github.com/leewakin/WebAV/commit/af1a1e1a5f0bbbf4c0540784e51aad2438395736))
- Breaking change, updated the chromakey shader ([c693b28](https://github.com/leewakin/WebAV/commit/c693b287586845e414a9418cc7b0ce7e1791dee9))
- build av-recorder ([6de4499](https://github.com/leewakin/WebAV/commit/6de449983bed704916b5468d885893788b921c5e))
- chromakey 支持 自动识别 背景色 ([255a732](https://github.com/leewakin/WebAV/commit/255a732958beaec7d26f699be315c6ceaa813ec8))
- cliper 日志模块 ([ffa608d](https://github.com/leewakin/WebAV/commit/ffa608da609482593fa65849d545c3447236ccc6))
- Combinator 允许控制输出视频的码率 ([3df6c5e](https://github.com/leewakin/WebAV/commit/3df6c5e6896c5b4cd1b9d5f49ff6c782d3324842))
- Combinator 允许控制输出视频的码率 ([fd18e1c](https://github.com/leewakin/WebAV/commit/fd18e1c10f858dbf419f65413b68635ab0152bd4))
- Combinator 支持 progress ([670f6c0](https://github.com/leewakin/WebAV/commit/670f6c086bbba1285970a4b4c26226924d7e0109))
- Combinator MP4clip 添加日志id ([15936cf](https://github.com/leewakin/WebAV/commit/15936cff81ff3ab0b2899a49dcbff16534d0b203))
- Combinator.add 支持缺省 offset，默认 0 ([e6d2295](https://github.com/leewakin/WebAV/commit/e6d22957822c2e177e4588ec69c2c50e80398737))
- Combinator.isSupported ([d5b2c22](https://github.com/leewakin/WebAV/commit/d5b2c22aa51e2ccbfae7c991a3a38802dc0b7cb1))
- concat audio demo ([8b33800](https://github.com/leewakin/WebAV/commit/8b33800e539e54922d7837bf5b4ccd43c95cd559))
- concat mp4 files ([3909bf8](https://github.com/leewakin/WebAV/commit/3909bf874e25c2c31b7604fa004502d17358de53))
- concat source ([5a14cc5](https://github.com/leewakin/WebAV/commit/5a14cc5082b7959520800d4551d6fbaeac8e412c))
- concat two mp4 file ([8092a47](https://github.com/leewakin/WebAV/commit/8092a4791bf438ec18a386862a0ae2cc3547fd7c))
- decode audio demo ([c3a9f0a](https://github.com/leewakin/WebAV/commit/c3a9f0a84d7a5f36674b862cdd52ec4657ade4da))
- decode gif ([8f576fa](https://github.com/leewakin/WebAV/commit/8f576fa49b0610b556e25af08186595534e22296))
- decode GOP ([925c718](https://github.com/leewakin/WebAV/commit/925c71893fdf2b25dac0aa6036ce1fc5961eeeb1))
- default opus ([bfbaa37](https://github.com/leewakin/WebAV/commit/bfbaa37498c8a88282a34d0909a53cfe4b1162d2))
- demo 补充复杂合成示例 ([0157313](https://github.com/leewakin/WebAV/commit/0157313c79a9ebfb0177a392a1d8d0b505a114df))
- demo 跑通 快速合并mp4 ([74b9451](https://github.com/leewakin/WebAV/commit/74b9451271410178124af635d12309ea03c42734))
- demo decode mp4 ([d7bac43](https://github.com/leewakin/WebAV/commit/d7bac43a84113104abc485f320f1bbc8889273bc))
- demo decode-mp3 & convert to mp4(aac) ([6c2d9ec](https://github.com/leewakin/WebAV/commit/6c2d9ecce9e1fbe5edbced50b7b0ac7da8dda9d4))
- DEMO of decoding mp4 in worker ([d48a7f9](https://github.com/leewakin/WebAV/commit/d48a7f92d836a9fe8e104eab7b144009381f862a))
- deploy demo ([93d5ce5](https://github.com/leewakin/WebAV/commit/93d5ce53df0753854877ce33d422a472a51f95ff))
- deploy demo to gh-pages ([869f8bb](https://github.com/leewakin/WebAV/commit/869f8bbb4ff3a3254c631920b1cd68f1e13762c0))
- doc-site add clarity ([6cd8b65](https://github.com/leewakin/WebAV/commit/6cd8b655ba21c329ee8fb836b273e311578575e1))
- duration 可选 ([24776bd](https://github.com/leewakin/WebAV/commit/24776bdf3057c0971ee23e759fb1c662e677d92d))
- EmbedSubtitlesClip support letterSpacing ([f52432a](https://github.com/leewakin/WebAV/commit/f52432a218d81ecad882db9506a64b6b8c960452))
- EmbedSubtitlesClip support lineWidth, lineCap, lineJoin ([bd1ed21](https://github.com/leewakin/WebAV/commit/bd1ed21b02aa3f3e5ec093fd3fa4db2f7630519c))
- encode audio data ([7ddddbc](https://github.com/leewakin/WebAV/commit/7ddddbcf09a0b95aad908ff2b84eaa6e78590cbd))
- export EmbedSubtitlesClip ([44e8a85](https://github.com/leewakin/WebAV/commit/44e8a85bf3199f9b84d488cdd5d67204fd3d577f))
- export EmbedSubtitlesClip ([98b2fc5](https://github.com/leewakin/WebAV/commit/98b2fc51952147d402737ed11df8756441f6c365))
- export mp4 video track ([4abfd0a](https://github.com/leewakin/WebAV/commit/4abfd0a7060ef2cd442a6376d8658ab1d71d3443))
- export mp4-utils ([39abd5e](https://github.com/leewakin/WebAV/commit/39abd5e01a022af73fa6c990d43c2d1d9d361d03))
- export mp4-utils ([08dc345](https://github.com/leewakin/WebAV/commit/08dc34575fafbf5d6d6047b3ce78e61df3e8fcdd))
- export webm ([abe0a9b](https://github.com/leewakin/WebAV/commit/abe0a9b64eb47bb0f23503f92d0577d765b0811f))
- exportWebM ([f0095d7](https://github.com/leewakin/WebAV/commit/f0095d7da3777364e63a6a5abc426bb21c76d687))
- fast transfrom file -> samples -> file ([57bf6d2](https://github.com/leewakin/WebAV/commit/57bf6d250f230bbf213e7745b4c1da84cfc4ebba))
- find chunks ([09fa636](https://github.com/leewakin/WebAV/commit/09fa636905518b3452964c98e6ad1b6c35bd243b))
- github actions publish demo ([407fef8](https://github.com/leewakin/WebAV/commit/407fef8cf0a1cf96d8a184877646aa84db457c7a))
- IClip.tick 可选返回 audio ([06af1a3](https://github.com/leewakin/WebAV/commit/06af1a3dcd2fe5c9f454cd28270e1444576afca1))
- image sprite ([2cb7276](https://github.com/leewakin/WebAV/commit/2cb72766a08626b2b59c25870dc16295605bcd89))
- img clip ([a181876](https://github.com/leewakin/WebAV/commit/a181876cea5be9b6b2294ca0744989ccd20171e9))
- img sprite 支持 URL ([117ecea](https://github.com/leewakin/WebAV/commit/117ecea95db7da51ae4ccaf21e12b2b7c3c6f06a))
- ImgClip support gif ([38021e7](https://github.com/leewakin/WebAV/commit/38021e77e692dbf8201fdb07e17389d9afc47c32))
- impl sprite manager destory ([f0b17b1](https://github.com/leewakin/WebAV/commit/f0b17b1bcfb57de5492d31f6ce865a03ecab0b43))
- impl timeSlice ([86d291d](https://github.com/leewakin/WebAV/commit/86d291d8e68e1d4f663bc82b7e4738f4235a8b2a))
- implement MP4Previewer.getVideoFrame ([04d35b2](https://github.com/leewakin/WebAV/commit/04d35b2d90b07e16944e8c1a4004ccc6f41a1aa5))
- imporve MP4Previewer demo ([1ddf27b](https://github.com/leewakin/WebAV/commit/1ddf27b62782b9f3b6a5905f5c5c7afaf495de7c))
- improve chromakey compatibility. ([5355624](https://github.com/leewakin/WebAV/commit/5355624a9f722643928c25af393dec88adbc81e5))
- improve chromakey demo ([5854e76](https://github.com/leewakin/WebAV/commit/5854e76f12686741f1a481381f08ab2a44dcd38b))
- init av-creator ([0a6c30b](https://github.com/leewakin/WebAV/commit/0a6c30badc1329cdf097429a7c91b92fd76e3f8d))
- init chromakey ([4ce576b](https://github.com/leewakin/WebAV/commit/4ce576bea7f496fec62603781de7c17dbd02c34c))
- local video file ([12c3203](https://github.com/leewakin/WebAV/commit/12c3203d04a36ff8f280428df3cf1c99fa3c3fbc))
- mimic MediaRecorder Api ([da82a36](https://github.com/leewakin/WebAV/commit/da82a362336d9ef8d3d1dce75f4bac3f9644e1c7))
- mixin PCM ([60270ed](https://github.com/leewakin/WebAV/commit/60270edc86ea4765872c5306468196f7cb44ad6a))
- mixinMP4AndAudio 音频淡出 ([81a7a36](https://github.com/leewakin/WebAV/commit/81a7a36df4632ed6c19fa42117b70fb5a3e1f4e0))
- move sprite 边界限制 ([5aada8b](https://github.com/leewakin/WebAV/commit/5aada8b1455bebb4d445398bf2cc6691edeec8d6))
- MP4 clip 流式解码，releaseUsedSamples ([db538d0](https://github.com/leewakin/WebAV/commit/db538d09ac7ae3d6bf92ece9206a47348758b3a3))
- MP4 clip 流式解码，releaseUsedSamples ([d2d0cc8](https://github.com/leewakin/WebAV/commit/d2d0cc8a31ced3294232464e069ca0d6d4d21940))
- mp4 clip 支持调整音量 ([afd8611](https://github.com/leewakin/WebAV/commit/afd861112f4133c61e64b5b2c536f84f5f48db94))
- mp4 demux ([47a65ba](https://github.com/leewakin/WebAV/commit/47a65ba333be4e990464fed4432ce619dae2546f))
- mp4 source ([f3e350a](https://github.com/leewakin/WebAV/commit/f3e350ade5943ad77b623a26dc3d379b30c43dd3))
- mp4a 音频测试文件 ([8c3eae7](https://github.com/leewakin/WebAV/commit/8c3eae7063fe2c4e7c4ddb371a6b18e088d906e9))
- MP4Clip 返回 Float32Array 格式的音频数据 ([48bb6e3](https://github.com/leewakin/WebAV/commit/48bb6e3b30259bf7d9ba6f12c49c4c8392e68205))
- MP4Clip audio resample ([17d8cf6](https://github.com/leewakin/WebAV/commit/17d8cf6814ab4a6cc8bd5c066c51014f1ed46529))
- MP4Clip tickInterceptor 实现 mp4 绿幕抠图 ([329278f](https://github.com/leewakin/WebAV/commit/329278fe489c6138a88b44f5a18efc01ddf74de7))
- mp4File2OPFSFile, resolve the issue of the output MP4 file having a duration of 0. ([19d8f16](https://github.com/leewakin/WebAV/commit/19d8f166d39babb75f165ff5f73682f904533d75))
- MP4Previewer save data to opfs file ([5741ebf](https://github.com/leewakin/WebAV/commit/5741ebf0cc6da7e2c2e565aebebe2c598f4fe5e1))
- MP4Previewer.getImage ([2d804ce](https://github.com/leewakin/WebAV/commit/2d804ce6c0a73b6c0c44476a1749a3983ac03444))
- mp4source 输出 VideoFrame 或 AudioData 流 ([bfd349f](https://github.com/leewakin/WebAV/commit/bfd349f7590b9c07d17f21a028bb7ec3f70f7f53))
- mp4StreamToOPFSFile ([eb377fe](https://github.com/leewakin/WebAV/commit/eb377fea1ca54565f39dec82a25190267e55140d))
- mux audio track ([241bea9](https://github.com/leewakin/WebAV/commit/241bea9ab6289eb4c2173144051c0e533f145d17))
- normal speed decode demo [#29](https://github.com/leewakin/WebAV/issues/29) ([ac09251](https://github.com/leewakin/WebAV/commit/ac09251ed47c0c2d2b86b618503487f4a3121c18))
- npm publish av-canvas ([fd2d5a5](https://github.com/leewakin/WebAV/commit/fd2d5a5990b3bc92d41b0542671387aa815afec7))
- opfs file wrap ([9292c00](https://github.com/leewakin/WebAV/commit/9292c00d23ea9f5be90c70f6923b110fb5756bf9))
- Optimize demo(decode audio) experience ([42ff7cf](https://github.com/leewakin/WebAV/commit/42ff7cf01799e9329836551d88058ffbda8f4c06))
- optz deocde media demo ([fe2f76b](https://github.com/leewakin/WebAV/commit/fe2f76be82fb8c2272a9f12d49df31b8f26a346c))
- ouput umd.cjs ([d9ac06d](https://github.com/leewakin/WebAV/commit/d9ac06d72840b65c8b64457969dfc0e0adba9e8d))
- record usermedia demo˙ ([c39bdc6](https://github.com/leewakin/WebAV/commit/c39bdc6d3c644ca21a9a598b71717ffe8c3b955a))
- rect 拉伸缩放 ([613c90f](https://github.com/leewakin/WebAV/commit/613c90f6b793f5c5c7448fa57a6ce60e0c9e9168))
- releaseUsedSamples ([701791e](https://github.com/leewakin/WebAV/commit/701791e1bbf18355ebfc59e711cce72b7d4bddd1))
- removeSprite ([3b20479](https://github.com/leewakin/WebAV/commit/3b20479fcf4ed815922e833a241d7278cb46935a))
- rename imgs ([76b0d9c](https://github.com/leewakin/WebAV/commit/76b0d9c0584d05848d90b97aad6e035e813effb6))
- share screen demo ([a1e796a](https://github.com/leewakin/WebAV/commit/a1e796a296106fae2b9afdcda9186c84fd3660c2))
- Sort in ascending order by sprite.zIndex ([a46bf8a](https://github.com/leewakin/WebAV/commit/a46bf8a3c44f3cda917412cc016dc3160f426752))
- source goup & test ([9b35bd2](https://github.com/leewakin/WebAV/commit/9b35bd2ee12b136d09a94b705e123ca49b063869))
- sprite 可移动 ([37d0185](https://github.com/leewakin/WebAV/commit/37d0185d03ad3642b352cccd19b6c710e13e7e8c))
- sprite manager 添加 event 能力 ([d35d447](https://github.com/leewakin/WebAV/commit/d35d44777d65fdd3300f1695c56066e617c8844e))
- srt 字幕选取 ([1fe2da1](https://github.com/leewakin/WebAV/commit/1fe2da1e35f392c05bc3deedc706f59c411f6c81))
- srt 字幕选取 ([5611ec3](https://github.com/leewakin/WebAV/commit/5611ec320560b0752bdbd3bc00e0ae46542cf390))
- support aac codec ([1204a31](https://github.com/leewakin/WebAV/commit/1204a31c9d7f38fff44f28a989fc079014e95ab3))
- support bgColor ([5773461](https://github.com/leewakin/WebAV/commit/5773461d2005558fd088c005c2c9d86ef6c7d5d1))
- support opactiy ([96c8285](https://github.com/leewakin/WebAV/commit/96c8285f21c818932503be5ffcb0ccfee71fbfe7))
- Sync the chromakey API changes for Demo ([c5771d4](https://github.com/leewakin/WebAV/commit/c5771d4fc3584334c977d1885858177d66b5604e))
- timeline ([305a506](https://github.com/leewakin/WebAV/commit/305a506b2d7f70236a013dd0a74f2ccd8457de85))
- use opfs-tools access filesystem ([a0afa77](https://github.com/leewakin/WebAV/commit/a0afa770d56a51a73aeaaf880cc476218c064253))
- ut coverage ([b36f68f](https://github.com/leewakin/WebAV/commit/b36f68fb153a846af242c5c5069241fbc1406add))
- video codec use avc1.42E032 by default [#41](https://github.com/leewakin/WebAV/issues/41) ([3f91956](https://github.com/leewakin/WebAV/commit/3f919564d2d15a365ad78d8fbe75f2d8f8cad747))
- video sprite 支持音频 ([ea3c617](https://github.com/leewakin/WebAV/commit/ea3c6171d0695a0cf739a429eb7000e0631aca55))
- webgl 绘制图片 ([46df426](https://github.com/leewakin/WebAV/commit/46df4263288f54cdf77c1e1dd521e3908889c22e))