(function() {
    var g = !0,
        k = null,
        l = !1,
        m = "",
        aa = "\n",
        o = " ",
        ba = " -- ",
        ca = " -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(",
        da = " : ",
        ea = " autoplay = 'false' ",
        fa = " classid = 'clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B' ",
        ga = " codebase = 'http://www.apple.com/qtactivex/qtplugin.cab' ",
        ha = " controller = '",
        ia = " enablejavascript = 'true' ",
        ja = " height = '",
        ka = " id = 'embedobj_",
        la = " loop = '",
        ma = " name = 'embedobj_",
        na = " postdomevents = 'true' ",
        oa = " rotate",
        pa = " scale = 'tofit' ",
        qa = " src = '",
        ra = " translateX(",
        sa = " translateY(",
        ta = " volume = '",
        ua = " width = '",
        va = " {",
        wa = " {0% {opacity: 0.0;",
        xa = " {0% {opacity: 1.0;",
        ya = " {0% {z-index:-1;",
        za = " {0% {z-index:0;",
        Aa = '"></iframe>',
        Ba = "#",
        Ca = "#F0F0F0",
        Da = "#b0b0b0",
        Ea = "%",
        Fa = "% ",
        Ga = "%, ",
        Ha = "%, from(",
        Ia = "%27",
        Ja = "&",
        Ka = "'",
        p = "' ",
        La = "')",
        Ma = "'Lucida Grande', Helvetica, Arial, Sans-Serif",
        Na = "(",
        s = ")",
        Oa = ") ",
        Pa = "))",
        Qa = "), to(",
        Ra = "*",
        t = ", ",
        Sa = ", transparent), to(rgba(255, 255, 255, .5)))",
        Ta = ",M12=",
        Ua = ",M21=",
        Va = ",M22=",
        Wa = ",SizingMethod='auto expand')",
        v = "-",
        Xa = "-10000",
        Ya = "-bottom",
        Za = "-moz-",
        $a = "-moz-linear-gradient(",
        ab = "-moz-perspective",
        bb = "-ms-transform",
        cb = "-o-linear-gradient(",
        db = "-pie-background",
        eb = "-webkit-",
        fb = "-webkit-animation-duration",
        w = "-webkit-animation-name",
        gb = "-webkit-background-origin",
        hb = "-webkit-background-size",
        ib = "-webkit-border-radius",
        jb = "-webkit-box-reflect",
        kb = "-webkit-box-shadow",
        lb = "-webkit-gradient(linear, ",
        mb = "-webkit-perspective",
        nb = "-webkit-transform",
        x = "-webkit-transform-style",
        ob = "-webkit-transition",
        pb = "-webkit-user-select",
        qb = ".",
        rb = ".HYPE_scene ",
        sb = ".png",
        y = "/",
        tb = "/PIE.htc')",
        z = "0",
        ub = "0.0",
        A = "0px",
        B = "1",
        vb = "1.0",
        C = "1.1s",
        wb = "100",
        D = "100%",
        xb = "100000",
        yb = "1000000",
        E = "10px",
        zb = "13px",
        Ab = "150px",
        Bb = "1px",
        Cb = "2",
        Db = "2px",
        Eb = "3",
        Fb = "3px solid #C0C0C0",
        Gb = "4",
        Ib = "40%",
        Jb = "5",
        Kb = "600px",
        Lb = "8px",
        Mb = "9px",
        Nb = ";",
        Ob = "</div>",
        Pb = "</style>",
        Qb = '<div style="overflow:auto;-webkit-overflow-scrolling:touch;width:100%;height:100%;">',
        Rb = "<embed ",
        Sb = '<iframe style="width:100%;height:100%;border:none;"src="',
        Tb = "<strong><a style = 'color:#777; text-decoration:none; opacity:.75;' href = 'http://tumultco.com/hype/'>Built with Hype</a></strong>",
        Ub = '<style id="" type="text/css">',
        Vb = "></embed>",
        Wb = "?",
        F = "@",
        Xb = "Android",
        Yb = "BODY",
        Zb = "HYPE_Axis",
        $b = "HYPE_BackgroundGradientAngle",
        ac = "HYPE_BackgroundGradientEndColor",
        bc = "HYPE_BackgroundGradientStartColor",
        cc = "HYPE_BoxShadowBlurRadius",
        dc = "HYPE_BoxShadowColor",
        ec = "HYPE_BoxShadowXOffset",
        fc = "HYPE_BoxShadowYOffset",
        gc = "HYPE_IFrameHTML",
        hc = "HYPE_IFrameType",
        ic = "HYPE_IFrameURL",
        jc = "HYPE_Left",
        kc = "HYPE_Loading",
        lc = "HYPE_MS_BorderBottomLeftRadius",
        mc = "HYPE_MS_BorderBottomRightRadius",
        nc = "HYPE_MS_BorderTopLeftRadius",
        oc = "HYPE_MS_BorderTopRightRadius",
        pc = "HYPE_MS_background",
        qc = "HYPE_MS_opacity5",
        rc = "HYPE_MS_opacity8",
        sc = "HYPE_MS_rotation",
        tc = "HYPE_MS_rotation_offset_left",
        uc = "HYPE_MS_rotation_offset_top",
        vc = "HYPE_ReflectionDepth",
        wc = "HYPE_ReflectionOffset",
        xc = "HYPE_Rotate",
        yc = "HYPE_TextShadowBlurRadius",
        zc = "HYPE_TextShadowColor",
        Ac = "HYPE_TextShadowXOffset",
        Bc = "HYPE_TextShadowYOffset",
        Cc = "HYPE_Top",
        G = "HYPE_crossfadeIn",
        H = "HYPE_crossfadeOut",
        Dc = "HYPE_element",
        Ec = "HYPE_element_container",
        Fc = "HYPE_scene",
        Gc = "HYPE_scene_index",
        Hc = "HYPE_swapToBack",
        Ic = "HYPE_swapToFront",
        Jc = "Helvetica, Arial, Sans-Serif",
        Kc = "Loading",
        Lc = "MozBoxShadow",
        Mc = "MozTransition",
        Nc = "OnSceneAnimationComplete",
        Oc = "OnSceneLoad",
        Pc = "OnSceneUnload",
        Qc = "True",
        Rc = "X",
        Sc = "Y",
        Tc = "Z",
        Uc = "_",
        Vc = "_loadingPage",
        Wc = "a",
        Xc = "aY",
        I = "absolute",
        Yc = "alpha(opacity=",
        Zc = "alt",
        $c = "animation-duration: 1.1s;}",
        ad = "animation-name: ",
        bd = "animation-timing-function: ease-in;}50% {z-index:-1;",
        cd = "animation-timing-function: ease-in;}50% {z-index:0;",
        dd = "animation-timing-function: ease-out;}65% {z-index:-1;}100% {z-index:-1;",
        ed = "animation-timing-function: ease-out;}65% {z-index:0;}100% {z-index:0;",
        fd = "animation-timing-function: linear;}100% {opacity: 0.0;}}",
        gd = "animation-timing-function: linear;}100% {opacity: 1.0;}}",
        hd = "auto",
        id = "b",
        jd = "below ",
        J = "block",
        kd = "body=",
        ld = "bold",
        md = "border-radius",
        nd = "box-shadow",
        od = "boxShadow",
        K = "c",
        pd = "center",
        L = "controls",
        M = "d",
        qd = "deg",
        N = "deg, ",
        O = "div",
        P = "embedobj_",
        rd = "error applying ",
        Q = "f",
        sd = "failed getting a currentValue: ",
        td = "false",
        R = "flat",
        ud = "font-",
        vd = "h",
        wd = "head",
        xd =
        "height",
        S = "hidden",
        yd = "http://",
        zd = "hype main object",
        Ad = "hype-obj-",
        Bd = "hype-scene-",
        T = "i",
        Cd = "iPad",
        Dd = "img",
        Ed = "img_",
        Fd = "inherit",
        Gd = "kTimelineDefaultIdentifier",
        Hd = "keydown",
        U = "keyframes ",
        Id = "keypress",
        Jd = "keyup",
        Kd = "linear-gradient(",
        V = "loop",
        Ld = "mailto:",
        Md = "margin",
        Nd = "mouseout",
        Od = "mouseover",
        Pd = "mouseup",
        W = "mute",
        Qd = "no-repeat",
        X = "none",
        Rd = "number",
        Sd = "on",
        Td = "onclick",
        Ud = "onmousedown",
        Vd = "onmouseout",
        Wd = "onmouseover",
        Xd = "onmouseup",
        Yd = "p",
        Zd = "pointer-events",
        $d = "preserve-3d",
        ae = "progid:DXImageTransform.Microsoft.Alpha(Opacity=",
        be = "progid:DXImageTransform.Microsoft.Matrix(M11=",
        ce = "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)",
        Y = "px",
        Z = "px ",
        de = "px) rotateY(-20deg);",
        ee = "px) rotateY(-50deg);}}",
        fe = "px) rotateY(40deg);",
        ge = "px) rotateY(50deg);",
        he = "px, 0px, -",
        ie = "right",
        je = "script",
        ke = "source",
        le = "string",
        me = "subject=",
        ne = "title",
        oe = "top 1.1s ease-in-out, left 1.1s ease-in-out",
        pe = "transform: translate3d(",
        qe = "transform: translate3d(-",
        re = "transform: translate3d(0px, 0px, -0px) rotateY(0deg);}}",
        se = "transform: translate3d(0px, 0px, 0px) rotateY(0deg);",
        te = "translate3d(0px, 0px, 0px) rotateY(0deg)",
        $ = "true",
        ue = "type",
        ve = "url('",
        we = "useTranslates",
        xe = "vertical-align",
        ye = "video",
        ze = "video/ogg",
        Ae = "video/webm",
        Be = "visible",
        Ce = "width",
        De = "www.";
    window.HYPE_100 = function() {
        function Hb(c) {
            if (c.getElementsByClassName) return c.getElementsByClassName(Dc);
            for (var d = /(^|\s)HYPE_element(\s|$)/, c = c || document, c = c.all ? c.all : c.getElementsByTagName(Ra), b = [], a, f = c.length, h = 0; h < f; h++) a = c[h], d.test(a.className) && b.push(a);
            return b
        }

        function u(c, d) {
            if (c.indexOf) return c.indexOf(d);
            for (var b = 0; b < c.length; b++)
                if (c[b] == d) return b;
            return -1
        }

        function r(c, d, b, a) {
            this.Ia = 3 * c;
            this.Za = 3 * (b - c) - this.Ia;
            this.tb = 1 - this.Ia - this.Za;
            this.ab = 3 * d;
            this.ub = 3 * (a - d) - this.ab;
            this.Vb =
                1 - this.ab - this.ub
        }
        var a = this;
        a.name = zd;
        a.version = 100;
        a.Gc = 0;
        a.ec = 1;
        a.Hc = 2;
        a.fb = 3;
        a.fc = 4;
        a.gc = 5;
        a.dc = 6;
        a.lc = 0;
        a.kc = 1;
        a.mc = 2;
        a.ic = 3;
        a.jc = 4;
        a.Jc = 0;
        a.Ab = 1;
        a.zb = 2;
        a.Bb = 3;
        a.Ka = 4;
        a.La = 5;
        a.Ja = 6;
        a.Ma = 7;
        a.Ic = 0;
        a.hc = 1;
        a.nc = Gd;
        a.ka = [];
        a.Ca = [];
        a.Ga = l;
        a.$b = 60;
        a.Lc = [];
        a.ja = [];
        a.ua = 0;
        a.ra = [];
        a.Oa = k;
        a.Xa = {};
        a.wa = {};
        a.Ba = k;
        a.ma = {};
        a.ia = {};
        a.yb = {};
        a.bb = 0;
        a.eb = l;
        a.setDocumentName = function(c) {
            a.Zb = c
        };
        a.setResourcesFolderName = function(c) {
            a.qa = c
        };
        a.setMainContentContainerID = function(c) {
            a.ta = c
        };
        a.setAttributeTransformerMapping =
            function(c) {
                a.sb = c
            };
        a.setScenes = function(c) {
            a.ba = c
        };
        a.setJavascriptMapping = function(c) {
            a.cc = c
        };
        a.setShowHypeBuiltWatermark = function(c) {
            a.Hb = c
        };
        a.setShowLoadingPage = function(c) {
            a.Ib = c
        };
        a.setDrawSceneBackgrounds = function(c) {
            a.wb = c
        };
        a.setShowHypeBuiltWatermark = function(c) {
            a.Hb = c
        };
        a.setCurrentSceneIndex = function(c) {
            a.da = c
        };
        a.log = function(c) {
            window.console && console.log && console.log(c)
        };
        a.documentLoad = function() {
            0 == a.bb && (a.bb = a.Db());
            a.Hb == g && a.Qb();
            a.Ib == g && a.oc();
            a.Pb();
            a.Rb();
            a.Wb();
            a.rc()
        };
        a.Db = function(c) {
            var d =
                m;
            void 0 == c && (c = 10);
            for (var b = 0; b < c; b++) var a = Math.floor(62 * Math.random()),
                d = d + "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".substring(a, a + 1);
            return d
        };
        a.Qb = function() {
            var c = document.getElementById(a.ta),
                d = document.createElement(O);
            d.style.position = I;
            d.style.bottom = Bb;
            d.style.right = Bb;
            d.style.zIndex = xb;
            d.style.textAlign = ie;
            d.style.fontSize = Mb;
            d.style.fontFamily = Jc;
            d.innerHTML = Tb;
            c.appendChild(d)
        };
        a.gb = function() {
            return a.ta + Vc
        };
        a.oc = function() {
            var c = document.getElementById(a.gb());
            if (c == k) {
                var d = document.getElementById(a.ta),
                    c = document.createElement(O);
                c.className = kc;
                c.id = a.gb();
                c.style.display = J;
                c.style.overflow = S;
                c.style.position = I;
                c.style.width = Ab;
                c.style.top = Ib;
                c.style.left = m + (parseInt(d.style.width) / 2 - 75) + Y;
                c.style.padding = Db;
                c.style.border = Fb;
                c.style.backgroundColor = Ca;
                c.style.borderRadius = E;
                c.style.MozBorderRadius = E;
                c.style[md] = E;
                c.style[ib] = E;
                c.style.textAlign = pd;
                c.style.fontFamily = Ma;
                c.style.fontSize = zb;
                c.style.fontWeight = ld;
                c.style.color = Da;
                c.style.zIndex = yb;
                c.innerHTML =
                    Kc;
                d.appendChild(c)
            }
            c.style.display = J
        };
        a.ac = function() {
            document.getElementById(a.gb()).style.display = X
        };
        a.vb = function(c, d, b) {
            var e = d;
            if (e == k || document.getElementById(e) != k) {
                do e = b + a.Db(16); while (document.getElementById(e) != k)
            }
            a.ma[c] = e;
            a.ia[e] = c;
            return a.yb[d != k ? d : e] = e
        };
        a.getElementById = function(c) {
            var d = a.yb[c];
            d == k && (d = c);
            return document.getElementById(d)
        };
        a.Wb = function() {
            for (var c = document.getElementById(a.ta), d = 0; d < a.ba.length; d++) {
                var b = a.ba[d],
                    e = document.createElement(O);
                e.className = Fc;
                e.id =
                    a.vb(b.oid, k, Bd);
                e.setAttribute(Gc, b.sceneIndex);
                a.wb != l && (e.style.backgroundColor = b.backgroundColor);
                e.style.display = X;
                e.style.overflow = S;
                e.style.position = I;
                e.style.width = c.style.width;
                e.style.height = c.style.height;
                c.appendChild(e);
                var f = b.initialValues,
                    h;
                for (h in f)
                    if (f.hasOwnProperty(h) != l) {
                        var i = f[h],
                            j = document.createElement(i.k);
                        j.className = Dc;
                        j.id = a.vb(h, i.i, Ad);
                        i.w != k && (j.innerHTML = i.w);
                        if (a.$.ya != k || a.$.sa != k && 10 <= a.$.sa) {
                            var n = document.createElement(O);
                            n.className = Ec;
                            n.style.position = I;
                            n.style.top =
                                A;
                            n.style.left = A;
                            n.style.width = D;
                            n.style.height = D;
                            i.aY === B || i.aY === Cb ? (n.style[mb] = b.perspective, n.style.MozPerspective = b.perspective) : a.$.jb !== k && i.f != k && j.setAttribute(we, B);
                            n.style.pointerEvents = X;
                            n.style[Zd] = X;
                            j.style.pointerEvents = hd;
                            j.style[Zd] = hd;
                            n.appendChild(j);
                            e.appendChild(n)
                        } else e.appendChild(j)
                    }
            }
        };
        a.Pb = function() {
            var c;
            c = "^{color:#000;`size:16px;`weight:normal;`family:Helvetica,Arial,Sans-Serif;`weight:normal;`style:normal;`variant:normal;text-decoration:none;text-align:left;text-transform:none;text-indent:0;text-shadow:none;line-height:normal;letter-spacing:normal;white-space:normal;word-spacing:normal;@:baseline;border:none;background-color:transparent;background-image:none;-webkit-`smoothing:antialiased;}^div,^span,^applet,^object,^iframe,^h1,^h2,^h3,^h4,^h5,^h6,^p,^blockquote,^pre,^a,^abbr,^acronym,^address,^big,^cite,^code,^del,^dfn,^em,^img,^ins,^kbd,^q,^s,^samp,^small,^strike,^strong,^sub,^sup,^tt,^var,^b,^u,^i,^center,^dl,^dt,^dd,^ol,^ul,^li,^fieldset,^form,^label,^legend,^table,^caption,^tbody,^tfoot,^thead,^tr,^th,^td,^article,^aside,^canvas,^details,^embed,^figure,^figcaption,^footer,^header,^hgroup,^menu,^nav,^output,^ruby,^section,^summary,^time,^mark,^audio,^video{color:?;`size:?;`weight:?;`family:?;`weight:?;`style:?;`variant:?;text-decoration:?;text-align:?;text-transform:?;text-indent:?;text-shadow:?;line-height:?;letter-spacing:?;white-space:?;word-spacing:?;@:?;border:none;background-color:transparent;background-image:none;padding:0;}^p{display:block;$:1em 0;}^div,^layer{display:block;}^article,^aside,^footer,^header,^hgroup,^nav,^section{display:block;}^blockquote{display:block;$:1em 40px;}^figcaption{display:block;}^figure{display:block;$:1em 40px;}^q{display:inline;}^q:before{content:open-quote;}^q:after{content:close-quote;}^center{display:block;text-align:center;}^hr{display:block;$:.5em auto;border-style:inset;border-width:1px;}^h1,^h2,^h3,^h4,^h5,^h6{display:block;$-left:0;$-right:0;`weight:bold;}^h1{`size:2em;$-top:.67em;$|:.67em;}^h2{`size:1.5em;$-top:.83em;$|:.83em;}^h3{`size:1.17em;$-top:1em;$|:1em;}^h4{$-top:1.33em;$|:1.33em;}^h5{`size:.83em;$-top:1.67em;$|:1.67em;}^h6{`size:.67em;$-top:2.33em;$|:2.33em;}^table{display:table;border-collapse:separate;border-spacing:2px;border-color:gray;}^thead{display:table-header-group;@:middle;border-color:?;}^tbody{display:table-row-group;@:middle;border-color:?;}^tfoot{display:table-footer-group;@:middle;border-color:?;}^col{display:table-column;}^colgroup{display:table-column-group;}^tr{display:table-row;@:?;border-color:?;}^td,^th{display:table-cell;@:?;}^th{`weight:bold;}^caption{display:table-caption;text-align:center;}^ul,^menu,^dir{display:block;list-style-type:disc;$:1em 0;padding-left:40px;}^ol{display:block;list-style-type:decimal;$:1em 0;padding-left:40px;}^li{display:list-item;}^ul ul,^ol ul{list-style-type:circle;}^ol ol ul,^ol ul ul,^ul ol ul,^ul ul ul{list-style-type:square;}^dd{display:block;$-left:40px;}^dl{display:block;$:1em 0;}^dt{display:block;}^ol ul,^ul ol,^ul ul,^ol ol{$-top:0;$|:0;}^u,^ins{text-decoration:underline;}^strong,^b{`weight:bolder;}^i,^cite,^em,^var,^address{`style:italic;}^tt,^code,^kbd,^samp{`family:monospace;}^pre,^xmp,^plaintext,^listing{display:block;`family:monospace;white-space:pre;$:1em 0;}^mark{background-color:yellow;color:black;}^big{`size:larger;}^small{`size:smaller;}^s,^strike,^del{text-decoration:line-through;}^sub{@:sub;`size:smaller;}^sup{@:super;`size:smaller;}^nobr{white-space:nowrap;}^a:-webkit-any-link{color:-webkit-link;text-decoration:underline;cursor:auto;}^a:-webkit-any-link:active{color:-webkit-activelink;}^noframes{display:none;}^frameset,^frame{display:block;}^frameset{border-color:?;}^iframe{border:0;}^details{display:block;}^summary{display:block;}".replace(/\|/g,
                Ya);
            c = c.replace(/\`/g, ud);
            c = c.replace(/\@/g, xe);
            c = c.replace(/\?/g, Fd);
            c = c.replace(/\$/g, Md);
            c = c.replace(/\^/g, rb);
            a.pb(c)
        };
        a.fa = function(c) {
            return c + Uc + a.bb
        };
        a.Rb = function() {
            var c = parseInt(document.getElementById(a.ta).style.width),
                d = Math.ceil(c / 4),
                b = Math.ceil(c / 2),
                e = m;
            if (a.$.ya != k) e = eb;
            else if (a.$.sa != k) e = Za;
            else return;
            a.pb([F + e + U + a.fa(Ic) + ya + e + qe + d + he + c + ge + e + bd + e + qe + b + he + b + fe + e + ed + e + re, F + e + U + a.fa(Hc) + za + e + se + e + cd + e + pe + b + he + b + de + e + dd + e + pe + d + he + c + ee, F + e + U + a.fa(G) + wa + e + gd, F + e + U + a.fa(H) + xa + e + fd, qb +
                a.fa(G) + va + e + ad + a.fa(G) + Nb + e + $c, qb + a.fa(H) + va + e + ad + a.fa(H) + Nb + e + $c
            ].join(aa))
        };
        a.pb = function(c) {
            var d = document,
                b = d.createElement(O);
            b.innerHTML = Ub + c + Pb;
            c = d.getElementsByTagName(wd)[0];
            c || (c = d.createElement(O), d.body.appendChild(c));
            c.appendChild(b)
        };
        a.hb = function() {
            a.Ib == g && a.ac();
            a.va(a.da)
        };
        a.Gb = function() {
            for (var c = [], d = 0; d < a.ba.length; d++) c.push(a.ba[d].name);
            return c
        };
        a.Yb = function() {
            return a.ba[a.da].name
        };
        a.Jb = function(c) {
            a.va(a.da + 1, c)
        };
        a.Kb = function(c) {
            a.va(a.da - 1, c)
        };
        a.wc = function(c, d) {
            var b =
                u(a.Gb(), c);
            a.va(b, d)
        };
        a.va = function(c, d) {
            if (!(a.za(c) == k || a.eb == g)) {
                a.eb = g;
                var b = function() {
                        var b = l,
                            e = a.$.ya != k,
                            f = a.$.cb != k,
                            h = a.$.sa != k && 10 <= a.$.sa;
                        e || f ? d == k || d == a.Ab ? b = g : d == a.zb ? a.xc(c) : (e || h) && d == a.Bb ? a.Ac(c) : d == a.Ka || d == a.La || d == a.Ja || d == a.Ma ? a.zc(c, d) : b = g : b = g;
                        b && a.yc(c)
                    },
                    e = l,
                    f = a.la();
                if (c != a.da && f != k) {
                    f = a.ba[a.Aa(a.$a())].onSceneUnloadAction;
                    if (f != k) {
                        var h = a.aa.oa(this, f, k);
                        f.type == a.fb && f.timelineIdentifier != k && (e = g, a.Ba = b);
                        h({
                            type: Pc
                        })
                    }
                    for (var i in a.wa) a.wa.hasOwnProperty(i) != l && (document.removeEventListener ?
                        document.removeEventListener(i, a.wa[i], l) : document.detachEvent && document.detachEvent(Sd + i, a.wa[i]));
                    a.wa = {}
                }
                e == l && b()
            }
        };
        a.yc = function(c) {
            var d = a.la();
            d != k && (d.style.display = X);
            a.Na(a.za(c));
            c = a.la();
            c.style.display = J;
            a.Ha(d, c)
        };
        a.xc = function(c) {
            var d = a.la();
            if (d != k) {
                d.style.zIndex = 0;
                a.wb == l && a.qb(a.fa(H), d);
                var b = a.ba[a.da].initialValues,
                    e;
                for (e in b) b.hasOwnProperty(e) != l && (document.getElementById(a.ma[e]).style[jb] = k)
            }
            a.Na(a.za(c));
            var f = a.la();
            f.style.display = J;
            f.style.zIndex = 1;
            a.qb(a.fa(G), f);
            f.style.opacity = vb;
            window.setTimeout(function() {
                a.Ha(d, f)
            }, 1100)
        };
        a.Ac = function(c) {
            var d = document.getElementById(a.ta);
            d.style[mb] = Kb;
            d.style.MozPerspective = Kb;
            d.style[x] = $d;
            d.style.MozTransformStyle = $d;
            var b = a.la();
            b != k && (b.style.overflow = Be, b.style[x] = R, b.style.MozTranformStyle = R, b.style[fb] = C, b.style.MozAnimationDuration = C, b.style[w] = a.fa(Hc), b.style.MozAnimationName = a.fa(Hc), b.style[nb] = te, b.style.MozTransform = te);
            a.Na(a.za(c));
            var e = a.la();
            e.style.display = J;
            e.style.overflow = Be;
            e.style[x] = R;
            e.style.MozTransformStyle =
                R;
            e.style[fb] = C;
            e.style.MozAnimationDuration = C;
            e.style[w] = a.fa(Ic);
            e.style.MozAnimationName = a.fa(Ic);
            e.style[nb] = te;
            e.style.MozTransform = te;
            window.setTimeout(function() {
                a.Ha(b, e)
            }, 1100)
        };
        a.zc = function(c, d) {
            var b = document.getElementById(a.ta),
                e = a.la();
            e != k && (e.style[a.Pa()] = oe, d == a.Ka ? e.style.left = b.style.width : d == a.La ? e.style.left = v + parseInt(b.style.width) + Y : d == a.Ja ? e.style.top = v + parseInt(b.style.height) + Y : d == a.Ma && (e.style.top = b.style.height));
            a.Na(a.za(c));
            var f = a.la();
            d == a.Ka ? f.style.left = v + parseInt(b.style.width) +
                Y : d == a.La ? f.style.left = b.style.width : d == a.Ja ? f.style.top = b.style.height : d == a.Ma && (f.style.top = v + parseInt(b.style.height) + Y);
            f.style.display = J;
            window.setTimeout(function() {
                f.style[a.Pa()] = oe;
                f.style.left = A;
                f.style.top = A
            }, 25);
            window.setTimeout(function() {
                a.Ha(e, f)
            }, 1100)
        };
        a.la = function() {
            return document.getElementById(a.ma[a.$a()])
        };
        a.$a = function() {
            var c = a.ba[a.da];
            return c == k ? k : c.oid
        };
        a.za = function(c) {
            c = a.ba[c];
            return c == k ? k : c.oid
        };
        a.Aa = function(c) {
            for (var d = 0; d < a.ba.length; d++)
                if (a.ba[d].oid == c) return d;
            return -1
        };
        a.rc = function() {
            for (var c = 0; c < a.ba.length; c++) {
                var d = a.ba[c].initialValues,
                    b;
                for (b in d)
                    if (d.hasOwnProperty(b) != l) {
                        var e = d[b].h;
                        e != k && -1 == u(a.ja, e) && a.ja.push(e)
                    }
                d = a.ba[c].timelines;
                for (timelineIdentifier in d)
                    if (d.hasOwnProperty(timelineIdentifier) != l)
                        for (var e = d[timelineIdentifier].animations, f = 0; f < e.length; f++)
                            if (e[f].i == vd) {
                                var h = e[f].s;
                                h != k && -1 == u(a.ja, h) && a.ja.push(h);
                                h = e[f].e;
                                h != k && -1 == u(a.ja, h) && a.ja.push(h)
                            }
            }
            if (0 == a.ja.length) a.hb();
            else if (a.ua = 0, a.$.ca != k) a.Cb();
            else
                for (b = 0; b <
                    a.ja.length; b++) c = new Image, d = function() {
                    a.ua += 1;
                    a.ua >= a.ja.length && a.hb()
                }, c.onload = d, c.onerror = d, c.onabort = d, c.src = m + a.qa + y + a.ja[b]
        };
        a.Cb = function() {
            function c() {
                a.ua += 1;
                a.ua >= a.ja.length ? a.hb() : window.setTimeout(function() {
                    a.Cb()
                }, 1)
            }
            var d = new Image;
            d.onload = c;
            d.onerror = c;
            d.onabort = c;
            d.src = m + a.qa + y + a.ja[a.ua]
        };
        a.pa = function(c, d, b) {
            a.Wa(c, d, b);
            c == Wd ? a.Wa(Vd, d, function() {}) : c == Vd && a.Wa(Wd, d, function() {})
        };
        a.Wa = function(c, d, b) {
            c == Td && (c = Xd);
            var e = a.Xa[a.ia[d.id]];
            e == k && (e = {}, a.Xa[a.ia[d.id]] = e);
            var f =
                e[c];
            f == k && (f = [], e[c] = f);
            f.push(b);
            d[c] = function(c) {
                c = c ? c : window.event;
                if (c.type == Od) {
                    if (a.Oa != k) return;
                    a.Oa = this
                } else if (c.type == Nd) {
                    if (a.ba[a.da].initialValues[a.ia[d.id]] == k) return;
                    var b = 0,
                        e = 0;
                    c || (c = window.event);
                    if (c.pageX || c.pageY) b = c.pageX, e = c.pageY;
                    else if (c.clientX || c.clientY) b = c.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, e = c.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                    for (b = document.elementFromPoint(b, e); b != k && b != this && b.nodeName != Yb;) b = b.parentNode;
                    if (b == this) return;
                    a.Oa = k
                }
                for (b = 0; b < f.length; b++) f[b](c)
            }
        };
        a.Na = function(c) {
            a.pc();
            a.Cc();
            a.Oa = k;
            a.da = a.Aa(c);
            for (var d = document.getElementById(a.ma[c]), c = d.getAttribute(Gc), b = Hb(d), d = [], e = 0; e < b.length; e++) d.push(b[e].id);
            for (e = 0; e < d.length; e++) {
                var b = d[e],
                    f = document.getElementById(b),
                    h = a.ba[c].initialValues[a.ia[b]];
                if (h != k) {
                    a.Xa[a.ia[b]] = k;
                    a.ra[a.ia[b]] = [];
                    a.ha(f, id, h.b, g);
                    a.ha(f, Wc, h.a, g);
                    a.ha(f, K, h.c, g);
                    a.ha(f, M, h.d, g);
                    for (var i in h) h.hasOwnProperty(i) != l && a.ha(f, i, h[i], g);
                    h.f != k && h.aY == k && a.ha(f,
                        Xc, z, g);
                    a.$.ca != k && h.bE == k && (f.style.behavior = ve + a.qa.replace(Ka, Ia) + tb)
                }
            }
            i = {
                onSceneKeyDownAction: Hd,
                onSceneKeyUpAction: Jd,
                onSceneKeyPressAction: Id
            };
            for (var j in i) i.hasOwnProperty(j) == l || a.ba[c][j] == k || (d = a.aa.oa(this, a.ba[c][j], document), e = i[j], a.wa[e] = d, document.addEventListener ? document.addEventListener(e, d, l) : document.attachEvent && document.attachEvent(Sd + e, d))
        };
        a.Ha = function(c, d) {
            function b() {
                a.lb(a.nc, k)
            }
            a.eb = l;
            c != k && c != d && (c.style.display = X, c.style[w] = k, a.Qa(a.fa(G), c), a.Qa(a.fa(H), c), c.style[a.Pa()] =
                k, c.style.overflow = S, c.style.left = A, c.style.top = A);
            d.style[w] = k;
            a.Qa(a.fa(G), d);
            a.Qa(a.fa(H), d);
            d.style[a.Pa()] = k;
            d.style.overflow = S;
            d.style.left = A;
            d.style.top = A;
            var e = document.getElementById(a.ta);
            e.style[mb] = k;
            e.style[x] = R;
            e.style[ab] = k;
            if (a.$.ca != k && 9 > a.$.ca)
                for (var e = Hb(c), f = 0; f < e.length; f++) {
                    var h = a.ra[a.ia[e[f].id]].f;
                    h != k && a.ha(e[f], Q, h, g)
                }
            e = l;
            f = a.ba[a.Aa(a.ia[d.id])].onSceneLoadAction;
            f != k && (h = a.aa.oa(this, f, k), f.type == a.fb && f.timelineIdentifier != k && (e = g, a.Ba = b), h({
                type: Oc
            }));
            e == l && b()
        };
        a.Ra =
            function(c, d) {
                var b;
                if (d == T) b = parseInt(c, 10);
                else if (d == M || d == Q) b = parseFloat(c);
                else if (d == Yd) b = parseFloat(c) / 100;
                else if (d == K) {
                    b = c;
                    b.charAt(0) == Ba && (b = b.slice(1));
                    b = b.toUpperCase();
                    for (var a = Array(3), f = 0, h, i, j = 0; 6 > j; j += 2) h = "0123456789ABCDEF".indexOf(b.charAt(j)), i = "0123456789ABCDEF".indexOf(b.charAt(j + 1)), a[f] = 16 * h + i, f++;
                    b = a
                } else b = c;
                return b
            };
        a.Nb = function(c, d) {
            var b;
            if (d == T) b = m + Math.round(c) + Y;
            else if (d == M) b = m + c + qd;
            else if (d == Q) b = m + c + m;
            else if (d == Yd) b = m + 100 * parseFloat(c) + Ea;
            else if (d == K) {
                b = Ba;
                for (var a, f, h = 0; 3 > h; h++) a = c[h] / 16, f = c[h] % 16, b += "0123456789ABCDEF".charAt(a) + "0123456789ABCDEF".charAt(f)
            } else b = c;
            return b
        };
        a.ha = function(c, d, b, e) {
            if ("undefined" != typeof b) {
                typeof b == Rd && a.sb[d] == T && (b = m + b + Y);
                try {
                    e == g && (a.ra[a.ia[c.id]][d] = b), a.aa[d](this, b, c)
                } catch (f) {
                    a.log(rd + d + da + b + ba + f)
                }
            }
        };
        a.pc = function() {
            var c = a.la();
            if (c != k)
                for (var c = c.getElementsByTagName(ye), d = 0; d < c.length; d++) c[d].pause && c[d].pause()
        };
        a.rb = function(c, d, b) {
            var e = a.ba[a.da].timelines[d];
            if (e != k) {
                var e = e.animations,
                    f = document.getElementById(a.ma[b]),
                    h = a.ba[a.da].initialValues[b].aM;
                h != k && h != d && a.ib(c, h, b);
                var i = a.ba[a.da].initialValues[b].aN,
                    c = c ? c : window.event;
                c.type != Pd && i != k && i != d && h != d && a.ib(c, i, b);
                for (c = 0; c < e.length; c++) d = e[c], d.o == b && a.ha(f, d.i, d.e, l)
            }
        };
        a.ib = function(c, d, b) {
            d = a.ba[a.da].timelines[d];
            if (d != k) {
                for (var d = d.animations, e = document.getElementById(a.ma[b]), f = 0; f < d.length; f++) {
                    var h = d[f];
                    h.o == b && (h = h.i, a.ha(e, h, a.ra[b][h], l))
                }
                c = c ? c : window.event;
                c.type == Pd && (d = a.ba[a.da].initialValues[b].aM, d != k && a.rb(c, d, b))
            }
        };
        a.Xb = function(c, d) {
            var b = [];
            b.xa = 0;
            b.ea = [];
            b.na = c;
            b.Mc = d;
            return b
        };
        a.qc = function(c) {
            var d = a.ba[a.da].timelines;
            for (timelineIdentifier in d)
                if (d.hasOwnProperty(timelineIdentifier) != l && d[timelineIdentifier].name == c) {
                    a.lb(timelineIdentifier, k);
                    break
                }
        };
        a.lb = function(c, d) {
            for (var b = 0; b < a.ka.length; b++) {
                var e = a.ka[b];
                e.na == c && (a.mb(e), b--)
            }
            var f = a.Xb(c, d);
            a.ba[a.da].timelines[f.na] == k ? a.Mb(f) : (a.Dc(f), a.ka.push(f), f.xa = 0, f.ea = [], f.Ya = (new Date).getTime() / 1E3, 0 < a.ba[a.da].timelines[f.na].animations.length && a.Eb(), f.Tb = window.setTimeout(function() {
                    a.Mb(f)
                },
                1E3 * a.Lb(f)))
        };
        a.Dc = function(c) {
            for (var d = a.ba[a.da].timelines[c.na].animations, b = 0; b < d.length; b++) {
                var e = d[b].o,
                    f = d[b].i;
                void 0 === a.Ca[e] && (a.Ca[e] = []);
                a.Ca[e][f] = c.na
            }
            for (b = 0; b < a.ka.length; b++)
                if (d = a.ka[b], d.na != c.na)
                    for (var h = 0; h < d.ea.length; h++) e = d.ea[h].o, f = d.ea[h].i, a.Ca[e][f] == c.na && (d.ea.splice(h, 1), h--)
        };
        a.mb = function(c) {
            window.clearTimeout(c.Tb);
            c.xa = 0;
            c.ea = [];
            c.Ya = k;
            c = u(a.ka, c); - 1 != c && a.ka.splice(c, 1)
        };
        a.Cc = function() {
            for (; 0 < a.ka.length;) a.mb(a.ka[0])
        };
        a.sc = function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(c) {
                    window.setTimeout(c, 1E3 / a.$b)
                }
        };
        a.Eb = function() {
            a.Ga !== g && (a.Ga = g, a.sc()(function() {
                a.Ga = l;
                a.xb()
            }))
        };
        a.tc = function(c) {
            window.setTimeout(function() {
                a.Ga = l;
                a.xb()
            }, 1E3 * c)
        };
        a.Lb = function(c) {
            return a.ba[a.da].timelines[c.na].duration
        };
        a.Mb = function(c) {
            for (var d = 0; d < c.ea.length; d++) a.ha(document.getElementById(a.ma[c.ea[d].o]), c.ea[d].i, c.ea[d].e, g);
            a.mb(c);
            a.Ba !=
                k ? (a.Ba(), a.Ba = k) : (c = a.la(), c != k && (d = a.ba[a.Aa(a.$a())].onSceneAnimationCompleteAction, d != k && a.aa.oa(this, d, c)({
                    type: Nc
                })))
        };
        a.xb = function() {
            for (var c = k, d = 0; d < a.ka.length; d++) {
                var b = a.ka[d];
                if (-1 == u(a.ka, b) || b.Ya == k) return;
                for (var e = (new Date).getTime() / 1E3 - b.Ya, f = a.ba[a.da].timelines[b.na].animations, h = b.xa; h < f.length; h++) {
                    var i = f[h],
                        j = i.t,
                        n = i.o,
                        q = i.i;
                    if (a.Ca[n][q] == b.na)
                        if (e >= j) {
                            if (i.p == a.hc) i = document.getElementById(a.ma[n]), a.ba[a.da].initialValues[n].aH == g && i.play && (i.autoplay = g, i.play());
                            else {
                                j =
                                    i.r;
                                try {
                                    j == g && a.ra[n][q] != k && (i.b = a.ra[n][q])
                                } catch (Ee) {
                                    a.log(sd + Ee)
                                }
                                b.ea.push(i)
                            }
                            b.xa = h + 1
                        } else break
                }
                for (h = 0; h < b.ea.length; h++) j = b.ea[h].t, e < j + b.ea[h].d ? a.Ub(b.ea[h], e) : (i = document.getElementById(a.ma[b.ea[h].o]), a.ha(i, b.ea[h].i, b.ea[h].e, g), b.ea.splice(h, 1), h--);
                if (e <= a.Lb(b))
                    if (0 < b.ea.length) c = 0;
                    else if (b.xa < f.length && (b = f[b.xa].t - e, c === k || b < c)) c = b
            }
            0 === c ? a.Eb() : c !== k && a.tc(c)
        };
        a.qb = function(c, d) {
            var b, a, f;
            if (!(typeof c !== le || 1 !== d.nodeType)) {
                b = c.split(/\s+/g);
                f = d.className ? d.className + o : m;
                for (a =
                    0; a < b.length; a++) - 1 == f.indexOf(b[a]) && (f += b[a] + o);
                d.className = f
            }
        };
        a.Qa = function(c, d) {
            var b, a, f;
            if (!(typeof c !== le || 1 !== d.nodeType) && d.className) {
                f = m;
                b = d.className.split(/\s+/g);
                for (a = 0; a < b.length; a++) b[a].toLowerCase() != c.toLowerCase() && (f += b[a] + o);
                d.className = f
            }
        };
        a.Pa = function() {
            return a.$.cb != k || a.$.sa != k ? Mc : ob
        };
        a.Ub = function(c, d) {
            var b = c.i,
                e = c.b,
                f = e == k ? c.s : e,
                h = c.e,
                i = c.f,
                j = a.sb[b],
                e = document.getElementById(a.ma[c.o]),
                n = (d - c.t) / c.d,
                q = 1;
            i != z && (i == B ? q = n : i == Eb ? q = (new r(0.42, 0, 1, 1)).kb(n) : i == Gb ? q = (new r(0,
                0, 0.58, 1)).kb(n) : i == Cb ? q = (new r(0.42, 0, 0.58, 1)).kb(n) : i == Jb && (i = n, q = n < 1 / 2.75 ? 7.5625 * i * i : n < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : n < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375), j == T || j == M || j == Q || j == Yd ? (f = a.Ra(f, j), h = a.Ra(h, j), j = a.Nb(f + (h - f) * q, j), a.ha(e, b, j, g)) : j == K ? (f = a.Ra(f, j), h = a.Ra(h, j), j = a.Nb([f[0] + (h[0] - f[0]) * q, f[1] + (h[1] - f[1]) * q, f[2] + (h[2] - f[2]) * q], j), a.ha(e, b, j, g)) : 1 == q && a.ha(e, b, h, g))
        };
        a.Ob = function(c) {
            c != k && 0 === c.indexOf(De) && (c = yd + c);
            return c
        };
        a.$ = function() {
            function c(c) {
                return (c =
                    navigator && navigator.userAgent && navigator.userAgent.match(c)) && c[1]
            }
            var d = {};
            if (!navigator) return d;
            d.ca = parseFloat(c(/MSIE (\d+\.\d+)/)) || k;
            d.cb = parseFloat(c(/Gecko\/(\d+)/)) || k;
            d.sa = parseFloat(c(/Firefox\/(\d+\.\d+)/)) || k;
            d.Kc = parseFloat(c(/\((KHTML)/) && 1) || k;
            d.ya = parseFloat(c(/AppleWebKit\/(\d+\.\d+)/));
            d.Fc = parseFloat(d.ya && c(/Chrome\/(\d+\.\d+)/)) || k;
            d.jb = parseFloat(d.ya && c(/Safari\/(\d+\.\d+)/) && c(/Version\/(\d+\.\d+)/)) || k;
            d.opera = parseFloat(c(/Opera\/(\d+\.\d+)/) && c(/Version\/(\d+\.\d+)/)) ||
                c(/Opera\/(\d+\.\d+)/) || k;
            d.Sb = -1 < navigator.userAgent.search(Xb) || k;
            d.bc = -1 < navigator.userAgent.search(Cd) || k;
            for (var b in d)(d[b] === k || isNaN(d[b])) && delete d[b];
            d.opera && d.ca && delete d.ca;
            return d
        }();
        r.prototype.Fb = function(c) {
            return ((this.tb * c + this.Za) * c + this.Ia) * c
        };
        r.prototype.vc = function(c) {
            return ((this.Vb * c + this.ub) * c + this.ab) * c
        };
        r.prototype.uc = function(c) {
            return (3 * this.tb * c + 2 * this.Za) * c + this.Ia
        };
        r.prototype.Bc = function(c) {
            var d, b, a, f;
            for (a = c, b = 0; 8 > b; b++) {
                f = this.Fb(a) - c;
                if (0.0050 > Math.abs(f)) return a;
                d = this.uc(a);
                if (1.0E-6 > Math.abs(d)) break;
                a -= f / d
            }
            d = 0;
            b = 1;
            a = c;
            if (a < d) return d;
            if (a > b) return b;
            for (; d < b;) {
                f = this.Fb(a);
                if (0.0050 > Math.abs(f - c)) break;
                c > f ? d = a : b = a;
                a = 0.5 * (b - d) + d
            }
            return a
        };
        r.prototype.kb = function(c) {
            return this.vc(this.Bc(c))
        };
        a.aa = {
            i: function() {},
            b: function(c, d, b) {
                c.$.jb !== k && b.getAttribute(we) === B ? (b.setAttribute(Cc, d), c.aa.Ta(c, b)) : (c = b.getAttribute(uc), b.style.top = c != k ? parseInt(c) + parseInt(d) : d)
            },
            a: function(c, d, b) {
                c.$.jb !== k && b.getAttribute(we) === B ? (b.setAttribute(jc, d), c.aa.Ta(c, b)) :
                    (c = b.getAttribute(tc), b.style.left = c != k ? parseInt(c) + parseInt(d) : d)
            },
            Ta: function(c, d) {
                var b = d.getAttribute(jc),
                    a = d.getAttribute(Cc),
                    f = d.getAttribute(xc),
                    h = d.getAttribute(Zb),
                    i = m;
                b != k && (i += ra + b + Oa);
                a != k && (i += sa + a + Oa);
                f != k && (b = Tc, h === B ? b = Sc : h === Cb && (b = Rc), i += oa + b + Na + f + Oa);
                d.style[nb] = i;
                d.style.MozTransform = i;
                d.style.OTransform = i;
                d.style[bb] = i
            },
            c: function(c, d, b) {
                d = m + Math.max(0, parseInt(d)) + Y;
                b.style.width = d;
                c = b.ownerDocument.embeds[P + b.id];
                c != k && c.setAttribute(Ce, d)
            },
            d: function(c, d, b) {
                d = m + Math.max(0,
                    parseInt(d)) + Y;
                b.style.height = d;
                c = b.ownerDocument.embeds[P + b.id];
                c != k && c.setAttribute(xd, d)
            },
            t: function(c, d, b) {
                b.style.fontSize = d
            },
            s: function(c, d, b) {
                b.style.fontFamily = d
            },
            v: function(c, d, b) {
                b.style.fontWeight = d
            },
            u: function(c, d, b) {
                b.style.fontStyle = d
            },
            H: function(c, d, b) {
                b.style.textDecoration = d
            },
            F: function(c, d, b) {
                b.style.textAlign = d
            },
            G: function(c, d, b) {
                b.style.color = d
            },
            X: function(c, d, b) {
                b.style.letterSpacing = d
            },
            E: function(c, d, b) {
                b.style.wordSpacing = d
            },
            Y: function(c, d, b) {
                b.style.lineHeight = d
            },
            aX: function(c,
                d, b) {
                b.setAttribute(wc, d);
                d = b.getAttribute(vc);
                d != k && c.aa.aW(c, d, b)
            },
            aW: function(c, d, b) {
                b.setAttribute(vc, d);
                var a = b.getAttribute(wc);
                a == k && (a = Lb);
                c.$.Sb == k && (1 == 1 - d && b.style.removeProperty != k ? b.style.removeProperty(jb) : b.style[jb] = jd + a + ca + (1 - d) + Sa)
            },
            aY: function(c, d, b) {
                b.setAttribute(Zb, d);
                d = b.getAttribute(xc);
                d != k && c.aa.f(c, d, b)
            },
            f: function(c, d, b) {
                b.setAttribute(xc, d);
                var a = b.getAttribute(Zb);
                if (a != k)
                    if (c.$.ca != k && 9 > c.$.ca && a == z) {
                        var a = Math.PI * (parseInt(d) / 180),
                            d = Math.cos(a),
                            f = Math.sin(a),
                            a = b.clientHeight,
                            h = b.clientWidth;
                        b.setAttribute(sc, be + d + Ta + -1 * f + Ua + f + Va + d + Wa);
                        c.aa.Sa(b);
                        d = (h - b.offsetWidth) / 2;
                        a = (a - b.offsetHeight) / 2;
                        b.setAttribute(tc, d);
                        b.setAttribute(uc, a);
                        b.style.left = parseInt(c.ra[b.id].Left) + d;
                        b.style.top = parseInt(c.ra[b.id].Top) + a
                    } else c.aa.Ta(c, b)
            },
            Sa: function(c) {
                var d = c.getAttribute(rc),
                    b = c.getAttribute(qc),
                    a = c.getAttribute(sc),
                    f = c.getAttribute(pc),
                    h = m;
                d != k && (h += o + d);
                b != k && (h += o + b);
                a != k && (h += o + a);
                f != k && (h += o + f);
                c.style.filter = h
            },
            e: function(c, d, b) {
                c.$.ca != k && 9 > c.$.ca && (1 == parseInt(d) ? (b.setAttribute(rc,
                    m), b.setAttribute(qc, m)) : (b.setAttribute(rc, ae + Math.round(100 * d) + s), b.setAttribute(qc, Yc + Math.round(100 * d) + s)), c.aa.Sa(b));
                b.style.opacity = d;
                b.style.MozOpacity = d
            },
            aP: function(c, d, b) {
                b.style.cursor = d
            },
            bD: function(c, d, b) {
                b.style[pb] = d;
                b.style.MozUserSelect = d;
                b.onselectstart = function() {
                    return l
                }
            },
            N: function(c, d, b) {
                b.style.borderLeftWidth = d
            },
            O: function(c, d, b) {
                b.style.borderRightWidth = d
            },
            P: function(c, d, b) {
                b.style.borderTopWidth = d
            },
            M: function(c, d, b) {
                b.style.borderBottomWidth = d
            },
            B: function(c, d, b) {
                b.style.borderLeftColor =
                    d
            },
            C: function(c, d, b) {
                b.style.borderRightColor = d
            },
            D: function(c, d, b) {
                b.style.borderTopColor = d
            },
            A: function(c, d, b) {
                b.style.borderBottomColor = d
            },
            J: function(c, d, b) {
                b.style.borderLeftStyle = d
            },
            K: function(c, d, b) {
                b.style.borderRightStyle = d
            },
            L: function(c, d, b) {
                b.style.borderTopStyle = d
            },
            I: function(c, d, b) {
                b.style.borderBottomStyle = d
            },
            Ea: function(c) {
                var d = c.getAttribute(nc);
                d == k && (d = A);
                var b = c.getAttribute(oc);
                b == k && (b = A);
                var a = c.getAttribute(lc);
                a == k && (a = A);
                var f = c.getAttribute(mc);
                f == k && (f = A);
                c.style[md] = m + d +
                    o + b + o + f + o + a
            },
            aK: function(c, d, a) {
                a.style.borderTopLeftRadius = d;
                a.style.MozBorderRadiusTopleft = d;
                c.$.ca != k && 9 > c.$.ca && (a.setAttribute(nc, d), c.aa.Ea(a))
            },
            aL: function(c, d, a) {
                a.style.borderTopRightRadius = d;
                a.style.MozBorderRadiusTopright = d;
                c.$.ca != k && 9 > c.$.ca && (a.setAttribute(oc, d), c.aa.Ea(a))
            },
            aI: function(c, d, a) {
                a.style.borderBottomLeftRadius = d;
                a.style.MozBorderRadiusBottomleft = d;
                c.$.ca != k && 9 > c.$.ca && (a.setAttribute(lc, d), c.aa.Ea(a))
            },
            aJ: function(c, a, b) {
                b.style.borderBottomRightRadius = a;
                b.style.MozBorderRadiusBottomright =
                    a;
                c.$.ca != k && 9 > c.$.ca && (b.setAttribute(mc, a), c.aa.Ea(b))
            },
            bE: function(c, a, b) {
                b.innerHTML = m;
                for (var e = k, f = 0; f < a.length; f++) {
                    var h = a[f],
                        i = b.ownerDocument.createElement(ke);
                    i.src = m + c.qa + y + h.filename;
                    h.type != k && i.setAttribute(ue, h.type);
                    e == k && h.type != ze && h.type != Ae && (e = m + c.qa + y + h.filename);
                    b.appendChild(i)
                }
                if (e != k && c.$.ca != k && 9 > c.$.ca) {
                    a = b.ownerDocument.createElement(O);
                    for (f = 0; f < b.attributes.length; f++) h = b.attributes.item(f), a.setAttribute(h.name, h.value);
                    if (b.hasChildNodes)
                        for (f = 0; f < b.childNodes.length; f++) a.appendChild(b.childNodes.item(f));
                    a.style.cssText = b.style.cssText;
                    b.parentNode.replaceChild(a, b);
                    f = td;
                    if (a.getAttribute(L) != k && (a.getAttribute(L) == L || a.getAttribute(L) == B || a.getAttribute(L) == Qc || a.getAttribute(L) == $)) f = $;
                    h = td;
                    if (a.getAttribute(V) != k && (a.getAttribute(V) == V || a.getAttribute(V) == B || a.getAttribute(V) == Qc || a.getAttribute(V) == $)) h = $;
                    i = wb;
                    if (a.getAttribute(W) != k && (a.getAttribute(W) == W || a.getAttribute(W) == B || a.getAttribute(W) == Qc || a.getAttribute(W) == $)) i = z;
                    e = Rb + (qa + e + p) + fa + ga + (ua + a.style.width + p);
                    e += ja + a.style.height + p;
                    e =
                        e + ia + na + pa + (ma + a.id + p);
                    e += ka + a.id + p;
                    a.innerHTML = e + (ha + f + p) + (la + h + p) + (ta + i + p) + ea + Vb;
                    a.play = function() {
                        c.aa.Play(c, g, b.ownerDocument.embeds[P + b.id])
                    };
                    a.pause = function() {
                        c.aa.Play(c, l, b.ownerDocument.embeds[P + b.id])
                    }
                }
            },
            Play: function(c, a, b) {
                try {
                    a == g ? b.Play() : b.Pause()
                } catch (e) {
                    window.setTimeout(function() {
                        c.aa.Play(c, a, b)
                    }, 100)
                }
            },
            aH: function(c, a, b) {
                b.autoplay = l
            },
            aO: function(c, a, b) {
                b.setAttribute(L, a);
                b.controls = 0 != a;
                var e = b.ownerDocument.embeds[P + b.id];
                if (e != k && c.$.ca != k && 9 > c.$.ca) try {
                    e.SetControllerVisible(0 !=
                        parseInt(a))
                } catch (f) {
                    window.setTimeout(function() {
                        c.aa.aO(c, a, b)
                    }, 100)
                }
            },
            aR: function(c, a, b) {
                b.setAttribute(W, a);
                b.volume = 0 != a ? ub : vb;
                var e = b.ownerDocument.embeds[P + b.id];
                if (e != k && c.$.ca != k && 9 > c.$.ca) try {
                    e.SetMute(0 != parseInt(a))
                } catch (f) {
                    window.setTimeout(function() {
                        c.aa.aR(c, a, b)
                    }, 100)
                }
            },
            aQ: function(c, a, b) {
                b.setAttribute(V, a);
                b.loop = 0 != a;
                var e = b.ownerDocument.embeds[P + b.id];
                if (e != k && c.$.ca != k && 9 > c.$.ca) try {
                    e.Ec(0 != parseInt(a))
                } catch (f) {
                    window.setTimeout(function() {
                        c.aa.aQ(c, a, b)
                    }, 100)
                }
            },
            j: function(c,
                a, b) {
                b.style.position = a
            },
            r: function(c, a, b) {
                b.style.display = a
            },
            aG: function(c, a, b) {
                b.setAttribute(ne, a);
                b.setAttribute(Zc, a)
            },
            g: function(c, a, b) {
                b.style.backgroundColor = a
            },
            n: function(c, a, b) {
                b.setAttribute(bc, a);
                c.aa.Ua(c, b)
            },
            m: function(c, a, b) {
                b.setAttribute(ac, a);
                c.aa.Ua(c, b)
            },
            l: function(c, a, b) {
                b.setAttribute($b, a);
                c.aa.Ua(c, b)
            },
            Ua: function(c, a) {
                function b(c) {
                    return (parseFloat(c) + 270) % 360
                }

                function e(c, a) {
                    var c = b(c),
                        d = parseFloat(a.style.width),
                        e = parseFloat(a.style.height),
                        f = Math.sin(c / 180 * Math.PI) / Math.cos(c /
                            180 * Math.PI),
                        h = f * (d / 2) + e / 2,
                        f = e / 2 / f + d / 2;
                    0 > h || h > e ? h = e : f = d;
                    var i = d - f,
                        r = e - h;
                    if (135 < c && 315 >= c) var u = i,
                        i = f,
                        f = u,
                        u = r,
                        r = h,
                        h = u;
                    return {
                        x1: Math.round(100 * (f / d)),
                        y1: Math.round(100 * (h / e)),
                        x2: Math.round(100 * (i / d)),
                        y2: Math.round(100 * (r / e))
                    }
                }
                var f = a.getAttribute(bc);
                if (!(f == k || f == m)) {
                    var h = a.getAttribute(ac);
                    if (!(h == k || h == m)) {
                        var i = a.getAttribute($b);
                        i != k && (c.$.ya != k ? (i = e(i, a), a.style.backgroundImage = lb + i.x1 + Fa + i.y1 + Ga + i.x2 + Fa + i.y2 + Ha + f + Qa + h + Pa) : c.$.cb != k ? a.style.backgroundImage = $a + b(360 - Math.abs(parseFloat(i))) +
                            N + f + t + h + s : c.$.ca != k ? a.style[db] = Kd + b(360 - Math.abs(parseFloat(i))) + N + f + t + h + s : a.style.backgroundImage = c.$.opera != k ? cb + b(360 - Math.abs(parseFloat(i))) + N + f + t + h + s : Kd + b(360 - Math.abs(parseFloat(i))) + N + f + t + h + s)
                    }
                }
            },
            h: function(c, a, b) {
                if ((c.$.sa != k && 3.6 > c.$.sa || c.$.ca != k && 9 > c.$.ca) && (b.style.backgroundRepeat == k || b.style.backgroundRepeat == m || b.style.backgroundRepeat == Qd)) {
                    var e = Ed + b.id,
                        f = document.getElementById(e);
                    f != k ? f.src = m + c.qa + y + a : (f = document.createElement(Dd), f.src = m + c.qa + y + a, f.id = e, f.style.position = I, f.style.width =
                        D, f.style.height = D, f.style.top = A, f.style.left = A, f.style.zIndex = Xa, b.appendChild(f));
                    c.$.ca != k && 9 > c.$.ca && 6 < c.$.ca && a.substr(a.length - 4).toLowerCase() == sb && (f.setAttribute(pc, ce), c.aa.Sa(f))
                } else b.style.backgroundImage = ve + (c.qa + y + a).replace(Ka, Ia) + La
            },
            q: function(c, a, b) {
                b.style.backgroundSize = a;
                b.style[hb] = a;
                b.style.MozBackgroundSize = a
            },
            o: function(a, d, b) {
                b.style.backgroundOrigin = d;
                b.style[gb] = d;
                b.style.MozBackgroundOrigin = d
            },
            p: function(a, d, b) {
                d != k && d != Qd && (a = document.getElementById(Ed + b.id), a != k &&
                    (b.style.backgroundImage = ve + a.src.replace(Ka, Ia) + La, a.parentNode.removeChild(a)));
                b.style.backgroundRepeat = d
            },
            x: function(a, d, b) {
                b.style.overflow = d
            },
            aT: function(a, d, b) {
                b.style.paddingLeft = d
            },
            aU: function(a, d, b) {
                b.style.paddingRight = d
            },
            aV: function(a, d, b) {
                b.style.paddingTop = d
            },
            aS: function(a, d, b) {
                b.style.paddingBottom = d
            },
            S: function(a, d, b) {
                b.setAttribute(ec, d);
                a.aa.Da(b)
            },
            T: function(a, d, b) {
                b.setAttribute(fc, d);
                a.aa.Da(b)
            },
            R: function(a, d, b) {
                b.setAttribute(dc, d);
                a.aa.Da(b)
            },
            Q: function(a, d, b) {
                b.setAttribute(cc,
                    d);
                a.aa.Da(b)
            },
            Da: function(a) {
                var d = a.getAttribute(ec);
                if (d != k) {
                    var b = a.getAttribute(fc);
                    if (b != k) {
                        var e = a.getAttribute(dc);
                        if (e != k) {
                            var f = a.getAttribute(cc);
                            f != k && (d = parseFloat(d), b = parseFloat(b), 0 == d && 0 == b && 0 == parseFloat(f) ? a.style.removeAttribute ? (a.style.removeAttribute(kb), a.style.removeAttribute(Lc), a.style.removeAttribute(od), a.style.removeAttribute(nd)) : (a.style.removeProperty(kb), a.style.removeProperty(Lc), a.style.removeProperty(od), a.style.removeProperty(nd)) : (a.style[kb] = m + d + Z + b + Z + f + o + e,
                                a.style.MozBoxShadow = m + d + Z + b + Z + f + o + e, a.style.boxShadow = m + d + Z + b + Z + f + o + e, a.style[nd] = m + d + Z + b + Z + f + o + e))
                        }
                    }
                }
            },
            bB: function(a, d, b) {
                b.setAttribute(Ac, d);
                a.aa.Fa(b)
            },
            bC: function(a, d, b) {
                b.setAttribute(Bc, d);
                a.aa.Fa(b)
            },
            bA: function(a, d, b) {
                b.setAttribute(zc, d);
                a.aa.Fa(b)
            },
            aZ: function(a, d, b) {
                b.setAttribute(yc, d);
                a.aa.Fa(b)
            },
            Fa: function(a) {
                var d = a.getAttribute(Ac);
                if (d != k) {
                    var b = a.getAttribute(Bc);
                    if (b != k) {
                        var e = a.getAttribute(zc);
                        if (e != k) {
                            var f = a.getAttribute(yc);
                            f != k && (d = parseFloat(d), b = parseFloat(b), a.style.textShadow =
                                0 == d && 0 == b && 0 == parseFloat(f) ? X : m + d + Z + b + Z + f + o + e)
                        }
                    }
                }
            },
            Z: function(a, d, b) {
                b.style.wordWrap = d
            },
            y: function(a, d, b) {
                b.style.whiteSpaceCollapsing = d
            },
            z: function(a, d, b) {
                b.style.zIndex = d;
                b.parentNode.className == Ec && (b.parentNode.style.zIndex = d)
            },
            oa: function(a, d, b) {
                return function(e) {
                    var f = d.type;
                    if (f == a.ec) e = d.sceneSymbol, f = d.transition, e == k || e == a.lc ? a.va(a.Aa(d.sceneOid), f) : e == a.kc ? a.Jb(f) : e == a.mc ? a.Kb(f) : e == a.ic ? a.va(0, f) : e == a.jc && a.va(a.ba.length - 1, f);
                    else if (f == a.fb) d.timelineIdentifier != k && a.lb(d.timelineIdentifier,
                        b != k ? b.id : k);
                    else if (f == a.fc) {
                        if (d.javascriptOid != k) a.Custom[a.cc[d.javascriptOid]](a.ga, b, e)
                    } else if (f == a.gc) e = a.Ob(d.goToURL), e != k && (d.openInNewWindow == g ? window.open(e) : window.top.location = e);
                    else if (f == a.dc) {
                        var h = d.emailToAddress,
                            f = d.emailSubject,
                            i = d.emailBody,
                            e = Ld;
                        h != k && (e += escape(h));
                        if (f != k || i != k) e += Wb, h = [], f != k && h.push(me + encodeURIComponent(f)), i != k && h.push(kd + encodeURIComponent(i)), e += h.join(Ja);
                        e != Ld && (window.top.location = e)
                    }
                }
            },
            aA: function(a, d, b) {
                a.pa(Td, b, a.aa.oa(a, d, b))
            },
            aD: function(a,
                d, b) {
                a.pa(Wd, b, a.aa.oa(a, d, b))
            },
            aC: function(a, d, b) {
                a.pa(Vd, b, a.aa.oa(a, d, b))
            },
            aE: function(a, d, b) {
                a.pa(Xd, b, a.aa.oa(a, d, b))
            },
            aB: function(a, d, b) {
                a.pa(Ud, b, a.aa.oa(a, d, b))
            },
            nb: function(a, d, b) {
                return function(e) {
                    a.rb(e, d, a.ia[b.id])
                }
            },
            ob: function(a, d, b) {
                return function(e) {
                    a.ib(e, d, a.ia[b.id])
                }
            },
            aM: function(a, d, b) {
                a.pa(Wd, b, a.aa.nb(a, d, b));
                a.pa(Vd, b, a.aa.ob(a, d, b))
            },
            aN: function(a, d, b) {
                a.pa(Ud, b, a.aa.nb(a, d, b));
                a.pa(Xd, b, a.aa.ob(a, d, b))
            },
            V: function(a, d, b) {
                b.setAttribute(hc, d);
                a.aa.Va(a, b)
            },
            U: function(a,
                d, b) {
                b.setAttribute(gc, d);
                a.aa.Va(a, b)
            },
            W: function(a, d, b) {
                b.setAttribute(ic, d);
                a.aa.Va(a, b)
            },
            Va: function(a, d) {
                var b = d.getAttribute(hc);
                if (b != k) {
                    var e = m;
                    b == B ? e = a.Ob(d.getAttribute(ic)) : b == z && (e = m + a.qa + y + d.getAttribute(gc));
                    b = Sb + e + Aa;
                    a.$.bc != k && (b = Qb + b + Ob);
                    d.innerHTML = b
                }
            },
            w: function(a, d, b) {
                a = document.getElementById(Ed + b.id);
                a = a != k ? a.cloneNode(g) : k;
                b.innerHTML = d;
                for (var d = b.getElementsByTagName(je), e = 0; e < d.length; e++) d[e].src == m && (window.execScript || function(a) {
                    window.eval.call(window, a)
                })(d[e].text);
                a != k && b.appendChild(a)
            },
            aF: function(a, d, b) {
                b.style.cssText += aa + d
            },
            k: function() {},
            bF: function(a, d, b) {
                var e = b,
                    f = b.parentNode;
                f != k && f.className == Ec && (e = f);
                a = document.getElementById(a.ma[d]);
                d = e.parentNode;
                a == k || a == e || a == b || a == d || (d.removeChild(e), a.appendChild(e))
            }
        };
        a.ga = {};
        a.API = a.ga;
        a.ga.kSceneTransitionInstant = a.Ab;
        a.ga.kSceneTransitionCrossfade = a.zb;
        a.ga.kSceneTransitionSwap = a.Bb;
        a.ga.kSceneTransitionPushLeftToRight = a.Ka;
        a.ga.kSceneTransitionPushRightToLeft = a.La;
        a.ga.kSceneTransitionPushBottomToTop =
            a.Ja;
        a.ga.kSceneTransitionPushTopToBottom = a.Ma;
        a.ga.documentName = function() {
            return a.Zb
        };
        a.ga.sceneNames = function() {
            return a.Gb()
        };
        a.ga.currentSceneName = function() {
            return a.Yb()
        };
        a.ga.showSceneNamed = function(c, d) {
            a.wc(c, d)
        };
        a.ga.showNextScene = function(c) {
            a.Jb(c)
        };
        a.ga.showPreviousScene = function(c) {
            a.Kb(c)
        };
        a.ga.playTimelineNamed = function(c) {
            a.qc(c)
        };
        a.ga.getElementById = function(c) {
            return a.getElementById(c)
        }
    };
    "undefined" === typeof window.HYPE && (window.HYPE = window.HYPE_100, window.HYPE.documents = {});
    for (; 0 < window.HYPE_100_DocumentsToLoad.length;) window.HYPE_100_DocumentsToLoad[0](), window.HYPE_100_DocumentsToLoad.splice(0, 1);
})();