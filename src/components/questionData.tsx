import React from "react";

interface Question {
  id: number;
  sentence: string;
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
}

export let q1: Question = {
  id: 1,
  sentence: "お札に載ってる人物の名前を選びなさい。",
  question: "",
  answer1: "福沢諭吉",
  answer2: "渋沢栄一",
  answer3: "野口英世",
};

export let q2: Question = {
  id: 2,
  sentence: "答えが2になる式を選びなさい。",
  question: "",
  answer1: "1+1",
  answer2: "2×1",
  answer3: "4÷2",
};

export let q3: Question = {
  id: 3,
  sentence: "〇に入る言葉はなに？",
  question: "〇〇〇〇",
  answer1: "風林火山",
  answer2: "風評被害",
  answer3: "風雲之志",
};

export let q4: Question = {
  id: 4,
  sentence: "〇に入る数字はなに？",
  question: "〇〇〇",
  answer1: "123",
  answer2: "456",
  answer3: "789",
};

export let q5: Question = {
  id: 5,
  sentence: "A君は財布を交番に届けました。なぜですか？",
  question: "",
  answer1: "落ちていたから",
  answer2: "自分のじゃないから",
  answer3: "届けないといけないという教育を受けたから",
};
