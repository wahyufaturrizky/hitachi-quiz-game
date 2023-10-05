import playButtonImg from "../assets/play-button.svg";
import homeScreenImg from "../assets/home-screen-img.svg";
import liveScoreBoard from "../assets/live-scoreboard-button.svg";

const HomeScreen = () => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm min-h-screen bg-regal-blue">
      <div className="flex flex-col">
        <img src={homeScreenImg} alt="" />
        <div className="flex flex-col -mt-40">
          <img src={playButtonImg} alt="" />
          <img src={liveScoreBoard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
