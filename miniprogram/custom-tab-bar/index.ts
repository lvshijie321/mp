Component({
  data: {
    selectedIndex: 0,
    list: [{
      pagePath: "/pages/work/work",
      iconPath: "comment",
      text: "工作"
    }, {
      pagePath: "/pages/help/help",
      iconPath: "phone-circle-o",
      text: "助手"
    }, {
      pagePath: "/pages/home/home",
      iconPath: "plus",
      text: "常用",
      main: true
    }, {
      pagePath: "/pages/analysis/analysis",
      iconPath: "chart-trending-o",
      text: "分析"
    }, {
      pagePath: "/pages/me/me",
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