'use strict'
function t() {
  ;(this.styles = []), (this.selectors = [])
}
function s(t) {
  ;(this.selector = ''), (this.style = ''), (this.handler = t)
}
var i = { ' ': !0, '\n': !0, '\t': !0, '\r': !0, '\f': !0 }
;(t.prototype.parse = function (t) {
  return new s(this).parse(t), this.styles
}),
  (t.prototype.onSelector = function (t) {
    function s(t) {
      var s,
        i,
        e = []
      for (s = 1, i = 0; s < t.length; s++) ('.' !== t[s] && '#' !== t[s]) || (e.push(t.substring(i, s)), (i = s))
      return e.length ? (e.push(t.substring(i, s)), e) : t
    }
    if (!(t.includes('[') || t.includes('*') || t.includes('@'))) {
      var i = {}
      if (t.includes(':')) {
        var e = t.split(':'),
          n = e.pop()
        if ('before' !== n && 'after' !== n) return
        ;(i.pseudo = n), (t = e[0])
      }
      if (t.includes(' ')) {
        i.list = []
        for (var o = t.split(' '), h = 0; h < o.length; h++)
          if (o[h].length) for (var r = o[h].split('>'), l = 0; l < r.length; l++) i.list.push(s(r[l])), l < r.length - 1 && i.list.push('>')
      } else i.key = s(t)
      this.selectors.push(i)
    }
  }),
  (t.prototype.onContent = function (t) {
    for (var s = 0; s < this.selectors.length; s++) this.selectors[s].style = t
    ;(this.styles = this.styles.concat(this.selectors)), (this.selectors = [])
  }),
  (s.prototype.parse = function (t) {
    ;(this.i = 0), (this.content = t), (this.state = this.blank)
    for (var s = t.length; this.i < s; this.i++) this.state(t[this.i])
  }),
  (s.prototype.comment = function () {
    ;(this.i = this.content.indexOf('*/', this.i) + 1), this.i || (this.i = this.content.length)
  }),
  (s.prototype.blank = function (t) {
    if (!i[t]) {
      if ('/' === t && '*' === this.content[this.i + 1]) return void this.comment()
      ;(this.selector += t), (this.state = this.name)
    }
  }),
  (s.prototype.name = function (t) {
    if ('/' === t && '*' === this.content[this.i + 1]) return void this.comment()
    if ('{' === t || ',' === t || ';' === t) {
      if ((this.handler.onSelector(this.selector.trimEnd()), (this.selector = ''), '{' !== t)) for (; i[this.content[++this.i]]; );
      '{' === this.content[this.i] ? ((this.floor = 1), (this.state = this.val)) : (this.selector += this.content[this.i])
    } else i[t] ? (this.selector += ' ') : (this.selector += t)
  }),
  (s.prototype.val = function (t) {
    if ('/' === t && '*' === this.content[this.i + 1]) return void this.comment()
    if ('{' === t) this.floor++
    else if ('}' === t && !--this.floor) return this.handler.onContent(this.style), (this.style = ''), void (this.state = this.blank)
    this.style += t
  })
export default t
