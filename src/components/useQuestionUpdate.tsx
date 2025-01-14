import { useState, useEffect } from "react";
import { selectQuestion } from "./game";

export function useQuestionUpdate() {
  const [start, setStart] = useState<boolean>(false);
  const [questionData, setQuestionData] = useState(selectQuestion());

  useEffect(() => {
    if (start) {
      setQuestionData(selectQuestion());
    }
  }, [start]);

  const setStartTrue = () => setStart(true);
  const setStartFalse = () => setStart(false);
  const updateQuestion = () => setQuestionData(selectQuestion());

  return { start, questionData, setStartTrue, setStartFalse, updateQuestion };
}
