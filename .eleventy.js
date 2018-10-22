// Configure your 11ty input & output here
const src = './src'
const dist = './dist'

module.exports = function (config) {
  // 11ty I/O
  config.dir = {
    input: src,
    output: dist,
  }

  // passthrough files
  // config.addPassthroughCopy('./src/static`)

  return config
}
