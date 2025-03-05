import React from "react";
import '../../index.css'; // Assuming your global styles are in this file
import NavBar from '../Components/NavBar.jsx'; // Make sure NavBar is correctly imported
import BG from '../../assets/Universal/sideBackground.jpg';

const Challenge = () => {
  return (
    <>
      <NavBar />
      <div id="Challenge">
        {/* Background Image */}
        <img
          src={BG}
          rel="norel"
          className="z-0 absolute h-[50vh] w-screen min-w-[1200px] object-cover lg:h-[40vh]"
          alt="Background"
        />

        <div className="container">
          {/* Main Title */}
          <div className="text-[70px] text-center pt-1">
            <div className="mt-60 mb-20 md:mt-40">
              <h1 className="text-white relative z-10">30 Day Challenge</h1>
            </div>
          </div>

          {/* Workout Question Section */}
          <section className="workout-main">
            <div className="workout-question">
              <div className="workout-day">
                <p>Did you complete the workout today?</p>
                <a href="#" className="button js-did-workout">Yes, I did!</a>
                <a href="#" className="button button--white js-no-workout">Oh No</a>
              </div>

              {/* Rest Day Section */}
              <div className="rest-day">
                <p>A gift from the heavens! It's a rest day today.</p>
                <a href="#" className="button js-did-workout">Woohoo!</a>
              </div>

              {/* Amazing Day Section */}
              <div className="amazing-day">
                <p>You did it! 🎉🎉🎉 It only took you
                  <span className="js-day-count">30</span> days.
                </p>
              </div>
            </div>

            {/* Schedule List */}
            <div className="schedule-list js-schedule-list">
              <aside>
                <p>
                  At this rate, you will complete the challenge in
                  <span className="large">
                    <span className="js-day-count">30</span> days
                  </span>
                </p>
              </aside>

              {/* Add your SVG or any other content here */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 437.79 269.44">
                {/* Example SVG paths (you can customize this SVG part as needed) */}
                <path className="cls-1" d="M388.02 228.31l-124.14-.43v-.04l-10.41.02-10.42-.02v.04l-193.28.43L0 269.44H437.79l-49.77-41.13z" />
                <path className="cls-2" d="M56.6 35.79s-21.36 2.3-26.11 17.51 14.39 36 33.78 21.3z" />
                {/* Add other paths as necessary */}
              </svg>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Challenge;
