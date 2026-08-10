

import gsap from "gsap"
import introScene from "./scenes/intro.scene"
import { STORY_LABELS } from "../utils/labels";
import OpeningScene from "./scenes/darkRoom.scene";
import hallScene from "./scenes/hall.scene";
import backToDarkRoomScene from "./scenes/backToDarkRoom";
import celebrationScene from "./scenes/celebration.scene";
import disco from "./disco";


export type StoryController = {
  start: () => void;
  resume: () => void;
  pause: () => void;
  restart: () => void;
};

export function createStory(
    // objectDropAudioref: React.RefObject<HTMLAudioElement>,
    HBAudioref: React.RefObject<HTMLAudioElement>
): StoryController {
    const master = gsap.timeline({
        // paused: true
    })

    

          master.addLabel(STORY_LABELS.INTRO)
          .add(introScene())

          .addPause("lightClicked")

           .addLabel(STORY_LABELS.OPENING)
          .add(OpeningScene())

            .addPause("roomDoorClicked")

           .addLabel(STORY_LABELS.HALL)
          .add(hallScene())

          .addPause("hallDoorClicked")

            .addLabel(STORY_LABELS.BACK_TO_DARK_ROOM)
         .add(backToDarkRoomScene())

         .addPause("giftClicked")
       
          .addLabel(STORY_LABELS.CELEBRATION)
       .add(celebrationScene(HBAudioref))

       .add(disco())



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
