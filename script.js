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
    showDebugButton: (name, callback) => {
        const consoleBoardStandard = document.getElementById(fixedData.workingSelectors.content.console + 'standard');
        const button = document.createElement('button');
        button.classList.add('buttons');
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
    airtable: {
        require: (function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
            1: [function (require, module, exports) {
                "use strict";
                // istanbul ignore file
                var AbortController;
                var browserGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : null; // self is the global in web workers
                if (!browserGlobal) {
                    AbortController = require('abort-controller');
                }
                else if ('signal' in new Request('https://airtable.com')) {
                    AbortController = browserGlobal.AbortController;
                }
                else {
                    /* eslint-disable @typescript-eslint/no-var-requires */
                    var polyfill = require('abortcontroller-polyfill/dist/cjs-ponyfill');
                    /* eslint-enable @typescript-eslint/no-var-requires */
                    AbortController = polyfill.AbortController;
                }
                module.exports = AbortController;

            }, { "abort-controller": 20, "abortcontroller-polyfill/dist/cjs-ponyfill": 19 }], 2: [function (require, module, exports) {
                "use strict";
                var AirtableError = /** @class */ (function () {
                    function AirtableError(error, message, statusCode) {
                        this.error = error;
                        this.message = message;
                        this.statusCode = statusCode;
                    }
                    AirtableError.prototype.toString = function () {
                        return [
                            this.message,
                            '(',
                            this.error,
                            ')',
                            this.statusCode ? "[Http code " + this.statusCode + "]" : '',
                        ].join('');
                    };
                    return AirtableError;
                }());
                module.exports = AirtableError;

            }, {}], 3: [function (require, module, exports) {
                "use strict";
                var __assign = (this && this.__assign) || function () {
                    __assign = Object.assign || function (t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                        }
                        return t;
                    };
                    return __assign.apply(this, arguments);
                };
                var __importDefault = (this && this.__importDefault) || function (mod) {
                    return (mod && mod.__esModule) ? mod : { "default": mod };
                };
                var get_1 = __importDefault(require("lodash/get"));
                var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
                var keys_1 = __importDefault(require("lodash/keys"));
                var fetch_1 = __importDefault(require("./fetch"));
                var abort_controller_1 = __importDefault(require("./abort-controller"));
                var object_to_query_param_string_1 = __importDefault(require("./object_to_query_param_string"));
                var airtable_error_1 = __importDefault(require("./airtable_error"));
                var table_1 = __importDefault(require("./table"));
                var http_headers_1 = __importDefault(require("./http_headers"));
                var run_action_1 = __importDefault(require("./run_action"));
                var package_version_1 = __importDefault(require("./package_version"));
                var exponential_backoff_with_jitter_1 = __importDefault(require("./exponential_backoff_with_jitter"));
                var userAgent = "Airtable.js/" + package_version_1.default;
                var Base = /** @class */ (function () {
                    function Base(airtable, baseId) {
                        this._airtable = airtable;
                        this._id = baseId;
                    }
                    Base.prototype.table = function (tableName) {
                        return new table_1.default(this, null, tableName);
                    };
                    Base.prototype.makeRequest = function (options) {
                        var _this = this;
                        var _a;
                        if (options === void 0) { options = {}; }
                        var method = get_1.default(options, 'method', 'GET').toUpperCase();
                        var url = this._airtable._endpointUrl + "/v" + this._airtable._apiVersionMajor + "/" + this._id + get_1.default(options, 'path', '/') + "?" + object_to_query_param_string_1.default(get_1.default(options, 'qs', {}));
                        var controller = new abort_controller_1.default();
                        var headers = this._getRequestHeaders(Object.assign({}, this._airtable._customHeaders, (_a = options.headers) !== null && _a !== void 0 ? _a : {}));
                        var requestOptions = {
                            method: method,
                            headers: headers,
                            signal: controller.signal,
                        };
                        if ('body' in options && _canRequestMethodIncludeBody(method)) {
                            requestOptions.body = JSON.stringify(options.body);
                        }
                        var timeout = setTimeout(function () {
                            controller.abort();
                        }, this._airtable._requestTimeout);
                        return new Promise(function (resolve, reject) {
                            fetch_1.default(url, requestOptions)
                                .then(function (resp) {
                                    clearTimeout(timeout);
                                    if (resp.status === 429 && !_this._airtable._noRetryIfRateLimited) {
                                        var numAttempts_1 = get_1.default(options, '_numAttempts', 0);
                                        var backoffDelayMs = exponential_backoff_with_jitter_1.default(numAttempts_1);
                                        setTimeout(function () {
                                            var newOptions = __assign(__assign({}, options), { _numAttempts: numAttempts_1 + 1 });
                                            _this.makeRequest(newOptions)
                                                .then(resolve)
                                                .catch(reject);
                                        }, backoffDelayMs);
                                    }
                                    else {
                                        resp.json()
                                            .then(function (body) {
                                                var err = _this._checkStatusForError(resp.status, body) ||
                                                    _getErrorForNonObjectBody(resp.status, body);
                                                if (err) {
                                                    reject(err);
                                                }
                                                else {
                                                    resolve({
                                                        statusCode: resp.status,
                                                        headers: resp.headers,
                                                        body: body,
                                                    });
                                                }
                                            })
                                            .catch(function () {
                                                var err = _getErrorForNonObjectBody(resp.status);
                                                reject(err);
                                            });
                                    }
                                })
                                .catch(function (err) {
                                    clearTimeout(timeout);
                                    err = new airtable_error_1.default('CONNECTION_ERROR', err.message, null);
                                    reject(err);
                                });
                        });
                    };
                    /**
                     * @deprecated This method is deprecated.
                     */
                    Base.prototype.runAction = function (method, path, queryParams, bodyData, callback) {
                        run_action_1.default(this, method, path, queryParams, bodyData, callback, 0);
                    };
                    Base.prototype._getRequestHeaders = function (headers) {
                        var result = new http_headers_1.default();
                        result.set('Authorization', "Bearer " + this._airtable._apiKey);
                        result.set('User-Agent', userAgent);
                        result.set('Content-Type', 'application/json');
                        for (var _i = 0, _a = keys_1.default(headers); _i < _a.length; _i++) {
                            var headerKey = _a[_i];
                            result.set(headerKey, headers[headerKey]);
                        }
                        return result.toJSON();
                    };
                    Base.prototype._checkStatusForError = function (statusCode, body) {
                        var _a = (body !== null && body !== void 0 ? body : { error: {} }).error, error = _a === void 0 ? {} : _a;
                        var type = error.type, message = error.message;
                        if (statusCode === 401) {
                            return new airtable_error_1.default('AUTHENTICATION_REQUIRED', 'You should provide valid api key to perform this operation', statusCode);
                        }
                        else if (statusCode === 403) {
                            return new airtable_error_1.default('NOT_AUTHORIZED', 'You are not authorized to perform this operation', statusCode);
                        }
                        else if (statusCode === 404) {
                            return new airtable_error_1.default('NOT_FOUND', message !== null && message !== void 0 ? message : 'Could not find what you are looking for', statusCode);
                        }
                        else if (statusCode === 413) {
                            return new airtable_error_1.default('REQUEST_TOO_LARGE', 'Request body is too large', statusCode);
                        }
                        else if (statusCode === 422) {
                            return new airtable_error_1.default(type !== null && type !== void 0 ? type : 'UNPROCESSABLE_ENTITY', message !== null && message !== void 0 ? message : 'The operation cannot be processed', statusCode);
                        }
                        else if (statusCode === 429) {
                            return new airtable_error_1.default('TOO_MANY_REQUESTS', 'You have made too many requests in a short period of time. Please retry your request later', statusCode);
                        }
                        else if (statusCode === 500) {
                            return new airtable_error_1.default('SERVER_ERROR', 'Try again. If the problem persists, contact support.', statusCode);
                        }
                        else if (statusCode === 503) {
                            return new airtable_error_1.default('SERVICE_UNAVAILABLE', 'The service is temporarily unavailable. Please retry shortly.', statusCode);
                        }
                        else if (statusCode >= 400) {
                            return new airtable_error_1.default(type !== null && type !== void 0 ? type : 'UNEXPECTED_ERROR', message !== null && message !== void 0 ? message : 'An unexpected error occurred', statusCode);
                        }
                        else {
                            return null;
                        }
                    };
                    Base.prototype.doCall = function (tableName) {
                        return this.table(tableName);
                    };
                    Base.prototype.getId = function () {
                        return this._id;
                    };
                    Base.createFunctor = function (airtable, baseId) {
                        var base = new Base(airtable, baseId);
                        var baseFn = function (tableName) {
                            return base.doCall(tableName);
                        };
                        baseFn._base = base;
                        baseFn.table = base.table.bind(base);
                        baseFn.makeRequest = base.makeRequest.bind(base);
                        baseFn.runAction = base.runAction.bind(base);
                        baseFn.getId = base.getId.bind(base);
                        return baseFn;
                    };
                    return Base;
                }());
                function _canRequestMethodIncludeBody(method) {
                    return method !== 'GET' && method !== 'DELETE';
                }
                function _getErrorForNonObjectBody(statusCode, body) {
                    if (isPlainObject_1.default(body)) {
                        return null;
                    }
                    else {
                        return new airtable_error_1.default('UNEXPECTED_ERROR', 'The response from Airtable was invalid JSON. Please try again soon.', statusCode);
                    }
                }
                module.exports = Base;

            }, { "./abort-controller": 1, "./airtable_error": 2, "./exponential_backoff_with_jitter": 6, "./fetch": 7, "./http_headers": 9, "./object_to_query_param_string": 11, "./package_version": 12, "./run_action": 16, "./table": 17, "lodash/get": 77, "lodash/isPlainObject": 89, "lodash/keys": 93 }], 4: [function (require, module, exports) {
                "use strict";
                /**
                 * Given a function fn that takes a callback as its last argument, returns
                 * a new version of the function that takes the callback optionally. If
                 * the function is not called with a callback for the last argument, the
                 * function will return a promise instead.
                 */
                /* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
                function callbackToPromise(fn, context, callbackArgIndex) {
                    if (callbackArgIndex === void 0) { callbackArgIndex = void 0; }
                    /* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
                    return function () {
                        var callArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            callArgs[_i] = arguments[_i];
                        }
                        var thisCallbackArgIndex;
                        if (callbackArgIndex === void 0) {
                            // istanbul ignore next
                            thisCallbackArgIndex = callArgs.length > 0 ? callArgs.length - 1 : 0;
                        }
                        else {
                            thisCallbackArgIndex = callbackArgIndex;
                        }
                        var callbackArg = callArgs[thisCallbackArgIndex];
                        if (typeof callbackArg === 'function') {
                            fn.apply(context, callArgs);
                            return void 0;
                        }
                        else {
                            var args_1 = [];
                            // If an explicit callbackArgIndex is set, but the function is called
                            // with too few arguments, we want to push undefined onto args so that
                            // our constructed callback ends up at the right index.
                            var argLen = Math.max(callArgs.length, thisCallbackArgIndex);
                            for (var i = 0; i < argLen; i++) {
                                args_1.push(callArgs[i]);
                            }
                            return new Promise(function (resolve, reject) {
                                args_1.push(function (err, result) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                });
                                fn.apply(context, args_1);
                            });
                        }
                    };
                }
                module.exports = callbackToPromise;

            }, {}], 5: [function (require, module, exports) {
                "use strict";
                var didWarnForDeprecation = {};
                /**
                 * Convenience function for marking a function as deprecated.
                 *
                 * Will emit a warning the first time that function is called.
                 *
                 * @param fn the function to mark as deprecated.
                 * @param key a unique key identifying the function.
                 * @param message the warning message.
                 *
                 * @return a wrapped function
                 */
                function deprecate(fn, key, message) {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (!didWarnForDeprecation[key]) {
                            didWarnForDeprecation[key] = true;
                            console.warn(message);
                        }
                        fn.apply(this, args);
                    };
                }
                module.exports = deprecate;

            }, {}], 6: [function (require, module, exports) {
                "use strict";
                var __importDefault = (this && this.__importDefault) || function (mod) {
                    return (mod && mod.__esModule) ? mod : { "default": mod };
                };
                var internal_config_json_1 = __importDefault(require("./internal_config.json"));
                // "Full Jitter" algorithm taken from https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/
                function exponentialBackoffWithJitter(numberOfRetries) {
                    var rawBackoffTimeMs = internal_config_json_1.default.INITIAL_RETRY_DELAY_IF_RATE_LIMITED * Math.pow(2, numberOfRetries);
                    var clippedBackoffTimeMs = Math.min(internal_config_json_1.default.MAX_RETRY_DELAY_IF_RATE_LIMITED, rawBackoffTimeMs);
                    var jitteredBackoffTimeMs = Math.random() * clippedBackoffTimeMs;
                    return jitteredBackoffTimeMs;
                }
                module.exports = exponentialBackoffWithJitter;

            }, { "./internal_config.json": 10 }], 7: [function (require, module, exports) {
                "use strict";
                var __importDefault = (this && this.__importDefault) || function (mod) {
                    return (mod && mod.__esModule) ? mod : { "default": mod };
                };
                // istanbul ignore file
                var node_fetch_1 = __importDefault(require("node-fetch"));
                var browserGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : null; // self is the global in web workers
                module.exports = !browserGlobal ? node_fetch_1.default : browserGlobal.fetch.bind(browserGlobal);

            }, { "node-fetch": 20 }], 8: [function (require, module, exports) {
                "use strict";
                /* eslint-enable @typescript-eslint/no-explicit-any */
                function has(object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                }
                module.exports = has;

            }, {}], 9: [function (require, module, exports) {
                "use strict";
                var __importDefault = (this && this.__importDefault) || function (mod) {
                    return (mod && mod.__esModule) ? mod : { "default": mod };
                };
                var keys_1 = __importDefault(require("lodash/keys"));
                var isBrowser = typeof window !== 'undefined';
                var HttpHeaders = /** @class */ (function () {
                    function HttpHeaders() {
                        this._headersByLowercasedKey = {};
                    }
                    HttpHeaders.prototype.set = function (headerKey, headerValue) {
                        var lowercasedKey = headerKey.toLowerCase();
                        if (lowercasedKey === 'x-airtable-user-agent') {
                            lowercasedKey = 'user-agent';
                            headerKey = 'User-Agent';
                        }
                        this._headersByLowercasedKey[lowercasedKey] = {
                            headerKey: headerKey,
                            headerValue: headerValue,
                        };
                    };
                    HttpHeaders.prototype.toJSON = function () {
                        var result = {};
                        for (var _i = 0, _a = keys_1.default(this._headersByLowercasedKey); _i < _a.length; _i++) {
                            var lowercasedKey = _a[_i];
                            var headerDefinition = this._headersByLowercasedKey[lowercasedKey];
                            var headerKey = void 0;
                            /* istanbul ignore next */
                            if (isBrowser && lowercasedKey === 'user-agent') {
                                // Some browsers do not allow overriding the user agent.
                                // https://github.com/Airtable/airtable.js/issues/52
                                headerKey = 'X-Airtable-User-Agent';
                            }
                            else {
                                headerKey = headerDefinition.headerKey;
                            }
                            result[headerKey] = headerDefinition.headerValue;
                        }
                        return result;
                    };
                    return HttpHeaders;
                }());
                module.exports = HttpHeaders;

            }, { "lodash/keys": 93 }], 10: [function (require, module, exports) {
                module.exports = {
                    "INITIAL_RETRY_DELAY_IF_RATE_LIMITED": 5000,
                    "MAX_RETRY_DELAY_IF_RATE_LIMITED": 600000
                }

            }, {}], 11: [function (require, module, exports) {
                "use strict";
                var __importDefault = (this && this.__importDefault) || function (mod) {
                    return (mod && mod.__esModule) ? mod : { "default": mod };
                };
                var isArray_1 = __importDefault(require("lodash/isArray"));
                var isNil_1 = __importDefault(require("lodash/isNil"));
                var keys_1 = __importDefault(require("lodash/keys"));
                /* eslint-enable @typescript-eslint/no-explicit-any */
                // Adapted from jQuery.param:
                // https://github.com/jquery/jquery/blob/2.2-stable/src/serialize.js
                function buildParams(prefix, obj, addFn) {
                    if (isArray_1.default(obj)) {
                        // Serialize array item.
                        for (var index = 0; index < obj.length; index++) {
                            var value = obj[index];
                            if (/\[\]$/.test(prefix)) {
                                // Treat each array item as a scalar.
                                addFn(prefix, value);
                            }
                            else {
                                // Item is non-scalar (array or object), encode its numeric index.
                                buildParams(prefix + "[" + (typeof value === 'object' && value !== null ? index : '') + "]", value, addFn);
                            }
                        }
                    }
                    else if (typeof obj === 'object') {
                        // Serialize object item.
                        for (var _i = 0, _a = keys_1.default(obj); _i < _a.length; _i++) {
                            var key = _a[_i];
                            var value = obj[key];
                            buildParams(prefix + "[" + key + "]", value, addFn);
                        }
                    }
                    else {
                        // Serialize scalar item.
                        addFn(prefix, obj);
                    }
                }
                function objectToQueryParamString(obj) {
                    var parts = [];
                    var addFn = function (key, value) {
                        value = isNil_1.default(value) ? '' : value;
                        parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
                    };
                    for (var _i = 0, _a = keys_1.default(obj); _i < _a.length; _i++) {
                        var key = _a[_i];
                        var value = obj[key];
                        buildParams(key, value, addFn);
                    }
                    return parts.join('&').replace(/%20/g, '+');
                }
                module.exports = objectToQueryParamString;

            }, { "lodash/isArray": 79, "lodash/isNil": 85, "lodash/keys": 93 }], 12: [function (require, module, exports) {
                "use strict";
                module.exports = "0.12.2";

            }, {}], 13: [function (require, module, exports) {
                "use strict";
                var __assign = (this && this.__assign) || function () {
                    __assign = Object.assign || function (t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                        }
                        return t;
                    };
                    return __assign.apply(this, arguments);
                };
                var __importDefault = (this && this.__importDefault) || function (mod) {
                    return (mod && mod.__esModule) ? mod : { "default": mod };
                };
                var isFunction_1 = __importDefault(require("lodash/isFunction"));
                var keys_1 = __importDefault(require("lodash/keys"));
                var record_1 = __importDefault(require("./record"));
                var callback_to_promise_1 = __importDefault(require("./callback_to_promise"));
                var has_1 = __importDefault(require("./has"));
                var query_params_1 = require("./query_params");
                var object_to_query_param_string_1 = __importDefault(require("./object_to_query_param_string"));
                /**
                 * Builds a query object. Won't fetch until `firstPage` or
                 * or `eachPage` is called.
                 *
                 * Params should be validated prior to being passed to Query
                 * with `Query.validateParams`.
                 */
                var Query = /** @class */ (function () {
                    function Query(table, params) {
                        this._table = table;
                        this._params = params;
                        this.firstPage = callback_to_promise_1.default(firstPage, this);
                        this.eachPage = callback_to_promise_1.default(eachPage, this, 1);
                        this.all = callback_to_promise_1.default(all, this);
                    }
                    /**
                     * Validates the parameters for passing to the Query constructor.
                     *
                     * @params {object} params parameters to validate
                     *
                     * @return an object with two keys:
                     *  validParams: the object that should be passed to the constructor.
                     *  ignoredKeys: a list of keys that will be ignored.
                     *  errors: a list of error messages.
                     */
                    Query.validateParams = function (params) {
                        var validParams = {};
                        var ignoredKeys = [];
                        var errors = [];
                        for (var _i = 0, _a = keys_1.default(params); _i < _a.length; _i++) {
                            var key = _a[_i];
                            var value = params[key];
                            if (has_1.default(Query.paramValidators, key)) {
                                var validator = Query.paramValidators[key];
                                var validationResult = validator(value);
                                if (validationResult.pass) {
                                    validParams[key] = value;
                                }
                                else {
                                    errors.push(validationResult.error);
                                }
                            }
                            else {
                                ignoredKeys.push(key);
                            }
                        }
                        return {
                            validParams: validParams,
                            ignoredKeys: ignoredKeys,
                            errors: errors,
                        };
                    };
                    Query.paramValidators = query_params_1.paramValidators;
                    return Query;
                }());
                /**
                 * Fetches the first page of results for the query asynchronously,
                 * then calls `done(error, records)`.
                 */
                function firstPage(done) {
                    if (!isFunction_1.default(done)) {
                        throw new Error('The first parameter to `firstPage` must be a function');
                    }
                    this.eachPage(function (records) {
                        done(null, records);
                    }, function (error) {
                        done(error, null);
                    });
                }
                /**
                 * Fetches each page of results for the query asynchronously.
                 *
                 * Calls `pageCallback(records, fetchNextPage)` for each
                 * page. You must call `fetchNextPage()` to fetch the next page of
                 * results.
                 *
                 * After fetching all pages, or if there's an error, calls
                 * `done(error)`.
                 */
                function eachPage(pageCallback, done) {
                    var _this = this;
                    if (!isFunction_1.default(pageCallback)) {
                        throw new Error('The first parameter to `eachPage` must be a function');
                    }
                    if (!isFunction_1.default(done) && done !== void 0) {
                        throw new Error('The second parameter to `eachPage` must be a function or undefined');
                    }
                    var params = __assign({}, this._params);
                    var pathAndParamsAsString = "/" + this._table._urlEncodedNameOrId() + "?" + object_to_query_param_string_1.default(params);
                    var queryParams = {};
                    var requestData = null;
                    var method;
                    var path;
                    if (params.method === 'post' || pathAndParamsAsString.length > query_params_1.URL_CHARACTER_LENGTH_LIMIT) {
                        // There is a 16kb limit on GET requests. Since the URL makes up nearly all of the request size, we check for any requests that
                        // that come close to this limit and send it as a POST instead. Additionally, we'll send the request as a post if it is specified
                        // with the request params
                        requestData = params;
                        method = 'post';
                        path = "/" + this._table._urlEncodedNameOrId() + "/listRecords";
                        var paramNames = Object.keys(params);
                        for (var _i = 0, paramNames_1 = paramNames; _i < paramNames_1.length; _i++) {
                            var paramName = paramNames_1[_i];
                            if (query_params_1.shouldListRecordsParamBePassedAsParameter(paramName)) {
                                // timeZone and userLocale is parsed from the GET request separately from the other params. This parsing
                                // does not occurring within the body parser we use for POST requests, so this will still need to be passed
                                // via query params
                                queryParams[paramName] = params[paramName];
                            }
                            else {
                                requestData[paramName] = params[paramName];
                            }
                        }
                    }
                    else {
                        method = 'get';
                        queryParams = params;
                        path = "/" + this._table._urlEncodedNameOrId();
                    }
                    var inner = function () {
                        _this._table._base.runAction(method, path, queryParams, requestData, function (err, response, result) {
                            if (err) {
                                done(err, null);
                            }
                            else {
                                var next = void 0;
                                if (result.offset) {
                                    params.offset = result.offset;
                                    next = inner;
                                }
                                else {
                                    next = function () {
                                        done(null);
                                    };
                                }
                                var records = result.records.map(function (recordJson) {
                                    return new record_1.default(_this._table, null, recordJson);
                                });
                                pageCallback(records, next);
                            }
                        });
                    };
                    inner();
                }
                /**
                 * Fetches all pages of results asynchronously. May take a long time.
                 */
                function all(done) {
                    if (!isFunction_1.default(done)) {
                        throw new Error('The first parameter to `all` must be a function');
                    }
                    var allRecords = [];
                    this.eachPage(function (pageRecords, fetchNextPage) {
                        allRecords.push.apply(allRecords, pageRecords);
                        fetchNextPage();
                    }, function (err) {
                        if (err) {
                            done(err, null);
                        }
                        else {
                            done(null, allRecords);
                        }
                    });
                }
                module.exports = Query;

            }, { "./callback_to_promise": 4, "./has": 8, "./object_to_query_param_string": 11, "./query_params": 14, "./record": 15, "lodash/isFunction": 83, "lodash/keys": 93 }], 14: [function (require, module, exports) {
                "use strict";
                var __importDefault = (this && this.__importDefault) || function (mod) {
                    return (mod && mod.__esModule) ? mod : { "default": mod };
                };
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.shouldListRecordsParamBePassedAsParameter = exports.URL_CHARACTER_LENGTH_LIMIT = exports.paramValidators = void 0;
                var typecheck_1 = __importDefault(require("./typecheck"));
                var isString_1 = __importDefault(require("lodash/isString"));
                var isNumber_1 = __importDefault(require("lodash/isNumber"));
                var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
                var isBoolean_1 = __importDefault(require("lodash/isBoolean"));
                exports.paramValidators = {
                    fields: typecheck_1.default(typecheck_1.default.isArrayOf(isString_1.default), 'the value for `fields` should be an array of strings'),
                    filterByFormula: typecheck_1.default(isString_1.default, 'the value for `filterByFormula` should be a string'),
                    maxRecords: typecheck_1.default(isNumber_1.default, 'the value for `maxRecords` should be a number'),
                    pageSize: typecheck_1.default(isNumber_1.default, 'the value for `pageSize` should be a number'),
                    offset: typecheck_1.default(isNumber_1.default, 'the value for `offset` should be a number'),
                    sort: typecheck_1.default(typecheck_1.default.isArrayOf(function (obj) {
                        return (isPlainObject_1.default(obj) &&
                            isString_1.default(obj.field) &&
                            (obj.direction === void 0 || ['asc', 'desc'].includes(obj.direction)));
                    }), 'the value for `sort` should be an array of sort objects. ' +
                    'Each sort object must have a string `field` value, and an optional ' +
                    '`direction` value that is "asc" or "desc".'),
                    view: typecheck_1.default(isString_1.default, 'the value for `view` should be a string'),
                    cellFormat: typecheck_1.default(function (cellFormat) {
                        return isString_1.default(cellFormat) && ['json', 'string'].includes(cellFormat);
                    }, 'the value for `cellFormat` should be "json" or "string"'),
                    timeZone: typecheck_1.default(isString_1.default, 'the value for `timeZone` should be a string'),
                    userLocale: typecheck_1.default(isString_1.default, 'the value for `userLocale` should be a string'),
                    method: typecheck_1.default(function (method) {
                        return isString_1.default(method) && ['get', 'post'].includes(method);
                    }, 'the value for `method` should be "get" or "post"'),
                    returnFieldsByFieldId: typecheck_1.default(isBoolean_1.default, 'the value for `returnFieldsByFieldId` should be a boolean'),
                    recordMetadata: typecheck_1.default(typecheck_1.default.isArrayOf(isString_1.default), 'the value for `recordMetadata` should be an array of strings'),
                };
                exports.URL_CHARACTER_LENGTH_LIMIT = 15000;
                exports.shouldListRecordsParamBePassedAsParameter = function (paramName) {
                    return paramName === 'timeZone' || paramName === 'userLocale';
                };

            }, { "./typecheck": 18, "lodash/isBoolean": 81, "lodash/isNumber": 86, "lodash/isPlainObject": 89, "lodash/isString": 90 }], 15: [function (require, module, exports) {
                "use strict";
                var __assign = (this && this.__assign) || function () {
                    __assign = Object.assign || function (t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                        }
                        return t;
                    };
                    return __assign.apply(this, arguments);
                };
                var __importDefault = (this && this.__importDefault) || function (mod) {
                    return (mod && mod.__esModule) ? mod : { "default": mod };
                };
                var callback_to_promise_1 = __importDefault(require("./callback_to_promise"));
                var Record = /** @class */ (function () {
                    function Record(table, recordId, recordJson) {
                        this._table = table;
                        this.id = recordId || recordJson.id;
                        if (recordJson) {
                            this.commentCount = recordJson.commentCount;
                        }
                        this.setRawJson(recordJson);
                        this.save = callback_to_promise_1.default(save, this);
                        this.patchUpdate = callback_to_promise_1.default(patchUpdate, this);
                        this.putUpdate = callback_to_promise_1.default(putUpdate, this);
                        this.destroy = callback_to_promise_1.default(destroy, this);
                        this.fetch = callback_to_promise_1.default(fetch, this);
                        this.updateFields = this.patchUpdate;
                        this.replaceFields = this.putUpdate;
                    }
                    Record.prototype.getId = function () {
                        return this.id;
                    };
                    Record.prototype.get = function (columnName) {
                        return this.fields[columnName];
                    };
                    Record.prototype.set = function (columnName, columnValue) {
                        this.fields[columnName] = columnValue;
                    };
                    Record.prototype.setRawJson = function (rawJson) {
                        this._rawJson = rawJson;
                        this.fields = (this._rawJson && this._rawJson.fields) || {};
                    };
                    return Record;
                }());
                function save(done) {
                    this.putUpdate(this.fields, done);
                }
                function patchUpdate(cellValuesByName, opts, done) {
                    var _this = this;
                    if (!done) {
                        done = opts;
                        opts = {};
                    }
                    var updateBody = __assign({ fields: cellValuesByName }, opts);
                    this._table._base.runAction('patch', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, updateBody, function (err, response, results) {
                        if (err) {
                            done(err);
                            return;
                        }
                        _this.setRawJson(results);
                        done(null, _this);
                    });
                }
                function putUpdate(cellValuesByName, opts, done) {
                    var _this = this;
                    if (!done) {
                        done = opts;
                        opts = {};
                    }
                    var updateBody = __assign({ fields: cellValuesByName }, opts);
                    this._table._base.runAction('put', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, updateBody, function (err, response, results) {
                        if (err) {
                            done(err);
                            return;
                        }
                        _this.setRawJson(results);
                        done(null, _this);
                    });
                }
                function destroy(done) {
                    var _this = this;
                    this._table._base.runAction('delete', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, null, function (err) {
                        if (err) {
                            done(err);
                            return;
                        }
                        done(null, _this);
                    });
                }
                function fetch(done) {
                    var _this = this;
                    this._table._base.runAction('get', "/" + this._table._urlEncodedNameOrId() + "/" + this.id, {}, null, function (err, response, results) {
                        if (err) {
                            done(err);
                            return;
                        }
                        _this.setRawJson(results);
                        done(null, _this);
                    });
                }
                module.exports = Record;

            }, { "./callback_to_promise": 4 }], 16: [function (require, module, exports) {
                "use strict";
                var __importDefault = (this && this.__importDefault) || function (mod) {
                    return (mod && mod.__esModule) ? mod : { "default": mod };
                };
                var exponential_backoff_with_jitter_1 = __importDefault(require("./exponential_backoff_with_jitter"));
                var object_to_query_param_string_1 = __importDefault(require("./object_to_query_param_string"));
                var package_version_1 = __importDefault(require("./package_version"));
                var fetch_1 = __importDefault(require("./fetch"));
                var abort_controller_1 = __importDefault(require("./abort-controller"));
                var userAgent = "Airtable.js/" + package_version_1.default;
                function runAction(base, method, path, queryParams, bodyData, callback, numAttempts) {
                    var url = base._airtable._endpointUrl + "/v" + base._airtable._apiVersionMajor + "/" + base._id + path + "?" + object_to_query_param_string_1.default(queryParams);
                    var headers = {
                        authorization: "Bearer " + base._airtable._apiKey,
                        'x-api-version': base._airtable._apiVersion,
                        'x-airtable-application-id': base.getId(),
                        'content-type': 'application/json',
                    };
                    var isBrowser = typeof window !== 'undefined';
                    // Some browsers do not allow overriding the user agent.
                    // https://github.com/Airtable/airtable.js/issues/52
                    if (isBrowser) {
                        headers['x-airtable-user-agent'] = userAgent;
                    }
                    else {
                        headers['User-Agent'] = userAgent;
                    }
                    var controller = new abort_controller_1.default();
                    var normalizedMethod = method.toUpperCase();
                    var options = {
                        method: normalizedMethod,
                        headers: headers,
                        signal: controller.signal,
                    };
                    if (bodyData !== null) {
                        if (normalizedMethod === 'GET' || normalizedMethod === 'HEAD') {
                            console.warn('body argument to runAction are ignored with GET or HEAD requests');
                        }
                        else {
                            options.body = JSON.stringify(bodyData);
                        }
                    }
                    var timeout = setTimeout(function () {
                        controller.abort();
                    }, base._airtable._requestTimeout);
                    fetch_1.default(url, options)
                        .then(function (resp) {
                            clearTimeout(timeout);
                            if (resp.status === 429 && !base._airtable._noRetryIfRateLimited) {
                                var backoffDelayMs = exponential_backoff_with_jitter_1.default(numAttempts);
                                setTimeout(function () {
                                    runAction(base, method, path, queryParams, bodyData, callback, numAttempts + 1);
                                }, backoffDelayMs);
                            }
                            else {
                                resp.json()
                                    .then(function (body) {
                                        var error = base._checkStatusForError(resp.status, body);
                                        // Ensure Response interface matches interface from
                                        // `request` Response object
                                        var r = {};
                                        Object.keys(resp).forEach(function (property) {
                                            r[property] = resp[property];
                                        });
                                        r.body = body;
                                        r.statusCode = resp.status;
                                        callback(error, r, body);
                                    })
                                    .catch(function () {
                                        callback(base._checkStatusForError(resp.status));
                                    });
                            }
                        })
                        .catch(function (error) {
                            clearTimeout(timeout);
                            callback(error);
                        });
                }
                module.exports = runAction;

            }, { "./abort-controller": 1, "./exponential_backoff_with_jitter": 6, "./fetch": 7, "./object_to_query_param_string": 11, "./package_version": 12 }], 17: [function (require, module, exports) {
                "use strict";
                var __assign = (this && this.__assign) || function () {
                    __assign = Object.assign || function (t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                        }
                        return t;
                    };
                    return __assign.apply(this, arguments);
                };
                var __importDefault = (this && this.__importDefault) || function (mod) {
                    return (mod && mod.__esModule) ? mod : { "default": mod };
                };
                var isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
                var deprecate_1 = __importDefault(require("./deprecate"));
                var query_1 = __importDefault(require("./query"));
                var query_params_1 = require("./query_params");
                var object_to_query_param_string_1 = __importDefault(require("./object_to_query_param_string"));
                var record_1 = __importDefault(require("./record"));
                var callback_to_promise_1 = __importDefault(require("./callback_to_promise"));
                var Table = /** @class */ (function () {
                    function Table(base, tableId, tableName) {
                        if (!tableId && !tableName) {
                            throw new Error('Table name or table ID is required');
                        }
                        this._base = base;
                        this.id = tableId;
                        this.name = tableName;
                        // Public API
                        this.find = callback_to_promise_1.default(this._findRecordById, this);
                        this.select = this._selectRecords.bind(this);
                        this.create = callback_to_promise_1.default(this._createRecords, this);
                        this.update = callback_to_promise_1.default(this._updateRecords.bind(this, false), this);
                        this.replace = callback_to_promise_1.default(this._updateRecords.bind(this, true), this);
                        this.destroy = callback_to_promise_1.default(this._destroyRecord, this);
                        // Deprecated API
                        this.list = deprecate_1.default(this._listRecords.bind(this), 'table.list', 'Airtable: `list()` is deprecated. Use `select()` instead.');
                        this.forEach = deprecate_1.default(this._forEachRecord.bind(this), 'table.forEach', 'Airtable: `forEach()` is deprecated. Use `select()` instead.');
                    }
                    Table.prototype._findRecordById = function (recordId, done) {
                        var record = new record_1.default(this, recordId);
                        record.fetch(done);
                    };
                    Table.prototype._selectRecords = function (params) {
                        if (params === void 0) {
                            params = {};
                        }
                        if (arguments.length > 1) {
                            console.warn("Airtable: `select` takes only one parameter, but it was given " + arguments.length + " parameters. Use `eachPage` or `firstPage` to fetch records.");
                        }
                        if (isPlainObject_1.default(params)) {
                            var validationResults = query_1.default.validateParams(params);
                            if (validationResults.errors.length) {
                                var formattedErrors = validationResults.errors.map(function (error) {
                                    return "  * " + error;
                                });
                                throw new Error("Airtable: invalid parameters for `select`:\n" + formattedErrors.join('\n'));
                            }
                            if (validationResults.ignoredKeys.length) {
                                console.warn("Airtable: the following parameters to `select` will be ignored: " + validationResults.ignoredKeys.join(', '));
                            }
                            return new query_1.default(this, validationResults.validParams);
                        }
                        else {
                            throw new Error('Airtable: the parameter for `select` should be a plain object or undefined.');
                        }
                    };
                    Table.prototype._urlEncodedNameOrId = function () {
                        return this.id || encodeURIComponent(this.name);
                    };
                    Table.prototype._createRecords = function (recordsData, optionalParameters, done) {
                        var _this = this;
                        var isCreatingMultipleRecords = Array.isArray(recordsData);
                        if (!done) {
                            done = optionalParameters;
                            optionalParameters = {};
                        }
                        var requestData;
                        if (isCreatingMultipleRecords) {
                            requestData = __assign({ records: recordsData }, optionalParameters);
                        }
                        else {
                            requestData = __assign({ fields: recordsData }, optionalParameters);
                        }
                        this._base.runAction('post', "/" + this._urlEncodedNameOrId() + "/", {}, requestData, function (err, resp, body) {
                            if (err) {
                                done(err);
                                return;
                            }
                            var result;
                            if (isCreatingMultipleRecords) {
                                result = body.records.map(function (record) {
                                    return new record_1.default(_this, record.id, record);
                                });
                            }
                            else {
                                result = new record_1.default(_this, body.id, body);
                            }
                            done(null, result);
                        });
                    };
                    Table.prototype._updateRecords = function (isDestructiveUpdate, recordsDataOrRecordId, recordDataOrOptsOrDone, optsOrDone, done) {
                        var _this = this;
                        var opts;
                        if (Array.isArray(recordsDataOrRecordId)) {
                            var recordsData = recordsDataOrRecordId;
                            opts = isPlainObject_1.default(recordDataOrOptsOrDone) ? recordDataOrOptsOrDone : {};
                            done = (optsOrDone || recordDataOrOptsOrDone);
                            var method = isDestructiveUpdate ? 'put' : 'patch';
                            var requestData = __assign({ records: recordsData }, opts);
                            this._base.runAction(method, "/" + this._urlEncodedNameOrId() + "/", {}, requestData, function (err, resp, body) {
                                if (err) {
                                    done(err);
                                    return;
                                }
                                var result = body.records.map(function (record) {
                                    return new record_1.default(_this, record.id, record);
                                });
                                done(null, result);
                            });
                        }
                        else {
                            var recordId = recordsDataOrRecordId;
                            var recordData = recordDataOrOptsOrDone;
                            opts = isPlainObject_1.default(optsOrDone) ? optsOrDone : {};
                            done = (done || optsOrDone);
                            var record = new record_1.default(this, recordId);
                            if (isDestructiveUpdate) {
                                record.putUpdate(recordData, opts, done);
                            }
                            else {
                                record.patchUpdate(recordData, opts, done);
                            }
                        }
                    };
                    Table.prototype._destroyRecord = function (recordIdsOrId, done) {
                        var _this = this;
                        if (Array.isArray(recordIdsOrId)) {
                            var queryParams = { records: recordIdsOrId };
                            this._base.runAction('delete', "/" + this._urlEncodedNameOrId(), queryParams, null, function (err, response, results) {
                                if (err) {
                                    done(err);
                                    return;
                                }
                                var records = results.records.map(function (_a) {
                                    var id = _a.id;
                                    return new record_1.default(_this, id, null);
                                });
                                done(null, records);
                            });
                        }
                        else {
                            var record = new record_1.default(this, recordIdsOrId);
                            record.destroy(done);
                        }
                    };
                    Table.prototype._listRecords = function (pageSize, offset, opts, done) {
                        var _this = this;
                        if (!done) {
                            done = opts;
                            opts = {};
                        }
                        var pathAndParamsAsString = "/" + this._urlEncodedNameOrId() + "?" + object_to_query_param_string_1.default(opts);
                        var path;
                        var listRecordsParameters = {};
                        var listRecordsData = null;
                        var method;
                        if ((typeof opts !== 'function' && opts.method === 'post') ||
                            pathAndParamsAsString.length > query_params_1.URL_CHARACTER_LENGTH_LIMIT) {
                            // // There is a 16kb limit on GET requests. Since the URL makes up nearly all of the request size, we check for any requests that
                            // that come close to this limit and send it as a POST instead. Additionally, we'll send the request as a post if it is specified
                            // with the request params
                            path = "/" + this._urlEncodedNameOrId() + "/listRecords";
                            listRecordsData = __assign(__assign({}, (pageSize && { pageSize: pageSize })), (offset && { offset: offset }));
                            method = 'post';
                            var paramNames = Object.keys(opts);
                            for (var _i = 0, paramNames_1 = paramNames; _i < paramNames_1.length; _i++) {
                                var paramName = paramNames_1[_i];
                                if (query_params_1.shouldListRecordsParamBePassedAsParameter(paramName)) {
                                    listRecordsParameters[paramName] = opts[paramName];
                                }
                                else {
                                    listRecordsData[paramName] = opts[paramName];
                                }
                            }
                        }
                        else {
                            method = 'get';
                            path = "/" + this._urlEncodedNameOrId() + "/";
                            listRecordsParameters = __assign({ limit: pageSize, offset: offset }, opts);
                        }
                        this._base.runAction(method, path, listRecordsParameters, listRecordsData, function (err, response, results) {
                            if (err) {
                                done(err);
                                return;
                            }
                            var records = results.records.map(function (recordJson) {
                                return new record_1.default(_this, null, recordJson);
                            });
                            done(null, records, results.offset);
                        });
                    };
                    Table.prototype._forEachRecord = function (opts, callback, done) {
                        var _this = this;
                        if (arguments.length === 2) {
                            done = callback;
                            callback = opts;
                            opts = {};
                        }
                        var limit = Table.__recordsPerPageForIteration || 100;
                        var offset = null;
                        var nextPage = function () {
                            _this._listRecords(limit, offset, opts, function (err, page, newOffset) {
                                if (err) {
                                    done(err);
                                    return;
                                }
                                for (var index = 0; index < page.length; index++) {
                                    callback(page[index]);
                                }
                                if (newOffset) {
                                    offset = newOffset;
                                    nextPage();
                                }
                                else {
                                    done();
                                }
                            });
                        };
                        nextPage();
                    };
                    return Table;
                }());
                module.exports = Table;

            }, { "./callback_to_promise": 4, "./deprecate": 5, "./object_to_query_param_string": 11, "./query": 13, "./query_params": 14, "./record": 15, "lodash/isPlainObject": 89 }], 18: [function (require, module, exports) {
                "use strict";
                /* eslint-enable @typescript-eslint/no-explicit-any */
                function check(fn, error) {
                    return function (value) {
                        if (fn(value)) {
                            return { pass: true };
                        }
                        else {
                            return { pass: false, error: error };
                        }
                    };
                }
                check.isOneOf = function isOneOf(options) {
                    return options.includes.bind(options);
                };
                check.isArrayOf = function (itemValidator) {
                    return function (value) {
                        return Array.isArray(value) && value.every(itemValidator);
                    };
                };
                module.exports = check;

            }, {}], 19: [function (require, module, exports) {
                'use strict';

                Object.defineProperty(exports, '__esModule', { value: true });

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function");
                    }

                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }

                function _getPrototypeOf(o) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                        return o.__proto__ || Object.getPrototypeOf(o);
                    };
                    return _getPrototypeOf(o);
                }

                function _setPrototypeOf(o, p) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                        o.__proto__ = p;
                        return o;
                    };

                    return _setPrototypeOf(o, p);
                }

                function _assertThisInitialized(self) {
                    if (self === void 0) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }

                    return self;
                }

                function _possibleConstructorReturn(self, call) {
                    if (call && (typeof call === "object" || typeof call === "function")) {
                        return call;
                    }

                    return _assertThisInitialized(self);
                }

                function _superPropBase(object, property) {
                    while (!Object.prototype.hasOwnProperty.call(object, property)) {
                        object = _getPrototypeOf(object);
                        if (object === null) break;
                    }

                    return object;
                }

                function _get(target, property, receiver) {
                    if (typeof Reflect !== "undefined" && Reflect.get) {
                        _get = Reflect.get;
                    } else {
                        _get = function _get(target, property, receiver) {
                            var base = _superPropBase(target, property);

                            if (!base) return;
                            var desc = Object.getOwnPropertyDescriptor(base, property);

                            if (desc.get) {
                                return desc.get.call(receiver);
                            }

                            return desc.value;
                        };
                    }

                    return _get(target, property, receiver || target);
                }

                var Emitter =
                    /*#__PURE__*/
                    function () {
                        function Emitter() {
                            _classCallCheck(this, Emitter);

                            Object.defineProperty(this, 'listeners', {
                                value: {},
                                writable: true,
                                configurable: true
                            });
                        }

                        _createClass(Emitter, [{
                            key: "addEventListener",
                            value: function addEventListener(type, callback) {
                                if (!(type in this.listeners)) {
                                    this.listeners[type] = [];
                                }

                                this.listeners[type].push(callback);
                            }
                        }, {
                            key: "removeEventListener",
                            value: function removeEventListener(type, callback) {
                                if (!(type in this.listeners)) {
                                    return;
                                }

                                var stack = this.listeners[type];

                                for (var i = 0, l = stack.length; i < l; i++) {
                                    if (stack[i] === callback) {
                                        stack.splice(i, 1);
                                        return;
                                    }
                                }
                            }
                        }, {
                            key: "dispatchEvent",
                            value: function dispatchEvent(event) {
                                var _this = this;

                                if (!(event.type in this.listeners)) {
                                    return;
                                }

                                var debounce = function debounce(callback) {
                                    setTimeout(function () {
                                        return callback.call(_this, event);
                                    });
                                };

                                var stack = this.listeners[event.type];

                                for (var i = 0, l = stack.length; i < l; i++) {
                                    debounce(stack[i]);
                                }

                                return !event.defaultPrevented;
                            }
                        }]);

                        return Emitter;
                    }();

                var AbortSignal =
                    /*#__PURE__*/
                    function (_Emitter) {
                        _inherits(AbortSignal, _Emitter);

                        function AbortSignal() {
                            var _this2;

                            _classCallCheck(this, AbortSignal);

                            _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AbortSignal).call(this)); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
                            // constructor has failed to run, then "this.listeners" will still be undefined and then we call
                            // the parent constructor directly instead as a workaround. For general details, see babel bug:
                            // https://github.com/babel/babel/issues/3041
                            // This hack was added as a fix for the issue described here:
                            // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042

                            if (!_this2.listeners) {
                                Emitter.call(_assertThisInitialized(_this2));
                            } // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
                            // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl


                            Object.defineProperty(_assertThisInitialized(_this2), 'aborted', {
                                value: false,
                                writable: true,
                                configurable: true
                            });
                            Object.defineProperty(_assertThisInitialized(_this2), 'onabort', {
                                value: null,
                                writable: true,
                                configurable: true
                            });
                            return _this2;
                        }

                        _createClass(AbortSignal, [{
                            key: "toString",
                            value: function toString() {
                                return '[object AbortSignal]';
                            }
                        }, {
                            key: "dispatchEvent",
                            value: function dispatchEvent(event) {
                                if (event.type === 'abort') {
                                    this.aborted = true;

                                    if (typeof this.onabort === 'function') {
                                        this.onabort.call(this, event);
                                    }
                                }

                                _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
                            }
                        }]);

                        return AbortSignal;
                    }(Emitter);
                var AbortController =
                    /*#__PURE__*/
                    function () {
                        function AbortController() {
                            _classCallCheck(this, AbortController);

                            // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
                            // we want Object.keys(new AbortController()) to be [] for compat with the native impl
                            Object.defineProperty(this, 'signal', {
                                value: new AbortSignal(),
                                writable: true,
                                configurable: true
                            });
                        }

                        _createClass(AbortController, [{
                            key: "abort",
                            value: function abort() {
                                var event;

                                try {
                                    event = new Event('abort');
                                } catch (e) {
                                    if (typeof document !== 'undefined') {
                                        if (!document.createEvent) {
                                            // For Internet Explorer 8:
                                            event = document.createEventObject();
                                            event.type = 'abort';
                                        } else {
                                            // For Internet Explorer 11:
                                            event = document.createEvent('Event');
                                            event.initEvent('abort', false, false);
                                        }
                                    } else {
                                        // Fallback where document isn't available:
                                        event = {
                                            type: 'abort',
                                            bubbles: false,
                                            cancelable: false
                                        };
                                    }
                                }

                                this.signal.dispatchEvent(event);
                            }
                        }, {
                            key: "toString",
                            value: function toString() {
                                return '[object AbortController]';
                            }
                        }]);

                        return AbortController;
                    }();

                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    // These are necessary to make sure that we get correct output for:
                    // Object.prototype.toString.call(new AbortController())
                    AbortController.prototype[Symbol.toStringTag] = 'AbortController';
                    AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
                }

                function polyfillNeeded(self) {
                    if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
                        console.log('__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill');
                        return true;
                    } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
                    // defining window.Request, and this polyfill need to work on top of unfetch
                    // so the below feature detection needs the !self.AbortController part.
                    // The Request.prototype check is also needed because Safari versions 11.1.2
                    // up to and including 12.1.x has a window.AbortController present but still
                    // does NOT correctly implement abortable fetch:
                    // https://bugs.webkit.org/show_bug.cgi?id=174980#c2


                    return typeof self.Request === 'function' && !self.Request.prototype.hasOwnProperty('signal') || !self.AbortController;
                }

                /**
                 * Note: the "fetch.Request" default value is available for fetch imported from
                 * the "node-fetch" package and not in browsers. This is OK since browsers
                 * will be importing umd-polyfill.js from that path "self" is passed the
                 * decorator so the default value will not be used (because browsers that define
                 * fetch also has Request). One quirky setup where self.fetch exists but
                 * self.Request does not is when the "unfetch" minimal fetch polyfill is used
                 * on top of IE11; for this case the browser will try to use the fetch.Request
                 * default value which in turn will be undefined but then then "if (Request)"
                 * will ensure that you get a patched fetch but still no Request (as expected).
                 * @param {fetch, Request = fetch.Request}
                 * @returns {fetch: abortableFetch, Request: AbortableRequest}
                 */

                function abortableFetchDecorator(patchTargets) {
                    if ('function' === typeof patchTargets) {
                        patchTargets = {
                            fetch: patchTargets
                        };
                    }

                    var _patchTargets = patchTargets,
                        fetch = _patchTargets.fetch,
                        _patchTargets$Request = _patchTargets.Request,
                        NativeRequest = _patchTargets$Request === void 0 ? fetch.Request : _patchTargets$Request,
                        NativeAbortController = _patchTargets.AbortController,
                        _patchTargets$__FORCE = _patchTargets.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,
                        __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL = _patchTargets$__FORCE === void 0 ? false : _patchTargets$__FORCE;

                    if (!polyfillNeeded({
                        fetch: fetch,
                        Request: NativeRequest,
                        AbortController: NativeAbortController,
                        __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
                    })) {
                        return {
                            fetch: fetch,
                            Request: Request
                        };
                    }

                    var Request = NativeRequest; // Note that the "unfetch" minimal fetch polyfill defines fetch() without
                    // defining window.Request, and this polyfill need to work on top of unfetch
                    // hence we only patch it if it's available. Also we don't patch it if signal
                    // is already available on the Request prototype because in this case support
                    // is present and the patching below can cause a crash since it assigns to
                    // request.signal which is technically a read-only property. This latter error
                    // happens when you run the main5.js node-fetch example in the repo
                    // "abortcontroller-polyfill-examples". The exact error is:
                    //   request.signal = init.signal;
                    //   ^
                    // TypeError: Cannot set property signal of #<Request> which has only a getter

                    if (Request && !Request.prototype.hasOwnProperty('signal') || __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
                        Request = function Request(input, init) {
                            var signal;

                            if (init && init.signal) {
                                signal = init.signal; // Never pass init.signal to the native Request implementation when the polyfill has
                                // been installed because if we're running on top of a browser with a
                                // working native AbortController (i.e. the polyfill was installed due to
                                // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
                                // fake AbortSignal to the native fetch will trigger:
                                // TypeError: Failed to construct 'Request': member signal is not of type AbortSignal.

                                delete init.signal;
                            }

                            var request = new NativeRequest(input, init);

                            if (signal) {
                                Object.defineProperty(request, 'signal', {
                                    writable: false,
                                    enumerable: false,
                                    configurable: true,
                                    value: signal
                                });
                            }

                            return request;
                        };

                        Request.prototype = NativeRequest.prototype;
                    }

                    var realFetch = fetch;

                    var abortableFetch = function abortableFetch(input, init) {
                        var signal = Request && Request.prototype.isPrototypeOf(input) ? input.signal : init ? init.signal : undefined;

                        if (signal) {
                            var abortError;

                            try {
                                abortError = new DOMException('Aborted', 'AbortError');
                            } catch (err) {
                                // IE 11 does not support calling the DOMException constructor, use a
                                // regular error object on it instead.
                                abortError = new Error('Aborted');
                                abortError.name = 'AbortError';
                            } // Return early if already aborted, thus avoiding making an HTTP request


                            if (signal.aborted) {
                                return Promise.reject(abortError);
                            } // Turn an event into a promise, reject it once `abort` is dispatched


                            var cancellation = new Promise(function (_, reject) {
                                signal.addEventListener('abort', function () {
                                    return reject(abortError);
                                }, {
                                    once: true
                                });
                            });

                            if (init && init.signal) {
                                // Never pass .signal to the native implementation when the polyfill has
                                // been installed because if we're running on top of a browser with a
                                // working native AbortController (i.e. the polyfill was installed due to
                                // __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL being set), then passing our
                                // fake AbortSignal to the native fetch will trigger:
                                // TypeError: Failed to execute 'fetch' on 'Window': member signal is not of type AbortSignal.
                                delete init.signal;
                            } // Return the fastest promise (don't need to wait for request to finish)


                            return Promise.race([cancellation, realFetch(input, init)]);
                        }

                        return realFetch(input, init);
                    };

                    return {
                        fetch: abortableFetch,
                        Request: Request
                    };
                }

                exports.AbortController = AbortController;
                exports.AbortSignal = AbortSignal;
                exports.abortableFetch = abortableFetchDecorator;

            }, {}], 20: [function (require, module, exports) {

            }, {}], 21: [function (require, module, exports) {
                var hashClear = require('./_hashClear'),
                    hashDelete = require('./_hashDelete'),
                    hashGet = require('./_hashGet'),
                    hashHas = require('./_hashHas'),
                    hashSet = require('./_hashSet');

                /**
                 * Creates a hash object.
                 *
                 * @private
                 * @constructor
                 * @param {Array} [entries] The key-value pairs to cache.
                 */
                function Hash(entries) {
                    var index = -1,
                        length = entries == null ? 0 : entries.length;

                    this.clear();
                    while (++index < length) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }

                // Add methods to `Hash`.
                Hash.prototype.clear = hashClear;
                Hash.prototype['delete'] = hashDelete;
                Hash.prototype.get = hashGet;
                Hash.prototype.has = hashHas;
                Hash.prototype.set = hashSet;

                module.exports = Hash;

            }, { "./_hashClear": 46, "./_hashDelete": 47, "./_hashGet": 48, "./_hashHas": 49, "./_hashSet": 50 }], 22: [function (require, module, exports) {
                var listCacheClear = require('./_listCacheClear'),
                    listCacheDelete = require('./_listCacheDelete'),
                    listCacheGet = require('./_listCacheGet'),
                    listCacheHas = require('./_listCacheHas'),
                    listCacheSet = require('./_listCacheSet');

                /**
                 * Creates an list cache object.
                 *
                 * @private
                 * @constructor
                 * @param {Array} [entries] The key-value pairs to cache.
                 */
                function ListCache(entries) {
                    var index = -1,
                        length = entries == null ? 0 : entries.length;

                    this.clear();
                    while (++index < length) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }

                // Add methods to `ListCache`.
                ListCache.prototype.clear = listCacheClear;
                ListCache.prototype['delete'] = listCacheDelete;
                ListCache.prototype.get = listCacheGet;
                ListCache.prototype.has = listCacheHas;
                ListCache.prototype.set = listCacheSet;

                module.exports = ListCache;

            }, { "./_listCacheClear": 56, "./_listCacheDelete": 57, "./_listCacheGet": 58, "./_listCacheHas": 59, "./_listCacheSet": 60 }], 23: [function (require, module, exports) {
                var getNative = require('./_getNative'),
                    root = require('./_root');

                /* Built-in method references that are verified to be native. */
                var Map = getNative(root, 'Map');

                module.exports = Map;

            }, { "./_getNative": 42, "./_root": 72 }], 24: [function (require, module, exports) {
                var mapCacheClear = require('./_mapCacheClear'),
                    mapCacheDelete = require('./_mapCacheDelete'),
                    mapCacheGet = require('./_mapCacheGet'),
                    mapCacheHas = require('./_mapCacheHas'),
                    mapCacheSet = require('./_mapCacheSet');

                /**
                 * Creates a map cache object to store key-value pairs.
                 *
                 * @private
                 * @constructor
                 * @param {Array} [entries] The key-value pairs to cache.
                 */
                function MapCache(entries) {
                    var index = -1,
                        length = entries == null ? 0 : entries.length;

                    this.clear();
                    while (++index < length) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }

                // Add methods to `MapCache`.
                MapCache.prototype.clear = mapCacheClear;
                MapCache.prototype['delete'] = mapCacheDelete;
                MapCache.prototype.get = mapCacheGet;
                MapCache.prototype.has = mapCacheHas;
                MapCache.prototype.set = mapCacheSet;

                module.exports = MapCache;

            }, { "./_mapCacheClear": 61, "./_mapCacheDelete": 62, "./_mapCacheGet": 63, "./_mapCacheHas": 64, "./_mapCacheSet": 65 }], 25: [function (require, module, exports) {
                var root = require('./_root');

                /** Built-in value references. */
                var Symbol = root.Symbol;

                module.exports = Symbol;

            }, { "./_root": 72 }], 26: [function (require, module, exports) {
                var baseTimes = require('./_baseTimes'),
                    isArguments = require('./isArguments'),
                    isArray = require('./isArray'),
                    isBuffer = require('./isBuffer'),
                    isIndex = require('./_isIndex'),
                    isTypedArray = require('./isTypedArray');

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * Creates an array of the enumerable property names of the array-like `value`.
                 *
                 * @private
                 * @param {*} value The value to query.
                 * @param {boolean} inherited Specify returning inherited property names.
                 * @returns {Array} Returns the array of property names.
                 */
                function arrayLikeKeys(value, inherited) {
                    var isArr = isArray(value),
                        isArg = !isArr && isArguments(value),
                        isBuff = !isArr && !isArg && isBuffer(value),
                        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
                        skipIndexes = isArr || isArg || isBuff || isType,
                        result = skipIndexes ? baseTimes(value.length, String) : [],
                        length = result.length;

                    for (var key in value) {
                        if ((inherited || hasOwnProperty.call(value, key)) &&
                            !(skipIndexes && (
                                // Safari 9 has enumerable `arguments.length` in strict mode.
                                key == 'length' ||
                                // Node.js 0.10 has enumerable non-index properties on buffers.
                                (isBuff && (key == 'offset' || key == 'parent')) ||
                                // PhantomJS 2 has enumerable non-index properties on typed arrays.
                                (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
                                // Skip index properties.
                                isIndex(key, length)
                            ))) {
                            result.push(key);
                        }
                    }
                    return result;
                }

                module.exports = arrayLikeKeys;

            }, { "./_baseTimes": 35, "./_isIndex": 51, "./isArguments": 78, "./isArray": 79, "./isBuffer": 82, "./isTypedArray": 92 }], 27: [function (require, module, exports) {
                /**
                 * A specialized version of `_.map` for arrays without support for iteratee
                 * shorthands.
                 *
                 * @private
                 * @param {Array} [array] The array to iterate over.
                 * @param {Function} iteratee The function invoked per iteration.
                 * @returns {Array} Returns the new mapped array.
                 */
                function arrayMap(array, iteratee) {
                    var index = -1,
                        length = array == null ? 0 : array.length,
                        result = Array(length);

                    while (++index < length) {
                        result[index] = iteratee(array[index], index, array);
                    }
                    return result;
                }

                module.exports = arrayMap;

            }, {}], 28: [function (require, module, exports) {
                var eq = require('./eq');

                /**
                 * Gets the index at which the `key` is found in `array` of key-value pairs.
                 *
                 * @private
                 * @param {Array} array The array to inspect.
                 * @param {*} key The key to search for.
                 * @returns {number} Returns the index of the matched value, else `-1`.
                 */
                function assocIndexOf(array, key) {
                    var length = array.length;
                    while (length--) {
                        if (eq(array[length][0], key)) {
                            return length;
                        }
                    }
                    return -1;
                }

                module.exports = assocIndexOf;

            }, { "./eq": 76 }], 29: [function (require, module, exports) {
                var castPath = require('./_castPath'),
                    toKey = require('./_toKey');

                /**
                 * The base implementation of `_.get` without support for default values.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @param {Array|string} path The path of the property to get.
                 * @returns {*} Returns the resolved value.
                 */
                function baseGet(object, path) {
                    path = castPath(path, object);

                    var index = 0,
                        length = path.length;

                    while (object != null && index < length) {
                        object = object[toKey(path[index++])];
                    }
                    return (index && index == length) ? object : undefined;
                }

                module.exports = baseGet;

            }, { "./_castPath": 38, "./_toKey": 74 }], 30: [function (require, module, exports) {
                var Symbol = require('./_Symbol'),
                    getRawTag = require('./_getRawTag'),
                    objectToString = require('./_objectToString');

                /** `Object#toString` result references. */
                var nullTag = '[object Null]',
                    undefinedTag = '[object Undefined]';

                /** Built-in value references. */
                var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

                /**
                 * The base implementation of `getTag` without fallbacks for buggy environments.
                 *
                 * @private
                 * @param {*} value The value to query.
                 * @returns {string} Returns the `toStringTag`.
                 */
                function baseGetTag(value) {
                    if (value == null) {
                        return value === undefined ? undefinedTag : nullTag;
                    }
                    return (symToStringTag && symToStringTag in Object(value))
                        ? getRawTag(value)
                        : objectToString(value);
                }

                module.exports = baseGetTag;

            }, { "./_Symbol": 25, "./_getRawTag": 44, "./_objectToString": 70 }], 31: [function (require, module, exports) {
                var baseGetTag = require('./_baseGetTag'),
                    isObjectLike = require('./isObjectLike');

                /** `Object#toString` result references. */
                var argsTag = '[object Arguments]';

                /**
                 * The base implementation of `_.isArguments`.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
                 */
                function baseIsArguments(value) {
                    return isObjectLike(value) && baseGetTag(value) == argsTag;
                }

                module.exports = baseIsArguments;

            }, { "./_baseGetTag": 30, "./isObjectLike": 88 }], 32: [function (require, module, exports) {
                var isFunction = require('./isFunction'),
                    isMasked = require('./_isMasked'),
                    isObject = require('./isObject'),
                    toSource = require('./_toSource');

                /**
                 * Used to match `RegExp`
                 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
                 */
                var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

                /** Used to detect host constructors (Safari). */
                var reIsHostCtor = /^\[object .+?Constructor\]$/;

                /** Used for built-in method references. */
                var funcProto = Function.prototype,
                    objectProto = Object.prototype;

                /** Used to resolve the decompiled source of functions. */
                var funcToString = funcProto.toString;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /** Used to detect if a method is native. */
                var reIsNative = RegExp('^' +
                    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
                );

                /**
                 * The base implementation of `_.isNative` without bad shim checks.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a native function,
                 *  else `false`.
                 */
                function baseIsNative(value) {
                    if (!isObject(value) || isMasked(value)) {
                        return false;
                    }
                    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
                    return pattern.test(toSource(value));
                }

                module.exports = baseIsNative;

            }, { "./_isMasked": 54, "./_toSource": 75, "./isFunction": 83, "./isObject": 87 }], 33: [function (require, module, exports) {
                var baseGetTag = require('./_baseGetTag'),
                    isLength = require('./isLength'),
                    isObjectLike = require('./isObjectLike');

                /** `Object#toString` result references. */
                var argsTag = '[object Arguments]',
                    arrayTag = '[object Array]',
                    boolTag = '[object Boolean]',
                    dateTag = '[object Date]',
                    errorTag = '[object Error]',
                    funcTag = '[object Function]',
                    mapTag = '[object Map]',
                    numberTag = '[object Number]',
                    objectTag = '[object Object]',
                    regexpTag = '[object RegExp]',
                    setTag = '[object Set]',
                    stringTag = '[object String]',
                    weakMapTag = '[object WeakMap]';

                var arrayBufferTag = '[object ArrayBuffer]',
                    dataViewTag = '[object DataView]',
                    float32Tag = '[object Float32Array]',
                    float64Tag = '[object Float64Array]',
                    int8Tag = '[object Int8Array]',
                    int16Tag = '[object Int16Array]',
                    int32Tag = '[object Int32Array]',
                    uint8Tag = '[object Uint8Array]',
                    uint8ClampedTag = '[object Uint8ClampedArray]',
                    uint16Tag = '[object Uint16Array]',
                    uint32Tag = '[object Uint32Array]';

                /** Used to identify `toStringTag` values of typed arrays. */
                var typedArrayTags = {};
                typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
                    typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
                    typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
                    typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
                    typedArrayTags[uint32Tag] = true;
                typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
                    typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
                    typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
                    typedArrayTags[errorTag] = typedArrayTags[funcTag] =
                    typedArrayTags[mapTag] = typedArrayTags[numberTag] =
                    typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
                    typedArrayTags[setTag] = typedArrayTags[stringTag] =
                    typedArrayTags[weakMapTag] = false;

                /**
                 * The base implementation of `_.isTypedArray` without Node.js optimizations.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
                 */
                function baseIsTypedArray(value) {
                    return isObjectLike(value) &&
                        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
                }

                module.exports = baseIsTypedArray;

            }, { "./_baseGetTag": 30, "./isLength": 84, "./isObjectLike": 88 }], 34: [function (require, module, exports) {
                var isPrototype = require('./_isPrototype'),
                    nativeKeys = require('./_nativeKeys');

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the array of property names.
                 */
                function baseKeys(object) {
                    if (!isPrototype(object)) {
                        return nativeKeys(object);
                    }
                    var result = [];
                    for (var key in Object(object)) {
                        if (hasOwnProperty.call(object, key) && key != 'constructor') {
                            result.push(key);
                        }
                    }
                    return result;
                }

                module.exports = baseKeys;

            }, { "./_isPrototype": 55, "./_nativeKeys": 68 }], 35: [function (require, module, exports) {
                /**
                 * The base implementation of `_.times` without support for iteratee shorthands
                 * or max array length checks.
                 *
                 * @private
                 * @param {number} n The number of times to invoke `iteratee`.
                 * @param {Function} iteratee The function invoked per iteration.
                 * @returns {Array} Returns the array of results.
                 */
                function baseTimes(n, iteratee) {
                    var index = -1,
                        result = Array(n);

                    while (++index < n) {
                        result[index] = iteratee(index);
                    }
                    return result;
                }

                module.exports = baseTimes;

            }, {}], 36: [function (require, module, exports) {
                var Symbol = require('./_Symbol'),
                    arrayMap = require('./_arrayMap'),
                    isArray = require('./isArray'),
                    isSymbol = require('./isSymbol');

                /** Used as references for various `Number` constants. */
                var INFINITY = 1 / 0;

                /** Used to convert symbols to primitives and strings. */
                var symbolProto = Symbol ? Symbol.prototype : undefined,
                    symbolToString = symbolProto ? symbolProto.toString : undefined;

                /**
                 * The base implementation of `_.toString` which doesn't convert nullish
                 * values to empty strings.
                 *
                 * @private
                 * @param {*} value The value to process.
                 * @returns {string} Returns the string.
                 */
                function baseToString(value) {
                    // Exit early for strings to avoid a performance hit in some environments.
                    if (typeof value == 'string') {
                        return value;
                    }
                    if (isArray(value)) {
                        // Recursively convert values (susceptible to call stack limits).
                        return arrayMap(value, baseToString) + '';
                    }
                    if (isSymbol(value)) {
                        return symbolToString ? symbolToString.call(value) : '';
                    }
                    var result = (value + '');
                    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
                }

                module.exports = baseToString;

            }, { "./_Symbol": 25, "./_arrayMap": 27, "./isArray": 79, "./isSymbol": 91 }], 37: [function (require, module, exports) {
                /**
                 * The base implementation of `_.unary` without support for storing metadata.
                 *
                 * @private
                 * @param {Function} func The function to cap arguments for.
                 * @returns {Function} Returns the new capped function.
                 */
                function baseUnary(func) {
                    return function (value) {
                        return func(value);
                    };
                }

                module.exports = baseUnary;

            }, {}], 38: [function (require, module, exports) {
                var isArray = require('./isArray'),
                    isKey = require('./_isKey'),
                    stringToPath = require('./_stringToPath'),
                    toString = require('./toString');

                /**
                 * Casts `value` to a path array if it's not one.
                 *
                 * @private
                 * @param {*} value The value to inspect.
                 * @param {Object} [object] The object to query keys on.
                 * @returns {Array} Returns the cast property path array.
                 */
                function castPath(value, object) {
                    if (isArray(value)) {
                        return value;
                    }
                    return isKey(value, object) ? [value] : stringToPath(toString(value));
                }

                module.exports = castPath;

            }, { "./_isKey": 52, "./_stringToPath": 73, "./isArray": 79, "./toString": 96 }], 39: [function (require, module, exports) {
                var root = require('./_root');

                /** Used to detect overreaching core-js shims. */
                var coreJsData = root['__core-js_shared__'];

                module.exports = coreJsData;

            }, { "./_root": 72 }], 40: [function (require, module, exports) {
                (function (global) {
                    /** Detect free variable `global` from Node.js. */
                    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

                    module.exports = freeGlobal;

                }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {}], 41: [function (require, module, exports) {
                var isKeyable = require('./_isKeyable');

                /**
                 * Gets the data for `map`.
                 *
                 * @private
                 * @param {Object} map The map to query.
                 * @param {string} key The reference key.
                 * @returns {*} Returns the map data.
                 */
                function getMapData(map, key) {
                    var data = map.__data__;
                    return isKeyable(key)
                        ? data[typeof key == 'string' ? 'string' : 'hash']
                        : data.map;
                }

                module.exports = getMapData;

            }, { "./_isKeyable": 53 }], 42: [function (require, module, exports) {
                var baseIsNative = require('./_baseIsNative'),
                    getValue = require('./_getValue');

                /**
                 * Gets the native function at `key` of `object`.
                 *
                 * @private
                 * @param {Object} object The object to query.
                 * @param {string} key The key of the method to get.
                 * @returns {*} Returns the function if it's native, else `undefined`.
                 */
                function getNative(object, key) {
                    var value = getValue(object, key);
                    return baseIsNative(value) ? value : undefined;
                }

                module.exports = getNative;

            }, { "./_baseIsNative": 32, "./_getValue": 45 }], 43: [function (require, module, exports) {
                var overArg = require('./_overArg');

                /** Built-in value references. */
                var getPrototype = overArg(Object.getPrototypeOf, Object);

                module.exports = getPrototype;

            }, { "./_overArg": 71 }], 44: [function (require, module, exports) {
                var Symbol = require('./_Symbol');

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * Used to resolve the
                 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
                 * of values.
                 */
                var nativeObjectToString = objectProto.toString;

                /** Built-in value references. */
                var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

                /**
                 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
                 *
                 * @private
                 * @param {*} value The value to query.
                 * @returns {string} Returns the raw `toStringTag`.
                 */
                function getRawTag(value) {
                    var isOwn = hasOwnProperty.call(value, symToStringTag),
                        tag = value[symToStringTag];

                    try {
                        value[symToStringTag] = undefined;
                        var unmasked = true;
                    } catch (e) { }

                    var result = nativeObjectToString.call(value);
                    if (unmasked) {
                        if (isOwn) {
                            value[symToStringTag] = tag;
                        } else {
                            delete value[symToStringTag];
                        }
                    }
                    return result;
                }

                module.exports = getRawTag;

            }, { "./_Symbol": 25 }], 45: [function (require, module, exports) {
                /**
                 * Gets the value at `key` of `object`.
                 *
                 * @private
                 * @param {Object} [object] The object to query.
                 * @param {string} key The key of the property to get.
                 * @returns {*} Returns the property value.
                 */
                function getValue(object, key) {
                    return object == null ? undefined : object[key];
                }

                module.exports = getValue;

            }, {}], 46: [function (require, module, exports) {
                var nativeCreate = require('./_nativeCreate');

                /**
                 * Removes all key-value entries from the hash.
                 *
                 * @private
                 * @name clear
                 * @memberOf Hash
                 */
                function hashClear() {
                    this.__data__ = nativeCreate ? nativeCreate(null) : {};
                    this.size = 0;
                }

                module.exports = hashClear;

            }, { "./_nativeCreate": 67 }], 47: [function (require, module, exports) {
                /**
                 * Removes `key` and its value from the hash.
                 *
                 * @private
                 * @name delete
                 * @memberOf Hash
                 * @param {Object} hash The hash to modify.
                 * @param {string} key The key of the value to remove.
                 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
                 */
                function hashDelete(key) {
                    var result = this.has(key) && delete this.__data__[key];
                    this.size -= result ? 1 : 0;
                    return result;
                }

                module.exports = hashDelete;

            }, {}], 48: [function (require, module, exports) {
                var nativeCreate = require('./_nativeCreate');

                /** Used to stand-in for `undefined` hash values. */
                var HASH_UNDEFINED = '__lodash_hash_undefined__';

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * Gets the hash value for `key`.
                 *
                 * @private
                 * @name get
                 * @memberOf Hash
                 * @param {string} key The key of the value to get.
                 * @returns {*} Returns the entry value.
                 */
                function hashGet(key) {
                    var data = this.__data__;
                    if (nativeCreate) {
                        var result = data[key];
                        return result === HASH_UNDEFINED ? undefined : result;
                    }
                    return hasOwnProperty.call(data, key) ? data[key] : undefined;
                }

                module.exports = hashGet;

            }, { "./_nativeCreate": 67 }], 49: [function (require, module, exports) {
                var nativeCreate = require('./_nativeCreate');

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /**
                 * Checks if a hash value for `key` exists.
                 *
                 * @private
                 * @name has
                 * @memberOf Hash
                 * @param {string} key The key of the entry to check.
                 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                 */
                function hashHas(key) {
                    var data = this.__data__;
                    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
                }

                module.exports = hashHas;

            }, { "./_nativeCreate": 67 }], 50: [function (require, module, exports) {
                var nativeCreate = require('./_nativeCreate');

                /** Used to stand-in for `undefined` hash values. */
                var HASH_UNDEFINED = '__lodash_hash_undefined__';

                /**
                 * Sets the hash `key` to `value`.
                 *
                 * @private
                 * @name set
                 * @memberOf Hash
                 * @param {string} key The key of the value to set.
                 * @param {*} value The value to set.
                 * @returns {Object} Returns the hash instance.
                 */
                function hashSet(key, value) {
                    var data = this.__data__;
                    this.size += this.has(key) ? 0 : 1;
                    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
                    return this;
                }

                module.exports = hashSet;

            }, { "./_nativeCreate": 67 }], 51: [function (require, module, exports) {
                /** Used as references for various `Number` constants. */
                var MAX_SAFE_INTEGER = 9007199254740991;

                /** Used to detect unsigned integer values. */
                var reIsUint = /^(?:0|[1-9]\d*)$/;

                /**
                 * Checks if `value` is a valid array-like index.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
                 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
                 */
                function isIndex(value, length) {
                    var type = typeof value;
                    length = length == null ? MAX_SAFE_INTEGER : length;

                    return !!length &&
                        (type == 'number' ||
                            (type != 'symbol' && reIsUint.test(value))) &&
                        (value > -1 && value % 1 == 0 && value < length);
                }

                module.exports = isIndex;

            }, {}], 52: [function (require, module, exports) {
                var isArray = require('./isArray'),
                    isSymbol = require('./isSymbol');

                /** Used to match property names within property paths. */
                var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    reIsPlainProp = /^\w*$/;

                /**
                 * Checks if `value` is a property name and not a property path.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @param {Object} [object] The object to query keys on.
                 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
                 */
                function isKey(value, object) {
                    if (isArray(value)) {
                        return false;
                    }
                    var type = typeof value;
                    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
                        value == null || isSymbol(value)) {
                        return true;
                    }
                    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
                        (object != null && value in Object(object));
                }

                module.exports = isKey;

            }, { "./isArray": 79, "./isSymbol": 91 }], 53: [function (require, module, exports) {
                /**
                 * Checks if `value` is suitable for use as unique object key.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
                 */
                function isKeyable(value) {
                    var type = typeof value;
                    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
                        ? (value !== '__proto__')
                        : (value === null);
                }

                module.exports = isKeyable;

            }, {}], 54: [function (require, module, exports) {
                var coreJsData = require('./_coreJsData');

                /** Used to detect methods masquerading as native. */
                var maskSrcKey = (function () {
                    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
                    return uid ? ('Symbol(src)_1.' + uid) : '';
                }());

                /**
                 * Checks if `func` has its source masked.
                 *
                 * @private
                 * @param {Function} func The function to check.
                 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
                 */
                function isMasked(func) {
                    return !!maskSrcKey && (maskSrcKey in func);
                }

                module.exports = isMasked;

            }, { "./_coreJsData": 39 }], 55: [function (require, module, exports) {
                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /**
                 * Checks if `value` is likely a prototype object.
                 *
                 * @private
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
                 */
                function isPrototype(value) {
                    var Ctor = value && value.constructor,
                        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

                    return value === proto;
                }

                module.exports = isPrototype;

            }, {}], 56: [function (require, module, exports) {
                /**
                 * Removes all key-value entries from the list cache.
                 *
                 * @private
                 * @name clear
                 * @memberOf ListCache
                 */
                function listCacheClear() {
                    this.__data__ = [];
                    this.size = 0;
                }

                module.exports = listCacheClear;

            }, {}], 57: [function (require, module, exports) {
                var assocIndexOf = require('./_assocIndexOf');

                /** Used for built-in method references. */
                var arrayProto = Array.prototype;

                /** Built-in value references. */
                var splice = arrayProto.splice;

                /**
                 * Removes `key` and its value from the list cache.
                 *
                 * @private
                 * @name delete
                 * @memberOf ListCache
                 * @param {string} key The key of the value to remove.
                 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
                 */
                function listCacheDelete(key) {
                    var data = this.__data__,
                        index = assocIndexOf(data, key);

                    if (index < 0) {
                        return false;
                    }
                    var lastIndex = data.length - 1;
                    if (index == lastIndex) {
                        data.pop();
                    } else {
                        splice.call(data, index, 1);
                    }
                    --this.size;
                    return true;
                }

                module.exports = listCacheDelete;

            }, { "./_assocIndexOf": 28 }], 58: [function (require, module, exports) {
                var assocIndexOf = require('./_assocIndexOf');

                /**
                 * Gets the list cache value for `key`.
                 *
                 * @private
                 * @name get
                 * @memberOf ListCache
                 * @param {string} key The key of the value to get.
                 * @returns {*} Returns the entry value.
                 */
                function listCacheGet(key) {
                    var data = this.__data__,
                        index = assocIndexOf(data, key);

                    return index < 0 ? undefined : data[index][1];
                }

                module.exports = listCacheGet;

            }, { "./_assocIndexOf": 28 }], 59: [function (require, module, exports) {
                var assocIndexOf = require('./_assocIndexOf');

                /**
                 * Checks if a list cache value for `key` exists.
                 *
                 * @private
                 * @name has
                 * @memberOf ListCache
                 * @param {string} key The key of the entry to check.
                 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                 */
                function listCacheHas(key) {
                    return assocIndexOf(this.__data__, key) > -1;
                }

                module.exports = listCacheHas;

            }, { "./_assocIndexOf": 28 }], 60: [function (require, module, exports) {
                var assocIndexOf = require('./_assocIndexOf');

                /**
                 * Sets the list cache `key` to `value`.
                 *
                 * @private
                 * @name set
                 * @memberOf ListCache
                 * @param {string} key The key of the value to set.
                 * @param {*} value The value to set.
                 * @returns {Object} Returns the list cache instance.
                 */
                function listCacheSet(key, value) {
                    var data = this.__data__,
                        index = assocIndexOf(data, key);

                    if (index < 0) {
                        ++this.size;
                        data.push([key, value]);
                    } else {
                        data[index][1] = value;
                    }
                    return this;
                }

                module.exports = listCacheSet;

            }, { "./_assocIndexOf": 28 }], 61: [function (require, module, exports) {
                var Hash = require('./_Hash'),
                    ListCache = require('./_ListCache'),
                    Map = require('./_Map');

                /**
                 * Removes all key-value entries from the map.
                 *
                 * @private
                 * @name clear
                 * @memberOf MapCache
                 */
                function mapCacheClear() {
                    this.size = 0;
                    this.__data__ = {
                        'hash': new Hash,
                        'map': new (Map || ListCache),
                        'string': new Hash
                    };
                }

                module.exports = mapCacheClear;

            }, { "./_Hash": 21, "./_ListCache": 22, "./_Map": 23 }], 62: [function (require, module, exports) {
                var getMapData = require('./_getMapData');

                /**
                 * Removes `key` and its value from the map.
                 *
                 * @private
                 * @name delete
                 * @memberOf MapCache
                 * @param {string} key The key of the value to remove.
                 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
                 */
                function mapCacheDelete(key) {
                    var result = getMapData(this, key)['delete'](key);
                    this.size -= result ? 1 : 0;
                    return result;
                }

                module.exports = mapCacheDelete;

            }, { "./_getMapData": 41 }], 63: [function (require, module, exports) {
                var getMapData = require('./_getMapData');

                /**
                 * Gets the map value for `key`.
                 *
                 * @private
                 * @name get
                 * @memberOf MapCache
                 * @param {string} key The key of the value to get.
                 * @returns {*} Returns the entry value.
                 */
                function mapCacheGet(key) {
                    return getMapData(this, key).get(key);
                }

                module.exports = mapCacheGet;

            }, { "./_getMapData": 41 }], 64: [function (require, module, exports) {
                var getMapData = require('./_getMapData');

                /**
                 * Checks if a map value for `key` exists.
                 *
                 * @private
                 * @name has
                 * @memberOf MapCache
                 * @param {string} key The key of the entry to check.
                 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                 */
                function mapCacheHas(key) {
                    return getMapData(this, key).has(key);
                }

                module.exports = mapCacheHas;

            }, { "./_getMapData": 41 }], 65: [function (require, module, exports) {
                var getMapData = require('./_getMapData');

                /**
                 * Sets the map `key` to `value`.
                 *
                 * @private
                 * @name set
                 * @memberOf MapCache
                 * @param {string} key The key of the value to set.
                 * @param {*} value The value to set.
                 * @returns {Object} Returns the map cache instance.
                 */
                function mapCacheSet(key, value) {
                    var data = getMapData(this, key),
                        size = data.size;

                    data.set(key, value);
                    this.size += data.size == size ? 0 : 1;
                    return this;
                }

                module.exports = mapCacheSet;

            }, { "./_getMapData": 41 }], 66: [function (require, module, exports) {
                var memoize = require('./memoize');

                /** Used as the maximum memoize cache size. */
                var MAX_MEMOIZE_SIZE = 500;

                /**
                 * A specialized version of `_.memoize` which clears the memoized function's
                 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
                 *
                 * @private
                 * @param {Function} func The function to have its output memoized.
                 * @returns {Function} Returns the new memoized function.
                 */
                function memoizeCapped(func) {
                    var result = memoize(func, function (key) {
                        if (cache.size === MAX_MEMOIZE_SIZE) {
                            cache.clear();
                        }
                        return key;
                    });

                    var cache = result.cache;
                    return result;
                }

                module.exports = memoizeCapped;

            }, { "./memoize": 94 }], 67: [function (require, module, exports) {
                var getNative = require('./_getNative');

                /* Built-in method references that are verified to be native. */
                var nativeCreate = getNative(Object, 'create');

                module.exports = nativeCreate;

            }, { "./_getNative": 42 }], 68: [function (require, module, exports) {
                var overArg = require('./_overArg');

                /* Built-in method references for those with the same name as other `lodash` methods. */
                var nativeKeys = overArg(Object.keys, Object);

                module.exports = nativeKeys;

            }, { "./_overArg": 71 }], 69: [function (require, module, exports) {
                var freeGlobal = require('./_freeGlobal');

                /** Detect free variable `exports`. */
                var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

                /** Detect free variable `module`. */
                var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

                /** Detect the popular CommonJS extension `module.exports`. */
                var moduleExports = freeModule && freeModule.exports === freeExports;

                /** Detect free variable `process` from Node.js. */
                var freeProcess = moduleExports && freeGlobal.process;

                /** Used to access faster Node.js helpers. */
                var nodeUtil = (function () {
                    try {
                        // Use `util.types` for Node.js 10+.
                        var types = freeModule && freeModule.require && freeModule.require('util').types;

                        if (types) {
                            return types;
                        }

                        // Legacy `process.binding('util')` for Node.js < 10.
                        return freeProcess && freeProcess.binding && freeProcess.binding('util');
                    } catch (e) { }
                }());

                module.exports = nodeUtil;

            }, { "./_freeGlobal": 40 }], 70: [function (require, module, exports) {
                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /**
                 * Used to resolve the
                 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
                 * of values.
                 */
                var nativeObjectToString = objectProto.toString;

                /**
                 * Converts `value` to a string using `Object.prototype.toString`.
                 *
                 * @private
                 * @param {*} value The value to convert.
                 * @returns {string} Returns the converted string.
                 */
                function objectToString(value) {
                    return nativeObjectToString.call(value);
                }

                module.exports = objectToString;

            }, {}], 71: [function (require, module, exports) {
                /**
                 * Creates a unary function that invokes `func` with its argument transformed.
                 *
                 * @private
                 * @param {Function} func The function to wrap.
                 * @param {Function} transform The argument transform.
                 * @returns {Function} Returns the new function.
                 */
                function overArg(func, transform) {
                    return function (arg) {
                        return func(transform(arg));
                    };
                }

                module.exports = overArg;

            }, {}], 72: [function (require, module, exports) {
                var freeGlobal = require('./_freeGlobal');

                /** Detect free variable `self`. */
                var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

                /** Used as a reference to the global object. */
                var root = freeGlobal || freeSelf || Function('return this')();

                module.exports = root;

            }, { "./_freeGlobal": 40 }], 73: [function (require, module, exports) {
                var memoizeCapped = require('./_memoizeCapped');

                /** Used to match property names within property paths. */
                var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

                /** Used to match backslashes in property paths. */
                var reEscapeChar = /\\(\\)?/g;

                /**
                 * Converts `string` to a property path array.
                 *
                 * @private
                 * @param {string} string The string to convert.
                 * @returns {Array} Returns the property path array.
                 */
                var stringToPath = memoizeCapped(function (string) {
                    var result = [];
                    if (string.charCodeAt(0) === 46 /* . */) {
                        result.push('');
                    }
                    string.replace(rePropName, function (match, number, quote, subString) {
                        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
                    });
                    return result;
                });

                module.exports = stringToPath;

            }, { "./_memoizeCapped": 66 }], 74: [function (require, module, exports) {
                var isSymbol = require('./isSymbol');

                /** Used as references for various `Number` constants. */
                var INFINITY = 1 / 0;

                /**
                 * Converts `value` to a string key if it's not a string or symbol.
                 *
                 * @private
                 * @param {*} value The value to inspect.
                 * @returns {string|symbol} Returns the key.
                 */
                function toKey(value) {
                    if (typeof value == 'string' || isSymbol(value)) {
                        return value;
                    }
                    var result = (value + '');
                    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
                }

                module.exports = toKey;

            }, { "./isSymbol": 91 }], 75: [function (require, module, exports) {
                /** Used for built-in method references. */
                var funcProto = Function.prototype;

                /** Used to resolve the decompiled source of functions. */
                var funcToString = funcProto.toString;

                /**
                 * Converts `func` to its source code.
                 *
                 * @private
                 * @param {Function} func The function to convert.
                 * @returns {string} Returns the source code.
                 */
                function toSource(func) {
                    if (func != null) {
                        try {
                            return funcToString.call(func);
                        } catch (e) { }
                        try {
                            return (func + '');
                        } catch (e) { }
                    }
                    return '';
                }

                module.exports = toSource;

            }, {}], 76: [function (require, module, exports) {
                /**
                 * Performs a
                 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
                 * comparison between two values to determine if they are equivalent.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to compare.
                 * @param {*} other The other value to compare.
                 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
                 * @example
                 *
                 * var object = { 'a': 1 };
                 * var other = { 'a': 1 };
                 *
                 * _.eq(object, object);
                 * // => true
                 *
                 * _.eq(object, other);
                 * // => false
                 *
                 * _.eq('a', 'a');
                 * // => true
                 *
                 * _.eq('a', Object('a'));
                 * // => false
                 *
                 * _.eq(NaN, NaN);
                 * // => true
                 */
                function eq(value, other) {
                    return value === other || (value !== value && other !== other);
                }

                module.exports = eq;

            }, {}], 77: [function (require, module, exports) {
                var baseGet = require('./_baseGet');

                /**
                 * Gets the value at `path` of `object`. If the resolved value is
                 * `undefined`, the `defaultValue` is returned in its place.
                 *
                 * @static
                 * @memberOf _
                 * @since 3.7.0
                 * @category Object
                 * @param {Object} object The object to query.
                 * @param {Array|string} path The path of the property to get.
                 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
                 * @returns {*} Returns the resolved value.
                 * @example
                 *
                 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
                 *
                 * _.get(object, 'a[0].b.c');
                 * // => 3
                 *
                 * _.get(object, ['a', '0', 'b', 'c']);
                 * // => 3
                 *
                 * _.get(object, 'a.b.c', 'default');
                 * // => 'default'
                 */
                function get(object, path, defaultValue) {
                    var result = object == null ? undefined : baseGet(object, path);
                    return result === undefined ? defaultValue : result;
                }

                module.exports = get;

            }, { "./_baseGet": 29 }], 78: [function (require, module, exports) {
                var baseIsArguments = require('./_baseIsArguments'),
                    isObjectLike = require('./isObjectLike');

                /** Used for built-in method references. */
                var objectProto = Object.prototype;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /** Built-in value references. */
                var propertyIsEnumerable = objectProto.propertyIsEnumerable;

                /**
                 * Checks if `value` is likely an `arguments` object.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
                 *  else `false`.
                 * @example
                 *
                 * _.isArguments(function() { return arguments; }());
                 * // => true
                 *
                 * _.isArguments([1, 2, 3]);
                 * // => false
                 */
                var isArguments = baseIsArguments(function () { return arguments; }()) ? baseIsArguments : function (value) {
                    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
                        !propertyIsEnumerable.call(value, 'callee');
                };

                module.exports = isArguments;

            }, { "./_baseIsArguments": 31, "./isObjectLike": 88 }], 79: [function (require, module, exports) {
                /**
                 * Checks if `value` is classified as an `Array` object.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
                 * @example
                 *
                 * _.isArray([1, 2, 3]);
                 * // => true
                 *
                 * _.isArray(document.body.children);
                 * // => false
                 *
                 * _.isArray('abc');
                 * // => false
                 *
                 * _.isArray(_.noop);
                 * // => false
                 */
                var isArray = Array.isArray;

                module.exports = isArray;

            }, {}], 80: [function (require, module, exports) {
                var isFunction = require('./isFunction'),
                    isLength = require('./isLength');

                /**
                 * Checks if `value` is array-like. A value is considered array-like if it's
                 * not a function and has a `value.length` that's an integer greater than or
                 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
                 * @example
                 *
                 * _.isArrayLike([1, 2, 3]);
                 * // => true
                 *
                 * _.isArrayLike(document.body.children);
                 * // => true
                 *
                 * _.isArrayLike('abc');
                 * // => true
                 *
                 * _.isArrayLike(_.noop);
                 * // => false
                 */
                function isArrayLike(value) {
                    return value != null && isLength(value.length) && !isFunction(value);
                }

                module.exports = isArrayLike;

            }, { "./isFunction": 83, "./isLength": 84 }], 81: [function (require, module, exports) {
                var baseGetTag = require('./_baseGetTag'),
                    isObjectLike = require('./isObjectLike');

                /** `Object#toString` result references. */
                var boolTag = '[object Boolean]';

                /**
                 * Checks if `value` is classified as a boolean primitive or object.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
                 * @example
                 *
                 * _.isBoolean(false);
                 * // => true
                 *
                 * _.isBoolean(null);
                 * // => false
                 */
                function isBoolean(value) {
                    return value === true || value === false ||
                        (isObjectLike(value) && baseGetTag(value) == boolTag);
                }

                module.exports = isBoolean;

            }, { "./_baseGetTag": 30, "./isObjectLike": 88 }], 82: [function (require, module, exports) {
                var root = require('./_root'),
                    stubFalse = require('./stubFalse');

                /** Detect free variable `exports`. */
                var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

                /** Detect free variable `module`. */
                var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

                /** Detect the popular CommonJS extension `module.exports`. */
                var moduleExports = freeModule && freeModule.exports === freeExports;

                /** Built-in value references. */
                var Buffer = moduleExports ? root.Buffer : undefined;

                /* Built-in method references for those with the same name as other `lodash` methods. */
                var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

                /**
                 * Checks if `value` is a buffer.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.3.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
                 * @example
                 *
                 * _.isBuffer(new Buffer(2));
                 * // => true
                 *
                 * _.isBuffer(new Uint8Array(2));
                 * // => false
                 */
                var isBuffer = nativeIsBuffer || stubFalse;

                module.exports = isBuffer;

            }, { "./_root": 72, "./stubFalse": 95 }], 83: [function (require, module, exports) {
                var baseGetTag = require('./_baseGetTag'),
                    isObject = require('./isObject');

                /** `Object#toString` result references. */
                var asyncTag = '[object AsyncFunction]',
                    funcTag = '[object Function]',
                    genTag = '[object GeneratorFunction]',
                    proxyTag = '[object Proxy]';

                /**
                 * Checks if `value` is classified as a `Function` object.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
                 * @example
                 *
                 * _.isFunction(_);
                 * // => true
                 *
                 * _.isFunction(/abc/);
                 * // => false
                 */
                function isFunction(value) {
                    if (!isObject(value)) {
                        return false;
                    }
                    // The use of `Object#toString` avoids issues with the `typeof` operator
                    // in Safari 9 which returns 'object' for typed arrays and other constructors.
                    var tag = baseGetTag(value);
                    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
                }

                module.exports = isFunction;

            }, { "./_baseGetTag": 30, "./isObject": 87 }], 84: [function (require, module, exports) {
                /** Used as references for various `Number` constants. */
                var MAX_SAFE_INTEGER = 9007199254740991;

                /**
                 * Checks if `value` is a valid array-like length.
                 *
                 * **Note:** This method is loosely based on
                 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
                 * @example
                 *
                 * _.isLength(3);
                 * // => true
                 *
                 * _.isLength(Number.MIN_VALUE);
                 * // => false
                 *
                 * _.isLength(Infinity);
                 * // => false
                 *
                 * _.isLength('3');
                 * // => false
                 */
                function isLength(value) {
                    return typeof value == 'number' &&
                        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
                }

                module.exports = isLength;

            }, {}], 85: [function (require, module, exports) {
                /**
                 * Checks if `value` is `null` or `undefined`.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
                 * @example
                 *
                 * _.isNil(null);
                 * // => true
                 *
                 * _.isNil(void 0);
                 * // => true
                 *
                 * _.isNil(NaN);
                 * // => false
                 */
                function isNil(value) {
                    return value == null;
                }

                module.exports = isNil;

            }, {}], 86: [function (require, module, exports) {
                var baseGetTag = require('./_baseGetTag'),
                    isObjectLike = require('./isObjectLike');

                /** `Object#toString` result references. */
                var numberTag = '[object Number]';

                /**
                 * Checks if `value` is classified as a `Number` primitive or object.
                 *
                 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
                 * classified as numbers, use the `_.isFinite` method.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
                 * @example
                 *
                 * _.isNumber(3);
                 * // => true
                 *
                 * _.isNumber(Number.MIN_VALUE);
                 * // => true
                 *
                 * _.isNumber(Infinity);
                 * // => true
                 *
                 * _.isNumber('3');
                 * // => false
                 */
                function isNumber(value) {
                    return typeof value == 'number' ||
                        (isObjectLike(value) && baseGetTag(value) == numberTag);
                }

                module.exports = isNumber;

            }, { "./_baseGetTag": 30, "./isObjectLike": 88 }], 87: [function (require, module, exports) {
                /**
                 * Checks if `value` is the
                 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
                 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
                 * @example
                 *
                 * _.isObject({});
                 * // => true
                 *
                 * _.isObject([1, 2, 3]);
                 * // => true
                 *
                 * _.isObject(_.noop);
                 * // => true
                 *
                 * _.isObject(null);
                 * // => false
                 */
                function isObject(value) {
                    var type = typeof value;
                    return value != null && (type == 'object' || type == 'function');
                }

                module.exports = isObject;

            }, {}], 88: [function (require, module, exports) {
                /**
                 * Checks if `value` is object-like. A value is object-like if it's not `null`
                 * and has a `typeof` result of "object".
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
                 * @example
                 *
                 * _.isObjectLike({});
                 * // => true
                 *
                 * _.isObjectLike([1, 2, 3]);
                 * // => true
                 *
                 * _.isObjectLike(_.noop);
                 * // => false
                 *
                 * _.isObjectLike(null);
                 * // => false
                 */
                function isObjectLike(value) {
                    return value != null && typeof value == 'object';
                }

                module.exports = isObjectLike;

            }, {}], 89: [function (require, module, exports) {
                var baseGetTag = require('./_baseGetTag'),
                    getPrototype = require('./_getPrototype'),
                    isObjectLike = require('./isObjectLike');

                /** `Object#toString` result references. */
                var objectTag = '[object Object]';

                /** Used for built-in method references. */
                var funcProto = Function.prototype,
                    objectProto = Object.prototype;

                /** Used to resolve the decompiled source of functions. */
                var funcToString = funcProto.toString;

                /** Used to check objects for own properties. */
                var hasOwnProperty = objectProto.hasOwnProperty;

                /** Used to infer the `Object` constructor. */
                var objectCtorString = funcToString.call(Object);

                /**
                 * Checks if `value` is a plain object, that is, an object created by the
                 * `Object` constructor or one with a `[[Prototype]]` of `null`.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.8.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
                 * @example
                 *
                 * function Foo() {
                 *   this.a = 1;
                 * }
                 *
                 * _.isPlainObject(new Foo);
                 * // => false
                 *
                 * _.isPlainObject([1, 2, 3]);
                 * // => false
                 *
                 * _.isPlainObject({ 'x': 0, 'y': 0 });
                 * // => true
                 *
                 * _.isPlainObject(Object.create(null));
                 * // => true
                 */
                function isPlainObject(value) {
                    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
                        return false;
                    }
                    var proto = getPrototype(value);
                    if (proto === null) {
                        return true;
                    }
                    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
                    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
                        funcToString.call(Ctor) == objectCtorString;
                }

                module.exports = isPlainObject;

            }, { "./_baseGetTag": 30, "./_getPrototype": 43, "./isObjectLike": 88 }], 90: [function (require, module, exports) {
                var baseGetTag = require('./_baseGetTag'),
                    isArray = require('./isArray'),
                    isObjectLike = require('./isObjectLike');

                /** `Object#toString` result references. */
                var stringTag = '[object String]';

                /**
                 * Checks if `value` is classified as a `String` primitive or object.
                 *
                 * @static
                 * @since 0.1.0
                 * @memberOf _
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
                 * @example
                 *
                 * _.isString('abc');
                 * // => true
                 *
                 * _.isString(1);
                 * // => false
                 */
                function isString(value) {
                    return typeof value == 'string' ||
                        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
                }

                module.exports = isString;

            }, { "./_baseGetTag": 30, "./isArray": 79, "./isObjectLike": 88 }], 91: [function (require, module, exports) {
                var baseGetTag = require('./_baseGetTag'),
                    isObjectLike = require('./isObjectLike');

                /** `Object#toString` result references. */
                var symbolTag = '[object Symbol]';

                /**
                 * Checks if `value` is classified as a `Symbol` primitive or object.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
                 * @example
                 *
                 * _.isSymbol(Symbol.iterator);
                 * // => true
                 *
                 * _.isSymbol('abc');
                 * // => false
                 */
                function isSymbol(value) {
                    return typeof value == 'symbol' ||
                        (isObjectLike(value) && baseGetTag(value) == symbolTag);
                }

                module.exports = isSymbol;

            }, { "./_baseGetTag": 30, "./isObjectLike": 88 }], 92: [function (require, module, exports) {
                var baseIsTypedArray = require('./_baseIsTypedArray'),
                    baseUnary = require('./_baseUnary'),
                    nodeUtil = require('./_nodeUtil');

                /* Node.js helper references. */
                var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

                /**
                 * Checks if `value` is classified as a typed array.
                 *
                 * @static
                 * @memberOf _
                 * @since 3.0.0
                 * @category Lang
                 * @param {*} value The value to check.
                 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
                 * @example
                 *
                 * _.isTypedArray(new Uint8Array);
                 * // => true
                 *
                 * _.isTypedArray([]);
                 * // => false
                 */
                var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

                module.exports = isTypedArray;

            }, { "./_baseIsTypedArray": 33, "./_baseUnary": 37, "./_nodeUtil": 69 }], 93: [function (require, module, exports) {
                var arrayLikeKeys = require('./_arrayLikeKeys'),
                    baseKeys = require('./_baseKeys'),
                    isArrayLike = require('./isArrayLike');

                /**
                 * Creates an array of the own enumerable property names of `object`.
                 *
                 * **Note:** Non-object values are coerced to objects. See the
                 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
                 * for more details.
                 *
                 * @static
                 * @since 0.1.0
                 * @memberOf _
                 * @category Object
                 * @param {Object} object The object to query.
                 * @returns {Array} Returns the array of property names.
                 * @example
                 *
                 * function Foo() {
                 *   this.a = 1;
                 *   this.b = 2;
                 * }
                 *
                 * Foo.prototype.c = 3;
                 *
                 * _.keys(new Foo);
                 * // => ['a', 'b'] (iteration order is not guaranteed)
                 *
                 * _.keys('hi');
                 * // => ['0', '1']
                 */
                function keys(object) {
                    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
                }

                module.exports = keys;

            }, { "./_arrayLikeKeys": 26, "./_baseKeys": 34, "./isArrayLike": 80 }], 94: [function (require, module, exports) {
                var MapCache = require('./_MapCache');

                /** Error message constants. */
                var FUNC_ERROR_TEXT = 'Expected a function';

                /**
                 * Creates a function that memoizes the result of `func`. If `resolver` is
                 * provided, it determines the cache key for storing the result based on the
                 * arguments provided to the memoized function. By default, the first argument
                 * provided to the memoized function is used as the map cache key. The `func`
                 * is invoked with the `this` binding of the memoized function.
                 *
                 * **Note:** The cache is exposed as the `cache` property on the memoized
                 * function. Its creation may be customized by replacing the `_.memoize.Cache`
                 * constructor with one whose instances implement the
                 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
                 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
                 *
                 * @static
                 * @memberOf _
                 * @since 0.1.0
                 * @category Function
                 * @param {Function} func The function to have its output memoized.
                 * @param {Function} [resolver] The function to resolve the cache key.
                 * @returns {Function} Returns the new memoized function.
                 * @example
                 *
                 * var object = { 'a': 1, 'b': 2 };
                 * var other = { 'c': 3, 'd': 4 };
                 *
                 * var values = _.memoize(_.values);
                 * values(object);
                 * // => [1, 2]
                 *
                 * values(other);
                 * // => [3, 4]
                 *
                 * object.a = 2;
                 * values(object);
                 * // => [1, 2]
                 *
                 * // Modify the result cache.
                 * values.cache.set(object, ['a', 'b']);
                 * values(object);
                 * // => ['a', 'b']
                 *
                 * // Replace `_.memoize.Cache`.
                 * _.memoize.Cache = WeakMap;
                 */
                function memoize(func, resolver) {
                    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
                        throw new TypeError(FUNC_ERROR_TEXT);
                    }
                    var memoized = function () {
                        var args = arguments,
                            key = resolver ? resolver.apply(this, args) : args[0],
                            cache = memoized.cache;

                        if (cache.has(key)) {
                            return cache.get(key);
                        }
                        var result = func.apply(this, args);
                        memoized.cache = cache.set(key, result) || cache;
                        return result;
                    };
                    memoized.cache = new (memoize.Cache || MapCache);
                    return memoized;
                }

                // Expose `MapCache`.
                memoize.Cache = MapCache;

                module.exports = memoize;

            }, { "./_MapCache": 24 }], 95: [function (require, module, exports) {
                /**
                 * This method returns `false`.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.13.0
                 * @category Util
                 * @returns {boolean} Returns `false`.
                 * @example
                 *
                 * _.times(2, _.stubFalse);
                 * // => [false, false]
                 */
                function stubFalse() {
                    return false;
                }

                module.exports = stubFalse;

            }, {}], 96: [function (require, module, exports) {
                var baseToString = require('./_baseToString');

                /**
                 * Converts `value` to a string. An empty string is returned for `null`
                 * and `undefined` values. The sign of `-0` is preserved.
                 *
                 * @static
                 * @memberOf _
                 * @since 4.0.0
                 * @category Lang
                 * @param {*} value The value to convert.
                 * @returns {string} Returns the converted string.
                 * @example
                 *
                 * _.toString(null);
                 * // => ''
                 *
                 * _.toString(-0);
                 * // => '-0'
                 *
                 * _.toString([1, 2, 3]);
                 * // => '1,2,3'
                 */
                function toString(value) {
                    return value == null ? '' : baseToString(value);
                }

                module.exports = toString;

            }, { "./_baseToString": 36 }], "airtable": [function (require, module, exports) {
                "use strict";
                var __importDefault = (this && this.__importDefault) || function (mod) {
                    return (mod && mod.__esModule) ? mod : { "default": mod };
                };
                var base_1 = __importDefault(require("./base"));
                var record_1 = __importDefault(require("./record"));
                var table_1 = __importDefault(require("./table"));
                var airtable_error_1 = __importDefault(require("./airtable_error"));
                var Airtable = /** @class */ (function () {
                    function Airtable(opts) {
                        if (opts === void 0) { opts = {}; }
                        var defaultConfig = Airtable.default_config();
                        var apiVersion = opts.apiVersion || Airtable.apiVersion || defaultConfig.apiVersion;
                        Object.defineProperties(this, {
                            _apiKey: {
                                value: opts.apiKey || Airtable.apiKey || defaultConfig.apiKey,
                            },
                            _apiVersion: {
                                value: apiVersion,
                            },
                            _apiVersionMajor: {
                                value: apiVersion.split('.')[0],
                            },
                            _customHeaders: {
                                value: opts.customHeaders || {},
                            },
                            _endpointUrl: {
                                value: opts.endpointUrl || Airtable.endpointUrl || defaultConfig.endpointUrl,
                            },
                            _noRetryIfRateLimited: {
                                value: opts.noRetryIfRateLimited ||
                                    Airtable.noRetryIfRateLimited ||
                                    defaultConfig.noRetryIfRateLimited,
                            },
                            _requestTimeout: {
                                value: opts.requestTimeout || Airtable.requestTimeout || defaultConfig.requestTimeout,
                            },
                        });
                        if (!this._apiKey) {
                            throw new Error('An API key is required to connect to Airtable');
                        }
                    }
                    Airtable.prototype.base = function (baseId) {
                        return base_1.default.createFunctor(this, baseId);
                    };
                    Airtable.default_config = function () {
                        return {
                            endpointUrl: "" || 'https://api.airtable.com',
                            apiVersion: '0.1.0',
                            apiKey: "",
                            noRetryIfRateLimited: false,
                            requestTimeout: 300 * 1000,
                        };
                    };
                    Airtable.configure = function (_a) {
                        var apiKey = _a.apiKey, endpointUrl = _a.endpointUrl, apiVersion = _a.apiVersion, noRetryIfRateLimited = _a.noRetryIfRateLimited, requestTimeout = _a.requestTimeout;
                        Airtable.apiKey = apiKey;
                        Airtable.endpointUrl = endpointUrl;
                        Airtable.apiVersion = apiVersion;
                        Airtable.noRetryIfRateLimited = noRetryIfRateLimited;
                        Airtable.requestTimeout = requestTimeout;
                    };
                    Airtable.base = function (baseId) {
                        return new Airtable().base(baseId);
                    };
                    Airtable.Base = base_1.default;
                    Airtable.Record = record_1.default;
                    Airtable.Table = table_1.default;
                    Airtable.Error = airtable_error_1.default;
                    return Airtable;
                }());
                module.exports = Airtable;

            }, { "./airtable_error": 2, "./base": 3, "./record": 15, "./table": 17 }]
        }, {}, ["airtable"]),
        cloneAirtableToDB: async ({ apiKey, tableName, baseId, keys }) => {
            console.log('start cloning airtable to db');
            await contentScripts.localServerAPI.removeAllAirtable();
            const Airtable = contentScripts.airtable.require('airtable');
            const base = new Airtable({ apiKey }).base(baseId);
            const table = base(tableName);
            let pageCount = 0;
            // get each page data
            await table.select({
                view: "Grid view",
                pageSize: 100,
            }).eachPage(async function page(records, fetchNextPage) {
                // This function (`page`) will get called for each page of records.
                pageCount++;
                const result = [];
                for (const record of records) {
                    const airtableKeys = Object.keys(keys);
                    const data = {};
                    airtableKeys.forEach(key => {
                        data[keys[key]] = record[key] || record.get(key);
                    });
                    result.push(data);
                }
                await contentScripts.localServerAPI.addAirtable(result);
                generalUtilities.showDataOnConsoleDynamic(`record cloned ${pageCount * 100}`);
                // To fetch the next page of records, call `fetchNextPage`.
                // If there are more records, `page` will get called again.
                // If there are no more records, `done` will get called.
                // console.log(pageCount++);
                await fetchNextPage();
            });
            console.log('end cloning airtable to db')
        },

        workOnSingleQueue: async (item) => {
            item = contentScripts.preprocessDataObject(item);
            // find item by vin and location and stockId
            const Airtable = contentScripts.airtable.require('airtable');
            const { apiKey, baseId, tableName, keys } = fixedData.airtable.dev;
            const base = new Airtable({ apiKey }).base(baseId);
            const table = base(tableName);
            const { vin, location, stockId } = item;

            const filterFormula = `AND(lower({VIN ID})="${vin.toLowerCase()}",lower({Dealer Name})="${location.toLowerCase()}",lower({Stock ID})="${stockId.toLowerCase()}")`;
            const nonUpdateKeys = ['vin', 'location', 'stockId', "id", 'localId', 'websiteUrl'];
            const nonCreateKeys = ['id', 'localId', 'websiteUrl'];
            const nonQueryKeys = ['id'];
            const integerKeys = ['year', 'price'];
            const fields = (() => {
                const fields = [];
                for (let i = 0; i < Object.keys(keys).length; i++) {
                    if (nonQueryKeys.includes(Object.keys(keys)[i])) continue;
                    fields.push(Object.keys(keys)[i]);
                }
                return fields;
            })();
            const records = await table.select({
                maxRecords: 1,
                filterByFormula: filterFormula,
                fields,
            }).eachPage(async function page(records, fetchNextPage) {
                // This function (`page`) will get called for each page of records.
                if (records.length == 0) {
                    // insert
                    for (let i = 0; i < nonCreateKeys.length; i++) {
                        delete item[nonCreateKeys[i]];
                    }
                    const createItem = {};
                    for (let i = 0; i < Object.keys(keys).length; i++) {
                        const key = Object.keys(keys)[i];
                        createItem[key] = integerKeys.includes(keys[key]) ? parseInt(item[keys[key]]) : item[keys[key]];
                    }
                    await table.create(createItem);
                } else {
                    // update

                    const record = records[0];
                    const airtableKeys = Object.keys(keys);

                    airtableKeys.forEach(key => {
                        // console.log(key)
                        if (nonUpdateKeys.includes(keys[key])) return;
                        record.set(key, integerKeys.includes(keys[key]) ? parseInt(item[keys[key]]) : item[keys[key]]);

                    });
                    await record.save();
                }
                fetchNextPage();
            });

        },

        workOnQueue: async () => {
            let { item, totalCount } = await contentScripts.localServerAPI.getQueue();
            while (item != null) {
                generalUtilities.showDataOnConsoleDynamic(`working on queue ${item.localId}/${totalCount}`)
                await contentScripts.airtable.workOnSingleQueue(item);
                await contentScripts.localServerAPI.setQueueDone(item.localId);
                let newItem = await contentScripts.localServerAPI.getQueue();
                item = newItem.item;
                totalCount = newItem.totalCount;
            }
            generalUtilities.showDataOnConsoleDynamic('Queue work done');
        },
    },
    preprocessDataObject: (data) => {
        // trim data
        const result = {};
        for (const key in data) {
            result[key] = typeof data[key] == 'string' ? data[key].trim() : data[key];
        }
        return result;
    },
    localServerAPI: {
        getQueue: async () => {
            const localServerAPI = `http://localhost:${fixedData.localServer.port}/api`;
            const res = await fetch(`${localServerAPI}/getQueue`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // check status code is 200
            if (res.status != 200) {
                generalUtilities.showDataOnConsole('Error in getting queue');
                generalUtilities.showConsoleError();
                throw new Error('Error in getting queue');
            }
            return res.json();
        },
        setQueueDone: async (localId) => {
            const localServerAPI = `http://localhost:${fixedData.localServer.port}/api`;
            const res = await fetch(`${localServerAPI}/setQueueDone`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ localId }),
            });
            // check status code is 200
            if (res.status != 200) {
                generalUtilities.showDataOnConsole('Error in setting queue done');
                generalUtilities.showConsoleError();
                throw new Error('Error in setting queue done');
            }
            return res.json();
        },
        addScraped: async (data) => {
            const localServerAPI = `http://localhost:${fixedData.localServer.port}/api`;
            const res = await fetch(`${localServerAPI}/addScraped`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data }),
            });
            // check status code is 200
            if (res.status != 200) {
                generalUtilities.showDataOnConsole('Error in adding data to local server');
                generalUtilities.showConsoleError();
                throw new Error('Error in adding data to local server');
            }
            return res.json();
        },
        addAirtable: async (data) => {
            const localServerAPI = `http://localhost:${fixedData.localServer.port}/api`;
            const res = await fetch(`${localServerAPI}/addAirtable`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data }),
            });
            // check status code is 200
            if (res.status != 200) {
                generalUtilities.showDataOnConsole('Error in adding data to local server');
                generalUtilities.showConsoleError();
                throw new Error('Error in adding data to local server');
            }
            return res.json();
        },
        removeAllScraped: async () => {
            const localServerAPI = `http://localhost:${fixedData.localServer.port}/api`;
            const res = await fetch(`${localServerAPI}/removeAllScraped`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });
            // check status code is 200
            if (res.status != 200) {
                generalUtilities.showDataOnConsole('Error in removing all data from local server');
                generalUtilities.showConsoleError();
                throw new Error('Error in removing all data from local server');
            }
            return res.json();
        },
        removeAllAirtable: async () => {
            const localServerAPI = `http://localhost:${fixedData.localServer.port}/api`;
            const res = await fetch(`${localServerAPI}/removeAllAirtable`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });
            // check status code is 200
            if (res.status != 200) {
                generalUtilities.showDataOnConsole('Error in removing all data from local server');
                generalUtilities.showConsoleError();
                throw new Error('Error in removing all data from local server');
            }
            return res.json();
        },
        processQueue: async () => {
            const localServerAPI = `http://localhost:${fixedData.localServer.port}/api`;
            const res = await fetch(`${localServerAPI}/processQueue`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });
            // check status code is 200
            if (res.status != 200) {
                generalUtilities.showDataOnConsole('Error in processing queue');
                generalUtilities.showConsoleError();
                throw new Error('Error in processing queue');
            }
            return res.json();
        },
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
        });
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
        generalUtilities.showDebugButton('Download', async () => {
            const allListingsDB = new ChromeStorage('allListings');
            const allListings = await allListingsDB.GET();

            if (!allListings || allListings.length === 0) {
                console.warn("No listings to download.");
                return;
            }

            // 1. Convert JSON to CSV
            const headers = Object.keys(allListings[0]);
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

            // 2. Trigger Download
            const blob = new Blob([csvString], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'allListings.csv';
            document.body.appendChild(a);
            a.click();

            // Cleanup
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });

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
                        "Dealer Group": group,
                        "Dealership Name": name,
                        // title case
                        "Used or New": type,
                        "URL": `${baseUrl}${item.link}`,
                        "Year": item.year,
                        "Make": item.make,
                        "Model": item.model,
                        "Trim": item.trim,
                        "Price": item.trackingPricing?.askingPrice || "0",
                        "Mileage": item.trackingAttributes.filter(attr => attr.name === "odometer")[0]?.value || "",
                        "Vin#": item.vin,
                        "Date": new Date().toLocaleDateString("en-US")

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
                        "Dealer Group": "A",
                        "Dealership Name": name,
                        // title case
                        "Used or New": type,
                        "URL": item.VehicleCard.VehicleDetailUrl,
                        "Year": item.VehicleCard.VehicleYear,
                        "Make": item.VehicleCard.VehicleMake,
                        "Model": item.VehicleCard.VehicleModel,
                        "Trim": item.VehicleCard.VehicleTrim,
                        "Price": item.VehicleCard.VehicleMsrp,
                        // "2 mi" => 2
                        "Mileage": item.VehicleCard.Mileage?.replace(/\s+mi/g, "") || 0,
                        "Vin#": item.VehicleCard.VehicleVin,
                        "Date": new Date().toLocaleDateString("en-US")
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
                        "Dealer Group": group,
                        "Dealership Name": name,
                        "Used or New": type,
                        "URL": (() => {
                            const titleElm = elm.querySelector('h3 a');
                            return titleElm ? `${baseUrl}${titleElm.getAttribute('href')}` : "";
                        })(),
                        "Year": jsonData.vehicleModelDate,
                        "Make": jsonData.manufacturer,
                        "Model": jsonData.model,
                        "Trim": (() => {
                            const title = elm.querySelector('h3 a')?.textContent || "";
                            const yearMakeModel = `${jsonData.vehicleModelDate} ${jsonData.manufacturer} ${jsonData.model}`;
                            return title.replace(yearMakeModel, "").trim();
                        })(),
                        "Price": jsonData.offers?.price || "0",
                        "Mileage": (() => {
                            // Convert NodeList to Array so .find() works
                            const items = [...elm.querySelectorAll('.vehicle-snapshot__main-info-item')];
                            const mileageElm = items.find(item => item.textContent.includes('Mileage'));

                            if (mileageElm) {
                                const mileageText = mileageElm.querySelector(".vehicle-snapshot__main-info");
                                return mileageText ? mileageText.textContent.replace(/[^0-9]/g, "") : "";
                            } else {
                                return "";
                            }
                        })(),
                        "Vin#": await (async () => {
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
                        "Date": new Date().toLocaleDateString("en-US")
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
                    case 'userLogout':
                        chrome.cookies.remove({ "url": 'https://facebook.com', "name": 'c_user' }, function (cookie) {
                            sendResponse('success');
                        });
                        return true;
                        break;
                    case 'positionWindow':
                        console.log('positionWindow')
                        generalUtilities.positionWindow().then(() => {
                            sendResponse('success');
                        });
                        return true;
                        break;
                    case 'windowPosition':
                        console.log('windowPosition')
                        generalUtilities.windowPosition().then((windowPosition) => {
                            sendResponse(windowPosition);
                        })
                        return true;
                        break;
                }
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