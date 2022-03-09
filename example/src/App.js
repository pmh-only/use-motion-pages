import logo from './logo.svg'
import usePage from 'use-motion-page'
import { motion, useTransform } from 'framer-motion';

const PageOffset =
  () => <div style={{ height: '100vh' }}/>

function App() {
  const page = usePage()
  
  const position = 'fixed'
  const rotate = useTransform(page, [0.5, 1], ['0deg', '180deg'])
  const backgroundColor = useTransform(page, [0, 1], ['#212121', '#fafafa'])

  return (
    <motion.div style={{ backgroundColor }}>
      <motion.img
        style={{ rotate, position }}
        src={logo} />
      

      <PageOffset />
      <PageOffset />
    </motion.div>
  )
}

export default App;
