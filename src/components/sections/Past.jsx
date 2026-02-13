import "./Past.css";
import post from '../../assets/illustrations/past/post.png';
import redSnorkler from '../../assets/illustrations/past/red-snorkler.png';
import iggySurf from '../../assets/illustrations/past/iggy-surf.png';
import grass from '../../assets/illustrations/past/grass.png';
import groundSpots from '../../assets/illustrations/past/ground-spots.png';
import leftArrow from '../../assets/illustrations/past/left-arrow.png';
import rightArrow from '../../assets/illustrations/past/right-arrow.png';
import team from '../../assets/illustrations/past/slideshow/team.png';

export default function Past() {
    return (
        <section className="past-section" id="gallery">
            <div className="post">
                <img src={post} alt="Past Event Illustration" className="post-image" />
                <h2 className="post-text">BLAST FROM THE PAST</h2>

                <div className="slideshow">
                    <img src={team} className="slideshow-image" />
                </div>

                <img src={leftArrow} className="left-arrow-illustration" />
                <img src={rightArrow} className="right-arrow-illustration" />

            </div>
            <div className="red-snorkler">
                <img src={redSnorkler} className="red-snorkler-illustration" />
            </div>
            <div className="ground-spots">
                <img src={groundSpots} className="ground-spots-illustration" />
            </div>
            <div className="grass">
                <img src={grass} className="grass-illustration" />
            </div>
            <div className="iggy-surf">
                <img src={iggySurf} className="iggy-surf-illustration" />
            </div>

            
        </section>
    );
}