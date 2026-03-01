import { useState } from 'react';
import "./Past.css";
import leftArrow from '../../assets/illustrations/past/left-arrow.png';
import rightArrow from '../../assets/illustrations/past/right-arrow.png';
import whale from '../../assets/illustrations/past/whale.png';
import pastBg from '../../assets/backgrounds/past-bg.png';
import team from '../../assets/illustrations/past/slideshow/team.png';
import test1 from '../../assets/illustrations/past/slideshow/test1.png';
import test2 from '../../assets/illustrations/past/slideshow/test2.jpg';

const slides = [team, test1, test2];

export default function Past() {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex((i) => (i + 1) % slides.length);

    return (
        <section className="past-section" id="gallery">
            <div className="past-bg-wrapper">
                <img src={pastBg} className="past-bg-image" alt="" />
                <div className="slideshow">
                    <img key={index} src={slides[index]} className="slideshow-image" />
                </div>

                <img src={leftArrow} className="left-arrow-illustration" onClick={prev} />
                <img src={rightArrow} className="right-arrow-illustration" onClick={next} />
                <img src={whale} className="whale-illustration" />
            </div>
        </section>
    );
}
