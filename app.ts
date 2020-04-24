namespace App {
    function decodeWord(s: string): number {
        return parseInt(s, 36);
    }

    function encodeWord(num: number): string {
        let s = num.toString(36);
        if (s.length == 2) {
            return s;
        }
        if (s.length == 1) {
            return "0" + s;
        }
        console.error("bad num: %d", num);
        return "0";
    }

    const gopherHatList = [
        "sprites/none.png",
        "sprites/hat/sailor.png",
        "sprites/hat/ushanka.png",
        "sprites/hat/googler.png",
        "sprites/hat/tophat.png",
        "sprites/hat/miner.png",
        "sprites/hat/student.png",
        "sprites/hat/puffball.png",
        "sprites/hat/santa.png",
        "sprites/hat/sherlock.png",
        "sprites/hat/bow_yellow.png",
        "sprites/hat/bow_purple.png",
        "sprites/hat/bow_blue.png",
        "sprites/hat/headband_purple.png",
        "sprites/hat/headband_blue.png",
    ];

    const gopherExtrasList = [
        "sprites/none.png",
        "sprites/extras/bowtie.png",
        "sprites/extras/beard_adamj.png",
        "sprites/extras/scar_harry.png",
        "sprites/extras/antennae.png",
        "sprites/extras/eyeflames.png",
    ];

    const gopherHairList = [
        "sprites/none.png",
        "sprites/hair/dark_edgy.png",
        "sprites/hair/payot.png",
        "sprites/hair/short.png",
        "sprites/hair/whiskers.png",
        "sprites/hair/whiskers2.png",
        "sprites/hair/long.png",
        "sprites/hair/tennis.png",
    ];

    const gopherTeethList = [
        "sprites/none.png",
        "sprites/teeth/classical.png",
        "sprites/teeth/edgy.png",
        "sprites/teeth/fangs.png",
        "sprites/teeth/fragile.png",
        "sprites/teeth/funky.png",
        "sprites/teeth/shy.png",
        "sprites/teeth/soft.png",
        "sprites/teeth/broken.png",
        "sprites/teeth/monoteeth.png",
        "sprites/teeth/vampire.png",
    ];

    const gopherMouthList = [
        "sprites/none.png",
        "sprites/mouth/grin.png",
        "sprites/mouth/lol.png",
        "sprites/mouth/shout.png",
        "sprites/mouth/surprised.png",
        "sprites/mouth/tongue.png",
        "sprites/mouth/annoyed.png",
        "sprites/mouth/smile.png",
    ];

    const gopherColorsList = [
        "sprites/torso/normal/0.png",
        "sprites/torso/normal/5.png",
        "sprites/torso/normal/10.png",
        "sprites/torso/normal/15.png",
        "sprites/torso/normal/40.png",
        "sprites/torso/normal/75.png",
        "sprites/torso/normal/80.png",
        "sprites/torso/normal/85.png",
        "sprites/torso/normal/90.png",
        "sprites/torso/normal/95.png",
        "sprites/torso/normal/100.png",
        "sprites/torso/normal/105.png",
        "sprites/torso/normal/110.png",
        "sprites/torso/normal/115.png",
        "sprites/torso/normal/125.png",
        "sprites/torso/normal/145.png",
        "sprites/torso/normal/150.png",
        "sprites/torso/normal/155.png",
        "sprites/torso/normal/170.png",
        "sprites/torso/normal/180.png",
        "sprites/torso/normal/195.png",
    ];

    const gopherEarsList = [
        "sprites/none.png",
        "sprites/ears/fancy",
        "sprites/ears/fluffy",
        "sprites/ears/foxy",
        "sprites/ears/normal",
        "sprites/ears/playful",
        "sprites/ears/pointy",
        "sprites/ears/tiny",
        "sprites/ears/wide",
        "sprites/ears/wolf",
    ];

    const gopherTorsoList = [
        "sprites/none.png",
        "sprites/torso/cheeky",
        "sprites/torso/curly",
        "sprites/torso/normal",
        "sprites/torso/shaggy",
        "sprites/torso/wolf",
        "sprites/torso/barbed",
    ];

    const gopherPoseList = [
        "sprites/none.png",
        "sprites/pose/cowboy.png",
        "sprites/pose/dunno.png",
        "sprites/pose/right_holding.png",
        "sprites/pose/right_holding.mic.png",
        "sprites/pose/right_holding.white_rose.png",
        "sprites/pose/right_holding.wrench.png",
        "sprites/pose/sides.png",
        "sprites/pose/sign_blank.png",
        "sprites/pose/sign_persik_happy.png",
        "sprites/pose/sign_persik_laugh.png",
        "sprites/pose/sign_persik_thumbsup.png",
        "sprites/pose/sign_persik_angry.png",
        "sprites/pose/sign_go.png",
        "sprites/pose/sign_linux.png",
        "sprites/pose/thinking.magnifier.png",
        "sprites/pose/thinking.medic.png",
        "sprites/pose/thinking.png",
        "sprites/pose/timid.beads.png",
        "sprites/pose/timid.camera.png",
        "sprites/pose/timid.coffee.png",
        "sprites/pose/timid.money.png",
        "sprites/pose/timid.png",
        "sprites/pose/sign_1.png",
        "sprites/pose/sign_2.png",
        "sprites/pose/sign_3.png",
        "sprites/pose/handsup.png",
        "sprites/pose/shocked.png",
        "sprites/pose/nunchuck.png",
        "sprites/pose/water_magic.png",
        "sprites/pose/fire_magic.png",
        "sprites/pose/lightning_magic.png",
        "sprites/pose/snowball.png",
        "sprites/pose/dance.png",
        "sprites/pose/thumbs_up1.png",
        "sprites/pose/thumbs_up2.png",
        "sprites/pose/sides2.png",
        "sprites/pose/sides3.png",
        "sprites/pose/sides4.png",
    ];

    const gopherNoseList = [
        "sprites/nose/neat_a.png",
        "sprites/nose/neat_b.png",
        "sprites/nose/oval.png",
        "sprites/nose/round.png",
        "sprites/nose/small.png",
        "sprites/nose/tiny.png",
        "sprites/nose/apple.png",
        "sprites/nose/flat.png",
    ];

    const gopherEyewearList = [
        "sprites/none.png",
        "sprites/eyewear/censored_black.png",
        "sprites/eyewear/censored_red.png",
        "sprites/eyewear/glasses_cool.png",
        "sprites/eyewear/deal_with_it.png",
        "sprites/eyewear/glasses_hipster.png",
        "sprites/eyewear/glasses_glam.png",
        "sprites/eyewear/glasses_nerd.png",
        "sprites/eyewear/glasses_square.png",
        "sprites/eyewear/glasses_adamj.png",
        "sprites/eyewear/glasses_cyber.png",
        "sprites/eyewear/protective_goggles.png",
        "sprites/eyewear/monocle_left.png",
        "sprites/eyewear/monocle_right.png",
        "sprites/eyewear/monocle_black.png",
    ];

    const gopherAccessoryList = [
        "sprites/none.png",
        "sprites/accessory/headphones.png",
        "sprites/accessory/facemask.png",
        "sprites/accessory/evil_mustache.png",
    ];

    const gopherEyesList = [
        "sprites/eyes/alien_center.png",
        "sprites/eyes/alien_crazy.png",
        "sprites/eyes/alien_fish.png",
        "sprites/eyes/angry.png",
        "sprites/eyes/angry_one.png",
        "sprites/eyes/confused.png",
        "sprites/eyes/different.png",
        "sprites/eyes/different_mirrored.png",
        "sprites/eyes/different_mirrored_eyebrow.png",
        "sprites/eyes/distant_normal_left.png",
        "sprites/eyes/happy.png",
        "sprites/eyes/happy_as_in_anime.png",
        "sprites/eyes/killed.png",
        "sprites/eyes/normal_up.png",
        "sprites/eyes/normal_up_lashes.png",
        "sprites/eyes/oval_center.png",
        "sprites/eyes/oval_center_lashes.png",
        "sprites/eyes/oval_crazy.png",
        "sprites/eyes/oval_curious.png",
        "sprites/eyes/oval_curious_empty.png",
        "sprites/eyes/oval_down.png",
        "sprites/eyes/oval_down_lashes.png",
        "sprites/eyes/rofl.png",
        "sprites/eyes/sceptical.png",
        "sprites/eyes/small_center.png",
        "sprites/eyes/small_center_lashes.png",
        "sprites/eyes/wink.png",
        "sprites/eyes/goofy.png",
    ];

    const gopherUndernoseList = [
        "sprites/undernose/normal.png",
        "sprites/undernose/oval.png",
        "sprites/undernose/rome.png",
        "sprites/undernose/small.png",
        "sprites/undernose/gourmet.png",
    ];

    const gopherTattooList = [
        "sprites/none.png",
        "sprites/tattoo/apple.png",
        "sprites/tattoo/batman.png",
        "sprites/tattoo/digital_resistance1.png",
        "sprites/tattoo/digital_resistance2.png",
        "sprites/tattoo/durov_dog1.png",
        "sprites/tattoo/durov_dog2.png",
        "sprites/tattoo/github.png",
        "sprites/tattoo/invader.png",
        "sprites/tattoo/sammy.png",
        "sprites/tattoo/sekai.png",
        "sprites/tattoo/slowpoke.png",
        "sprites/tattoo/ubuntu.png",
        "sprites/tattoo/usb.png",
        "sprites/tattoo/vk.png",
        "sprites/tattoo/x.png",
        "sprites/tattoo/deusex_logo.png",
        "sprites/tattoo/gengar.png",
        "sprites/tattoo/hello_kitty.png",
        "sprites/tattoo/sonic.png",
        "sprites/tattoo/vaultboy.png",
        "sprites/tattoo/reddit.png",
        "sprites/tattoo/virus1.png",
        "sprites/tattoo/virus2.png",
    ];

    const optionTabList = [
        {
            key: "colorOptionTab",
            options: gopherColorsList,
            label: "Body color",
        },
        {
            key: "eyesOptionTab",
            options: gopherEyesList,
            label: "Eyes",
        },
        {
            key: "poseOptionTab",
            options: gopherPoseList,
            label: "Pose",
        },
        {
            key: "torsoOptionTab",
            options: gopherTorsoList,
            label: "Torso",
        },
        {
            key: "earsOptionTab",
            options: gopherEarsList,
            label: "Ears",
        },
        {
            key: "teethOptionTab",
            options: gopherTeethList,
            label: "Teeth",
        },
        {
            key: "mouthOptionTab",
            options: gopherMouthList,
            label: "Mouth",
        },
        {
            key: "undernoseOptionTab",
            options: gopherUndernoseList,
            label: "Undernose",    
        },
        {
            key: "noseOptionTab",
            options: gopherNoseList,
            label: "Nose",    
        },
        {
            key: "eyewearOptionTab",
            options: gopherEyewearList,
            label: "Eyewear",
        },
        {
            key: "accessoryOptionTab",
            options: gopherAccessoryList,
            label: "Accessory",
        },
        {
            key: "tattooOptionTab",
            options: gopherTattooList,
            label: "Tattoo",
        },
        {
            key: "extrasOptionTab",
            options: gopherExtrasList,
            label: "Extras",
        },
        {
            key: "hairOptionTab",
            options: gopherHairList,
            label: "Hair",
        },
        {
            key: "hatOptionTab",
            options: gopherHatList,
            label: "Hat",
        },
    ];

    function objectListFmt(list) {
        return {
            enc: function(x) {
                for (let i in list) {
                    if (list[i].key == x.key) {
                        return encodeWord(+i);
                    }                    
                }
                console.error("%s not found", x.key);
                return encodeWord(0);
            },
            dec: function(s) { return list[decodeWord(s)]; },
        };
    }

    function stringListFmt(list) {
        return {
            enc: function(s) { return encodeWord(list.indexOf(s)); },
            dec: function(s) { return list[decodeWord(s)]; },
        };
    }

    let optsFmt = {
        // We have 1296 values.
        // It's safe to use up to 10 bits (2^10).
        //
        // Bits:
        // 0-1 - isLegacy
        // 2-9 - reserved
        enc: function(opts) {
            let bits = 0;
            if (opts.isLegacy) {
                bits = bits | (1 << 0);
            }
            return encodeWord(bits);
        },
        dec: function(s) {
            let opts = {isLegacy: false};
            let bits = decodeWord(s);
            opts.isLegacy = (bits & (1 << 0)) != 0;
            return opts;
        },
    };

    let app = {
        query: new URLSearchParams(window.location.search),

        legacyStateSchemeChunks: 13,

        state: {
            tabSelection: optionTabList, // TODO(quasilyte): move outside of the "state"?
            
            // Defaults.
            tab: optionTabList[0],
            colorOptionTab: "sprites/torso/normal/100.png",
            eyesOptionTab: "sprites/eyes/normal_up.png",
            poseOptionTab: "sprites/pose/dunno.png",
            torsoOptionTab: "sprites/torso/normal",
            earsOptionTab: "sprites/ears/normal",
            teethOptionTab: "sprites/teeth/classical.png",
            mouthOptionTab: "sprites/none.png",
            undernoseOptionTab: "sprites/undernose/normal.png",
            noseOptionTab: "sprites/nose/oval.png",
            eyewearOptionTab: "sprites/none.png",
            accessoryOptionTab: "sprites/none.png",
            tattooOptionTab: "sprites/none.png",
            extrasOptionTab: "sprites/none.png",
            opts: {
                // Whether URL/state was converted from the pre base-36 form.
                isLegacy: false,
            },
            hairOptionTab: "sprites/none.png",
            hatOptionTab: "sprites/none.png",
        },

        stateScheme: [
            {name: "tab", fmt: objectListFmt(optionTabList)},
            {name: "colorOptionTab", fmt: stringListFmt(gopherColorsList)},
            {name: "eyesOptionTab", fmt: stringListFmt(gopherEyesList)},
            {name: "poseOptionTab", fmt: stringListFmt(gopherPoseList)},
            {name: "torsoOptionTab", fmt: stringListFmt(gopherTorsoList)},
            {name: "earsOptionTab", fmt: stringListFmt(gopherEarsList)},
            {name: "teethOptionTab", fmt: stringListFmt(gopherTeethList)},
            {name: "mouthOptionTab", fmt: stringListFmt(gopherMouthList)},
            {name: "undernoseOptionTab", fmt: stringListFmt(gopherUndernoseList)},
            {name: "noseOptionTab", fmt: stringListFmt(gopherNoseList)},
            {name: "eyewearOptionTab", fmt: stringListFmt(gopherEyewearList)},
            {name: "accessoryOptionTab", fmt: stringListFmt(gopherAccessoryList)},
            {name: "tattooOptionTab", fmt: stringListFmt(gopherTattooList)},
            {name: "extrasOptionTab", fmt: stringListFmt(gopherExtrasList)},
            {name: "opts", fmt: optsFmt},
            {name: "hairOptionTab", fmt: stringListFmt(gopherHairList)},
            {name: "hatOptionTab", fmt: stringListFmt(gopherHatList)},
        ],
    };

    function stateString(delta): string {
        delta = delta || {};
        let parts = [];
        for (let i in app.stateScheme) {
            let desc = app.stateScheme[i];
            let val = delta[desc.name] || app.state[desc.name];
            parts.push(desc.fmt.enc(val));
        }
        return parts.join("");
    }

    // Try loading state from the state argument or,
    // if not explicitely passed, "state" GET param.
    function loadState(state: string = "") {
        state = state || app.query.get("state");
        if (!state) {
            return;
        }

        let parts = state.match(/.{2}/g);
        if (parts.length < app.stateScheme.length) {
            console.warn("legacy state param: have %d chunks, want %d",
                parts.length, app.stateScheme.length);
        } else if (parts.length > app.stateScheme.length) {
            console.error("corrupted state param: have %d chunks, want %d",
                parts.length, app.stateScheme.length);
            return;
        }

        // Old permalinks detection.
        if (parts.length == app.legacyStateSchemeChunks) {
            app.state.opts.isLegacy = true;

            // Hex radix was used before.
            // Fix old permalinks by re-encoding base-16 values
            // into base-36 values.
            for (let i in parts) {
                let hexValue = parseInt(parts[i], 16);
                parts[i] = hexValue.toString(36);
            }
        }

        // This could initialize state only partially in case of
        // legacy state strings, where some fields are missing.
        for (let i in parts) {
            let desc = app.stateScheme[i];
            app.state[desc.name] = desc.fmt.dec(parts[i]);
        }
    }

    function initOptionTabSelector() {
        let tabInfo = app.state.tab;
        let tabSelector = document.getElementById("tab-selector");

        let parts = [];
        let tabSelection = app.state.tabSelection;
        for (let i in tabSelection) {
            let label = tabSelection[i].label;
            if (tabInfo == tabSelection[i]) {
                parts.push(`<tr><td><button class='tab-selected' onclick='App.changeTab(${i})'>${label}</button></td></tr>`);
            } else {
                parts.push(`<tr><td><button onclick='App.changeTab(${i})'>${label}</button></td></tr>`);
            }
        }
        tabSelector.innerHTML = parts.join("");
    }

    function initOptionTab() {
        let tabInfo = app.state.tab;
        let optionTab = document.getElementById(tabInfo.key);

        optionTab.style.display = "block";

        let parts = [];
        let tabKey = app.state.tab.key;
        for (let i in tabInfo.options) {
            let imgURL = spriteURL(tabInfo.options[i]);
            let delta = {};
            delta[tabKey] = tabInfo.options[i];
            let updatedState = stateString(delta);
            if (app.state[tabKey] == tabInfo.options[i]) {
                parts.push(`<button class='option-link' onclick='App.updateWithoutReload("${updatedState}")'><img class='option-selected' src='${imgURL}'></button>`);
            } else {
                parts.push(`<button class='option-link' onclick='App.updateWithoutReload("${updatedState}")'><img src='${imgURL}'></button>`);
            }
        }
        optionTab.innerHTML = parts.join("");
    }

    function spriteURL(url: string) {
        if (url.endsWith(".png")) {
            return url;
        }
        let parts = app.state.colorOptionTab.split("/");
        let suffix = parts[parts.length-1];
        return url + "/" + suffix;
    }

    function drawImages(images) {
        let canvas = <HTMLCanvasElement> document.getElementById("gopher");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i in images) {
            let img = images[i];
            ctx.drawImage(img, 0, 0);
        }
    }

    function renderGopher() {
        let drawOrder = [
            "earsOptionTab",
            "torsoOptionTab",
            "hairOptionTab",
            "eyesOptionTab",
            "extrasOptionTab",
            "mouthOptionTab",
            "teethOptionTab",
            "undernoseOptionTab",
            "noseOptionTab",
            "tattooOptionTab",
            "hatOptionTab",
            "accessoryOptionTab",
            "eyewearOptionTab",
            "poseOptionTab",
        ];

        let images = [];
        let toLoad = drawOrder.length; // For sync.
        for (let i in drawOrder) {
            let tabKey = drawOrder[i];
            let imgURL = spriteURL(app.state[tabKey]);
            if (!imgURL) {
                toLoad--;
                continue;
            }
            let img = new Image();
            images.push(img); // Order is preserved.
            img.src = imgURL;
            img.onload = function() {
                toLoad--;
                if (toLoad == 0) {
                    drawImages(images);
                }
            };
        }
    }

    function initDownload() {
        let link = <HTMLAnchorElement> document.getElementById("download");

        link.onclick = function() {
            let canvas = <HTMLCanvasElement> document.getElementById("gopher");
            link.href = canvas.toDataURL("image/png;base64");
        };
    }

    function copyToClipboard(text: string) {
        let el = <HTMLTextAreaElement> document.createElement("textarea"); // Temp container
        el.value = text;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        try {
            let ok = document.execCommand("copy");
            console.debug("copy to clipboard:", ok);
        } catch (e) {
            console.error("clipboard insertion failed", e);
        }
        document.body.removeChild(el);
    }

    function initShareButton() {
        let share = document.getElementById("share");
        share.onclick = function() {
            let url = "https://quasilyte.dev/gopherkon/?state=" + stateString({});
            copyToClipboard(url);
        };
    }

    function getOptionsList(key: string) {
        for (let tab of app.state.tabSelection) {
            if (tab.key == key) {
                return tab;
            }
        }
        return null;
    }

    function rand(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function randBool(v = 0.5): boolean {
        return Math.random() >= v;
    }

    function randomizedState(): string {
        // preferZero enumerate tabs that should have at least 50%
        // to have zero value against all other options.
        let preferZero = {
            "accessoryOptionTab": 0.15,
            "eyewearOptionTab": 0.5,
            "extrasOptionTab": 0.25,
            "hairOptionTab": 0.25,
            "tattooOptionTab": 0.5,
            "hatOptionTab": 0.4,
        };

        // nonZero enumerates tabs that should not have 0 index.
        let nonZero = new Set([
            "poseOptionTab",
            "torsoOptionTab",
            "earsOptionTab",
            "teethOptionTab",
        ]);

        let delta = {};
        for (let i in app.stateScheme) {
            let desc = app.stateScheme[i];
            let tab = getOptionsList(desc.name);
            if (tab === null) {
                continue;
            }
            let minIndex = nonZero.has(desc.name) ? 1 : 0;
            let index = rand(minIndex, tab.options.length);
            if (preferZero[desc.name] && randBool(preferZero[desc.name])) {
                index = 0;
            }
            let value = desc.fmt.dec(encodeWord(index));
            delta[desc.name] = value;
        }
        return stateString(delta);
    }

    function initShuffleButton() {
        let shuffle = <HTMLAnchorElement> document.getElementById("shuffle");
        shuffle.href = "?state=" + randomizedState();
    }

    export function changeTab(tabIndex) {
        let tabSelection = app.state.tabSelection;
        let href = "?state=" + stateString({tab: tabSelection[tabIndex]});
        window.location.href = href;
    }

    export function updateWithoutReload(state) {
        loadState(state);
        initOptionTab();
        renderGopher();

        // Rewrite URL query, if possible.
        if (window.history.replaceState) {
            let url = window.location.protocol + "//" + window.location.host + window.location.pathname;
            url = url + "?state=" + state;
            window.history.replaceState({path: url}, "", url);
        }
    }

    export function main() {
        loadState();
        console.debug("decoded state:", app.state);
        console.debug("state string:", stateString({}));
        initOptionTabSelector();
        initOptionTab();
        renderGopher();
        initDownload();
        initShareButton();
        initShuffleButton();
    }
}

window.onload = function() { 
    App.main();
};
