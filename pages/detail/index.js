const app = getApp()

Page({
  data: {
    tophight: wx.getSystemInfoSync().statusBarHeight, // 获取状态栏高度
    imgTop: 0, // 用于头图的变速滑动
    isScoped: false, // 用于导航栏的滑动显示

    opBackground: '', // 用于控制按钮的阴影变化
    dyHeight: 0, // 用于控制动态容器展示高度，以便动画

    selTable: false, // 用于控制 选择面板 开启
    selTableH: 1000,

    loading: true, // 加载状态

    borrowed: false, // 是否已借用
    subscribed: false, // 是否已预约

    tracked: false, // 是否已跟踪
    canBorrow: true, // 是否可借用

    whyCanBorrow: '设备损坏', // 不可借用原因

  },
  onLoad: function () {
    var that = this
    
    // 设置选择面板高度
    wx.createSelectorQuery().selectAll('.selContainer').boundingClientRect(function (rect) {
      that.setData({
        selTableH: (rect[0].height),
      })
    }).exec()
    
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
  },
  openTable: function () {
    var that = this
    wx.createSelectorQuery().selectAll('.selContainer').boundingClientRect(function (rect) {
      that.setData({
        selTableH: (rect[0].height),
        selTable: true,
      })
    }).exec()
  },
  closeTable: function() {
    var that = this
    wx.createSelectorQuery().selectAll('.selContainer').boundingClientRect(function (rect) {
      that.setData({
        selTableH: (rect[0].height),
        selTable: false,
      })
    }).exec()
  }
})
