import { useMotionValue, useViewportScroll } from 'framer-motion'

function usePage () {
  const motionValue = useMotionValue(0)
  const { scrollY } = useViewportScroll()

  scrollY.onChange((scrollYValue) => {
    motionValue.set(scrollYValue / window.screen.availHeight)
  })

  return motionValue
}

export default usePage
