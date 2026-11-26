// Home splash length: the full version on someone's very first visit, then a short one
// (about the same as the page-to-page splash) on every visit after that.
//
// RETURNING_SCRIPT runs inline before the page paints and flags returning visitors with
// <html data-returning>, so CSS (hero text delays, wipe speed) and JS read the same answer
// from the first frame. The splash records the visit in localStorage once it has played.
// (Plain module, not "use client", so the server page can inline the script string.)

export const SEEN_KEY = "miru.seen";

// the home splash's one log line: one of these, picked at random before paint (data-phrase)
export const SIDE_TASKS = [
    "building a clamming gun from pvc pipes",
    "falling in the mud with a home depot bucket",
    "running 10 miles downhill",
    "reading haikyuu in the dorm closet",
    "baking clodsire choco milk buns",
    "painting wooper on chalk brushes",
    "browsing watercolor lithographs",
    "bartering in a flea market for a hotel california cd",
    "talking to scammers on Facebook",
    "serenading the neighboring car at the stop light",
    "drinking a pint of in-n-out branded milk",
];

// Keep in sync with the --sp-* variables in redesign.css (the CSS does the animating;
// these numbers are for the JS that has to line up with it).
export const SPLASH = {
    //          wipe starts / gone | glyph pop gap | flip start / gap / noise | line typing
    first:     { exit: 800, done: 1300, glyphGap: 30, flipAt: 260, flipGap: 32, noise: 95, type: 600 },
    returning: { exit: 330, done: 680,  glyphGap: 12, flipAt: 100, flipGap: 14, noise: 50, type: 280 },
};

export const isReturning = () =>
    typeof document !== "undefined" && document.documentElement.hasAttribute("data-returning");

const isLiteDoc = () => typeof document !== "undefined" && document.documentElement.hasAttribute("data-lite");

// slow devices (see perf.js) also get the short splash
export const splashTiming = () => (isReturning() || isLiteDoc() ? SPLASH.returning : SPLASH.first);

// Also flags clearly weak hardware as "lite" up front (perf.js can still switch later):
// 2 or fewer CPU cores, 2GB or less memory, the user's data-saver setting, or already
// caught struggling earlier this session (perf.js).
export const RETURNING_SCRIPT =
    `try{var h=document.documentElement;` +
    `h.setAttribute("data-phrase",String(Math.floor(Math.random()*${SIDE_TASKS.length})));` +
    `if(localStorage.getItem(${JSON.stringify(SEEN_KEY)}))h.setAttribute("data-returning","");` +
    `var n=navigator,c=n.connection;` +
    `if(sessionStorage.getItem("miru.lite")||(n.hardwareConcurrency||8)<=2||(n.deviceMemory||8)<=2||(c&&c.saveData))h.setAttribute("data-lite","")` +
    `}catch(e){}`;
