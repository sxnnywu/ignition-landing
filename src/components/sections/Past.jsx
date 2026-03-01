import "./Past.css";
import leftArrow from '../../assets/illustrations/past/left-arrow.png';
import rightArrow from '../../assets/illustrations/past/right-arrow.png';
import team from '../../assets/illustrations/past/slideshow/team.png';
import pastBg from '../../assets/backgrounds/past-bg.png';

export default function Past() {
    return (
        <section className="past-section" id="gallery">
            <div className="past-bg-wrapper">
                <img src={pastBg} className="past-bg-image" alt="" />
                <div className="slideshow">
                    <img src={team} className="slideshow-image" />
                </div>

                <img src={leftArrow} className="left-arrow-illustration" />
                <img src={rightArrow} className="right-arrow-illustration" />
            </div>
        </section>
    );
}