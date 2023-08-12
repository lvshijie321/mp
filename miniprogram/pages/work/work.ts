Component({
  data: {
    tips: [{
      icon: './images/gongneng1.png',
      label: '功能1'
    }, {
      icon: './images/gongneng2.png',
      label: '功能2'
    }, {
      icon: './images/gongneng3.png',
      label: '功能3'
    }, {
      icon: './images/gongneng4.png',
      label: '功能4'
    }, {
      icon: './images/gongneng5.png',
      label: '功能5'
    },],
    walls: [
      {
        icon: '/image/icon_API_HL.png',
        label: '功能A'
      }, {
        icon: '/image/icon_API_HL.png',
        label: '功能B'
      }, {
        icon: '/image/icon_API_HL.png',
        label: '功能C'
      }, {
        icon: '/image/icon_API_HL.png',
        label: '功能D'
      }, {
        icon: '/image/icon_API_HL.png',
        label: '功能E'
      }, {
        icon: '/image/icon_API_HL.png',
        label: '功能F'
      }, {
        icon: '/image/icon_API_HL.png',
        label: '功能G'
      }, {
        icon: '/image/icon_API_HL.png',
        label: '功能H'
      }, {
        icon: '/image/icon_API_HL.png',
        label: '功能I'
      }, {
        icon: '/image/icon_API_HL.png',
        label: '功能j'
      }, {
        placeholder: true
      }, {
        placeholder: true
      },
    ],
    show: false,
    feature: {
      name: '',
      list: []
    }
  },
  methods: {

    onTapWallItem(e: any) {
      const { label } = e.currentTarget.dataset.item

      this.setData({
        show: true,
        feature: {
          list: Array.from({ length: 10 }).map((_item, index) => {
            return {
              label: `功能${index + 1}`,
              image: '/image/icon_API_HL.png'
            }
          }),
          name: label
        }

      })
    },
    onClose() {
      this.setData({
        show: false
      })
    }

  },
})
