"use strict";
function t(t) {
  this.vm = t;
}
import o from "./context";
var i = 0;
(t.prototype.onUpdate = function () {
  this.audios = [];
}),
  (t.prototype.onParse = function (t) {
    "audio" === t.name &&
      (t.attrs.id || (t.attrs.id = "a" + i++), this.audios.push(t.attrs.id));
  }),
  (t.prototype.onLoad = function () {
    var t = this;
    setTimeout(function () {
      for (var i = 0; i < t.audios.length; i++) {
        var s = o.get(t.audios[i]);
        (s.id = t.audios[i]), t.vm._videos.push(s);
      }
    }, 500);
  });
export default t;
