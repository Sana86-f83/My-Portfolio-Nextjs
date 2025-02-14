import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-text">
        Copyright <span className="name-title"> &copy; </span> 2024 By{" "}
        <span className="name-title "> Sana Faisal </span> | All Rights Reserved{" "}
        <Link href="/" className="arrowicon">
          <FaArrowUp />
        </Link>
      </div>
      <div className="footer-main2">
        <div className="footer-text2">
          <span className="name-title 2"> Sana Faisal </span> | All Rights
          Reserved{" "}
          <Link href="/" className="arrowicon2">
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
