Component({
  data: {
    _uid: '',
    content: {},
    fixed: true
  },
  options: {
    addGlobalClass: true
  },
  properties: {
    noNav: {
      type: Boolean,
      value: false
    },
    noSafe: {
      type: Boolean,
      value: false
    },
    bottom: {
      type: Boolean,
      value: false
    },
    bg: {
      type: String,
      value: 'bg-none'
    },
    val: {
      type: Number,
      value: 0
    },
    width: {
      type: Number,
      optionalTypes: String,
      value: 0
    },
    opacity: {
      type: Boolean,
      value: false
    },
    opacityVal: {
      type: Number,
      value: 0
    },
    zIndex: {
      type: Number,
      optionalTypes: String,
      value: 10001
    },
    placeholder: {
      type: Boolean,
      value: false
    },
    sticky: {
      type: Boolean,
      value: false
    },
    noFixed: {
      type: Boolean,
      value: false
    },
    ui: {
      type: String,
      value: ''
    },
    clickTo: {
      type: Boolean,
      value: false
    },
    scrollTop: {
      type: Number,
      optionalTypes: String,
      value: 0
    }
  },
  lifetimes: {
    created() {},
    attached() {
      let _uid = this.getRandom(8)
      this.setData({ _uid: _uid })
    },
    ready() {
      if (this.data.sticky) {
        this.setData({ fixed: false })
      }
      this._computedQuery()
    }
  },
  observers: {
    scrollTop(val) {
      if (this.data.sticky) {
        this._setFixed(val)
      }
    },
    noFixed(val) {
      if (val) {
        this.setData({ fixed: false })
      }
    }
  },
  methods: {
    //生成随机字符串
    getRandom(num) {
      let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let maxPos = chars.length,
        value = ''
      for (let i = 0; i < num; i++) {
        value += chars.charAt(Math.floor(Math.random() * maxPos))
      }
      return value
    },
    _computedQuery() {
      console.log('computedQuery')
      let _this = this
      /* #ifdef wechat */
      wx.createSelectorQuery()
        .in(_this)
        .select('#fixed-' + _this.data._uid)
        .boundingClientRect((data) => {
          console.log(data, 'createSelectorQuery-data')
          if (data != null) {
            _this.setData({ content: data })
            if (_this.data.sticky) {
              _this._setFixed(_this.data.scrollTop)
            }
          } else {
            console.log('fixed-' + _this.data._uid + ' data error')
          }
        })
        .exec()
      /* #endif */
      /* #ifdef alipay */
      my.createSelectorQuery()
        .select('#fixed-' + _this.data._uid)
        .boundingClientRect()
        .selectViewport()
        .exec((data) => {
          console.log(data, 'createSelectorQuery-data')
          if (data != null) {
            _this.setData({ content: data[0] })
            if (_this.data.sticky) {
              _this._setFixed(_this.data.scrollTop)
            }
          } else {
            console.log('fixed-' + _this.data._uid + ' data error')
          }
        })
      /* #endif */
    },
    _setFixed(value) {
      let { bottom, content, noNav, val, sys_navBar } = this.data
      if (bottom) {
        let fixed = value >= content.bottom - wx.getSystemInfoSync().windowHeight + content.height + val
        this.setData({ fixed: fixed })
      } else {
        let fixed = value >= content.top - (noNav ? this.data.val : val + sys_navBar)
        this.setData({ fixed: fixed })
      }
    },
    _toTop() {
      let { clickTo, content } = this.data
      if (clickTo) {
        wx.pageScrollTo({
          scrollTop: content.top,
          duration: 100
        })
      }
    }
  }
})
