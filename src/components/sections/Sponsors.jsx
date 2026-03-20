import './Sponsors.css';
// import sponsorLogo from '../../assets/sponsors/single-sponsor.svg';

const sponsorSections = [
  { tier: 'blaze', count: 4 },
  { tier: 'flame', count: 4 },
  { tier: 'spark', count: 6 },
  { tier: 'general', count: 6 },
];

export default function Sponsors() {
  return (
    <section className="sponsors-section">
      <div className="sponsors-cards">
        {sponsorSections.map((section) =>
          Array.from({ length: section.count }, (_, i) => (
            <div
              key={`${section.tier}-${i}`}
              className={`sponsor-card sponsor-card--${section.tier} sponsor-card--${section.tier}-${i}`}
            >
              {/* <img className="sponsor-card__logo" src={sponsorLogo} alt="Math Endowment Fund" /> */}
              <span className="sponsor-card__name">Math Endowment Fund</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}