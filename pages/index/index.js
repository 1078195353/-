// Pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo:null,
      isShow:true,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getUserInfo()
  },
  getUserInfo(){
    // //判断用户是否授权 
      wx.getSetting({
        success:(data) =>{
          //用戶已經授權
          if(data.authSetting['scope.userInfo']){
            this.setData({
              isShow : false
            })
          }else{
            // 没有授权
            this.setData({
              isShow:true
            })
          }
        }
      })
    //获取用户登录信息
    wx.getUserInfo({
      success : (data) =>{
        this.setData({
          userInfo : data.userInfo
        }) 
      },
      fail: () =>{
        console.log('获取用户信息失败')
      }
    })
    
  },
  handleGetUserInfo(data){
    if(data.detail.rawData){
      //用户点击的是允许 刷新页面
      // this.onLoad()
      this.getUserInfo()
      
    }
  },
  handleClick(){
      wx.navigateTo({
        //注意这里 需要在pages前面添加 / 表示根路径
        url:"/pages/list/list",
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})