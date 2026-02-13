import React from 'react';
import './Team.css';
//import 'src/assets/MTT-Assets/Vector 211.svg';
export default function MeetTheTeam() {
  const bubblePositions = [
    { top: "2272px", left: "1173px" },
    { top: "1456px", left: "91px" },
    { top: "1469px", left: "71px" },
    { top: "1589px", left: "1372px" },
    { top: "2200px", left: "1247px" },
    { top: "1267px", left: "48px" },
    { top: "2021px", left: "298px" },
  ];

  const FishYellow = ({ rotated }) => (
    <div className={`team-fish-yellow ${rotated ? 'team-fish-yellow-rotated' : ''}`}>
      <img
        className="vector-1"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-211-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-211-3.svg"}
      />
      <img
        className="vector-2"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-212-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-212-3.svg"}
      />
      <img
        className="vector-3"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-213-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-213-3.svg"}
      />
      <img
        className="vector-4"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-214-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-214-3.svg"}
      />
      <img
        className="vector-5"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-215-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-215-3.svg"}
      />
      <img
        className="vector-6"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-216-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-216-3.svg"}
      />
      <div className="eye" />
    </div>
  );

  const FishOrange = ({ rotated }) => (
    <div className={`team-fish-orange ${rotated ? 'team-fish-orange-rotated' : ''}`}>
      <img
        className="vector-1"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-200-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-200-3.svg"}
      />
      <img
        className="vector-2"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-201-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-201-3.svg"}
      />
      <img
        className="vector-3"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-202-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-202-3.svg"}
      />
      <img
        className="vector-4"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-203-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-203-3.svg"}
      />
      <img
        className="vector-5"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-204-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-204-3.svg"}
      />
      <div className="eye" />
    </div>
  );

  const FishBlue = ({ rotated }) => (
    <div className={`team-fish-blue ${rotated ? 'team-fish-blue-rotated' : ''}`}>
      <img
        className="vector-1"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-206-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-206-3.svg"}
      />
      <img
        className="vector-2"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-207-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-207-3.svg"}
      />
      <img
        className="polygon"
        alt="Polygon"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/polygon-3-2.svg" : "https://c.animaapp.com/ZWg7p2QV/img/polygon-3-3.svg"}
      />
      <div className="eye" />
    </div>
  );

  const FishPink = ({ rotated }) => (
    <div className={`team-fish-pink ${rotated ? 'team-fish-pink-rotated' : ''}`}>
      <img
        className="vector-1"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-208-3.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-208.svg"}
      />
      <img
        className="vector-2"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-209-3.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-209.svg"}
      />
      <img
        className="vector-3"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-210-3.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-210.svg"}
      />
      <div className="dot" />
      <div className="eye" />
    </div>
  );

  const FishWhite = ({ rotated }) => (
    <div className={`team-fish-white ${rotated ? 'team-fish-white-rotated' : ''}`}>
      <img
        className="vector-1"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-217-3.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-217-1.svg"}
      />
      <img
        className="vector-2"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-218-3.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-218-1.svg"}
      />
      <img
        className="vector-3"
        alt="Vector"
        src={rotated ? "https://c.animaapp.com/ZWg7p2QV/img/vector-219-3.svg" : "https://c.animaapp.com/ZWg7p2QV/img/vector-219-1.svg"}
      />
      <div className="eye" />
    </div>
  );

  return (
    <div className="team-container" id="team">
      <img
        className="team-vector-bg-1"
        alt="Vector"
        src="https://c.animaapp.com/ZWg7p2QV/img/vector-193.svg"
      />

      <img
        className="team-vector-bg-2"
        alt="Vector"
        src="https://c.animaapp.com/ZWg7p2QV/img/vector-243.png"
      />

      <img
        className="team-vector-bg-3"
        alt="Vector"
        src="https://c.animaapp.com/ZWg7p2QV/img/vector-194.svg"
      />

      <img
        className="team-group-logo-1"
        alt="Group"
        src="https://c.animaapp.com/ZWg7p2QV/img/group-352@2x.png"
      />

      <div className="team-sign-container">
        <img
          className="team-sign-rectangle-1"
          alt="Rectangle"
          src="https://c.animaapp.com/ZWg7p2QV/img/rectangle-18.svg"
        />

        <img
          className="team-sign-rectangle-2"
          alt="Rectangle"
          src="https://c.animaapp.com/ZWg7p2QV/img/rectangle-17.svg"
        />

        <div className="team-sign-border" />

        <img
          className="team-sign-subtract"
          alt="Subtract"
          src="https://c.animaapp.com/ZWg7p2QV/img/subtract.svg"
        />

        <img
          className="team-sign-line"
          alt="Line"
          src="https://c.animaapp.com/ZWg7p2QV/img/line-1.svg"
        />

        <img
          className="team-sign-group"
          alt="Group"
          src="https://c.animaapp.com/ZWg7p2QV/img/group-9@2x.png"
        />

        <div className="team-sign-text">
          MEET THE TEAM !
        </div>

        <img
          className="team-sign-ellipse"
          alt="Ellipse"
          src="https://c.animaapp.com/ZWg7p2QV/img/ellipse-436.svg"
        />

        <img
          className="team-sign-line-bottom"
          alt="Line"
          src="https://c.animaapp.com/ZWg7p2QV/img/line-4.svg"
        />
      </div>

      <img
        className="team-iggy"
        alt="Iggy"
        src="https://c.animaapp.com/ZWg7p2QV/img/iggy@2x.png"
      />

      <img
        className="team-cloud"
        alt="Cloud"
        src="https://c.animaapp.com/ZWg7p2QV/img/cloud@2x.png"
      />

      <img
        className="team-rectangle-1"
        alt="Rectangle"
        src="https://c.animaapp.com/ZWg7p2QV/img/rectangle-27.svg"
      />

      <img
        className="team-vector-1"
        alt="Vector"
        src="https://c.animaapp.com/ZWg7p2QV/img/vector-230.svg"
      />

      <img
        className="team-vector-2"
        alt="Vector"
        src="https://c.animaapp.com/ZWg7p2QV/img/vector-229.svg"
      />

      <img
        className="team-rectangle-2"
        alt="Rectangle"
        src="https://c.animaapp.com/ZWg7p2QV/img/rectangle-28.svg"
      />

      <img
        className="team-sun"
        alt="Sun"
        src="https://c.animaapp.com/ZWg7p2QV/img/sun@2x.png"
      />

      <img
        className="team-seafloor"
        alt="Seafloor"
        src="https://c.animaapp.com/ZWg7p2QV/img/seafloor.png"
      />

      <div className="team-fish-container">
        {/* Row 1 */}
        <div className="team-fish-row team-fish-row-1">
          <FishYellow rotated={false} />
          <FishOrange rotated={false} />
          <FishYellow rotated={true} />
          <FishYellow rotated={true} />
          <FishBlue rotated={true} />
        </div>

        {/* Row 2 */}
        <div className="team-fish-row team-fish-row-2">
          <FishPink rotated={false} />
          <FishBlue rotated={false} />
          <FishPink rotated={true} />
          <FishWhite rotated={false} />
          <FishOrange rotated={true} />
        </div>

        {/* Row 3 */}
        <div className="team-fish-row-3">
          <FishBlue rotated={true} />
          <FishWhite rotated={false} />
          <FishWhite rotated={true} />
          <FishPink rotated={true} />
          <FishYellow rotated={false} />
        </div>

        {/* Row 4 */}
        <div className="team-fish-row-4">
          <FishOrange rotated={true} />
          <img
            className="team-advisor"
            alt="Advisor"
            src="https://c.animaapp.com/ZWg7p2QV/img/advisor@2x.png"
          />
          <img
            className="team-chair"
            alt="Chair"
            src="https://c.animaapp.com/ZWg7p2QV/img/chair@2x.png"
          />
          <FishBlue rotated={false} />
          <FishPink rotated={true} />
        </div>

        {/* Row 5 */}
        <div className="team-fish-row team-fish-row-5">
          <FishWhite rotated={true} />
          <div className="team-fish-orange-container">
            <div className="team-fish-orange-inner">
              <FishOrange rotated={false} />
            </div>
          </div>
        </div>
      </div>

      {bubblePositions.map((bubble, index) => (
        <div
          key={index}
          className="team-bubble"
          style={{ top: bubble.top, left: bubble.left }}
        />
      ))}

      <div className="team-top-oval" />

      <img
        className="team-circle"
        alt="Circle"
        src="https://c.animaapp.com/ZWg7p2QV/img/circle@2x.png"
      />

      <img
        className="team-vector-top"
        alt="Vector"
        src="https://c.animaapp.com/ZWg7p2QV/img/vector-264.svg"
      />

      <img
        className="team-group-logo-2"
        alt="Group"
        src="https://c.animaapp.com/ZWg7p2QV/img/group-352@2x.png"
      />

      <img
        className="team-group-small"
        alt="Group"
        src="https://c.animaapp.com/ZWg7p2QV/img/group-353@2x.png"
      />

      <img
        className="team-rectangle-top"
        alt="Rectangle"
        src="https://c.animaapp.com/ZWg7p2QV/img/rectangle-33.svg"
      />

      <img
        className="team-polygon-1"
        alt="Polygon"
        src="https://c.animaapp.com/ZWg7p2QV/img/polygon-5.svg"
      />

      <img
        className="team-polygon-2"
        alt="Polygon"
        src="https://c.animaapp.com/ZWg7p2QV/img/polygon-6.svg"
      />

      <img
        className="team-polygon-3"
        alt="Polygon"
        src="https://c.animaapp.com/ZWg7p2QV/img/polygon-7.svg"
      />
    </div>
  );
};
