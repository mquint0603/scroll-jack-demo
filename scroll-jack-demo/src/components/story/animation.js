import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Get element by id
 * @param {string} id - the id of the element to find
 * @returns {HTMLElement|undefined}
 */
export function gebi(id) {
  return document.getElementById(id);
}

/**
 * Returns selected elements as an array
 * If two arguments, the first one is assumed to be the node to query.
 * @return {HTMLElement[]}
 */
export function qsa(...args) {
  const node = args.length === 2 ? args[0] : document;
  const selector = args.length === 2 ? args[1] : args[0];
  return Array.from(node.querySelectorAll(selector));
}

function createTimeline(trigger, id) {
  return gsap.timeline({
    scrollTrigger: {
      trigger,
      scrub: 1,
      ease: "none",
      start: "top top",
      end: "bottom bottom",
      id,
    },
  });
}
// function playOnEnter(ref, timeline) {
//   const st = ScrollTrigger.getById(timeline);
//   if (st.direction > 0) {
//     ref?.current?.play();
//   }
// }
// function playOnReEnter(ref, timeline) {
//   const st = ScrollTrigger.getById(timeline);
//   if (st.direction < 0) {
//     ref?.current?.play();
//   }
// }
const textEnter = { opacity: 1, y: -40, duration: 1 };
const textExit = { opacity: 0, y: -80, duration: 2 };

function animate() {
  gsap.registerPlugin(ScrollTrigger);

  // reverts inline styles added by gsap on resize
  // ScrollTrigger.saveStyles(qsa(".copy-block"));

  /** SCENE 1 Core temp */
  const tl1 = createTimeline(gebi("scene-1"), "tl1");
  tl1
    .addLabel("Scene 1")
    .to(".scene-1-1", textExit, "+=2")
    .to(".bg-1-1", { opacity: 0, duration: 2 }, "<+=1")
    .to(".scene-1-2", textEnter, "<+=1")
    .to(".scene-1-2", textExit, "+=2")
    .to(".bg-1-2", { opacity: 0, duration: 1 }, "<")
    .to(".scene-1-3", textEnter)
    .to(".scene-1-3", textExit, "+=2")

    /** SCENE 2 Foot warming */

    // .addLabel("Scene 2")
    .to(".bg-1-3", { opacity: 0, duration: 2 }, "+=1")
    .to(".scene-2-1", textEnter, "<+=1")
    .to(".scene-2-1", textExit, "+=2")
    .to(".scene-2-2", textEnter)
    .to(".scene-2-2", textExit, "+=2")

    /** SCENE 3 Microclimate, adjustability */

    // .addLabel("Scene 3")
    .to(".bg-2", { opacity: 0, duration: 2 })
    .to(".scene-3-1", textEnter, "<+=1")
    .to(".scene-3-1", textExit, "+=2")
    .to(".bg-3-1", { opacity: 0, duration: 2 }, "<+=1")
    .to(".scene-3-2", textEnter, "<+=1")
    .to(".scene-3-2", textExit, "+=2")
    .to(".bg-3-2", { opacity: 0, duration: 2 }, "<+=1")
    .to(".scene-3-3", textEnter, "<+=1")
    .to(".scene-3-3", textExit, "+=2")

    /** SCENE 4 Keeps you asleep */

    // .addLabel("Scene 4")
    .to(".bg-3-3", { opacity: 0, duration: 1.5 })
    .to(".scene-4-1", textEnter, "<+=1")
    .to(".scene-4-1", textExit, "+=2")
    .to(".scene-4-2", textEnter)
    .to(".scene-4-2", textExit, "+=2")
    .to(".scene-4-3", textEnter)
    .to(".scene-4-3", textExit, "+=2")

    /** SCENE 5 Parner snore */

    .addLabel("Scene 5")
    .to(".bg-4", { opacity: 0, duration: 2 }, "<=+1")
    .to(".scene-5-1", textEnter, "<+=1")
    .to(".scene-5-1", textExit, "+=2")
    .to(".scene-5-2", textEnter)
    .to(".scene-5-2", textExit, "+=2")

    /** SCENE 6 SleepIQ phones, 28 minutes */

    // .addLabel("Scene 6")
    .to(".bg-5", { opacity: 0, duration: 2 }, "<=+1")
    .to(".scene-6-1", textEnter, "<+=1")
    .to(".scene-6-1", textExit, "+=2")
    .to(".bg-6-1", { opacity: 0, duration: 2 }, "<+=1")
    .to(".scene-6-2", textEnter, "<+=1");

  return tl1;
}

export default animate;
