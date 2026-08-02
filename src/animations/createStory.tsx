

import gsap from "gsap"
import introScene from "./scenes/intro.scene"
import { STORY_LABELS } from "../utils/labels";
import OpeningScene from "./scenes/darkRoom.scene";
import hallScene from "./scenes/hall.scene";


export type StoryController = {
  start: () => void;
  resume: () => void;
  pause: () => void;
  restart: () => void;
};

export function createStory(): StoryController {
    const master = gsap.timeline({
        // paused: true
    })

    

       master.addLabel(STORY_LABELS.INTRO)
       .add(introScene())

        .addPause("lightClicked")


        .addLabel(STORY_LABELS.OPENING)
       .add(OpeningScene())

         .addPause("doorClicked")

        .addLabel(STORY_LABELS.HALL)
       .add(hallScene())



       // This is the controller of the story. 
         return {

        start() {
            master.play(0);
        },

        resume() {
            master.play();
        },

        pause() {
            master.pause();
        },

        restart() {
            master.restart();
        }

    };

}
