const PhotoCard = ({ image }: { image: string }) => {
  return (
    <div className="w-full h-auto md:w-[40%] overflow-hidden rounded-lg">
      <img
        src={image}
        alt="img"
        className="h-auto w-auto object-cover transition-transform duration-300 hover:scale-110 hover:shadow-md"
      />
    </div>
  );
};

export default PhotoCard;
