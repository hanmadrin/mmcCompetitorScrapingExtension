!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).io = e() }(this, (function () { "use strict"; function t(e) { return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, t(e) } function e(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function n(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } function r(t, e, r) { return e && n(t.prototype, e), r && n(t, r), t } function i() { return i = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, i.apply(this, arguments) } function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && a(t, e) } function s(t) { return s = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) }, s(t) } function a(t, e) { return a = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t }, a(t, e) } function c() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0 } catch (t) { return !1 } } function u(t, e, n) { return u = c() ? Reflect.construct : function (t, e, n) { var r = [null]; r.push.apply(r, e); var i = new (Function.bind.apply(t, r)); return n && a(i, n.prototype), i }, u.apply(null, arguments) } function h(t) { var e = "function" == typeof Map ? new Map : void 0; return h = function (t) { if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t; var n; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== e) { if (e.has(t)) return e.get(t); e.set(t, r) } function r() { return u(t, arguments, s(this).constructor) } return r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), a(r, t) }, h(t) } function f(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function l(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return f(t) } function p(t) { var e = c(); return function () { var n, r = s(t); if (e) { var i = s(this).constructor; n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return l(this, n) } } function d(t, e, n) { return d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) { var r = function (t, e) { for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t));); return t }(t, e); if (r) { var i = Object.getOwnPropertyDescriptor(r, e); return i.get ? i.get.call(n) : i.value } }, d(t, e, n || t) } function y(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r } function v(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function (t, e) { if (t) { if ("string" == typeof t) return y(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0 } }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0, i = function () { }; return { s: i, n: function () { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function (t) { throw t }, f: i } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var o, s = !0, a = !1; return { s: function () { n = n.call(t) }, n: function () { var t = n.next(); return s = t.done, t }, e: function (t) { a = !0, o = t }, f: function () { try { s || null == n.return || n.return() } finally { if (a) throw o } } } } var g = Object.create(null); g.open = "0", g.close = "1", g.ping = "2", g.pong = "3", g.message = "4", g.upgrade = "5", g.noop = "6"; var m = Object.create(null); Object.keys(g).forEach((function (t) { m[g[t]] = t })); for (var k = { type: "error", data: "parser error" }, b = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), w = "function" == typeof ArrayBuffer, _ = function (t, e, n) { var r, i = t.type, o = t.data; return b && o instanceof Blob ? e ? n(o) : A(o, n) : w && (o instanceof ArrayBuffer || (r = o, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer)) ? e ? n(o) : A(new Blob([o]), n) : n(g[i] + (o || "")) }, A = function (t, e) { var n = new FileReader; return n.onload = function () { var t = n.result.split(",")[1]; e("b" + t) }, n.readAsDataURL(t) }, E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", O = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), R = 0; R < E.length; R++)O[E.charCodeAt(R)] = R; var T = "function" == typeof ArrayBuffer, C = function (t, e) { if ("string" != typeof t) return { type: "message", data: S(t, e) }; var n = t.charAt(0); return "b" === n ? { type: "message", data: B(t.substring(1), e) } : m[n] ? t.length > 1 ? { type: m[n], data: t.substring(1) } : { type: m[n] } : k }, B = function (t, e) { if (T) { var n = function (t) { var e, n, r, i, o, s = .75 * t.length, a = t.length, c = 0; "=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--); var u = new ArrayBuffer(s), h = new Uint8Array(u); for (e = 0; e < a; e += 4)n = O[t.charCodeAt(e)], r = O[t.charCodeAt(e + 1)], i = O[t.charCodeAt(e + 2)], o = O[t.charCodeAt(e + 3)], h[c++] = n << 2 | r >> 4, h[c++] = (15 & r) << 4 | i >> 2, h[c++] = (3 & i) << 6 | 63 & o; return u }(t); return S(n, e) } return { base64: !0, data: t } }, S = function (t, e) { return "blob" === e && t instanceof ArrayBuffer ? new Blob([t]) : t }, N = String.fromCharCode(30); function x(t) { if (t) return function (t) { for (var e in x.prototype) t[e] = x.prototype[e]; return t }(t) } x.prototype.on = x.prototype.addEventListener = function (t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this }, x.prototype.once = function (t, e) { function n() { this.off(t, n), e.apply(this, arguments) } return n.fn = e, this.on(t, n), this }, x.prototype.off = x.prototype.removeListener = x.prototype.removeAllListeners = x.prototype.removeEventListener = function (t, e) { if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this; var n, r = this._callbacks["$" + t]; if (!r) return this; if (1 == arguments.length) return delete this._callbacks["$" + t], this; for (var i = 0; i < r.length; i++)if ((n = r[i]) === e || n.fn === e) { r.splice(i, 1); break } return 0 === r.length && delete this._callbacks["$" + t], this }, x.prototype.emit = function (t) { this._callbacks = this._callbacks || {}; for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++)e[r - 1] = arguments[r]; if (n) { r = 0; for (var i = (n = n.slice(0)).length; r < i; ++r)n[r].apply(this, e) } return this }, x.prototype.emitReserved = x.prototype.emit, x.prototype.listeners = function (t) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [] }, x.prototype.hasListeners = function (t) { return !!this.listeners(t).length }; var L = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")(); function P(t) { for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)n[r - 1] = arguments[r]; return n.reduce((function (e, n) { return t.hasOwnProperty(n) && (e[n] = t[n]), e }), {}) } var j = setTimeout, q = clearTimeout; function I(t, e) { e.useNativeTimers ? (t.setTimeoutFn = j.bind(L), t.clearTimeoutFn = q.bind(L)) : (t.setTimeoutFn = setTimeout.bind(L), t.clearTimeoutFn = clearTimeout.bind(L)) } var D, F = function (t) { o(r, t); var n = p(r); function r(t, i, o) { var s; return e(this, r), (s = n.call(this, t)).description = i, s.context = o, s.type = "TransportError", s } return r }(h(Error)), M = function (t) { o(i, t); var n = p(i); function i(t) { var r; return e(this, i), (r = n.call(this)).writable = !1, I(f(r), t), r.opts = t, r.query = t.query, r.readyState = "", r.socket = t.socket, r } return r(i, [{ key: "onError", value: function (t, e, n) { return d(s(i.prototype), "emitReserved", this).call(this, "error", new F(t, e, n)), this } }, { key: "open", value: function () { return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this } }, { key: "close", value: function () { return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this } }, { key: "send", value: function (t) { "open" === this.readyState && this.write(t) } }, { key: "onOpen", value: function () { this.readyState = "open", this.writable = !0, d(s(i.prototype), "emitReserved", this).call(this, "open") } }, { key: "onData", value: function (t) { var e = C(t, this.socket.binaryType); this.onPacket(e) } }, { key: "onPacket", value: function (t) { d(s(i.prototype), "emitReserved", this).call(this, "packet", t) } }, { key: "onClose", value: function (t) { this.readyState = "closed", d(s(i.prototype), "emitReserved", this).call(this, "close", t) } }]), i }(x), U = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), V = {}, H = 0, K = 0; function Y(t) { var e = ""; do { e = U[t % 64] + e, t = Math.floor(t / 64) } while (t > 0); return e } function z() { var t = Y(+new Date); return t !== D ? (H = 0, D = t) : t + "." + Y(H++) } for (; K < 64; K++)V[U[K]] = K; function W(t) { var e = ""; for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n])); return e } function $(t) { for (var e = {}, n = t.split("&"), r = 0, i = n.length; r < i; r++) { var o = n[r].split("="); e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]) } return e } var J = !1; try { J = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest } catch (t) { } var X = J; function G(t) { var e = t.xdomain; try { if ("undefined" != typeof XMLHttpRequest && (!e || X)) return new XMLHttpRequest } catch (t) { } if (!e) try { return new (L[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP") } catch (t) { } } function Q() { } var Z = null != new G({ xdomain: !1 }).responseType, tt = function (t) { o(s, t); var n = p(s); function s(t) { var r; if (e(this, s), (r = n.call(this, t)).polling = !1, "undefined" != typeof location) { var i = "https:" === location.protocol, o = location.port; o || (o = i ? "443" : "80"), r.xd = "undefined" != typeof location && t.hostname !== location.hostname || o !== t.port, r.xs = t.secure !== i } var a = t && t.forceBase64; return r.supportsBinary = Z && !a, r } return r(s, [{ key: "name", get: function () { return "polling" } }, { key: "doOpen", value: function () { this.poll() } }, { key: "pause", value: function (t) { var e = this; this.readyState = "pausing"; var n = function () { e.readyState = "paused", t() }; if (this.polling || !this.writable) { var r = 0; this.polling && (r++, this.once("pollComplete", (function () { --r || n() }))), this.writable || (r++, this.once("drain", (function () { --r || n() }))) } else n() } }, { key: "poll", value: function () { this.polling = !0, this.doPoll(), this.emitReserved("poll") } }, { key: "onData", value: function (t) { var e = this; (function (t, e) { for (var n = t.split(N), r = [], i = 0; i < n.length; i++) { var o = C(n[i], e); if (r.push(o), "error" === o.type) break } return r })(t, this.socket.binaryType).forEach((function (t) { if ("opening" === e.readyState && "open" === t.type && e.onOpen(), "close" === t.type) return e.onClose({ description: "transport closed by the server" }), !1; e.onPacket(t) })), "closed" !== this.readyState && (this.polling = !1, this.emitReserved("pollComplete"), "open" === this.readyState && this.poll()) } }, { key: "doClose", value: function () { var t = this, e = function () { t.write([{ type: "close" }]) }; "open" === this.readyState ? e() : this.once("open", e) } }, { key: "write", value: function (t) { var e = this; this.writable = !1, function (t, e) { var n = t.length, r = new Array(n), i = 0; t.forEach((function (t, o) { _(t, !1, (function (t) { r[o] = t, ++i === n && e(r.join(N)) })) })) }(t, (function (t) { e.doWrite(t, (function () { e.writable = !0, e.emitReserved("drain") })) })) } }, { key: "uri", value: function () { var t = this.query || {}, e = this.opts.secure ? "https" : "http", n = ""; !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = z()), this.supportsBinary || t.sid || (t.b64 = 1), this.opts.port && ("https" === e && 443 !== Number(this.opts.port) || "http" === e && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port); var r = W(t); return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (r.length ? "?" + r : "") } }, { key: "request", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return i(t, { xd: this.xd, xs: this.xs }, this.opts), new et(this.uri(), t) } }, { key: "doWrite", value: function (t, e) { var n = this, r = this.request({ method: "POST", data: t }); r.on("success", e), r.on("error", (function (t, e) { n.onError("xhr post error", t, e) })) } }, { key: "doPoll", value: function () { var t = this, e = this.request(); e.on("data", this.onData.bind(this)), e.on("error", (function (e, n) { t.onError("xhr poll error", e, n) })), this.pollXhr = e } }]), s }(M), et = function (t) { o(i, t); var n = p(i); function i(t, r) { var o; return e(this, i), I(f(o = n.call(this)), r), o.opts = r, o.method = r.method || "GET", o.uri = t, o.async = !1 !== r.async, o.data = void 0 !== r.data ? r.data : null, o.create(), o } return r(i, [{ key: "create", value: function () { var t = this, e = P(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref"); e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs; var n = this.xhr = new G(e); try { n.open(this.method, this.uri, this.async); try { if (this.opts.extraHeaders) for (var r in n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0), this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(r) && n.setRequestHeader(r, this.opts.extraHeaders[r]) } catch (t) { } if ("POST" === this.method) try { n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") } catch (t) { } try { n.setRequestHeader("Accept", "*/*") } catch (t) { } "withCredentials" in n && (n.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout), n.onreadystatechange = function () { 4 === n.readyState && (200 === n.status || 1223 === n.status ? t.onLoad() : t.setTimeoutFn((function () { t.onError("number" == typeof n.status ? n.status : 0) }), 0)) }, n.send(this.data) } catch (e) { return void this.setTimeoutFn((function () { t.onError(e) }), 0) } "undefined" != typeof document && (this.index = i.requestsCount++, i.requests[this.index] = this) } }, { key: "onError", value: function (t) { this.emitReserved("error", t, this.xhr), this.cleanup(!0) } }, { key: "cleanup", value: function (t) { if (void 0 !== this.xhr && null !== this.xhr) { if (this.xhr.onreadystatechange = Q, t) try { this.xhr.abort() } catch (t) { } "undefined" != typeof document && delete i.requests[this.index], this.xhr = null } } }, { key: "onLoad", value: function () { var t = this.xhr.responseText; null !== t && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup()) } }, { key: "abort", value: function () { this.cleanup() } }]), i }(x); if (et.requestsCount = 0, et.requests = {}, "undefined" != typeof document) if ("function" == typeof attachEvent) attachEvent("onunload", nt); else if ("function" == typeof addEventListener) { addEventListener("onpagehide" in L ? "pagehide" : "unload", nt, !1) } function nt() { for (var t in et.requests) et.requests.hasOwnProperty(t) && et.requests[t].abort() } var rt = "function" == typeof Promise && "function" == typeof Promise.resolve ? function (t) { return Promise.resolve().then(t) } : function (t, e) { return e(t, 0) }, it = L.WebSocket || L.MozWebSocket, ot = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), st = function (t) { o(i, t); var n = p(i); function i(t) { var r; return e(this, i), (r = n.call(this, t)).supportsBinary = !t.forceBase64, r } return r(i, [{ key: "name", get: function () { return "websocket" } }, { key: "doOpen", value: function () { if (this.check()) { var t = this.uri(), e = this.opts.protocols, n = ot ? {} : P(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity"); this.opts.extraHeaders && (n.headers = this.opts.extraHeaders); try { this.ws = ot ? new it(t, e, n) : e ? new it(t, e) : new it(t) } catch (t) { return this.emitReserved("error", t) } this.ws.binaryType = this.socket.binaryType || "arraybuffer", this.addEventListeners() } } }, { key: "addEventListeners", value: function () { var t = this; this.ws.onopen = function () { t.opts.autoUnref && t.ws._socket.unref(), t.onOpen() }, this.ws.onclose = function (e) { return t.onClose({ description: "websocket connection closed", context: e }) }, this.ws.onmessage = function (e) { return t.onData(e.data) }, this.ws.onerror = function (e) { return t.onError("websocket error", e) } } }, { key: "write", value: function (t) { var e = this; this.writable = !1; for (var n = function (n) { var r = t[n], i = n === t.length - 1; _(r, e.supportsBinary, (function (t) { try { e.ws.send(t) } catch (t) { } i && rt((function () { e.writable = !0, e.emitReserved("drain") }), e.setTimeoutFn) })) }, r = 0; r < t.length; r++)n(r) } }, { key: "doClose", value: function () { void 0 !== this.ws && (this.ws.close(), this.ws = null) } }, { key: "uri", value: function () { var t = this.query || {}, e = this.opts.secure ? "wss" : "ws", n = ""; this.opts.port && ("wss" === e && 443 !== Number(this.opts.port) || "ws" === e && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = z()), this.supportsBinary || (t.b64 = 1); var r = W(t); return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (r.length ? "?" + r : "") } }, { key: "check", value: function () { return !(!it || "__initialize" in it && this.name === i.prototype.name) } }]), i }(M), at = { websocket: st, polling: tt }, ct = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ut = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"]; function ht(t) { var e = t, n = t.indexOf("["), r = t.indexOf("]"); -1 != n && -1 != r && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length)); for (var i, o, s = ct.exec(t || ""), a = {}, c = 14; c--;)a[ut[c]] = s[c] || ""; return -1 != n && -1 != r && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = function (t, e) { var n = /\/{2,9}/g, r = e.replace(n, "/").split("/"); "/" != e.substr(0, 1) && 0 !== e.length || r.splice(0, 1); "/" == e.substr(e.length - 1, 1) && r.splice(r.length - 1, 1); return r }(0, a.path), a.queryKey = (i = a.query, o = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function (t, e, n) { e && (o[e] = n) })), o), a } var ft = function (n) { o(a, n); var s = p(a); function a(n) { var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return e(this, a), r = s.call(this), n && "object" === t(n) && (o = n, n = null), n ? (n = ht(n), o.hostname = n.host, o.secure = "https" === n.protocol || "wss" === n.protocol, o.port = n.port, n.query && (o.query = n.query)) : o.host && (o.hostname = ht(o.host).host), I(f(r), o), r.secure = null != o.secure ? o.secure : "undefined" != typeof location && "https:" === location.protocol, o.hostname && !o.port && (o.port = r.secure ? "443" : "80"), r.hostname = o.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), r.port = o.port || ("undefined" != typeof location && location.port ? location.port : r.secure ? "443" : "80"), r.transports = o.transports || ["polling", "websocket"], r.readyState = "", r.writeBuffer = [], r.prevBufferLen = 0, r.opts = i({ path: "/engine.io", agent: !1, withCredentials: !1, upgrade: !0, timestampParam: "t", rememberUpgrade: !1, rejectUnauthorized: !0, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: !0 }, o), r.opts.path = r.opts.path.replace(/\/$/, "") + "/", "string" == typeof r.opts.query && (r.opts.query = $(r.opts.query)), r.id = null, r.upgrades = null, r.pingInterval = null, r.pingTimeout = null, r.pingTimeoutTimer = null, "function" == typeof addEventListener && (r.opts.closeOnBeforeunload && addEventListener("beforeunload", (function () { r.transport && (r.transport.removeAllListeners(), r.transport.close()) }), !1), "localhost" !== r.hostname && (r.offlineEventListener = function () { r.onClose("transport close", { description: "network connection lost" }) }, addEventListener("offline", r.offlineEventListener, !1))), r.open(), r } return r(a, [{ key: "createTransport", value: function (t) { var e = i({}, this.opts.query); e.EIO = 4, e.transport = t, this.id && (e.sid = this.id); var n = i({}, this.opts.transportOptions[t], this.opts, { query: e, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }); return new at[t](n) } }, { key: "open", value: function () { var t, e = this; if (this.opts.rememberUpgrade && a.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket"; else { if (0 === this.transports.length) return void this.setTimeoutFn((function () { e.emitReserved("error", "No transports available") }), 0); t = this.transports[0] } this.readyState = "opening"; try { t = this.createTransport(t) } catch (t) { return this.transports.shift(), void this.open() } t.open(), this.setTransport(t) } }, { key: "setTransport", value: function (t) { var e = this; this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (function (t) { return e.onClose("transport close", t) })) } }, { key: "probe", value: function (t) { var e = this, n = this.createTransport(t), r = !1; a.priorWebsocketSuccess = !1; var i = function () { r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (function (t) { if (!r) if ("pong" === t.type && "probe" === t.data) { if (e.upgrading = !0, e.emitReserved("upgrading", n), !n) return; a.priorWebsocketSuccess = "websocket" === n.name, e.transport.pause((function () { r || "closed" !== e.readyState && (f(), e.setTransport(n), n.send([{ type: "upgrade" }]), e.emitReserved("upgrade", n), n = null, e.upgrading = !1, e.flush()) })) } else { var i = new Error("probe error"); i.transport = n.name, e.emitReserved("upgradeError", i) } }))) }; function o() { r || (r = !0, f(), n.close(), n = null) } var s = function (t) { var r = new Error("probe error: " + t); r.transport = n.name, o(), e.emitReserved("upgradeError", r) }; function c() { s("transport closed") } function u() { s("socket closed") } function h(t) { n && t.name !== n.name && o() } var f = function () { n.removeListener("open", i), n.removeListener("error", s), n.removeListener("close", c), e.off("close", u), e.off("upgrading", h) }; n.once("open", i), n.once("error", s), n.once("close", c), this.once("close", u), this.once("upgrading", h), n.open() } }, { key: "onOpen", value: function () { if (this.readyState = "open", a.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause) for (var t = 0, e = this.upgrades.length; t < e; t++)this.probe(this.upgrades[t]) } }, { key: "onPacket", value: function (t) { if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) { case "open": this.onHandshake(JSON.parse(t.data)); break; case "ping": this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"); break; case "error": var e = new Error("server error"); e.code = t.data, this.onError(e); break; case "message": this.emitReserved("data", t.data), this.emitReserved("message", t.data) } } }, { key: "onHandshake", value: function (t) { this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout() } }, { key: "resetPingTimeout", value: function () { var t = this; this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn((function () { t.onClose("ping timeout") }), this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref() } }, { key: "onDrain", value: function () { this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush() } }, { key: "flush", value: function () { if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) { var t = this.getWritablePackets(); this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush") } } }, { key: "getWritablePackets", value: function () { if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer; for (var t, e = 1, n = 0; n < this.writeBuffer.length; n++) { var r = this.writeBuffer[n].data; if (r && (e += "string" == typeof (t = r) ? function (t) { for (var e = 0, n = 0, r = 0, i = t.length; r < i; r++)(e = t.charCodeAt(r)) < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4); return n }(t) : Math.ceil(1.33 * (t.byteLength || t.size))), n > 0 && e > this.maxPayload) return this.writeBuffer.slice(0, n); e += 2 } return this.writeBuffer } }, { key: "write", value: function (t, e, n) { return this.sendPacket("message", t, e, n), this } }, { key: "send", value: function (t, e, n) { return this.sendPacket("message", t, e, n), this } }, { key: "sendPacket", value: function (t, e, n, r) { if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) { (n = n || {}).compress = !1 !== n.compress; var i = { type: t, data: e, options: n }; this.emitReserved("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush() } } }, { key: "close", value: function () { var t = this, e = function () { t.onClose("forced close"), t.transport.close() }, n = function n() { t.off("upgrade", n), t.off("upgradeError", n), e() }, r = function () { t.once("upgrade", n), t.once("upgradeError", n) }; return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (function () { t.upgrading ? r() : e() })) : this.upgrading ? r() : e()), this } }, { key: "onError", value: function (t) { a.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t) } }, { key: "onClose", value: function (t, e) { "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emitReserved("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0) } }, { key: "filterUpgrades", value: function (t) { for (var e = [], n = 0, r = t.length; n < r; n++)~this.transports.indexOf(t[n]) && e.push(t[n]); return e } }]), a }(x); ft.protocol = 4; var lt = "function" == typeof ArrayBuffer, pt = Object.prototype.toString, dt = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === pt.call(Blob), yt = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === pt.call(File); function vt(t) { return lt && (t instanceof ArrayBuffer || function (t) { return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer }(t)) || dt && t instanceof Blob || yt && t instanceof File } function gt(e, n) { if (!e || "object" !== t(e)) return !1; if (Array.isArray(e)) { for (var r = 0, i = e.length; r < i; r++)if (gt(e[r])) return !0; return !1 } if (vt(e)) return !0; if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return gt(e.toJSON(), !0); for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o) && gt(e[o])) return !0; return !1 } function mt(t) { var e = [], n = t.data, r = t; return r.data = kt(n, e), r.attachments = e.length, { packet: r, buffers: e } } function kt(e, n) { if (!e) return e; if (vt(e)) { var r = { _placeholder: !0, num: n.length }; return n.push(e), r } if (Array.isArray(e)) { for (var i = new Array(e.length), o = 0; o < e.length; o++)i[o] = kt(e[o], n); return i } if ("object" === t(e) && !(e instanceof Date)) { var s = {}; for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (s[a] = kt(e[a], n)); return s } return e } function bt(t, e) { return t.data = wt(t.data, e), t.attachments = void 0, t } function wt(e, n) { if (!e) return e; if (e && e._placeholder) return n[e.num]; if (Array.isArray(e)) for (var r = 0; r < e.length; r++)e[r] = wt(e[r], n); else if ("object" === t(e)) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (e[i] = wt(e[i], n)); return e } var _t; !function (t) { t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK" }(_t || (_t = {})); var At = function () { function t(n) { e(this, t), this.replacer = n } return r(t, [{ key: "encode", value: function (t) { return t.type !== _t.EVENT && t.type !== _t.ACK || !gt(t) ? [this.encodeAsString(t)] : (t.type = t.type === _t.EVENT ? _t.BINARY_EVENT : _t.BINARY_ACK, this.encodeAsBinary(t)) } }, { key: "encodeAsString", value: function (t) { var e = "" + t.type; return t.type !== _t.BINARY_EVENT && t.type !== _t.BINARY_ACK || (e += t.attachments + "-"), t.nsp && "/" !== t.nsp && (e += t.nsp + ","), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data, this.replacer)), e } }, { key: "encodeAsBinary", value: function (t) { var e = mt(t), n = this.encodeAsString(e.packet), r = e.buffers; return r.unshift(n), r } }]), t }(), Et = function (n) { o(a, n); var i = p(a); function a(t) { var n; return e(this, a), (n = i.call(this)).reviver = t, n } return r(a, [{ key: "add", value: function (t) { var e; if ("string" == typeof t) (e = this.decodeString(t)).type === _t.BINARY_EVENT || e.type === _t.BINARY_ACK ? (this.reconstructor = new Ot(e), 0 === e.attachments && d(s(a.prototype), "emitReserved", this).call(this, "decoded", e)) : d(s(a.prototype), "emitReserved", this).call(this, "decoded", e); else { if (!vt(t) && !t.base64) throw new Error("Unknown type: " + t); if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet"); (e = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, d(s(a.prototype), "emitReserved", this).call(this, "decoded", e)) } } }, { key: "decodeString", value: function (t) { var e = 0, n = { type: Number(t.charAt(0)) }; if (void 0 === _t[n.type]) throw new Error("unknown packet type " + n.type); if (n.type === _t.BINARY_EVENT || n.type === _t.BINARY_ACK) { for (var r = e + 1; "-" !== t.charAt(++e) && e != t.length;); var i = t.substring(r, e); if (i != Number(i) || "-" !== t.charAt(e)) throw new Error("Illegal attachments"); n.attachments = Number(i) } if ("/" === t.charAt(e + 1)) { for (var o = e + 1; ++e;) { if ("," === t.charAt(e)) break; if (e === t.length) break } n.nsp = t.substring(o, e) } else n.nsp = "/"; var s = t.charAt(e + 1); if ("" !== s && Number(s) == s) { for (var c = e + 1; ++e;) { var u = t.charAt(e); if (null == u || Number(u) != u) { --e; break } if (e === t.length) break } n.id = Number(t.substring(c, e + 1)) } if (t.charAt(++e)) { var h = this.tryParse(t.substr(e)); if (!a.isPayloadValid(n.type, h)) throw new Error("invalid payload"); n.data = h } return n } }, { key: "tryParse", value: function (t) { try { return JSON.parse(t, this.reviver) } catch (t) { return !1 } } }, { key: "destroy", value: function () { this.reconstructor && this.reconstructor.finishedReconstruction() } }], [{ key: "isPayloadValid", value: function (e, n) { switch (e) { case _t.CONNECT: return "object" === t(n); case _t.DISCONNECT: return void 0 === n; case _t.CONNECT_ERROR: return "string" == typeof n || "object" === t(n); case _t.EVENT: case _t.BINARY_EVENT: return Array.isArray(n) && n.length > 0; case _t.ACK: case _t.BINARY_ACK: return Array.isArray(n) } } }]), a }(x), Ot = function () { function t(n) { e(this, t), this.packet = n, this.buffers = [], this.reconPack = n } return r(t, [{ key: "takeBinaryData", value: function (t) { if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) { var e = bt(this.reconPack, this.buffers); return this.finishedReconstruction(), e } return null } }, { key: "finishedReconstruction", value: function () { this.reconPack = null, this.buffers = [] } }]), t }(), Rt = Object.freeze({ __proto__: null, protocol: 5, get PacketType() { return _t }, Encoder: At, Decoder: Et }); function Tt(t, e, n) { return t.on(e, n), function () { t.off(e, n) } } var Ct = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 }), Bt = function (t) { o(i, t); var n = p(i); function i(t, r, o) { var s; return e(this, i), (s = n.call(this)).connected = !1, s.receiveBuffer = [], s.sendBuffer = [], s.ids = 0, s.acks = {}, s.flags = {}, s.io = t, s.nsp = r, o && o.auth && (s.auth = o.auth), s.io._autoConnect && s.open(), s } return r(i, [{ key: "disconnected", get: function () { return !this.connected } }, { key: "subEvents", value: function () { if (!this.subs) { var t = this.io; this.subs = [Tt(t, "open", this.onopen.bind(this)), Tt(t, "packet", this.onpacket.bind(this)), Tt(t, "error", this.onerror.bind(this)), Tt(t, "close", this.onclose.bind(this))] } } }, { key: "active", get: function () { return !!this.subs } }, { key: "connect", value: function () { return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this } }, { key: "open", value: function () { return this.connect() } }, { key: "send", value: function () { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; return e.unshift("message"), this.emit.apply(this, e), this } }, { key: "emit", value: function (t) { if (Ct.hasOwnProperty(t)) throw new Error('"' + t + '" is a reserved event name'); for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)n[r - 1] = arguments[r]; n.unshift(t); var i = { type: _t.EVENT, data: n, options: {} }; if (i.options.compress = !1 !== this.flags.compress, "function" == typeof n[n.length - 1]) { var o = this.ids++, s = n.pop(); this._registerAckCallback(o, s), i.id = o } var a = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable, c = this.flags.volatile && (!a || !this.connected); return c || (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this } }, { key: "_registerAckCallback", value: function (t, e) { var n = this, r = this.flags.timeout; if (void 0 !== r) { var i = this.io.setTimeoutFn((function () { delete n.acks[t]; for (var r = 0; r < n.sendBuffer.length; r++)n.sendBuffer[r].id === t && n.sendBuffer.splice(r, 1); e.call(n, new Error("operation has timed out")) }), r); this.acks[t] = function () { n.io.clearTimeoutFn(i); for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)r[o] = arguments[o]; e.apply(n, [null].concat(r)) } } else this.acks[t] = e } }, { key: "packet", value: function (t) { t.nsp = this.nsp, this.io._packet(t) } }, { key: "onopen", value: function () { var t = this; "function" == typeof this.auth ? this.auth((function (e) { t.packet({ type: _t.CONNECT, data: e }) })) : this.packet({ type: _t.CONNECT, data: this.auth }) } }, { key: "onerror", value: function (t) { this.connected || this.emitReserved("connect_error", t) } }, { key: "onclose", value: function (t, e) { this.connected = !1, delete this.id, this.emitReserved("disconnect", t, e) } }, { key: "onpacket", value: function (t) { if (t.nsp === this.nsp) switch (t.type) { case _t.CONNECT: if (t.data && t.data.sid) { var e = t.data.sid; this.onconnect(e) } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)")); break; case _t.EVENT: case _t.BINARY_EVENT: this.onevent(t); break; case _t.ACK: case _t.BINARY_ACK: this.onack(t); break; case _t.DISCONNECT: this.ondisconnect(); break; case _t.CONNECT_ERROR: this.destroy(); var n = new Error(t.data.message); n.data = t.data.data, this.emitReserved("connect_error", n) } } }, { key: "onevent", value: function (t) { var e = t.data || []; null != t.id && e.push(this.ack(t.id)), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e)) } }, { key: "emitEvent", value: function (t) { if (this._anyListeners && this._anyListeners.length) { var e, n = v(this._anyListeners.slice()); try { for (n.s(); !(e = n.n()).done;) { e.value.apply(this, t) } } catch (t) { n.e(t) } finally { n.f() } } d(s(i.prototype), "emit", this).apply(this, t) } }, { key: "ack", value: function (t) { var e = this, n = !1; return function () { if (!n) { n = !0; for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)i[o] = arguments[o]; e.packet({ type: _t.ACK, id: t, data: i }) } } } }, { key: "onack", value: function (t) { var e = this.acks[t.id]; "function" == typeof e && (e.apply(this, t.data), delete this.acks[t.id]) } }, { key: "onconnect", value: function (t) { this.id = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect") } }, { key: "emitBuffered", value: function () { var t = this; this.receiveBuffer.forEach((function (e) { return t.emitEvent(e) })), this.receiveBuffer = [], this.sendBuffer.forEach((function (e) { t.notifyOutgoingListeners(e), t.packet(e) })), this.sendBuffer = [] } }, { key: "ondisconnect", value: function () { this.destroy(), this.onclose("io server disconnect") } }, { key: "destroy", value: function () { this.subs && (this.subs.forEach((function (t) { return t() })), this.subs = void 0), this.io._destroy(this) } }, { key: "disconnect", value: function () { return this.connected && this.packet({ type: _t.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this } }, { key: "close", value: function () { return this.disconnect() } }, { key: "compress", value: function (t) { return this.flags.compress = t, this } }, { key: "volatile", get: function () { return this.flags.volatile = !0, this } }, { key: "timeout", value: function (t) { return this.flags.timeout = t, this } }, { key: "onAny", value: function (t) { return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this } }, { key: "prependAny", value: function (t) { return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this } }, { key: "offAny", value: function (t) { if (!this._anyListeners) return this; if (t) { for (var e = this._anyListeners, n = 0; n < e.length; n++)if (t === e[n]) return e.splice(n, 1), this } else this._anyListeners = []; return this } }, { key: "listenersAny", value: function () { return this._anyListeners || [] } }, { key: "onAnyOutgoing", value: function (t) { return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this } }, { key: "prependAnyOutgoing", value: function (t) { return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this } }, { key: "offAnyOutgoing", value: function (t) { if (!this._anyOutgoingListeners) return this; if (t) { for (var e = this._anyOutgoingListeners, n = 0; n < e.length; n++)if (t === e[n]) return e.splice(n, 1), this } else this._anyOutgoingListeners = []; return this } }, { key: "listenersAnyOutgoing", value: function () { return this._anyOutgoingListeners || [] } }, { key: "notifyOutgoingListeners", value: function (t) { if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) { var e, n = v(this._anyOutgoingListeners.slice()); try { for (n.s(); !(e = n.n()).done;) { e.value.apply(this, t.data) } } catch (t) { n.e(t) } finally { n.f() } } } }]), i }(x); function St(t) { t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0 } St.prototype.duration = function () { var t = this.ms * Math.pow(this.factor, this.attempts++); if (this.jitter) { var e = Math.random(), n = Math.floor(e * this.jitter * t); t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n } return 0 | Math.min(t, this.max) }, St.prototype.reset = function () { this.attempts = 0 }, St.prototype.setMin = function (t) { this.ms = t }, St.prototype.setMax = function (t) { this.max = t }, St.prototype.setJitter = function (t) { this.jitter = t }; var Nt = function (n) { o(s, n); var i = p(s); function s(n, r) { var o, a; e(this, s), (o = i.call(this)).nsps = {}, o.subs = [], n && "object" === t(n) && (r = n, n = void 0), (r = r || {}).path = r.path || "/socket.io", o.opts = r, I(f(o), r), o.reconnection(!1 !== r.reconnection), o.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), o.reconnectionDelay(r.reconnectionDelay || 1e3), o.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), o.randomizationFactor(null !== (a = r.randomizationFactor) && void 0 !== a ? a : .5), o.backoff = new St({ min: o.reconnectionDelay(), max: o.reconnectionDelayMax(), jitter: o.randomizationFactor() }), o.timeout(null == r.timeout ? 2e4 : r.timeout), o._readyState = "closed", o.uri = n; var c = r.parser || Rt; return o.encoder = new c.Encoder, o.decoder = new c.Decoder, o._autoConnect = !1 !== r.autoConnect, o._autoConnect && o.open(), o } return r(s, [{ key: "reconnection", value: function (t) { return arguments.length ? (this._reconnection = !!t, this) : this._reconnection } }, { key: "reconnectionAttempts", value: function (t) { return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this) } }, { key: "reconnectionDelay", value: function (t) { var e; return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null === (e = this.backoff) || void 0 === e || e.setMin(t), this) } }, { key: "randomizationFactor", value: function (t) { var e; return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null === (e = this.backoff) || void 0 === e || e.setJitter(t), this) } }, { key: "reconnectionDelayMax", value: function (t) { var e; return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null === (e = this.backoff) || void 0 === e || e.setMax(t), this) } }, { key: "timeout", value: function (t) { return arguments.length ? (this._timeout = t, this) : this._timeout } }, { key: "maybeReconnectOnOpen", value: function () { !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect() } }, { key: "open", value: function (t) { var e = this; if (~this._readyState.indexOf("open")) return this; this.engine = new ft(this.uri, this.opts); var n = this.engine, r = this; this._readyState = "opening", this.skipReconnect = !1; var i = Tt(n, "open", (function () { r.onopen(), t && t() })), o = Tt(n, "error", (function (n) { r.cleanup(), r._readyState = "closed", e.emitReserved("error", n), t ? t(n) : r.maybeReconnectOnOpen() })); if (!1 !== this._timeout) { var s = this._timeout; 0 === s && i(); var a = this.setTimeoutFn((function () { i(), n.close(), n.emit("error", new Error("timeout")) }), s); this.opts.autoUnref && a.unref(), this.subs.push((function () { clearTimeout(a) })) } return this.subs.push(i), this.subs.push(o), this } }, { key: "connect", value: function (t) { return this.open(t) } }, { key: "onopen", value: function () { this.cleanup(), this._readyState = "open", this.emitReserved("open"); var t = this.engine; this.subs.push(Tt(t, "ping", this.onping.bind(this)), Tt(t, "data", this.ondata.bind(this)), Tt(t, "error", this.onerror.bind(this)), Tt(t, "close", this.onclose.bind(this)), Tt(this.decoder, "decoded", this.ondecoded.bind(this))) } }, { key: "onping", value: function () { this.emitReserved("ping") } }, { key: "ondata", value: function (t) { this.decoder.add(t) } }, { key: "ondecoded", value: function (t) { this.emitReserved("packet", t) } }, { key: "onerror", value: function (t) { this.emitReserved("error", t) } }, { key: "socket", value: function (t, e) { var n = this.nsps[t]; return n || (n = new Bt(this, t, e), this.nsps[t] = n), n } }, { key: "_destroy", value: function (t) { for (var e = 0, n = Object.keys(this.nsps); e < n.length; e++) { var r = n[e]; if (this.nsps[r].active) return } this._close() } }, { key: "_packet", value: function (t) { for (var e = this.encoder.encode(t), n = 0; n < e.length; n++)this.engine.write(e[n], t.options) } }, { key: "cleanup", value: function () { this.subs.forEach((function (t) { return t() })), this.subs.length = 0, this.decoder.destroy() } }, { key: "_close", value: function () { this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close() } }, { key: "disconnect", value: function () { return this._close() } }, { key: "onclose", value: function (t, e) { this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, e), this._reconnection && !this.skipReconnect && this.reconnect() } }, { key: "reconnect", value: function () { var t = this; if (this._reconnecting || this.skipReconnect) return this; var e = this; if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1; else { var n = this.backoff.duration(); this._reconnecting = !0; var r = this.setTimeoutFn((function () { e.skipReconnect || (t.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open((function (n) { n ? (e._reconnecting = !1, e.reconnect(), t.emitReserved("reconnect_error", n)) : e.onreconnect() }))) }), n); this.opts.autoUnref && r.unref(), this.subs.push((function () { clearTimeout(r) })) } } }, { key: "onreconnect", value: function () { var t = this.backoff.attempts; this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t) } }]), s }(x), xt = {}; function Lt(e, n) { "object" === t(e) && (n = e, e = void 0); var r, i = function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, r = t; n = n || "undefined" != typeof location && location, null == t && (t = n.protocol + "//" + n.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (t = void 0 !== n ? n.protocol + "//" + t : "https://" + t), r = ht(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/"; var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host; return r.id = r.protocol + "://" + i + ":" + r.port + e, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r }(e, (n = n || {}).path || "/socket.io"), o = i.source, s = i.id, a = i.path, c = xt[s] && a in xt[s].nsps; return n.forceNew || n["force new connection"] || !1 === n.multiplex || c ? r = new Nt(o, n) : (xt[s] || (xt[s] = new Nt(o, n)), r = xt[s]), i.query && !n.query && (n.query = i.queryKey), r.socket(i.path, n) } return i(Lt, { Manager: Nt, Socket: Bt, io: Lt, connect: Lt }), Lt }));


class ChromeStorage {
    constructor(name) {
        if (typeof name !== 'string') throw new Error('unknown value for a storage key');
        this.name = name;
    }
    async GET() {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(this.name, (result) => { resolve(result[this.name]); });
        });
    }
    async SET(db) {
        return new Promise((resolve, reject) => {
            const obj = {};
            obj[this.name] = db;
            chrome.storage.local.set(obj, function () { resolve(db) });
        });
    }
}
class ChromeStorageDB {
    constructor({ name, attributes }) {
        let storageSetup = this.#constructionCheck({ name, attributes });
        /*db name (a string)*/
        this.name = storageSetup.name;
        /*
        attributes has 5 parameter
        type: ('string','number','boolean') -defalut 'number' 
        autoIncrement: (true,false) - default false
        primaryKey: (true,false) - default false
        allowNull: (true,false) - default false
        default: ('string','number','boolean',null) - default null
        */
        this.attributes = storageSetup.attributes;
    }
    #constructionCheck({ name, attributes }) {
        if (!name) throw new Error('storage must have a name value(string)');
        if (!attributes) throw new Error('storage must have some attributes(object)');

        let attributeKeys = Object.keys(attributes);
        if (attributeKeys.length == 0) throw new Error('attributes must have 1 or more keys');
        /* if(attributeKeys.length != [...new Set(attributeKeys)].length) throw new Error ('each attribute must be unique')*/
        for (let i = 0; i < attributeKeys.length; i++) {
            let attribute = attributes[attributeKeys[i]];
            if (typeof attribute.type == 'undefined') attribute.type = 'number';
            if (typeof attribute.autoIncrement == 'undefined') attribute.autoIncrement = false;
            if (typeof attribute.primaryKey == 'undefined') attribute.primaryKey = false;
            if (typeof attribute.allowNull == 'undefined') attribute.allowNull = false;
            if (typeof attribute.default == 'undefined') attribute.default = null;

            if (!(attribute.type == 'number' || attribute.type == 'boolean' || attribute.type == 'string' /*|| attribute.type=='object' || attribute.type=='array'*/)) throw new Error('unknown attribute type')
            if (!(attribute.autoIncrement === true || attribute.autoIncrement === false)) throw new Error('unknown value for autoIncrement');
            if (!(attribute.primaryKey === true || attribute.primaryKey === false)) throw new Error('unknown value for primaryKey');
            if (!(attribute.allowNull === true || attribute.allowNull === false)) throw new Error('unknown value for allowNull');

            if (attribute.type != 'number' && attribute.autoIncrement) throw new Error('autoIncrement is only for number data type');
            if (attribute.primaryKey && attribute.default != null) throw new Error('primaryKey with default value is not possible');

            if (attribute.default != null && typeof attribute.default != attribute.type) throw new Error('default value should be equal to key type')
        }
        return { name, attributes };
    }
    async #build() {
        let thisDB = await this.#getDB();
        if (typeof thisDB != 'object' || !Array.isArray(thisDB)) {
            await this.#setDB([]);
            thisDB = await this.#getDB();
        }
    }
    async #getDB() {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(this.name, (result) => { resolve(result[this.name]); });
        });
    }
    async #setDB(db) {
        return new Promise((resolve, reject) => {
            let obj = {};
            obj[this.name] = db;
            chrome.storage.local.set(obj, function () { resolve(true) });
        });
    }
    #POSTCheck = (row) => {
        if (typeof row != 'object' && Array.isArray(row)) throw new Error('New row is not enough to get entried');
        if (!row) throw new Error('Row is just empty');
        let rowKeys = Object.keys(row);
        if (!rowKeys.length) throw new Error('Row is  empty');

        let attributes = this.attributes;
        let attributesKeys = Object.keys(attributes);
        for (let i = 0; i < attributesKeys.length; i++) {
            let attribute = attributes[attributesKeys[i]];
            if (!attribute.autoIncrement) {
                if (typeof (row[attributesKeys[i]]) != attribute.type || typeof (row[attributesKeys[i]]) == 'undefined') {
                    if (typeof (row[attributesKeys[i]]) != 'undefined') throw new Error(`wrong data type for '${attributesKeys[i]}' key`);
                    if (attribute.primaryKey) throw new Error(`Primary key '${attributesKeys[i]}' must be a valid data`);
                    if (attribute.default == null && !attribute.allowNull) throw new Error(`No valid data provided for '${attributesKeys[i]}' key`);
                    row[attributesKeys[i]] = attribute.default;
                }
            }
        }
        return row;
    }
    async POST(row) {
        await this.#build();
        let db = await this.#getDB();
        row = this.#POSTCheck(row);
        let attributes = this.attributes;
        let attributesKeys = Object.keys(attributes);
        for (let i = 0; i < attributesKeys.length; i++) {
            let attribute = attributes[attributesKeys[i]];
            if (attribute.autoIncrement) {
                row[attributesKeys[i]] = 1;
                if (db.length != 0) {
                    row[attributesKeys[i]] = (db[db.length - 1].id) + 1;
                }
            }
            if (attribute.primaryKey) {
                if (db.find(data => { return data[attributesKeys[i]] === row[attributesKeys[i]] }) != undefined)
                    throw new Error(`primaryKey '${attributesKeys[i]}' value is not unique`);
                // console.log(`primaryKey '${attributesKeys[i]}' value is not unique`);
            }
        }
        db.push(row);
        await this.#setDB(db);
        return db;
    }
    async GET(where) {
        await this.#build();
        where = this.#WHERECheck(where);
        const db = await this.#getDB();
        if (where == null) return db;
        return this.#whereReturn({ db, where, logic: true })
    }
    async DELETE(where) {
        await this.#build();
        where = this.#WHERECheck(where);
        if (where == null) return 0;
        const db = await this.#getDB();
        const results = this.#whereReturn({ db, where, logic: false });
        await this.#setDB(results);
        return results;
    }
    #WHERECheck(where) {
        if (where === undefined) return null;

        if (where != null)
            if (typeof where != 'object' || Array.isArray(where))
                throw new Error('where key got unexpected value');
        let whereKeys = Object.keys(where);
        if (whereKeys.length == 0) return null;
        let attributes = this.attributes;
        let attributeKeys = Object.keys(attributes);
        for (let i = 0; i < whereKeys.length; i++) {
            let whereKeyValues = where[whereKeys[i]];
            if (!attributeKeys.includes(whereKeys[i]))
                throw new Error('where key got keys that are not availabale on attribute keys.');
            if (!whereKeyValues)
                throw new Error('you must be valid object as where key value');
            if (!Array.isArray(whereKeyValues))
                throw new Error('where key value got unexpected value');
            if (whereKeyValues.length == 0)
                throw new Error('where key value atleast need one item');
            whereKeyValues.forEach(whereKeyValue => {
                let whereKeyValueKeys = Object.keys(whereKeyValue);
                if (whereKeyValueKeys.length != 2)
                    throw new Error('where key value keys must have 2 key');
                if (typeof whereKeyValue.operation != 'string')
                    throw new Error('opeartion value must be string');
                if (typeof whereKeyValue.value != attributes[whereKeys[i]].type)
                    throw new Error('value type must match');
            });
        }
        return where;
    }

    #SETCheck(set) {
        if (set === undefined || set === null) return null;
        if (set != null)
            if (typeof set != 'object' || Array.isArray(set))
                throw new Error('set key got invalid value');
        const setKeys = Object.keys(set);
        if (setKeys.length == 0) throw new Error('must have 1 or more keys in set');

        const attributes = this.attributes;
        const attributeKeys = Object.keys(attributes);
        for (let i = 0; i < setKeys.length; i++) {
            const setKey = setKeys[i];
            if (!attributeKeys.includes(setKeys) && typeof set[setKey] != attributes[setKey].type)
                throw new Error('set keys value is not defined as key value');
            if (attributes[setKey].autoIncrement) throw new Error('autoIncrement should not be changed');
            if (attributes[setKey].primaryKey) throw new Error('primaryKey should not be changed');
        }
        return set;
    }
    #whereReturn({ db, where, logic, hook }) {
        if (typeof logic != 'boolean') throw new Error('there must be a boolean logic value');
        if (hook == undefined) hook = null;
        const dbLength = db.length;
        let result = [];
        for (let j = 0; j < dbLength; j++) {
            let row = db[j];
            const whereKeys = Object.keys(where);
            let interKey = true;
            for (let i = 0; i < whereKeys.length; i++) {
                const whereKey = whereKeys[i];
                const whereKeyValues = where[whereKey];
                let intraKey = false;
                for (let k = 0; k < whereKeyValues.length; k++) {
                    const operation = whereKeyValues[k].operation;
                    const value = whereKeyValues[k].value;
                    switch (operation) {
                        case 'equal':
                            intraKey = intraKey || row[whereKey] === value;
                            break;
                        case 'notEqual':
                            intraKey = intraKey || row[whereKey] !== value;
                            break;
                        default:
                            throw new Error('invalid operation')
                            break;
                    }
                }
                interKey = interKey && intraKey;
            }
            if ((interKey && logic) || (!interKey && !logic)) {
                if (hook === null) {
                    result.push(row);
                } else {
                    row = hook(row);
                }
            }
        }
        if (hook === null) return result; else return db;
    }
    async PUT({ set, where }) {
        await this.#build();
        where = this.#WHERECheck(where);
        set = this.#SETCheck(set);
        if (where == null) return 0;
        let db = await this.#getDB();
        const hook = (row) => {
            const setKeys = Object.keys(set);
            const setValues = Object.values(set);
            for (let i = 0; i < setKeys.length; i++) {
                row[setKeys[i]] = setValues[i];
            }
            return row;
        }
        db = this.#whereReturn({ db, where, logic: true, hook });

        await this.#setDB(db);
        return db;
    }
}
const essentials = {
    sleep: (ms) => {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }
}
const globals = {
    // "Dealer Group": group,
    // "Dealership Name": name,
    // // title case
    // "Used or New": type,
    // "URL": `${baseUrl}${item.link}`,
    // "Year": item.year,
    // "Make": item.make,
    // "Model": item.model,
    // "MakeModel": `${item.make} ${item.model}`,
    // "Trim": item.trim,
    // "Price": item.trackingPricing?.askingPrice || "0",
    // "Mileage": item.trackingAttributes.filter(attr => attr.name === "odometer")[0]?.value || "7",
    // "Vin#": item.vin,
    // "Date": new Date().toLocaleDateString("en-US")
    columns: [
        { date: "Date" },
        { dealerGroup: "Dealer Group" },
        { dealershipName: "Dealership Name" },
        { year: "Year" },
        { make: "Make" },
        { makeModel: "MakeModel" },
        { trim: "Trim" },
        { mileage: "Mileage" },
        { price: "Price" },
        { model: "Model" },
        { url: "URL" },
        { usedOrNew: "Used" },
        { vin: "Vin#" },
    ],
    consoleButtons:{
        start_scraping:'START_SCRAPING_BUTTON',
    }
}
const fixedData = {
    metaInformation: {
        extensionSwitch: {
            title: 'Extension Switch',
            type: 'checkbox',
            defaultValue: false,
            point: 'checked',
            interactive: true,
            requiredToStart: true,
        },
        debugModeSwitch: {
            title: 'Debug Switch',
            type: 'checkbox',
            defaultValue: false,
            point: 'checked',
            interactive: true,
            requiredToStart: false,
        }


    },
    workingSelectors: {
        content: {
            console: 'CONTENT_CONSOLE',
        }
    },
    localServer: {
        port: 3535,

    },


};
const generalUtilities = {
    isProgramReady: async () => {
        let values = await new ChromeStorage('metaInformation').GET();
        values = values == null ? {} : values;
        const metas = fixedData.metaInformation;
        const metaKeys = Object.keys(metas);
        for (let i = 0; i < metaKeys.length; i++) {
            const metaKey = metaKeys[i];
            const meta = metas[metaKey];
            if (meta.requiredToStart) {
                if (values[metaKey] === undefined || values[metaKey] === false) {
                    console.log('meta not found', metaKey, values[metaKey]);
                    return false;
                }
            }
        }
        return true;
    },
    setupConsoleBoard: () => {
        if (document.getElementById(fixedData.workingSelectors.content.console)) {
            document.getElementById(fixedData.workingSelectors.content.console).remove();
        }
        const consoleBoard = document.createElement('div');
        consoleBoard.id = fixedData.workingSelectors.content.console;
        const header = document.createElement('div');
        header.id = fixedData.workingSelectors.content.console + 'header';
        header.innerText = 'Starting Console...';
        const dynamic = document.createElement('div');
        dynamic.id = fixedData.workingSelectors.content.console + 'dynamic';
        const standard = document.createElement('div');
        standard.id = fixedData.workingSelectors.content.console + 'standard';
        consoleBoard.append(header, dynamic, standard);
        dragElement(consoleBoard);
        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                // e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
        document.body.appendChild(consoleBoard);
    },
    clearConsole: () => {
        const consoleBoardStandard = document.getElementById(fixedData.workingSelectors.content.console + 'standard');
        consoleBoardStandard.innerHTML = '';
    },
    showDataOnConsole: (data) => {
        const standard = document.getElementById(fixedData.workingSelectors.content.console + 'standard');
        const content = document.createElement('div');
        content.classList.add('font-sub');
        content.innerText = data;
        standard.appendChild(content);
        console.log(data);
    },
    showDataOnConsoleDynamic: (data) => {
        const consoleBoardDynamic = document.getElementById(fixedData.workingSelectors.content.console + 'dynamic');
        consoleBoardDynamic.innerText = data;
        console.log(data);
    },
    showConsoleError: () => {
        const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
        consoleBoard.classList.add('consoleAlert');
        const refreshButton = document.createElement('button');
        refreshButton.classList.add('buttons');
        refreshButton.innerText = 'Refresh';
        refreshButton.onclick = () => {
            window.location.reload();
        };
        consoleBoard.appendChild(refreshButton);
    },
    showDebugButton: (name, callback,id) => {
        const consoleBoardStandard = document.getElementById(fixedData.workingSelectors.content.console + 'standard');
        const button = document.createElement('button');
        button.classList.add('buttons');
        if(id) button.id = id;
        button.innerText = name;
        button.onclick = callback;
        consoleBoardStandard.appendChild(button);
    },
    showWorkingStep: async (step) => {
        const workingStepDB = new ChromeStorage('workingStep');
        const workingStep = await workingStepDB.GET();
        const consoleBoarHeader = document.getElementById(fixedData.workingSelectors.content.console + 'header');
        consoleBoarHeader.innerText = step || workingStep;
    },
    pageRedirection: async (url, message) => {
        // show data on console
        generalUtilities.showDataOnConsole('Redirection:' + url);
        generalUtilities.showDataOnConsole('Message:' + message);
        const redirectionMessagesDB = new ChromeStorage('redirectionMessages');
        const isRedirectionAllowed = async (message) => {
            let messages = await redirectionMessagesDB.GET();
            if (messages != null) {
                messages.unshift(message);
                messages = messages.slice(0, 10);
                await redirectionMessagesDB.SET(messages);
                if (messages.length > 5) {
                    if (messages[0] == message && messages[1] == message && messages[2] == message && messages[3] == message && messages[4] == message) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            } else {
                await redirectionMessagesDB.SET([`${message}`]);
                return true;
            }
        }
        if (await isRedirectionAllowed(message)) {
            const metaInformationDB = new ChromeStorage('metaInformation');
            const metaInformation = await metaInformationDB.GET();
            const debugModeSwitch = metaInformation.debugModeSwitch;
            if (debugModeSwitch) {
                const button = document.createElement('button');
                button.innerText = 'Redirect';
                button.onclick = () => {
                    window.location.href = url;
                }
                const standard = document.getElementById(fixedData.workingSelectors.content.console + 'standard');
                standard.appendChild(button);
            } else {
                window.location.href = url;
            }

        } else {
            const messages = await redirectionMessagesDB.GET();
            for (let i = 0; i < messages.length; i++) {
                generalUtilities.showDataOnConsole(messages[i]);
            }
            const button = document.createElement('button');
            button.innerText = 'Continue or Try again';
            button.onclick = async () => {
                redirectionMessagesDB.SET([]);
                generalUtilities.showDataOnConsole("Error data cleared");
                await generalUtilities.pageRedirection(url, message);

            }
            const standard = document.getElementById(fixedData.workingSelectors.content.console + 'standard');
            standard.appendChild(button);
            return false;
        }
    },
    waitWithVisual: async (waitingTime) => {
        waitingTime = parseInt(waitingTime);
        let stopTimer = false;
        const timer = document.createElement('div');
        timer.classList.add('font-header');
        const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console + 'standard');
        consoleBoard.replaceChildren(timer);
        const stopButton = document.createElement('button');
        stopButton.innerText = 'Stop';
        stopButton.classList.add('btn', 'btn-danger', 'btn-sm');
        stopButton.addEventListener('click', () => {
            stopTimer = true;
        });
        consoleBoard.appendChild(stopButton);
        for (let i = waitingTime; i >= 0; i--) {
            timer.innerText = `Waiting for ${i} seconds`;
            await essentials.sleep(1000);
            if (stopTimer) {
                break;
            }
        }
    },
    getElementBySelector: async ({ parent, data, instant, maxTimeOut = 1, required, name, debug = true }) => {
        const { type, isMonoExpected, selector, innerText, value, validator } = data;
        let count = 0;
        let result = null;
        do {
            count++;
            if (count <= maxTimeOut) {
                if (!instant) {
                    await essentials.sleep(1000);
                }
                if (debug) {
                    generalUtilities.showDataOnConsoleDynamic(`${count} Seconds Waiting for element : ${name || selector}`)
                }
            } else {
                break;
            }
            let elements = null;
            if (parent) {
                elements = parent[type](selector);
            } else {
                elements = document[type](selector);
            }

            if (isMonoExpected) {
                if (elements.length == 1) {
                    if (validator) {
                        if (validator(elements[0])) {
                            result = elements[0];
                            break;
                        }
                    } else if (innerText) {
                        if (elements[0].innerText.includes(innerText)) {
                            result = elements[0];
                            break;
                        }
                    } else if (value) {
                        if (elements[0].value.includes(value)) {
                            result = elements[0];
                            break;
                        }
                    } else {
                        result = elements[0];
                        break;
                    }
                } else if (elements.length > 1) {
                    if (validator) {
                        const filteredElements = [];
                        for (let i = 0; i < elements.length; i++) {
                            if (validator(elements[i])) {
                                filteredElements.push(elements[i]);
                            }
                        }
                        if (filteredElements.length === 1) {
                            result = filteredElements[0];
                            break;
                        }
                    } else if (innerText) {
                        const filteredElements = [];
                        for (let i = 0; i < elements.length; i++) {
                            console.log(elements[i].innerText, innerText)
                            if (elements[i].innerText.includes(innerText)) {
                                filteredElements.push(elements[i]);
                            }
                        }
                        if (filteredElements.length === 1) {
                            result = filteredElements[0];
                            break;
                        }
                    } else if (value) {
                        const filteredElements = [];
                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].value.includes(value)) {
                                filteredElements.push(elements[i]);
                            }
                        }
                        if (filteredElements.length === 1) {
                            result = filteredElements[0];
                            break;
                        }
                    }
                }
            } else {
                if (elements.length > 0) {
                    if (validator) {
                        const filteredElements = [];
                        for (let i = 0; i < elements.length; i++) {
                            if (validator(elements[i])) {
                                filteredElements.push(elements[i]);
                            }
                        }
                        if (filteredElements.length > 0) {
                            result = filteredElements;
                            break;
                        }
                    } else if (innerText) {
                        const filteredElements = [];
                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].innerText.includes(innerText)) {
                                filteredElements.push(elements[i]);
                            }
                        }
                        if (filteredElements.length > 0) {
                            result = filteredElements;
                            break;
                        }
                    } else if (value) {
                        const filteredElements = [];
                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].value.includes(value)) {
                                filteredElements.push(elements[i]);
                            }
                        }
                        if (filteredElements.length > 0) {
                            result = filteredElements;
                            break;
                        }
                    } else {
                        result = elements;
                        break;
                    }
                }
            }
        } while (!instant);
        if (required && !result) {
            generalUtilities.showDataOnConsoleDynamic(`Element not found and required: ${name || selector}`);
            generalUtilities.showConsoleError();
            throw new Error({ parent, data, instant, maxTimeOut, required, name });
        } else {
            if (!result) {
                generalUtilities.showDataOnConsoleDynamic(`Element not found: ${name || selector}`);
                return null;
            } else {
                if (debug) {
                    generalUtilities.showDataOnConsoleDynamic(``)
                }
                return result;
            }
        }
    },
    americanHour: () => {
        return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })).getHours();
    },
    positionWindow: async () => {
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInformation = await metaInformationDB.GET() || {};
        if (metaInformation.position != null) {
            // 1 means left top
            // 2 means right bottom
            // 3 means right top
            // 4 means left bottom
            const position = metaInformation.position;
            const display = await chrome.system.display.getInfo();
            let displayInfo = null;
            if (display.length > 0) {
                const primaryDisplay = display.find(display => display.isPrimary);
                console.log(primaryDisplay)
                if (primaryDisplay) {

                    displayInfo = primaryDisplay.workArea;
                }
            }
            if (displayInfo != null) {
                const height = displayInfo.height / 2;
                const width = displayInfo.width / 2;
                let left = displayInfo.left;
                let top = displayInfo.top;
                switch (position) {
                    case "1":
                        left = displayInfo.left;
                        top = displayInfo.top;
                        break;
                    case "2":
                        left = displayInfo.left;
                        top = displayInfo.top + height;
                        break;
                    case "3":
                        left = displayInfo.left + width;
                        top = displayInfo.top;
                        break;
                    case "4":
                        left = displayInfo.left + width;
                        top = displayInfo.top + height;
                        break;
                }
                // update current window position
                const windowPosition = {
                    left: left,
                    top: top,
                    width: width,
                    height: height,
                }
                console.log('windowPosition', windowPosition)
                await chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, windowPosition);

            }

        }
    },
    windowPosition: async () => {
        const windowPosition = await chrome.windows.get(chrome.windows.WINDOW_ID_CURRENT);
        console.log(windowPosition)
        return windowPosition;
    },
    clearWindowContents: () => {
        document.head.remove();
        document.body.innerHTML = '';
        // remove head
    }
};
const contentScripts = {
    preprocessDataObject: (data) => {
        // trim data
        const result = {};
        for (const key in data) {
            result[key] = typeof data[key] == 'string' ? data[key].trim() : data[key];
        }
        return result;
    },
    showWorkingStepOptions: () => {
        generalUtilities.showDebugButton('Start Dealer Scraping', async () => {
            const workingStepDB = new ChromeStorage('workingStep');
            const dealerScrapingIndexDB = new ChromeStorage('dealerScrapingIndex');
            await dealerScrapingIndexDB.SET(0);
            // await contentScripts.localServerAPI.removeAllScraped();
            const allListingsDB = new ChromeStorage('allListings');
            await allListingsDB.SET([]);
            await workingStepDB.SET('dealerScraping');
            window.location.reload();
        },globals.consoleButtons.start_scraping);
        // // Clone Airtable
        // generalUtilities.showDebugButton('Start Cloning Airtable', async () => {
        //     const workingStepDB = new ChromeStorage('workingStep');
        //     await workingStepDB.SET('cloningAirtable');
        //     await contentScripts.airtable.cloneAirtableToDB(fixedData.airtable.dev);
        //     generalUtilities.showDataOnConsoleDynamic('Airtable Cloned');
        // });

        // // process Queue
        // generalUtilities.showDebugButton('Start Processing Queue', async () => {
        //     const workingStepDB = new ChromeStorage('workingStep');
        //     await workingStepDB.SET('queueProcessing');
        //     await contentScripts.localServerAPI.processQueue();
        //     generalUtilities.showDataOnConsoleDynamic('Queue Processed');
        // });

        // work on queue
        generalUtilities.showDebugButton('Send Scraped Data', async () => {
            const allListingsDB = new ChromeStorage('allListings');
            const allListings = await allListingsDB.GET();
            // const headers = Object.keys(allListings[0]);
            const headers = contentScripts.getColumnheaders();
            const csvRows = [
                headers.join(','), // Header row
                ...allListings.map(row =>
                    headers.map(fieldName => {
                        // Wrap values in quotes to handle commas/newlines safely
                        const val = row[fieldName] === null || row[fieldName] === undefined ? '' : row[fieldName];
                        return JSON.stringify(val);
                    }).join(',')
                )
            ];
            const csvString = csvRows.join('\n');

            if (!allListings) {
                generalUtilities.showDataOnConsole('No listings to download.');

            } else {
                generalUtilities.showDataOnConsole(`Download ${allListings.length} listings.`);
                // :4566/api/sendMail
                const response = await fetch('http://localhost:4566/api/sendMail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: csvString, count: allListings.length }),
                });
                const data = await response.json();
                if (data.status === 'success') {
                    generalUtilities.showDataOnConsole('Email sent successfully.');
                    await allListingsDB.SET([]);
                    chrome.runtime.sendMessage({
                        action: "openNewTab"
                    });
                } else {
                    generalUtilities.showDataOnConsole('Failed to send email.');
                }
            }
            return
        });
        // if (!allListings || allListings.length === 0) {
        //     console.warn("No listings to download.");
        //     return;
        // }

        // // 1. Convert JSON to CSV



        // // 2. Trigger Download
        // const blob = new Blob([csvString], { type: 'text/csv' });
        // const url = URL.createObjectURL(blob);
        // const a = document.createElement('a');
        // a.href = url;
        // a.download = 'allListings.csv';
        // document.body.appendChild(a);
        // a.click();

        // // Cleanup
        // document.body.removeChild(a);
        // URL.revokeObjectURL(url);


    },
    getColumnPairs: () => {
        const columns = globals.columns;
        const columnsPair = {};
        for (let i = 0; i < columns.length; i++) {
            const key = Object.keys(columns[i])[0];
            const value = columns[i][key];
            columnsPair[key] = value;
        }
        return columnsPair;
    },
    getColumnheaders: () => {
        const columns = globals.columns;
        const headers = [];
        for (let i = 0; i < columns.length; i++) {
            const key = Object.keys(columns[i])[0];
            const value = columns[i][key];
            headers.push(value);
        }
        return headers;
    },
    scrapingProcess: {
        getInventory: async ({
            group,
            name,
            type,
            baseUrl,
            referrer,
            siteId,
            pageAlias,
            pageId,
            listingConfigId,
            inventoryParametersAccountId
        }) => {
            // columns {key:value}
            const columnsPair = contentScripts.getColumnPairs();
            const singlePage = async (start = 0) => {
                const res = await fetch(`${baseUrl}/api/widget/ws-inv-data/getInventory`, {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en-US,en;q=0.9",
                        "content-type": "application/json",
                        "priority": "u=1, i",
                        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin"
                    },
                    "referrer": referrer,
                    "body": JSON.stringify({
                        "siteId": siteId,
                        "locale": "en_US",
                        "device": "DESKTOP",
                        "pageAlias": pageAlias,
                        "pageId": pageId,
                        "windowId": "inventory-data-bus2",
                        "widgetName": "ws-inv-data",
                        "inventoryParameters": (() => {
                            const params = {
                                "start": [
                                    `${start}`
                                ]
                            };
                            if (inventoryParametersAccountId) {
                                params.accountId = inventoryParametersAccountId;
                            }
                            return params;
                        })(),
                        "preferences": {
                            "widgetClasses": "spacing-reset",
                            "pageSize": "18",
                            "listing.config.id": listingConfigId,
                            "listing.boost.order": "account,make,model,bodyStyle,trim,optionCodes,modelCode,fuelType",
                            "removeEmptyFacets": "true",
                            "removeEmptyConstraints": "true",
                            "displayerInstanceId": "INVENTORY_LISTING_DEFAULT_AUTO_USED:inventory-listing1_1498243662",
                            "required.display.sets": "TITLE,IMAGE_ALT,IMAGE_TITLE,PRICE,FEATURED_ITEMS,CALLOUT,LISTING,HIGHLIGHTED_ATTRIBUTES",
                            "required.display.attributes": "accountCity,accountCountry,accountId,accountName,accountState,accountZipcode,askingPrice,attributes,autodataCaId_att_data,bed,bodyStyle,cab,carfaxIconUrl,carfaxIconUrlBlackWhite,carfaxUrl,carfaxValueBadgeAltText,categoryName,certified,chromeId_att_data,cityMpg,classification,classificationName,comments,courtesy,cpoChecklistUrl,daysOnLot,dcpaisVideoToken_att_data,deliveryDateRange,doors,driveLine,ebayAuctionId,eleadPrice,eleadPriceLessOEMCash,engine,engineSize,equipment,extColor,exteriorColor,fuelType,globalVehicleTrimId,gvLongTrimDescription,gvTrim,hasCarFaxReport,hideInternetPrice,highwayMpg,id,incentives,intColor,interiorColor,interiorColorCode,internetComments,internetPrice,inventoryDate,invoicePrice,isElectric_att_b,key,location,make,marketingTitle,mileage,model,modelCode,msrp,normalExteriorColor,normalFuelType,normalInteriorColor,numSaves,odometer,oemSerialNumber,oemSourcedMerchandisingStatus,optionCodes,options,packageCode,packages_internal,parent,parentId,paymentMonthly,payments,primary_image,propertyDescription,retailValue,saleLease,salePrice,sharedVehicle,status,stockNumber,transmission,trim,trimLevel,type,uuid,video,vin,warrantyDescription,wholesalePrice,year,cpoTier",
                            "required.display.attributes.extra": "",
                            "facetInstanceId": "listing",
                            "geoLocationEnabled": "false",
                            "defaultGeoDistRadius": "0",
                            "geoRadiusValues": "0,5,25,50,100,250,500,1000",
                            "showCertifiedFranchiseVehiclesOnly": "false",
                            "showFranchiseVehiclesOnly": "true",
                            "extraFranchisesForUsedWindowStickers": "lincoln",
                            "suppressAllConditions": "compliant",
                            "violateUsedCompliance": "false",
                            "showOffSiteInventoryBanner": "false",
                            "showPhotosViewer": "true",
                            "offsetSharedVehicleImageByOne": "false",
                            "certifiedLogoColor": "",
                            "certifiedDefaultPath": "",
                            "certifiedDefaultLogoOnly": "false",
                            "transferBadgeImage": "",
                            "transferBadgeType": "DARK",
                            "transferLinkHref": "",
                            "certifiedBadgeLinkHref": "",
                            "certifiedBadgeTooltip": "",
                            "certifiedBadgeLinkTarget": "_self",
                            "inTransitStatuses": "",
                            "customInTransitLogoUrl": "",
                            "carfaxLogoBlackWhite": "false",
                            "hideCertifiedDefaultLogo": "false",
                            "sorts": "year,odometer,internetPrice,highwayMpg,cityMpg",
                            "sortsTitles": "YEAR,MILEAGE,PRICE,MPG HIGHWAY,MPG CITY",
                            "inventoryDateFormat": "MM_DD_YYYY_FORMAT",
                            "offsiteInventoryMarkup": "0",
                            "geoLocationEnhanced": "false",
                            "showLocationTab": "true",
                            "showEffectiveStartDate": "true",
                            "showIncentiveTitleSubText": "true",
                            "showIncentiveAmountAndLabel": "true",
                            "showIncentiveDisclaimer": "true",
                            "showIncentiveEffectiveDates": "true",
                            "newCarBoostEnable": "false",
                            "newCarBoostListingConfigId": "auto-new",
                            "numberOfSpotlightVehicles": "0",
                            "disableGeodistSort": "false",
                            "linkToDealCentralVDP": "false",
                            "removeOdometerOnNew": "true",
                            "finalPriceOverrideField": ""
                        },
                        "includePricing": true,
                        "flags": {
                            "vcda-js-environment": "live",
                            "ws-scripts-concurrency-limits-concurrency": 16,
                            "ws-scripts-concurrency-limits-queue": 16,
                            "ws-scripts-concurrency-limits-enabled": true,
                            "ws-itemlist-service-version": "v5",
                            "ws-itemlist-model-version": "v1",
                            "ws-scripts-inline-css": true,
                            "ws-inv-data-fetch-timeout": 30000,
                            "ws-inv-data-fetch-retries": 2,
                            "ws-inv-data-use-wis": true,
                            "ws-inv-data-wis-fetch-timeout": 5000,
                            "srp-track-fetch-resource-timing": false,
                            "ws-inv-data-location-service-fetch-timeout": 3000,
                            "ws-inv-data-location-service-fetch-retries": 2,
                            "enable-client-side-geolocation-ws-inv-data": true,
                            "ws-inv-data-spellcheck-proxy-timeout": 5000,
                            "ws-inv-data-spellcheck-server-timeout": 1500,
                            "ws-inv-data-spellcheck-server-retries": 0,
                            "srp-toggle-databus-editor": true,
                            "srp-send-ws-inv-data-prefs-to-wis": true,
                            "ddc-ab-testing": "CONTROL",
                            "ws-inv-data-toggle-refactor": false
                        }
                    }),
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                });
                const data = await res.json();
                const listings = [];

                for (const item of data.inventory) {
                    listings.push({
                        [columnsPair.dealerGroup]: group,
                        [columnsPair.dealershipName]: name,
                        // title case
                        [columnsPair.usedOrNew]: type,
                        [columnsPair.url]: `${baseUrl}${item.link}`,
                        [columnsPair.year]: item.year,
                        [columnsPair.make]: item.make,
                        [columnsPair.model]: item.model,
                        [columnsPair.makeModel]: `${item.make} ${item.model}`,
                        [columnsPair.trim]: item.trim,
                        [columnsPair.price]: item.trackingPricing?.askingPrice || "0",
                        [columnsPair.mileage]: item.trackingAttributes.filter(attr => attr.name === "odometer")[0]?.value || "7",
                        [columnsPair.vin]: item.vin,
                        [columnsPair.date]: new Date().toLocaleDateString("en-US")

                    });
                }
                return {
                    pageSize: data.pageInfo.pageSize,
                    totalCount: data.pageInfo.totalCount,
                    pageStart: data.pageInfo.pageStart,
                    listings
                }
            };
            const { pageSize, totalCount } = await singlePage();
            const totalPages = Math.ceil(totalCount / pageSize);
            console.log({ totalCount, pageSize, totalPages });
            const allListings = [];
            for (let page = 0; page < totalPages; page++) {
                await contentScripts.scrapUpdate(`page ${page + 1} / ${totalPages}`);
                const start = page * pageSize;
                const { listings } = await singlePage(start);
                allListings.push(...listings);
            }
            console.log(`Fetched ${allListings.length} total listings`);
            console.log(allListings);
            const allListingsDB = new ChromeStorage('allListings');
            // add with existing
            const existingListings = await allListingsDB.GET();
            await allListingsDB.SET(existingListings ? existingListings.concat(allListings) : allListings);
            return allListings;
        },
        dotnet: async ({
            apiUrl,
            referrer,
            name,
            type,

        }) => {
            const columnsPair = contentScripts.getColumnPairs();
            const singlePage = async (page = 1) => {
                const res = await fetch(`${apiUrl}${page}`, {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en-US,en;q=0.9",
                        "priority": "u=1, i",
                        "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin"
                    },
                    "referrer": referrer,
                    "body": null,
                    "method": "GET",
                    "mode": "cors",
                    "credentials": "include"
                });
                const data = await res.json();
                const listings = [];
                console.log(data)
                for (const item of data.DisplayCards) {
                    listings.push({
                        [columnsPair.dealerGroup]: "A",
                        [columnsPair.dealershipName]: name,
                        [columnsPair.usedOrNew]: type,
                        [columnsPair.url]: item.VehicleCard.VehicleDetailUrl,
                        [columnsPair.year]: item.VehicleCard.VehicleYear,
                        [columnsPair.make]: item.VehicleCard.VehicleMake,
                        [columnsPair.model]: item.VehicleCard.VehicleModel,
                        [columnsPair.makeModel]: `${item.VehicleCard.VehicleMake} ${item.VehicleCard.VehicleModel}`,
                        [columnsPair.trim]: item.VehicleCard.VehicleTrim,
                        [columnsPair.price]: item.VehicleCard.VehicleMsrp,
                        [columnsPair.mileage]: item.VehicleCard.Mileage?.replace(/\s+mi/g, "") || "7",
                        [columnsPair.vin]: item.VehicleCard.VehicleVin,
                        [columnsPair.date]: new Date().toLocaleDateString("en-US")
                    });
                }
                return {
                    totalPages: data.Paging.PaginationDataModel.TotalPages,
                    listings
                }

            };
            const { totalPages } = await singlePage();
            const allListings = [];
            for (let page = 1; page <= totalPages; page++) {
                await contentScripts.scrapUpdate(`page ${page} / ${totalPages}`);
                const { listings } = await singlePage(page);
                allListings.push(...listings);
            }
            console.log(`Fetched ${allListings.length} total listings`);
            console.log(allListings);
            const allListingsDB = new ChromeStorage('allListings');
            // add with existing
            const existingListings = await allListingsDB.GET();
            await allListingsDB.SET(existingListings ? existingListings.concat(allListings) : allListings);
            return allListings;
        },
        searchHtml: async ({
            referrer,
            baseUrl,
            name,
            type,
            pageSize,
            group
        }) => {
            const columnsPair = contentScripts.getColumnPairs();
            const singlePage = async (page = 1, vin = true) => {
                const res = await fetch(`${baseUrl}/inventory/search`, {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en-US,en;q=0.9",
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "priority": "u=1, i",
                        "sec-ch-device-memory": "8",
                        "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
                        "sec-ch-ua-arch": "\"x86\"",
                        "sec-ch-ua-full-version-list": "\"Not(A:Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"144.0.7559.96\", \"Google Chrome\";v=\"144.0.7559.96\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-model": "\"\"",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "x-requested-with": "XMLHttpRequest"
                    },
                    "referrer": referrer,
                    "body": `PageNumber=${page}&Sort=MakeAsc&StockNumber=&Condition=&BodyStyle=&Make=&MaxPrice=&Mileage=&SoldStatus=AllVehicles&StockNumber=&X-Requested-With=XMLHttpRequest`,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                });
                // html text
                const text = await res.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'text/html');
                const listingElements = doc.querySelectorAll('li.vehicle-snapshot');
                console.log(`Found ${listingElements.length} listings on page ${page}`);
                const totalElm = doc.querySelector('.data-inventory-total-records').value;
                if (!vin) {
                    return { listings: [], totalPages: Math.ceil(totalElm / pageSize) };
                }
                console.log(`Total records: ${totalElm}`);
                const listings = [];
                for (let i = 0; i < listingElements.length; i++) {
                    const elm = listingElements[i];
                    await contentScripts.scrapUpdate(`page::${page} / ${totalPages}_list::${i + 1} / ${listingElements.length}`);
                    const previousScriptSiblingElm = elm.previousElementSibling;
                    const scriptContent = previousScriptSiblingElm.textContent;
                    const jsonData = JSON.parse(scriptContent);
                    const listing = {
                        [columnsPair.dealerGroup]: group,
                        [columnsPair.dealershipName]: name,
                        [columnsPair.usedOrNew]: type,
                        [columnsPair.url]: (() => {
                            const titleElm = elm.querySelector('h3 a');
                            return titleElm ? `${baseUrl}${titleElm.getAttribute('href')}` : "";
                        })(),
                        [columnsPair.year]: jsonData.vehicleModelDate,
                        [columnsPair.make]: jsonData.manufacturer,
                        [columnsPair.model]: jsonData.model,
                        [columnsPair.makeModel]: `${jsonData.manufacturer} ${jsonData.model}`,
                        [columnsPair.trim]: (() => {
                            const title = elm.querySelector('h3 a')?.textContent || "";
                            const yearMakeModel = `${jsonData.vehicleModelDate} ${jsonData.manufacturer} ${jsonData.model}`;
                            return title.replace(yearMakeModel, "").trim();
                        })(),
                        [columnsPair.price]: jsonData.offers?.price || "0",
                        [columnsPair.mileage]: (() => {
                            // Convert NodeList to Array so .find() works
                            const items = [...elm.querySelectorAll('.vehicle-snapshot__main-info-item')];
                            const mileageElm = items.find(item => item.textContent.includes('Mileage'));

                            if (mileageElm) {
                                const mileageText = mileageElm.querySelector(".vehicle-snapshot__main-info");
                                return mileageText ? mileageText.textContent.replace(/[^0-9]/g, "") : "";
                            } else {
                                return "7";
                            }
                        })(),
                        [columnsPair.vin]: await (async () => {
                            const titleElm = elm.querySelector('h3 a');
                            // await new Promise(r => setTimeout(r, 1000));
                            const URL = titleElm ? `${baseUrl}${titleElm.getAttribute('href')}` : "";
                            const detailRes = await fetch(`${URL}`, {
                                "headers": {
                                    "accept": "*/*",
                                    "accept-language": "en-US,en;q=0.9",
                                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                    "priority": "u=1, i",
                                    "sec-ch-device-memory": "8",
                                    "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
                                    "sec-ch-ua-arch": "\"x86\"",
                                    "sec-ch-ua-full-version-list": "\"Not(A:Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"144.0.7559.96\", \"Google Chrome\";v=\"144.0.7559.96\"",
                                    "sec-ch-ua-mobile": "?0",
                                    "sec-ch-ua-model": "\"\"",
                                    "sec-ch-ua-platform": "\"Windows\"",
                                    "sec-fetch-dest": "empty",
                                    "sec-fetch-mode": "cors",
                                    "sec-fetch-site": "same-origin",
                                    "x-requested-with": "XMLHttpRequest"
                                },
                                "referrer": referrer,
                                "mode": "cors",
                                "credentials": "include"
                            });
                            const detailText = await detailRes.text();
                            const detailDoc = parser.parseFromString(detailText, 'text/html');
                            const vinElm = detailDoc.querySelector('.vdp-info-block__info-item-description.js-vin-message');
                            return vinElm ? vinElm.textContent.trim() : "";
                        })(),
                        [columnsPair.date]: new Date().toLocaleDateString("en-US")
                    };
                    listings.push(listing);
                    console.log(listing);
                };
                return { listings, totalPages: Math.ceil(totalElm / pageSize) };
            }
            const { totalPages } = await singlePage(1, false);
            const allListings = [];
            for (let page = 1; page <= totalPages; page++) {
                console.log(`Fetching page ${page} / ${totalPages}`);
                const { listings } = await singlePage(page);
                allListings.push(...listings);
            }
            console.log(`Fetched ${allListings.length} total listings`);
            console.log(allListings);
            const allListingsDB = new ChromeStorage('allListings');
            // add with existing
            const existingListings = await allListingsDB.GET();
            await allListingsDB.SET(existingListings ? existingListings.concat(allListings) : allListings);
            return allListings;
        }
    },
    scrapUpdate: async (text) => {
        const dealerScrapingIndexDB = new ChromeStorage('dealerScrapingIndex');
        let dealerScrapingIndex = await dealerScrapingIndexDB.GET() || 0;
        const scrapingMeta = contentScripts.scrapingMeta;
        generalUtilities.showDataOnConsoleDynamic(`${dealerScrapingIndex + 1} / ${scrapingMeta.length}:: ${text}`);
    },
    scrapingMeta: [
        {
            scrapingType: 'searchHtml',
            baseUrl: "https://www.mansfieldmotorspa.com",
            type: "Used",
            name: 'Mansfield Motors',
            referrer: "https://www.mansfieldmotorspa.com/cars-for-sale",
            pageSize: 24,
            group: "A",
        },
        {
            scrapingType: 'searchHtml',
            baseUrl: "https://www.allwheelsdriven.com",
            type: "Used",
            name: 'All Wheels Driven',
            referrer: "https://www.allwheelsdriven.com/cars-for-sale",
            pageSize: 24,
            group: "A",
        },
        {
            scrapingType: 'dotnet',
            apiUrl: "https://www.blaisechevymansfield.com/api/vhcliaa/vehicle-pages/cosmos/srp/vehicles/28760/3007642?host=www.blaisechevymansfield.com&pn=24&baseFilter=dHlwZT0nbic=&pt=",
            type: "New",
            name: 'Blaise Alexander Chevrolet of Mansfield',
            referrer: "https://www.blaisechevymansfield.com/searchnew.aspx?pt=1",
            baseUrl: "https://www.blaisechevymansfield.com",
            group: "A",
        },
        {
            scrapingType: 'dotnet',
            apiUrl: "https://www.blaisechevymansfield.com/api/vhcliaa/vehicle-pages/cosmos/srp/vehicles/28760/3007684?Dealership=Blaise%20Alexander%20Chevrolet%20of%20Mansfield&host=www.blaisechevymansfield.com&pn=24&baseFilter=dHlwZT0ndSc=&pt=",
            type: "Used",
            name: 'Blaise Alexander Chevrolet of Mansfield',
            referrer: "https://www.blaisechevymansfield.com/searchused.aspx?Dealership=Blaise%20Alexander%20Chevrolet%20of%20Mansfield&pt=1",
            baseUrl: "https://www.blaisechevymansfield.com",
            group: "A",
        },
        {
            scrapingType: 'dotnet',
            apiUrl: "https://www.elklandchevy.com/api/vhcliaa/vehicle-pages/cosmos/srp/vehicles/28190/2948967?Location=Elkland%2C%20PA&host=www.elklandchevy.com&pn=24&baseFilter=dHlwZT0nbic=&pt=",
            type: "New",
            name: 'Elkland Chevy',
            referrer: "https://www.elklandchevy.com/searchnew.aspx?Location=Elkland%2C%20PA",
            baseUrl: "https://www.elklandchevy.com",
            group: "A",
        },
        {
            scrapingType: 'dotnet',
            apiUrl: "https://www.elklandchevy.com/api/vhcliaa/vehicle-pages/cosmos/srp/vehicles/28190/2949009?Location=Elkland%2C%20PA&host=www.elklandchevy.com&pn=24&baseFilter=dHlwZT0ndSc=&pt=",
            type: "Used",
            name: 'Elkland Chevy',
            referrer: "https://www.elklandchevy.com/searchused.aspx?Location=Elkland%2C%20PA&pt=1",
            baseUrl: "https://www.elklandchevy.com",
            group: "A",
        },
        {
            "scrapingType": "getInventory",
            "group": "A",
            "name": "Matthews Motor Company",
            "type": "Used",
            "baseUrl": "https://www.matthewsmotorcompany.com",
            "referrer": "https://www.matthewsmotorcompany.com/used-inventory/index.htm",
            "siteId": "matthewsmotorcompanycovington",
            "pageAlias": "INVENTORY_LISTING_DEFAULT_AUTO_USED",
            "pageId": "matthewsmotorcompanycovington_SITEBUILDER_INVENTORY_SEARCH_RESULTS_AUTO_USED_V1_1",
            "listingConfigId": "auto-used",
            "inventoryParametersAccountId": null
        },
        {
            "scrapingType": "getInventory",
            "group": "A",
            "name": "Blaise Alexander Ford of Mansfield",
            "type": "New",
            "baseUrl": "https://www.blaisealexanderfordofmansfield.com",
            "referrer": "https://www.blaisealexanderfordofmansfield.com/new-inventory/index.htm",
            "siteId": "blaisealexandermansfieldfordfd",
            "pageAlias": "INVENTORY_LISTING_DEFAULT_AUTO_NEW",
            "pageId": "v9_INVENTORY_SEARCH_RESULTS_AUTO_NEW_V1_1",
            "listingConfigId": "auto-new",
            "inventoryParametersAccountId": null
        },
        {
            "scrapingType": "getInventory",
            "group": "A",
            "name": "Blaise Alexander Ford of Mansfield",
            "type": "Used",
            "baseUrl": "https://www.blaisealexanderfordofmansfield.com",
            "referrer": "https://www.blaisealexanderfordofmansfield.com/used-inventory/index.htm?accountId=blaisealexandermansfieldfordfd",
            "siteId": "blaisealexandermansfieldfordfd",
            "pageAlias": "INVENTORY_LISTING_DEFAULT_AUTO_USED",
            "pageId": "v9_INVENTORY_SEARCH_RESULTS_AUTO_USED_V1_1",
            "listingConfigId": "auto-used",
            "inventoryParametersAccountId": "blaisealexandermansfieldfordfd"
        },
        {
            "scrapingType": "getInventory",
            "group": "A",
            "name": "Blaise Alexander Chrysler Dodge Jeep Ram Mansfield",
            "type": "New",
            "baseUrl": "https://www.blaisealexandercdjr.com",
            "referrer": "https://www.blaisealexandercdjr.com/new-inventory/index.htm",
            "siteId": "blaisealexanderchryslerdodgejecllc",
            "pageAlias": "INVENTORY_LISTING_DEFAULT_AUTO_NEW",
            "pageId": "v9_INVENTORY_SEARCH_RESULTS_AUTO_NEW_V1_1",
            "listingConfigId": "auto-new",
            "inventoryParametersAccountId": null
        },
        {
            "scrapingType": "getInventory",
            "group": "A",
            "name": "Blaise Alexander Chrysler Dodge Jeep Ram Mansfield",
            "type": "Used",
            "baseUrl": "https://www.blaisealexandercdjr.com",
            "referrer": "https://www.blaisealexandercdjr.com/used-inventory/index.htm?accountId=blaisealexanderchryslerdodgejecllc",
            "siteId": "blaisealexanderchryslerdodgejecllc",
            "pageAlias": "INVENTORY_LISTING_DEFAULT_AUTO_USED",
            "pageId": "v9_INVENTORY_SEARCH_RESULTS_AUTO_USED_V1_1",
            "listingConfigId": "auto-used",
            "inventoryParametersAccountId": "blaisealexanderchryslerdodgejecllc"
        },
        {
            "scrapingType": "getInventory",
            "group": "A",
            "name": "Chilson Wilcox",
            "type": "New",
            "baseUrl": "https://www.chilsonwilcox.net",
            "referrer": "https://www.chilsonwilcox.net/new-inventory/index.htm",
            "siteId": "chilsonwilcoxnycllc",
            "pageAlias": "INVENTORY_LISTING_DEFAULT_AUTO_NEW",
            "pageId": "v9_INVENTORY_SEARCH_RESULTS_AUTO_NEW_V1_1",
            "listingConfigId": "auto-new",
            "inventoryParametersAccountId": null
        },
        {
            "scrapingType": "getInventory",
            "group": "A",
            "name": "Chilson Wilcox",
            "type": "Used",
            "baseUrl": "https://www.chilsonwilcox.net",
            "referrer": "https://www.chilsonwilcox.net/used-inventory/index.htm",
            "siteId": "chilsonwilcoxnycllc",
            "pageAlias": "INVENTORY_LISTING_DEFAULT_AUTO_USED",
            "pageId": "v9_INVENTORY_SEARCH_RESULTS_AUTO_USED_V1_1",
            "listingConfigId": "auto-used",
            "inventoryParametersAccountId": null
        },
        {
            "scrapingType": "getInventory",
            "group": "A",
            "name": "Simmons-Rockwell Nissan",
            "type": "New",
            "baseUrl": "https://www.simmonsrockwellnissan.com",
            "referrer": "https://www.simmonsrockwellnissan.com/new-inventory/index.htm",
            "siteId": "simmonsrockwellnissaninc",
            "pageAlias": "INVENTORY_LISTING_DEFAULT_AUTO_NEW",
            "pageId": "simmonsrockwellnissaninc_SITEBUILDER_INVENTORY_SEARCH_RESULTS_AUTO_NEW_V1_1",
            "listingConfigId": "auto-new",
            "inventoryParametersAccountId": null
        },
        {
            "scrapingType": "getInventory",
            "group": "A",
            "name": "Simmons-Rockwell Nissan",
            "type": "Used",
            "baseUrl": "https://www.simmonsrockwellnissan.com",
            "referrer": "https://www.simmonsrockwellnissan.com/used-inventory/index.htm",
            "siteId": "simmonsrockwellnissaninc",
            "pageAlias": "INVENTORY_LISTING_DEFAULT_AUTO_USED",
            "pageId": "simmonsrockwellnissaninc_SITEBUILDER_INVENTORY_SEARCH_RESULTS_AUTO_USED_V1_1",
            "listingConfigId": "auto-used",
            "inventoryParametersAccountId": null
        },
        {
            "scrapingType": "getInventory",
            "group": "A",
            "name": "Simmons-Rockwell Hyundai",
            "type": "New",
            "baseUrl": "https://www.srhyundai.com",
            "referrer": "https://www.srhyundai.com/new-inventory/index.htm",
            "siteId": "simmonsrockwellhyundai",
            "pageAlias": "INVENTORY_LISTING_DEFAULT_AUTO_NEW",
            "pageId": "v9_INVENTORY_SEARCH_RESULTS_AUTO_NEW_V1_1",
            "listingConfigId": "auto-new",
            "inventoryParametersAccountId": null
        },
        {
            "scrapingType": "getInventory",
            "group": "A",
            "name": "Simmons-Rockwell Subaru",
            "type": "New",
            "baseUrl": "https://www.s-rsubaru.com",
            "referrer": "https://www.s-rsubaru.com/new-inventory/index.htm",
            "siteId": "simmonsrockwellsubarusoa",
            "pageAlias": "INVENTORY_LISTING_DEFAULT_AUTO_NEW",
            "pageId": "simmonsrockwellsubarusoa_SITEBUILDER_INVENTORY_SEARCH_RESULTS_AUTO_NEW_V1_1",
            "listingConfigId": "auto-new",
            "inventoryParametersAccountId": null
        }


    ]
};

