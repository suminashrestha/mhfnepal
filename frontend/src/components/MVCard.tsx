

const MVCard = ({ title, children}: {title:string, children:React.ReactNode}) => {
  return (
    <div className="flex flex-col bg-orange-300 w-[90%] md:w-[45%] rounded-lg shadow-md p-2 h-[400px] p-3">
        <h1 className="text-center">{title}</h1>
        <p>{children}</p>
     </div>
  )
}

export default MVCard