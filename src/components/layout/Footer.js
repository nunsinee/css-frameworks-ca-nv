import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import ContainerStyles from "./ContainerStyles";
import FooterStyles from "./footerLayout/FooterStyles";

const Footer = () => (
	<footer>
		<ContainerStyles>
			<FooterStyles>
				<div className="footer-grid">
					<div className="footer-icons">
						<FaYoutube />
						<FaVimeoV />
					</div>
					<div className="footer-email">
						<div>hello@yay.com</div>
					</div>
					<div className="footer-copyright">
						<div>Copyright 2020</div>
					</div>
				</div>
			</FooterStyles>
		</ContainerStyles>
	</footer>
);

export default Footer;
