// 퀴즈 문제 데이터 (이 부분을 수정해서 문제를 추가/변경해!)
const quizData = [
    {
        question: "1. 고종의 아버지로, 왕권 강화를 위해 경복궁을 중건하고 서원을 철폐한 인물은?",
        options: ["김옥균", "흥선대원군", "최익현", "전봉준"],
        answer: "흥선대원군"
    },
    {
        question: "2. 1919년 3월 1일, 민족 대표 33인이 독립 선언서를 낭독하고 만세 시위를 벌인 운동은?",
        options: ["6.10 만세 운동", "광주 학생 항일 운동", "3.1 운동", "물산 장려 운동"],
        answer: "3.1 운동"
    },
    {
        question: "3. 1960년 3.15 부정선거에 항의하여 일어난 민주주의 혁명으로, 이승만 대통령이 하야하게 된 사건은?",
        options: ["4.19 혁명", "5.18 민주화 운동", "6월 민주 항쟁", "부마 민주 항쟁"],
        answer: "4.19 혁명"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

// 퀴즈 시작 함수
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizEl.classList.remove("hide");
    resultEl.classList.add("hide");
    loadQuestion();
}

// 문제를 화면에 불러오는 함수
function loadQuestion() {
    resetState(); // 이전 버튼들 지우기
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;

    // 보기 버튼 생성
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => selectAnswer(option, currentQuestion.answer));
        optionsEl.appendChild(button);
    });
}

// 화면 초기화 함수
function resetState() {
    optionsEl.innerHTML = "";
}

// 정답 확인 및 다음 문제로 넘어가는 함수
function selectAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// 최종 결과 보여주는 함수
function showResult() {
    quizEl.classList.add("hide");
    resultEl.classList.remove("hide");
    scoreEl.innerText = `총 ${quizData.length}문제 중 ${score}문제를 맞혔어!`;
}

// 웹페이지가 열리면 바로 퀴즈 시작
startQuiz();
