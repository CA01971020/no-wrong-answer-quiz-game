import { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } from "./questionData";

let questionDataArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function selectQuestion() {
  const randomInt = getRandomInt(0, questionDataArray.length - 1);
  const getQuestionData = questionDataArray[randomInt];
  const pushQuestionData = [
    getQuestionData.sentence,
    getQuestionData.question,
    getQuestionData.answer1,
    getQuestionData.answer2,
    getQuestionData.answer3,
  ];
  return pushQuestionData;
}

function Game({
  questionData,
  updateQuestion,
}: {
  questionData: string[];
  updateQuestion: () => void;
}) {
  const handleAnswerClick = () => {
    alert("正解！");
    updateQuestion(); // 質問データを更新
  };

  return (
    <div>
      <div className="ml-6 mr-6">
        <p>{questionData[0]}</p>
        <p>{questionData[1]}</p>
      </div>
      <ul className="text-center">
        <li className="mt-16">
          <button
            onClick={handleAnswerClick}
            className="pr-6 pl-6 pt-2 pb-2 bg-slate-600 rounded-xl text-white"
          >
            {questionData[2]}
          </button>
        </li>
        <li className="mt-8">
          <button
            onClick={handleAnswerClick}
            className="pr-6 pl-6 pt-2 pb-2 bg-slate-600 rounded-xl text-white"
          >
            {questionData[3]}
          </button>
        </li>
        <li className="mt-8">
          <button
            onClick={handleAnswerClick}
            className="pr-6 pl-6 pt-2 pb-2 bg-slate-600 rounded-xl text-white"
          >
            {questionData[4]}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Game;
