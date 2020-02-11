const app = getApp()

Page({
  data: {
    tophight: wx.getSystemInfoSync().statusBarHeight, // 获取状态栏高度
    isScoped: false, // 用于导航栏的滑动显示

    loading: true, // 加载状态

    borrowed: false, // 是否已借用
    subscribed: true, // 是否已预约

    tracked: true, // 是否已跟踪
    canBorrow: false, // 是否可借用

    whyCanBorrow: '设备损坏', // 不可借用原因

  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    setTimeout(() => {
      this.setData({
        loading: false,
      }) 
    }, 1000)
    setTimeout(() => {
      wx.createSelectorQuery().selectAll('.dyContainer').boundingClientRect(function (rect) {
        console.log(rect[0].height)
        console.log(rect[0].width)
      }).exec()
    }, 2000)
  },
  onPageScroll: function (e) {
    if (e.scrollTop > 130 && !this.data.isScoped) {
      this.setData({
        isScoped: true,
      })
    } else if (e.scrollTop < 130 && this.data.isScoped){
      this.setData({
        isScoped: false,
      })
    }
    // 页面滚动时执行
  },
  toBack: function () {
    wx.navigateBack({})
  }
})
