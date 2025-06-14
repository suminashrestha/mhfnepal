import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterLinks from "../../components/FooterLinks";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <>
      <div className="w-screen p-10 mt-20 flex flex-col lg:flex-row justify-center items-center gap-6 bg-stone-100">
        <div className="flex md:flex-col w-auto lg:w-1/2  h-auto justify-between">
          <div className="flex-col gap-3 h-[50%] p-10 md:text-lg ">
            <h2 className="text-4xl md:text-6xl font-bold text-blue-950">
              Contact Us
            </h2>
            <p>Email, call or complete the form to send us your inquiry. </p>
            <FooterLinks title="mahabirhfoundation@gmail.com" type="mailto">
              <MdEmail />
            </FooterLinks>

            <FooterLinks title="9802046556" type="tel">
              <FaPhoneAlt />
            </FooterLinks>
          </div>
          <div className="hidden lg:flex flex-col md:flex-row md:w-[100%] md:h-[50%] gap-6 items- p-10 justify-between ">
            <div className="w-[30%] flex flex-col gap-3 items-center">
              <h3 className="text-xl font-bold text-blue-950">
                Customer Support
              </h3>
              <p className="text-center text-lg">
                Our support team is vailable around the clock to address any
                concern or queries you may have
              </p>
            </div>

            <div className="w-[30%] flex flex-col gap-3 items-center ">
              <h3 className="text-xl font-bold text-blue-950">Feedback</h3>
              <p className="text-center text-lg">
                Our support team is vailable around the clock to address any
                concern or queries you may have
              </p>
            </div>

            <div className="w-[30%] flex flex-col gap-2 items-center">
              <h3 className="text-xl font-bold text-blue-950">
                Media Inquiries
              </h3>
              <p className="text-center text-lg">
                Our support team is vailable around the clock to address any
                concern or queries you may have
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full md:w-1/2 justify-center items-center p-4 md:p-0">
          <form className="flex flex-col p-3 md:p-5 lg:p-10 gap-6 w-full lg:w-[80%] h-auto rounded-lg shadow-md text-zinc-600 bg-white bg-center ">
            <div>
              <h3 className=" text-2xl md:text-4xl lg:text-5xl font-bold text-blue-950">
                Get in touch
              </h3>
              <p className="text-sm lg:text-lg">You can reach us anytime</p>
            </div>
            <input
              id="name"
              className="p-3 text-sm text-black rounded-xl bg-gray-100 focus:outline-none"
              placeholder="Full Name"
              type="text"
              autoComplete="off"
            />
            <input
              id="email"
              className="p-3 text-sm text-black rounded-xl bg-gray-100 focus:outline-none"
              placeholder="Email"
              type="text"
            />
            <input
              id="phone"
              className="p-3 text-sm text-black rounded-xl bg-gray-100 focus:outline-none"
              placeholder="Phone"
              type="text"
            />
            <div className="flex flex-col">
              <label className="p-2  text-sm font-semibold">Your message</label>
              <textarea className="p-3 text-sm text-black rounded-xl bg-gray-100 focus:outline-none "></textarea>
            </div>
            <Button className="bg-blue-950 hover:bg-blue-900 cursor-pointer ease-in duration-200">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
