const app = getApp()

Page({
  data: {
    tophight: wx.getSystemInfoSync().statusBarHeight, // 获取状态栏高度
    imgTop: 0, // 用于头图的变速滑动
    isScoped: false, // 用于导航栏的滑动显示
    opBackground: '', // 用于控制按钮的阴影变化
    dyHeight: 0, // 用于控制动态容器展示高度，以便动画

    loading: true, // 加载状态

    borrowed: false, // 是否已借用
    subscribed: false, // 是否已预约

    tracked: false, // 是否已跟踪
    canBorrow: true, // 是否可借用

    whyCanBorrow: '设备损坏', // 不可借用原因

  },
  onLoad: function () {
    var that = this
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    
    // 模拟加载
    setTimeout(() => {
      that.setData({
        loading: false,
      }, () => {
        // 加载完成后测量动态容器内容的高度
        wx.createSelectorQuery().selectAll('.dymain').boundingClientRect(function (rect) {
          /* 计算公式： 测量长（rect[0].height 是 px 单位） + 最上方 margin 差 + 最下方 margin 差 */
          that.setData({
            dyHeight: (rect[0].height * 2) + 44,
          })
        }).exec()
      })
    }, 1000)

    setInterval(() => {
      if (!that.data.loading) {
        if (that.data.opBackground === '0 0 20rpx rgba(0, 0, 0, 0.1)') {
          that.setData({
            opBackground: '0 0 12px rgba(0, 0, 0, 0.1)',
          })
        } else {
          that.setData({
            opBackground: '0 0 20rpx rgba(0, 0, 0, 0.1)',
          })
        }
      }
    }, 1000)

    // 元素高度测量器 px
    // wx.createSelectorQuery().selectAll('.dymain').boundingClientRect(function (rect) {
    //   console.log(rect[0].height)
    //   console.log(rect[0].width)
    // }).exec()
  },

  onPageScroll: function (e) {
    var st = e.scrollTop
    if (st > 130 && !this.data.isScoped) {
      this.setData({
        isScoped: true,
      })
    } else if (st < 130 && this.data.isScoped){
      this.setData({
        isScoped: false,
      })
    }
    this.setData({
      imgTop: (st / 4),
    })
    // 页面滚动时执行
  },
  toBack: function () {
    wx.navigateBack({})
  }
})
