const quizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "Which language is used for web development?", options: ["Python", "C++", "JavaScript", "Java"], answer: "JavaScript" },
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "None of the above"], answer: "Hyper Text Markup Language" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], answer: "William Shakespeare" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Zinc"], answer: "Oxygen" },
    { question: "What year did the Titanic sink?", options: ["1912", "1905", "1898", "1923"], answer: "1912" },
    { question: "Which continent is the Sahara Desert located on?", options: ["Asia", "Africa", "Australia", "South America"], answer: "Africa" },
    { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Bangkok", "Tokyo"], answer: "Tokyo" }
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

function loadQuiz() {
    quizData.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("mb-3");
        questionElement.innerHTML = `<p><strong>${index + 1}. ${q.question}</strong></p>`;
        q.options.forEach(option => {
            questionElement.innerHTML += `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question${index}" value="${option}">
                            <label class="form-check-label">${option}</label>
                        </div>`;
        });
        quizContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

submitButton.addEventListener("click", calculateScore);

loadQuiz();