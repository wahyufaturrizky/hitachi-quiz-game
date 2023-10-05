import instructionModalImg from "../assets/instruction-modal.svg";

const InstructionScreen = () => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm min-h-screen bg-regal-blue">
      <div className="min-h-screen flex justify-center items-center">
        <img src={instructionModalImg} alt="" />
      </div>
    </div>
  );
};

export default InstructionScreen;
