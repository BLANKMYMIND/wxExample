// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opBackground: '0 0 28rpx rgb(255, 255, 255)', // 用于控制按钮的阴影变化
    username: '',
    password: '',
    uFocus: false,
    pFocus: false,
    loading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    setInterval(() => {
      if (that.data.opBackground === '0 0 98rpx rgb(255, 255, 255)') {
        that.setData({
          opBackground: '0 0 28rpx rgb(255, 255, 255)',
        })
      } else {
        that.setData({
          opBackground: '0 0 98rpx rgb(255, 255, 255)',
        })
      }
    }, 600)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  handleU: function(e) {
    this.setData({
      username: e.detail.value,
    })
  },

  handleP: function(e) {
    this.setData({
      password: e.detail.value,
    })
  },

  focusU: function() {
    this.setData({
      uFocus: true,
    })
  },

  blurU: function() {
    this.setData({
      uFocus: false,
    })
  },

  focusP: function() {
    this.setData({
      pFocus: true,
    })
  },

  blurP: function() {
    this.setData({
      pFocus: false,
    })
  },

  login: function() {
    let that = this
    if (this.data.username !== '' && this.data.password !== '') {
      this.setData({
        loading: true,
      }, () => {
        setTimeout(() => {
          wx.navigateBack({})
        }, 1000)
      })
    }
  },

  toBack: function () {
    wx.navigateBack({})
  },
})