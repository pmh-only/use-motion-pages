"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
function usePage() {
    const motionValue = (0, framer_motion_1.useMotionValue)(0);
    const { scrollY } = (0, framer_motion_1.useViewportScroll)();
    scrollY.onChange((scrollYValue) => {
        motionValue.set(scrollYValue / window.screen.availHeight);
    });
    return motionValue;
}
exports.default = usePage;
