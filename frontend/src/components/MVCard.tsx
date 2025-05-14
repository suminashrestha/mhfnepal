const MVCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col bg-stone-100 w-[90%] md:w-[45%] md:h-[400px] rounded-lg shadow-md justify-center h-[300px] p-4 gap-5 overflow-auto">
      <h1 className=" text-4xl  font-bold p-2 ">{title}</h1>
      <p className="text-xl/loose  ">{children}</p>
    </div>
  );
};

export default MVCard;
