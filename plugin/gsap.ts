import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(
    Flip,
    ScrollTrigger,
    ScrollToPlugin,
    MotionPathPlugin,
    RoughEase,
    Draggable,
);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(gsap)
    nuxtApp.provide('gsap', gsap)
    nuxtApp.provide('Flip', Flip)
    nuxtApp.provide('ScrollTrigger', ScrollTrigger)
    nuxtApp.provide('ScrollToPlugin', ScrollToPlugin)
    nuxtApp.provide('MotionPathPlugin', MotionPathPlugin)
    nuxtApp.provide('RoughEase', RoughEase)
    nuxtApp.provide('Draggable', Draggable)
})