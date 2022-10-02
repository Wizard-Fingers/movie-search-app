import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ImFacebook2, ImLinkedin2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export const Footer = ({ leftModelOpen }) => {
	const StyleForFooterIcons = { color: "white", fontSize: "1.5rem" };

	const [styleForBG, setStyleForBG] = useState({
		backgroundColor: "#1a1a1a",
	});

	useEffect(() => {
		if (leftModelOpen) {
			setStyleForBG({ backgroundColor: "#99999" });
		} else {
			setStyleForBG({ backgroundColor: "#1a1a1a" });
		}
	}, [leftModelOpen]);

	return (
		<div
			className="relative inset-x-0 bottom-0  bg-gray-700 hover:bg-black
                   ease-in-out duration-500 flex justify-center"
			style={styleForBG}
		>
			<a href="https://www.facebook.com/arthur.b.beckett/">
				<ImFacebook2
					style={StyleForFooterIcons}
					className="cursor-pointer m-4 hover:scale-110 duration-300"
				/>
			</a>
			<a href="https://www.linkedin.com/in/arthur-beckett-3b19b7209/">
				<ImLinkedin2
					style={StyleForFooterIcons}
					className="cursor-pointer m-4 hover:scale-110 duration-300"
				/>
			</a>
			<a href="art.b.beckett@gmail.com">
				<MdEmail
					style={StyleForFooterIcons}
					className="cursor-pointer m-4 hover:scale-110 duration-300"
				/>
			</a>
		</div>
	);
};
export default Footer;
