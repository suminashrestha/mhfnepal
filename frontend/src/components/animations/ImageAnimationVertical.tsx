import { motion } from 'motion/react'

const ImageAnimationVertical = ({image, className}: {image:string,className?: string}) => {
   return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}           
      whileInView={{ y: 0, opacity: 1 }}            
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}       
      className="h-full w-screen"
    >
      <img src={image} alt="" className={className}/>
    </motion.div>
   )
}

export default ImageAnimationVertical