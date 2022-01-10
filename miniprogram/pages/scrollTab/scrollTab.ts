Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabList: [
      { id: 'accountTab', index: 0, content: '账号登录', children: '1' },
      { id: 'verifyCodeTab', index: 1, content: '验证码登录', children: '2' }
    ],
    navType: 0,
    navScrollLeft: 0, // tab nav滚动位置(一页显示的时候用不上)
    navLinkWidth: 100, // 当前tab底部栏宽度
    navLinkLeft: 32, // 当前tab底部栏位置
  },
  /**
   * tab事件处理函数
   */
  bindViewTab(event: any) {
    const tmpType = event.currentTarget.dataset.type;
    if (tmpType !== undefined) {
      this.setData({
        navType: tmpType,
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
   * tab滑动监听
   */
  switchTab(event: any) {
    let cur = event.detail.current;
    let tmpType = cur ? 'verifyCodeTab' : 'accountTab';
    this.data.tabList.forEach((item) => {
      if (item.index === cur) {
        tmpType = item.id
      }
    });
    this.getElePlace(tmpType);
    this.setData({
      navType: cur,
    });
  }
})