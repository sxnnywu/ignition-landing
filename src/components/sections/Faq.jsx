import './Faq.css';

import lightPinkTowel from '../../assets/illustrations/towels/light-pink-first-towel.svg';
import yellowTowel from '../../assets/illustrations/towels/yellow-second-towel.svg';
import lightBlueTowel from '../../assets/illustrations/towels/light-blue-third-towel.svg';
import darkBlueTowel from '../../assets/illustrations/towels/dark-blue-fourth-towel.svg';
import greenTowel from '../../assets/illustrations/towels/green-fifth-towel.svg';
import faqOverlay from '../../assets/illustrations/faq-overlay.svg';

const towels = [
  { id: 1, src: lightPinkTowel, alt: 'Light pink towel', className: 'faq-towel--1' },
  { id: 2, src: yellowTowel, alt: 'Yellow towel', className: 'faq-towel--2' },
  { id: 3, src: lightBlueTowel, alt: 'Light blue towel', className: 'faq-towel--3' },
  { id: 4, src: darkBlueTowel, alt: 'Dark blue towel', className: 'faq-towel--4' },
  { id: 5, src: greenTowel, alt: 'Green towel', className: 'faq-towel--5' },
];

export default function Faq() {
  return (
    <section className="faq-section" id="faq">
      <div className="faq-towels">
        {towels.map((towel) => (
          <div key={towel.id} className={`faq-towel ${towel.className}`}>
            <img src={towel.src} alt={towel.alt} />
          </div>
        ))}
      </div>
      <div className="faq-overlay">
        <img src={faqOverlay} alt="" />
      </div>
    </section>
  );
}
