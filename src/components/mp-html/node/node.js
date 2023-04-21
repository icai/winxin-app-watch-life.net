'use strict'
function t(e) {
  '@babel/helpers - typeof'
  return (t =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (t) {
          return typeof t
        }
      : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
        })(e)
}
function e() {
  function r(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }),
      t[e]
    )
  }
  function n(t, e, r, n) {
    var i = e && e.prototype instanceof a ? e : a,
      s = Object.create(i.prototype),
      c = new p(n || [])
    return (
      (s._invoke = (function (t, e, r) {
        var n = 'suspendedStart'
        return function (a, i) {
          if ('executing' === n) throw new Error('Generator is already running')
          if ('completed' === n) {
            if ('throw' === a) throw i
            return g()
          }
          for (r.method = a, r.arg = i; ; ) {
            var s = r.delegate
            if (s) {
              var c = l(s, r)
              if (c) {
                if (c === L) continue
                return c
              }
            }
            if ('next' === r.method) r.sent = r._sent = r.arg
            else if ('throw' === r.method) {
              if ('suspendedStart' === n) throw ((n = 'completed'), r.arg)
              r.dispatchException(r.arg)
            } else 'return' === r.method && r.abrupt('return', r.arg)
            n = 'executing'
            var u = o(t, e, r)
            if ('normal' === u.type) {
              if (((n = r.done ? 'completed' : 'suspendedYield'), u.arg === L)) continue
              return { value: u.arg, done: r.done }
            }
            'throw' === u.type && ((n = 'completed'), (r.method = 'throw'), (r.arg = u.arg))
          }
        }
      })(t, r, c)),
      s
    )
  }
  function o(t, e, r) {
    try {
      return { type: 'normal', arg: t.call(e, r) }
    } catch (t) {
      return { type: 'throw', arg: t }
    }
  }
  function a() {}
  function i() {}
  function s() {}
  function c(t) {
    ;['next', 'throw', 'return'].forEach(function (e) {
      r(t, e, function (t) {
        return this._invoke(e, t)
      })
    })
  }
  function u(e, r) {
    function n(a, i, s, c) {
      var u = o(e[a], e, i)
      if ('throw' !== u.type) {
        var l = u.arg,
          d = l.value
        return d && 'object' == t(d) && w.call(d, '__await')
          ? r.resolve(d.__await).then(
              function (t) {
                n('next', t, s, c)
              },
              function (t) {
                n('throw', t, s, c)
              }
            )
          : r.resolve(d).then(
              function (t) {
                ;(l.value = t), s(l)
              },
              function (t) {
                return n('throw', t, s, c)
              }
            )
      }
      c(u.arg)
    }
    var a
    this._invoke = function (t, e) {
      function o() {
        return new r(function (r, o) {
          n(t, e, r, o)
        })
      }
      return (a = a ? a.then(o, o) : o())
    }
  }
  function l(t, e) {
    var r = t.iterator[e.method]
    if (void 0 === r) {
      if (((e.delegate = null), 'throw' === e.method)) {
        if (t.iterator.return && ((e.method = 'return'), (e.arg = void 0), l(t, e), 'throw' === e.method)) return L
        ;(e.method = 'throw'), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
      }
      return L
    }
    var n = o(r, t.iterator, e.arg)
    if ('throw' === n.type) return (e.method = 'throw'), (e.arg = n.arg), (e.delegate = null), L
    var a = n.arg
    return a
      ? a.done
        ? ((e[t.resultName] = a.value), (e.next = t.nextLoc), 'return' !== e.method && ((e.method = 'next'), (e.arg = void 0)), (e.delegate = null), L)
        : a
      : ((e.method = 'throw'), (e.arg = new TypeError('iterator result is not an object')), (e.delegate = null), L)
  }
  function d(t) {
    var e = { tryLoc: t[0] }
    1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e)
  }
  function h(t) {
    var e = t.completion || {}
    ;(e.type = 'normal'), delete e.arg, (t.completion = e)
  }
  function p(t) {
    ;(this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(d, this), this.reset(!0)
  }
  function f(t) {
    if (t) {
      var e = t[x]
      if (e) return e.call(t)
      if ('function' == typeof t.next) return t
      if (!isNaN(t.length)) {
        var r = -1,
          n = function e() {
            for (; ++r < t.length; ) if (w.call(t, r)) return (e.value = t[r]), (e.done = !1), e
            return (e.value = void 0), (e.done = !0), e
          }
        return (n.next = n)
      }
    }
    return { next: g }
  }
  function g() {
    return { value: void 0, done: !0 }
  }
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ e = function () {
    return v
  }
  var v = {},
    y = Object.prototype,
    w = y.hasOwnProperty,
    m = 'function' == typeof Symbol ? Symbol : {},
    x = m.iterator || '@@iterator',
    b = m.asyncIterator || '@@asyncIterator',
    T = m.toStringTag || '@@toStringTag'
  try {
    r({}, '')
  } catch (t) {
    r = function (t, e, r) {
      return (t[e] = r)
    }
  }
  v.wrap = n
  var L = {},
    E = {}
  r(E, x, function () {
    return this
  })
  var k = Object.getPrototypeOf,
    _ = k && k(k(f([])))
  _ && _ !== y && w.call(_, x) && (E = _)
  var N = (s.prototype = a.prototype = Object.create(E))
  return (
    (i.prototype = s),
    r(N, 'constructor', s),
    r(s, 'constructor', i),
    (i.displayName = r(s, T, 'GeneratorFunction')),
    (v.isGeneratorFunction = function (t) {
      var e = 'function' == typeof t && t.constructor
      return !!e && (e === i || 'GeneratorFunction' === (e.displayName || e.name))
    }),
    (v.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, s) : ((t.__proto__ = s), r(t, T, 'GeneratorFunction')), (t.prototype = Object.create(N)), t
    }),
    (v.awrap = function (t) {
      return { __await: t }
    }),
    c(u.prototype),
    r(u.prototype, b, function () {
      return this
    }),
    (v.AsyncIterator = u),
    (v.async = function (t, e, r, o, a) {
      void 0 === a && (a = Promise)
      var i = new u(n(t, e, r, o), a)
      return v.isGeneratorFunction(e)
        ? i
        : i.next().then(function (t) {
            return t.done ? t.value : i.next()
          })
    }),
    c(N),
    r(N, T, 'Generator'),
    r(N, x, function () {
      return this
    }),
    r(N, 'toString', function () {
      return '[object Generator]'
    }),
    (v.keys = function (t) {
      var e = []
      for (var r in t) e.push(r)
      return (
        e.reverse(),
        function r() {
          for (; e.length; ) {
            var n = e.pop()
            if (n in t) return (r.value = n), (r.done = !1), r
          }
          return (r.done = !0), r
        }
      )
    }),
    (v.values = f),
    (p.prototype = {
      constructor: p,
      reset: function (t) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = void 0),
          this.tryEntries.forEach(h),
          !t)
        )
          for (var e in this) 't' === e.charAt(0) && w.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
      },
      stop: function () {
        this.done = !0
        var t = this.tryEntries[0].completion
        if ('throw' === t.type) throw t.arg
        return this.rval
      },
      dispatchException: function (t) {
        function e(e, n) {
          return (a.type = 'throw'), (a.arg = t), (r.next = e), n && ((r.method = 'next'), (r.arg = void 0)), !!n
        }
        if (this.done) throw t
        for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
          var o = this.tryEntries[n],
            a = o.completion
          if ('root' === o.tryLoc) return e('end')
          if (o.tryLoc <= this.prev) {
            var i = w.call(o, 'catchLoc'),
              s = w.call(o, 'finallyLoc')
            if (i && s) {
              if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
              if (this.prev < o.finallyLoc) return e(o.finallyLoc)
            } else if (i) {
              if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
            } else {
              if (!s) throw new Error('try statement without catch or finally')
              if (this.prev < o.finallyLoc) return e(o.finallyLoc)
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var n = this.tryEntries[r]
          if (n.tryLoc <= this.prev && w.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
            var o = n
            break
          }
        }
        o && ('break' === t || 'continue' === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null)
        var a = o ? o.completion : {}
        return (a.type = t), (a.arg = e), o ? ((this.method = 'next'), (this.next = o.finallyLoc), L) : this.complete(a)
      },
      complete: function (t, e) {
        if ('throw' === t.type) throw t.arg
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
            ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
            : 'normal' === t.type && e && (this.next = e),
          L
        )
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e]
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), h(r), L
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e]
          if (r.tryLoc === t) {
            var n = r.completion
            if ('throw' === n.type) {
              var o = n.arg
              h(r)
            }
            return o
          }
        }
        throw new Error('illegal catch attempt')
      },
      delegateYield: function (t, e, r) {
        return (this.delegate = { iterator: f(t), resultName: e, nextLoc: r }), 'next' === this.method && (this.arg = void 0), L
      }
    }),
    v
  )
}
function r(t, e, r, n, o, a, i) {
  try {
    var s = t[a](i),
      c = s.value
  } catch (t) {
    return void r(t)
  }
  s.done ? e(c) : Promise.resolve(c).then(n, o)
}
function n(t) {
  return function () {
    var e = this,
      n = arguments
    return new Promise(function (o, a) {
      function i(t) {
        r(c, o, a, i, s, 'next', t)
      }
      function s(t) {
        r(c, o, a, i, s, 'throw', t)
      }
      var c = t.apply(e, n)
      i(void 0)
    })
  }
}
function o(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (t[e] = r),
    t
  )
}
Component({
  data: { ctrl: {}, isiOS: wx.getSystemInfoSync().system.includes('iOS') },
  properties: { childs: Array, opts: Array },
  options: { addGlobalClass: !0 },
  attached: function () {
    this.triggerEvent('add', this, { bubbles: !0, composed: !0 })
  },
  methods: {
    copyCode: function (t) {
      wx.showActionSheet({
        itemList: ['复制代码'],
        success: function () {
          return wx.setClipboardData({ data: t.currentTarget.dataset.content })
        }
      })
    },
    noop: function () {},
    getNode: function (t) {
      try {
        for (var e = t.split('_'), r = this.data.childs[e[0]], n = 1; n < e.length; n++) r = r.children[e[n]]
        return r
      } catch (t) {
        return { text: '', attrs: {}, children: [] }
      }
    },
    play: function (t) {
      if ((this.root.triggerEvent('play'), this.root.data.pauseVideo)) {
        for (var e = !1, r = t.target.id, n = this.root._videos.length; n--; ) this.root._videos[n].id === r ? (e = !0) : this.root._videos[n].pause()
        if (!e) {
          var o = wx.createVideoContext(r, this)
          ;(o.id = r), this.root.playbackRate && o.playbackRate(this.root.playbackRate), this.root._videos.push(o)
        }
      }
    },
    imgTap: function (t) {
      var e = this.getNode(t.target.dataset.i)
      if (e.a) return this.linkTap(e.a)
      if (!e.attrs.ignore && (this.root.triggerEvent('imgtap', e.attrs), this.root.data.previewImg)) {
        var r = this.root.imgList[e.i]
        wx.previewImage({
          showmenu: this.root.data.showImgMenu,
          current: r,
          urls: this.root.imgList
        })
      }
    },
    imgLoad: function (t) {
      var e,
        r = t.target.dataset.i,
        n = this.getNode(r)
      n.w ? ((this.data.opts[1] && !this.data.ctrl[r]) || -1 === this.data.ctrl[r]) && (e = 1) : (e = t.detail.width), e && this.setData(o({}, 'ctrl.' + r, e)), this.checkReady()
    },
    checkReady: function () {
      var t = this
      this.root.data.lazyLoad ||
        ((this.root.imgList._unloadimgs -= 1),
        this.root.imgList._unloadimgs ||
          setTimeout(function () {
            t.root.getRect().then(function (e) {
              t.root.triggerEvent('ready', e)
            })
          }, 350))
    },
    linkTap: function (t) {
      var e = t.currentTarget ? this.getNode(t.currentTarget.dataset.i) : {},
        r = e.attrs || t,
        n = r.href
      this.root.triggerEvent('linktap', Object.assign({ innerText: this.root.getText(e.children || []) }, r)),
        n &&
          ('#' === n[0]
            ? this.root.navigateTo(n.substring(1)).catch(function () {})
            : n.split('?')[0].includes('://')
            ? this.root.data.copyLink &&
              wx.setClipboardData({
                data: n,
                success: function () {
                  return wx.showToast({ title: '链接已复制' })
                }
              })
            : wx.navigateTo({
                url: n,
                fail: function () {
                  wx.switchTab({ url: n, fail: function () {} })
                }
              }))
    },
    mediaError: function (t) {
      var e = t.target.dataset.i,
        r = this.getNode(e)
      if ('video' === r.name || 'audio' === r.name) {
        var n = (this.data.ctrl[e] || 0) + 1
        if ((n > r.src.length && (n = 0), n < r.src.length)) return this.setData(o({}, 'ctrl.' + e, n))
      } else 'img' === r.name && (this.data.opts[2] && this.setData(o({}, 'ctrl.' + e, -1)), this.checkReady())
      this.root &&
        this.root.triggerEvent('error', {
          source: r.name,
          attrs: r.attrs,
          errMsg: t.detail.errMsg
        })
    },
    previewImage: function (t) {
      var e = t.currentTarget.dataset.imgallsrc,
        r = t.currentTarget.dataset.imgsrc
      wx.previewImage({ current: r, urls: e })
    },
    goTo: function (t) {
      var e = t.currentTarget.dataset.appid,
        r = t.currentTarget.dataset.redirectype,
        n = t.currentTarget.dataset.path,
        o = t.currentTarget.dataset.url,
        a = t.currentTarget.dataset.jumptype
      'apppage' == r
        ? wx.navigateTo({ url: n })
        : 'webpage' == r
        ? ((o = '../webview/webview?url=' + o), wx.navigateTo({ url: o }))
        : 'miniapp' == r && ('embedded' == a ? wx.openEmbeddedMiniProgram({ appId: e, path: n }) : wx.navigateToMiniProgram({ appId: e, path: n }))
    },
    goChannels: function (t) {
      var e = t.currentTarget.dataset.channelsid
      wx.openChannelsUserProfile({ finderUserName: e })
    },
    openActivity: function (t) {
      var e = t.currentTarget.dataset.channelsid,
        r = t.currentTarget.dataset.feedid
      wx.openChannelsActivity({ finderUserName: e, feedId: r })
    },
    openEvent: function (t) {
      var e = t.currentTarget.dataset.channelsid,
        r = t.currentTarget.dataset.eventid
      wx.openChannelsEvent({ finderUserName: e, eventId: r })
    },
    goToSinshopproduct: function (t) {
      var e = t.currentTarget.dataset.path
      wx.navigateTo({ url: e })
    },
    openmap: function (t) {
      var e = Number(t.currentTarget.dataset.latitude),
        r = Number(t.currentTarget.dataset.longitude),
        n = t.currentTarget.dataset.address,
        o = t.currentTarget.dataset.title
      wx.openLocation({
        latitude: e,
        longitude: r,
        scale: 15,
        name: o,
        address: n
      })
    },
    onTapATag: function (t) {
      var e = t.currentTarget.dataset.src,
        r = t.currentTarget.dataset.appid,
        n = t.currentTarget.dataset.redirectype,
        o = t.currentTarget.dataset.path
      if (/\.(doc|docx|xls|xlsx|ppt|pptx|pdf)$/.test(e)) return void this.openLinkDoc(t)
      n
        ? 'apppage' == n
          ? wx.navigateTo({ url: o })
          : 'webpage' == n
          ? ((e = '../webview/webview?url=' + e), wx.navigateTo({ url: e }))
          : 'miniapp' == n && wx.navigateToMiniProgram({ appId: r, path: o })
        : wx.setClipboardData({
            data: e,
            success: function () {
              return wx.showToast({ title: '链接已复制' })
            }
          })
    },
    onbaiPanCopy: function (t) {
      var e = t.currentTarget.dataset.code
      if (!e)
        return void wx.showToast({
          title: '提取码不存在！',
          icon: 'none',
          duration: 3e3
        })
      wx.setClipboardData({
        data: e,
        success: function (t) {
          wx.getClipboardData({
            success: function (t) {
              wx.showToast({
                title: '复制成功',
                icon: 'success',
                duration: 3e3
              })
            }
          })
        }
      })
    },
    onbaiduPanOpen: function (t) {
      var e = t.currentTarget.dataset.key
      if (e) {
        var r = 'pages/netdisk_share/share?scene='.concat(e)
        wx.navigateToMiniProgram({ appId: 'wxdcd3d073e47d1742', path: r })
      } else wx.showToast({ title: '链接不存在！', icon: 'none', duration: 3e3 })
    },
    openLinkDoc: function (t) {
      return n(
        e().mark(function r() {
          var n, o, a, i, s, c, u, l
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (a = t.currentTarget.dataset.src || ''), (e.next = 3), getApp().$api.getBaseConfig()
                case 3:
                  if (
                    ((i = e.sent),
                    console.log('domains'),
                    console.log(i),
                    (s = i.settings || {}),
                    (c = (s.downloadfile_domain && s.downloadfile_domain.split(',')) || []),
                    (u = c.find(function (t) {
                      return a.includes(t)
                    })))
                  ) {
                    e.next = 12
                    break
                  }
                  return (
                    wx.setClipboardData({
                      data: a,
                      success: function () {
                        return wx.showToast({ title: '链接已复制' })
                      }
                    }),
                    e.abrupt('return')
                  )
                case 12:
                  ;(l = /\.(doc|docx|xls|xlsx|ppt|pptx|pdf)$/.test(a)),
                    a && l ? ((n = a), (o = /doc|docx|xls|xlsx|ppt|pptx|pdf$/.exec(a)[0])) : ((n = t.currentTarget.dataset.filelink), (o = t.currentTarget.dataset.filetype)),
                    wx.downloadFile({
                      url: n,
                      success: function (t) {
                        var e = t.tempFilePath
                        wx.openDocument({ showMenu: !0, filePath: e })
                      }
                    })
                case 15:
                case 'end':
                  return e.stop()
              }
          }, r)
        })
      )()
    }
  }
})
