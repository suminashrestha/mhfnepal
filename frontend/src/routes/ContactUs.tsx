import Button from "../components/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterLinks from "../components/FooterLinks";

const ContactUs = () => {
  return (
    <>
      <div className="w-[100vw] h-[90vh] mt-20 flex justify-center items-center gap-6">
        <div className="flex flex-col w-[50%]  h-[80%] justify-between ">
          <div className="flex flex-col gap-3 h-[50%] p-10">
            <h2 className="text-6xl font-bold text-blue-950">Contact Us</h2>
            <p className=" text-2xl ">
              Email, call or complete the form to send us your inquiry.{" "}
            </p>
            <FooterLinks title="mahabirhfoundation@gmail.com" type="mailto">
              <MdEmail />
            </FooterLinks>

            <FooterLinks title="9802046556" type="tel">
              <FaPhoneAlt />
            </FooterLinks>
          </div>
          <div className="flex flex-col md:flex-row md:w-[100%] md:h-[50%] gap-6 items- p-10 justify-between ">
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

        <div className="flex h-[90vh] w-[50%] justify-center items-center">
          <form className="flex flex-col h-[80%] p-10 gap-6 w-[80%] rounded-lg shadow-md text-zinc-600">
            <div>
              <h3 className="text-5xl font-bold text-blue-950">Get in touch</h3>
              <p className="text-l">You can reach us anytime</p>
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
            <Button className="text-white font-bold px-3 py-2 bg-grey-500 ">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
