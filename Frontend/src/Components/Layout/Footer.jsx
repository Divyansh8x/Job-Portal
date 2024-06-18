import { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Divyansh Singh</div>
      <div>
        <Link to={"https://x.com/Divyansh1525"} target="_blank">
          <FaTwitter />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/divyanshsingh1525/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/divyansh8x"} target="_blank">
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
