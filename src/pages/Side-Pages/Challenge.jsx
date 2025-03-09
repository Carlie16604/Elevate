import React, {useState, useEffect} from "react";
import '../../index.css';
import NavBar from '../Components/NavBar.jsx';
import '../../data/challenge.js';
import BG from '../../assets/Universal/sideBackground.jpg';

const Challenge = () => {

const [schedule, setSchedule] = useState([
  { day: 1, status: "false", videos: [{ link: "#", image: "video1.jpg" }] }, // Example data structure
  { day: 2, status: "false", videos: [] },
  // Add more days as needed
]);

const [nextDayStatus, setNextDayStatus] = useState("");

useEffect(() => {
  checkNextDay();
}, [schedule]);

const checkNextDay = () => {
  const nextDay = schedule.find(day => day.status === "false");

  if (!nextDay) {
    setNextDayStatus("amazing-day");
  } else if (nextDay.videos.length === 0) {
    setNextDayStatus("rest-day");
  } else {
    setNextDayStatus("workout-day");
  }
};

const handleWorkoutClick = () => {
  const updatedSchedule = [...schedule];
  updatedSchedule[0].status = "success"; // Update the first day's status
  setSchedule(updatedSchedule);
};

const handleNoWorkoutClick = () => {
  const updatedSchedule = [...schedule];
  updatedSchedule[0].status = "failed"; // Update the first day's status
  setSchedule(updatedSchedule);
};

const generateVideoHTML = (videos) => {
  return videos.map((video, index) => (
    <a href={video.link} target="_blank" key={index}>
      <img
        src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/${video.image}`}
        alt="Workout Video"
      />
    </a>
  ));
};

  return (
<>
      <NavBar />
      <div id="Challenge" className="relative">
        <img
          src={BG}
          rel="norel"
          className="z-0 absolute h-[50vh] w-screen min-w-[1200px] object-cover lg:h-[40vh]"
          alt="Background"
        />

        <div className="container">
          <div className="text-[70px] text-center pt-1">
            <div className="mt-60 mb-20 md:mt-40">
              <h1 className="text-white relative z-10">30 Day Challenge</h1>
            </div>
          </div>

          {/* Workout Question Section */}
          <section className="workout-main relative">
            <div className="workout-question mt-4 p-8 text-lg leading-snug bg-white rounded-xl shadow-lg text-indigo-700 text-uppercase text-center sticky top-4 z-10">
              <div className="workout-day">
                <p>Did you complete the workout today?</p>
                <a href="#" className="button bg-indigo-600 text-white py-3 px-5 rounded-full inline-block my-2 transition-all duration-300 hover:shadow-lg">Yes, I did!</a>
                <a href="#" className="button bg-white text-indigo-600 py-3 px-5 rounded-full inline-block my-2 transition-all duration-300 hover:shadow-lg">Oh No</a>
              </div>

              {/* Rest Day Section */}
              <div className="rest-day hidden">
                <p>A gift from the heavens! It's a rest day today.</p>
                <a href="#" className="button bg-indigo-600 text-white py-3 px-5 rounded-full inline-block my-2 transition-all duration-300 hover:shadow-lg">Woohoo!</a>
              </div>

              {/* Amazing Day Section */}
              <div className="amazing-day hidden p-6 text-center">
                <p>You did it! 🎉🎉🎉 It only took you
                  <span className="js-day-count">30</span> days.
                </p>
              </div>
            </div>

            {/* Schedule List */}
            <div className="schedule-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
              <aside className="text-center text-lg leading-6 text-uppercase">
                <p>
                  At this rate, you will complete the challenge in
                  <span className="large text-indigo-800 font-bold text-3xl md:text-4xl mt-2">30 days</span>
                </p>
              </aside>

              {/* Example SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 437.79 269.44" className="opacity-65 z-[-1] w-[40%] ml-[30%]">
                <path className="cls-1" d="M388.02 228.31l-124.14-.43v-.04l-10.41.02-10.42-.02v.04l-193.28.43L0 269.44H437.79l-49.77-41.13z" />
                <path className="cls-2" d="M56.6 35.79s-21.36 2.3-26.11 17.51 14.39 36 33.78 21.3z" />
              </svg>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Challenge;
