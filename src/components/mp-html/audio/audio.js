'use strict'
import t from './context'
Component({
  data: { time: '00:00' },
  properties: {
    name: String,
    author: String,
    poster: String,
    autoplay: Boolean,
    controls: Boolean,
    loop: Boolean,
    src: {
      type: String,
      observer: function (t) {
        this.setSrc(t)
      }
    }
  },
  created: function () {
    var t = this
    ;(this._ctx = wx.createInnerAudioContext()),
      wx.setInnerAudioOption({ obeyMuteSwitch: !1 }),
      this._ctx.onError(function (i) {
        t.setData({ error: !0 }), t.triggerEvent('error', i)
      }),
      this._ctx.onTimeUpdate(function () {
        var i = t._ctx.currentTime,
          e = parseInt(i / 60),
          a = Math.ceil(i % 60),
          s = {}
        ;(s.time = (e > 9 ? e : '0' + e) + ':' + (a > 9 ? a : '0' + a)), t.lastTime || (s.value = (i / t._ctx.duration) * 100), t.setData(s)
      }),
      this._ctx.onEnded(function () {
        t.data.loop || t.setData({ playing: !1 })
      })
  },
  attached: function () {
    t.set(this.id, this)
  },
  detached: function () {
    this._ctx.destroy(), t.remove(this.id)
  },
  pageLifetimes: {
    show: function () {
      this.data.playing && this._ctx.paused && this._ctx.play()
    }
  },
  methods: {
    setSrc: function (t) {
      ;(this._ctx.autoplay = this.data.autoplay), (this._ctx.loop = this.data.loop), (this._ctx.src = t), this.data.autoplay && !this.data.playing && this.setData({ playing: !0 })
    },
    play: function () {
      this._ctx.play(), this.setData({ playing: !0 }), this.triggerEvent('play')
    },
    pause: function () {
      this._ctx.pause(), this.setData({ playing: !1 }), this.triggerEvent('pause')
    },
    playbackRate: function (t) {
      this._ctx.playbackRate = t
    },
    stop: function () {
      this._ctx.stop(), this.setData({ playing: !1, time: '00:00' }), this.triggerEvent('stop')
    },
    seek: function (t) {
      this._ctx.seek(t)
    },
    _seeking: function (t) {
      if (!(t.timeStamp - this.lastTime < 200)) {
        var i = Math.round((t.detail.value / 100) * this._ctx.duration),
          e = parseInt(i / 60),
          a = i % 60
        this.setData({
          time: (e > 9 ? e : '0' + e) + ':' + (a > 9 ? a : '0' + a)
        }),
          (this.lastTime = t.timeStamp)
      }
    },
    _seeked: function (t) {
      this._ctx.seek((t.detail.value / 100) * this._ctx.duration), (this.lastTime = void 0)
    }
  }
})
