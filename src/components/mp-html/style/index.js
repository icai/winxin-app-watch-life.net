'use strict'
function t() {
  this.styles = []
}
function e(t, e) {
  function r(e) {
    if ('#' === e[0]) {
      if (t.attrs.id && t.attrs.id.trim() === e.substr(1)) return 3
    } else if ('.' === e[0]) {
      e = e.substr(1)
      for (var r = (t.attrs.class || '').split(' '), s = 0; s < r.length; s++) if (r[s].trim() === e) return 2
    } else if (t.name === e) return 1
    return 0
  }
  if (e instanceof Array) {
    for (var s = 0, n = 0; n < e.length; n++) {
      var i = r(e[n])
      if (!i) return 0
      i > s && (s = i)
    }
    return s
  }
  return r(e)
}
import r from './parser'
t.prototype.onParse = function (t, s) {
  if ('style' === t.name && t.children.length && 'text' === t.children[0].type) this.styles = this.styles.concat(new r().parse(t.children[0].text))
  else if (t.name) {
    for (var n = ['', '', '', ''], i = 0, l = this.styles.length; i < l; i++) {
      var a = this.styles[i],
        f = e(t, a.key || a.list[a.list.length - 1]),
        c = void 0
      if (f) {
        if (!a.key) {
          c = a.list.length - 2
          for (var o = s.stack.length; c >= 0 && o--; )
            if ('>' === a.list[c]) {
              if (c < 1 || c > a.list.length - 2) break
              e(s.stack[o], a.list[c - 1]) ? (c -= 2) : c++
            } else e(s.stack[o], a.list[c]) && c--
          f = 4
        }
        if (a.key || c < 0)
          if (a.pseudo && t.children) {
            var u = void 0
            a.style = a.style.replace(/content:([^;]+)/, function (e, r) {
              return (
                (u = r
                  .replace(/['"]/g, '')
                  .replace(/attr\((.+?)\)/, function (e, r) {
                    return t.attrs[r.trim()] || ''
                  })
                  .replace(/\\(\w{4})/, function (t, e) {
                    return String.fromCharCode(parseInt(e, 16))
                  })),
                ''
              )
            })
            var h = {
              name: 'span',
              attrs: { style: a.style },
              children: [{ type: 'text', text: u }]
            }
            'before' === a.pseudo ? t.children.unshift(h) : t.children.push(h)
          } else n[f - 1] += a.style + (';' === a.style[a.style.length - 1] ? '' : ';')
      }
    }
    ;(n = n.join('')), n.length > 2 && (t.attrs.style = n + (t.attrs.style || ''))
  }
}
export default t
