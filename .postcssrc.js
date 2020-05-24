const tailwindConfig = require('./tailwind.config')
module.exports = () => {
  return {
    plugins: {
      tailwindcss: tailwindConfig,
    },
  }
}
