//	HYPE.documents["AMV_3D"]

(function HYPE_DocumentLoader() {
    var resourcesFolderName = "images/maquette 3d";
    var documentName = "AMV_3D";
    var documentLoaderFilename = "js/3d/amv3d_hype_generated_script.js";

    // find the URL for this script's absolute path and set as the resourceFolderName
    try {
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var scriptSrc = scripts[i].src;
            if (scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
                resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
                break;
            }
        }
    } catch (err) {
    }

    // Legacy support
    if (typeof window.HYPE_DocumentsToLoad == "undefined") {
        window.HYPE_DocumentsToLoad = new Array();
    }

    // load HYPE.js if it hasn't been loaded yet
    if (typeof HYPE_100 == "undefined") {
        if (typeof window.HYPE_100_DocumentsToLoad == "undefined") {
            window.HYPE_100_DocumentsToLoad = new Array();
            window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

            var headElement = document.getElementsByTagName('head')[0];
            var scriptElement = document.createElement('script');
            scriptElement.type = 'text/javascript';
            scriptElement.src = 'js/3d/HYPE.js?hype_version=100';
            headElement.appendChild(scriptElement);
        } else {
            window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
        }
        return;
    }

    var hypeDoc = new HYPE_100();

    var attributeTransformerMapping = {
        b: "i", c: "i", bC: "i", d: "i", aS: "i", M: "i", e: "f", N: "i", f: "d", aT: "i", O: "i", g: "c", aU: "i", P: "i", Q: "i", aV: "i", R: "c", aW: "f", aI: "i", S: "i", T: "i", l: "d", aX: "i", aJ: "i", m: "c", n: "c", aK: "i", X: "i", aZ: "i", A: "c", Y: "i", aL: "i", B: "c", C: "c", D: "c", t: "i", E: "i", G: "c", bA: "c", a: "i", bB: "i"
    }

    ;
    var scenes = [{
            initialValues: {
                "32": {
                    aU: 8, bB: 1, G: "#FFFFFF", aV: 8, r: "inline", bC: 1, e: "0.000000", s: "Verdana,Tahoma,Geneva,Sans-Serif", t: 22, Z: "break-word", v: "bold", w: "Porte Int\u00e9rieure", j: "absolute", x: "visible", aZ: 4, k: "div", y: "preserve", z: "10", aS: 8, aT: 8, a: 648, bA: "#000000", b: 118
                }
                ,
                "10": {
                    c: 202,
                    d: 73,
                    I: "Solid",
                    e: "0.000000",
                    J: "Solid",
                    f: "354deg",
                    K: "Solid",
                    g: "#DDEEFF",
                    L: "Solid",
                    aP: "pointer",
                    M: 1,
                    aY: "0",
                    N: 1,
                    A: "#A0A0A0",
                    x: "visible",
                    j: "absolute",
                    O: 1,
                    P: 1,
                    B: "#A0A0A0",
                    C: "#A0A0A0",
                    k: "div",
                    aA: {
                        goToURL: "menuiserie_int_ext.php", type: 5, openInNewWindow: false
                    }
                    ,
                    D: "#A0A0A0",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                    ,
                    z: "17",
                    a: 96,
                    aD: {
                        timelineIdentifier: "7", type: 3
                    }
                    ,
                    b: 234
                }
                ,
                "33": {
                    o: "content-box",
                    aD: {
                        timelineIdentifier: "34", type: 3
                    }
                    ,
                    x: "visible",
                    a: 347,
                    q: "100% 100%",
                    b: 224,
                    j: "absolute",
                    r: "inline",
                    c: 52,
                    k: "div",
                    aA: {
                        goToURL: "agencement.php", type: 5, openInNewWindow: false
                    }
                    ,
                    d: 70,
                    z: "23",
                    aP: "pointer",
                    e: "0.000000",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                }
                ,
                "26": {
                    aU: 8, bB: 1, G: "#FFFFFF", aV: 8, r: "inline", bC: 1, e: "0.000000", s: "Verdana,Tahoma,Geneva,Sans-Serif", t: 22, Z: "break-word", v: "bold", w: "Extension<div>Ossatures Bois</div>", j: "absolute", x: "visible", aZ: 4, k: "div", y: "preserve", z: "7", aS: 8, aT: 8, a: 718, bA: "#000000", F: "center", b: 187
                }
                ,
                "19": {
                    c: 366,
                    d: 122,
                    I: "Solid",
                    e: "0.000000",
                    J: "Solid",
                    f: "31deg",
                    K: "Solid",
                    g: "#DDEEFF",
                    L: "Solid",
                    aP: "pointer",
                    M: 1,
                    aY: "2",
                    N: 1,
                    A: "#A0A0A0",
                    x: "visible",
                    j: "absolute",
                    O: 1,
                    P: 1,
                    B: "#A0A0A0",
                    C: "#A0A0A0",
                    k: "div",
                    aA: {
                        goToURL: "agencement.php", type: 5, openInNewWindow: false
                    }
                    ,
                    D: "#A0A0A0",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                    ,
                    z: "21",
                    a: 81,
                    aD: {
                        timelineIdentifier: "20", type: 3
                    }
                    ,
                    b: 320
                }
                ,
                "41": {
                    aU: 8,
                    bB: 1,
                    G: "#FFFFFF",
                    aV: 8,
                    r: "inline",
                    bC: 1,
                    e: "0.000000",
                    s: "Verdana,Tahoma,Geneva,Sans-Serif",
                    t: 22,
                    Z: "break-word",
                    aP: "pointer",
                    v: "bold",
                    w: "Escalier",
                    j: "absolute",
                    x: "visible",
                    aZ: 4,
                    k: "div",
                    y: "preserve",
                    aA: {
                        goToURL: "agencement.php", type: 5, openInNewWindow: false
                    }
                    ,
                    z: "12",
                    aS: 8,
                    aT: 8,
                    a: 334,
                    bA: "#000000",
                    b: 84
                }
                ,
                "27": {
                    o: "content-box",
                    aD: {
                        timelineIdentifier: "28", type: 3
                    }
                    ,
                    x: "visible",
                    a: 712,
                    q: "100% 100%",
                    b: 280,
                    j: "absolute",
                    r: "inline",
                    c: 248,
                    k: "div",
                    aA: {
                        goToURL: "menuiserie_int_ext.php", type: 5, openInNewWindow: false
                    }
                    ,
                    d: 114,
                    z: "14",
                    aP: "pointer",
                    e: "0.000000",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                }
                ,
                "12": {
                    c: 36,
                    d: 261,
                    I: "Solid",
                    e: "0.000000",
                    J: "Solid",
                    f: "33deg",
                    K: "Solid",
                    g: "#DDEEFF",
                    L: "Solid",
                    aP: "pointer",
                    M: 1,
                    aY: "0",
                    N: 1,
                    A: "#A0A0A0",
                    x: "visible",
                    j: "absolute",
                    O: 1,
                    P: 1,
                    B: "#A0A0A0",
                    C: "#A0A0A0",
                    k: "div",
                    aA: {
                        goToURL: "agencement.php", type: 5, openInNewWindow: false
                    }
                    ,
                    D: "#A0A0A0",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                    ,
                    z: "18",
                    a: 34,
                    aD: {
                        timelineIdentifier: "6", type: 3
                    }
                    ,
                    b: 33
                }
                ,
                "42": {
                    o: "content-box",
                    aD: {
                        timelineIdentifier: "43", type: 3
                    }
                    ,
                    x: "visible",
                    a: 341,
                    q: "100% 100%",
                    b: 133,
                    j: "absolute",
                    r: "inline",
                    c: 257,
                    k: "div",
                    aA: {
                        goToURL: "menuiserie_int_ext.php", type: 5, openInNewWindow: false
                    }
                    ,
                    d: 64,
                    z: "25",
                    aP: "pointer",
                    e: "0.000000",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                }
                ,
                "35": {
                    aV: 8, w: "<div style=\"text-align: center;\"><font color=\"#ffffff\" face=\"Verdana, Tahoma, Geneva, sans-serif\"><span style=\"font-size: 22px; text-shadow: rgb(0, 0, 0) 1px 1px 4px;\"><b>Porte</b></span></font></div><div style=\"text-align: center;\"><span style=\"font-size: 22px; text-shadow: rgb(0, 0, 0) 1px 1px 4px;\"><b><font face=\"Verdana, Tahoma, Geneva, sans-serif\" color=\"#ffffff\">Ext\u00e9rieure</font></b></span></div>", x: "visible", a: 304, Z: "break-word", b: 214, j: "absolute", r: "inline", aS: 8, k: "div", y: "preserve", aT: 8, z: "11", t: 16, e: "0.000000", aU: 8, G: "#000000"
                }
                ,
                "2": {
                    o: "content-box", h: "AMV_3D_BG.jpg", x: "visible", a: 0, q: "100% 100%", b: 0, j: "absolute", r: "inline", c: 960, k: "div", z: "1", d: 456, e: "1.000000"
                }
                ,
                "36": {
                    o: "content-box",
                    aD: {
                        timelineIdentifier: "37", type: 3
                    }
                    ,
                    x: "visible",
                    a: 584,
                    q: "100% 100%",
                    b: 46,
                    j: "absolute",
                    r: "inline",
                    c: 149,
                    k: "div",
                    aA: {
                        goToURL: "agencement.php", type: 5, openInNewWindow: false
                    }
                    ,
                    d: 70,
                    z: "26",
                    aP: "pointer",
                    e: "0.000000",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                }
                ,
                "3": {
                    aU: 8, bB: 1, G: "#FFFFFF", aV: 8, r: "inline", bC: 1, e: "0.000000", s: "Verdana,Tahoma,Geneva,Sans-Serif", t: 22, Z: "break-word", v: "bold", w: "Clotures", j: "absolute", x: "visible", aZ: 4, k: "div", y: "preserve", z: "5", aS: 8, aT: 8, a: 16, bA: "#000000", b: 57
                }
                ,
                "21": {
                    aU: 8, bB: 1, G: "#FFFFFF", aV: 8, r: "inline", bC: 1, e: "0.000000", s: "Verdana,Tahoma,Geneva,Sans-Serif", t: 22, Z: "break-word", v: "bold", w: "Terrasse", A: "#FEFDFF", x: "visible", j: "absolute", B: "#FEFDFF", k: "div", aZ: 4, C: "#FEFDFF", y: "preserve", aS: 8, D: "#FEFDFF", z: "3", aT: 8, a: 311, bA: "#000000", b: 324
                }
                ,
                "29": {
                    aU: 8, bB: 1, G: "#FFFFFF", aV: 8, r: "inline", bC: 1, e: "0.000000", s: "Verdana,Tahoma,Geneva,Sans-Serif", t: 22, Z: "break-word", v: "bold", w: "Ouvertures", j: "absolute", x: "visible", aZ: 4, k: "div", y: "preserve", z: "8", aS: 8, aT: 8, a: 772, bA: "#000000", b: 312
                }
                ,
                "44": {
                    aU: 8,
                    bB: 1,
                    G: "#FFFFFF",
                    aV: 8,
                    r: "inline",
                    bC: 1,
                    e: "0.000000",
                    s: "Verdana,Tahoma,Geneva,Sans-Serif",
                    t: 22,
                    Z: "break-word",
                    aP: "pointer",
                    v: "bold",
                    w: "Parquet",
                    j: "absolute",
                    x: "visible",
                    aZ: 4,
                    k: "div",
                    y: "preserve",
                    aA: {
                        type: 5
                    }
                    ,
                    z: "13",
                    aS: 8,
                    aT: 8,
                    a: 402,
                    bA: "#000000",
                    b: 147
                }
                ,
                "14": {
                    c: 697,
                    d: 37,
                    I: "Solid",
                    e: "0.000000",
                    J: "Solid",
                    f: "356deg",
                    K: "Solid",
                    g: "#DDEEFF",
                    L: "Solid",
                    aP: "pointer",
                    M: 1,
                    aY: "0",
                    N: 1,
                    A: "#A0A0A0",
                    x: "visible",
                    j: "absolute",
                    O: 1,
                    P: 1,
                    B: "#A0A0A0",
                    C: "#A0A0A0",
                    k: "div",
                    aA: {
                        goToURL: "agencement.php", type: 5, openInNewWindow: false
                    }
                    ,
                    D: "#A0A0A0",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                    ,
                    z: "19",
                    a: 77,
                    aD: {
                        timelineIdentifier: "6", type: 3
                    }
                    ,
                    b: 21
                }
                ,
                "38": {
                    aU: 8, bB: 1, G: "#FFFFFF", aV: 8, r: "inline", bC: 1, e: "0.000000", s: "Verdana,Tahoma,Geneva,Sans-Serif", t: 22, Z: "break-word", v: "bold", w: "Dressing", j: "absolute", x: "visible", aZ: 4, k: "div", y: "preserve", z: "9", aS: 8, aT: 8, a: 605, bA: "#000000", b: 54
                }
                ,
                "30": {
                    o: "content-box",
                    aD: {
                        timelineIdentifier: "31", type: 3
                    }
                    ,
                    x: "visible",
                    a: 664,
                    q: "100% 100%",
                    b: 135,
                    j: "absolute",
                    r: "inline",
                    c: 32,
                    k: "div",
                    aA: {
                        goToURL: "menuiserie_int_ext.php", type: 5, openInNewWindow: false
                    }
                    ,
                    d: 32,
                    z: "22",
                    aP: "pointer",
                    e: "0.000000",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                }
                ,
                "23": {
                    o: "content-box",
                    aD: {
                        timelineIdentifier: "24", type: 3
                    }
                    ,
                    x: "visible",
                    a: 655,
                    q: "100% 100%",
                    b: 151,
                    j: "absolute",
                    r: "inline",
                    c: 305,
                    k: "div",
                    aA: {
                        goToURL: "isolation.php", type: 5, openInNewWindow: false
                    }
                    ,
                    d: 163,
                    z: "15",
                    aP: "pointer",
                    e: "0.000000",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                }
                ,
                "16": {
                    c: 203,
                    d: 118,
                    I: "Solid",
                    e: "0.000000",
                    J: "Solid",
                    f: "345deg",
                    K: "Solid",
                    g: "#DDEEFF",
                    L: "Solid",
                    aP: "pointer",
                    M: 1,
                    aY: "0",
                    N: 1,
                    A: "#A0A0A0",
                    x: "visible",
                    j: "absolute",
                    O: 1,
                    P: 1,
                    B: "#A0A0A0",
                    C: "#A0A0A0",
                    k: "div",
                    aA: {
                        goToURL: "agencement.php", type: 5, openInNewWindow: false
                    }
                    ,
                    D: "#A0A0A0",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                    ,
                    z: "20",
                    a: 463,
                    aD: {
                        timelineIdentifier: "18", type: 3
                    }
                    ,
                    b: 211
                }
                ,
                "39": {
                    o: "content-box",
                    aD: {
                        timelineIdentifier: "40", type: 3
                    }
                    ,
                    x: "visible",
                    a: 331,
                    q: "100% 100%",
                    b: 60,
                    j: "absolute",
                    r: "inline",
                    c: 123,
                    k: "div",
                    aA: {
                        goToURL: "menuiserie_int_ext.php", type: 5, openInNewWindow: false
                    }
                    ,
                    d: 116,
                    z: "24",
                    aP: "pointer",
                    e: "0.000000",
                    aC: {
                        type: 1, transition: 1, sceneSymbol: 3
                    }
                }
                ,
                "8": {
                    aU: 8, bB: 1, G: "#FFFFFF", aV: 8, r: "inline", bC: 1, e: "0.000000", s: "Verdana,Tahoma,Geneva,Sans-Serif", t: 22, Z: "break-word", v: "bold", w: "Stores", j: "absolute", x: "visible", aZ: 4, k: "div", y: "preserve", z: "6", aS: 8, aT: 8, a: 136, bA: "#000000", b: 249
                }
                ,
                "17": {
                    aU: 8, bB: 1, G: "#FFFFFF", aV: 8, r: "inline", bC: 1, e: "0.000000", s: "Verdana,Tahoma,Geneva,Sans-Serif", t: 22, Z: "break-word", v: "bold", w: "Pr\u00e9au", j: "absolute", x: "visible", aZ: 4, k: "div", y: "preserve", z: "2", aS: 8, aT: 8, a: 521, bA: "#000000", b: 242
                }
            }
            ,
            sceneIndex: 0,
            timelines: {
                "37": {
                    framesPerSecond: 30,
                    animations: [{
                            f: "2", t: 0, d: 0.5, i: "e", e: "1.000000", r: 1, s: "0.000000", o: "38"
                        }
                    ],
                    identifier: "37",
                    name: "Dressing",
                    duration: 0.5
                }
                ,
                "43": {
                    framesPerSecond: 30,
                    animations: [{
                            f: "2", t: 0, d: 0.5, i: "e", e: "1.000000", r: 1, s: "0.000000", o: "44"
                        }
                    ],
                    identifier: "43",
                    name: "Parquet",
                    duration: 0.5
                }
                ,
                "6": {
                    framesPerSecond: 30,
                    animations: [{
                            f: "2", t: 0, d: 0.60000002, i: "e", e: "1.000000", r: 1, s: "0.000000", o: "3"
                        }
                    ],
                    identifier: "6",
                    name: "Clotures",
                    duration: 0.60000002
                }
                ,
                "34": {
                    framesPerSecond: 30,
                    animations: [{
                            f: "2", t: 0, d: 0.5, i: "e", e: "1.000000", r: 1, s: "0.000000", o: "35"
                        }
                    ],
                    identifier: "34",
                    name: "Porte Exterieure",
                    duration: 0.5
                }
                ,
                "40": {
                    framesPerSecond: 30,
                    animations: [{
                            f: "2", t: 0, d: 0.5, i: "e", e: "1.000000", r: 1, s: "0.000000", o: "41"
                        }
                    ],
                    identifier: "40",
                    name: "Escalier",
                    duration: 0.5
                }
                ,
                "7": {
                    framesPerSecond: 30,
                    animations: [{
                            f: "2", t: 0, d: 0.53333336, i: "e", e: "1.000000", r: 1, s: "0.000000", o: "8"
                        }
                    ],
                    identifier: "7",
                    name: "Store Ban",
                    duration: 0.53333336
                }
                ,
                "18": {
                    framesPerSecond: 30,
                    animations: [{
                            f: "2", t: 0, d: 0.73333335, i: "e", e: "1.000000", r: 1, s: "-1.000000", o: "17"
                        }
                    ],
                    identifier: "18",
                    name: "Pr\u00e9au",
                    duration: 0.73333335
                }
                ,
                "24": {
                    framesPerSecond: 30,
                    animations: [{
                            f: "2", t: 0, d: 0.5, i: "e", e: "1.000000", r: 1, s: "0.000000", o: "26"
                        }
                    ],
                    identifier: "24",
                    name: "ossature",
                    duration: 0.5
                }
                ,
                kTimelineDefaultIdentifier: {
                    framesPerSecond: 30, animations: [], identifier: "kTimelineDefaultIdentifier", name: "Main Timeline", duration: 0
                }
                ,
                "28": {
                    framesPerSecond: 30,
                    animations: [{
                            f: "2", t: 0, d: 0.53333336, i: "e", e: "1.000000", r: 1, s: "0.000000", o: "29"
                        }
                    ],
                    identifier: "28",
                    name: "Ouvertures",
                    duration: 0.53333336
                }
                ,
                "20": {
                    framesPerSecond: 30,
                    animations: [{
                            f: "2", t: 0, d: 0.56666666, i: "e", e: "1.000000", r: 1, s: "-1.000000", o: "21"
                        }
                    ],
                    identifier: "20",
                    name: "Terrasse",
                    duration: 0.56666666
                }
                ,
                "31": {
                    framesPerSecond: 30,
                    animations: [{
                            f: "2", t: 0, d: 0.5, i: "e", e: "1.000000", r: 1, s: "0.000000", o: "32"
                        }
                    ],
                    identifier: "31",
                    name: "Porte_interieure",
                    duration: 0.5
                }
            }
            ,
            perspective: "600px",
            oid: "1",
            backgroundColor: "#FFFFFF",
            name: "Untitled Scene"
        }

    ];



    var javascripts = [];



    var Custom = {};
    var javascriptMapping = {};
    for (var i = 0; i < javascripts.length; i++) {
        try {
            javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
            eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
        } catch (e) {
            hypeDoc.log(e);
            Custom[javascripts[i].name] = (function () {});
        }
    }

    hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
    hypeDoc.setScenes(scenes);
    hypeDoc.setJavascriptMapping(javascriptMapping);
    hypeDoc.Custom = Custom;
    hypeDoc.setCurrentSceneIndex(0);
    hypeDoc.setMainContentContainerID("amv3d_hype_container");
    hypeDoc.setResourcesFolderName(resourcesFolderName);
    hypeDoc.setShowHypeBuiltWatermark(0);
    hypeDoc.setShowLoadingPage(false);
    hypeDoc.setDrawSceneBackgrounds(true);
    hypeDoc.setDocumentName(documentName);

    HYPE.documents[documentName] = hypeDoc.API;

    hypeDoc.documentLoad(this.body);
}());

