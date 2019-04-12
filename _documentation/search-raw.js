if ('querySelector' in document && 'addEventListener' in window && 'classList' in document.createElement('_')) {
    /*! gmt v1.19.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/go-make-things */
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), (function(e, t, i) {
        "use strict";
        0 < t.querySelectorAll(".edd-buy-now-button").length && t.addEventListener("click", (function(e) {
            e.target.classList.contains("edd-buy-now-button") && (0 !== e.button || e.metaKey || e.ctrlKey || (e.target.innerHTML = "Adding to cart...", e.target.classList.add("disabled")))
        }), !1)
    })(window, document), (function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t : e.fluidvids = t()
    })(this, (function() {
        "use strict";
        var s = {
                selector: ["iframe"],
                players: ["www.youtube.com", "player.vimeo.com"]
            },
            n = [".fluidvids {", "width: 100%; max-width: 100%; position: relative;", "}", ".fluidvids-item {", "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;", "}"].join(""),
            a = document.head || document.getElementsByTagName("head")[0],
            i = function(e) {
                if (t = e.src, new RegExp("^(https?:)?//(?:" + s.players.join("|") + ").*$", "i").test(t) && !e.getAttribute("data-fluidvids")) {
                    var t, i, n, a = document.createElement("div");
                    e.parentNode.insertBefore(a, e), e.className += (e.className ? " " : "") + "fluidvids-item", e.setAttribute("data-fluidvids", "loaded"), a.className += "fluidvids", a.style.paddingTop = (i = e.height, n = e.width, parseInt(i, 10) / parseInt(n, 10) * 100 + "%"), a.appendChild(e)
                }
            };
        return s.render = function() {
            for (var e = document.querySelectorAll(s.selector.join()), t = e.length; t--;) i(e[t])
        }, s.init = function(e) {
            for (var t in e) s[t] = e[t];
            var i;
            s.render(), (i = document.createElement("div")).innerHTML = "<p>x</p><style>" + n + "</style>", a.appendChild(i.childNodes[1])
        }, s
    }));
    var addHeadingLinks = function(e, t, i) {
            "use strict";
            if (e) {
                var n = document.querySelectorAll(e);
                t = t || "#", i = i || "anchor-link";
                for (var a = 0; a < n.length; a++) n[a].id && (n[a].innerHTML += ' <a class="' + i + '" href="#' + n[a].id + '">' + t + "</a>")
            }
        },
        mailchimp = function(a) {
            "use strict";
            var s = document.querySelector("#mailchimp-form");
            if (s) {
                var i = s.querySelector("#mailchimp-email");
                if (i) {
                    var n = s.querySelector("#mc-status"),
                        e = "Please provide an email address.",
                        t = "Please use a valid email address.",
                        o = "Success! Thanks for inviting me to your inbox.",
                        r = function(e, t) {
                            n && (n.textContent = e, t ? (n.className = "success-message", n.setAttribute("tabindex", "-1"), n.focus()) : (n.className = "error-message", i.className = "error", i.setAttribute("aria-describedby", "mc-status"), i.focus()))
                        },
                        c = function(e) {
                            var n = new XMLHttpRequest;
                            n.onreadystatechange = function() {
                                if (4 === n.readyState) {
                                    var e, t = 200 === n.status,
                                        i = JSON.parse(n.responseText);
                                    r(t ? o : i.message, t), (e = s.querySelector("[data-processing]")) && (e.removeAttribute("disabled"), e.innerHTML = e.getAttribute("data-original")), a && "function" == typeof a && a(i)
                                }
                            }, n.open("POST", "https://gomakethings.com/checkout/wp-json/gmt-mailchimp/v1/subscribe?" + e), n.send()
                        },
                        d = function() {
                            var e;
                            (e = s.querySelector("[data-processing]")) && (e.setAttribute("data-original", e.innerHTML), e.setAttribute("disabled", "disabled"), e.innerHTML = e.getAttribute("data-processing")), c(function(e) {
                                for (var t = [], i = 0; i < e.elements.length; i++) {
                                    var n = e.elements[i];
                                    n.name && !n.disabled && "file" !== n.type && "reset" !== n.type && "submit" !== n.type && "button" !== n.type && ("checkbox" !== n.type && "radio" !== n.type || n.checked) && t.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
                                }
                                return t.join("&")
                            }(s))
                        },
                        x = function() {
                            return i.value.length < 1 ? (r(e), !1) : !!/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(i.value) || (r(t), !1)
                        };
                    s.addEventListener("submit", (function(e) {
                        e.preventDefault(), n && (n.textContent = "", n.className = "", i.className = "", i.removeAttribute("aria-describedby")), x() && d()
                    }), !1)
                }
            }
        };
    fluidvids.init({
        selector: ["iframe", "object"],
        players: ["www.youtube.com", "player.vimeo.com", "www.slideshare.net", "www.hulu.com", "videopress.com/embed/", "noti.st"]
    }), document.querySelector("#mailchimp-form") && mailchimp((function(e) {
        200 === e.code && (window.location.href = "https://gomakethings.com/newsletter-success")
    })), (document.body.matches(".type-articles.page-single") || document.body.matches("#page-54a32daa7699b0585cab71188bd8c152")) && addHeadingLinks("h2, h3, h4, h5, h6", "#", "link-no-underline");
    /*! gmt v1.19.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/go-make-things */
    var crowsNest = function() {
        "use strict";
        var e = document.querySelector("#form-search"),
            r = document.querySelector("#input-search"),
            c = document.querySelector("#search-results"),
            s = function(e) {
                var n = new RegExp(e, "gi"),
                    a = [],
                    i = [];
                searchIndex.forEach((function(e, t) {
                    if (n.test(e.title)) return a.push(e);
                    n.test(e.content) && i.push(e)
                }));
                var t, o, r, s = [].concat(a, i);
                c.innerHTML = s.length < 1 ? "<p>Sorry, no matches were found.</p>" : (o = "<p>Found " + (t = s).length + " matching articles</p>", o += t.map((function(e, t) {
                    return '<div class="margin-bottom" id="search-result-' + t + '"><a class="link-block" href="' + (n = e).url + '"><aside class="text-muted text-small"><time datetime="' + n.datetime + '" pubdate>' + n.date + '</time></aside><h2 class="h3 link-block-styled link-no-underline no-padding-top no-margin-bottom">' + n.title + "</h2>" + n.summary.slice(0, 150) + '...<br><span class="link-block-styled link-no-underline">' + n.url + "</span></a></div>";
                    var n
                })).join("")), r = e, history.pushState && history.pushState({}, document.title, window.location.origin + window.location.pathname + "?s=" + encodeURI(r))
            };
        e && r && c && searchIndex && (r.value = r.value.replace(" site:gomakethings.com", ""), e.addEventListener("submit", (function(e) {
            e.preventDefault(), s(r.value)
        }), !1), (function() {
            var e, t, n, a, i = (e = "s", n = t || window.location.href, (a = new RegExp("[?&]" + e + "=([^&#]*)", "i").exec(n)) ? a[1] : null);
            if (i) {
                var o = decodeURI(i);
                r.value = o, s(o)
            }
        })())
    };
    crowsNest();

    /*! gmt v1.19.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/go-make-things */
    function loadJS(e, t) {
        "use strict";
        var n = window.document.getElementsByTagName("script")[0],
            o = window.document.createElement("script");
        return o.src = e, o.async = !0, n.parentNode.insertBefore(o, n), t && "function" == typeof t && (o.onload = t), o
    }
    if (document.querySelector('.codepen')) {
        loadJS('https://static.codepen.io/assets/embed/ei.js');
    }
}