import './Team.css';
import teamBg from "../../assets/backgrounds/meet-the-team.png"

export default function MeetTheTeam() {
    return (
        <section className="team">
            <img src={teamBg} alt="Meet the Team" className="team-bg" />
        </section>
    );
}
