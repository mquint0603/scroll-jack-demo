/** @jsxImportSource @emotion/react */
import { useRef, useLayoutEffect } from "react";
import cx from "classnames";

import ScrollBackgrounds from "../scroll-backgrounds/ScrollBackgrounds";

import animate from "./animation";
import styles from "./styles";

function Scene({ num, className, children }) {
  return (
    <section className={cx("scene", className)} id={`scene-${num}`}>
      <div className="copy-wrapper">
        <div className="copy-container">
          {children}
        </div>
      </div>
    </section>
  );
}

function Story() {
  const timeLine = useRef(null);

  const playRefs = useRef({
    bg_1_2: useRef(),
    bg_1_3: useRef(),
    bg_3_1: useRef(),
    bg_3_2: useRef(),
    bg_3_3: useRef(),
    bg_6_1: useRef(),
  }).current;

  useLayoutEffect(() => {
    timeLine.current = animate(playRefs);
  }, [playRefs]);

  return (
    <div className="animation-wrapper" css={styles}>
      <ScrollBackgrounds playRefs={playRefs} />

      {/* Scene 1 - still image, science-y loop, couple in bed video */}
      <Scene num={1}>
        <div className="copy-block -start-opaque scene-1-1 -center-t-m">
          <p className="display-lg mb-0">8 out of 10 couples</p>
          <p className="headline-md">
            say one of them sleeps <br className="d-none d-lg-block" />
            too hot or too cold<sup>**</sup>
          </p>
        </div>
        <div className="copy-block scene-1-2 -center">
          <p className="display-sm text-center">
            Science tells us regulating your sleep temperature may lead to
            higher quality sleep
          </p>
        </div>
        <div className="copy-block scene-1-3">
          <p className="headline-md">
            The Climate360™ smart bed actively cools or warms each side, so it’s
            just right for both of you
          </p>
        </div>
   

      {/* Scene 2 - footwarming video */}

        <div className="copy-block scene-2-1 -center-t-m">
          <p className="display-sm">Preparing for sleep</p>
        </div>
        <div className="copy-block scene-2-2 -center-t-m">
          <p className="headline-md">
            Gently warms your feet to help you fall asleep faster
          </p>
        </div>
      

      {/* Scene 3 - articulating bed video, couple video */}
    
        <div className="copy-block scene-3-1">
          <p className="headline-md">
            Individualize your sleeping temperature &mdash; so you're not too
            hot or too cold
          </p>
        </div>
        <div className="copy-block scene-3-2">
          <p className="headline-md">
            Adjust each side to your ideal firmness, comfort and support
          </p>
        </div>
        <div className="copy-block scene-3-3">
          <p className="headline-md">
            With endless head and foot positions, ultimate comfort is in your
            control
          </p>
        </div>
     

      {/* Scene 4 - scroll controlled video */}

        <div className="copy-block scene-4-1 -right">
          <p className="headline-md">Designed to help keep you asleep</p>
        </div>
        <div className="copy-block scene-4-2 -right">
          <p className="headline-md">
            Actively draws heat away from your body to help keep you cool so you
            stay asleep, longer and deeper
          </p>
        </div>
        <div className="copy-block scene-4-3 -right">
          <p className="headline-md">
            Responds to you, automatically adjusting to keep you both sleeping
            effortlessly comfortable
          </p>
        </div>
  
      {/* Scene 5 - partner snore video */}

        <div className="copy-block scene-5-1 -right">
          <p className="headline-md">
            Partner Snore<sup>&trade;</sup> technology<sup>*</sup> lets you
            raise your partner's head to help alleviate snoring
          </p>
        </div>
        <div className="copy-block scene-5-2 -right">
          <p className="display-lg">Sleep your best</p>
        </div>
     

      {/* Scene 6 - phone and 28 minutes */}
     
        <div className="copy-block scene-6-1">
          <p className="headline-md">
            See your sleep quality with personalized insights to help you
            improve your sleep over time.
          </p>
        </div>
        <div className="copy-block scene-6-2">
          <p className="headline-md">
            Science proves quality sleep is vital to your mental, emotional and
            physical health.
          </p>
        </div>
      </Scene>
    </div>
  );
}

export default Story;
