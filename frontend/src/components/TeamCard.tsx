

const TeamCard = ({name, image, position}: {name: string, image: string, position:string}) => {
  return (
    <div className="w-auto md:w-[250px] h-auto shadow-md rounded-md bg-stone-100 flex flex-col gap-5 items-center justify-center p-8 transition delay-20 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
        <img src={image} alt={name} className="rounded-full h-[100px] w-[100px]"/>
        <h3 className="text-sm font-bold">{name}</h3>
        <h4 className="text-xs text-blue-900 font-semibold text-center">{position}</h4>
    </div>
  )
}

export default TeamCard