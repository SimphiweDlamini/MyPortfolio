import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://res.cloudinary.com/diphvelza/image/upload/v1711120177/WhatsApp_Image_2023-08-21_at_14.26.08_ie9fxr.jpg"
      ></img>
      <div className="w-full h-screen absolute top-0 bg-white/60 ">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Simphiwe Dlamini
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            Passionate about
            <TypeAnimation
              sequence={[
                "Swimming",
                2000,
                "Gaming",
                2000,
                "Technology",
                2000,
                "Entertainment",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://x.com/Spidermand68">
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100030035115842">
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/swazi_spider/">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/simphiwe-dlamini-b061b6161/">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
