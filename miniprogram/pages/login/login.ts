// pages/login/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTypeData: {
      0: 'accountTab',
      1: 'verifyCodeTab'
    },
    navType: 0,
    navScrollLeft: 0,
    navLinkWidth: 100,
    navLinkLeft: 32,
  },
  /**
   * tab事件处理函数
   */
  bindViewTab(event: any) {
    const tmpType = event.currentTarget.dataset.type;
    if (tmpType === 0) {
      this.setData({
        navType: 0,
      });
    } else if (tmpType === 1) {
      this.setData({
        navType: 1,
      });
    }
  },

  /**
   * 获取元素左侧距离及宽度
   */
  getElePlace(id: string) {
    let _self = this;
    wx.createSelectorQuery()
      .select(`#${id}`)
      .boundingClientRect()
      .exec(
        // 执行所有的请求
        // 请求结果按请求次序构成数组，在callback的第一个参数中返回
        function (rect) {
          _self.setPseudoElePlace(rect[0].width, rect[0].left);
        }
      );
  },

  /**
   * 设置tab底部伪元素位置
   */
  setPseudoElePlace(width: number, left: number) {
    this.setData({
      navLinkWidth: width * 0.8,
      navLinkLeft: left + (width * 0.1)
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getElePlace('accountTab');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  /**
   * tab滑动监听
   */
  switchTab(event: any) {
    let cur = event.detail.current;
    let tmpType = cur ? 'verifyCodeTab' : 'accountTab';
    this.getElePlace(tmpType);
    this.setData({
      navType: cur,
    });
  }
})