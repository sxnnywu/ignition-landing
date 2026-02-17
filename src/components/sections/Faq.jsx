import './Faq.css';

import lightPinkTowel from '../../assets/illustrations/towels/light-pink-first-towel.svg';
import yellowTowel from '../../assets/illustrations/towels/yellow-second-towel.svg';
import lightBlueTowel from '../../assets/illustrations/towels/light-blue-third-towel.svg';
import darkBlueTowel from '../../assets/illustrations/towels/dark-blue-fourth-towel.svg';
import greenTowel from '../../assets/illustrations/towels/green-fifth-towel.svg';
import faqOverlay from '../../assets/illustrations/faq-overlay.svg';
import faqOverlayMobile from '../../assets/illustrations/faq-overlay-mobile.svg';

const towels = [
  { id: 1, src: lightPinkTowel, alt: 'Light pink towel', className: 'faq-towel--1', question: 'How many people on a team?' },
  { id: 2, src: yellowTowel, alt: 'Yellow towel', className: 'faq-towel--2', question: 'What if I don\u2019t have a team?' },
  { id: 3, src: lightBlueTowel, alt: 'Light blue towel', className: 'faq-towel--3', question: 'How much does it cost to attend?' },
  { id: 4, src: darkBlueTowel, alt: 'Dark blue towel', className: 'faq-towel--4', question: 'How long will the hackathon last?' },
  { id: 5, src: greenTowel, alt: 'Green towel', className: 'faq-towel--5', question: 'Who can participate?' },
];

export default function Faq() {
  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-towels">
        {towels.map((towel) => (
          <div key={towel.id} className={`faq-towel ${towel.className}`}>
            <img src={towel.src} alt={towel.alt} />
            <span className="faq-towel-text">{towel.question}</span>
          </div>
        ))}
      </div>
      <div className="faq-overlay faq-overlay--desktop">
        <img src={faqOverlay} alt="" />
      </div>
      <div className="faq-overlay faq-overlay--mobile">
        <img src={faqOverlayMobile} alt="" />
      </div>
    </section>
  );
}
