import './Footer.css';
import instagramIcon from '../../assets/icons/instagram-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import emailIcon from '../../assets/icons/email-icon.svg';

export default function Footer() {
  return (
    <div id="footer-container">
      <div id="icons-container">
        <img src={instagramIcon} alt="Instagram" className="clickable-icon" />
        <img src={linkedinIcon} alt="Linked In" className="clickable-icon" />
        <img src={emailIcon} alt="Email" className="clickable-icon" />
      </div>
      <div>2026 IgnitionHacks</div>
    </div>
  );
}
