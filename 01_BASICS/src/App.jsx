import { motion } from "motion/react"

const App = () => {
  return (
    <div>

      <motion.div className='box' animate={{
        x:1000,
        rotate:360
      }}
      transition={{
        duration:3,
        delay:1
      }}>
        Hello Myself Rudranil Mallick
      </motion.div>

    </div>
  )
}

export default App
