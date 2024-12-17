import logo from "../assets/AshishLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
  <div className="flex flex-shrink-0 items-center"> 
    <img className="mx-2 w-16 h-auto" src={logo} alt="logo" />
  </div>
  
  <div className="flex items-center space-x-4">
    <a href="https://www.linkedin.com/in/ashish-kumar-805328192/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="hover:text-blue-600" />
    </a>
    <a href="https://github.com/krashishparker" target="_blank" rel="noopener noreferrer">
      <FaGithub className="hover:text-blue-600" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="hover:text-pink-600" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaSquareXTwitter className="hover:text-black" />
    </a>
  </div>
</nav>
}

export default Navbar
