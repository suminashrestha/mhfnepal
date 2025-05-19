
import { Button } from './ui/button'

const BlogCard = ({image, title, description }: {
    image: string,
    title: string,
    description: string,
}) => {
  return (
    <div className=' flex flex-col h-[400px] md:h-[500px] w-full p-4 md:p-8 gap-5 shadow-md items-center'>
      <img src={image} alt="img" className='h-1/2 w-full object-cover' />
      <h1 className='md:text-lg font-bold text-left '>{title}</h1>
      <p className='text-xs md:text-sm'>
      {description.slice(0,100).concat(".....")}
      </p>
      <Button className='w-1/2 '>Read more...</Button>
    </div>
  )
}

export default BlogCard