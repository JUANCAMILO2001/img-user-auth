!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
    n(1), n(46)
}, function (e, t, n) {
    n(2), n(44), n(45)
}, function (e, t, n) {
    window.$ = window.jQuery = n(3), window.Popper = n(4), n(6), window.SmoothScroll = n(8), window.PerfectScrollbar = n(9), n(10), n(11), n(12), n(13), n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(21), n(22), n(23), n(24), n(25), n(26), n(27), n(28), n(29), n(30), n(31), n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), function (e, t) {
        var n = {
            name: "TheDocs",
            version: "2.0.1",
            vendors: [],
            body: e("body"),
            navbar: e(".navbar"),
            header: e(".header"),
            footer: e(".footer"),
            defaults: {
                googleApiKey: null,
                googleAnalyticsKey: null,
                reCaptchaSiteKey: null,
                reCaptchaLanguage: null,
                disableAOSonMobile: !0,
                smoothScroll: !1
            },
            init: function () {
                n.initVendors(), n.initBind(), n.initDrawer(), n.initFileTree(), n.initFont(), n.initForm(), n.initMailer(), n.initModal(), n.initNavbar(), n.initOffcanvas(), n.initPopup(), n.initScroll(), n.initSection(), n.initSidebar(), n.initVideo(), e(document).on("click", ".switch", function () {
                    var t = e(this).children(".switch-input").not(":disabled");
                    t.prop("checked", !t.prop("checked"))
                }), e("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").each(function () {
                    var t = e(this);
                    t.hasClass("no-anchor") || t.append('<a class="anchor" href="#' + t.attr("id") + '"></a>')
                })
            },
            initVendors: function () {
                n.vendors.forEach(function (e) {
                    var n = t.page["init" + e];
                    "function" == typeof n && n()
                })
            },
            registerVendor: function (e) {
                n.vendors.push(e)
            }
        };
        t.page = n
    }(jQuery, window), $(function () {
    })
}, function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    !function (t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, i) {
        "use strict";
        var o = [], a = n.document, s = Object.getPrototypeOf, l = o.slice, c = o.concat, u = o.push, f = o.indexOf,
            d = {}, p = d.toString, h = d.hasOwnProperty, g = h.toString, m = g.call(Object), v = {}, b = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            }, y = function (e) {
                return null != e && e === e.window
            }, w = {type: !0, src: !0, noModule: !0};

        function E(e, t, n) {
            var r, i = (t = t || a).createElement("script");
            if (i.text = e, n) for (r in w) n[r] && (i[r] = n[r]);
            t.head.appendChild(i).parentNode.removeChild(i)
        }

        function T(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e
        }

        var _ = function (e, t) {
            return new _.fn.init(e, t)
        }, S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function C(e) {
            var t = !!e && "length" in e && e.length, n = T(e);
            return !b(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        _.fn = _.prototype = {
            jquery: "3.3.1", constructor: _, length: 0, toArray: function () {
                return l.call(this)
            }, get: function (e) {
                return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
            }, pushStack: function (e) {
                var t = _.merge(this.constructor(), e);
                return t.prevObject = this, t
            }, each: function (e) {
                return _.each(this, e)
            }, map: function (e) {
                return this.pushStack(_.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(l.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: u, sort: o.sort, splice: o.splice
        }, _.extend = _.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (c && r && (_.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && _.isPlainObject(n) ? n : {}, a[t] = _.extend(c, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, _.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && g.call(n) === m)
            }, isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            }, globalEval: function (e) {
                E(e)
            }, each: function (e, t) {
                var n, r = 0;
                if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(S, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            }, inArray: function (e, t, n) {
                return null == t ? -1 : f.call(t, e, n)
            }, merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            }, grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r
            }, map: function (e, t, n) {
                var r, i, o = 0, a = [];
                if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return c.apply([], a)
            }, guid: 1, support: v
        }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = o[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        });
        var A =
            /*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */
            function (e) {
                var t, n, r, i, o, a, s, l, c, u, f, d, p, h, g, m, v, b, y, w = "sizzle" + 1 * new Date,
                    E = e.document, T = 0, _ = 0, S = ae(), C = ae(), A = ae(), x = function (e, t) {
                        return e === t && (f = !0), 0
                    }, k = {}.hasOwnProperty, O = [], N = O.pop, I = O.push, D = O.push, L = O.slice, P = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                        return -1
                    },
                    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    H = "[\\x20\\t\\r\\n\\f]", j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    M = "\\[" + H + "*(" + j + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + H + "*\\]",
                    W = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                    F = new RegExp(H + "+", "g"),
                    B = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                    q = new RegExp("^" + H + "*," + H + "*"), U = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                    Y = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"), X = new RegExp(W),
                    $ = new RegExp("^" + j + "$"), V = {
                        ID: new RegExp("^#(" + j + ")"),
                        CLASS: new RegExp("^\\.(" + j + ")"),
                        TAG: new RegExp("^(" + j + "|[*])"),
                        ATTR: new RegExp("^" + M),
                        PSEUDO: new RegExp("^" + W),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + R + ")$", "i"),
                        needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                    }, G = /^(?:input|select|textarea|button)$/i, z = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/,
                    J = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"), ee = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                        return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }, re = function () {
                        d()
                    }, ie = be(function (e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {dir: "parentNode", next: "legend"});
                try {
                    D.apply(O = L.call(E.childNodes), E.childNodes), O[E.childNodes.length].nodeType
                } catch (e) {
                    D = {
                        apply: O.length ? function (e, t) {
                            I.apply(e, L.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                            e.length = n - 1
                        }
                    }
                }

                function oe(e, t, r, i) {
                    var o, s, c, u, f, h, v, b = t && t.ownerDocument, T = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                    if (!i && ((t ? t.ownerDocument || t : E) !== p && d(t), t = t || p, g)) {
                        if (11 !== T && (f = Q.exec(e))) if (o = f[1]) {
                            if (9 === T) {
                                if (!(c = t.getElementById(o))) return r;
                                if (c.id === o) return r.push(c), r
                            } else if (b && (c = b.getElementById(o)) && y(t, c) && c.id === o) return r.push(c), r
                        } else {
                            if (f[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(r, t.getElementsByClassName(o)), r
                        }
                        if (n.qsa && !A[e + " "] && (!m || !m.test(e))) {
                            if (1 !== T) b = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w), s = (h = a(e)).length; s--;) h[s] = "#" + u + " " + ve(h[s]);
                                v = h.join(","), b = Z.test(e) && ge(t.parentNode) || t
                            }
                            if (v) try {
                                return D.apply(r, b.querySelectorAll(v)), r
                            } catch (e) {
                            } finally {
                                u === w && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(B, "$1"), t, r, i)
                }

                function ae() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                }

                function se(e) {
                    return e[w] = !0, e
                }

                function le(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function ce(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                }

                function ue(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function de(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function pe(e) {
                    return function (t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function he(e) {
                    return se(function (t) {
                        return t = +t, se(function (n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function ge(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                for (t in n = oe.support = {}, o = oe.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, d = oe.setDocument = function (e) {
                    var t, i, a = e ? e.ownerDocument || e : E;
                    return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !o(p), E !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = le(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = le(function (e) {
                        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = le(function (e) {
                        return h.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                    }), n.getById ? (r.filter.ID = function (e) {
                        var t = e.replace(J, ee);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (r.filter.ID = function (e) {
                        var t = e.replace(J, ee);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                    }, v = [], m = [], (n.qsa = K.test(p.querySelectorAll)) && (le(function (e) {
                        h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                    }), le(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (n.matchesSelector = K.test(b = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function (e) {
                        n.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), v.push("!=", W)
                    }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), y = t || K.test(h.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t) for (; t = t.parentNode;) if (t === e) return !0;
                        return !1
                    }, x = t ? function (e, t) {
                        if (e === t) return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === E && y(E, e) ? -1 : t === p || t.ownerDocument === E && y(E, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & r ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                        if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                        if (i === o) return ue(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? ue(a[r], s[r]) : a[r] === E ? -1 : s[r] === E ? 1 : 0
                    }, p) : p
                }, oe.matches = function (e, t) {
                    return oe(e, null, null, t)
                }, oe.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== p && d(e), t = t.replace(Y, "='$1']"), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                        var r = b.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {
                    }
                    return oe(t, p, null, [e]).length > 0
                }, oe.contains = function (e, t) {
                    return (e.ownerDocument || e) !== p && d(e), y(e, t)
                }, oe.attr = function (e, t) {
                    (e.ownerDocument || e) !== p && d(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        o = i && k.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }, oe.escape = function (e) {
                    return (e + "").replace(te, ne)
                }, oe.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, oe.uniqueSort = function (e) {
                    var t, r = [], i = 0, o = 0;
                    if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(x), f) {
                        for (; t = e[o++];) t === e[o] && (i = r.push(o));
                        for (; i--;) e.splice(r[i], 1)
                    }
                    return u = null, e
                }, i = oe.getText = function (e) {
                    var t, n = "", r = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else for (; t = e[r++];) n += i(t);
                    return n
                }, (r = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: se,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(J, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(J, ee).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = S[e + " "];
                            return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && S(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        }, ATTR: function (e, t, n) {
                            return function (r) {
                                var i = oe.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        }, CHILD: function (e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === r && 0 === i ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var c, u, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(), b = !l && !s, y = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (d = t; d = d[g];) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild], a && b) {
                                        for (y = (p = (c = (u = (f = (d = m)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (y = p = 0) || h.pop();) if (1 === d.nodeType && ++y && d === t) {
                                            u[e] = [T, p, y];
                                            break
                                        }
                                    } else if (b && (y = p = (c = (u = (f = (d = t)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === y) for (; (d = ++p && d && d[g] || (y = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++y || (b && ((u = (f = d[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, y]), d !== t));) ;
                                    return (y -= i) === r || y % r == 0 && y / r >= 0
                                }
                            }
                        }, PSEUDO: function (e, t) {
                            var n,
                                i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                                for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a])
                            }) : function (e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: se(function (e) {
                            var t = [], n = [], r = s(e.replace(B, "$1"));
                            return r[w] ? se(function (e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function (e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }), has: se(function (e) {
                            return function (t) {
                                return oe(e, t).length > 0
                            }
                        }), contains: se(function (e) {
                            return e = e.replace(J, ee), function (t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                            }
                        }), lang: se(function (e) {
                            return $.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(J, ee).toLowerCase(), function (t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === h
                        }, focus: function (e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: pe(!1), disabled: pe(!0), checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0
                        }, parent: function (e) {
                            return !r.pseudos.empty(e)
                        }, header: function (e) {
                            return z.test(e.nodeName)
                        }, input: function (e) {
                            return G.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: he(function () {
                            return [0]
                        }), last: he(function (e, t) {
                            return [t - 1]
                        }), eq: he(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }), even: he(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }), odd: he(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }), lt: he(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }), gt: he(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = fe(t);
                for (t in {submit: !0, reset: !0}) r.pseudos[t] = de(t);

                function me() {
                }

                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function be(e, t, n) {
                    var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = _++;
                    return t.first ? function (t, n, i) {
                        for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
                        return !1
                    } : function (t, n, l) {
                        var c, u, f, d = [T, s];
                        if (l) {
                            for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                        } else for (; t = t[r];) if (1 === t.nodeType || a) if (u = (f = t[w] || (t[w] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                            if ((c = u[o]) && c[0] === T && c[1] === s) return d[2] = c[2];
                            if (u[o] = d, d[2] = e(t, n, l)) return !0
                        }
                        return !1
                    }
                }

                function ye(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function we(e, t, n, r, i) {
                    for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
                    return a
                }

                function Ee(e, t, n, r, i, o) {
                    return r && !r[w] && (r = Ee(r)), i && !i[w] && (i = Ee(i, o)), se(function (o, a, s, l) {
                        var c, u, f, d = [], p = [], h = a.length, g = o || function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : we(g, d, e, s, l),
                            v = n ? i || (o ? e : h || r) ? [] : a : m;
                        if (n && n(m, v, s, l), r) for (c = we(v, p), r(c, [], s, l), u = c.length; u--;) (f = c[u]) && (v[p[u]] = !(m[p[u]] = f));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (c = [], u = v.length; u--;) (f = v[u]) && c.push(m[u] = f);
                                    i(null, v = [], c, l)
                                }
                                for (u = v.length; u--;) (f = v[u]) && (c = i ? P(o, f) : d[u]) > -1 && (o[c] = !(a[c] = f))
                            }
                        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, l) : D.apply(a, v)
                    })
                }

                function Te(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, u = be(function (e) {
                        return e === t
                    }, s, !0), f = be(function (e) {
                        return P(t, e) > -1
                    }, s, !0), d = [function (e, n, r) {
                        var i = !a && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : f(e, n, r));
                        return t = null, i
                    }]; l < o; l++) if (n = r.relative[e[l].type]) d = [be(ye(d), n)]; else {
                        if ((n = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
                            for (i = ++l; i < o && !r.relative[e[i].type]; i++) ;
                            return Ee(l > 1 && ye(d), l > 1 && ve(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(B, "$1"), n, l < i && Te(e.slice(l, i)), i < o && Te(e = e.slice(i)), i < o && ve(e))
                        }
                        d.push(n)
                    }
                    return ye(d)
                }

                return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = oe.tokenize = function (e, t) {
                    var n, i, o, a, s, l, c, u = C[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, l = [], c = r.preFilter; s;) {
                        for (a in n && !(i = q.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(B, " ")
                        }), s = s.slice(n.length)), r.filter) !(i = V[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? oe.error(e) : C(e, l).slice(0)
                }, s = oe.compile = function (e, t) {
                    var n, i = [], o = [], s = A[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;) (s = Te(t[n]))[w] ? i.push(s) : o.push(s);
                        (s = A(e, function (e, t) {
                            var n = t.length > 0, i = e.length > 0, o = function (o, a, s, l, u) {
                                var f, h, m, v = 0, b = "0", y = o && [], w = [], E = c,
                                    _ = o || i && r.find.TAG("*", u), S = T += null == E ? 1 : Math.random() || .1,
                                    C = _.length;
                                for (u && (c = a === p || a || u); b !== C && null != (f = _[b]); b++) {
                                    if (i && f) {
                                        for (h = 0, a || f.ownerDocument === p || (d(f), s = !g); m = e[h++];) if (m(f, a || p, s)) {
                                            l.push(f);
                                            break
                                        }
                                        u && (T = S)
                                    }
                                    n && ((f = !m && f) && v--, o && y.push(f))
                                }
                                if (v += b, n && b !== v) {
                                    for (h = 0; m = t[h++];) m(y, w, a, s);
                                    if (o) {
                                        if (v > 0) for (; b--;) y[b] || w[b] || (w[b] = N.call(l));
                                        w = we(w)
                                    }
                                    D.apply(l, w), u && !o && w.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                                }
                                return u && (T = S, c = E), y
                            };
                            return n ? se(o) : o
                        }(o, i))).selector = e
                    }
                    return s
                }, l = oe.select = function (e, t, n, i) {
                    var o, l, c, u, f, d = "function" == typeof e && e, p = !i && a(e = d.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                            if (!(t = (r.find.ID(c.matches[0].replace(J, ee), t) || [])[0])) return n;
                            d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (o = V.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !r.relative[u = c.type]);) if ((f = r.find[u]) && (i = f(c.matches[0].replace(J, ee), Z.test(l[0].type) && ge(t.parentNode) || t))) {
                            if (l.splice(o, 1), !(e = i.length && ve(l))) return D.apply(n, i), n;
                            break
                        }
                    }
                    return (d || s(e, p))(i, t, !g, n, !t || Z.test(e) && ge(t.parentNode) || t), n
                }, n.sortStable = w.split("").sort(x).join("") === w, n.detectDuplicates = !!f, d(), n.sortDetached = le(function (e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                }), le(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || ce("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && le(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || ce("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), le(function (e) {
                    return null == e.getAttribute("disabled")
                }) || ce(R, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), oe
            }(n);
        _.find = A, _.expr = A.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = A.uniqueSort, _.text = A.getText, _.isXMLDoc = A.isXML, _.contains = A.contains, _.escapeSelector = A.escape;
        var x = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && _(e).is(n)) break;
                r.push(e)
            }
            return r
        }, k = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, O = _.expr.match.needsContext;

        function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function D(e, t, n) {
            return b(t) ? _.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? _.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ? _.grep(e, function (e) {
                return f.call(t, e) > -1 !== n
            }) : _.filter(t, e, n)
        }

        _.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? _.find.matchesSelector(r, e) ? [r] : [] : _.find.matches(e, _.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, _.fn.extend({
            find: function (e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e) return this.pushStack(_(e).filter(function () {
                    for (t = 0; t < r; t++) if (_.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) _.find(e, i[t], n);
                return r > 1 ? _.uniqueSort(n) : n
            }, filter: function (e) {
                return this.pushStack(D(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(D(this, e || [], !0))
            }, is: function (e) {
                return !!D(this, "string" == typeof e && O.test(e) ? _(e) : e || [], !1).length
            }
        });
        var L, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (_.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || L, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), I.test(r[1]) && _.isPlainObject(t)) for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
        }).prototype = _.fn, L = _(a);
        var R = /^(?:parents|prev(?:Until|All))/, H = {children: !0, contents: !0, next: !0, prev: !0};

        function j(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;) ;
            return e
        }

        _.fn.extend({
            has: function (e) {
                var t = _(e, this), n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++) if (_.contains(this, t[e])) return !0
                })
            }, closest: function (e, t) {
                var n, r = 0, i = this.length, o = [], a = "string" != typeof e && _(e);
                if (!O.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o)
            }, index: function (e) {
                return e ? "string" == typeof e ? f.call(_(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), _.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return x(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return x(e, "parentNode", n)
            }, next: function (e) {
                return j(e, "nextSibling")
            }, prev: function (e) {
                return j(e, "previousSibling")
            }, nextAll: function (e) {
                return x(e, "nextSibling")
            }, prevAll: function (e) {
                return x(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return x(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return x(e, "previousSibling", n)
            }, siblings: function (e) {
                return k((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return k(e.firstChild)
            }, contents: function (e) {
                return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
            }
        }, function (e, t) {
            _.fn[e] = function (n, r) {
                var i = _.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = _.filter(r, i)), this.length > 1 && (H[e] || _.uniqueSort(i), R.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var M = /[^\x20\t\r\n\f]+/g;

        function W(e) {
            return e
        }

        function F(e) {
            throw e
        }

        function B(e, t, n, r) {
            var i;
            try {
                e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        _.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
                var t = {};
                return _.each(e.match(M) || [], function (e, n) {
                    t[n] = !0
                }), t
            }(e) : _.extend({}, e);
            var t, n, r, i, o = [], a = [], s = -1, l = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            }, c = {
                add: function () {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        _.each(n, function (n, r) {
                            b(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r)
                        })
                    }(arguments), n && !t && l()), this
                }, remove: function () {
                    return _.each(arguments, function (e, t) {
                        for (var n; (n = _.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                }, has: function (e) {
                    return e ? _.inArray(e, o) > -1 : o.length > 0
                }, empty: function () {
                    return o && (o = []), this
                }, disable: function () {
                    return i = a = [], o = n = "", this
                }, disabled: function () {
                    return !o
                }, lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                }, locked: function () {
                    return !!i
                }, fireWith: function (e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return c
        }, _.extend({
            Deferred: function (e) {
                var t = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]],
                    r = "pending", i = {
                        state: function () {
                            return r
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, catch: function (e) {
                            return i.then(null, e)
                        }, pipe: function () {
                            var e = arguments;
                            return _.Deferred(function (n) {
                                _.each(t, function (t, r) {
                                    var i = b(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        }, then: function (e, r, i) {
                            var o = 0;

                            function a(e, t, r, i) {
                                return function () {
                                    var s = this, l = arguments, c = function () {
                                        var n, c;
                                        if (!(e < o)) {
                                            if ((n = r.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && ("object" == typeof n || "function" == typeof n) && n.then, b(c) ? i ? c.call(n, a(o, t, W, i), a(o, t, F, i)) : (o++, c.call(n, a(o, t, W, i), a(o, t, F, i), a(o, t, W, t.notifyWith))) : (r !== W && (s = void 0, l = [n]), (i || t.resolveWith)(s, l))
                                        }
                                    }, u = i ? c : function () {
                                        try {
                                            c()
                                        } catch (n) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= o && (r !== F && (s = void 0, l = [n]), t.rejectWith(s, l))
                                        }
                                    };
                                    e ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }

                            return _.Deferred(function (n) {
                                t[0][3].add(a(0, n, b(i) ? i : W, n.notifyWith)), t[1][3].add(a(0, n, b(e) ? e : W)), t[2][3].add(a(0, n, b(r) ? r : F))
                            }).promise()
                        }, promise: function (e) {
                            return null != e ? _.extend(e, i) : i
                        }
                    }, o = {};
                return _.each(t, function (e, n) {
                    var a = n[2], s = n[5];
                    i[n[1]] = a.add, s && a.add(function () {
                        r = s
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function () {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            }, when: function (e) {
                var t = arguments.length, n = t, r = Array(n), i = l.call(arguments), o = _.Deferred(),
                    a = function (e) {
                        return function (n) {
                            r[e] = this, i[e] = arguments.length > 1 ? l.call(arguments) : n, --t || o.resolveWith(r, i)
                        }
                    };
                if (t <= 1 && (B(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || b(i[n] && i[n].then))) return o.then();
                for (; n--;) B(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        _.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && q.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, _.readyException = function (e) {
            n.setTimeout(function () {
                throw e
            })
        };
        var U = _.Deferred();

        function Y() {
            a.removeEventListener("DOMContentLoaded", Y), n.removeEventListener("load", Y), _.ready()
        }

        _.fn.ready = function (e) {
            return U.then(e).catch(function (e) {
                _.readyException(e)
            }), this
        }, _.extend({
            isReady: !1, readyWait: 1, ready: function (e) {
                (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || U.resolveWith(a, [_]))
            }
        }), _.ready.then = U.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(_.ready) : (a.addEventListener("DOMContentLoaded", Y), n.addEventListener("load", Y));
        var X = function (e, t, n, r, i, o, a) {
            var s = 0, l = e.length, c = null == n;
            if ("object" === T(n)) for (s in i = !0, n) X(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, b(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
                return c.call(_(e), n)
            })), t)) for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : o
        }, $ = /^-ms-/, V = /-([a-z])/g;

        function G(e, t) {
            return t.toUpperCase()
        }

        function z(e) {
            return e.replace($, "ms-").replace(V, G)
        }

        var K = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function Q() {
            this.expando = _.expando + Q.uid++
        }

        Q.uid = 1, Q.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[z(t)] = n; else for (r in t) i[z(r)] = t[r];
                return i
            }, get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)]
            }, access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in r ? [t] : t.match(M) || []).length;
                        for (; n--;) delete r[t[n]]
                    }
                    (void 0 === t || _.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            }, hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !_.isEmptyObject(t)
            }
        };
        var Z = new Q, J = new Q, ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, te = /[A-Z]/g;

        function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {
                }
                J.set(e, t, n)
            } else n = void 0;
            return n
        }

        _.extend({
            hasData: function (e) {
                return J.hasData(e) || Z.hasData(e)
            }, data: function (e, t, n) {
                return J.access(e, t, n)
            }, removeData: function (e, t) {
                J.remove(e, t)
            }, _data: function (e, t, n) {
                return Z.access(e, t, n)
            }, _removeData: function (e, t) {
                Z.remove(e, t)
            }
        }), _.fn.extend({
            data: function (e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = J.get(o), 1 === o.nodeType && !Z.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = z(r.slice(5)), ne(o, r, i[r]));
                        Z.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function () {
                    J.set(this, e)
                }) : X(this, function (t) {
                    var n;
                    if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
                    this.each(function () {
                        J.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each(function () {
                    J.remove(this, e)
                })
            }
        }), _.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = Z.get(e, t), n && (!r || Array.isArray(n) ? r = Z.access(e, t, _.makeArray(n)) : r.push(n)), r || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = _.queue(e, t), r = n.length, i = n.shift(), o = _._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                    _.dequeue(e, t)
                }, o)), !r && o && o.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Z.get(e, n) || Z.access(e, n, {
                    empty: _.Callbacks("once memory").add(function () {
                        Z.remove(e, [t + "queue", n])
                    })
                })
            }
        }), _.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = _.queue(this, e, t);
                    _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    _.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, r = 1, i = _.Deferred(), o = this, a = this.length, s = function () {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = Z.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"],
            ae = function (e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display")
            }, se = function (e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                return i
            };

        function le(e, t, n, r) {
            var i, o, a = 20, s = r ? function () {
                    return r.cur()
                } : function () {
                    return _.css(e, t, "")
                }, l = s(), c = n && n[3] || (_.cssNumber[t] ? "" : "px"),
                u = (_.cssNumber[t] || "px" !== c && +l) && ie.exec(_.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; a--;) _.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
                u *= 2, _.style(e, t, u + c), n = n || []
            }
            return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
        }

        var ce = {};

        function ue(e) {
            var t, n = e.ownerDocument, r = e.nodeName, i = ce[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = _.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i)
        }

        function fe(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Z.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ue(r))) : "none" !== n && (i[o] = "none", Z.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e
        }

        _.fn.extend({
            show: function () {
                return fe(this, !0)
            }, hide: function () {
                return fe(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    ae(this) ? _(this).show() : _(this).hide()
                })
            }
        });
        var de = /^(?:checkbox|radio)$/i, pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            he = /^$|^module$|\/(?:java|ecma)script/i, ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function me(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? _.merge([e], n) : n
        }

        function ve(e, t) {
            for (var n = 0, r = e.length; n < r; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
        }

        ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
        var be = /<|&#?\w+;/;

        function ye(e, t, n, r, i) {
            for (var o, a, s, l, c, u, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === T(o)) _.merge(d, o.nodeType ? [o] : o); else if (be.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), l = ge[s] || ge._default, a.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
                _.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (f.textContent = "", p = 0; o = d[p++];) if (r && _.inArray(o, r) > -1) i && i.push(o); else if (c = _.contains(o.ownerDocument, o), a = me(f.appendChild(o), "script"), c && ve(a), n) for (u = 0; o = a[u++];) he.test(o.type || "") && n.push(o);
            return f
        }

        !function () {
            var e = a.createDocumentFragment().appendChild(a.createElement("div")), t = a.createElement("input");
            t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var we = a.documentElement, Ee = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            _e = /^([^.]*)(?:\.(.+)|)/;

        function Se() {
            return !0
        }

        function Ce() {
            return !1
        }

        function Ae() {
            try {
                return a.activeElement
            } catch (e) {
            }
        }

        function xe(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) xe(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce; else if (!i) return e;
            return 1 === o && (a = i, (i = function (e) {
                return _().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = _.guid++)), e.each(function () {
                _.event.add(this, t, i, r, n)
            })
        }

        _.event = {
            global: {}, add: function (e, t, n, r, i) {
                var o, a, s, l, c, u, f, d, p, h, g, m = Z.get(e);
                if (m) for (n.handler && (n = (o = n).handler, i = o.selector), i && _.find.matchesSelector(we, i), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                    return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                }), c = (t = (t || "").match(M) || [""]).length; c--;) p = g = (s = _e.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = _.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = _.event.special[p] || {}, u = _.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && _.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, u) : d.push(u), _.event.global[p] = !0)
            }, remove: function (e, t, n, r, i) {
                var o, a, s, l, c, u, f, d, p, h, g, m = Z.hasData(e) && Z.get(e);
                if (m && (l = m.events)) {
                    for (c = (t = (t || "").match(M) || [""]).length; c--;) if (p = g = (s = _e.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = _.event.special[p] || {}, d = l[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) u = d[o], !i && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || _.removeEvent(e, p, m.handle), delete l[p])
                    } else for (p in l) _.event.remove(e, p + t[c], n, r, !0);
                    _.isEmptyObject(l) && Z.remove(e, "handle events")
                }
            }, dispatch: function (e) {
                var t, n, r, i, o, a, s = _.event.fix(e), l = new Array(arguments.length),
                    c = (Z.get(this, "events") || {})[s.type] || [], u = _.event.special[s.type] || {};
                for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                    for (a = _.event.handlers.call(this, s, c), t = 0; (i = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((_.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, s), s.result
                }
            }, handlers: function (e, t) {
                var n, r, i, o, a, s = [], l = t.delegateCount, c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                    for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? _(i, this).index(c) > -1 : _.find(i, this, null, [c]).length), a[i] && o.push(r);
                    o.length && s.push({elem: c, handlers: o})
                }
                return c = this, l < t.length && s.push({elem: c, handlers: t.slice(l)}), s
            }, addProp: function (e, t) {
                Object.defineProperty(_.Event.prototype, e, {
                    enumerable: !0, configurable: !0, get: b(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    }, set: function (t) {
                        Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                    }
                })
            }, fix: function (e) {
                return e[_.expando] ? e : new _.Event(e)
            }, special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== Ae() && this.focus) return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === Ae() && this.blur) return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                    }, _default: function (e) {
                        return N(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, _.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, _.Event = function (e, t) {
            if (!(this instanceof _.Event)) return new _.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
        }, _.Event.prototype = {
            constructor: _.Event,
            isDefaultPrevented: Ce,
            isPropagationStopped: Ce,
            isImmediatePropagationStopped: Ce,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, _.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, _.event.addProp), _.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            _.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, r = e.relatedTarget, i = e.handleObj;
                    return r && (r === this || _.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), _.fn.extend({
            on: function (e, t, n, r) {
                return xe(this, e, t, n, r)
            }, one: function (e, t, n, r) {
                return xe(this, e, t, n, r, 1)
            }, off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, _(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
                    _.event.remove(this, e, n, t)
                })
            }
        });
        var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Oe = /<script|<style|<link/i, Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function De(e, t) {
            return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
        }

        function Le(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Pe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Re(e, t) {
            var n, r, i, o, a, s, l, c;
            if (1 === t.nodeType) {
                if (Z.hasData(e) && (o = Z.access(e), a = Z.set(t, o), c = o.events)) for (i in delete a.handle, a.events = {}, c) for (n = 0, r = c[i].length; n < r; n++) _.event.add(t, i, c[i][n]);
                J.hasData(e) && (s = J.access(e), l = _.extend({}, s), J.set(t, l))
            }
        }

        function He(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && de.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function je(e, t, n, r) {
            t = c.apply([], t);
            var i, o, a, s, l, u, f = 0, d = e.length, p = d - 1, h = t[0], g = b(h);
            if (g || d > 1 && "string" == typeof h && !v.checkClone && Ne.test(h)) return e.each(function (i) {
                var o = e.eq(i);
                g && (t[0] = h.call(this, i, o.html())), je(o, t, n, r)
            });
            if (d && (o = (i = ye(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (s = (a = _.map(me(i, "script"), Le)).length; f < d; f++) l = i, f !== p && (l = _.clone(l, !0, !0), s && _.merge(a, me(l, "script"))), n.call(e[f], l, f);
                if (s) for (u = a[a.length - 1].ownerDocument, _.map(a, Pe), f = 0; f < s; f++) l = a[f], he.test(l.type || "") && !Z.access(l, "globalEval") && _.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? _._evalUrl && _._evalUrl(l.src) : E(l.textContent.replace(Ie, ""), u, l))
            }
            return e
        }

        function Me(e, t, n) {
            for (var r, i = t ? _.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || _.cleanData(me(r)), r.parentNode && (n && _.contains(r.ownerDocument, r) && ve(me(r, "script")), r.parentNode.removeChild(r));
            return e
        }

        _.extend({
            htmlPrefilter: function (e) {
                return e.replace(ke, "<$1></$2>")
            }, clone: function (e, t, n) {
                var r, i, o, a, s = e.cloneNode(!0), l = _.contains(e.ownerDocument, e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e))) for (a = me(s), r = 0, i = (o = me(e)).length; r < i; r++) He(o[r], a[r]);
                if (t) if (n) for (o = o || me(e), a = a || me(s), r = 0, i = o.length; r < i; r++) Re(o[r], a[r]); else Re(e, s);
                return (a = me(s, "script")).length > 0 && ve(a, !l && me(e, "script")), s
            }, cleanData: function (e) {
                for (var t, n, r, i = _.event.special, o = 0; void 0 !== (n = e[o]); o++) if (K(n)) {
                    if (t = n[Z.expando]) {
                        if (t.events) for (r in t.events) i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                        n[Z.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
            }
        }), _.fn.extend({
            detach: function (e) {
                return Me(this, e, !0)
            }, remove: function (e) {
                return Me(this, e)
            }, text: function (e) {
                return X(this, function (e) {
                    return void 0 === e ? _.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            }, append: function () {
                return je(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
                })
            }, prepend: function () {
                return je(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = De(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return je(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return je(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(me(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return _.clone(this, e, t)
                })
            }, html: function (e) {
                return X(this, function (e) {
                    var t = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Oe.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = _.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(me(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return je(this, arguments, function (t) {
                    var n = this.parentNode;
                    _.inArray(this, e) < 0 && (_.cleanData(me(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), _.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            _.fn[e] = function (e) {
                for (var n, r = [], i = _(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), _(i[a])[t](n), u.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), Fe = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n), t.getComputedStyle(e)
        }, Be = new RegExp(oe.join("|"), "i");

        function qe(e, t, n) {
            var r, i, o, a, s = e.style;
            return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || _.contains(e.ownerDocument, e) || (a = _.style(e, t)), !v.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function Ue(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function e() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", we.appendChild(c).appendChild(u);
                    var e = n.getComputedStyle(u);
                    r = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", o = 36 === u.offsetWidth || "absolute", we.removeChild(c), u = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }

            var r, i, o, s, l, c = a.createElement("div"), u = a.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, _.extend(v, {
                boxSizingReliable: function () {
                    return e(), i
                }, pixelBoxStyles: function () {
                    return e(), s
                }, pixelPosition: function () {
                    return e(), r
                }, reliableMarginLeft: function () {
                    return e(), l
                }, scrollboxSize: function () {
                    return e(), o
                }
            }))
        }();
        var Ye = /^(none|table(?!-c[ea]).+)/, Xe = /^--/,
            $e = {position: "absolute", visibility: "hidden", display: "block"},
            Ve = {letterSpacing: "0", fontWeight: "400"}, Ge = ["Webkit", "Moz", "ms"],
            ze = a.createElement("div").style;

        function Ke(e) {
            var t = _.cssProps[e];
            return t || (t = _.cssProps[e] = function (e) {
                if (e in ze) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;) if ((e = Ge[n] + t) in ze) return e
            }(e) || e), t
        }

        function Qe(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Ze(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0, s = 0, l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (l += _.css(e, n + oe[a], !0, i)), r ? ("content" === n && (l -= _.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (l -= _.css(e, "border" + oe[a] + "Width", !0, i))) : (l += _.css(e, "padding" + oe[a], !0, i), "padding" !== n ? l += _.css(e, "border" + oe[a] + "Width", !0, i) : s += _.css(e, "border" + oe[a] + "Width", !0, i));
            return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5))), l
        }

        function Je(e, t, n) {
            var r = Fe(e), i = qe(e, t, r), o = "border-box" === _.css(e, "boxSizing", !1, r), a = o;
            if (We.test(i)) {
                if (!n) return i;
                i = "auto"
            }
            return a = a && (v.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === _.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
        }

        function et(e, t, n, r, i) {
            return new et.prototype.init(e, t, n, r, i)
        }

        _.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = qe(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = z(t), l = Xe.test(t), c = e.style;
                    if (l || (t = Ke(s)), a = _.cssHooks[t] || _.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                    "string" === (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (_.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function (e, t, n, r) {
                var i, o, a, s = z(t);
                return Xe.test(t) || (t = Ke(s)), (a = _.cssHooks[t] || _.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = qe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), _.each(["height", "width"], function (e, t) {
            _.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n) return !Ye.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, t, r) : se(e, $e, function () {
                        return Je(e, t, r)
                    })
                }, set: function (e, n, r) {
                    var i, o = Fe(e), a = "border-box" === _.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                    return a && v.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Qe(0, n, s)
                }
            }
        }), _.cssHooks.marginLeft = Ue(v.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), _.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            _.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, "margin" !== e && (_.cssHooks[e + t].set = Qe)
        }), _.fn.extend({
            css: function (e, t) {
                return X(this, function (e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = _.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), _.Tween = et, et.prototype = {
            constructor: et, init: function (e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (_.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = et.propHooks[this.prop];
                return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
            }
        }, et.prototype.init.prototype = et.prototype, et.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                }, set: function (e) {
                    _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, _.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, _.fx = et.prototype.init, _.fx.step = {};
        var tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;

        function ot() {
            nt && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ot) : n.setTimeout(ot, _.fx.interval), _.fx.tick())
        }

        function at() {
            return n.setTimeout(function () {
                tt = void 0
            }), tt = Date.now()
        }

        function st(e, t) {
            var n, r = 0, i = {height: e};
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function lt(e, t, n) {
            for (var r, i = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
        }

        function ct(e, t, n) {
            var r, i, o = 0, a = ct.prefilters.length, s = _.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (i) return !1;
                for (var t = tt || at(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(r);
                return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            }, c = s.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(!0, {specialEasing: {}, easing: _.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || at(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = _.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0, r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }), u = c.props;
            for (!function (e, t) {
                var n, r, i, o, a;
                for (n in e) if (i = t[r = z(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = _.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
            }(u, c.opts.specialEasing); o < a; o++) if (r = ct.prefilters[o].call(c, e, u, c.opts)) return b(r.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
            return _.map(u, lt, c), b(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        _.Animation = _.extend(ct, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return le(n.elem, e, ie.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                b(e) ? (t = e, e = ["*"]) : e = e.match(M);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
            }, prefilters: [function (e, t, n) {
                var r, i, o, a, s, l, c, u, f = "width" in t || "height" in t, d = this, p = {}, h = e.style,
                    g = e.nodeType && ae(e), m = Z.get(e, "fxshow");
                for (r in n.queue || (null == (a = _._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, d.always(function () {
                    d.always(function () {
                        a.unqueued--, _.queue(e, "fx").length || a.empty.fire()
                    })
                })), t) if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    p[r] = m && m[r] || _.style(e, r)
                }
                if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(p)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = Z.get(e, "display")), "none" === (u = _.css(e, "display")) && (c ? u = c : (fe([e], !0), c = e.style.display || c, u = _.css(e, "display"), fe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (d.done(function () {
                    h.display = c
                }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = Z.access(e, "fxshow", {display: c}), o && (m.hidden = !g), g && fe([e], !0), d.done(function () {
                    for (r in g || fe([e]), Z.remove(e, "fxshow"), p) _.style(e, r, p[r])
                })), l = lt(g ? m[r] : 0, r, d), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
            }], prefilter: function (e, t) {
                t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
            }
        }), _.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? _.extend({}, e) : {
                complete: n || !n && t || b(e) && e,
                duration: e,
                easing: n && t || t && !b(t) && t
            };
            return _.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in _.fx.speeds ? r.duration = _.fx.speeds[r.duration] : r.duration = _.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                b(r.old) && r.old.call(this), r.queue && _.dequeue(this, r.queue)
            }, r
        }, _.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
            }, animate: function (e, t, n, r) {
                var i = _.isEmptyObject(e), o = _.speed(t, n, r), a = function () {
                    var t = ct(this, _.extend({}, e), o);
                    (i || Z.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            }, stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, i = null != e && e + "queueHooks", o = _.timers, a = Z.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && it.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || _.dequeue(this, e)
                })
            }, finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = Z.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = _.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, _.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), _.each(["toggle", "show", "hide"], function (e, t) {
            var n = _.fn[t];
            _.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, r, i)
            }
        }), _.each({
            slideDown: st("show"),
            slideUp: st("hide"),
            slideToggle: st("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            _.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), _.timers = [], _.fx.tick = function () {
            var e, t = 0, n = _.timers;
            for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || _.fx.stop(), tt = void 0
        }, _.fx.timer = function (e) {
            _.timers.push(e), _.fx.start()
        }, _.fx.interval = 13, _.fx.start = function () {
            nt || (nt = !0, ot())
        }, _.fx.stop = function () {
            nt = null
        }, _.fx.speeds = {slow: 600, fast: 200, _default: 400}, _.fn.delay = function (e, t) {
            return e = _.fx && _.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function () {
                    n.clearTimeout(i)
                }
            })
        }, function () {
            var e = a.createElement("input"), t = a.createElement("select").appendChild(a.createElement("option"));
            e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
        }();
        var ut, ft = _.expr.attrHandle;
        _.fn.extend({
            attr: function (e, t) {
                return X(this, _.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    _.removeAttr(this, e)
                })
            }
        }), _.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (i = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = _.find.attr(e, t)) ? void 0 : r)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!v.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, r = 0, i = t && t.match(M);
                if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
            }
        }), ut = {
            set: function (e, t, n) {
                return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ft[t] || _.find.attr;
            ft[t] = function (e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = ft[a], ft[a] = i, i = null != n(e, t, r) ? a : null, ft[a] = o), i
            }
        });
        var dt = /^(?:input|select|textarea|button)$/i, pt = /^(?:a|area)$/i;

        function ht(e) {
            return (e.match(M) || []).join(" ")
        }

        function gt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function mt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
        }

        _.fn.extend({
            prop: function (e, t) {
                return X(this, _.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each(function () {
                    delete this[_.propFix[e] || e]
                })
            }
        }), _.extend({
            prop: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t, i = _.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = _.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : dt.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), v.optSelected || (_.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            _.propFix[this.toLowerCase()] = this
        }), _.fn.extend({
            addClass: function (e) {
                var t, n, r, i, o, a, s, l = 0;
                if (b(e)) return this.each(function (t) {
                    _(this).addClass(e.call(this, t, gt(this)))
                });
                if ((t = mt(e)).length) for (; n = this[l++];) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                    for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (s = ht(r)) && n.setAttribute("class", s)
                }
                return this
            }, removeClass: function (e) {
                var t, n, r, i, o, a, s, l = 0;
                if (b(e)) return this.each(function (t) {
                    _(this).removeClass(e.call(this, t, gt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = mt(e)).length) for (; n = this[l++];) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                    for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                    i !== (s = ht(r)) && n.setAttribute("class", s)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e, r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : b(e) ? this.each(function (n) {
                    _(this).toggleClass(e.call(this, n, gt(this), t), t)
                }) : this.each(function () {
                    var t, i, o, a;
                    if (r) for (i = 0, o = _(this), a = mt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = gt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
                })
            }, hasClass: function (e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + ht(gt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var vt = /\r/g;
        _.fn.extend({
            val: function (e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = b(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, _(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = _.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
            }
        }), _.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = _.find.attr(e, "value");
                        return null != t ? t : ht(_.text(e))
                    }
                }, select: {
                    get: function (e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                            l = a ? o + 1 : i.length;
                        for (r = o < 0 ? l : a ? o : 0; r < l; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = _(n).val(), a) return t;
                            s.push(t)
                        }
                        return s
                    }, set: function (e, t) {
                        for (var n, r, i = e.options, o = _.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = _.inArray(_.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), _.each(["radio", "checkbox"], function () {
            _.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1
                }
            }, v.checkOn || (_.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), v.focusin = "onfocusin" in n;
        var bt = /^(?:focusinfocus|focusoutblur)$/, yt = function (e) {
            e.stopPropagation()
        };
        _.extend(_.event, {
            trigger: function (e, t, r, i) {
                var o, s, l, c, u, f, d, p, g = [r || a], m = h.call(e, "type") ? e.type : e,
                    v = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = p = l = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !bt.test(m + _.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(), v.sort()), u = m.indexOf(":") < 0 && "on" + m, (e = e[_.expando] ? e : new _.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : _.makeArray(t, [e]), d = _.event.special[m] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                    if (!i && !d.noBubble && !y(r)) {
                        for (c = d.delegateType || m, bt.test(c + m) || (s = s.parentNode); s; s = s.parentNode) g.push(s), l = s;
                        l === (r.ownerDocument || a) && g.push(l.defaultView || l.parentWindow || n)
                    }
                    for (o = 0; (s = g[o++]) && !e.isPropagationStopped();) p = s, e.type = o > 1 ? c : d.bindType || m, (f = (Z.get(s, "events") || {})[e.type] && Z.get(s, "handle")) && f.apply(s, t), (f = u && s[u]) && f.apply && K(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = m, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), t) || !K(r) || u && b(r[m]) && !y(r) && ((l = r[u]) && (r[u] = null), _.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, yt), r[m](), e.isPropagationStopped() && p.removeEventListener(m, yt), _.event.triggered = void 0, l && (r[u] = l)), e.result
                }
            }, simulate: function (e, t, n) {
                var r = _.extend(new _.Event, n, {type: e, isSimulated: !0});
                _.event.trigger(r, null, t)
            }
        }), _.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    _.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return _.event.trigger(e, t, n, !0)
            }
        }), v.focusin || _.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                _.event.simulate(t, e.target, _.event.fix(e))
            };
            _.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this, i = Z.access(r, t);
                    i || r.addEventListener(e, n, !0), Z.access(r, t, (i || 0) + 1)
                }, teardown: function () {
                    var r = this.ownerDocument || this, i = Z.access(r, t) - 1;
                    i ? Z.access(r, t, i) : (r.removeEventListener(e, n, !0), Z.remove(r, t))
                }
            }
        });
        var wt = n.location, Et = Date.now(), Tt = /\?/;
        _.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + e), t
        };
        var _t = /\[\]$/, St = /\r?\n/g, Ct = /^(?:submit|button|image|reset|file)$/i,
            At = /^(?:input|select|textarea|keygen)/i;

        function xt(e, t, n, r) {
            var i;
            if (Array.isArray(t)) _.each(t, function (t, i) {
                n || _t.test(e) ? r(e, i) : xt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            }); else if (n || "object" !== T(t)) r(e, t); else for (i in t) xt(e + "[" + i + "]", t[i], n, r)
        }

        _.param = function (e, t) {
            var n, r = [], i = function (e, t) {
                var n = b(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function () {
                i(this.name, this.value)
            }); else for (n in e) xt(n, e[n], t, i);
            return r.join("&")
        }, _.fn.extend({
            serialize: function () {
                return _.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = _.prop(this, "elements");
                    return e ? _.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !_(this).is(":disabled") && At.test(this.nodeName) && !Ct.test(e) && (this.checked || !de.test(e))
                }).map(function (e, t) {
                    var n = _(this).val();
                    return null == n ? null : Array.isArray(n) ? _.map(n, function (e) {
                        return {name: t.name, value: e.replace(St, "\r\n")}
                    }) : {name: t.name, value: n.replace(St, "\r\n")}
                }).get()
            }
        });
        var kt = /%20/g, Ot = /#.*$/, Nt = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)$/gm, Dt = /^(?:GET|HEAD)$/,
            Lt = /^\/\//, Pt = {}, Rt = {}, Ht = "*/".concat("*"), jt = a.createElement("a");

        function Mt(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0, o = t.toLowerCase().match(M) || [];
                if (b(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Wt(e, t, n, r) {
            var i = {}, o = e === Rt;

            function a(s) {
                var l;
                return i[s] = !0, _.each(e[s] || [], function (e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || o || i[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                }), l
            }

            return a(t.dataTypes[0]) || !i["*"] && a("*")
        }

        function Ft(e, t) {
            var n, r, i = _.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && _.extend(!0, e, r), e
        }

        jt.href = wt.href, _.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: wt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ht,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? Ft(Ft(e, _.ajaxSettings), t) : Ft(_.ajaxSettings, e)
            },
            ajaxPrefilter: Mt(Pt),
            ajaxTransport: Mt(Rt),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, o, s, l, c, u, f, d, p, h = _.ajaxSetup({}, t), g = h.context || h,
                    m = h.context && (g.nodeType || g.jquery) ? _(g) : _.event, v = _.Deferred(),
                    b = _.Callbacks("once memory"), y = h.statusCode || {}, w = {}, E = {}, T = "canceled", S = {
                        readyState: 0, getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!s) for (s = {}; t = It.exec(o);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        }, getAllResponseHeaders: function () {
                            return u ? o : null
                        }, setRequestHeader: function (e, t) {
                            return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, w[e] = t), this
                        }, overrideMimeType: function (e) {
                            return null == u && (h.mimeType = e), this
                        }, statusCode: function (e) {
                            var t;
                            if (e) if (u) S.always(e[S.status]); else for (t in e) y[t] = [y[t], e[t]];
                            return this
                        }, abort: function (e) {
                            var t = e || T;
                            return r && r.abort(t), C(0, t), this
                        }
                    };
                if (v.promise(S), h.url = ((e || h.url || wt.href) + "").replace(Lt, wt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                    c = a.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = jt.protocol + "//" + jt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = _.param(h.data, h.traditional)), Wt(Pt, h, t, S), u) return S;
                for (d in (f = _.event && h.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Dt.test(h.type), i = h.url.replace(Ot, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(kt, "+")) : (p = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Tt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Nt, "$1"), p = (Tt.test(i) ? "&" : "?") + "_=" + Et++ + p), h.url = i + p), h.ifModified && (_.lastModified[i] && S.setRequestHeader("If-Modified-Since", _.lastModified[i]), _.etag[i] && S.setRequestHeader("If-None-Match", _.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]), h.headers) S.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || u)) return S.abort();
                if (T = "abort", b.add(h.complete), S.done(h.success), S.fail(h.error), r = Wt(Rt, h, t, S)) {
                    if (S.readyState = 1, f && m.trigger("ajaxSend", [S, h]), u) return S;
                    h.async && h.timeout > 0 && (l = n.setTimeout(function () {
                        S.abort("timeout")
                    }, h.timeout));
                    try {
                        u = !1, r.send(w, C)
                    } catch (e) {
                        if (u) throw e;
                        C(-1, e)
                    }
                } else C(-1, "No Transport");

                function C(e, t, a, s) {
                    var c, d, p, w, E, T = t;
                    u || (u = !0, l && n.clearTimeout(l), r = void 0, o = s || "", S.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, a && (w = function (e, t, n) {
                        for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r) for (i in s) if (s[i] && s[i].test(r)) {
                            l.unshift(i);
                            break
                        }
                        if (l[0] in n) o = l[0]; else {
                            for (i in n) {
                                if (!l[0] || e.converters[i + " " + l[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o]
                    }(h, S, a)), w = function (e, t, n, r) {
                        var i, o, a, s, l, c = {}, u = e.dataTypes.slice();
                        if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                        for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                            if (!(a = c[l + " " + o] || c["* " + o])) for (i in c) if ((s = i.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], u.unshift(s[1]));
                                break
                            }
                            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                                t = a(t)
                            } catch (e) {
                                return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o}
                            }
                        }
                        return {state: "success", data: t}
                    }(h, w, S, c), c ? (h.ifModified && ((E = S.getResponseHeader("Last-Modified")) && (_.lastModified[i] = E), (E = S.getResponseHeader("etag")) && (_.etag[i] = E)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, d = w.data, c = !(p = w.error))) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || T) + "", c ? v.resolveWith(g, [d, T, S]) : v.rejectWith(g, [S, T, p]), S.statusCode(y), y = void 0, f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? d : p]), b.fireWith(g, [S, T]), f && (m.trigger("ajaxComplete", [S, h]), --_.active || _.event.trigger("ajaxStop")))
                }

                return S
            },
            getJSON: function (e, t, n) {
                return _.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return _.get(e, void 0, t, "script")
            }
        }), _.each(["get", "post"], function (e, t) {
            _[t] = function (e, n, r, i) {
                return b(n) && (i = i || r, r = n, n = void 0), _.ajax(_.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, _.isPlainObject(e) && e))
            }
        }), _._evalUrl = function (e) {
            return _.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
        }, _.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (b(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            }, wrapInner: function (e) {
                return b(e) ? this.each(function (t) {
                    _(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = _(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = b(e);
                return this.each(function (n) {
                    _(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    _(this).replaceWith(this.childNodes)
                }), this
            }
        }), _.expr.pseudos.hidden = function (e) {
            return !_.expr.pseudos.visible(e)
        }, _.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, _.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {
            }
        };
        var Bt = {0: 200, 1223: 204}, qt = _.ajaxSettings.xhr();
        v.cors = !!qt && "withCredentials" in qt, v.ajax = qt = !!qt, _.ajaxTransport(function (e) {
            var t, r;
            if (v.cors || qt && !e.crossDomain) return {
                send: function (i, o) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                    t = function (e) {
                        return function () {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                        4 === s.readyState && n.setTimeout(function () {
                            t && r()
                        })
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                }, abort: function () {
                    t && t()
                }
            }
        }), _.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), _.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return _.globalEval(e), e
                }
            }
        }), _.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), _.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain) return {
                send: function (r, i) {
                    t = _("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), a.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        });
        var Ut = [], Yt = /(=)\?(?=&|$)|\?\?/;
        _.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Ut.pop() || _.expando + "_" + Et++;
                return this[e] = !0, e
            }
        }), _.ajaxPrefilter("json jsonp", function (e, t, r) {
            var i, o, a,
                s = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Yt, "$1" + i) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                return a || _.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
                a = arguments
            }, r.always(function () {
                void 0 === o ? _(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Ut.push(i)), a && b(o) && o(a[0]), a = o = void 0
            }), "script"
        }), v.createHTMLDocument = function () {
            var e = a.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), _.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), i = I.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = ye([e], t, o), o && o.length && _(o).remove(), _.merge([], i.childNodes)));
            var r, i, o
        }, _.fn.load = function (e, t, n) {
            var r, i, o, a = this, s = e.indexOf(" ");
            return s > -1 && (r = ht(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && _.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, a.html(r ? _("<div>").append(_.parseHTML(e)).find(r) : e)
            }).always(n && function (e, t) {
                a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            _.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), _.expr.pseudos.animated = function (e) {
            return _.grep(_.timers, function (t) {
                return e === t.elem
            }).length
        }, _.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, l, c = _.css(e, "position"), u = _(e), f = {};
                "static" === c && (e.style.position = "relative"), s = u.offset(), o = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (a = (r = u.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), b(t) && (t = t.call(e, n, _.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : u.css(f)
            }
        }, _.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    _.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0], i = {top: 0, left: 0};
                    if ("fixed" === _.css(r, "position")) t = r.getBoundingClientRect(); else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = _(e).offset()).top += _.css(e, "borderTopWidth", !0), i.left += _.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - _.css(r, "marginTop", !0),
                        left: t.left - i.left - _.css(r, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                    return e || we
                })
            }
        }), _.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = "pageYOffset" === t;
            _.fn[e] = function (r) {
                return X(this, function (e, r, i) {
                    var o;
                    if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                }, e, r, arguments.length)
            }
        }), _.each(["top", "left"], function (e, t) {
            _.cssHooks[t] = Ue(v.pixelPosition, function (e, n) {
                if (n) return n = qe(e, t), We.test(n) ? _(e).position()[t] + "px" : n
            })
        }), _.each({Height: "height", Width: "width"}, function (e, t) {
            _.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
                _.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return X(this, function (t, n, i) {
                        var o;
                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? _.css(t, n, s) : _.style(t, n, i, s)
                    }, t, a ? i : void 0, a)
                }
            })
        }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            _.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), _.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), _.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), _.proxy = function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = l.call(arguments, 2), (i = function () {
                return e.apply(t || this, r.concat(l.call(arguments)))
            }).guid = e.guid = e.guid || _.guid++, i
        }, _.holdReady = function (e) {
            e ? _.readyWait++ : _.ready(!0)
        }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = N, _.isFunction = b, _.isWindow = y, _.camelCase = z, _.type = T, _.now = Date.now, _.isNumeric = function (e) {
            var t = _.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (r = function () {
            return _
        }.apply(t, [])) || (e.exports = r);
        var Xt = n.jQuery, $t = n.$;
        return _.noConflict = function (e) {
            return n.$ === _ && (n.$ = $t), e && n.jQuery === _ && (n.jQuery = Xt), _
        }, i || (n.jQuery = n.$ = _), _
    })
}, function (e, t, n) {
    (function (t) {
        /**!
         * @fileOverview Kickass library to create and place poppers near their reference elements.
         * @version 1.14.3
         * @license
         * Copyright (c) 2016 Federico Zivolo and contributors
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE.
         */
        !function (t, n) {
            e.exports = n()
        }(0, function () {
            "use strict";
            for (var e = "undefined" != typeof window && "undefined" != typeof document, n = ["Edge", "Trident", "Firefox"], r = 0, i = 0; i < n.length; i += 1) if (e && navigator.userAgent.indexOf(n[i]) >= 0) {
                r = 1;
                break
            }
            var o = e && window.Promise ? function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, window.Promise.resolve().then(function () {
                        t = !1, e()
                    }))
                }
            } : function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, setTimeout(function () {
                        t = !1, e()
                    }, r))
                }
            };

            function a(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }

            function s(e, t) {
                if (1 !== e.nodeType) return [];
                var n = getComputedStyle(e, null);
                return t ? n[t] : n
            }

            function l(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function c(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case"HTML":
                    case"BODY":
                        return e.ownerDocument.body;
                    case"#document":
                        return e.body
                }
                var t = s(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + i + r) ? e : c(l(e))
            }

            var u = e && !(!window.MSInputMethodContext || !document.documentMode),
                f = e && /MSIE 10/.test(navigator.userAgent);

            function d(e) {
                return 11 === e ? u : 10 === e ? f : u || f
            }

            function p(e) {
                if (!e) return document.documentElement;
                for (var t = d(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                var r = n && n.nodeName;
                return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }

            function h(e) {
                return null !== e.parentNode ? h(e.parentNode) : e
            }

            function g(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, r = n ? e : t, i = n ? t : e,
                    o = document.createRange();
                o.setStart(r, 0), o.setEnd(i, 0);
                var a = o.commonAncestorContainer;
                if (e !== a && t !== a || r.contains(i)) return function (e) {
                    var t = e.nodeName;
                    return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e)
                }(a) ? a : p(a);
                var s = h(e);
                return s.host ? g(s.host, t) : g(e, h(t).host)
            }

            function m(e) {
                var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                    n = e.nodeName;
                if ("BODY" === n || "HTML" === n) {
                    var r = e.ownerDocument.documentElement;
                    return (e.ownerDocument.scrollingElement || r)[t]
                }
                return e[t]
            }

            function v(e, t) {
                var n = "x" === t ? "Left" : "Top", r = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
            }

            function b(e, t, n, r) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], d(10) ? n["offset" + e] + r["margin" + ("Height" === e ? "Top" : "Left")] + r["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
            }

            function y() {
                var e = document.body, t = document.documentElement, n = d(10) && getComputedStyle(t);
                return {height: b("Height", e, t, n), width: b("Width", e, t, n)}
            }

            var w = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }, E = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), T = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }, _ = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };

            function S(e) {
                return _({}, e, {right: e.left + e.width, bottom: e.top + e.height})
            }

            function C(e) {
                var t = {};
                try {
                    if (d(10)) {
                        t = e.getBoundingClientRect();
                        var n = m(e, "top"), r = m(e, "left");
                        t.top += n, t.left += r, t.bottom += n, t.right += r
                    } else t = e.getBoundingClientRect()
                } catch (e) {
                }
                var i = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
                    o = "HTML" === e.nodeName ? y() : {}, a = o.width || e.clientWidth || i.right - i.left,
                    l = o.height || e.clientHeight || i.bottom - i.top, c = e.offsetWidth - a, u = e.offsetHeight - l;
                if (c || u) {
                    var f = s(e);
                    c -= v(f, "x"), u -= v(f, "y"), i.width -= c, i.height -= u
                }
                return S(i)
            }

            function A(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = d(10),
                    i = "HTML" === t.nodeName, o = C(e), a = C(t), l = c(e), u = s(t),
                    f = parseFloat(u.borderTopWidth, 10), p = parseFloat(u.borderLeftWidth, 10);
                n && "HTML" === t.nodeName && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                var h = S({top: o.top - a.top - f, left: o.left - a.left - p, width: o.width, height: o.height});
                if (h.marginTop = 0, h.marginLeft = 0, !r && i) {
                    var g = parseFloat(u.marginTop, 10), v = parseFloat(u.marginLeft, 10);
                    h.top -= f - g, h.bottom -= f - g, h.left -= p - v, h.right -= p - v, h.marginTop = g, h.marginLeft = v
                }
                return (r && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (h = function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = m(t, "top"),
                        i = m(t, "left"), o = n ? -1 : 1;
                    return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e
                }(h, t)), h
            }

            function x(e) {
                if (!e || !e.parentElement || d()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === s(t, "transform");) t = t.parentElement;
                return t || document.documentElement
            }

            function k(e, t, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0},
                    a = i ? x(e) : g(e, t);
                if ("viewport" === r) o = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement, r = A(e, n),
                        i = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0), a = t ? 0 : m(n),
                        s = t ? 0 : m(n, "left");
                    return S({top: a - r.top + r.marginTop, left: s - r.left + r.marginLeft, width: i, height: o})
                }(a, i); else {
                    var u = void 0;
                    "scrollParent" === r ? "BODY" === (u = c(l(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === r ? e.ownerDocument.documentElement : r;
                    var f = A(u, a, i);
                    if ("HTML" !== u.nodeName || function e(t) {
                        var n = t.nodeName;
                        return "BODY" !== n && "HTML" !== n && ("fixed" === s(t, "position") || e(l(t)))
                    }(a)) o = f; else {
                        var d = y(), p = d.height, h = d.width;
                        o.top += f.top - f.marginTop, o.bottom = p + f.top, o.left += f.left - f.marginLeft, o.right = h + f.left
                    }
                }
                return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
            }

            function O(e, t, n, r, i) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var a = k(n, r, o, i), s = {
                    top: {width: a.width, height: t.top - a.top},
                    right: {width: a.right - t.right, height: a.height},
                    bottom: {width: a.width, height: a.bottom - t.bottom},
                    left: {width: t.left - a.left, height: a.height}
                }, l = Object.keys(s).map(function (e) {
                    return _({key: e}, s[e], {
                        area: function (e) {
                            return e.width * e.height
                        }(s[e])
                    })
                }).sort(function (e, t) {
                    return t.area - e.area
                }), c = l.filter(function (e) {
                    var t = e.width, r = e.height;
                    return t >= n.clientWidth && r >= n.clientHeight
                }), u = c.length > 0 ? c[0].key : l[0].key, f = e.split("-")[1];
                return u + (f ? "-" + f : "")
            }

            function N(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return A(n, r ? x(t) : g(t, n), r)
            }

            function I(e) {
                var t = getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                    r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
                return {width: e.offsetWidth + r, height: e.offsetHeight + n}
            }

            function D(e) {
                var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
                return e.replace(/left|right|bottom|top/g, function (e) {
                    return t[e]
                })
            }

            function L(e, t, n) {
                n = n.split("-")[0];
                var r = I(e), i = {width: r.width, height: r.height}, o = -1 !== ["right", "left"].indexOf(n),
                    a = o ? "top" : "left", s = o ? "left" : "top", l = o ? "height" : "width",
                    c = o ? "width" : "height";
                return i[a] = t[a] + t[l] / 2 - r[l] / 2, i[s] = n === s ? t[s] - r[c] : t[D(s)], i
            }

            function P(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function R(e, t, n) {
                return (void 0 === n ? e : e.slice(0, function (e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex(function (e) {
                        return e[t] === n
                    });
                    var r = P(e, function (e) {
                        return e[t] === n
                    });
                    return e.indexOf(r)
                }(e, "name", n))).forEach(function (e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && a(n) && (t.offsets.popper = S(t.offsets.popper), t.offsets.reference = S(t.offsets.reference), t = n(t, e))
                }), t
            }

            function H(e, t) {
                return e.some(function (e) {
                    var n = e.name;
                    return e.enabled && n === t
                })
            }

            function j(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                    var i = t[r], o = i ? "" + i + n : e;
                    if (void 0 !== document.body.style[o]) return o
                }
                return null
            }

            function M(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }

            function W(e, t, n, r) {
                n.updateBound = r, M(e).addEventListener("resize", n.updateBound, {passive: !0});
                var i = c(e);
                return function e(t, n, r, i) {
                    var o = "BODY" === t.nodeName, a = o ? t.ownerDocument.defaultView : t;
                    a.addEventListener(n, r, {passive: !0}), o || e(c(a.parentNode), n, r, i), i.push(a)
                }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
            }

            function F() {
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function (e, t) {
                    return M(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                        e.removeEventListener("scroll", t.updateBound)
                    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
                }(this.reference, this.state))
            }

            function B(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function q(e, t) {
                Object.keys(t).forEach(function (n) {
                    var r = "";
                    -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && B(t[n]) && (r = "px"), e.style[n] = t[n] + r
                })
            }

            function U(e, t, n) {
                var r = P(e, function (e) {
                    return e.name === t
                }), i = !!r && e.some(function (e) {
                    return e.name === n && e.enabled && e.order < r.order
                });
                if (!i) {
                    var o = "`" + t + "`", a = "`" + n + "`";
                    console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                }
                return i
            }

            var Y = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                X = Y.slice(3);

            function $(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = X.indexOf(e),
                    r = X.slice(n + 1).concat(X.slice(0, n));
                return t ? r.reverse() : r
            }

            var V = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"};

            function G(e, t, n, r) {
                var i = [0, 0], o = -1 !== ["right", "left"].indexOf(r), a = e.split(/(\+|\-)/).map(function (e) {
                    return e.trim()
                }), s = a.indexOf(P(a, function (e) {
                    return -1 !== e.search(/,|\s/)
                }));
                a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                return (c = c.map(function (e, r) {
                    var i = (1 === r ? !o : o) ? "height" : "width", a = !1;
                    return e.reduce(function (e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                    }, []).map(function (e) {
                        return function (e, t, n, r) {
                            var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +i[1], a = i[2];
                            if (!o) return e;
                            if (0 === a.indexOf("%")) {
                                var s = void 0;
                                switch (a) {
                                    case"%p":
                                        s = n;
                                        break;
                                    case"%":
                                    case"%r":
                                    default:
                                        s = r
                                }
                                return S(s)[t] / 100 * o
                            }
                            if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                            return o
                        }(e, i, t, n)
                    })
                })).forEach(function (e, t) {
                    e.forEach(function (n, r) {
                        B(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
                    })
                }), i
            }

            var z = {
                placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
                }, onUpdate: function () {
                }, modifiers: {
                    shift: {
                        order: 100, enabled: !0, fn: function (e) {
                            var t = e.placement, n = t.split("-")[0], r = t.split("-")[1];
                            if (r) {
                                var i = e.offsets, o = i.reference, a = i.popper,
                                    s = -1 !== ["bottom", "top"].indexOf(n), l = s ? "left" : "top",
                                    c = s ? "width" : "height",
                                    u = {start: T({}, l, o[l]), end: T({}, l, o[l] + o[c] - a[c])};
                                e.offsets.popper = _({}, a, u[r])
                            }
                            return e
                        }
                    }, offset: {
                        order: 200, enabled: !0, fn: function (e, t) {
                            var n = t.offset, r = e.placement, i = e.offsets, o = i.popper, a = i.reference,
                                s = r.split("-")[0], l = void 0;
                            return l = B(+n) ? [+n, 0] : G(n, o, a, s), "left" === s ? (o.top += l[0], o.left -= l[1]) : "right" === s ? (o.top += l[0], o.left += l[1]) : "top" === s ? (o.left += l[0], o.top -= l[1]) : "bottom" === s && (o.left += l[0], o.top += l[1]), e.popper = o, e
                        }, offset: 0
                    }, preventOverflow: {
                        order: 300, enabled: !0, fn: function (e, t) {
                            var n = t.boundariesElement || p(e.instance.popper);
                            e.instance.reference === n && (n = p(n));
                            var r = j("transform"), i = e.instance.popper.style, o = i.top, a = i.left, s = i[r];
                            i.top = "", i.left = "", i[r] = "";
                            var l = k(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                            i.top = o, i.left = a, i[r] = s, t.boundaries = l;
                            var c = t.priority, u = e.offsets.popper, f = {
                                primary: function (e) {
                                    var n = u[e];
                                    return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), T({}, e, n)
                                }, secondary: function (e) {
                                    var n = "right" === e ? "left" : "top", r = u[n];
                                    return u[e] > l[e] && !t.escapeWithReference && (r = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), T({}, n, r)
                                }
                            };
                            return c.forEach(function (e) {
                                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                u = _({}, u, f[t](e))
                            }), e.offsets.popper = u, e
                        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                    }, keepTogether: {
                        order: 400, enabled: !0, fn: function (e) {
                            var t = e.offsets, n = t.popper, r = t.reference, i = e.placement.split("-")[0],
                                o = Math.floor, a = -1 !== ["top", "bottom"].indexOf(i), s = a ? "right" : "bottom",
                                l = a ? "left" : "top", c = a ? "width" : "height";
                            return n[s] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[c]), n[l] > o(r[s]) && (e.offsets.popper[l] = o(r[s])), e
                        }
                    }, arrow: {
                        order: 500, enabled: !0, fn: function (e, t) {
                            var n;
                            if (!U(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var r = t.element;
                            if ("string" == typeof r) {
                                if (!(r = e.instance.popper.querySelector(r))) return e
                            } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var i = e.placement.split("-")[0], o = e.offsets, a = o.popper, l = o.reference,
                                c = -1 !== ["left", "right"].indexOf(i), u = c ? "height" : "width",
                                f = c ? "Top" : "Left", d = f.toLowerCase(), p = c ? "left" : "top",
                                h = c ? "bottom" : "right", g = I(r)[u];
                            l[h] - g < a[d] && (e.offsets.popper[d] -= a[d] - (l[h] - g)), l[d] + g > a[h] && (e.offsets.popper[d] += l[d] + g - a[h]), e.offsets.popper = S(e.offsets.popper);
                            var m = l[d] + l[u] / 2 - g / 2, v = s(e.instance.popper),
                                b = parseFloat(v["margin" + f], 10), y = parseFloat(v["border" + f + "Width"], 10),
                                w = m - e.offsets.popper[d] - b - y;
                            return w = Math.max(Math.min(a[u] - g, w), 0), e.arrowElement = r, e.offsets.arrow = (T(n = {}, d, Math.round(w)), T(n, p, ""), n), e
                        }, element: "[x-arrow]"
                    }, flip: {
                        order: 600, enabled: !0, fn: function (e, t) {
                            if (H(e.instance.modifiers, "inner")) return e;
                            if (e.flipped && e.placement === e.originalPlacement) return e;
                            var n = k(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                r = e.placement.split("-")[0], i = D(r), o = e.placement.split("-")[1] || "", a = [];
                            switch (t.behavior) {
                                case V.FLIP:
                                    a = [r, i];
                                    break;
                                case V.CLOCKWISE:
                                    a = $(r);
                                    break;
                                case V.COUNTERCLOCKWISE:
                                    a = $(r, !0);
                                    break;
                                default:
                                    a = t.behavior
                            }
                            return a.forEach(function (s, l) {
                                if (r !== s || a.length === l + 1) return e;
                                r = e.placement.split("-")[0], i = D(r);
                                var c = e.offsets.popper, u = e.offsets.reference, f = Math.floor,
                                    d = "left" === r && f(c.right) > f(u.left) || "right" === r && f(c.left) < f(u.right) || "top" === r && f(c.bottom) > f(u.top) || "bottom" === r && f(c.top) < f(u.bottom),
                                    p = f(c.left) < f(n.left), h = f(c.right) > f(n.right), g = f(c.top) < f(n.top),
                                    m = f(c.bottom) > f(n.bottom),
                                    v = "left" === r && p || "right" === r && h || "top" === r && g || "bottom" === r && m,
                                    b = -1 !== ["top", "bottom"].indexOf(r),
                                    y = !!t.flipVariations && (b && "start" === o && p || b && "end" === o && h || !b && "start" === o && g || !b && "end" === o && m);
                                (d || v || y) && (e.flipped = !0, (d || v) && (r = a[l + 1]), y && (o = function (e) {
                                    return "end" === e ? "start" : "start" === e ? "end" : e
                                }(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = _({}, e.offsets.popper, L(e.instance.popper, e.offsets.reference, e.placement)), e = R(e.instance.modifiers, e, "flip"))
                            }), e
                        }, behavior: "flip", padding: 5, boundariesElement: "viewport"
                    }, inner: {
                        order: 700, enabled: !1, fn: function (e) {
                            var t = e.placement, n = t.split("-")[0], r = e.offsets, i = r.popper, o = r.reference,
                                a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n);
                            return i[a ? "left" : "top"] = o[n] - (s ? i[a ? "width" : "height"] : 0), e.placement = D(t), e.offsets.popper = S(i), e
                        }
                    }, hide: {
                        order: 800, enabled: !0, fn: function (e) {
                            if (!U(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference, n = P(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                if (!0 === e.hide) return e;
                                e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === e.hide) return e;
                                e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                            }
                            return e
                        }
                    }, computeStyle: {
                        order: 850, enabled: !0, fn: function (e, t) {
                            var n = t.x, r = t.y, i = e.offsets.popper, o = P(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                            void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var a = void 0 !== o ? o : t.gpuAcceleration, s = C(p(e.instance.popper)),
                                l = {position: i.position}, c = {
                                    left: Math.floor(i.left),
                                    top: Math.round(i.top),
                                    bottom: Math.round(i.bottom),
                                    right: Math.floor(i.right)
                                }, u = "bottom" === n ? "top" : "bottom", f = "right" === r ? "left" : "right",
                                d = j("transform"), h = void 0, g = void 0;
                            if (g = "bottom" === u ? -s.height + c.bottom : c.top, h = "right" === f ? -s.width + c.right : c.left, a && d) l[d] = "translate3d(" + h + "px, " + g + "px, 0)", l[u] = 0, l[f] = 0, l.willChange = "transform"; else {
                                var m = "bottom" === u ? -1 : 1, v = "right" === f ? -1 : 1;
                                l[u] = g * m, l[f] = h * v, l.willChange = u + ", " + f
                            }
                            var b = {"x-placement": e.placement};
                            return e.attributes = _({}, b, e.attributes), e.styles = _({}, l, e.styles), e.arrowStyles = _({}, e.offsets.arrow, e.arrowStyles), e
                        }, gpuAcceleration: !0, x: "bottom", y: "right"
                    }, applyStyle: {
                        order: 900, enabled: !0, fn: function (e) {
                            return q(e.instance.popper, e.styles), function (e, t) {
                                Object.keys(t).forEach(function (n) {
                                    !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
                                })
                            }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && q(e.arrowElement, e.arrowStyles), e
                        }, onLoad: function (e, t, n, r, i) {
                            var o = N(i, t, e, n.positionFixed),
                                a = O(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return t.setAttribute("x-placement", a), q(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
                        }, gpuAcceleration: void 0
                    }
                }
            }, K = function () {
                function e(t, n) {
                    var r = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    w(this, e), this.scheduleUpdate = function () {
                        return requestAnimationFrame(r.update)
                    }, this.update = o(this.update.bind(this)), this.options = _({}, e.Defaults, i), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(_({}, e.Defaults.modifiers, i.modifiers)).forEach(function (t) {
                        r.options.modifiers[t] = _({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                        return _({name: e}, r.options.modifiers[e])
                    }).sort(function (e, t) {
                        return e.order - t.order
                    }), this.modifiers.forEach(function (e) {
                        e.enabled && a(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                    }), this.update();
                    var s = this.options.eventsEnabled;
                    s && this.enableEventListeners(), this.state.eventsEnabled = s
                }

                return E(e, [{
                    key: "update", value: function () {
                        return function () {
                            if (!this.state.isDestroyed) {
                                var e = {
                                    instance: this,
                                    styles: {},
                                    arrowStyles: {},
                                    attributes: {},
                                    flipped: !1,
                                    offsets: {}
                                };
                                e.offsets.reference = N(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = L(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = R(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                            }
                        }.call(this)
                    }
                }, {
                    key: "destroy", value: function () {
                        return function () {
                            return this.state.isDestroyed = !0, H(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[j("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                        }.call(this)
                    }
                }, {
                    key: "enableEventListeners", value: function () {
                        return function () {
                            this.state.eventsEnabled || (this.state = W(this.reference, this.options, this.state, this.scheduleUpdate))
                        }.call(this)
                    }
                }, {
                    key: "disableEventListeners", value: function () {
                        return F.call(this)
                    }
                }]), e
            }();
            return K.Utils = ("undefined" != typeof window ? window : t).PopperUtils, K.placements = Y, K.Defaults = z, K
        })
    }).call(this, n(5))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    /*!
      * Bootstrap v4.1.3 (https://getbootstrap.com/)
      * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
      */
    !function (e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function (t) {
                    o(e, t, n[t])
                })
            }
            return e
        }

        t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
        var s = function (e) {
            var t = "transitionend";

            function n(e) {
                return {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()
            }

            function r(t) {
                var n = this, r = !1;
                return e(this).one(i.TRANSITION_END, function () {
                    r = !0
                }), setTimeout(function () {
                    r || i.triggerTransitionEnd(n)
                }, t), this
            }

            var i = {
                TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                    do {
                        e += ~~(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                }, getSelectorFromElement: function (e) {
                    var t = e.getAttribute("data-target");
                    t && "#" !== t || (t = e.getAttribute("href") || "");
                    try {
                        return document.querySelector(t) ? t : null
                    } catch (e) {
                        return null
                    }
                }, getTransitionDurationFromElement: function (t) {
                    if (!t) return 0;
                    var n = e(t).css("transition-duration"), r = parseFloat(n);
                    return r ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
                }, reflow: function (e) {
                    return e.offsetHeight
                }, triggerTransitionEnd: function (n) {
                    e(n).trigger(t)
                }, supportsTransitionEnd: function () {
                    return Boolean(t)
                }, isElement: function (e) {
                    return (e[0] || e).nodeType
                }, typeCheckConfig: function (e, t, r) {
                    for (var o in r) if (Object.prototype.hasOwnProperty.call(r, o)) {
                        var a = r[o], s = t[o], l = s && i.isElement(s) ? "element" : n(s);
                        if (!new RegExp(a).test(l)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + l + '" but expected type "' + a + '".')
                    }
                }
            };
            return e.fn.emulateTransitionEnd = r, e.event.special[i.TRANSITION_END] = {
                bindType: t,
                delegateType: t,
                handle: function (t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }, i
        }(t), l = function (e) {
            var t = e.fn.alert,
                n = {CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api"},
                r = {ALERT: "alert", FADE: "fade", SHOW: "show"}, o = function () {
                    function t(e) {
                        this._element = e
                    }

                    var o = t.prototype;
                    return o.close = function (e) {
                        var t = this._element;
                        e && (t = this._getRootElement(e));
                        var n = this._triggerCloseEvent(t);
                        n.isDefaultPrevented() || this._removeElement(t)
                    }, o.dispose = function () {
                        e.removeData(this._element, "bs.alert"), this._element = null
                    }, o._getRootElement = function (t) {
                        var n = s.getSelectorFromElement(t), i = !1;
                        return n && (i = document.querySelector(n)), i || (i = e(t).closest("." + r.ALERT)[0]), i
                    }, o._triggerCloseEvent = function (t) {
                        var r = e.Event(n.CLOSE);
                        return e(t).trigger(r), r
                    }, o._removeElement = function (t) {
                        var n = this;
                        if (e(t).removeClass(r.SHOW), e(t).hasClass(r.FADE)) {
                            var i = s.getTransitionDurationFromElement(t);
                            e(t).one(s.TRANSITION_END, function (e) {
                                return n._destroyElement(t, e)
                            }).emulateTransitionEnd(i)
                        } else this._destroyElement(t)
                    }, o._destroyElement = function (t) {
                        e(t).detach().trigger(n.CLOSED).remove()
                    }, t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var r = e(this), i = r.data("bs.alert");
                            i || (i = new t(this), r.data("bs.alert", i)), "close" === n && i[n](this)
                        })
                    }, t._handleDismiss = function (e) {
                        return function (t) {
                            t && t.preventDefault(), e.close(this)
                        }
                    }, i(t, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.3"
                        }
                    }]), t
                }();
            return e(document).on(n.CLICK_DATA_API, '[data-dismiss="alert"]', o._handleDismiss(new o)), e.fn.alert = o._jQueryInterface, e.fn.alert.Constructor = o, e.fn.alert.noConflict = function () {
                return e.fn.alert = t, o._jQueryInterface
            }, o
        }(t), c = function (e) {
            var t = "button", n = e.fn[t], r = {ACTIVE: "active", BUTTON: "btn", FOCUS: "focus"}, o = {
                DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                DATA_TOGGLE: '[data-toggle="buttons"]',
                INPUT: "input",
                ACTIVE: ".active",
                BUTTON: ".btn"
            }, a = {
                CLICK_DATA_API: "click.bs.button.data-api",
                FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
            }, s = function () {
                function t(e) {
                    this._element = e
                }

                var n = t.prototype;
                return n.toggle = function () {
                    var t = !0, n = !0, i = e(this._element).closest(o.DATA_TOGGLE)[0];
                    if (i) {
                        var a = this._element.querySelector(o.INPUT);
                        if (a) {
                            if ("radio" === a.type) if (a.checked && this._element.classList.contains(r.ACTIVE)) t = !1; else {
                                var s = i.querySelector(o.ACTIVE);
                                s && e(s).removeClass(r.ACTIVE)
                            }
                            if (t) {
                                if (a.hasAttribute("disabled") || i.hasAttribute("disabled") || a.classList.contains("disabled") || i.classList.contains("disabled")) return;
                                a.checked = !this._element.classList.contains(r.ACTIVE), e(a).trigger("change")
                            }
                            a.focus(), n = !1
                        }
                    }
                    n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(r.ACTIVE)), t && e(this._element).toggleClass(r.ACTIVE)
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.button"), this._element = null
                }, t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = e(this).data("bs.button");
                        r || (r = new t(this), e(this).data("bs.button", r)), "toggle" === n && r[n]()
                    })
                }, i(t, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.3"
                    }
                }]), t
            }();
            return e(document).on(a.CLICK_DATA_API, o.DATA_TOGGLE_CARROT, function (t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass(r.BUTTON) || (n = e(n).closest(o.BUTTON)), s._jQueryInterface.call(e(n), "toggle")
            }).on(a.FOCUS_BLUR_DATA_API, o.DATA_TOGGLE_CARROT, function (t) {
                var n = e(t.target).closest(o.BUTTON)[0];
                e(n).toggleClass(r.FOCUS, /^focus(in)?$/.test(t.type))
            }), e.fn[t] = s._jQueryInterface, e.fn[t].Constructor = s, e.fn[t].noConflict = function () {
                return e.fn[t] = n, s._jQueryInterface
            }, s
        }(t), u = function (e) {
            var t = "carousel", n = "bs.carousel", r = "." + n, o = e.fn[t],
                l = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, c = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                }, u = {NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right"}, f = {
                    SLIDE: "slide" + r,
                    SLID: "slid" + r,
                    KEYDOWN: "keydown" + r,
                    MOUSEENTER: "mouseenter" + r,
                    MOUSELEAVE: "mouseleave" + r,
                    TOUCHEND: "touchend" + r,
                    LOAD_DATA_API: "load.bs.carousel.data-api",
                    CLICK_DATA_API: "click.bs.carousel.data-api"
                }, d = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "carousel-item-right",
                    LEFT: "carousel-item-left",
                    NEXT: "carousel-item-next",
                    PREV: "carousel-item-prev",
                    ITEM: "carousel-item"
                }, p = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                }, h = function () {
                    function o(t, n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = this._element.querySelector(p.INDICATORS), this._addEventListeners()
                    }

                    var h = o.prototype;
                    return h.next = function () {
                        this._isSliding || this._slide(u.NEXT)
                    }, h.nextWhenVisible = function () {
                        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                    }, h.prev = function () {
                        this._isSliding || this._slide(u.PREV)
                    }, h.pause = function (e) {
                        e || (this._isPaused = !0), this._element.querySelector(p.NEXT_PREV) && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, h.cycle = function (e) {
                        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, h.to = function (t) {
                        var n = this;
                        this._activeElement = this._element.querySelector(p.ACTIVE_ITEM);
                        var r = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(f.SLID, function () {
                            return n.to(t)
                        }); else {
                            if (r === t) return this.pause(), void this.cycle();
                            var i = t > r ? u.NEXT : u.PREV;
                            this._slide(i, this._items[t])
                        }
                    }, h.dispose = function () {
                        e(this._element).off(r), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, h._getConfig = function (e) {
                        return e = a({}, l, e), s.typeCheckConfig(t, e, c), e
                    }, h._addEventListeners = function () {
                        var t = this;
                        this._config.keyboard && e(this._element).on(f.KEYDOWN, function (e) {
                            return t._keydown(e)
                        }), "hover" === this._config.pause && (e(this._element).on(f.MOUSEENTER, function (e) {
                            return t.pause(e)
                        }).on(f.MOUSELEAVE, function (e) {
                            return t.cycle(e)
                        }), "ontouchstart" in document.documentElement && e(this._element).on(f.TOUCHEND, function () {
                            t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                                return t.cycle(e)
                            }, 500 + t._config.interval)
                        }))
                    }, h._keydown = function (e) {
                        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                            case 37:
                                e.preventDefault(), this.prev();
                                break;
                            case 39:
                                e.preventDefault(), this.next()
                        }
                    }, h._getItemIndex = function (e) {
                        return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(p.ITEM)) : [], this._items.indexOf(e)
                    }, h._getItemByDirection = function (e, t) {
                        var n = e === u.NEXT, r = e === u.PREV, i = this._getItemIndex(t), o = this._items.length - 1,
                            a = r && 0 === i || n && i === o;
                        if (a && !this._config.wrap) return t;
                        var s = e === u.PREV ? -1 : 1, l = (i + s) % this._items.length;
                        return -1 === l ? this._items[this._items.length - 1] : this._items[l]
                    }, h._triggerSlideEvent = function (t, n) {
                        var r = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(p.ACTIVE_ITEM)),
                            o = e.Event(f.SLIDE, {relatedTarget: t, direction: n, from: i, to: r});
                        return e(this._element).trigger(o), o
                    }, h._setActiveIndicatorElement = function (t) {
                        if (this._indicatorsElement) {
                            var n = [].slice.call(this._indicatorsElement.querySelectorAll(p.ACTIVE));
                            e(n).removeClass(d.ACTIVE);
                            var r = this._indicatorsElement.children[this._getItemIndex(t)];
                            r && e(r).addClass(d.ACTIVE)
                        }
                    }, h._slide = function (t, n) {
                        var r, i, o, a = this, l = this._element.querySelector(p.ACTIVE_ITEM), c = this._getItemIndex(l),
                            h = n || l && this._getItemByDirection(t, l), g = this._getItemIndex(h),
                            m = Boolean(this._interval);
                        if (t === u.NEXT ? (r = d.LEFT, i = d.NEXT, o = u.LEFT) : (r = d.RIGHT, i = d.PREV, o = u.RIGHT), h && e(h).hasClass(d.ACTIVE)) this._isSliding = !1; else {
                            var v = this._triggerSlideEvent(h, o);
                            if (!v.isDefaultPrevented() && l && h) {
                                this._isSliding = !0, m && this.pause(), this._setActiveIndicatorElement(h);
                                var b = e.Event(f.SLID, {relatedTarget: h, direction: o, from: c, to: g});
                                if (e(this._element).hasClass(d.SLIDE)) {
                                    e(h).addClass(i), s.reflow(h), e(l).addClass(r), e(h).addClass(r);
                                    var y = s.getTransitionDurationFromElement(l);
                                    e(l).one(s.TRANSITION_END, function () {
                                        e(h).removeClass(r + " " + i).addClass(d.ACTIVE), e(l).removeClass(d.ACTIVE + " " + i + " " + r), a._isSliding = !1, setTimeout(function () {
                                            return e(a._element).trigger(b)
                                        }, 0)
                                    }).emulateTransitionEnd(y)
                                } else e(l).removeClass(d.ACTIVE), e(h).addClass(d.ACTIVE), this._isSliding = !1, e(this._element).trigger(b);
                                m && this.cycle()
                            }
                        }
                    }, o._jQueryInterface = function (t) {
                        return this.each(function () {
                            var r = e(this).data(n), i = a({}, l, e(this).data());
                            "object" == typeof t && (i = a({}, i, t));
                            var s = "string" == typeof t ? t : i.slide;
                            if (r || (r = new o(this, i), e(this).data(n, r)), "number" == typeof t) r.to(t); else if ("string" == typeof s) {
                                if (void 0 === r[s]) throw new TypeError('No method named "' + s + '"');
                                r[s]()
                            } else i.interval && (r.pause(), r.cycle())
                        })
                    }, o._dataApiClickHandler = function (t) {
                        var r = s.getSelectorFromElement(this);
                        if (r) {
                            var i = e(r)[0];
                            if (i && e(i).hasClass(d.CAROUSEL)) {
                                var l = a({}, e(i).data(), e(this).data()), c = this.getAttribute("data-slide-to");
                                c && (l.interval = !1), o._jQueryInterface.call(e(i), l), c && e(i).data(n).to(c), t.preventDefault()
                            }
                        }
                    }, i(o, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default", get: function () {
                            return l
                        }
                    }]), o
                }();
            return e(document).on(f.CLICK_DATA_API, p.DATA_SLIDE, h._dataApiClickHandler), e(window).on(f.LOAD_DATA_API, function () {
                for (var t = [].slice.call(document.querySelectorAll(p.DATA_RIDE)), n = 0, r = t.length; n < r; n++) {
                    var i = e(t[n]);
                    h._jQueryInterface.call(i, i.data())
                }
            }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
                return e.fn[t] = o, h._jQueryInterface
            }, h
        }(t), f = function (e) {
            var t = "collapse", n = "bs.collapse", r = e.fn[t], o = {toggle: !0, parent: ""},
                l = {toggle: "boolean", parent: "(string|element)"}, c = {
                    SHOW: "show.bs.collapse",
                    SHOWN: "shown.bs.collapse",
                    HIDE: "hide.bs.collapse",
                    HIDDEN: "hidden.bs.collapse",
                    CLICK_DATA_API: "click.bs.collapse.data-api"
                }, u = {SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed"},
                f = {WIDTH: "width", HEIGHT: "height"},
                d = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, p = function () {
                    function r(t, n) {
                        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var r = [].slice.call(document.querySelectorAll(d.DATA_TOGGLE)), i = 0, o = r.length; i < o; i++) {
                            var a = r[i], l = s.getSelectorFromElement(a),
                                c = [].slice.call(document.querySelectorAll(l)).filter(function (e) {
                                    return e === t
                                });
                            null !== l && c.length > 0 && (this._selector = l, this._triggerArray.push(a))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }

                    var p = r.prototype;
                    return p.toggle = function () {
                        e(this._element).hasClass(u.SHOW) ? this.hide() : this.show()
                    }, p.show = function () {
                        var t, i, o = this;
                        if (!(this._isTransitioning || e(this._element).hasClass(u.SHOW) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(d.ACTIVES)).filter(function (e) {
                            return e.getAttribute("data-parent") === o._config.parent
                        })).length && (t = null), t && (i = e(t).not(this._selector).data(n)) && i._isTransitioning))) {
                            var a = e.Event(c.SHOW);
                            if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                                t && (r._jQueryInterface.call(e(t).not(this._selector), "hide"), i || e(t).data(n, null));
                                var l = this._getDimension();
                                e(this._element).removeClass(u.COLLAPSE).addClass(u.COLLAPSING), this._element.style[l] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(u.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var f = l[0].toUpperCase() + l.slice(1), p = "scroll" + f,
                                    h = s.getTransitionDurationFromElement(this._element);
                                e(this._element).one(s.TRANSITION_END, function () {
                                    e(o._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).addClass(u.SHOW), o._element.style[l] = "", o.setTransitioning(!1), e(o._element).trigger(c.SHOWN)
                                }).emulateTransitionEnd(h), this._element.style[l] = this._element[p] + "px"
                            }
                        }
                    }, p.hide = function () {
                        var t = this;
                        if (!this._isTransitioning && e(this._element).hasClass(u.SHOW)) {
                            var n = e.Event(c.HIDE);
                            if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var r = this._getDimension();
                                this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", s.reflow(this._element), e(this._element).addClass(u.COLLAPSING).removeClass(u.COLLAPSE).removeClass(u.SHOW);
                                var i = this._triggerArray.length;
                                if (i > 0) for (var o = 0; o < i; o++) {
                                    var a = this._triggerArray[o], l = s.getSelectorFromElement(a);
                                    if (null !== l) {
                                        var f = e([].slice.call(document.querySelectorAll(l)));
                                        f.hasClass(u.SHOW) || e(a).addClass(u.COLLAPSED).attr("aria-expanded", !1)
                                    }
                                }
                                this.setTransitioning(!0), this._element.style[r] = "";
                                var d = s.getTransitionDurationFromElement(this._element);
                                e(this._element).one(s.TRANSITION_END, function () {
                                    t.setTransitioning(!1), e(t._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).trigger(c.HIDDEN)
                                }).emulateTransitionEnd(d)
                            }
                        }
                    }, p.setTransitioning = function (e) {
                        this._isTransitioning = e
                    }, p.dispose = function () {
                        e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, p._getConfig = function (e) {
                        return (e = a({}, o, e)).toggle = Boolean(e.toggle), s.typeCheckConfig(t, e, l), e
                    }, p._getDimension = function () {
                        var t = e(this._element).hasClass(f.WIDTH);
                        return t ? f.WIDTH : f.HEIGHT
                    }, p._getParent = function () {
                        var t = this, n = null;
                        s.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                        var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            o = [].slice.call(n.querySelectorAll(i));
                        return e(o).each(function (e, n) {
                            t._addAriaAndCollapsedClass(r._getTargetFromElement(n), [n])
                        }), n
                    }, p._addAriaAndCollapsedClass = function (t, n) {
                        if (t) {
                            var r = e(t).hasClass(u.SHOW);
                            n.length && e(n).toggleClass(u.COLLAPSED, !r).attr("aria-expanded", r)
                        }
                    }, r._getTargetFromElement = function (e) {
                        var t = s.getSelectorFromElement(e);
                        return t ? document.querySelector(t) : null
                    }, r._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = e(this), s = i.data(n), l = a({}, o, i.data(), "object" == typeof t && t ? t : {});
                            if (!s && l.toggle && /show|hide/.test(t) && (l.toggle = !1), s || (s = new r(this, l), i.data(n, s)), "string" == typeof t) {
                                if (void 0 === s[t]) throw new TypeError('No method named "' + t + '"');
                                s[t]()
                            }
                        })
                    }, i(r, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default", get: function () {
                            return o
                        }
                    }]), r
                }();
            return e(document).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function (t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var r = e(this), i = s.getSelectorFromElement(this), o = [].slice.call(document.querySelectorAll(i));
                e(o).each(function () {
                    var t = e(this), i = t.data(n), o = i ? "toggle" : r.data();
                    p._jQueryInterface.call(t, o)
                })
            }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
                return e.fn[t] = r, p._jQueryInterface
            }, p
        }(t), d = function (e) {
            var t = "dropdown", r = "bs.dropdown", o = "." + r, l = e.fn[t], c = new RegExp("38|40|27"), u = {
                HIDE: "hide" + o,
                HIDDEN: "hidden" + o,
                SHOW: "show" + o,
                SHOWN: "shown" + o,
                CLICK: "click" + o,
                CLICK_DATA_API: "click.bs.dropdown.data-api",
                KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
            }, f = {
                DISABLED: "disabled",
                SHOW: "show",
                DROPUP: "dropup",
                DROPRIGHT: "dropright",
                DROPLEFT: "dropleft",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                POSITION_STATIC: "position-static"
            }, d = {
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                MENU: ".dropdown-menu",
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
            }, p = {
                TOP: "top-start",
                TOPEND: "top-end",
                BOTTOM: "bottom-start",
                BOTTOMEND: "bottom-end",
                RIGHT: "right-start",
                RIGHTEND: "right-end",
                LEFT: "left-start",
                LEFTEND: "left-end"
            }, h = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, g = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            }, m = function () {
                function l(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }

                var m = l.prototype;
                return m.toggle = function () {
                    if (!this._element.disabled && !e(this._element).hasClass(f.DISABLED)) {
                        var t = l._getParentFromElement(this._element), r = e(this._menu).hasClass(f.SHOW);
                        if (l._clearMenus(), !r) {
                            var i = {relatedTarget: this._element}, o = e.Event(u.SHOW, i);
                            if (e(t).trigger(o), !o.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var a = this._element;
                                    "parent" === this._config.reference ? a = t : s.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(f.POSITION_STATIC), this._popper = new n(a, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === e(t).closest(d.NAVBAR_NAV).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(f.SHOW), e(t).toggleClass(f.SHOW).trigger(e.Event(u.SHOWN, i))
                            }
                        }
                    }
                }, m.dispose = function () {
                    e.removeData(this._element, r), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, m.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, m._addEventListeners = function () {
                    var t = this;
                    e(this._element).on(u.CLICK, function (e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle()
                    })
                }, m._getConfig = function (n) {
                    return n = a({}, this.constructor.Default, e(this._element).data(), n), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
                }, m._getMenuElement = function () {
                    if (!this._menu) {
                        var e = l._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(d.MENU))
                    }
                    return this._menu
                }, m._getPlacement = function () {
                    var t = e(this._element.parentNode), n = p.BOTTOM;
                    return t.hasClass(f.DROPUP) ? (n = p.TOP, e(this._menu).hasClass(f.MENURIGHT) && (n = p.TOPEND)) : t.hasClass(f.DROPRIGHT) ? n = p.RIGHT : t.hasClass(f.DROPLEFT) ? n = p.LEFT : e(this._menu).hasClass(f.MENURIGHT) && (n = p.BOTTOMEND), n
                }, m._detectNavbar = function () {
                    return e(this._element).closest(".navbar").length > 0
                }, m._getPopperConfig = function () {
                    var e = this, t = {};
                    "function" == typeof this._config.offset ? t.fn = function (t) {
                        return t.offsets = a({}, t.offsets, e._config.offset(t.offsets) || {}), t
                    } : t.offset = this._config.offset;
                    var n = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: t,
                            flip: {enabled: this._config.flip},
                            preventOverflow: {boundariesElement: this._config.boundary}
                        }
                    };
                    return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: !1}), n
                }, l._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data(r), i = "object" == typeof t ? t : null;
                        if (n || (n = new l(this, i), e(this).data(r, n)), "string" == typeof t) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, l._clearMenus = function (t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = [].slice.call(document.querySelectorAll(d.DATA_TOGGLE)), i = 0, o = n.length; i < o; i++) {
                        var a = l._getParentFromElement(n[i]), s = e(n[i]).data(r), c = {relatedTarget: n[i]};
                        if (t && "click" === t.type && (c.clickEvent = t), s) {
                            var p = s._menu;
                            if (e(a).hasClass(f.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(a, t.target))) {
                                var h = e.Event(u.HIDE, c);
                                e(a).trigger(h), h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[i].setAttribute("aria-expanded", "false"), e(p).removeClass(f.SHOW), e(a).removeClass(f.SHOW).trigger(e.Event(u.HIDDEN, c)))
                            }
                        }
                    }
                }, l._getParentFromElement = function (e) {
                    var t, n = s.getSelectorFromElement(e);
                    return n && (t = document.querySelector(n)), t || e.parentNode
                }, l._dataApiKeydownHandler = function (t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(d.MENU).length)) : c.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(f.DISABLED))) {
                        var n = l._getParentFromElement(this), r = e(n).hasClass(f.SHOW);
                        if ((r || 27 === t.which && 32 === t.which) && (!r || 27 !== t.which && 32 !== t.which)) {
                            var i = [].slice.call(n.querySelectorAll(d.VISIBLE_ITEMS));
                            if (0 !== i.length) {
                                var o = i.indexOf(t.target);
                                38 === t.which && o > 0 && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var a = n.querySelector(d.DATA_TOGGLE);
                                e(a).trigger("focus")
                            }
                            e(this).trigger("click")
                        }
                    }
                }, i(l, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.3"
                    }
                }, {
                    key: "Default", get: function () {
                        return h
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return g
                    }
                }]), l
            }();
            return e(document).on(u.KEYDOWN_DATA_API, d.DATA_TOGGLE, m._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, d.MENU, m._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, m._clearMenus).on(u.CLICK_DATA_API, d.DATA_TOGGLE, function (t) {
                t.preventDefault(), t.stopPropagation(), m._jQueryInterface.call(e(this), "toggle")
            }).on(u.CLICK_DATA_API, d.FORM_CHILD, function (e) {
                e.stopPropagation()
            }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
                return e.fn[t] = l, m._jQueryInterface
            }, m
        }(t), p = function (e) {
            var t = "modal", n = ".bs.modal", r = e.fn.modal, o = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
                l = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, c = {
                    HIDE: "hide.bs.modal",
                    HIDDEN: "hidden.bs.modal",
                    SHOW: "show.bs.modal",
                    SHOWN: "shown.bs.modal",
                    FOCUSIN: "focusin.bs.modal",
                    RESIZE: "resize.bs.modal",
                    CLICK_DISMISS: "click.dismiss.bs.modal",
                    KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                    MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                    MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                    CLICK_DATA_API: "click.bs.modal.data-api"
                }, u = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    SHOW: "show"
                }, f = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top"
                }, d = function () {
                    function r(e, t) {
                        this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(f.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                    }

                    var d = r.prototype;
                    return d.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }, d.show = function (t) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            e(this._element).hasClass(u.FADE) && (this._isTransitioning = !0);
                            var r = e.Event(c.SHOW, {relatedTarget: t});
                            e(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(u.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(c.CLICK_DISMISS, f.DATA_DISMISS, function (e) {
                                return n.hide(e)
                            }), e(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
                                e(n._element).one(c.MOUSEUP_DISMISS, function (t) {
                                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function () {
                                return n._showElement(t)
                            }))
                        }
                    }, d.hide = function (t) {
                        var n = this;
                        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                            var r = e.Event(c.HIDE);
                            if (e(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) {
                                this._isShown = !1;
                                var i = e(this._element).hasClass(u.FADE);
                                if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(c.FOCUSIN), e(this._element).removeClass(u.SHOW), e(this._element).off(c.CLICK_DISMISS), e(this._dialog).off(c.MOUSEDOWN_DISMISS), i) {
                                    var o = s.getTransitionDurationFromElement(this._element);
                                    e(this._element).one(s.TRANSITION_END, function (e) {
                                        return n._hideModal(e)
                                    }).emulateTransitionEnd(o)
                                } else this._hideModal()
                            }
                        }
                    }, d.dispose = function () {
                        e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, d.handleUpdate = function () {
                        this._adjustDialog()
                    }, d._getConfig = function (e) {
                        return e = a({}, o, e), s.typeCheckConfig(t, e, l), e
                    }, d._showElement = function (t) {
                        var n = this, r = e(this._element).hasClass(u.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, r && s.reflow(this._element), e(this._element).addClass(u.SHOW), this._config.focus && this._enforceFocus();
                        var i = e.Event(c.SHOWN, {relatedTarget: t}), o = function () {
                            n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(i)
                        };
                        if (r) {
                            var a = s.getTransitionDurationFromElement(this._element);
                            e(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                        } else o()
                    }, d._enforceFocus = function () {
                        var t = this;
                        e(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
                            document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                        })
                    }, d._setEscapeEvent = function () {
                        var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(c.KEYDOWN_DISMISS, function (e) {
                            27 === e.which && (e.preventDefault(), t.hide())
                        }) : this._isShown || e(this._element).off(c.KEYDOWN_DISMISS)
                    }, d._setResizeEvent = function () {
                        var t = this;
                        this._isShown ? e(window).on(c.RESIZE, function (e) {
                            return t.handleUpdate(e)
                        }) : e(window).off(c.RESIZE)
                    }, d._hideModal = function () {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                            e(document.body).removeClass(u.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(c.HIDDEN)
                        })
                    }, d._removeBackdrop = function () {
                        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                    }, d._showBackdrop = function (t) {
                        var n = this, r = e(this._element).hasClass(u.FADE) ? u.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = u.BACKDROP, r && this._backdrop.classList.add(r), e(this._backdrop).appendTo(document.body), e(this._element).on(c.CLICK_DISMISS, function (e) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                            }), r && s.reflow(this._backdrop), e(this._backdrop).addClass(u.SHOW), !t) return;
                            if (!r) return void t();
                            var i = s.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(i)
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass(u.SHOW);
                            var o = function () {
                                n._removeBackdrop(), t && t()
                            };
                            if (e(this._element).hasClass(u.FADE)) {
                                var a = s.getTransitionDurationFromElement(this._backdrop);
                                e(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                            } else o()
                        } else t && t()
                    }, d._adjustDialog = function () {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, d._resetAdjustments = function () {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, d._checkScrollbar = function () {
                        var e = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, d._setScrollbar = function () {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            var n = [].slice.call(document.querySelectorAll(f.FIXED_CONTENT)),
                                r = [].slice.call(document.querySelectorAll(f.STICKY_CONTENT));
                            e(n).each(function (n, r) {
                                var i = r.style.paddingRight, o = e(r).css("padding-right");
                                e(r).data("padding-right", i).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                            }), e(r).each(function (n, r) {
                                var i = r.style.marginRight, o = e(r).css("margin-right");
                                e(r).data("margin-right", i).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                            });
                            var i = document.body.style.paddingRight, o = e(document.body).css("padding-right");
                            e(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                        }
                    }, d._resetScrollbar = function () {
                        var t = [].slice.call(document.querySelectorAll(f.FIXED_CONTENT));
                        e(t).each(function (t, n) {
                            var r = e(n).data("padding-right");
                            e(n).removeData("padding-right"), n.style.paddingRight = r || ""
                        });
                        var n = [].slice.call(document.querySelectorAll("" + f.STICKY_CONTENT));
                        e(n).each(function (t, n) {
                            var r = e(n).data("margin-right");
                            void 0 !== r && e(n).css("margin-right", r).removeData("margin-right")
                        });
                        var r = e(document.body).data("padding-right");
                        e(document.body).removeData("padding-right"), document.body.style.paddingRight = r || ""
                    }, d._getScrollbarWidth = function () {
                        var e = document.createElement("div");
                        e.className = u.SCROLLBAR_MEASURER, document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t
                    }, r._jQueryInterface = function (t, n) {
                        return this.each(function () {
                            var i = e(this).data("bs.modal"),
                                s = a({}, o, e(this).data(), "object" == typeof t && t ? t : {});
                            if (i || (i = new r(this, s), e(this).data("bs.modal", i)), "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t](n)
                            } else s.show && i.show(n)
                        })
                    }, i(r, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default", get: function () {
                            return o
                        }
                    }]), r
                }();
            return e(document).on(c.CLICK_DATA_API, f.DATA_TOGGLE, function (t) {
                var n, r = this, i = s.getSelectorFromElement(this);
                i && (n = document.querySelector(i));
                var o = e(n).data("bs.modal") ? "toggle" : a({}, e(n).data(), e(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                var l = e(n).one(c.SHOW, function (t) {
                    t.isDefaultPrevented() || l.one(c.HIDDEN, function () {
                        e(r).is(":visible") && r.focus()
                    })
                });
                d._jQueryInterface.call(e(n), o, this)
            }), e.fn.modal = d._jQueryInterface, e.fn.modal.Constructor = d, e.fn.modal.noConflict = function () {
                return e.fn.modal = r, d._jQueryInterface
            }, d
        }(t), h = function (e) {
            var t = "tooltip", r = ".bs.tooltip", o = e.fn[t], l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), c = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                }, u = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, f = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent"
                }, d = {SHOW: "show", OUT: "out"}, p = {
                    HIDE: "hide" + r,
                    HIDDEN: "hidden" + r,
                    SHOW: "show" + r,
                    SHOWN: "shown" + r,
                    INSERTED: "inserted" + r,
                    CLICK: "click" + r,
                    FOCUSIN: "focusin" + r,
                    FOCUSOUT: "focusout" + r,
                    MOUSEENTER: "mouseenter" + r,
                    MOUSELEAVE: "mouseleave" + r
                }, h = {FADE: "fade", SHOW: "show"},
                g = {TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow"},
                m = {HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual"}, v = function () {
                    function o(e, t) {
                        if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                    }

                    var v = o.prototype;
                    return v.enable = function () {
                        this._isEnabled = !0
                    }, v.disable = function () {
                        this._isEnabled = !1
                    }, v.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled
                    }, v.toggle = function (t) {
                        if (this._isEnabled) if (t) {
                            var n = this.constructor.DATA_KEY, r = e(t.currentTarget).data(n);
                            r || (r = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, r)), r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
                        } else {
                            if (e(this.getTipElement()).hasClass(h.SHOW)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, v.dispose = function () {
                        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, v.show = function () {
                        var t = this;
                        if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var r = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(r);
                            var i = e.contains(this.element.ownerDocument.documentElement, this.element);
                            if (r.isDefaultPrevented() || !i) return;
                            var o = this.getTipElement(), a = s.getUID(this.constructor.NAME);
                            o.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(o).addClass(h.FADE);
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                c = this._getAttachment(l);
                            this.addAttachmentClass(c);
                            var u = !1 === this.config.container ? document.body : e(document).find(this.config.container);
                            e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, {
                                placement: c,
                                modifiers: {
                                    offset: {offset: this.config.offset},
                                    flip: {behavior: this.config.fallbackPlacement},
                                    arrow: {element: g.ARROW},
                                    preventOverflow: {boundariesElement: this.config.boundary}
                                },
                                onCreate: function (e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                },
                                onUpdate: function (e) {
                                    t._handlePopperPlacementChange(e)
                                }
                            }), e(o).addClass(h.SHOW), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                            var f = function () {
                                t.config.animation && t._fixTransition();
                                var n = t._hoverState;
                                t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === d.OUT && t._leave(null, t)
                            };
                            if (e(this.tip).hasClass(h.FADE)) {
                                var p = s.getTransitionDurationFromElement(this.tip);
                                e(this.tip).one(s.TRANSITION_END, f).emulateTransitionEnd(p)
                            } else f()
                        }
                    }, v.hide = function (t) {
                        var n = this, r = this.getTipElement(), i = e.Event(this.constructor.Event.HIDE), o = function () {
                            n._hoverState !== d.SHOW && r.parentNode && r.parentNode.removeChild(r), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                        };
                        if (e(this.element).trigger(i), !i.isDefaultPrevented()) {
                            if (e(r).removeClass(h.SHOW), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[m.CLICK] = !1, this._activeTrigger[m.FOCUS] = !1, this._activeTrigger[m.HOVER] = !1, e(this.tip).hasClass(h.FADE)) {
                                var a = s.getTransitionDurationFromElement(r);
                                e(r).one(s.TRANSITION_END, o).emulateTransitionEnd(a)
                            } else o();
                            this._hoverState = ""
                        }
                    }, v.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, v.isWithContent = function () {
                        return Boolean(this.getTitle())
                    }, v.addAttachmentClass = function (t) {
                        e(this.getTipElement()).addClass("bs-tooltip-" + t)
                    }, v.getTipElement = function () {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, v.setContent = function () {
                        var t = this.getTipElement();
                        this.setElementContent(e(t.querySelectorAll(g.TOOLTIP_INNER)), this.getTitle()), e(t).removeClass(h.FADE + " " + h.SHOW)
                    }, v.setElementContent = function (t, n) {
                        var r = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? r ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[r ? "html" : "text"](n)
                    }, v.getTitle = function () {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                    }, v._getAttachment = function (e) {
                        return u[e.toUpperCase()]
                    }, v._setListeners = function () {
                        var t = this, n = this.config.trigger.split(" ");
                        n.forEach(function (n) {
                            if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                return t.toggle(e)
                            }); else if (n !== m.MANUAL) {
                                var r = n === m.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    i = n === m.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(r, t.config.selector, function (e) {
                                    return t._enter(e)
                                }).on(i, t.config.selector, function (e) {
                                    return t._leave(e)
                                })
                            }
                            e(t.element).closest(".modal").on("hide.bs.modal", function () {
                                return t.hide()
                            })
                        }), this.config.selector ? this.config = a({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, v._fixTitle = function () {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, v._enter = function (t, n) {
                        var r = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(r)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(r, n)), t && (n._activeTrigger["focusin" === t.type ? m.FOCUS : m.HOVER] = !0), e(n.getTipElement()).hasClass(h.SHOW) || n._hoverState === d.SHOW ? n._hoverState = d.SHOW : (clearTimeout(n._timeout), n._hoverState = d.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                            n._hoverState === d.SHOW && n.show()
                        }, n.config.delay.show) : n.show())
                    }, v._leave = function (t, n) {
                        var r = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(r)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(r, n)), t && (n._activeTrigger["focusout" === t.type ? m.FOCUS : m.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                            n._hoverState === d.OUT && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, v._isWithActiveTrigger = function () {
                        for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                        return !1
                    }, v._getConfig = function (n) {
                        return "number" == typeof (n = a({}, this.constructor.Default, e(this.element).data(), "object" == typeof n && n ? n : {})).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, v._getDelegateConfig = function () {
                        var e = {};
                        if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e
                    }, v._cleanTipClass = function () {
                        var t = e(this.getTipElement()), n = t.attr("class").match(l);
                        null !== n && n.length && t.removeClass(n.join(""))
                    }, v._handlePopperPlacementChange = function (e) {
                        var t = e.instance;
                        this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                    }, v._fixTransition = function () {
                        var t = this.getTipElement(), n = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(h.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, o._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = e(this).data("bs.tooltip"), r = "object" == typeof t && t;
                            if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, r), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, i(o, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default", get: function () {
                            return f
                        }
                    }, {
                        key: "NAME", get: function () {
                            return t
                        }
                    }, {
                        key: "DATA_KEY", get: function () {
                            return "bs.tooltip"
                        }
                    }, {
                        key: "Event", get: function () {
                            return p
                        }
                    }, {
                        key: "EVENT_KEY", get: function () {
                            return r
                        }
                    }, {
                        key: "DefaultType", get: function () {
                            return c
                        }
                    }]), o
                }();
            return e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
                return e.fn[t] = o, v._jQueryInterface
            }, v
        }(t), g = function (e) {
            var t = "popover", n = ".bs.popover", r = e.fn[t], o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                s = a({}, h.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }), l = a({}, h.DefaultType, {content: "(string|element|function)"}), c = {FADE: "fade", SHOW: "show"},
                u = {TITLE: ".popover-header", CONTENT: ".popover-body"}, f = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                }, d = function (r) {
                    function a() {
                        return r.apply(this, arguments) || this
                    }

                    !function (e, t) {
                        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
                    }(a, r);
                    var d = a.prototype;
                    return d.isWithContent = function () {
                        return this.getTitle() || this._getContent()
                    }, d.addAttachmentClass = function (t) {
                        e(this.getTipElement()).addClass("bs-popover-" + t)
                    }, d.getTipElement = function () {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, d.setContent = function () {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(u.TITLE), this.getTitle());
                        var n = this._getContent();
                        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(u.CONTENT), n), t.removeClass(c.FADE + " " + c.SHOW)
                    }, d._getContent = function () {
                        return this.element.getAttribute("data-content") || this.config.content
                    }, d._cleanTipClass = function () {
                        var t = e(this.getTipElement()), n = t.attr("class").match(o);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, a._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = e(this).data("bs.popover"), r = "object" == typeof t ? t : null;
                            if ((n || !/destroy|hide/.test(t)) && (n || (n = new a(this, r), e(this).data("bs.popover", n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, i(a, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default", get: function () {
                            return s
                        }
                    }, {
                        key: "NAME", get: function () {
                            return t
                        }
                    }, {
                        key: "DATA_KEY", get: function () {
                            return "bs.popover"
                        }
                    }, {
                        key: "Event", get: function () {
                            return f
                        }
                    }, {
                        key: "EVENT_KEY", get: function () {
                            return n
                        }
                    }, {
                        key: "DefaultType", get: function () {
                            return l
                        }
                    }]), a
                }(h);
            return e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
                return e.fn[t] = r, d._jQueryInterface
            }, d
        }(t), m = function (e) {
            var t = "scrollspy", n = e.fn[t], r = {offset: 10, method: "auto", target: ""},
                o = {offset: "number", method: "string", target: "(string|element)"}, l = {
                    ACTIVATE: "activate.bs.scrollspy",
                    SCROLL: "scroll.bs.scrollspy",
                    LOAD_DATA_API: "load.bs.scrollspy.data-api"
                }, c = {DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active"}, u = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                }, f = {OFFSET: "offset", POSITION: "position"}, d = function () {
                    function n(t, n) {
                        var r = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(l.SCROLL, function (e) {
                            return r._process(e)
                        }), this.refresh(), this._process()
                    }

                    var d = n.prototype;
                    return d.refresh = function () {
                        var t = this, n = this._scrollElement === this._scrollElement.window ? f.OFFSET : f.POSITION,
                            r = "auto" === this._config.method ? n : this._config.method,
                            i = r === f.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                        var o = [].slice.call(document.querySelectorAll(this._selector));
                        o.map(function (t) {
                            var n, o = s.getSelectorFromElement(t);
                            if (o && (n = document.querySelector(o)), n) {
                                var a = n.getBoundingClientRect();
                                if (a.width || a.height) return [e(n)[r]().top + i, o]
                            }
                            return null
                        }).filter(function (e) {
                            return e
                        }).sort(function (e, t) {
                            return e[0] - t[0]
                        }).forEach(function (e) {
                            t._offsets.push(e[0]), t._targets.push(e[1])
                        })
                    }, d.dispose = function () {
                        e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, d._getConfig = function (n) {
                        if ("string" != typeof (n = a({}, r, "object" == typeof n && n ? n : {})).target) {
                            var i = e(n.target).attr("id");
                            i || (i = s.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i
                        }
                        return s.typeCheckConfig(t, n, o), n
                    }, d._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, d._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, d._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, d._process = function () {
                        var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                            n = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(), e >= n) {
                            var r = this._targets[this._targets.length - 1];
                            this._activeTarget !== r && this._activate(r)
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var i = this._offsets.length, o = i; o--;) {
                                var a = this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]);
                                a && this._activate(this._targets[o])
                            }
                        }
                    }, d._activate = function (t) {
                        this._activeTarget = t, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function (e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var r = e([].slice.call(document.querySelectorAll(n.join(","))));
                        r.hasClass(c.DROPDOWN_ITEM) ? (r.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE), r.addClass(c.ACTIVE)) : (r.addClass(c.ACTIVE), r.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(c.ACTIVE), r.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(c.ACTIVE)), e(this._scrollElement).trigger(l.ACTIVATE, {relatedTarget: t})
                    }, d._clear = function () {
                        var t = [].slice.call(document.querySelectorAll(this._selector));
                        e(t).filter(u.ACTIVE).removeClass(c.ACTIVE)
                    }, n._jQueryInterface = function (t) {
                        return this.each(function () {
                            var r = e(this).data("bs.scrollspy"), i = "object" == typeof t && t;
                            if (r || (r = new n(this, i), e(this).data("bs.scrollspy", r)), "string" == typeof t) {
                                if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                r[t]()
                            }
                        })
                    }, i(n, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.3"
                        }
                    }, {
                        key: "Default", get: function () {
                            return r
                        }
                    }]), n
                }();
            return e(window).on(l.LOAD_DATA_API, function () {
                for (var t = [].slice.call(document.querySelectorAll(u.DATA_SPY)), n = t.length, r = n; r--;) {
                    var i = e(t[r]);
                    d._jQueryInterface.call(i, i.data())
                }
            }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
                return e.fn[t] = n, d._jQueryInterface
            }, d
        }(t), v = function (e) {
            var t = e.fn.tab, n = {
                    HIDE: "hide.bs.tab",
                    HIDDEN: "hidden.bs.tab",
                    SHOW: "show.bs.tab",
                    SHOWN: "shown.bs.tab",
                    CLICK_DATA_API: "click.bs.tab.data-api"
                }, r = {DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show"},
                o = {
                    DROPDOWN: ".dropdown",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    ACTIVE: ".active",
                    ACTIVE_UL: "> li > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                }, a = function () {
                    function t(e) {
                        this._element = e
                    }

                    var a = t.prototype;
                    return a.show = function () {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(r.ACTIVE) || e(this._element).hasClass(r.DISABLED))) {
                            var i, a, l = e(this._element).closest(o.NAV_LIST_GROUP)[0],
                                c = s.getSelectorFromElement(this._element);
                            if (l) {
                                var u = "UL" === l.nodeName ? o.ACTIVE_UL : o.ACTIVE;
                                a = (a = e.makeArray(e(l).find(u)))[a.length - 1]
                            }
                            var f = e.Event(n.HIDE, {relatedTarget: this._element}),
                                d = e.Event(n.SHOW, {relatedTarget: a});
                            if (a && e(a).trigger(f), e(this._element).trigger(d), !d.isDefaultPrevented() && !f.isDefaultPrevented()) {
                                c && (i = document.querySelector(c)), this._activate(this._element, l);
                                var p = function () {
                                    var r = e.Event(n.HIDDEN, {relatedTarget: t._element}),
                                        i = e.Event(n.SHOWN, {relatedTarget: a});
                                    e(a).trigger(r), e(t._element).trigger(i)
                                };
                                i ? this._activate(i, i.parentNode, p) : p()
                            }
                        }
                    }, a.dispose = function () {
                        e.removeData(this._element, "bs.tab"), this._element = null
                    }, a._activate = function (t, n, i) {
                        var a = this, l = ("UL" === n.nodeName ? e(n).find(o.ACTIVE_UL) : e(n).children(o.ACTIVE))[0],
                            c = i && l && e(l).hasClass(r.FADE), u = function () {
                                return a._transitionComplete(t, l, i)
                            };
                        if (l && c) {
                            var f = s.getTransitionDurationFromElement(l);
                            e(l).one(s.TRANSITION_END, u).emulateTransitionEnd(f)
                        } else u()
                    }, a._transitionComplete = function (t, n, i) {
                        if (n) {
                            e(n).removeClass(r.SHOW + " " + r.ACTIVE);
                            var a = e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];
                            a && e(a).removeClass(r.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (e(t).addClass(r.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), s.reflow(t), e(t).addClass(r.SHOW), t.parentNode && e(t.parentNode).hasClass(r.DROPDOWN_MENU)) {
                            var l = e(t).closest(o.DROPDOWN)[0];
                            if (l) {
                                var c = [].slice.call(l.querySelectorAll(o.DROPDOWN_TOGGLE));
                                e(c).addClass(r.ACTIVE)
                            }
                            t.setAttribute("aria-expanded", !0)
                        }
                        i && i()
                    }, t._jQueryInterface = function (n) {
                        return this.each(function () {
                            var r = e(this), i = r.data("bs.tab");
                            if (i || (i = new t(this), r.data("bs.tab", i)), "string" == typeof n) {
                                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                                i[n]()
                            }
                        })
                    }, i(t, null, [{
                        key: "VERSION", get: function () {
                            return "4.1.3"
                        }
                    }]), t
                }();
            return e(document).on(n.CLICK_DATA_API, o.DATA_TOGGLE, function (t) {
                t.preventDefault(), a._jQueryInterface.call(e(this), "show")
            }), e.fn.tab = a._jQueryInterface, e.fn.tab.Constructor = a, e.fn.tab.noConflict = function () {
                return e.fn.tab = t, a._jQueryInterface
            }, a
        }(t);
        (function (e) {
            if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        })(t), e.Util = s, e.Alert = l, e.Button = c, e.Carousel = u, e.Collapse = f, e.Dropdown = d, e.Modal = p, e.Popover = g, e.Scrollspy = m, e.Tab = v, e.Tooltip = h, Object.defineProperty(e, "__esModule", {value: !0})
    }(t, n(3), n(7))
}, function (e, t, n) {
    "use strict";
    n.r(t), function (e) {
        for (
            /**!
             * @fileOverview Kickass library to create and place poppers near their reference elements.
             * @version 1.14.3
             * @license
             * Copyright (c) 2016 Federico Zivolo and contributors
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in all
             * copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
             * SOFTWARE.
             */
            var n = "undefined" != typeof window && "undefined" != typeof document, r = ["Edge", "Trident", "Firefox"], i = 0, o = 0; o < r.length; o += 1) if (n && navigator.userAgent.indexOf(r[o]) >= 0) {
            i = 1;
            break
        }
        var a = n && window.Promise ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then(function () {
                    t = !1, e()
                }))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, i))
            }
        };

        function s(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function l(e, t) {
            if (1 !== e.nodeType) return [];
            var n = getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function c(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function u(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case"HTML":
                case"BODY":
                    return e.ownerDocument.body;
                case"#document":
                    return e.body
            }
            var t = l(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + i + r) ? e : u(c(e))
        }

        var f = n && !(!window.MSInputMethodContext || !document.documentMode),
            d = n && /MSIE 10/.test(navigator.userAgent);

        function p(e) {
            return 11 === e ? f : 10 === e ? d : f || d
        }

        function h(e) {
            if (!e) return document.documentElement;
            for (var t = p(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
            var r = n && n.nodeName;
            return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === l(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }

        function g(e) {
            return null !== e.parentNode ? g(e.parentNode) : e
        }

        function m(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, r = n ? e : t, i = n ? t : e,
                o = document.createRange();
            o.setStart(r, 0), o.setEnd(i, 0);
            var a = o.commonAncestorContainer;
            if (e !== a && t !== a || r.contains(i)) return function (e) {
                var t = e.nodeName;
                return "BODY" !== t && ("HTML" === t || h(e.firstElementChild) === e)
            }(a) ? a : h(a);
            var s = g(e);
            return s.host ? m(s.host, t) : m(e, g(t).host)
        }

        function v(e) {
            var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = e.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var r = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || r)[t]
            }
            return e[t]
        }

        function b(e, t) {
            var n = "x" === t ? "Left" : "Top", r = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
        }

        function y(e, t, n, r) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], p(10) ? n["offset" + e] + r["margin" + ("Height" === e ? "Top" : "Left")] + r["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
        }

        function w() {
            var e = document.body, t = document.documentElement, n = p(10) && getComputedStyle(t);
            return {height: y("Height", e, t, n), width: y("Width", e, t, n)}
        }

        var E = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, T = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), _ = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, S = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };

        function C(e) {
            return S({}, e, {right: e.left + e.width, bottom: e.top + e.height})
        }

        function A(e) {
            var t = {};
            try {
                if (p(10)) {
                    t = e.getBoundingClientRect();
                    var n = v(e, "top"), r = v(e, "left");
                    t.top += n, t.left += r, t.bottom += n, t.right += r
                } else t = e.getBoundingClientRect()
            } catch (e) {
            }
            var i = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
                o = "HTML" === e.nodeName ? w() : {}, a = o.width || e.clientWidth || i.right - i.left,
                s = o.height || e.clientHeight || i.bottom - i.top, c = e.offsetWidth - a, u = e.offsetHeight - s;
            if (c || u) {
                var f = l(e);
                c -= b(f, "x"), u -= b(f, "y"), i.width -= c, i.height -= u
            }
            return C(i)
        }

        function x(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = p(10),
                i = "HTML" === t.nodeName, o = A(e), a = A(t), s = u(e), c = l(t), f = parseFloat(c.borderTopWidth, 10),
                d = parseFloat(c.borderLeftWidth, 10);
            n && "HTML" === t.nodeName && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
            var h = C({top: o.top - a.top - f, left: o.left - a.left - d, width: o.width, height: o.height});
            if (h.marginTop = 0, h.marginLeft = 0, !r && i) {
                var g = parseFloat(c.marginTop, 10), m = parseFloat(c.marginLeft, 10);
                h.top -= f - g, h.bottom -= f - g, h.left -= d - m, h.right -= d - m, h.marginTop = g, h.marginLeft = m
            }
            return (r && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (h = function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = v(t, "top"),
                    i = v(t, "left"), o = n ? -1 : 1;
                return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e
            }(h, t)), h
        }

        function k(e) {
            if (!e || !e.parentElement || p()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === l(t, "transform");) t = t.parentElement;
            return t || document.documentElement
        }

        function O(e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0},
                a = i ? k(e) : m(e, t);
            if ("viewport" === r) o = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.ownerDocument.documentElement, r = x(e, n),
                    i = Math.max(n.clientWidth, window.innerWidth || 0),
                    o = Math.max(n.clientHeight, window.innerHeight || 0), a = t ? 0 : v(n), s = t ? 0 : v(n, "left");
                return C({top: a - r.top + r.marginTop, left: s - r.left + r.marginLeft, width: i, height: o})
            }(a, i); else {
                var s = void 0;
                "scrollParent" === r ? "BODY" === (s = u(c(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === r ? e.ownerDocument.documentElement : r;
                var f = x(s, a, i);
                if ("HTML" !== s.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === l(t, "position") || e(c(t)))
                }(a)) o = f; else {
                    var d = w(), p = d.height, h = d.width;
                    o.top += f.top - f.marginTop, o.bottom = p + f.top, o.left += f.left - f.marginLeft, o.right = h + f.left
                }
            }
            return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
        }

        function N(e, t, n, r, i) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var a = O(n, r, o, i), s = {
                top: {width: a.width, height: t.top - a.top},
                right: {width: a.right - t.right, height: a.height},
                bottom: {width: a.width, height: a.bottom - t.bottom},
                left: {width: t.left - a.left, height: a.height}
            }, l = Object.keys(s).map(function (e) {
                return S({key: e}, s[e], {
                    area: function (e) {
                        return e.width * e.height
                    }(s[e])
                })
            }).sort(function (e, t) {
                return t.area - e.area
            }), c = l.filter(function (e) {
                var t = e.width, r = e.height;
                return t >= n.clientWidth && r >= n.clientHeight
            }), u = c.length > 0 ? c[0].key : l[0].key, f = e.split("-")[1];
            return u + (f ? "-" + f : "")
        }

        function I(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return x(n, r ? k(t) : m(t, n), r)
        }

        function D(e) {
            var t = getComputedStyle(e), n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
            return {width: e.offsetWidth + r, height: e.offsetHeight + n}
        }

        function L(e) {
            var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e]
            })
        }

        function P(e, t, n) {
            n = n.split("-")[0];
            var r = D(e), i = {width: r.width, height: r.height}, o = -1 !== ["right", "left"].indexOf(n),
                a = o ? "top" : "left", s = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
            return i[a] = t[a] + t[l] / 2 - r[l] / 2, i[s] = n === s ? t[s] - r[c] : t[L(s)], i
        }

        function R(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function H(e, t, n) {
            return (void 0 === n ? e : e.slice(0, function (e, t, n) {
                if (Array.prototype.findIndex) return e.findIndex(function (e) {
                    return e[t] === n
                });
                var r = R(e, function (e) {
                    return e[t] === n
                });
                return e.indexOf(r)
            }(e, "name", n))).forEach(function (e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && s(n) && (t.offsets.popper = C(t.offsets.popper), t.offsets.reference = C(t.offsets.reference), t = n(t, e))
            }), t
        }

        function j(e, t) {
            return e.some(function (e) {
                var n = e.name;
                return e.enabled && n === t
            })
        }

        function M(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                var i = t[r], o = i ? "" + i + n : e;
                if (void 0 !== document.body.style[o]) return o
            }
            return null
        }

        function W(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }

        function F(e, t, n, r) {
            n.updateBound = r, W(e).addEventListener("resize", n.updateBound, {passive: !0});
            var i = u(e);
            return function e(t, n, r, i) {
                var o = "BODY" === t.nodeName, a = o ? t.ownerDocument.defaultView : t;
                a.addEventListener(n, r, {passive: !0}), o || e(u(a.parentNode), n, r, i), i.push(a)
            }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
        }

        function B() {
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function (e, t) {
                return W(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                    e.removeEventListener("scroll", t.updateBound)
                }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
            }(this.reference, this.state))
        }

        function q(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function U(e, t) {
            Object.keys(t).forEach(function (n) {
                var r = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(t[n]) && (r = "px"), e.style[n] = t[n] + r
            })
        }

        function Y(e, t, n) {
            var r = R(e, function (e) {
                return e.name === t
            }), i = !!r && e.some(function (e) {
                return e.name === n && e.enabled && e.order < r.order
            });
            if (!i) {
                var o = "`" + t + "`", a = "`" + n + "`";
                console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
            }
            return i
        }

        var X = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            $ = X.slice(3);

        function V(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = $.indexOf(e),
                r = $.slice(n + 1).concat($.slice(0, n));
            return t ? r.reverse() : r
        }

        var G = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"};

        function z(e, t, n, r) {
            var i = [0, 0], o = -1 !== ["right", "left"].indexOf(r), a = e.split(/(\+|\-)/).map(function (e) {
                return e.trim()
            }), s = a.indexOf(R(a, function (e) {
                return -1 !== e.search(/,|\s/)
            }));
            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
            return (c = c.map(function (e, r) {
                var i = (1 === r ? !o : o) ? "height" : "width", a = !1;
                return e.reduce(function (e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                }, []).map(function (e) {
                    return function (e, t, n, r) {
                        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +i[1], a = i[2];
                        if (!o) return e;
                        if (0 === a.indexOf("%")) {
                            var s = void 0;
                            switch (a) {
                                case"%p":
                                    s = n;
                                    break;
                                case"%":
                                case"%r":
                                default:
                                    s = r
                            }
                            return C(s)[t] / 100 * o
                        }
                        if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                        return o
                    }(e, i, t, n)
                })
            })).forEach(function (e, t) {
                e.forEach(function (n, r) {
                    q(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
                })
            }), i
        }

        var K = {
            placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
            }, onUpdate: function () {
            }, modifiers: {
                shift: {
                    order: 100, enabled: !0, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], r = t.split("-")[1];
                        if (r) {
                            var i = e.offsets, o = i.reference, a = i.popper, s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top", c = s ? "width" : "height",
                                u = {start: _({}, l, o[l]), end: _({}, l, o[l] + o[c] - a[c])};
                            e.offsets.popper = S({}, a, u[r])
                        }
                        return e
                    }
                }, offset: {
                    order: 200, enabled: !0, fn: function (e, t) {
                        var n = t.offset, r = e.placement, i = e.offsets, o = i.popper, a = i.reference,
                            s = r.split("-")[0], l = void 0;
                        return l = q(+n) ? [+n, 0] : z(n, o, a, s), "left" === s ? (o.top += l[0], o.left -= l[1]) : "right" === s ? (o.top += l[0], o.left += l[1]) : "top" === s ? (o.left += l[0], o.top -= l[1]) : "bottom" === s && (o.left += l[0], o.top += l[1]), e.popper = o, e
                    }, offset: 0
                }, preventOverflow: {
                    order: 300, enabled: !0, fn: function (e, t) {
                        var n = t.boundariesElement || h(e.instance.popper);
                        e.instance.reference === n && (n = h(n));
                        var r = M("transform"), i = e.instance.popper.style, o = i.top, a = i.left, s = i[r];
                        i.top = "", i.left = "", i[r] = "";
                        var l = O(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        i.top = o, i.left = a, i[r] = s, t.boundaries = l;
                        var c = t.priority, u = e.offsets.popper, f = {
                            primary: function (e) {
                                var n = u[e];
                                return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), _({}, e, n)
                            }, secondary: function (e) {
                                var n = "right" === e ? "left" : "top", r = u[n];
                                return u[e] > l[e] && !t.escapeWithReference && (r = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), _({}, n, r)
                            }
                        };
                        return c.forEach(function (e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = S({}, u, f[t](e))
                        }), e.offsets.popper = u, e
                    }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                }, keepTogether: {
                    order: 400, enabled: !0, fn: function (e) {
                        var t = e.offsets, n = t.popper, r = t.reference, i = e.placement.split("-")[0], o = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(i), s = a ? "right" : "bottom", l = a ? "left" : "top",
                            c = a ? "width" : "height";
                        return n[s] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[c]), n[l] > o(r[s]) && (e.offsets.popper[l] = o(r[s])), e
                    }
                }, arrow: {
                    order: 500, enabled: !0, fn: function (e, t) {
                        var n;
                        if (!Y(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var r = t.element;
                        if ("string" == typeof r) {
                            if (!(r = e.instance.popper.querySelector(r))) return e
                        } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var i = e.placement.split("-")[0], o = e.offsets, a = o.popper, s = o.reference,
                            c = -1 !== ["left", "right"].indexOf(i), u = c ? "height" : "width", f = c ? "Top" : "Left",
                            d = f.toLowerCase(), p = c ? "left" : "top", h = c ? "bottom" : "right", g = D(r)[u];
                        s[h] - g < a[d] && (e.offsets.popper[d] -= a[d] - (s[h] - g)), s[d] + g > a[h] && (e.offsets.popper[d] += s[d] + g - a[h]), e.offsets.popper = C(e.offsets.popper);
                        var m = s[d] + s[u] / 2 - g / 2, v = l(e.instance.popper), b = parseFloat(v["margin" + f], 10),
                            y = parseFloat(v["border" + f + "Width"], 10), w = m - e.offsets.popper[d] - b - y;
                        return w = Math.max(Math.min(a[u] - g, w), 0), e.arrowElement = r, e.offsets.arrow = (_(n = {}, d, Math.round(w)), _(n, p, ""), n), e
                    }, element: "[x-arrow]"
                }, flip: {
                    order: 600, enabled: !0, fn: function (e, t) {
                        if (j(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = O(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            r = e.placement.split("-")[0], i = L(r), o = e.placement.split("-")[1] || "", a = [];
                        switch (t.behavior) {
                            case G.FLIP:
                                a = [r, i];
                                break;
                            case G.CLOCKWISE:
                                a = V(r);
                                break;
                            case G.COUNTERCLOCKWISE:
                                a = V(r, !0);
                                break;
                            default:
                                a = t.behavior
                        }
                        return a.forEach(function (s, l) {
                            if (r !== s || a.length === l + 1) return e;
                            r = e.placement.split("-")[0], i = L(r);
                            var c = e.offsets.popper, u = e.offsets.reference, f = Math.floor,
                                d = "left" === r && f(c.right) > f(u.left) || "right" === r && f(c.left) < f(u.right) || "top" === r && f(c.bottom) > f(u.top) || "bottom" === r && f(c.top) < f(u.bottom),
                                p = f(c.left) < f(n.left), h = f(c.right) > f(n.right), g = f(c.top) < f(n.top),
                                m = f(c.bottom) > f(n.bottom),
                                v = "left" === r && p || "right" === r && h || "top" === r && g || "bottom" === r && m,
                                b = -1 !== ["top", "bottom"].indexOf(r),
                                y = !!t.flipVariations && (b && "start" === o && p || b && "end" === o && h || !b && "start" === o && g || !b && "end" === o && m);
                            (d || v || y) && (e.flipped = !0, (d || v) && (r = a[l + 1]), y && (o = function (e) {
                                return "end" === e ? "start" : "start" === e ? "end" : e
                            }(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = S({}, e.offsets.popper, P(e.instance.popper, e.offsets.reference, e.placement)), e = H(e.instance.modifiers, e, "flip"))
                        }), e
                    }, behavior: "flip", padding: 5, boundariesElement: "viewport"
                }, inner: {
                    order: 700, enabled: !1, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], r = e.offsets, i = r.popper, o = r.reference,
                            a = -1 !== ["left", "right"].indexOf(n), s = -1 === ["top", "left"].indexOf(n);
                        return i[a ? "left" : "top"] = o[n] - (s ? i[a ? "width" : "height"] : 0), e.placement = L(t), e.offsets.popper = C(i), e
                    }
                }, hide: {
                    order: 800, enabled: !0, fn: function (e) {
                        if (!Y(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference, n = R(e.instance.modifiers, function (e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                }, computeStyle: {
                    order: 850, enabled: !0, fn: function (e, t) {
                        var n = t.x, r = t.y, i = e.offsets.popper, o = R(e.instance.modifiers, function (e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a = void 0 !== o ? o : t.gpuAcceleration, s = A(h(e.instance.popper)),
                            l = {position: i.position}, c = {
                                left: Math.floor(i.left),
                                top: Math.round(i.top),
                                bottom: Math.round(i.bottom),
                                right: Math.floor(i.right)
                            }, u = "bottom" === n ? "top" : "bottom", f = "right" === r ? "left" : "right",
                            d = M("transform"), p = void 0, g = void 0;
                        if (g = "bottom" === u ? -s.height + c.bottom : c.top, p = "right" === f ? -s.width + c.right : c.left, a && d) l[d] = "translate3d(" + p + "px, " + g + "px, 0)", l[u] = 0, l[f] = 0, l.willChange = "transform"; else {
                            var m = "bottom" === u ? -1 : 1, v = "right" === f ? -1 : 1;
                            l[u] = g * m, l[f] = p * v, l.willChange = u + ", " + f
                        }
                        var b = {"x-placement": e.placement};
                        return e.attributes = S({}, b, e.attributes), e.styles = S({}, l, e.styles), e.arrowStyles = S({}, e.offsets.arrow, e.arrowStyles), e
                    }, gpuAcceleration: !0, x: "bottom", y: "right"
                }, applyStyle: {
                    order: 900, enabled: !0, fn: function (e) {
                        return U(e.instance.popper, e.styles), function (e, t) {
                            Object.keys(t).forEach(function (n) {
                                !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
                            })
                        }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && U(e.arrowElement, e.arrowStyles), e
                    }, onLoad: function (e, t, n, r, i) {
                        var o = I(i, t, e, n.positionFixed),
                            a = N(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", a), U(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
                    }, gpuAcceleration: void 0
                }
            }
        }, Q = function () {
            function e(t, n) {
                var r = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                E(this, e), this.scheduleUpdate = function () {
                    return requestAnimationFrame(r.update)
                }, this.update = a(this.update.bind(this)), this.options = S({}, e.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(S({}, e.Defaults.modifiers, i.modifiers)).forEach(function (t) {
                    r.options.modifiers[t] = S({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return S({name: e}, r.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (e) {
                    e.enabled && s(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                }), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }

            return T(e, [{
                key: "update", value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = I(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = N(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = P(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = H(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, j(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[M("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return B.call(this)
                }
            }]), e
        }();
        Q.Utils = ("undefined" != typeof window ? window : e).PopperUtils, Q.placements = X, Q.Defaults = K, t.default = Q
    }.call(this, n(5))
}, function (e, t, n) {
    var r;
    !function () {
        var i, o, a, s = {
                frameRate: 150,
                animationTime: 400,
                stepSize: 100,
                pulseAlgorithm: !0,
                pulseScale: 4,
                pulseNormalize: 1,
                accelerationDelta: 50,
                accelerationMax: 3,
                keyboardSupport: !0,
                arrowScroll: 50,
                fixedBackground: !0,
                excluded: ""
            }, l = s, c = !1, u = !1, f = {x: 0, y: 0}, d = !1, p = document.documentElement, h = [],
            g = /^Mac/.test(navigator.platform),
            m = {left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36},
            v = {37: 1, 38: 1, 39: 1, 40: 1};

        function b() {
            if (!d && document.body) {
                d = !0;
                var e = document.body, t = document.documentElement, n = window.innerHeight, r = e.scrollHeight;
                if (p = document.compatMode.indexOf("CSS") >= 0 ? t : e, i = e, l.keyboardSupport && H("keydown", S), top != self) u = !0; else if (J && r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
                    var s, f = document.createElement("div");
                    f.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + p.scrollHeight + "px", document.body.appendChild(f), a = function () {
                        s || (s = setTimeout(function () {
                            c || (f.style.height = "0", f.style.height = p.scrollHeight + "px", s = null)
                        }, 500))
                    }, setTimeout(a, 10), H("resize", a);
                    if ((o = new q(a)).observe(e, {
                        attributes: !0,
                        childList: !0,
                        characterData: !1
                    }), p.offsetHeight <= n) {
                        var h = document.createElement("div");
                        h.style.clear = "both", e.appendChild(h)
                    }
                }
                l.fixedBackground || c || (e.style.backgroundAttachment = "scroll", t.style.backgroundAttachment = "scroll")
            }
        }

        var y = [], w = !1, E = Date.now();

        function T(e, t, n) {
            if (function (e, t) {
                e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (f.x !== e || f.y !== t) && (f.x = e, f.y = t, y = [], E = 0)
            }(t, n), 1 != l.accelerationMax) {
                var r = Date.now() - E;
                if (r < l.accelerationDelta) {
                    var i = (1 + 50 / r) / 2;
                    i > 1 && (i = Math.min(i, l.accelerationMax), t *= i, n *= i)
                }
                E = Date.now()
            }
            if (y.push({x: t, y: n, lastX: t < 0 ? .99 : -.99, lastY: n < 0 ? .99 : -.99, start: Date.now()}), !w) {
                var o = e === document.body, a = function (r) {
                    for (var i = Date.now(), s = 0, c = 0, u = 0; u < y.length; u++) {
                        var f = y[u], d = i - f.start, p = d >= l.animationTime, h = p ? 1 : d / l.animationTime;
                        l.pulseAlgorithm && (h = X(h));
                        var g = f.x * h - f.lastX >> 0, m = f.y * h - f.lastY >> 0;
                        s += g, c += m, f.lastX += g, f.lastY += m, p && (y.splice(u, 1), u--)
                    }
                    o ? window.scrollBy(s, c) : (s && (e.scrollLeft += s), c && (e.scrollTop += c)), t || n || (y = []), y.length ? B(a, e, 1e3 / l.frameRate + 1) : w = !1
                };
                B(a, e, 0), w = !0
            }
        }

        function _(e) {
            d || b();
            var t = e.target;
            if (e.defaultPrevented || e.ctrlKey) return !0;
            if (M(i, "embed") || M(t, "embed") && /\.pdf/i.test(t.src) || M(i, "object") || t.shadowRoot) return !0;
            var n = -e.wheelDeltaX || e.deltaX || 0, r = -e.wheelDeltaY || e.deltaY || 0;
            g && (e.wheelDeltaX && W(e.wheelDeltaX, 120) && (n = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120), e.wheelDeltaY && W(e.wheelDeltaY, 120) && (r = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)), n || r || (r = -e.wheelDelta || 0), 1 === e.deltaMode && (n *= 40, r *= 40);
            var o = D(t);
            return o ? !!function (e) {
                if (!e) return;
                h.length || (h = [e, e, e]);
                return e = Math.abs(e), h.push(e), h.shift(), clearTimeout(x), x = setTimeout(function () {
                    try {
                        localStorage.SS_deltaBuffer = h.join(",")
                    } catch (e) {
                    }
                }, 1e3), !F(120) && !F(100)
            }(r) || (Math.abs(n) > 1.2 && (n *= l.stepSize / 120), Math.abs(r) > 1.2 && (r *= l.stepSize / 120), T(o, n, r), e.preventDefault(), void N()) : !u || !z || (Object.defineProperty(e, "target", {value: window.frameElement}), parent.wheel(e))
        }

        function S(e) {
            var t = e.target, n = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== m.spacebar;
            document.body.contains(i) || (i = document.activeElement);
            var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (e.defaultPrevented || /^(textarea|select|embed|object)$/i.test(t.nodeName) || M(t, "input") && !r.test(t.type) || M(i, "video") || function (e) {
                var t = e.target, n = !1;
                if (-1 != document.URL.indexOf("www.youtube.com/watch")) do {
                    if (n = t.classList && t.classList.contains("html5-video-controls")) break
                } while (t = t.parentNode);
                return n
            }(e) || t.isContentEditable || n) return !0;
            if ((M(t, "button") || M(t, "input") && r.test(t.type)) && e.keyCode === m.spacebar) return !0;
            if (M(t, "input") && "radio" == t.type && v[e.keyCode]) return !0;
            var o = 0, a = 0, s = D(i);
            if (!s) return !u || !z || parent.keydown(e);
            var c = s.clientHeight;
            switch (s == document.body && (c = window.innerHeight), e.keyCode) {
                case m.up:
                    a = -l.arrowScroll;
                    break;
                case m.down:
                    a = l.arrowScroll;
                    break;
                case m.spacebar:
                    a = -(e.shiftKey ? 1 : -1) * c * .9;
                    break;
                case m.pageup:
                    a = .9 * -c;
                    break;
                case m.pagedown:
                    a = .9 * c;
                    break;
                case m.home:
                    a = -s.scrollTop;
                    break;
                case m.end:
                    var f = s.scrollHeight - s.scrollTop - c;
                    a = f > 0 ? f + 10 : 0;
                    break;
                case m.left:
                    o = -l.arrowScroll;
                    break;
                case m.right:
                    o = l.arrowScroll;
                    break;
                default:
                    return !0
            }
            T(s, o, a), e.preventDefault(), N()
        }

        function C(e) {
            i = e.target
        }

        var A, x, k = function () {
            var e = 0;
            return function (t) {
                return t.uniqueID || (t.uniqueID = e++)
            }
        }(), O = {};

        function N() {
            clearTimeout(A), A = setInterval(function () {
                O = {}
            }, 1e3)
        }

        function I(e, t) {
            for (var n = e.length; n--;) O[k(e[n])] = t;
            return t
        }

        function D(e) {
            var t = [], n = document.body, r = p.scrollHeight;
            do {
                var i = O[k(e)];
                if (i) return I(t, i);
                if (t.push(e), r === e.scrollHeight) {
                    var o = P(p) && P(n) || R(p);
                    if (u && L(p) || !u && o) return I(t, U())
                } else if (L(e) && R(e)) return I(t, e)
            } while (e = e.parentElement)
        }

        function L(e) {
            return e.clientHeight + 10 < e.scrollHeight
        }

        function P(e) {
            return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
        }

        function R(e) {
            var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
            return "scroll" === t || "auto" === t
        }

        function H(e, t) {
            window.addEventListener(e, t, !1)
        }

        function j(e, t) {
            window.removeEventListener(e, t, !1)
        }

        function M(e, t) {
            return (e.nodeName || "").toLowerCase() === t.toLowerCase()
        }

        if (window.localStorage && localStorage.SS_deltaBuffer) try {
            h = localStorage.SS_deltaBuffer.split(",")
        } catch (e) {
        }

        function W(e, t) {
            return Math.floor(e / t) == e / t
        }

        function F(e) {
            return W(h[0], e) && W(h[1], e) && W(h[2], e)
        }

        var B = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, n) {
            window.setTimeout(e, n || 1e3 / 60)
        }, q = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, U = function () {
            var e;
            return function () {
                if (!e) {
                    var t = document.createElement("div");
                    t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t);
                    var n = document.body.scrollTop;
                    document.documentElement.scrollTop;
                    window.scrollBy(0, 3), e = document.body.scrollTop != n ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(t)
                }
                return e
            }
        }();

        function Y(e) {
            var t, n;
            return (e *= l.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (n = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - n)), t * l.pulseNormalize
        }

        function X(e) {
            return e >= 1 ? 1 : e <= 0 ? 0 : (1 == l.pulseNormalize && (l.pulseNormalize /= Y(1)), Y(e))
        }

        var $, V = window.navigator.userAgent, G = /Edge/.test(V), z = /chrome/i.test(V) && !G,
            K = /safari/i.test(V) && !G, Q = /mobile/i.test(V), Z = /Windows NT 6.1/i.test(V) && /rv:11/i.test(V),
            J = K && (/Version\/8/i.test(V) || /Version\/9/i.test(V)), ee = (z || K || Z) && !Q;

        function te(e) {
            for (var t in e) s.hasOwnProperty(t) && (l[t] = e[t])
        }

        "onwheel" in document.createElement("div") ? $ = "wheel" : "onmousewheel" in document.createElement("div") && ($ = "mousewheel"), $ && ee && (H($, _), H("mousedown", C), H("load", b)), te.destroy = function () {
            o && o.disconnect(), j($, _), j("mousedown", C), j("keydown", S), j("resize", a), j("load", b)
        }, window.SmoothScrollOptions && te(window.SmoothScrollOptions), void 0 === (r = function () {
            return te
        }.call(t, n, t, e)) || (e.exports = r)
    }()
}, function (e, t, n) {
    /*!
     * perfect-scrollbar v1.4.0
     * (c) 2018 Hyunje Jun
     * @license MIT
     */
    e.exports = function () {
        "use strict";

        function e(e) {
            return getComputedStyle(e)
        }

        function t(e, t) {
            for (var n in t) {
                var r = t[n];
                "number" == typeof r && (r += "px"), e.style[n] = r
            }
            return e
        }

        function n(e) {
            var t = document.createElement("div");
            return t.className = e, t
        }

        function r(e, t) {
            if (!g) throw new Error("No element matching method supported");
            return g.call(e, t)
        }

        function i(e) {
            e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
        }

        function o(e, t) {
            return Array.prototype.filter.call(e.children, function (e) {
                return r(e, t)
            })
        }

        function a(e, t) {
            var n = e.element.classList, r = m.state.scrolling(t);
            n.contains(r) ? clearTimeout(v[t]) : n.add(r)
        }

        function s(e, t) {
            v[t] = setTimeout(function () {
                return e.isAlive && e.element.classList.remove(m.state.scrolling(t))
            }, e.settings.scrollingThreshold)
        }

        function l(e, t) {
            a(e, t), s(e, t)
        }

        function c(e) {
            if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
            var t = document.createEvent("CustomEvent");
            return t.initCustomEvent(e, !1, !1, void 0), t
        }

        function u(e) {
            return parseInt(e, 10) || 0
        }

        function f(e) {
            return r(e, "input,[contenteditable]") || r(e, "select,[contenteditable]") || r(e, "textarea,[contenteditable]") || r(e, "button,[contenteditable]")
        }

        function d(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
        }

        function p(e, n) {
            var r = {width: n.railXWidth}, i = Math.floor(e.scrollTop);
            n.isRtl ? r.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : r.left = e.scrollLeft, n.isScrollbarXUsingBottom ? r.bottom = n.scrollbarXBottom - i : r.top = n.scrollbarXTop + i, t(n.scrollbarXRail, r);
            var o = {top: i, height: n.railYHeight};
            n.isScrollbarYUsingRight ? n.isRtl ? o.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth : o.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? o.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : o.left = n.scrollbarYLeft + e.scrollLeft, t(n.scrollbarYRail, o), t(n.scrollbarX, {
                left: n.scrollbarXLeft,
                width: n.scrollbarXWidth - n.railBorderXWidth
            }), t(n.scrollbarY, {top: n.scrollbarYTop, height: n.scrollbarYHeight - n.railBorderYWidth})
        }

        function h(e, t) {
            function n(t) {
                g[d] = v + y * (t[l] - b), a(e, p), _(e), t.stopPropagation(), t.preventDefault()
            }

            function r() {
                s(e, p), e[h].classList.remove(m.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", n)
            }

            var i = t[0], o = t[1], l = t[2], c = t[3], u = t[4], f = t[5], d = t[6], p = t[7], h = t[8], g = e.element,
                v = null, b = null, y = null;
            e.event.bind(e[u], "mousedown", function (t) {
                v = g[d], b = t[l], y = (e[o] - e[i]) / (e[c] - e[f]), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", r), e[h].classList.add(m.state.clicking), t.stopPropagation(), t.preventDefault()
            })
        }

        var g = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
            m = {
                main: "ps", element: {
                    thumb: function (e) {
                        return "ps__thumb-" + e
                    }, rail: function (e) {
                        return "ps__rail-" + e
                    }, consuming: "ps__child--consume"
                }, state: {
                    focus: "ps--focus", clicking: "ps--clicking", active: function (e) {
                        return "ps--active-" + e
                    }, scrolling: function (e) {
                        return "ps--scrolling-" + e
                    }
                }
            }, v = {x: null, y: null}, b = function (e) {
                this.element = e, this.handlers = {}
            }, y = {isEmpty: {configurable: !0}};
        b.prototype.bind = function (e, t) {
            void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1)
        }, b.prototype.unbind = function (e, t) {
            var n = this;
            this.handlers[e] = this.handlers[e].filter(function (r) {
                return !(!t || r === t) || (n.element.removeEventListener(e, r, !1), !1)
            })
        }, b.prototype.unbindAll = function () {
            for (var e in this.handlers) this.unbind(e)
        }, y.isEmpty.get = function () {
            var e = this;
            return Object.keys(this.handlers).every(function (t) {
                return 0 === e.handlers[t].length
            })
        }, Object.defineProperties(b.prototype, y);
        var w = function () {
            this.eventElements = []
        };
        w.prototype.eventElement = function (e) {
            var t = this.eventElements.filter(function (t) {
                return t.element === e
            })[0];
            return t || (t = new b(e), this.eventElements.push(t)), t
        }, w.prototype.bind = function (e, t, n) {
            this.eventElement(e).bind(t, n)
        }, w.prototype.unbind = function (e, t, n) {
            var r = this.eventElement(e);
            r.unbind(t, n), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1)
        }, w.prototype.unbindAll = function () {
            this.eventElements.forEach(function (e) {
                return e.unbindAll()
            }), this.eventElements = []
        }, w.prototype.once = function (e, t, n) {
            var r = this.eventElement(e), i = function (e) {
                r.unbind(t, i), n(e)
            };
            r.bind(t, i)
        };
        var E = function (e, t, n, r, i) {
            var o;
            if (void 0 === r && (r = !0), void 0 === i && (i = !1), "top" === t) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"]; else {
                if ("left" !== t) throw new Error("A proper axis should be provided");
                o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
            }
            !function (e, t, n, r, i) {
                var o = n[0], a = n[1], s = n[2], u = n[3], f = n[4], d = n[5];
                void 0 === r && (r = !0), void 0 === i && (i = !1);
                var p = e.element;
                e.reach[u] = null, p[s] < 1 && (e.reach[u] = "start"), p[s] > e[o] - e[a] - 1 && (e.reach[u] = "end"), t && (p.dispatchEvent(c("ps-scroll-" + u)), t < 0 ? p.dispatchEvent(c("ps-scroll-" + f)) : t > 0 && p.dispatchEvent(c("ps-scroll-" + d)), r && l(e, u)), e.reach[u] && (t || i) && p.dispatchEvent(c("ps-" + u + "-reach-" + e.reach[u]))
            }(e, n, o, r, i)
        }, T = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
        }, _ = function (e) {
            var t = e.element, n = Math.floor(t.scrollTop);
            e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight, t.contains(e.scrollbarXRail) || (o(t, m.element.rail("x")).forEach(function (e) {
                return i(e)
            }), t.appendChild(e.scrollbarXRail)), t.contains(e.scrollbarYRail) || (o(t, m.element.rail("y")).forEach(function (e) {
                return i(e)
            }), t.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = d(e, u(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = u((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = d(e, u(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = u(n * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), p(t, e), e.scrollbarXActive ? t.classList.add(m.state.active("x")) : (t.classList.remove(m.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, t.scrollLeft = 0), e.scrollbarYActive ? t.classList.add(m.state.active("y")) : (t.classList.remove(m.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, t.scrollTop = 0)
        }, S = {
            "click-rail": function (e) {
                e.event.bind(e.scrollbarY, "mousedown", function (e) {
                    return e.stopPropagation()
                }), e.event.bind(e.scrollbarYRail, "mousedown", function (t) {
                    var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                    e.element.scrollTop += n * e.containerHeight, _(e), t.stopPropagation()
                }), e.event.bind(e.scrollbarX, "mousedown", function (e) {
                    return e.stopPropagation()
                }), e.event.bind(e.scrollbarXRail, "mousedown", function (t) {
                    var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                    e.element.scrollLeft += n * e.containerWidth, _(e), t.stopPropagation()
                })
            }, "drag-thumb": function (e) {
                h(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), h(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
            }, keyboard: function (e) {
                var t = e.element, n = function () {
                    return r(t, ":hover")
                }, i = function () {
                    return r(e.scrollbarX, ":focus") || r(e.scrollbarY, ":focus")
                };
                e.event.bind(e.ownerDocument, "keydown", function (r) {
                    if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (n() || i())) {
                        var o = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (o) {
                            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement; else for (; o.shadowRoot;) o = o.shadowRoot.activeElement;
                            if (f(o)) return
                        }
                        var a = 0, s = 0;
                        switch (r.which) {
                            case 37:
                                a = r.metaKey ? -e.contentWidth : r.altKey ? -e.containerWidth : -30;
                                break;
                            case 38:
                                s = r.metaKey ? e.contentHeight : r.altKey ? e.containerHeight : 30;
                                break;
                            case 39:
                                a = r.metaKey ? e.contentWidth : r.altKey ? e.containerWidth : 30;
                                break;
                            case 40:
                                s = r.metaKey ? -e.contentHeight : r.altKey ? -e.containerHeight : -30;
                                break;
                            case 32:
                                s = r.shiftKey ? e.containerHeight : -e.containerHeight;
                                break;
                            case 33:
                                s = e.containerHeight;
                                break;
                            case 34:
                                s = -e.containerHeight;
                                break;
                            case 36:
                                s = e.contentHeight;
                                break;
                            case 35:
                                s = -e.contentHeight;
                                break;
                            default:
                                return
                        }
                        e.settings.suppressScrollX && 0 !== a || e.settings.suppressScrollY && 0 !== s || (t.scrollTop -= s, t.scrollLeft += a, _(e), function (n, r) {
                            var i = Math.floor(t.scrollTop);
                            if (0 === n) {
                                if (!e.scrollbarYActive) return !1;
                                if (0 === i && r > 0 || i >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
                            }
                            var o = t.scrollLeft;
                            if (0 === r) {
                                if (!e.scrollbarXActive) return !1;
                                if (0 === o && n < 0 || o >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                            }
                            return !0
                        }(a, s) && r.preventDefault())
                    }
                })
            }, wheel: function (t) {
                function n(t, n, r) {
                    if (!T.isWebKit && i.querySelector("select:focus")) return !0;
                    if (!i.contains(t)) return !1;
                    for (var o = t; o && o !== i;) {
                        if (o.classList.contains(m.element.consuming)) return !0;
                        var a = e(o);
                        if ([a.overflow, a.overflowX, a.overflowY].join("").match(/(scroll|auto)/)) {
                            var s = o.scrollHeight - o.clientHeight;
                            if (s > 0 && !(0 === o.scrollTop && r > 0 || o.scrollTop === s && r < 0)) return !0;
                            var l = o.scrollWidth - o.clientWidth;
                            if (l > 0 && !(0 === o.scrollLeft && n < 0 || o.scrollLeft === l && n > 0)) return !0
                        }
                        o = o.parentNode
                    }
                    return !1
                }

                function r(e) {
                    var r = function (e) {
                        var t = e.deltaX, n = -1 * e.deltaY;
                        return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
                    }(e), o = r[0], a = r[1];
                    if (!n(e.target, o, a)) {
                        var s = !1;
                        t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (a ? i.scrollTop -= a * t.settings.wheelSpeed : i.scrollTop += o * t.settings.wheelSpeed, s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (o ? i.scrollLeft += o * t.settings.wheelSpeed : i.scrollLeft -= a * t.settings.wheelSpeed, s = !0) : (i.scrollTop -= a * t.settings.wheelSpeed, i.scrollLeft += o * t.settings.wheelSpeed), _(t), (s = s || function (e, n) {
                            var r = Math.floor(i.scrollTop), o = 0 === i.scrollTop,
                                a = r + i.offsetHeight === i.scrollHeight, s = 0 === i.scrollLeft,
                                l = i.scrollLeft + i.offsetWidth === i.scrollWidth;
                            return !(Math.abs(n) > Math.abs(e) ? o || a : s || l) || !t.settings.wheelPropagation
                        }(o, a)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault())
                    }
                }

                var i = t.element;
                void 0 !== window.onwheel ? t.event.bind(i, "wheel", r) : void 0 !== window.onmousewheel && t.event.bind(i, "mousewheel", r)
            }, touch: function (t) {
                function n(e, n) {
                    var r = Math.floor(u.scrollTop), i = u.scrollLeft, o = Math.abs(e), a = Math.abs(n);
                    if (a > o) {
                        if (n < 0 && r === t.contentHeight - t.containerHeight || n > 0 && 0 === r) return 0 === window.scrollY && n > 0 && T.isChrome
                    } else if (o > a && (e < 0 && i === t.contentWidth - t.containerWidth || e > 0 && 0 === i)) return !0;
                    return !0
                }

                function r(e, n) {
                    u.scrollTop -= n, u.scrollLeft -= e, _(t)
                }

                function i(e) {
                    return e.targetTouches ? e.targetTouches[0] : e
                }

                function o(e) {
                    return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                }

                function a(e) {
                    if (o(e)) {
                        var t = i(e);
                        f.pageX = t.pageX, f.pageY = t.pageY, d = (new Date).getTime(), null !== h && clearInterval(h)
                    }
                }

                function s(t, n, r) {
                    if (!u.contains(t)) return !1;
                    for (var i = t; i && i !== u;) {
                        if (i.classList.contains(m.element.consuming)) return !0;
                        var o = e(i);
                        if ([o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) {
                            var a = i.scrollHeight - i.clientHeight;
                            if (a > 0 && !(0 === i.scrollTop && r > 0 || i.scrollTop === a && r < 0)) return !0;
                            var s = i.scrollLeft - i.clientWidth;
                            if (s > 0 && !(0 === i.scrollLeft && n < 0 || i.scrollLeft === s && n > 0)) return !0
                        }
                        i = i.parentNode
                    }
                    return !1
                }

                function l(e) {
                    if (o(e)) {
                        var t = i(e), a = {pageX: t.pageX, pageY: t.pageY}, l = a.pageX - f.pageX,
                            c = a.pageY - f.pageY;
                        if (s(e.target, l, c)) return;
                        r(l, c), f = a;
                        var u = (new Date).getTime(), h = u - d;
                        h > 0 && (p.x = l / h, p.y = c / h, d = u), n(l, c) && e.preventDefault()
                    }
                }

                function c() {
                    t.settings.swipeEasing && (clearInterval(h), h = setInterval(function () {
                        t.isInitialized ? clearInterval(h) : p.x || p.y ? Math.abs(p.x) < .01 && Math.abs(p.y) < .01 ? clearInterval(h) : (r(30 * p.x, 30 * p.y), p.x *= .8, p.y *= .8) : clearInterval(h)
                    }, 10))
                }

                if (T.supportsTouch || T.supportsIePointer) {
                    var u = t.element, f = {}, d = 0, p = {}, h = null;
                    T.supportsTouch ? (t.event.bind(u, "touchstart", a), t.event.bind(u, "touchmove", l), t.event.bind(u, "touchend", c)) : T.supportsIePointer && (window.PointerEvent ? (t.event.bind(u, "pointerdown", a), t.event.bind(u, "pointermove", l), t.event.bind(u, "pointerup", c)) : window.MSPointerEvent && (t.event.bind(u, "MSPointerDown", a), t.event.bind(u, "MSPointerMove", l), t.event.bind(u, "MSPointerUp", c)))
                }
            }
        }, C = function (r, i) {
            var o = this;
            if (void 0 === i && (i = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
            for (var a in this.element = r, r.classList.add(m.main), this.settings = {
                handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollingThreshold: 1e3,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipeEasing: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !0,
                wheelSpeed: 1
            }, i) o.settings[a] = i[a];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
            var s = function () {
                return r.classList.add(m.state.focus)
            }, l = function () {
                return r.classList.remove(m.state.focus)
            };
            this.isRtl = "rtl" === e(r).direction, this.isNegativeScroll = function () {
                var e = r.scrollLeft, t = null;
                return r.scrollLeft = -1, t = r.scrollLeft < 0, r.scrollLeft = e, t
            }(), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new w, this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = n(m.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = n(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", l), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
            var c = e(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), t(this.scrollbarXRail, {display: "block"}), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), t(this.scrollbarXRail, {display: ""}), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = n(m.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = n(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", l), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
            var f = e(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(f.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(f.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (t) {
                var n = e(t);
                return u(n.width) + u(n.paddingLeft) + u(n.paddingRight) + u(n.borderLeftWidth) + u(n.borderRightWidth)
            }(this.scrollbarY) : null, this.railBorderYWidth = u(f.borderTopWidth) + u(f.borderBottomWidth), t(this.scrollbarYRail, {display: "block"}), this.railYMarginHeight = u(f.marginTop) + u(f.marginBottom), t(this.scrollbarYRail, {display: ""}), this.railYHeight = null, this.railYRatio = null, this.reach = {
                x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
            }, this.isAlive = !0, this.settings.handlers.forEach(function (e) {
                return S[e](o)
            }), this.lastScrollTop = Math.floor(r.scrollTop), this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function (e) {
                return o.onScroll(e)
            }), _(this)
        };
        return C.prototype.update = function () {
            this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, t(this.scrollbarXRail, {display: "block"}), t(this.scrollbarYRail, {display: "block"}), this.railXMarginWidth = u(e(this.scrollbarXRail).marginLeft) + u(e(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(e(this.scrollbarYRail).marginTop) + u(e(this.scrollbarYRail).marginBottom), t(this.scrollbarXRail, {display: "none"}), t(this.scrollbarYRail, {display: "none"}), _(this), E(this, "top", 0, !1, !0), E(this, "left", 0, !1, !0), t(this.scrollbarXRail, {display: ""}), t(this.scrollbarYRail, {display: ""}))
        }, C.prototype.onScroll = function (e) {
            this.isAlive && (_(this), E(this, "top", this.element.scrollTop - this.lastScrollTop), E(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
        }, C.prototype.destroy = function () {
            this.isAlive && (this.event.unbindAll(), i(this.scrollbarX), i(this.scrollbarY), i(this.scrollbarXRail), i(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
        }, C.prototype.removePsClasses = function () {
            this.element.className = this.element.className.split(" ").filter(function (e) {
                return !e.match(/^ps([-_].+|)$/)
            }).join(" ")
        }, C
    }()
}, function (e, t, n) {
    /*!
     * clipboard.js v2.0.1
     * https://zenorocha.github.io/clipboard.js
     *
     * Licensed MIT Â© Zeno Rocha
     */
    !function (t, n) {
        e.exports = n()
    }(0, function () {
        return function (e) {
            var t = {};

            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {i: r, l: !1, exports: {}};
                return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }

            return n.m = e, n.c = t, n.i = function (e) {
                return e
            }, n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r})
            }, n.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 3)
        }([function (e, t, n) {
            var r, i, o;
            i = [e, n(7)], void 0 === (o = "function" == typeof (r = function (e, t) {
                "use strict";
                var n = function (e) {
                    return e && e.__esModule ? e : {default: e}
                }(t), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), o = function () {
                    function e(t) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.resolveOptions(t), this.initSelection()
                    }

                    return i(e, [{
                        key: "resolveOptions", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection", value: function () {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake", value: function () {
                            var e = this, t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function () {
                                return e.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                            var r = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = r + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, n.default)(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake", value: function () {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget", value: function () {
                            this.selectedText = (0, n.default)(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText", value: function () {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch (t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }
                    }, {
                        key: "handleResult", value: function (e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection", value: function () {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.removeFake()
                        }
                    }, {
                        key: "action", set: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        }, get: function () {
                            return this._action
                        }
                    }, {
                        key: "target", set: function (e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        }, get: function () {
                            return this._target
                        }
                    }]), e
                }();
                e.exports = o
            }) ? r.apply(t, i) : r) || (e.exports = o)
        }, function (e, t, n) {
            var r = n(6), i = n(5);
            e.exports = function (e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!r.string(t)) throw new TypeError("Second argument must be a String");
                if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
                if (r.node(e)) return function (e, t, n) {
                    return e.addEventListener(t, n), {
                        destroy: function () {
                            e.removeEventListener(t, n)
                        }
                    }
                }(e, t, n);
                if (r.nodeList(e)) return function (e, t, n) {
                    return Array.prototype.forEach.call(e, function (e) {
                        e.addEventListener(t, n)
                    }), {
                        destroy: function () {
                            Array.prototype.forEach.call(e, function (e) {
                                e.removeEventListener(t, n)
                            })
                        }
                    }
                }(e, t, n);
                if (r.string(e)) return function (e, t, n) {
                    return i(document.body, e, t, n)
                }(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
        }, function (e, t) {
            function n() {
            }

            n.prototype = {
                on: function (e, t, n) {
                    var r = this.e || (this.e = {});
                    return (r[e] || (r[e] = [])).push({fn: t, ctx: n}), this
                }, once: function (e, t, n) {
                    var r = this;

                    function i() {
                        r.off(e, i), t.apply(n, arguments)
                    }

                    return i._ = t, this.on(e, i, n)
                }, emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
                    return this
                }, off: function (e, t) {
                    var n = this.e || (this.e = {}), r = n[e], i = [];
                    if (r && t) for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                    return i.length ? n[e] = i : delete n[e], this
                }
            }, e.exports = n
        }, function (e, t, n) {
            var r, i, o;
            i = [e, n(0), n(2), n(1)], void 0 === (o = "function" == typeof (r = function (e, t, n, r) {
                "use strict";
                var i = s(t), o = s(n), a = s(r);

                function s(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, c = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), u = function (e) {
                    function t(e, n) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var r = function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return r.resolveOptions(n), r.listenClick(e), r
                    }

                    return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), c(t, [{
                        key: "resolveOptions", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === l(e.container) ? e.container : document.body
                        }
                    }, {
                        key: "listenClick", value: function (e) {
                            var t = this;
                            this.listener = (0, a.default)(e, "click", function (e) {
                                return t.onClick(e)
                            })
                        }
                    }, {
                        key: "onClick", value: function (e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new i.default({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                container: this.container,
                                trigger: t,
                                emitter: this
                            })
                        }
                    }, {
                        key: "defaultAction", value: function (e) {
                            return f("action", e)
                        }
                    }, {
                        key: "defaultTarget", value: function (e) {
                            var t = f("target", e);
                            if (t) return document.querySelector(t)
                        }
                    }, {
                        key: "defaultText", value: function (e) {
                            return f("text", e)
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }
                    }], [{
                        key: "isSupported", value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                t = "string" == typeof e ? [e] : e, n = !!document.queryCommandSupported;
                            return t.forEach(function (e) {
                                n = n && !!document.queryCommandSupported(e)
                            }), n
                        }
                    }]), t
                }(o.default);

                function f(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }

                e.exports = u
            }) ? r.apply(t, i) : r) || (e.exports = o)
        }, function (e, t) {
            var n = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var r = Element.prototype;
                r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
            }
            e.exports = function (e, t) {
                for (; e && e.nodeType !== n;) {
                    if ("function" == typeof e.matches && e.matches(t)) return e;
                    e = e.parentNode
                }
            }
        }, function (e, t, n) {
            var r = n(4);

            function i(e, t, n, i, o) {
                var a = function (e, t, n, i) {
                    return function (n) {
                        n.delegateTarget = r(n.target, t), n.delegateTarget && i.call(e, n)
                    }
                }.apply(this, arguments);
                return e.addEventListener(n, a, o), {
                    destroy: function () {
                        e.removeEventListener(n, a, o)
                    }
                }
            }

            e.exports = function (e, t, n, r, o) {
                return "function" == typeof e.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
                    return i(e, t, n, r, o)
                }))
            }
        }, function (e, t) {
            t.node = function (e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, t.nodeList = function (e) {
                var n = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
            }, t.string = function (e) {
                return "string" == typeof e || e instanceof String
            }, t.fn = function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, function (e, t) {
            e.exports = function (e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var r = window.getSelection(), i = document.createRange();
                    i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i), t = r.toString()
                }
                return t
            }
        }])
    })
}, function (e, t, n) {
    (function (t) {
        var n = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
            r = function () {
                var e = /\blang(?:uage)?-([\w-]+)\b/i, t = 0, r = n.Prism = {
                    manual: n.Prism && n.Prism.manual,
                    disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
                    util: {
                        encode: function (e) {
                            return e instanceof i ? new i(e.type, r.util.encode(e.content), e.alias) : "Array" === r.util.type(e) ? e.map(r.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                        }, type: function (e) {
                            return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                        }, objId: function (e) {
                            return e.__id || Object.defineProperty(e, "__id", {value: ++t}), e.__id
                        }, clone: function (e, t) {
                            var n = r.util.type(e);
                            switch (t = t || {}, n) {
                                case"Object":
                                    if (t[r.util.objId(e)]) return t[r.util.objId(e)];
                                    var i = {};
                                    for (var o in t[r.util.objId(e)] = i, e) e.hasOwnProperty(o) && (i[o] = r.util.clone(e[o], t));
                                    return i;
                                case"Array":
                                    if (t[r.util.objId(e)]) return t[r.util.objId(e)];
                                    i = [];
                                    return t[r.util.objId(e)] = i, e.forEach(function (e, n) {
                                        i[n] = r.util.clone(e, t)
                                    }), i
                            }
                            return e
                        }
                    },
                    languages: {
                        extend: function (e, t) {
                            var n = r.util.clone(r.languages[e]);
                            for (var i in t) n[i] = t[i];
                            return n
                        }, insertBefore: function (e, t, n, i) {
                            var o = (i = i || r.languages)[e];
                            if (2 == arguments.length) {
                                for (var a in n = arguments[1]) n.hasOwnProperty(a) && (o[a] = n[a]);
                                return o
                            }
                            var s = {};
                            for (var l in o) if (o.hasOwnProperty(l)) {
                                if (l == t) for (var a in n) n.hasOwnProperty(a) && (s[a] = n[a]);
                                s[l] = o[l]
                            }
                            return r.languages.DFS(r.languages, function (t, n) {
                                n === i[e] && t != e && (this[t] = s)
                            }), i[e] = s
                        }, DFS: function (e, t, n, i) {
                            for (var o in i = i || {}, e) e.hasOwnProperty(o) && (t.call(e, o, e[o], n || o), "Object" !== r.util.type(e[o]) || i[r.util.objId(e[o])] ? "Array" !== r.util.type(e[o]) || i[r.util.objId(e[o])] || (i[r.util.objId(e[o])] = !0, r.languages.DFS(e[o], t, o, i)) : (i[r.util.objId(e[o])] = !0, r.languages.DFS(e[o], t, null, i)))
                        }
                    },
                    plugins: {},
                    highlightAll: function (e, t) {
                        r.highlightAllUnder(document, e, t)
                    },
                    highlightAllUnder: function (e, t, n) {
                        var i = {
                            callback: n,
                            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                        };
                        r.hooks.run("before-highlightall", i);
                        for (var o, a = i.elements || e.querySelectorAll(i.selector), s = 0; o = a[s++];) r.highlightElement(o, !0 === t, i.callback)
                    },
                    highlightElement: function (t, i, o) {
                        for (var a, s, l = t; l && !e.test(l.className);) l = l.parentNode;
                        l && (a = (l.className.match(e) || [, ""])[1].toLowerCase(), s = r.languages[a]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + a, t.parentNode && (l = t.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + a));
                        var c = {element: t, language: a, grammar: s, code: t.textContent};
                        if (r.hooks.run("before-sanity-check", c), !c.code || !c.grammar) return c.code && (r.hooks.run("before-highlight", c), c.element.textContent = c.code, r.hooks.run("after-highlight", c)), void r.hooks.run("complete", c);
                        if (r.hooks.run("before-highlight", c), i && n.Worker) {
                            var u = new Worker(r.filename);
                            u.onmessage = function (e) {
                                c.highlightedCode = e.data, r.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(c.element), r.hooks.run("after-highlight", c), r.hooks.run("complete", c)
                            }, u.postMessage(JSON.stringify({language: c.language, code: c.code, immediateClose: !0}))
                        } else c.highlightedCode = r.highlight(c.code, c.grammar, c.language), r.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(t), r.hooks.run("after-highlight", c), r.hooks.run("complete", c)
                    },
                    highlight: function (e, t, n) {
                        var o = {code: e, grammar: t, language: n};
                        return r.hooks.run("before-tokenize", o), o.tokens = r.tokenize(o.code, o.grammar), r.hooks.run("after-tokenize", o), i.stringify(r.util.encode(o.tokens), o.language)
                    },
                    matchGrammar: function (e, t, n, i, o, a, s) {
                        var l = r.Token;
                        for (var c in n) if (n.hasOwnProperty(c) && n[c]) {
                            if (c == s) return;
                            var u = n[c];
                            u = "Array" === r.util.type(u) ? u : [u];
                            for (var f = 0; f < u.length; ++f) {
                                var d = u[f], p = d.inside, h = !!d.lookbehind, g = !!d.greedy, m = 0, v = d.alias;
                                if (g && !d.pattern.global) {
                                    var b = d.pattern.toString().match(/[imuy]*$/)[0];
                                    d.pattern = RegExp(d.pattern.source, b + "g")
                                }
                                d = d.pattern || d;
                                for (var y = i, w = o; y < t.length; w += t[y].length, ++y) {
                                    var E = t[y];
                                    if (t.length > e.length) return;
                                    if (!(E instanceof l)) {
                                        if (g && y != t.length - 1) {
                                            if (d.lastIndex = w, !(x = d.exec(e))) break;
                                            for (var T = x.index + (h ? x[1].length : 0), _ = x.index + x[0].length, S = y, C = w, A = t.length; S < A && (C < _ || !t[S].type && !t[S - 1].greedy); ++S) T >= (C += t[S].length) && (++y, w = C);
                                            if (t[y] instanceof l) continue;
                                            k = S - y, E = e.slice(w, C), x.index -= w
                                        } else {
                                            d.lastIndex = 0;
                                            var x = d.exec(E), k = 1
                                        }
                                        if (x) {
                                            h && (m = x[1] ? x[1].length : 0);
                                            _ = (T = x.index + m) + (x = x[0].slice(m)).length;
                                            var O = E.slice(0, T), N = E.slice(_), I = [y, k];
                                            O && (++y, w += O.length, I.push(O));
                                            var D = new l(c, p ? r.tokenize(x, p) : x, v, x, g);
                                            if (I.push(D), N && I.push(N), Array.prototype.splice.apply(t, I), 1 != k && r.matchGrammar(e, t, n, y, w, !0, c), a) break
                                        } else if (a) break
                                    }
                                }
                            }
                        }
                    },
                    tokenize: function (e, t, n) {
                        var i = [e], o = t.rest;
                        if (o) {
                            for (var a in o) t[a] = o[a];
                            delete t.rest
                        }
                        return r.matchGrammar(e, i, t, 0, 0, !1), i
                    },
                    hooks: {
                        all: {}, add: function (e, t) {
                            var n = r.hooks.all;
                            n[e] = n[e] || [], n[e].push(t)
                        }, run: function (e, t) {
                            var n = r.hooks.all[e];
                            if (n && n.length) for (var i, o = 0; i = n[o++];) i(t)
                        }
                    }
                }, i = r.Token = function (e, t, n, r, i) {
                    this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !!i
                };
                if (i.stringify = function (e, t, n) {
                    if ("string" == typeof e) return e;
                    if ("Array" === r.util.type(e)) return e.map(function (n) {
                        return i.stringify(n, t, e)
                    }).join("");
                    var o = {
                        type: e.type,
                        content: i.stringify(e.content, t, n),
                        tag: "span",
                        classes: ["token", e.type],
                        attributes: {},
                        language: t,
                        parent: n
                    };
                    if (e.alias) {
                        var a = "Array" === r.util.type(e.alias) ? e.alias : [e.alias];
                        Array.prototype.push.apply(o.classes, a)
                    }
                    r.hooks.run("wrap", o);
                    var s = Object.keys(o.attributes).map(function (e) {
                        return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                    }).join(" ");
                    return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + o.content + "</" + o.tag + ">"
                }, !n.document) return n.addEventListener ? (r.disableWorkerMessageHandler || n.addEventListener("message", function (e) {
                    var t = JSON.parse(e.data), i = t.language, o = t.code, a = t.immediateClose;
                    n.postMessage(r.highlight(o, r.languages[i], i)), a && n.close()
                }, !1), n.Prism) : n.Prism;
                var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
                return o && (r.filename = o.src, r.manual || o.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(r.highlightAll) : window.setTimeout(r.highlightAll, 16) : document.addEventListener("DOMContentLoaded", r.highlightAll))), n.Prism
            }();
        void 0 !== e && e.exports && (e.exports = r), void 0 !== t && (t.Prism = r), r.languages.markup = {
            comment: /<!--[\s\S]*?-->/,
            prolog: /<\?[\s\S]+?\?>/,
            doctype: /<!DOCTYPE[\s\S]+?>/i,
            cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
            tag: {
                pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
                greedy: !0,
                inside: {
                    tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
                    "attr-value": {
                        pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                        inside: {punctuation: [/^=/, {pattern: /(^|[^\\])["']/, lookbehind: !0}]}
                    },
                    punctuation: /\/?>/,
                    "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
                }
            },
            entity: /&#?[\da-z]{1,8};/i
        }, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.hooks.add("wrap", function (e) {
            "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
        }), r.languages.xml = r.languages.markup, r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
            url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
            selector: /[^{}\s][^{};]*?(?=\s*\{)/,
            string: {pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /\B!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:]/
        }, r.languages.css.atrule.inside.rest = r.languages.css, r.languages.markup && (r.languages.insertBefore("markup", "tag", {
            style: {
                pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
                lookbehind: !0,
                inside: r.languages.css,
                alias: "language-css",
                greedy: !0
            }
        }), r.languages.insertBefore("inside", "attr-value", {
            "style-attr": {
                pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                inside: {
                    "attr-name": {pattern: /^\s*style/i, inside: r.languages.markup.tag.inside},
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    "attr-value": {pattern: /.+/i, inside: r.languages.css}
                },
                alias: "language-css"
            }
        }, r.languages.markup.tag)), r.languages.clike = {
            comment: [{
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: !0
            }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
            string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
            "class-name": {
                pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
                lookbehind: !0,
                inside: {punctuation: /[.\\]/}
            },
            keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
            boolean: /\b(?:true|false)\b/,
            function: /[a-z0-9_]+(?=\()/i,
            number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
            punctuation: /[{}[\];(),.:]/
        }, r.languages.javascript = r.languages.extend("clike", {
            keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
            number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
            operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
        }), r.languages.insertBefore("javascript", "keyword", {
            regex: {
                pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
                lookbehind: !0,
                greedy: !0
            },
            "function-variable": {
                pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
                alias: "function"
            },
            constant: /\b[A-Z][A-Z\d_]*\b/
        }), r.languages.insertBefore("javascript", "string", {
            "template-string": {
                pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
                greedy: !0,
                inside: {
                    interpolation: {
                        pattern: /\${[^}]+}/,
                        inside: {"interpolation-punctuation": {pattern: /^\${|}$/, alias: "punctuation"}, rest: null}
                    }, string: /[\s\S]+/
                }
            }
        }), r.languages.javascript["template-string"].inside.interpolation.inside.rest = r.languages.javascript, r.languages.markup && r.languages.insertBefore("markup", "tag", {
            script: {
                pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                lookbehind: !0,
                inside: r.languages.javascript,
                alias: "language-javascript",
                greedy: !0
            }
        }), r.languages.js = r.languages.javascript, "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function () {
            var e = {
                js: "javascript",
                py: "python",
                rb: "ruby",
                ps1: "powershell",
                psm1: "powershell",
                sh: "bash",
                bat: "batch",
                h: "c",
                tex: "latex"
            };
            Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function (t) {
                for (var n, i = t.getAttribute("data-src"), o = t, a = /\blang(?:uage)?-([\w-]+)\b/i; o && !a.test(o.className);) o = o.parentNode;
                if (o && (n = (t.className.match(a) || [, ""])[1]), !n) {
                    var s = (i.match(/\.(\w+)$/) || [, ""])[1];
                    n = e[s] || s
                }
                var l = document.createElement("code");
                l.className = "language-" + n, t.textContent = "", l.textContent = "Loadingâ€¦", t.appendChild(l);
                var c = new XMLHttpRequest;
                c.open("GET", i, !0), c.onreadystatechange = function () {
                    4 == c.readyState && (c.status < 400 && c.responseText ? (l.textContent = c.responseText, r.highlightElement(l)) : c.status >= 400 ? l.textContent = "âœ– Error " + c.status + " while fetching file: " + c.statusText : l.textContent = "âœ– Error: File does not exist or is empty")
                }, c.send(null)
            }), r.plugins.toolbar && r.plugins.toolbar.registerButton("download-file", function (e) {
                var t = e.element.parentNode;
                if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-src") && t.hasAttribute("data-download-link")) {
                    var n = t.getAttribute("data-src"), r = document.createElement("a");
                    return r.textContent = t.getAttribute("data-download-link-label") || "Download", r.setAttribute("download", ""), r.href = n, r
                }
            })
        }, document.addEventListener("DOMContentLoaded", self.Prism.fileHighlight))
    }).call(this, n(5))
}, function (e, t) {
    Prism.languages.aspnet = Prism.languages.extend("markup", {
        "page-directive tag": {
            pattern: /<%\s*@.*%>/i,
            inside: {
                "page-directive tag": /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
                rest: Prism.languages.markup.tag.inside
            }
        },
        "directive tag": {
            pattern: /<%.*%>/i,
            inside: {"directive tag": /<%\s*?[$=%#:]{0,2}|%>/i, rest: Prism.languages.csharp}
        }
    }), Prism.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i, Prism.languages.insertBefore("inside", "punctuation", {"directive tag": Prism.languages.aspnet["directive tag"]}, Prism.languages.aspnet.tag.inside["attr-value"]), Prism.languages.insertBefore("aspnet", "comment", {"asp comment": /<%--[\s\S]*?--%>/}), Prism.languages.insertBefore("aspnet", Prism.languages.javascript ? "script" : "tag", {
        "asp script": {
            pattern: /(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
            lookbehind: !0,
            inside: Prism.languages.csharp || {}
        }
    })
}, function (e, t) {
    !function (e) {
        var t = {
            variable: [{
                pattern: /\$?\(\([\s\S]+?\)\)/,
                inside: {
                    variable: [{pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0}, /^\$\(\(/],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    punctuation: /\(\(?|\)\)?|,|;/
                }
            }, {
                pattern: /\$\([^)]+\)|`[^`]+`/,
                greedy: !0,
                inside: {variable: /^\$\(|^`|\)$|`$/}
            }, /\$(?:[\w#?*!@]+|\{[^}]+\})/i]
        };
        e.languages.bash = {
            shebang: {pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/, alias: "important"},
            comment: {pattern: /(^|[^"{\\])#.*/, lookbehind: !0},
            string: [{
                pattern: /((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,
                lookbehind: !0,
                greedy: !0,
                inside: t
            }, {pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/, greedy: !0, inside: t}],
            variable: t.variable,
            function: {
                pattern: /(^|[\s;|&])(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|[\s;|&])/,
                lookbehind: !0
            },
            keyword: {
                pattern: /(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,
                lookbehind: !0
            },
            boolean: {pattern: /(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/, lookbehind: !0},
            operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
        };
        var n = t.variable[1].inside;
        n.string = e.languages.bash.string, n.function = e.languages.bash.function, n.keyword = e.languages.bash.keyword, n.boolean = e.languages.bash.boolean, n.operator = e.languages.bash.operator, n.punctuation = e.languages.bash.punctuation, e.languages.shell = e.languages.bash
    }(Prism)
}, function (e, t) {
    Prism.languages.c = Prism.languages.extend("clike", {
        keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
        operator: /-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/]/,
        number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
    }), Prism.languages.insertBefore("c", "string", {
        macro: {
            pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            alias: "property",
            inside: {
                string: {pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/, lookbehind: !0},
                directive: {
                    pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                    lookbehind: !0,
                    alias: "keyword"
                }
            }
        },
        constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
    }), delete Prism.languages.c["class-name"], delete Prism.languages.c.boolean
}, function (e, t) {
    !function (e) {
        var t = /#(?!\{).+/, n = {pattern: /#\{[^}]+\}/, alias: "variable"};
        e.languages.coffeescript = e.languages.extend("javascript", {
            comment: t,
            string: [{pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0}, {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: {interpolation: n}
            }],
            keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            "class-member": {pattern: /@(?!\d)\w+/, alias: "variable"}
        }), e.languages.insertBefore("coffeescript", "comment", {
            "multiline-comment": {
                pattern: /###[\s\S]+?###/,
                alias: "comment"
            }, "block-regex": {pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: {comment: t, interpolation: n}}
        }), e.languages.insertBefore("coffeescript", "string", {
            "inline-javascript": {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {delimiter: {pattern: /^`|`$/, alias: "punctuation"}, rest: e.languages.javascript}
            },
            "multiline-string": [{pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string"}, {
                pattern: /"""[\s\S]*?"""/,
                greedy: !0,
                alias: "string",
                inside: {interpolation: n}
            }]
        }), e.languages.insertBefore("coffeescript", "keyword", {property: /(?!\d)\w+(?=\s*:(?!:))/}), delete e.languages.coffeescript["template-string"]
    }(Prism)
}, function (e, t) {
    Prism.languages.cpp = Prism.languages.extend("c", {
        keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
        boolean: /\b(?:true|false)\b/,
        operator: /--?|\+\+?|!=?|<{1,2}=?|>{1,2}=?|->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|\|?|\?|\*|\/|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
    }), Prism.languages.insertBefore("cpp", "keyword", {
        "class-name": {
            pattern: /(class\s+)\w+/i,
            lookbehind: !0
        }
    }), Prism.languages.insertBefore("cpp", "string", {
        "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0
        }
    })
}, function (e, t) {
    Prism.languages.csharp = Prism.languages.extend("clike", {
        keyword: /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
        string: [{
            pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/,
            greedy: !0
        }, {pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/, greedy: !0}],
        "class-name": [{
            pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,
            inside: {punctuation: /\./}
        }, {
            pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
            lookbehind: !0,
            inside: {punctuation: /\./}
        }, {
            pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
            lookbehind: !0,
            inside: {punctuation: /\./}
        }, {
            pattern: /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
            lookbehind: !0,
            inside: {punctuation: /\./}
        }],
        number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i
    }), Prism.languages.insertBefore("csharp", "class-name", {
        "generic-method": {
            pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/,
            inside: {
                function: /^\w+/,
                "class-name": {pattern: /\b[A-Z]\w*(?:\.\w+)*\b/, inside: {punctuation: /\./}},
                keyword: Prism.languages.csharp.keyword,
                punctuation: /[<>(),.:]/
            }
        },
        preprocessor: {
            pattern: /(^\s*)#.*/m,
            lookbehind: !0,
            alias: "property",
            inside: {
                directive: {
                    pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                    lookbehind: !0,
                    alias: "keyword"
                }
            }
        }
    }), Prism.languages.dotnet = Prism.languages.csharp
}, function (e, t) {
    Prism.languages.git = {
        comment: /^#.*/m,
        deleted: /^[-â€“].*/m,
        inserted: /^\+.*/m,
        string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
        command: {pattern: /^.*\$ git .*$/m, inside: {parameter: /\s--?\w+/m}},
        coord: /^@@.*@@$/m,
        commit_sha1: /^commit \w{40}$/m
    }
}, function (e, t) {
    Prism.languages.go = Prism.languages.extend("clike", {
        keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
        builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
        boolean: /\b(?:_|iota|nil|true|false)\b/,
        operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
        number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
        string: {pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0}
    }), delete Prism.languages.go["class-name"]
}, function (e, t) {
    Prism.languages.http = {
        "request-line": {
            pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
            inside: {property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/, "attr-name": /:\w+/}
        },
        "response-status": {
            pattern: /^HTTP\/1.[01] \d+.*/m,
            inside: {property: {pattern: /(^HTTP\/1.[01] )\d+.*/i, lookbehind: !0}}
        },
        "header-name": {pattern: /^[\w-]+:(?=.)/m, alias: "keyword"}
    };
    var n = {
        "application/json": Prism.languages.javascript,
        "application/xml": Prism.languages.markup,
        "text/xml": Prism.languages.markup,
        "text/html": Prism.languages.markup
    };
    for (var r in n) if (n[r]) {
        var i = {};
        i[r] = {
            pattern: new RegExp("(content-type:\\s*" + r + "[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*", "i"),
            lookbehind: !0,
            inside: {rest: n[r]}
        }, Prism.languages.insertBefore("http", "header-name", i)
    }
}, function (e, t) {
    Prism.languages.java = Prism.languages.extend("clike", {
        keyword: /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
        number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
        operator: {
            pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
            lookbehind: !0
        }
    }), Prism.languages.insertBefore("java", "function", {
        annotation: {
            alias: "punctuation",
            pattern: /(^|[^.])@\w+/,
            lookbehind: !0
        }
    }), Prism.languages.insertBefore("java", "class-name", {
        generics: {
            pattern: /<\s*\w+(?:\.\w+)?(?:\s*,\s*\w+(?:\.\w+)?)*>/i,
            alias: "function",
            inside: {keyword: Prism.languages.java.keyword, punctuation: /[<>(),.:]/}
        }
    })
}, function (e, t) {
    Prism.languages.json = {
        property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
        string: {pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0},
        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        punctuation: /[{}[\]);,]/,
        operator: /:/g,
        boolean: /\b(?:true|false)\b/i,
        null: /\bnull\b/i
    }, Prism.languages.jsonp = Prism.languages.json
}, function (e, t) {
    !function (e) {
        var t = e.util.clone(e.languages.javascript);
        e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i, e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i, e.languages.insertBefore("inside", "attr-name", {
            spread: {
                pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
                inside: {punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/}
            }
        }, e.languages.jsx.tag), e.languages.insertBefore("inside", "attr-value", {
            script: {
                pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                inside: {"script-punctuation": {pattern: /^=(?={)/, alias: "punctuation"}, rest: e.languages.jsx},
                alias: "language-javascript"
            }
        }, e.languages.jsx.tag);
        var n = function (e) {
            return e ? "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(n).join("") : ""
        }, r = function (t) {
            for (var i = [], o = 0; o < t.length; o++) {
                var a = t[o], s = !1;
                if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? i.length > 0 && i[i.length - 1].tagName === n(a.content[0].content[1]) && i.pop() : "/>" === a.content[a.content.length - 1].content || i.push({
                    tagName: n(a.content[0].content[1]),
                    openedBraces: 0
                }) : i.length > 0 && "punctuation" === a.type && "{" === a.content ? i[i.length - 1].openedBraces++ : i.length > 0 && i[i.length - 1].openedBraces > 0 && "punctuation" === a.type && "}" === a.content ? i[i.length - 1].openedBraces-- : s = !0), (s || "string" == typeof a) && i.length > 0 && 0 === i[i.length - 1].openedBraces) {
                    var l = n(a);
                    o < t.length - 1 && ("string" == typeof t[o + 1] || "plain-text" === t[o + 1].type) && (l += n(t[o + 1]), t.splice(o + 1, 1)), o > 0 && ("string" == typeof t[o - 1] || "plain-text" === t[o - 1].type) && (l = n(t[o - 1]) + l, t.splice(o - 1, 1), o--), t[o] = new e.Token("plain-text", l, null, l)
                }
                a.content && "string" != typeof a.content && r(a.content)
            }
        };
        e.hooks.add("after-tokenize", function (e) {
            "jsx" !== e.language && "tsx" !== e.language || r(e.tokens)
        })
    }(Prism)
}, function (e, t) {
    !function (e) {
        var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i, n = {"equation-command": {pattern: t, alias: "regex"}};
        e.languages.latex = {
            comment: /%.*/m,
            cdata: {pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/, lookbehind: !0},
            equation: [{
                pattern: /\$(?:\\[\s\S]|[^\\$])*\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
                inside: n,
                alias: "string"
            }, {
                pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
                lookbehind: !0,
                inside: n,
                alias: "string"
            }],
            keyword: {
                pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
                lookbehind: !0
            },
            url: {pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0},
            headline: {
                pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
                lookbehind: !0,
                alias: "class-name"
            },
            function: {pattern: t, alias: "selector"},
            punctuation: /[[\]{}&]/
        }
    }(Prism)
}, function (e, t) {
    Prism.languages.less = Prism.languages.extend("css", {
        comment: [/\/\*[\s\S]*?\*\//, {
            pattern: /(^|[^\\])\/\/.*/,
            lookbehind: !0
        }],
        atrule: {pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i, inside: {punctuation: /[:()]/}},
        selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
            inside: {variable: /@+[\w-]+/}
        },
        property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
        punctuation: /[{}();:,]/,
        operator: /[+\-*\/]/
    }), Prism.languages.insertBefore("less", "punctuation", {function: Prism.languages.less.function}), Prism.languages.insertBefore("less", "property", {
        variable: [{
            pattern: /@[\w-]+\s*:/,
            inside: {punctuation: /:/}
        }, /@@?[\w-]+/],
        "mixin-usage": {pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/, lookbehind: !0, alias: "function"}
    })
}, function (e, t) {
    Prism.languages["markup-templating"] = {}, Object.defineProperties(Prism.languages["markup-templating"], {
        buildPlaceholders: {
            value: function (e, t, n, r) {
                e.language === t && (e.tokenStack = [], e.code = e.code.replace(n, function (n) {
                    if ("function" == typeof r && !r(n)) return n;
                    for (var i = e.tokenStack.length; -1 !== e.code.indexOf("___" + t.toUpperCase() + i + "___");) ++i;
                    return e.tokenStack[i] = n, "___" + t.toUpperCase() + i + "___"
                }), e.grammar = Prism.languages.markup)
            }
        }, tokenizePlaceholders: {
            value: function (e, t) {
                if (e.language === t && e.tokenStack) {
                    e.grammar = Prism.languages[t];
                    var n = 0, r = Object.keys(e.tokenStack), i = function (o) {
                        if (!(n >= r.length)) for (var a = 0; a < o.length; a++) {
                            var s = o[a];
                            if ("string" == typeof s || s.content && "string" == typeof s.content) {
                                var l = r[n], c = e.tokenStack[l], u = "string" == typeof s ? s : s.content,
                                    f = u.indexOf("___" + t.toUpperCase() + l + "___");
                                if (f > -1) {
                                    ++n;
                                    var d, p = u.substring(0, f),
                                        h = new Prism.Token(t, Prism.tokenize(c, e.grammar, t), "language-" + t, c),
                                        g = u.substring(f + ("___" + t.toUpperCase() + l + "___").length);
                                    if (p || g ? (d = [p, h, g].filter(function (e) {
                                        return !!e
                                    }), i(d)) : d = h, "string" == typeof s ? Array.prototype.splice.apply(o, [a, 1].concat(d)) : s.content = d, n >= r.length) break
                                }
                            } else s.content && "string" != typeof s.content && i(s.content)
                        }
                    };
                    i(e.tokens)
                }
            }
        }
    })
}, function (e, t) {
    Prism.languages.markdown = Prism.languages.extend("markup", {}), Prism.languages.insertBefore("markdown", "prolog", {
        blockquote: {pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation"},
        code: [{pattern: /^(?: {4}|\t).+/m, alias: "keyword"}, {pattern: /``.+?``|`[^`\n]+`/, alias: "keyword"}],
        title: [{
            pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
            alias: "important",
            inside: {punctuation: /==+$|--+$/}
        }, {pattern: /(^\s*)#+.+/m, lookbehind: !0, alias: "important", inside: {punctuation: /^#+|#+$/}}],
        hr: {pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation"},
        list: {pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation"},
        "url-reference": {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
                variable: {pattern: /^(!?\[)[^\]]+/, lookbehind: !0},
                string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/
            },
            alias: "url"
        },
        bold: {
            pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
            lookbehind: !0,
            inside: {punctuation: /^\*\*|^__|\*\*$|__$/}
        },
        italic: {
            pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
            lookbehind: !0,
            inside: {punctuation: /^[*_]|[*_]$/}
        },
        url: {
            pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
            inside: {
                variable: {pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0},
                string: {pattern: /"(?:\\.|[^"\\])*"(?=\)$)/}
            }
        }
    }), Prism.languages.markdown.bold.inside.url = Prism.languages.markdown.url, Prism.languages.markdown.italic.inside.url = Prism.languages.markdown.url, Prism.languages.markdown.bold.inside.italic = Prism.languages.markdown.italic, Prism.languages.markdown.italic.inside.bold = Prism.languages.markdown.bold
}, function (e, t) {
    Prism.languages.matlab = {
        comment: [/%\{[\s\S]*?\}%/, /%.+/],
        string: {pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0},
        number: /(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
        keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
        function: /(?!\d)\w+(?=\s*\()/,
        operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
        punctuation: /\.{3}|[.,;\[\](){}!]/
    }
}, function (e, t) {
    Prism.languages.objectivec = Prism.languages.extend("c", {
        keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
        string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
    })
}, function (e, t) {
    Prism.languages.perl = {
        comment: [{pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m, lookbehind: !0}, {pattern: /(^|[^\\$])#.*/, lookbehind: !0}],
        string: [{
            pattern: /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
            greedy: !0
        }, {
            pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
            greedy: !0
        }, {
            pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,
            greedy: !0
        }, {
            pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
            greedy: !0
        }, {
            pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
            greedy: !0
        }, {
            pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,
            greedy: !0
        }, {pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0}, {pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: !0}],
        regex: [{
            pattern: /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
            greedy: !0
        }, {
            pattern: /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
            greedy: !0
        }, {
            pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
            greedy: !0
        }, {
            pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
            greedy: !0
        }, {
            pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
            greedy: !0
        }, {
            pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
            greedy: !0
        }, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
            greedy: !0
        }],
        variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+)+(?:::)*/i, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
        filehandle: {pattern: /<(?![<=])\S*>|\b_\b/, alias: "symbol"},
        vstring: {pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/, alias: "string"},
        function: {pattern: /sub [a-z0-9_]+/i, inside: {keyword: /sub/}},
        keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
        number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
        operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
        punctuation: /[{}[\];(),:]/
    }
}, function (e, t) {
    !function (e) {
        e.languages.php = e.languages.extend("clike", {
            keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
            constant: /\b[A-Z0-9_]{2,}\b/,
            comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0}
        }), e.languages.insertBefore("php", "string", {
            "shell-comment": {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: "comment"
            }
        }), e.languages.insertBefore("php", "keyword", {
            delimiter: {pattern: /\?>|<\?(?:php|=)?/i, alias: "important"},
            variable: /\$+(?:\w+\b|(?={))/i,
            package: {pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: {punctuation: /\\/}}
        }), e.languages.insertBefore("php", "operator", {
            property: {
                pattern: /(->)[\w]+/,
                lookbehind: !0
            }
        }), e.languages.insertBefore("php", "string", {
            "nowdoc-string": {
                pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
                greedy: !0,
                alias: "string",
                inside: {
                    delimiter: {
                        pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {punctuation: /^<<<'?|[';]$/}
                    }
                }
            },
            "heredoc-string": {
                pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
                greedy: !0,
                alias: "string",
                inside: {
                    delimiter: {
                        pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {punctuation: /^<<<"?|[";]$/}
                    }, interpolation: null
                }
            },
            "single-quoted-string": {pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: "string"},
            "double-quoted-string": {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                alias: "string",
                inside: {interpolation: null}
            }
        }), delete e.languages.php.string;
        var t = {
            pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: {rest: e.languages.php}
        };
        e.languages.php["heredoc-string"].inside.interpolation = t, e.languages.php["double-quoted-string"].inside.interpolation = t, e.hooks.add("before-tokenize", function (t) {
            if (/(?:<\?php|<\?)/gi.test(t.code)) {
                e.languages["markup-templating"].buildPlaceholders(t, "php", /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)
            }
        }), e.hooks.add("after-tokenize", function (t) {
            e.languages["markup-templating"].tokenizePlaceholders(t, "php")
        })
    }(Prism)
}, function (e, t) {
    Prism.languages.python = {
        comment: {pattern: /(^|[^\\])#.*/, lookbehind: !0},
        "triple-quoted-string": {pattern: /("""|''')[\s\S]+?\1/, greedy: !0, alias: "string"},
        string: {pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0},
        function: {pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0},
        "class-name": {pattern: /(\bclass\s+)\w+/i, lookbehind: !0},
        keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|pass|print|raise|return|try|while|with|yield)\b/,
        builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
        boolean: /\b(?:True|False|None)\b/,
        number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
        operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
        punctuation: /[{}[\];(),.:]/
    }
}, function (e, t) {
    !function (e) {
        e.languages.ruby = e.languages.extend("clike", {
            comment: [/#.*/, {
                pattern: /^=begin(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?=end/m,
                greedy: !0
            }],
            keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
        });
        var t = {
            pattern: /#\{[^}]+\}/,
            inside: {delimiter: {pattern: /^#\{|\}$/, alias: "tag"}, rest: e.languages.ruby}
        };
        e.languages.insertBefore("ruby", "keyword", {
            regex: [{
                pattern: /%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,
                greedy: !0,
                inside: {interpolation: t}
            }, {
                pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
                greedy: !0,
                inside: {interpolation: t}
            }, {
                pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
                greedy: !0,
                inside: {interpolation: t}
            }, {
                pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
                greedy: !0,
                inside: {interpolation: t}
            }, {
                pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
                greedy: !0,
                inside: {interpolation: t}
            }, {
                pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
                lookbehind: !0,
                greedy: !0
            }],
            variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
            symbol: {pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/, lookbehind: !0}
        }), e.languages.insertBefore("ruby", "number", {
            builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
            constant: /\b[A-Z]\w*(?:[?!]|\b)/
        }), e.languages.ruby.string = [{
            pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
            greedy: !0,
            inside: {interpolation: t}
        }, {
            pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
            greedy: !0,
            inside: {interpolation: t}
        }, {
            pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
            greedy: !0,
            inside: {interpolation: t}
        }, {
            pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
            greedy: !0,
            inside: {interpolation: t}
        }, {
            pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
            greedy: !0,
            inside: {interpolation: t}
        }, {
            pattern: /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
            inside: {interpolation: t}
        }]
    }(Prism)
}, function (e, t) {
    !function (e) {
        e.languages.sass = e.languages.extend("css", {
            comment: {
                pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
                lookbehind: !0
            }
        }), e.languages.insertBefore("sass", "atrule", {
            "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: {atrule: /(?:@[\w-]+|[+=])/m}
            }
        }), delete e.languages.sass.atrule;
        var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {pattern: /(\s+)-(?=\s)/, lookbehind: !0}];
        e.languages.insertBefore("sass", "property", {
            "variable-line": {
                pattern: /^[ \t]*\$.+/m,
                inside: {punctuation: /:/, variable: t, operator: n}
            },
            "property-line": {
                pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
                inside: {
                    property: [/[^:\s]+(?=\s*:)/, {pattern: /(:)[^:\s]+/, lookbehind: !0}],
                    punctuation: /:/,
                    variable: t,
                    operator: n,
                    important: e.languages.sass.important
                }
            }
        }), delete e.languages.sass.property, delete e.languages.sass.important, delete e.languages.sass.selector, e.languages.insertBefore("sass", "punctuation", {
            selector: {
                pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0
            }
        })
    }(Prism)
}, function (e, t) {
    Prism.languages.scss = Prism.languages.extend("css", {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0
        },
        atrule: {pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: {rule: /@[\w-]+/}},
        url: /(?:[-a-z]+-)*url(?=\()/i,
        selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
                parent: {pattern: /&/, alias: "important"},
                placeholder: /%[-\w]+/,
                variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }
        }
    }), Prism.languages.insertBefore("scss", "atrule", {
        keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
            pattern: /( +)(?:from|through)(?= )/,
            lookbehind: !0
        }]
    }), Prism.languages.scss.property = {
        pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
        inside: {variable: /\$[-\w]+|#\{\$[-\w]+\}/}
    }, Prism.languages.insertBefore("scss", "important", {variable: /\$[-\w]+|#\{\$[-\w]+\}/}), Prism.languages.insertBefore("scss", "function", {
        placeholder: {
            pattern: /%[-\w]+/,
            alias: "selector"
        },
        statement: {pattern: /\B!(?:default|optional)\b/i, alias: "keyword"},
        boolean: /\b(?:true|false)\b/,
        null: /\bnull\b/,
        operator: {pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0}
    }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss
}, function (e, t) {
    Prism.languages.sql = {
        comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0},
        string: {pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\])*\2/, greedy: !0, lookbehind: !0},
        variable: /@[\w.$]+|@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
        function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
        keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
        boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
        number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
        operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
        punctuation: /[;[\]()`,.]/
    }
}, function (e, t) {
    Prism.languages.swift = Prism.languages.extend("clike", {
        string: {
            pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
                    inside: {delimiter: {pattern: /^\\\(|\)$/, alias: "variable"}}
                }
            }
        },
        keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
        number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
        constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
        atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
        builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
    }), Prism.languages.swift.string.inside.interpolation.inside.rest = Prism.languages.swift
}, function (e, t) {
    !function () {
        if ("undefined" != typeof self && self.Prism && self.document) {
            var e = [], t = {}, n = function () {
            };
            Prism.plugins.toolbar = {};
            var r = Prism.plugins.toolbar.registerButton = function (n, r) {
                var i;
                i = "function" == typeof r ? r : function (e) {
                    var t;
                    return "function" == typeof r.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function () {
                        r.onClick.call(this, e)
                    })) : "string" == typeof r.url ? (t = document.createElement("a")).href = r.url : t = document.createElement("span"), t.textContent = r.text, t
                }, e.push(t[n] = i)
            }, i = Prism.plugins.toolbar.hook = function (r) {
                var i = r.element.parentNode;
                if (i && /pre/i.test(i.nodeName) && !i.parentNode.classList.contains("code-toolbar")) {
                    var o = document.createElement("div");
                    o.classList.add("code-toolbar"), i.parentNode.insertBefore(o, i), o.appendChild(i);
                    var a = document.createElement("div");
                    a.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (e = document.body.getAttribute("data-toolbar-order").split(",").map(function (e) {
                        return t[e] || n
                    })), e.forEach(function (e) {
                        var t = e(r);
                        if (t) {
                            var n = document.createElement("div");
                            n.classList.add("toolbar-item"), n.appendChild(t), a.appendChild(n)
                        }
                    }), o.appendChild(a)
                }
            };
            r("label", function (e) {
                var t = e.element.parentNode;
                if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                    var n, r, i = t.getAttribute("data-label");
                    try {
                        r = document.querySelector("template#" + i)
                    } catch (e) {
                    }
                    return r ? n = r.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = i), n
                }
            }), Prism.hooks.add("complete", i)
        }
    }()
}, function (e, t) {
    !function () {
        function e(e, t) {
            return Array.prototype.slice.call((t || document).querySelectorAll(e))
        }

        function t(e, t) {
            return t = " " + t + " ", (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t) > -1
        }

        function n(e, n, r) {
            for (var o, a = (n = "string" == typeof n ? n : e.getAttribute("data-line")).replace(/\s+/g, "").split(","), s = +e.getAttribute("data-line-offset") || 0, l = (i() ? parseInt : parseFloat)(getComputedStyle(e).lineHeight), c = t(e, "line-numbers"), u = 0; o = a[u++];) {
                var f = o.split("-"), d = +f[0], p = +f[1] || d,
                    h = e.querySelector('.line-highlight[data-range="' + o + '"]') || document.createElement("div");
                if (h.setAttribute("aria-hidden", "true"), h.setAttribute("data-range", o), h.className = (r || "") + " line-highlight", c && Prism.plugins.lineNumbers) {
                    var g = Prism.plugins.lineNumbers.getLine(e, d), m = Prism.plugins.lineNumbers.getLine(e, p);
                    g && (h.style.top = g.offsetTop + "px"), m && (h.style.height = m.offsetTop - g.offsetTop + m.offsetHeight + "px")
                } else h.setAttribute("data-start", d), p > d && h.setAttribute("data-end", p), h.style.top = (d - s - 1) * l + "px", h.textContent = new Array(p - d + 2).join(" \n");
                c ? e.appendChild(h) : (e.querySelector("code") || e).appendChild(h)
            }
        }

        function r() {
            var t = location.hash.slice(1);
            e(".temporary.line-highlight").forEach(function (e) {
                e.parentNode.removeChild(e)
            });
            var r = (t.match(/\.([\d,-]+)$/) || [, ""])[1];
            if (r && !document.getElementById(t)) {
                var i = t.slice(0, t.lastIndexOf(".")), o = document.getElementById(i);
                o && (o.hasAttribute("data-line") || o.setAttribute("data-line", ""), n(o, r, "temporary "), document.querySelector(".temporary.line-highlight").scrollIntoView())
            }
        }

        if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
            var i = function () {
                var e;
                return function () {
                    if (void 0 === e) {
                        var t = document.createElement("div");
                        t.style.fontSize = "13px", t.style.lineHeight = "1.5", t.style.padding = 0, t.style.border = 0, t.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(t), e = 38 === t.offsetHeight, document.body.removeChild(t)
                    }
                    return e
                }
            }(), o = 0;
            Prism.hooks.add("before-sanity-check", function (t) {
                var n = t.element.parentNode, r = n && n.getAttribute("data-line");
                if (n && r && /pre/i.test(n.nodeName)) {
                    var i = 0;
                    e(".line-highlight", n).forEach(function (e) {
                        i += e.textContent.length, e.parentNode.removeChild(e)
                    }), i && /^( \n)+$/.test(t.code.slice(-i)) && (t.code = t.code.slice(0, -i))
                }
            }), Prism.hooks.add("complete", function e(i) {
                var a = i.element.parentNode, s = a && a.getAttribute("data-line");
                if (a && s && /pre/i.test(a.nodeName)) {
                    clearTimeout(o);
                    var l = Prism.plugins.lineNumbers, c = i.plugins && i.plugins.lineNumbers;
                    t(a, "line-numbers") && l && !c ? Prism.hooks.add("line-numbers", e) : (n(a, s), o = setTimeout(r, 1))
                }
            }), window.addEventListener("hashchange", r), window.addEventListener("resize", function () {
                var e = document.querySelectorAll("pre[data-line]");
                Array.prototype.forEach.call(e, function (e) {
                    n(e)
                })
            })
        }
    }()
}, function (e, t) {
    !function () {
        if ("undefined" != typeof self && self.Prism && self.document) {
            var e = "line-numbers", t = /\n(?!$)/g, n = function (e) {
                var n = r(e)["white-space"];
                if ("pre-wrap" === n || "pre-line" === n) {
                    var i = e.querySelector("code"), o = e.querySelector(".line-numbers-rows"),
                        a = e.querySelector(".line-numbers-sizer"), s = i.textContent.split(t);
                    a || ((a = document.createElement("span")).className = "line-numbers-sizer", i.appendChild(a)), a.style.display = "block", s.forEach(function (e, t) {
                        a.textContent = e || "\n";
                        var n = a.getBoundingClientRect().height;
                        o.children[t].style.height = n + "px"
                    }), a.textContent = "", a.style.display = "none"
                }
            }, r = function (e) {
                return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
            };
            window.addEventListener("resize", function () {
                Array.prototype.forEach.call(document.querySelectorAll("pre." + e), n)
            }), Prism.hooks.add("complete", function (e) {
                if (e.code) {
                    var r = e.element.parentNode, i = /\s*\bline-numbers\b\s*/;
                    if (r && /pre/i.test(r.nodeName) && (i.test(r.className) || i.test(e.element.className)) && !e.element.querySelector(".line-numbers-rows")) {
                        i.test(e.element.className) && (e.element.className = e.element.className.replace(i, " ")), i.test(r.className) || (r.className += " line-numbers");
                        var o, a = e.code.match(t), s = a ? a.length + 1 : 1, l = new Array(s + 1);
                        l = l.join("<span></span>"), (o = document.createElement("span")).setAttribute("aria-hidden", "true"), o.className = "line-numbers-rows", o.innerHTML = l, r.hasAttribute("data-start") && (r.style.counterReset = "linenumber " + (parseInt(r.getAttribute("data-start"), 10) - 1)), e.element.appendChild(o), n(r), Prism.hooks.run("line-numbers", e)
                    }
                }
            }), Prism.hooks.add("line-numbers", function (e) {
                e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
            }), Prism.plugins.lineNumbers = {
                getLine: function (t, n) {
                    if ("PRE" === t.tagName && t.classList.contains(e)) {
                        var r = t.querySelector(".line-numbers-rows"),
                            i = parseInt(t.getAttribute("data-start"), 10) || 1, o = i + (r.children.length - 1);
                        i > n && (n = i), n > o && (n = o);
                        var a = n - i;
                        return r.children[a]
                    }
                }
            }
        }
    }()
}, function (e, t) {
    !function () {
        if ("undefined" != typeof self && self.Prism && self.document) {
            if (!Prism.plugins.toolbar) return void console.warn("Show Languages plugin loaded before Toolbar plugin.");
            var e = {
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                css: "CSS",
                clike: "C-like",
                javascript: "JavaScript",
                abap: "ABAP",
                actionscript: "ActionScript",
                apacheconf: "Apache Configuration",
                apl: "APL",
                applescript: "AppleScript",
                arff: "ARFF",
                asciidoc: "AsciiDoc",
                asm6502: "6502 Assembly",
                aspnet: "ASP.NET (C#)",
                autohotkey: "AutoHotkey",
                autoit: "AutoIt",
                basic: "BASIC",
                csharp: "C#",
                cpp: "C++",
                coffeescript: "CoffeeScript",
                csp: "Content-Security-Policy",
                "css-extras": "CSS Extras",
                django: "Django/Jinja2",
                erb: "ERB",
                fsharp: "F#",
                gedcom: "GEDCOM",
                glsl: "GLSL",
                graphql: "GraphQL",
                http: "HTTP",
                hpkp: "HTTP Public-Key-Pins",
                hsts: "HTTP Strict-Transport-Security",
                ichigojam: "IchigoJam",
                inform7: "Inform 7",
                json: "JSON",
                latex: "LaTeX",
                livescript: "LiveScript",
                lolcode: "LOLCODE",
                "markup-templating": "Markup templating",
                matlab: "MATLAB",
                mel: "MEL",
                n4js: "N4JS",
                nasm: "NASM",
                nginx: "nginx",
                nsis: "NSIS",
                objectivec: "Objective-C",
                ocaml: "OCaml",
                opencl: "OpenCL",
                parigp: "PARI/GP",
                objectpascal: "Object Pascal",
                php: "PHP",
                "php-extras": "PHP Extras",
                plsql: "PL/SQL",
                powershell: "PowerShell",
                properties: ".properties",
                protobuf: "Protocol Buffers",
                q: "Q (kdb+ database)",
                jsx: "React JSX",
                tsx: "React TSX",
                renpy: "Ren'py",
                rest: "reST (reStructuredText)",
                sas: "SAS",
                sass: "Sass (Sass)",
                scss: "Sass (Scss)",
                sql: "SQL",
                soy: "Soy (Closure Template)",
                tap: "TAP",
                tt2: "Template Toolkit 2",
                typescript: "TypeScript",
                vbnet: "VB.Net",
                vhdl: "VHDL",
                vim: "vim",
                "visual-basic": "Visual Basic",
                wasm: "WebAssembly",
                wiki: "Wiki markup",
                xojo: "Xojo (REALbasic)",
                xquery: "XQuery",
                yaml: "YAML"
            };
            Prism.plugins.toolbar.registerButton("show-language", function (t) {
                var n = t.element.parentNode;
                if (n && /pre/i.test(n.nodeName)) {
                    var r = n.getAttribute("data-language") || e[t.language] || t.language && t.language.substring(0, 1).toUpperCase() + t.language.substring(1);
                    if (r) {
                        var i = document.createElement("span");
                        return i.textContent = r, i
                    }
                }
            })
        }
    }()
}, function (e, t) {
    "undefined" != typeof self && self.Prism && self.document && Prism.languages.markup && (Prism.plugins.UnescapedMarkup = !0, Prism.hooks.add("before-highlightall", function (e) {
        e.selector += ", [class*='lang-'] script[type='text/plain'], [class*='language-'] script[type='text/plain'], script[type='text/plain'][class*='lang-'], script[type='text/plain'][class*='language-']"
    }), Prism.hooks.add("before-sanity-check", function (e) {
        if ((e.element.matches || e.element.msMatchesSelector).call(e.element, "script[type='text/plain']")) {
            var t = document.createElement("code");
            return (n = document.createElement("pre")).className = t.className = e.element.className, e.element.dataset && Object.keys(e.element.dataset).forEach(function (t) {
                Object.prototype.hasOwnProperty.call(e.element.dataset, t) && (n.dataset[t] = e.element.dataset[t])
            }), e.code = e.code.replace(/&lt;\/script(>|&gt;)/gi, "<\/script>"), t.textContent = e.code, n.appendChild(t), e.element.parentNode.replaceChild(n, e.element), void (e.element = t)
        }
        var n = e.element.parentNode;
        !e.code && n && "pre" == n.nodeName.toLowerCase() && e.element.childNodes.length && "#comment" == e.element.childNodes[0].nodeName && (e.element.textContent = e.code = e.element.childNodes[0].textContent)
    }))
}, function (e, t, n) {
    !function () {
        if ("undefined" != typeof self && self.Prism && self.document) {
            if (!Prism.plugins.toolbar) return void console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");
            var e = window.ClipboardJS || void 0;
            e || (e = n(10));
            var t = [];
            if (!e) {
                var r = document.createElement("script"), i = document.querySelector("head");
                r.onload = function () {
                    if (e = window.ClipboardJS) for (; t.length;) t.pop()()
                }, r.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", i.appendChild(r)
            }
            Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (n) {
                function r() {
                    var t = new e(o, {
                        text: function () {
                            return n.code
                        }
                    });
                    t.on("success", function () {
                        o.textContent = "Copied!", i()
                    }), t.on("error", function () {
                        o.textContent = "Press Ctrl+C to copy", i()
                    })
                }

                function i() {
                    setTimeout(function () {
                        o.textContent = "Copy"
                    }, 5e3)
                }

                var o = document.createElement("a");
                return o.textContent = "Copy", e ? r() : t.push(r), o
            })
        }
    }()
}, function (e, t) {
    !function (e) {
        page.registerVendor("Jquery"), page.initJquery = function () {
            let t = document.head.querySelector('meta[name="csrf-token"]');
            t && e.ajaxSetup({headers: {"X-CSRF-TOKEN": t.content}})
        }
    }(jQuery), jQuery.fn.hasDataAttr = function (e) {
        return $(this)[0].hasAttribute("data-" + e)
    }, jQuery.fn.dataAttr = function (e, t) {
        return void 0 == $(this)[0] ? t : $(this)[0].getAttribute("data-" + e) || t
    }, jQuery.expr[":"].search = function (e, t, n) {
        return $(e).html().toUpperCase().indexOf(n[3].toUpperCase()) >= 0
    }, jQuery.fn.outerHTML = function () {
        var e = "";
        return this.each(function () {
            e += $(this).prop("outerHTML")
        }), e
    }, jQuery.fn.fullHTML = function () {
        var e = "";
        return $(this).each(function () {
            e += $(this).outerHTML()
        }), e
    }, jQuery.fn.scrollToEnd = function () {
        return $(this).scrollTop($(this).prop("scrollHeight")), this
    }
}, function (e, t) {
    !function (e) {
        page.registerVendor("Bootstrap"), page.initBootstrap = function () {
            e('[data-toggle="tooltip"]').tooltip(), e('[data-toggle="popover"]').popover(), e(document).on("click", ".custom-checkbox", function () {
                var t = e(this).children(".custom-control-input").not(":disabled");
                t.prop("checked", !t.prop("checked")).trigger("change")
            }), e(document).on("click", ".custom-radio", function () {
                e(this).children(".custom-control-input").not(":disabled").prop("checked", !0).trigger("change")
            })
        }
    }(jQuery)
}, function (e, t, n) {
    n(47), n(48), n(49), n(50), n(51), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64)
}, function (e, t) {
    !function (e) {
        page.config = function (t) {
            if ("string" == typeof t) return page.defaults[t];
            if (e.extend(!0, page.defaults, t), page.defaults.smoothScroll || SmoothScroll.destroy(), e('[data-provide~="map"]').length && void 0 === window["google.maps.Map"] && e.getScript("https://maps.googleapis.com/maps/api/js?key=" + page.defaults.googleApiKey + "&callback=page.initMap"), page.defaults.googleAnalyticsId && (!function (e, t, n, r, i, o, a) {
                e.GoogleAnalyticsObject = i, e.ga = e.ga || function () {
                    (e.ga.q = e.ga.q || []).push(arguments)
                }, e.ga.l = 1 * new Date, o = t.createElement(n), a = t.getElementsByTagName(n)[0], o.async = 1, o.src = "https://www.google-analytics.com/analytics.js", a.parentNode.insertBefore(o, a)
            }(window, document, "script", 0, "ga"), ga("create", page.defaults.googleAnalyticsId, "auto"), ga("send", "pageview")), e('[data-provide~="recaptcha"]').length && void 0 === window.grecaptcha) {
                var n = "https://www.google.com/recaptcha/api.js?onload=recaptchaLoadCallback";
                "" != page.defaults.reCaptchaLanguage && (n += "&hl=" + page.defaults.reCaptchaLanguage), e.getScript(n)
            }
            page.init()
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initBind = function () {
            e("[data-bind-radio]").each(function () {
                var t = e(this), n = t.data("bind-radio"), r = e('input[name="' + n + '"]:checked').val();
                t.text(t.dataAttr(r, t.text())), e('input[name="' + n + '"]').on("change", function () {
                    var t = e('input[name="' + n + '"]:checked').val();
                    e('[data-bind-radio="' + n + '"]').each(function () {
                        var n = e(this);
                        n.text(n.dataAttr(t, n.text()))
                    })
                })
            })
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initDrawer = function () {
            e(document).on("click", ".drawer-toggler, .drawer-close, .backdrop-drawer", function () {
                e("body").toggleClass("drawer-open")
            })
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initFileTree = function () {
            e(document).on("click", ".file-tree li.is-file", function (e) {
                e.stopPropagation()
            }), e(document).on("click", ".file-tree li.is-folder", function (t) {
                e(this).find("ul:first").slideToggle(400, function () {
                    e(this).parent("li").toggleClass("open")
                }), t.stopPropagation()
            })
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initFont = function () {
            var t = [];
            e("[data-font]").each(function () {
                var n = e(this), r = n.data("font");
                part = r.split(":"), t.push(r), n.css({"font-family": part[0], "font-weight": part[1]})
            }), t.length > 0 && e("head").append("<link href='https://fonts.googleapis.com/css?family=" + t.join("|") + "' rel='stylesheet'>")
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initForm = function () {
            e(document).on("focusin", ".input-group", function () {
                e(this).addClass("focus")
            }), e(document).on("focusout", ".input-group", function () {
                e(this).removeClass("focus")
            }), e(document).on("click", ".file-browser", function () {
                var t = e(this), n = t.closest(".file-group").find('[type="file"]');
                t.hasClass("form-control") ? setTimeout(function () {
                    n.trigger("click")
                }, 300) : n.trigger("click")
            }), e(document).on("change", '.file-group [type="file"]', function () {
                var t = e(this), n = t.val().split("\\").pop();
                t.closest(".file-group").find(".file-value").val(n).text(n).focus()
            })
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initMailer = function () {
            var t = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            e('[data-form="mailer"]').each(function () {
                var n = e(this), r = n.find('[name="email"]'), i = n.find('[name="message"]');
                n.on("submit", function () {
                    return n.children(".alert-danger").remove(), r.length && (r.val().length < 1 || !t.test(r.val())) ? (r.addClass("is-invalid"), !1) : i.length && i.val().length < 1 ? (i.addClass("is-invalid"), !1) : (e.ajax({
                        type: "POST",
                        url: n.attr("action"),
                        data: n.serializeArray()
                    }).done(function (t) {
                        var r = e.parseJSON(t);
                        "success" == r.status ? (n.find(".alert-success").fadeIn(1e3), n.find(":input").val("")) : (n.prepend('<div class="alert alert-danger">' + r.message + "</div>"), console.log(r.reason))
                    }), !1)
                }), r.on("focus", function () {
                    e(this).removeClass("is-invalid")
                }), i.on("focus", function () {
                    e(this).removeClass("is-invalid")
                })
            })
        }
    }(jQuery)
},
    function (e, t) {
    !function (e) {
        page.initMap = function () {
            e('[data-provide~="map"]').each(function () {
                var t = e(this), n = {
                    lat: "",
                    lng: "",
                    zoom: 13,
                    markerLat: "",
                    markerLng: "",
                    markerIcon: "",
                    markers: "",
                    style: ""
                };
                n = e.extend(n, page.getDataOptions(t));
                var r = new google.maps.Map(t[0], {
                    center: {lat: Number(n.lat), lng: Number(n.lng)},
                    zoom: Number(n.zoom)
                });
                if ("" != n.markers) {
                    var i, o = JSON.parse("[" + n.markers.replace(/'/g, '"') + "]"), a = new google.maps.InfoWindow;
                    for (i = 0; i < o.length; i++) {
                        var s = n.markerIcon;
                        o[i].length > 3 && "" != o[i][3] && (s = o[i][3]), l = new google.maps.Marker({
                            position: {
                                lat: Number(o[i][0]),
                                lng: Number(o[i][1])
                            }, map: r, animation: google.maps.Animation.DROP, icon: s
                        }), o[i].length > 2 && "" != o[i][2] && google.maps.event.addListener(l, "click", function (e, t) {
                            return function () {
                                a.setContent(o[t][2]), a.open(r, e)
                            }
                        }(l, i))
                    }
                } else {
                    var l = new google.maps.Marker({
                        position: {lat: Number(n.markerLat), lng: Number(n.markerLng)},
                        map: r,
                        animation: google.maps.Animation.DROP,
                        icon: n.markerIcon
                    });
                    if (t.is("[data-info]")) {
                        a = new google.maps.InfoWindow({content: t.dataAttr("info", "")});
                        l.addListener("click", function () {
                            a.open(r, l)
                        })
                    }
                }
                switch (n.style) {
                    case"light":
                        r.set("styles", [{
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{color: "#e9e9e9"}, {lightness: 17}]
                        }, {
                            featureType: "landscape",
                            elementType: "geometry",
                            stylers: [{color: "#f5f5f5"}, {lightness: 20}]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [{color: "#ffffff"}, {lightness: 17}]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.stroke",
                            stylers: [{color: "#ffffff"}, {lightness: 29}, {weight: .2}]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry",
                            stylers: [{color: "#ffffff"}, {lightness: 18}]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry",
                            stylers: [{color: "#ffffff"}, {lightness: 16}]
                        }, {
                            featureType: "poi",
                            elementType: "geometry",
                            stylers: [{color: "#f5f5f5"}, {lightness: 21}]
                        }, {
                            featureType: "poi.park",
                            elementType: "geometry",
                            stylers: [{color: "#dedede"}, {lightness: 21}]
                        }, {
                            elementType: "labels.text.stroke",
                            stylers: [{visibility: "on"}, {color: "#ffffff"}, {lightness: 16}]
                        }, {
                            elementType: "labels.text.fill",
                            stylers: [{saturation: 36}, {color: "#333333"}, {lightness: 40}]
                        }, {elementType: "labels.icon", stylers: [{visibility: "off"}]}, {
                            featureType: "transit",
                            elementType: "geometry",
                            stylers: [{color: "#f2f2f2"}, {lightness: 19}]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.fill",
                            stylers: [{color: "#fefefe"}, {lightness: 20}]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.stroke",
                            stylers: [{color: "#fefefe"}, {lightness: 17}, {weight: 1.2}]
                        }]);
                        break;
                    case"dark":
                        r.set("styles", [{
                            featureType: "all",
                            elementType: "labels.text.fill",
                            stylers: [{saturation: 36}, {color: "#000000"}, {lightness: 40}]
                        }, {
                            featureType: "all",
                            elementType: "labels.text.stroke",
                            stylers: [{visibility: "on"}, {color: "#000000"}, {lightness: 16}]
                        }, {
                            featureType: "all",
                            elementType: "labels.icon",
                            stylers: [{visibility: "off"}]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.fill",
                            stylers: [{color: "#000000"}, {lightness: 20}]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.stroke",
                            stylers: [{color: "#000000"}, {lightness: 17}, {weight: 1.2}]
                        }, {
                            featureType: "landscape",
                            elementType: "geometry",
                            stylers: [{color: "#000000"}, {lightness: 20}]
                        }, {
                            featureType: "poi",
                            elementType: "geometry",
                            stylers: [{color: "#000000"}, {lightness: 21}]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [{color: "#000000"}, {lightness: 17}]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.stroke",
                            stylers: [{color: "#000000"}, {lightness: 29}, {weight: .2}]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry",
                            stylers: [{color: "#000000"}, {lightness: 18}]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry",
                            stylers: [{color: "#000000"}, {lightness: 16}]
                        }, {
                            featureType: "transit",
                            elementType: "geometry",
                            stylers: [{color: "#000000"}, {lightness: 19}]
                        }, {
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{color: "#000000"}, {lightness: 17}]
                        }]);
                        break;
                    default:
                        Array.isArray(n.style) && r.set("styles", n.style)
                }
            })
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initModal = function () {
            page.body;
            e(".modal[data-autoshow]").each(function () {
                var t = e(this), n = parseInt(t.dataAttr("autoshow"));
                setTimeout(function () {
                    t.modal("show")
                }, n)
            }), e(".modal[data-exitshow]").each(function () {
                var t = e(this), n = parseInt(t.dataAttr("delay", 0)), r = t.dataAttr("exitshow");
                e(r).length && e(document).one("mouseleave", r, function () {
                    setTimeout(function () {
                        t.modal("show")
                    }, n)
                })
            })
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initNavbar = function () {
            e(document).on("click", ".navbar-toggler", function () {
                page.navbarToggle()
            }), e(document).on("click", ".backdrop-navbar", function () {
                page.navbarClose()
            }), e(document).on("click", ".navbar-open .nav-navbar > .nav-item > .nav-link", function () {
                e(this).closest(".nav-item").siblings(".nav-item").find("> .nav:visible").slideUp(333, "linear"), e(this).next(".nav").slideToggle(333, "linear")
            })
        }, page.navbarToggle = function () {
            var e = page.body, t = page.navbar;
            e.toggleClass("navbar-open"), e.hasClass("navbar-open") && t.prepend('<div class="backdrop backdrop-navbar"></div>')
        }, page.navbarClose = function () {
            page.body.removeClass("navbar-open"), e(".backdrop-navbar").remove()
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initOffcanvas = function () {
            e(document).on("click", '[data-toggle="offcanvas"]', function () {
                var t = e(this).data("target"), n = e(t);
                void 0 !== t && n.length && (n.hasClass("show") ? (e(".backdrop-offcanvas").remove(), n.removeClass("show")) : (n.before('<div class="backdrop backdrop-offcanvas"></div>'), n.addClass("show"), setTimeout(function () {
                    n.find("input:text:visible:first").focus()
                }, 300)))
            }), e(document).on("click", ".offcanvas [data-dismiss], .backdrop-offcanvas", function () {
                e(".offcanvas.show").removeClass("show"), e(".backdrop-offcanvas").remove()
            }), e(document).on("keyup", function (t) {
                e(".offcanvas.show").length && 27 == t.keyCode && (e(".offcanvas.show").removeClass("show"), e(".backdrop-offcanvas").remove())
            })
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initPopup = function () {
            page.body;
            e(document).on("click", '[data-toggle="popup"]', function () {
                var n = e(this).data("target"), r = e(n);
                void 0 !== n && r.length && (r.hasClass("show") ? r.removeClass("show") : t(r))
            }), e(document).on("click", ".popup [data-dismiss]", function () {
                e(this).closest(".popup").removeClass("show")
            }), e(".popup[data-autoshow]").each(function () {
                var n = e(this), r = parseInt(n.dataAttr("autoshow"));
                setTimeout(function () {
                    t(n)
                }, r)
            }), e(".popup[data-exitshow]").each(function () {
                var n = e(this), r = parseInt(n.dataAttr("delay", 0)), i = n.dataAttr("exitshow");
                e(i).length && e(document).one("mouseleave", i, function () {
                    setTimeout(function () {
                        t(n)
                    }, r)
                })
            });
            var t = function (e) {
                var t = parseInt(e.dataAttr("autohide", 0)), n = e.dataAttr("once", "");
                if ("" != n) {
                    if ("displayed" == localStorage.getItem(n)) return;
                    var r = e.find('[data-once-button="true"]');
                    r.length ? r.on("click", function () {
                        localStorage.setItem(n, "displayed")
                    }) : localStorage.setItem(n, "displayed")
                }
                e.addClass("show"), setTimeout(function () {
                    e.find("input:text:visible:first").focus()
                }, 300), t > 0 && setTimeout(function () {
                    e.removeClass("show")
                }, t)
            }
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initRecaptcha = function () {
            e('[data-provide~="recaptcha"]').each(function () {
                var t = {sitekey: page.defaults.reCaptchaSiteKey};
                (t = e.extend(t, page.getDataOptions(e(this)))).enable && (t.callback = function () {
                    e(t.enable).removeAttr("disabled")
                }, t["expired-callback"] = function () {
                    e(t.enable).attr("disabled", "true")
                }), grecaptcha.render(e(this)[0], t)
            })
        }, window.recaptchaLoadCallback = function () {
            page.initRecaptcha()
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        var t = page.body, n = page.footer, r = page.header.length, i = page.navbar.innerHeight(),
            o = page.header.innerHeight(), a = e("body>main").offset().top, s = 20, l = 0;
        page.initScroll = function () {
            e('[data-navbar="fixed"], [data-navbar="sticky"], [data-navbar="smart"]').length && (s = i), e(document).on("click", "a[href='#']", function () {
                return !1
            }), e(document).on("click", ".scroll-top", function () {
                return u(0), !1
            }), e(document).on("click", "a[href^='#']", function () {
                if (!(e(this).attr("href").length < 2 || e(this)[0].hasAttribute("data-toggle"))) {
                    var n = e(e(this).attr("href"));
                    if (n.length) {
                        var r = n.offset().top;
                        return r > e(window).scrollTop() && e('.navbar[data-navbar="smart"]').length ? u(r) : u(r - s), t.hasClass("navbar-open") && page.navbarClose(), t.hasClass("sidebar-open") && page.sidebarClose(), !1
                    }
                }
            });
            var n = location.hash.replace("#", "");
            if ("" != n) {
                var r = e("#" + n);
                r.length > 0 && u(r.offset().top - s)
            }
            if (c(), e(window).on("scroll", function () {
                c()
            }), e(".nav-page").length) {
                var o = "left", a = "0, 12";
                e(".nav-page.nav-page-left").length && (o = "right", a = "0, 12");
                var l = parseInt(e(".nav-page").dataAttr("spy-offset", 200));
                e(".nav-page .nav-link").tooltip({
                    container: "body",
                    placement: o,
                    offset: a,
                    trigger: "hover"
                }), e("body").scrollspy({target: ".nav-page", offset: l})
            }
            e(".sidebar").each(function () {
                var n = e(this), r = n.closest("div").width();
                n.css("width", r), t.width() / r < 1.8 && n.addClass("is-mobile-wide")
            })
        };
        var c = function () {
            var r = e(window).scrollTop();
            r > 1 ? t.addClass("body-scrolled") : t.removeClass("body-scrolled"), r > i ? t.addClass("navbar-scrolled") : t.removeClass("navbar-scrolled"), r > o ? t.addClass("header-scrolled") : t.removeClass("header-scrolled"), r > a ? t.addClass("main-scrolled") : t.removeClass("main-scrolled"), e('[data-sticky="true"]').each(function () {
                var t = e(this), i = t.offset().top;
                t.hasDataAttr("original-top") || t.attr("data-original-top", i);
                var o = t.dataAttr("original-top");
                n.offset().top, t.outerHeight();
                r > o ? t.addClass("stick") : t.removeClass("stick")
            }), e('[data-navbar="smart"]').each(function () {
                var t = e(this);
                r < l ? f(t) : t.removeClass("stick")
            }), e('[data-navbar="sticky"]').each(function () {
                var t = e(this);
                f(t)
            }), e('[data-navbar="fixed"]').each(function () {
                var n = e(this);
                t.hasClass("body-scrolled") ? n.addClass("stick") : n.removeClass("stick")
            }), e(".sidebar-sticky").each(function () {
                var t = e(this);
                f(t)
            }), e(".header.fadeout").css("opacity", 1 - r - 200 / window.innerHeight), l = r
        }, u = function (t) {
            e("html, body").animate({scrollTop: t}, 600)
        }, f = function (e) {
            var n = "navbar-scrolled";
            r && (n = "header-scrolled"), t.hasClass(n) ? e.addClass("stick") : e.removeClass("stick")
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initSection = function () {
            e(".section-collapsable.show .section-content").css("display", "block"), e(document).on("click", ".section-collapsable .section-title", function () {
                e(this).next(".section-content").slideToggle(), e(this).closest(".section-collapsable").toggleClass("show")
            })
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initSidebar = function () {
            var t = page.body;
            if (e(".sidebar").length) {
                e(document).on("click", '.sidebar-toggler, [data-toggle="sidebar"], .sidebar-close, .backdrop-sidebar', function () {
                    t.toggleClass("sidebar-open"), t.hasClass("sidebar-open") ? t.prepend('<div class="backdrop backdrop-sidebar"></div>') : e(".backdrop-sidebar").remove()
                });
                var n = e(".nav-sidebar .nav-item.show");
                n.find("> .nav-link .nav-angle").addClass("rotate"), n.find("> .nav").css("display", "block"), n.removeClass("show");
                var r = !1;
                "true" == e(".nav-sidebar").dataAttr("accordion", "false") && (r = !0), e(document).on("click", ".nav-sidebar > .nav-item > .nav-link", function () {
                    var t = e(this);
                    t.next(".nav").slideToggle(), r && t.closest(".nav-item").siblings(".nav-item").children(".nav:visible").slideUp().prev(".nav-link").children(".nav-angle").removeClass("rotate"), t.children(".nav-angle").toggleClass("rotate")
                }), e(".sidebar-body").each(function (t) {
                    new PerfectScrollbar(e(this)[0], {wheelSpeed: .4, minScrollbarLength: 20})
                })
            }
        }, page.sidebarClose = function () {
            page.body.removeClass("sidebar-open"), e(".backdrop-sidebar").remove()
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.initVideo = function () {
            e(document).on("click", ".video-wrapper .btn", function () {
                var t = e(this).closest(".video-wrapper");
                if (t.addClass("reveal"), t.find("video").length && t.find("video").get(0).play(), t.find("iframe").length) {
                    var n = t.find("iframe");
                    n.attr("src").indexOf("?") > 0 ? n.get(0).src += "&autoplay=1" : n.get(0).src += "?autoplay=1"
                }
            })
        }
    }(jQuery)
}, function (e, t) {
    !function (e) {
        page.getDataOptions = function (t, n) {
            var r = {};
            return e.each(e(t).data(), function (e, t) {
                if ("provide" != (e = page.dataToOption(e))) {
                    if (void 0 != n) switch (n[e]) {
                        case"bool":
                            t = Boolean(t);
                            break;
                        case"num":
                            t = Number(t);
                            break;
                        case"array":
                            t = t.split(",")
                    }
                    r[e] = t
                }
            }), r
        }, page.getTarget = function (t) {
            var n;
            return "next" == (n = t.hasDataAttr("target") ? t.data("target") : t.attr("href")) ? n = e(t).next() : "prev" == n && (n = e(t).prev()), void 0 != n && n
        }, page.getURL = function (e) {
            return e.hasDataAttr("url") ? e.data("url") : e.attr("href")
        }, page.optionToData = function (e) {
            return e.replace(/([A-Z])/g, "-$1").toLowerCase()
        }, page.dataToOption = function (e) {
            return e.replace(/-([a-z])/g, function (e) {
                return e[1].toUpperCase()
            })
        }
    }(jQuery)
}]);
'use strict';

$(function () {


    /*
    |--------------------------------------------------------------------------
    | Configure your website
    |--------------------------------------------------------------------------
    |
    | We provided several configuration variables for your ease of development.
    | Read their complete description and modify them based on your need.
    |
    */

    page.config({

        /*
        |--------------------------------------------------------------------------
        | Google Analytics Tracking
        |--------------------------------------------------------------------------
        |
        | If you want to use Google Analytics, you can specify your Tracking ID in
        | this option. Your key would be a value like: UA-12345678-9
        |
        */

        googleAnalyticsId: 'UA-73325209-2',

        /*
        |--------------------------------------------------------------------------
        | Smooth Scroll
        |--------------------------------------------------------------------------
        |
        | If true, the browser's scrollbar moves smoothly on scroll and gives your
        | visitor a better experience for scrolling.
        |
        */

        smoothScroll: true,

    });







});
