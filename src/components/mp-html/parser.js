'use strict'
function t(t) {
  for (var e = Object.create(null), i = t.split(','), s = i.length; s--; ) e[i[s]] = !0
  return e
}
function e(t, e) {
  for (var i = t.indexOf('&'); -1 !== i; ) {
    var s = t.indexOf(';', i + 3),
      a = void 0
    if (-1 === s) break
    '#' === t[i + 1]
      ? ((a = parseInt(('x' === t[i + 2] ? '0' : '') + t.substring(i + 2, s))), isNaN(a) || (t = t.substr(0, i) + String.fromCharCode(a) + t.substr(s + 1)))
      : ((a = t.substring(i + 1, s)), (n.entities[a] || ('amp' === a && e)) && (t = t.substr(0, i) + (n.entities[a] || '&') + t.substr(s + 1))),
      (i = t.indexOf('&', i + 1))
  }
  return t
}
function i(t) {
  for (var e = t.length - 1, i = e; i >= -1; i--)
    (-1 === i || t[i].c || !t[i].name || ('div' !== t[i].name && 'p' !== t[i].name && 'h' !== t[i].name[0]) || (t[i].attrs.style || '').includes('inline')) &&
      (e - i >= 5 &&
        t.splice(i + 1, e - i, {
          name: 'div',
          attrs: {},
          children: t.slice(i + 1, e + 1)
        }),
      (e = i - 1))
}
function s(t) {
  ;(this.options = t.data || {}),
    (this.tagStyle = Object.assign({}, n.tagStyle, this.options.tagStyle)),
    (this.imgList = t.imgList || []),
    (this.imgList._unloadimgs = 0),
    (this.plugins = t.plugins || []),
    (this.attrs = Object.create(null)),
    (this.stack = []),
    (this.nodes = []),
    (this.pre = (this.options.containerStyle || '').includes('white-space') && this.options.containerStyle.includes('pre') ? 2 : 0)
}
function a(t) {
  this.handler = t
}
var n = {
    trustTags: t(
      'a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video,minappershortcode,minapperad,minappermap,minapperglobalgoods,minappergoods,baidupan,minappergallery,minapperqqvideo,minapperchannelsactivity,minapperchannelsevent,minapperchannels'
    ),
    blockTags: t(
      'address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section,minappershortcode,minapperad,minappermap,minapperglobalgoods,minappergoods,baidupan,minappergallery,minapperqqvideo,minapperchannelsactivity,minapperchannelsevent,minapperchannels'
    ),
    ignoreTags: t('area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr'),
    voidTags: t(
      'area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr,minappershortcode,minapperad,minappermap,minapperglobalgoods,minappergoods,baidupan,minappergallery,minapperqqvideo,minapperchannelsactivity,minapperchannelsevent,minapperchannels'
    ),
    entities: {
      lt: '<',
      gt: '>',
      quot: '"',
      apos: "'",
      ensp: ' ',
      emsp: ' ',
      nbsp: ' ',
      semi: ';',
      ndash: '–',
      mdash: '—',
      middot: '·',
      lsquo: '‘',
      rsquo: '’',
      ldquo: '“',
      rdquo: '”',
      bull: '•',
      hellip: '…',
      larr: '←',
      uarr: '↑',
      rarr: '→',
      darr: '↓'
    },
    tagStyle: {
      address: 'font-style:italic',
      big: 'display:inline;font-size:1.2em',
      caption: 'display:table-caption;text-align:center',
      center: 'text-align:center',
      cite: 'font-style:italic',
      dd: 'margin-left:40px',
      mark: 'background-color:yellow',
      pre: 'font-family:monospace;white-space:pre',
      s: 'text-decoration:line-through',
      small: 'display:inline;font-size:0.8em',
      strike: 'text-decoration:line-through',
      u: 'text-decoration:underline'
    },
    svgDict: {
      animatetransform: 'animateTransform',
      lineargradient: 'linearGradient',
      viewbox: 'viewBox',
      attributename: 'attributeName',
      repeatcount: 'repeatCount',
      repeatdur: 'repeatDur'
    }
  },
  r = {},
  o = wx.getSystemInfoSync(),
  l = o.windowWidth,
  h = o.system,
  c = t(' ,\r,\n,\t,\f'),
  p = 0
