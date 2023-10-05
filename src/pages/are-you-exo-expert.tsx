import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseBlackIcon } from "../assets/close-black.svg";
import ecoExpertImg from "../assets/eco-expert.svg";
import btnShare from "../assets/button-share.svg";
import btnCaseStudy from "../assets/btn-case-study.svg";
import btnLiveBoard from "../assets/btn-live-board.svg";

const EcoExpertScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm min-h-screen">
      <div className="py-4 px-4">
        <div className="flex">
          <CloseBlackIcon onClick={() => navigate(-1)} />
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <p className="text-2xl text-black font-bold text-center">
          YOU ARE AN ECO-EXPERT!
        </p>

        <p className="text-base text-black text-center">
          You answered 5/5 questions correctly.{" "}
        </p>

        <img className="px-14" src={ecoExpertImg} alt="" />

        <div className="flex flex-col">
          <img src={btnShare} alt="" />
          <img src={btnCaseStudy} alt="" />
          <img src={btnLiveBoard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EcoExpertScreen;
