const MVCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col transition delay-20 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 bg-orange-400 text-white w-full md:w-1/2 rounded-lg shadow-md h-auto  gap-2 justify-center overflow-auto p-4">
      <h1 className=" text-lg md:text-xl font-bold text-center">{title}</h1>
      <p className="text-sm  md:text-lg p-7">{children}</p>
    </div>
  );
};

export default MVCard;
