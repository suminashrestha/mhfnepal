const PhotoCard = ({ image, caption }: { image: string; caption: string }) => {
  return (
    <div className="flex flex-col h-full md:h-auto w-full p-4 md:p-8 gap-5 shadow-md items-center hover:shadow-xl transition-shadow duration-300">
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt="img"
          className="h-auto w-full object-cover transition-transform duration-300 hover:scale-110 hover:shadow-md"
        />
      </div>
      <p className="text-sm font-bold md:text-sm">{caption}</p>
    </div>
  );
};

export default PhotoCard;
