// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    // 参与页面渲染的数据
    logs: [],
  },
  onLoad() {
    // 页面渲染后执行
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      }),
    })
  },
})
