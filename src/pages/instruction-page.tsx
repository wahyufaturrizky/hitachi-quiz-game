import instructionModalImg from "../assets/instruction-modal.svg";
import { useNavigate } from "react-router-dom";

const InstructionScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm min-h-screen bg-regal-blue">
      <div className="min-h-screen flex justify-center items-center">
        <img
          onClick={() => navigate("/question/1")}
          src={instructionModalImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default InstructionScreen;
