import './Navbar.css';
import logo from '../../assets/illustrations/nav/logo.png';
import loginBtn from '../../assets/illustrations/nav/login.png';
import registrationBtn from '../../assets/illustrations/nav/registration.png';
import insta from '../../assets/illustrations/nav/insta.png';
import linkedin from '../../assets/illustrations/nav/linkedin.png';
import email from '../../assets/illustrations/nav/email.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Ignition Hacks Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <a href="#login" className="navbar-btn">
          <img src={loginBtn} alt="Login" />
        </a>
        <a href="#register" className="navbar-btn">
          <img src={registrationBtn} alt="Registration" />
        </a>
        <div className="navbar-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:contact@ignitionhacks.org">
            <img src={email} alt="Email" />
          </a>
        </div>
      </div>
    </nav>
  );
}
