import { motion } from 'motion/react'

const ImageAnimationVertical = ({image, className}: {image:string,className: string}) => {
   return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}             // Start off-screen to the left
      whileInView={{ y: 0, opacity: 1 }}            // Animate to original position
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}        // Trigger once when 20% visible
      className="h-full w-full"
    >
      <img src={image} alt="" className={className}/>
    </motion.div>
   )
}

export default ImageAnimationVertical