const popupSetup = async () => {
    // const accountControllerView = accountController({});
    // const popupHolder = document.createElement('div');
    // popupHolder.className = 'h-500px overflow-y-auto'
    // popupHolder.append(accountControllerView);
    // document.body.append(popupHolder);

    console.log('popup');
    document.body.id = "POPUP";
    const metas = fixedData.metaInformation;
    const popupMetaDB = new ChromeStorage('metaInformation');
    let popupMetaValues = await popupMetaDB.GET();
    popupMetaValues = popupMetaValues == null ? {} : popupMetaValues;
    const metaKeys = Object.keys(metas);
    for (let i = 0; i < metaKeys.length; i++) {
        const metaKey = metaKeys[i];
        const meta = metas[metaKey];
        if (meta.interactive == true) {
            const label = document.createElement('label');
            label.innerText = meta.title;
            const input = document.createElement('input');
            input.setAttribute('type', meta.type);
            input.setAttribute('id', metaKey);
            // input.setAttribute('placeholder', meta.title);
            // input.setAttribute(meta.point, meta.defaultValue);
            if (popupMetaValues[metaKey] == null) {
                popupMetaValues[metaKey] = meta.defaultValue;
            }
            input[meta.point] = popupMetaValues[metaKey];
            document.body.append(label, input);
        } else {
            // readd only
            const label = document.createElement('label');
            label.innerText = `${meta.title}: ${popupMetaValues[metaKey]}`;
            document.body.append(label);
        }
    }
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.addEventListener('click', async () => {
        for (let i = 0; i < metaKeys.length; i++) {
            if (metas[metaKeys[i]].interactive == true) {
                const metaKey = metaKeys[i];
                const meta = metas[metaKey];
                popupMetaValues[metaKey] = document.getElementById(metaKey)[meta.point];
            }
        }
        await popupMetaDB.SET(popupMetaValues);
        window.close();
    });
    document.body.appendChild(saveButton);

}
const contentSetup = async () => {
    // generalUtilities.clearWindowContents();
    generalUtilities.setupConsoleBoard();
    if (!await generalUtilities.isProgramReady()) {
        generalUtilities.showDataOnConsole('Program is not ready');
        contentScripts.showWorkingStepOptions();
    } else {
        generalUtilities.showDataOnConsole('Program is ready');
        const workingStepDB = new ChromeStorage('workingStep');
        const workingStep = await workingStepDB.GET();
        generalUtilities.showWorkingStep(workingStep);
        switch (workingStep) {
            case undefined:
            case null:
                contentScripts.showWorkingStepOptions();
                break;
            case 'dealerScraping':
                const dealerScrapingIndexDB = new ChromeStorage('dealerScrapingIndex');
                let dealerScrapingIndex = await dealerScrapingIndexDB.GET() || 0;
                const scrapingMeta = contentScripts.scrapingMeta;
                // console.log(scrapingMeta)
                let currentMeta = scrapingMeta[dealerScrapingIndex];
                console.log(`dealerScrapingIndex: ${dealerScrapingIndex}`)
                console.log(`currentMeta: ${currentMeta}`)
                let results = [];
                for (let i = dealerScrapingIndex; i < scrapingMeta.length; i++) {
                    dealerScrapingIndex = await dealerScrapingIndexDB.GET() || 0;
                    currentMeta = scrapingMeta[dealerScrapingIndex];
                    if (!window.location.href.includes(currentMeta.baseUrl)) {
                        await generalUtilities.pageRedirection(`${currentMeta.referrer}`, `Dealer Scraping: ${currentMeta.name}`);
                        return;
                    }
                    const meta = scrapingMeta[i];
                    const result = await contentScripts.scrapingProcess[meta.scrapingType](meta);
                    console.log(result);
                    results = [...results, ...result];
                    await dealerScrapingIndexDB.SET(i + 1);
                }
                console.log(results);
                generalUtilities.clearConsole();
                generalUtilities.showDataOnConsole('Dealer Scraping Completed');
                contentScripts.showWorkingStepOptions();

                document.querySelector(`#${globals.consoleButtons.start_scraping}`).click();
                workingStepDB.SET(null);
                break;

        }

    }


}
(async () => {
    if (typeof window === 'undefined') {
        console.log('background');


        chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
                switch (request.action) {
                    case 'openNewTab':
                        chrome.tabs.update(sender.tab.id, { url: "chrome://newtab/" });
                        break;
                    case 'userLogout':
                        chrome.cookies.remove({ "url": 'https://facebook.com', "name": 'c_user' }, function (cookie) {
                            sendResponse('success');
                        });
                        // return true;
                        break;
                    case 'positionWindow':
                        console.log('positionWindow')
                        generalUtilities.positionWindow().then(() => {
                            sendResponse('success');
                        });
                        // return true;
                        break;
                    case 'windowPosition':
                        console.log('windowPosition')
                        generalUtilities.windowPosition().then((windowPosition) => {
                            sendResponse(windowPosition);
                        })
                        // return true;
                        break;
                }
                return true;
            }
        );
    } else {
        if (window.location.href.includes('chrome-extension')) {

            await popupSetup();
        } else {

            await contentSetup();
        }
    }
})();