;(s.prototype.parse = function (t) {
  for (var e = this.plugins.length; e--; ) this.plugins[e].onUpdate && (t = this.plugins[e].onUpdate(t, n) || t)
  for (new a(this).parse(t); this.stack.length; ) this.popNode()
  return this.nodes.length > 50 && i(this.nodes), this.nodes
}),
  (s.prototype.expose = function () {
    for (var t = this.stack.length; t--; ) {
      var e = this.stack[t]
      if (
        'minappershortcode' === e.name ||
        'minapperad' === e.name ||
        'minappermap' === e.name ||
        'minapperglobalgoods' === e.name ||
        'minappergoods' === e.name ||
        'minappergallery' === e.name ||
        'minapperqqvideo' === e.name ||
        'minapperchannelsactivity' === e.name ||
        'minapperchannelsevent' === e.name ||
        'minapperchannels' === e.name
      )
        return
      if (e.c || 'a' === e.name || 'video' === e.name || 'audio' === e.name) return
      e.c = 1
    }
  }),
  (s.prototype.hook = function (t) {
    for (var e = this.plugins.length; e--; ) if (this.plugins[e].onParse && !1 === this.plugins[e].onParse(t, this)) return !1
    return !0
  }),
  (s.prototype.getUrl = function (t) {
    var e = this.options.domain
    return (
      '/' === t[0] ? ('/' === t[1] ? (t = (e ? e.split('://')[0] : 'http') + ':' + t) : e && (t = e + t)) : !e || t.includes('data:') || t.includes('://') || (t = e + '/' + t), t
    )
  }),
  (s.prototype.parseStyle = function (t) {
    var e = t.attrs,
      i = (this.tagStyle[t.name] || '').split(';').concat((e.style || '').split(';')),
      s = {},
      a = ''
    if (
      (e.id && !this.xml && (this.options.useAnchor ? this.expose() : 'img' !== t.name && 'a' !== t.name && 'video' !== t.name && 'audio' !== t.name && (e.id = void 0)),
      e.width && ((s.width = parseFloat(e.width) + (e.width.includes('%') ? '%' : 'px')), (e.width = void 0)),
      e.height)
    ) {
      if ('video' === t.name) {
        var n = e.height.includes('%')
        s.height = n ? void 0 : parseFloat(e.height) + 'px'
      } else s.height = parseFloat(e.height) + (e.height.includes('%') ? '%' : 'px')
      e.height = void 0
    }
    for (var r = 0, o = i.length; r < o; r++) {
      var h = i[r].split(':')
      if (!(h.length < 2)) {
        var p = h.shift().trim().toLowerCase(),
          d = h.join(':').trim()
        if (('-' === d[0] && d.lastIndexOf('-') > 0) || d.includes('safe')) a += ';'.concat(p, ':').concat(d)
        else if (!s[p] || d.includes('import') || !s[p].includes('import')) {
          if (d.includes('url')) {
            var m = d.indexOf('(') + 1
            if (m) {
              for (; '"' === d[m] || "'" === d[m] || c[d[m]]; ) m++
              d = d.substr(0, m) + this.getUrl(d.substr(m))
            }
          } else
            d.includes('rpx') &&
              (d = d.replace(/[0-9.]+\s*rpx/g, function (t) {
                return (parseFloat(t) * l) / 750 + 'px'
              }))
          s[p] = d
        }
      }
    }
    return (t.attrs.style = a), s
  }),
  (s.prototype.onTagName = function (t) {
    ;(this.tagName = this.xml ? t : t.toLowerCase()), 'svg' === this.tagName && (this.xml = (this.xml || 0) + 1)
  }),
  (s.prototype.onAttrName = function (t) {
    ;(t = this.xml ? t : t.toLowerCase()),
      'data-' === t.substr(0, 5)
        ? 'data-src' !== t || this.attrs.src
          ? 'img' === this.tagName || 'a' === this.tagName
            ? (this.attrName = t)
            : (this.attrName = void 0)
          : (this.attrName = 'src')
        : ((this.attrName = t), (this.attrs[t] = 'T'))
  }),
  (s.prototype.onAttrVal = function (t) {
    var i = this.attrName || ''
    'style' === i || 'href' === i ? (this.attrs[i] = e(t, !0)) : i.includes('src') ? (this.attrs[i] = this.getUrl(e(t, !0))) : i && (this.attrs[i] = t)
  }),
  (s.prototype.onOpenTag = function (t) {
    var e = Object.create(null)
    ;(e.name = this.tagName), (e.attrs = this.attrs), (this.attrs = Object.create(null))
    var i = e.attrs,
      s = this.stack[this.stack.length - 1],
      a = s ? s.children : this.nodes,
      o = this.xml ? t : n.voidTags[e.name]
    if ((r[e.name] && (i.class = r[e.name] + (i.class ? ' ' + i.class : '')), 'embed' === e.name)) {
      var h = i.src || ''
      h.includes('.mp4') || h.includes('.3gp') || h.includes('.m3u8') || (i.type || '').includes('video')
        ? (e.name = 'video')
        : (h.includes('.mp3') || h.includes('.wav') || h.includes('.aac') || h.includes('.m4a') || (i.type || '').includes('audio')) && (e.name = 'audio'),
        i.autostart && (i.autoplay = 'T'),
        (i.controls = 'T')
    }
    if (
      (('video' !== e.name && 'audio' !== e.name) ||
        ('video' !== e.name || i.id || (i.id = 'v' + p++),
        i.controls || i.autoplay || (i.controls = 'T'),
        (e.src = []),
        i.src && (e.src.push(i.src), (i.src = void 0)),
        this.expose()),
      'minappergallery' === e.name)
    ) {
      var c = i.images || '',
        d = c.split(',http') || [],
        m = []
      if (d && d.length) {
        var g = d.map(function (t, e) {
          return e && (t = 'http' + t), t
        })
        m = g.map(function (t, e) {
          var i = {}
          return (i.imageurl = t), (i.id = e), (i.allimages = g), i
        })
      }
      i.images = m
    }
    if ('minappermap' === e.name) {
      var u = [],
        f = {},
        v = {
          latitude: i.latitude,
          longitude: i.longitude,
          title: i.title,
          width: 30,
          height: 40,
          id: 1
        }
      ;(f.display = 'ALWAYS'), (f.content = i.title), (f.fontSize = 16), (v.callout = f), u.push(v), (i.markers = u)
    }
    if (
      (('minappershortcode' !== e.name &&
        'minapperad' !== e.name &&
        'minappermap' !== e.name &&
        'minapperglobalgoods' !== e.name &&
        'minappergoods' !== e.name &&
        'minappergallery' !== e.name &&
        'minapperchannelsactivity' !== e.name &&
        'minapperchannelsevent' !== e.name &&
        'minapperchannels' !== e.name) ||
        this.expose(),
      o)
    ) {
      if (!this.hook(e) || n.ignoreTags[e.name])
        return void ('base' !== e.name || this.options.domain
          ? 'source' === e.name && s && ('video' === s.name || 'audio' === s.name) && i.src && s.src.push(i.src)
          : (this.options.domain = i.href))
      var y = this.parseStyle(e)
      if ('img' === e.name) {
        if (
          i.src &&
          (i.src.includes('webp') && (e.webp = 'T'), i.src.includes('data:') && !i['original-src'] && (i.ignore = 'T'), !i.ignore || e.webp || i.src.includes('cloud://'))
        ) {
          for (var x = this.stack.length; x--; ) {
            var b = this.stack[x]
            'a' === b.name && (e.a = b.attrs),
              'table' !== b.name ||
                e.webp ||
                i.src.includes('cloud://') ||
                (!y.display || y.display.includes('inline') ? (e.t = 'inline-block') : (e.t = y.display), (y.display = void 0))
            var w = b.attrs.style || ''
            if (!w.includes('flex:') || w.includes('flex:0') || w.includes('flex: 0') || (y.width && !(parseInt(y.width) > 100)))
              if (w.includes('flex') && '100%' === y.width)
                for (var k = x + 1; k < this.stack.length; k++) {
                  var N = this.stack[k].attrs.style || ''
                  if (!N.includes(';width') && !N.includes(' width') && 0 !== N.indexOf('width')) {
                    y.width = ''
                    break
                  }
                }
              else
                w.includes('inline-block') &&
                  (y.width && '%' === y.width[y.width.length - 1] ? ((b.attrs.style += ';max-width:' + y.width), (y.width = '')) : (b.attrs.style += ';max-width:100%'))
            else {
              ;(y.width = '100% !important'), (y.height = '')
              for (var T = x + 1; T < this.stack.length; T++) this.stack[T].attrs.style = (this.stack[T].attrs.style || '').replace('inline-', '')
            }
            b.c = 1
          }
          e.i = this.imgList.length
          var O = i['original-src'] || i.src
          if (this.imgList.includes(O)) {
            var q = O.indexOf('://')
            if (-1 !== q) {
              q += 3
              for (var C = O.substr(0, q); q < O.length && '/' !== O[q]; q++) C += Math.random() > 0.5 ? O[q].toUpperCase() : O[q]
              ;(C += O.substr(q)), (O = C)
            }
          }
          this.imgList.push(O), e.t || (this.imgList._unloadimgs += 1)
        }
        'inline' === y.display && (y.display = ''),
          i.ignore && ((y['max-width'] = y['max-width'] || '100%'), (i.style += ';-webkit-touch-callout:none')),
          parseInt(y.width) > l && (y.height = void 0),
          isNaN(parseInt(y.width)) || (e.w = 'T'),
          !isNaN(parseInt(y.height)) && (!y.height.includes('%') || (s && (s.attrs.style || '').includes('height'))) && (e.h = 'T')
      } else if ('svg' === e.name) return a.push(e), this.stack.push(e), void this.popNode()
      for (var S in y) y[S] && (i.style += ';'.concat(S, ':').concat(y[S].replace(' !important', '')))
      i.style = i.style.substr(1) || void 0
    } else
      ('pre' === e.name || ((i.style || '').includes('white-space') && i.style.includes('pre'))) && 2 !== this.pre && (this.pre = e.pre = 1), (e.children = []), this.stack.push(e)
    a.push(e)
  }),
  (s.prototype.onCloseTag = function (t) {
    t = this.xml ? t : t.toLowerCase()
    var e
    for (e = this.stack.length; e-- && this.stack[e].name !== t; );
    if (-1 !== e) for (; this.stack.length > e; ) this.popNode()
    else if ('p' === t || 'br' === t) {
      var i = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes
      i.push({ name: t, attrs: { class: r[t], style: this.tagStyle[t] } })
    }
  }),
  (s.prototype.popNode = function () {
    var t = this.stack.pop(),
      e = t.attrs,
      s = t.children,
      a = this.stack[this.stack.length - 1],
      r = a ? a.children : this.nodes
    if (!this.hook(t) || n.ignoreTags[t.name])
      return 'title' === t.name && s.length && 'text' === s[0].type && this.options.setTitle && wx.setNavigationBarTitle({ title: s[0].text }), void r.pop()
    if (t.pre && 2 !== this.pre) {
      this.pre = t.pre = void 0
      for (var o = this.stack.length; o--; ) this.stack[o].pre && (this.pre = 1)
    }
    if ('svg' === t.name) {
      if (this.xml > 1) return void this.xml--
      var h = '',
        c = e.style
      return (
        (e.style = ''),
        (e.xmlns = 'http://www.w3.org/2000/svg'),
        (function t(e) {
          if ('text' === e.type) return void (h += e.text)
          var i = n.svgDict[e.name] || e.name
          h += '<' + i
          for (var s in e.attrs) {
            var a = e.attrs[s]
            a && (h += ' '.concat(n.svgDict[s] || s, '="').concat(a, '"'))
          }
          if (e.children) {
            h += '>'
            for (var r = 0; r < e.children.length; r++) t(e.children[r])
            h += '</' + i + '>'
          } else h += '/>'
        })(t),
        (t.name = 'img'),
        (t.attrs = {
          src: 'data:image/svg+xml;utf8,' + h.replace(/#/g, '%23'),
          style: c,
          ignore: 'T'
        }),
        (t.children = void 0),
        void (this.xml = !1)
      )
    }
    var p = {}
    if (
      (e.align &&
        ('table' === t.name ? ('center' === e.align ? (p['margin-inline-start'] = p['margin-inline-end'] = 'auto') : (p.float = e.align)) : (p['text-align'] = e.align),
        (e.align = void 0)),
      e.dir && ((p.direction = e.dir), (e.dir = void 0)),
      'font' === t.name && (e.color && ((p.color = e.color), (e.color = void 0)), e.face && ((p['font-family'] = e.face), (e.face = void 0)), e.size))
    ) {
      var d = parseInt(e.size)
      isNaN(d) || (d < 1 ? (d = 1) : d > 7 && (d = 7), (p['font-size'] = ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', 'xxx-large'][d - 1])), (e.size = void 0)
    }
    if (
      ((e.class || '').includes('align-center') && (p['text-align'] = 'center'),
      Object.assign(p, this.parseStyle(t)),
      'table' !== t.name && parseInt(p.width) > l && ((p['max-width'] = '100%'), (p['box-sizing'] = 'border-box')),
      n.blockTags[t.name])
    )
      t.name = 'div'
    else if (n.trustTags[t.name] || this.xml)
      if (
        'minappershortcode' === t.name ||
        'minapperad' === t.name ||
        'minappermap' === t.name ||
        'minapperglobalgoods' === t.name ||
        'minappergoods' === t.name ||
        'minappergallery' === t.name ||
        'minapperqqvideo' === t.name ||
        'minapperchannelsactivity' === t.name ||
        'minapperchannelsevent' === t.name ||
        'minapperchannels' === t.name
      )
        this.expose()
      else if ('a' === t.name || 'ad' === t.name) this.expose()
      else if ('video' === t.name || 'audio' === t.name) (p.height || '').includes('auto') && (p.height = void 0), (t.children = void 0)
      else if (('ul' !== t.name && 'ol' !== t.name) || !t.c) {
        if ('table' === t.name) {
          var m = parseFloat(e.cellpadding),
            g = parseFloat(e.cellspacing),
            u = parseFloat(e.border),
            f = p['border-color'],
            v = p['border-style']
          if (
            (t.c && (isNaN(m) && (m = 2), isNaN(g) && (g = 2)),
            u &&
              (e.style += ';border:'
                .concat(u, 'px ')
                .concat(v || 'solid', ' ')
                .concat(f || 'gray')),
            t.flag && t.c)
          ) {
            ;(t.flag = void 0), (p.display = 'grid'), g ? ((p['grid-gap'] = g + 'px'), (p.padding = g + 'px')) : u && (e.style += ';border-left:0;border-top:0')
            var y = [],
              x = [],
              b = [],
              w = {}
            !(function t(e) {
              for (var i = 0; i < e.length; i++) 'tr' === e[i].name ? x.push(e[i]) : t(e[i].children || [])
            })(s)
            for (var k = 1; k <= x.length; k++) {
              for (var N = 1, T = 0; T < x[k - 1].children.length; T++) {
                var O = x[k - 1].children[T]
                if ('td' === O.name || 'th' === O.name) {
                  for (; w[k + '.' + N]; ) N++
                  O.c = 1
                  var q = O.attrs.style || '',
                    C = q.indexOf('width') ? q.indexOf(';width') : 0
                  if (-1 !== C) {
                    var S = q.indexOf(';', C + 6)
                    ;-1 === S && (S = q.length), O.attrs.colspan || (y[N] = q.substring(C ? C + 7 : 6, S)), (q = q.substr(0, C) + q.substr(S))
                  }
                  if (((q += ';display:flex'), -1 !== (C = q.indexOf('vertical-align')))) {
                    var I = q.substr(C + 15, 10)
                    I.includes('middle') ? (q += ';align-items:center') : I.includes('bottom') && (q += ';align-items:flex-end')
                  } else q += ';align-items:center'
                  if (-1 !== (C = q.indexOf('text-align'))) {
                    var A = q.substr(C + 11, 10)
                    A.includes('center') ? (q += ';justify-content: center') : A.includes('right') && (q += ';justify-content: right')
                  }
                  if (
                    ((q =
                      (u
                        ? ';border:'
                            .concat(u, 'px ')
                            .concat(v || 'solid', ' ')
                            .concat(f || 'gray') + (g ? '' : ';border-right:0;border-bottom:0')
                        : '') +
                      (m ? ';padding:'.concat(m, 'px') : '') +
                      ';' +
                      q),
                    O.attrs.colspan &&
                      ((q += ';grid-column-start:'.concat(N, ';grid-column-end:').concat(N + parseInt(O.attrs.colspan))),
                      O.attrs.rowspan || (q += ';grid-row-start:'.concat(k, ';grid-row-end:').concat(k + 1)),
                      (N += parseInt(O.attrs.colspan) - 1)),
                    O.attrs.rowspan)
                  ) {
                    ;(q += ';grid-row-start:'.concat(k, ';grid-row-end:').concat(k + parseInt(O.attrs.rowspan))),
                      O.attrs.colspan || (q += ';grid-column-start:'.concat(N, ';grid-column-end:').concat(N + 1))
                    for (var L = 1; L < O.attrs.rowspan; L++) for (var j = 0; j < (O.attrs.colspan || 1); j++) w[k + L + '.' + (N - j)] = 1
                  }
                  q && (O.attrs.style = q), b.push(O), N++
                }
              }
              if (1 === k) {
                for (var z = '', F = 1; F < N; F++) z += (y[F] ? y[F] : 'auto') + ' '
                p['grid-template-columns'] = z
              }
            }
            t.children = b
          } else
            t.c && (p.display = 'table'),
              isNaN(g) || (p['border-spacing'] = g + 'px'),
              (u || m || t.c) &&
                (function e(i) {
                  for (var s = 0; s < i.length; s++) {
                    var a = i[s]
                    t.c && (a.c = 1),
                      'th' === a.name || 'td' === a.name
                        ? (u &&
                            (a.attrs.style = 'border:'
                              .concat(u, 'px ')
                              .concat(v || 'solid', ' ')
                              .concat(f || 'gray', ';')
                              .concat(a.attrs.style || '')),
                          m && (a.attrs.style = 'padding:'.concat(m, 'px;').concat(a.attrs.style || '')))
                        : a.children && e(a.children)
                  }
                })(s)
          if (this.options.scrollTable && !(e.style || '').includes('inline')) {
            var U = Object.assign({}, t)
            ;(t.name = 'div'), (t.attrs = { style: 'overflow-x:auto;padding:1px' }), (t.children = [U]), (e = U.attrs)
          }
        } else if (('td' !== t.name && 'th' !== t.name) || (!e.colspan && !e.rowspan)) {
          if ('ruby' === t.name) {
            t.name = 'span'
            for (var V = 0; V < s.length - 1; V++)
              'text' === s[V].type &&
                'rt' === s[V + 1].name &&
                ((s[V] = {
                  name: 'span',
                  attrs: { style: 'display:inline-block;text-align:center' },
                  children: [
                    {
                      name: 'div',
                      attrs: {
                        style: 'font-size:50%;' + (s[V + 1].attrs.style || '')
                      },
                      children: s[V + 1].children
                    },
                    s[V]
                  ]
                }),
                s.splice(V + 1, 1))
          }
        } else
          for (var D = this.stack.length; D--; )
            if ('table' === this.stack[D].name) {
              this.stack[D].flag = 1
              break
            }
      } else {
        var B = {
          a: 'lower-alpha',
          A: 'upper-alpha',
          i: 'lower-roman',
          I: 'upper-roman'
        }
        B[e.type] && ((e.style += ';list-style-type:' + B[e.type]), (e.type = void 0)), (t.c = 1)
        for (var P = s.length; P--; ) 'li' === s[P].name && (s[P].c = 1)
      }
    else t.name = 'span'
    if ((p.display || '').includes('flex') && !t.c)
      for (var W = s.length; W--; ) {
        var Z = s[W]
        Z.f && ((Z.attrs.style = (Z.attrs.style || '') + Z.f), (Z.f = void 0))
      }
    var _ = a && ((a.attrs.style || '').includes('flex') || (a.attrs.style || '').includes('grid')) && !t.c && !(p.display || '').includes('inline')
    _ && (t.f = ';max-width:100%'), s.length >= 50 && t.c && !(p.display || '').includes('flex') && i(s)
    for (var G in p)
      if (p[G]) {
        var M = ';'.concat(G, ':').concat(p[G].replace(' !important', ''))
        _ && ((G.includes('flex') && 'flex-direction' !== G) || 'align-self' === G || G.includes('grid') || '-' === p[G][0] || (G.includes('width') && M.includes('%')))
          ? ((t.f += M), 'width' === G && (e.style += ';width:100%'))
          : (e.style += M)
      }
    e.style = e.style.substr(1) || void 0
  }),
  (s.prototype.onText = function (t) {
    if (!this.pre) {
      for (var i, s = '', a = 0, n = t.length; a < n; a++) c[t[a]] ? (' ' !== s[s.length - 1] && (s += ' '), '\n' !== t[a] || i || (i = !0)) : (s += t[a])
      if (' ' === s && i) return
      t = s
    }
    var r = Object.create(null)
    if (((r.type = 'text'), (r.text = e(t)), this.hook(r))) {
      'force' === this.options.selectable && h.includes('iOS') && !wx.canIUse('rich-text.user-select') && this.expose()
      ;(this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes).push(r)
    }
  }),
  (a.prototype.parse = function (t) {
    ;(this.content = t || ''), (this.i = 0), (this.start = 0), (this.state = this.text)
    for (var e = this.content.length; -1 !== this.i && this.i < e; ) this.state()
  }),
  (a.prototype.checkClose = function (t) {
    var e = '/' === this.content[this.i]
    return (
      !!('>' === this.content[this.i] || (e && '>' === this.content[this.i + 1])) &&
      (t && this.handler[t](this.content.substring(this.start, this.i)),
      (this.i += e ? 2 : 1),
      (this.start = this.i),
      this.handler.onOpenTag(e),
      'script' === this.handler.tagName
        ? ((this.i = this.content.indexOf('</', this.i)), -1 !== this.i && ((this.i += 2), (this.start = this.i)), (this.state = this.endTag))
        : (this.state = this.text),
      !0)
    )
  }),
  (a.prototype.text = function () {
    if (((this.i = this.content.indexOf('<', this.i)), -1 === this.i))
      return void (this.start < this.content.length && this.handler.onText(this.content.substring(this.start, this.content.length)))
    var t = this.content[this.i + 1]
    if ((t >= 'a' && t <= 'z') || (t >= 'A' && t <= 'Z'))
      this.start !== this.i && this.handler.onText(this.content.substring(this.start, this.i)), (this.start = ++this.i), (this.state = this.tagName)
    else if ('/' === t || '!' === t || '?' === t) {
      this.start !== this.i && this.handler.onText(this.content.substring(this.start, this.i))
      var e = this.content[this.i + 2]
      if ('/' === t && ((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z'))) return (this.i += 2), (this.start = this.i), void (this.state = this.endTag)
      var i = '--\x3e'
      ;('!' === t && '-' === this.content[this.i + 2] && '-' === this.content[this.i + 3]) || (i = '>'),
        (this.i = this.content.indexOf(i, this.i)),
        -1 !== this.i && ((this.i += i.length), (this.start = this.i))
    } else this.i++
  }),
  (a.prototype.tagName = function () {
    if (c[this.content[this.i]]) {
      for (this.handler.onTagName(this.content.substring(this.start, this.i)); c[this.content[++this.i]]; );
      this.i < this.content.length && !this.checkClose() && ((this.start = this.i), (this.state = this.attrName))
    } else this.checkClose('onTagName') || this.i++
  }),
  (a.prototype.attrName = function () {
    var t = this.content[this.i]
    if (c[t] || '=' === t) {
      this.handler.onAttrName(this.content.substring(this.start, this.i))
      for (var e = '=' === t, i = this.content.length; ++this.i < i; )
        if (((t = this.content[this.i]), !c[t])) {
          if (this.checkClose()) return
          if (e) return (this.start = this.i), void (this.state = this.attrVal)
          if ('=' !== this.content[this.i]) return (this.start = this.i), void (this.state = this.attrName)
          e = !0
        }
    } else this.checkClose('onAttrName') || this.i++
  }),
  (a.prototype.attrVal = function () {
    var t = this.content[this.i],
      e = this.content.length
    if ('"' === t || "'" === t) {
      if (((this.start = ++this.i), (this.i = this.content.indexOf(t, this.i)), -1 === this.i)) return
      this.handler.onAttrVal(this.content.substring(this.start, this.i))
    } else
      for (; this.i < e; this.i++) {
        if (c[this.content[this.i]]) {
          this.handler.onAttrVal(this.content.substring(this.start, this.i))
          break
        }
        if (this.checkClose('onAttrVal')) return
      }
    for (; c[this.content[++this.i]]; );
    this.i < e && !this.checkClose() && ((this.start = this.i), (this.state = this.attrName))
  }),
  (a.prototype.endTag = function () {
    var t = this.content[this.i]
    if (c[t] || '>' === t || '/' === t) {
      if ((this.handler.onCloseTag(this.content.substring(this.start, this.i)), '>' !== t && ((this.i = this.content.indexOf('>', this.i)), -1 === this.i))) return
      ;(this.start = ++this.i), (this.state = this.text)
    } else this.i++
  })
export default s
