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

export let q6: Question = {
  id: 6,
  sentence: "1000年後の天気はなに？",
  question: "",
  answer1: "快晴",
  answer2: "曇り",
  answer3: "大雨",
};

export let q7: Question = {
  id: 7,
  sentence: "この言葉はなに？",
  question: "〇っ〇ん",
  answer1: "にっぽん",
  answer2: "すっぽん",
  answer3: "けっこん",
};

export let q8: Question = {
  id: 8,
  sentence: "令和7年はどれ？",
  question: "",
  answer1: "R7",
  answer2: "2025年",
  answer3: "巳年",
};

export let q9: Question = {
  id: 9,
  sentence: "1時はいつ？",
  question: "",
  answer1: "午前1時",
  answer2: "午後1時",
  answer3: "AM 1時",
};

export let q10: Question = {
  id: 10,
  sentence: "羽テナくんの財布には幾ら入っている？",
  question: "羽テナくん「1万札が25枚と、1円玉が564536枚あったよ」",
  answer1: "落としたので0円",
  answer2: "110円使ったので814,426円",
  answer3: "814,536円",
};
