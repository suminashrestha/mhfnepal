const ContactUs = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64 my-2">
      {/* mobile */}
      <div className="md:hidden">mobile</div>
      {/* desktop */}
      <div className="hidden md:flex">
        <div className="">
          <img src="\public\media\contactUs.jpg" alt="ContactUs" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
