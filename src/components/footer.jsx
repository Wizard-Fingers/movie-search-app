import React from 'react'
import { ImFacebook2, ImLinkedin2 } from "react-icons/im";
import {MdEmail} from 'react-icons/md'

export const Footer = () => {
    const StyleForFooterIcons = { color: "white", fontSize: "1.5rem" }
  return (
    <div
      className="fixed inset-x-0 bottom-0 bg-gray-700 hover:bg-black
                   ease-in-out duration-500 flex justify-center"
    >
      <a href="https://www.facebook.com/arthur.b.beckett/">
        <ImFacebook2
          style={StyleForFooterIcons}
          className="cursor-pointer m-4"
        />
      </a>
      <a href="https://www.linkedin.com/in/arthur-beckett-3b19b7209/">
        <ImLinkedin2
          style={StyleForFooterIcons}
          className="cursor-pointer m-4"
        />
      </a>
      <a href="art.b.beckett@gmail.com">
        <MdEmail style={StyleForFooterIcons}
          className="cursor-pointer m-4"
        />
      </a>
    </div>
  );
}
export default Footer;