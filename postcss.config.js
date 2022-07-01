module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, // 视窗宽度，对应的是设计稿(iphone6)宽度
      viewportHeight: 667, // 视窗高度，对应的是我们设计稿高度（可以不配置）
      unitPrecision: 5, // 指定'px'转化为视窗单位值的小数位数（因为很多时候无法整除）
      viewportUnit: 'vw', //指定需要转化成的视窗单位
      selectorBlackList: ['ignore',], // 指定不需要转化的类
      minPixelValue: 1, // 小于或者等于'1px'不转成视窗单位
      mediaQuery: false, // 允许在媒体查询中转换'px'
    }
  }
}