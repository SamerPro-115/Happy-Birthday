

import gsap from "gsap"
import introScene from "./scenes/intro.scene"
import { STORY_LABELS } from "../utils/labels";


export function createMasterTimeline() {
    const master = gsap.timeline({
        // paused: true
    });


       master.addLabel(STORY_LABELS.INTRO)
       .add(introScene());

       master.addPause()

       return master
}
