import './Sponsors.css';
// import sponsorLogo from '../../assets/sponsors/single-sponsor.svg';

const logoModules = import.meta.glob(
  '../../assets/sponsors/**/*.{png,jpg,jpeg,svg}',
  { eager: true }
);

function getLogoUrl(logoPath) {
  const key = `../../assets/sponsors/${logoPath}`;
  return logoModules[key]?.default;
}

const tiers = [
  { key: 'blaze', title: 'Blaze Sponsors' },
  { key: 'flame', title: 'Flame Sponsors' },
  { key: 'spark', title: 'Spark Sponsors' },
  { key: 'regular', title: 'Sponsors' },
];

export default function Sponsors() {
  const grouped = {};
  for (const tier of tiers) grouped[tier.key] = [];
  for (const s of sponsorsData) {
    if (grouped[s.tier]) grouped[s.tier].push(s);
  }

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
          </div>
        ))}
      </div>
    </section>
  );
}
