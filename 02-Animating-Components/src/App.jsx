import {motion} from 'motion/react'

const App = () => {
  return (
    <div>

      <motion.img animate={{
        x:1000,
        rotate:360
      }}

      transition={{
        duration:3,
        delay:1,
        repeat:Infinity,
        ease:'anticipate'
      }}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7wo98PMRqliYo0P1AMwqSvDRyuUmd6Q_fQ&s" alt="" />


      <motion.div className="box"
      initial={{x:0}}

      animate={{x:1000,
        rotate:360
      }}

      transition={{duration:3,
        delay:1,
        repeat:Infinity,
        ease: 'anticipate'
      }}>
       
      </motion.div>

    </div>
  )
}

export default App