import {motion} from "motion/react"
const ImageAnimationHorizontal = ({image, className}: {image: string, className?: string}) => {
  return (
    <motion.div
      initial={{ scaleX: 0.1, opacity: 0 }}             
      whileInView={{ scaleX: 1, opacity: 1, transformOrigin: "left" }}            
      transition={{ duration: 0.7, ease: "easeOut"}}
      viewport={{  once: true, amount: 0.3 }}        
      className="h-full w-full"
    >
      <img src={image} alt="" className={className}/>
    </motion.div>
  )
}

export default ImageAnimationHorizontal