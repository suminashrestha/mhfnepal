import { motion } from 'motion/react'

const HeadingAnimation = ({children}: {children: string}) => {
  return (
    <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{delay: 0.2, ease:"easeIn"}}
            className="text-3xl md:text-5xl font-extralight font-bitter text-center"
          >
            {children}
          </motion.h1>
  )
}

export default HeadingAnimation