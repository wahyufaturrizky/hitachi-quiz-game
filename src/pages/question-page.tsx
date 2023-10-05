import { useState } from "react";
import { Params, useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { questionAnswer } from "../utils/question-answer";

const QuestionScreen = () => {
  const navigate = useNavigate();

  const [isShowBasicModal, setIsShowBasicModal] = useState({
    isShow: false,
    valCorrectAnswer: "",
    valDesc: "",
    isCorrectAnswer: false,
  });

  const { isShow, valCorrectAnswer, valDesc, isCorrectAnswer } =
    isShowBasicModal;

  let { numberOfQuestion }: Readonly<Params<string>> = useParams();

  let valQuestionAnswer = questionAnswer as any;

  const { questionImg, question, options, correctAnswer, desc } =
    valQuestionAnswer[numberOfQuestion || 1];

  const handleCheckAnswer = (data: string) => {
    setIsShowBasicModal({
      isShow: true,
      valCorrectAnswer: correctAnswer,
      isCorrectAnswer: correctAnswer === data ?? false,
      valDesc: desc,
    });

    setTimeout(() => {
      setIsShowBasicModal({
        ...isShowBasicModal,
        isShow: false,
      });
      if (correctAnswer === data && Number(numberOfQuestion) < 5) {
        navigate(`/question/${Number(numberOfQuestion) + 1}`);
      } else if (correctAnswer === data && Number(numberOfQuestion) === 5) {
        navigate("/eco-expert-page");
      }
    }, 1000);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={questionImg} alt="" />
      </div>

      <p className="text-center mt-10">{question}</p>

      <div className="grid grid-cols-2 gap-4 p-8">
        {options.map((data: string, index: number) => (
          <Button
            onClick={() => handleCheckAnswer(data)}
            key={index}
            label={data}
            className="bg-slate-50 rounded-lg shadow border border-green-400 p-1"
          />
        ))}
      </div>

      {isShow && (
        <Modal
          valCorrectAnswer={valCorrectAnswer}
          valDesc={valDesc}
          isCorrectAnswer={isCorrectAnswer}
          onCancel={() =>
            setIsShowBasicModal({
              ...isShowBasicModal,
              isShow: false,
            })
          }
        />
      )}
    </div>
  );
};

export default QuestionScreen;
