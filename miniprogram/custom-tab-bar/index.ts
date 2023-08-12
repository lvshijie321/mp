Component({
  data: {
    selectedIndex: 0,
    list: [{
      pagePath: "/work/work",
      iconPath: "comment",
      text: "工作"
    }, {
      pagePath: "/help/help",
      iconPath: "phone-circle-o",
      text: "助手"
    }, {
      pagePath: "/home/home",
      iconPath: "plus",
      text: "常用",
      main: true
    }, {
      pagePath: "/analysis/analysis",
      iconPath: "chart-trending-o",
      text: "分析"
    }, {
      pagePath: "/me/me",
      iconPath: "manager-o",
      text: "我"
    }]
  },
  methods: {
    switchTab(e: { currentTarget: { dataset: any } }) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selectedIndex: data.index
      })
    }
  }
})