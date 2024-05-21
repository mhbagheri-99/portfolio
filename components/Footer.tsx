import { FaDownload, FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        eslint-disable-next-line @next/next/no-img-element
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Do you prefer seeing <span className="text-purple">my CV</span> in PDF format?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get the latest version here. Last update is at the bottom of each page.
        </p>
        <a href="https://www.dropbox.com/scl/fi/cw7pugxzb1iuurzc1sdhi/CV_Bagheri.pdf?rlkey=sr3szzu7wi9olnjq2gbemsbyq&st=xbe9vfqf&dl=0">
          <MagicButton
            title="Download CV"
            icon={<FaDownload />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mohammad H. Bagheri
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.href}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
