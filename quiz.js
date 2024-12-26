const questions = [
    {
        question: 'Which is the largest animal in the world?',
        answers: [
            {text: 'Shark', correct: false},
            {text: 'Blue whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false},
        ]
    },
    {
        question: 'Which is the smallest continent in the world?',
        answers: [
            {text: 'Asia', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Arctic', correct: false},
            {text: 'Africa', correct: false},
        ]
    },
    {
        question: 'Which is the largest desert in the world?',
        answers: [
            {text: 'Kalahari', correct: false},
            {text: 'Gobi', correct: false},
            {text: 'Sahara', correct: false},
            {text: 'Antarctica', correct: true},
        ]
    },
    {
        question: 'Which is the longest river in the world?',
        answers: [
            {text: 'Amazon', correct: false},
            {text: 'Nile', correct: true},
            {text: 'Yangtze', correct: false},
            {text: 'Mississippi', correct: false},
        ]
    },
    {
        question: 'Who invented the telephone?',
        answers: [
            {text: 'Alexander Graham Bell', correct: true},
            {text: 'Thomas Edison', correct: false},
            {text: 'Nikola Tesla', correct: false},
            {text: 'Albert Einstein', correct: false},
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            {text: 'Earth', correct: false},
            {text: 'Mars', correct: true},
            {text: 'Venus', correct: false},
            {text: 'Jupiter', correct: false},
        ]
    },
    {
        question: 'Who wrote the epic "Iliad"?',
        answers: [
            {text: 'Homer', correct: true},
            {text: 'Virgil', correct: false},
            {text: 'Sophocles', correct: false},
            {text: 'Euripides', correct: false},
        ]
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            {text: 'Au', correct: true},
            {text: 'Ag', correct: false},
            {text: 'Pb', correct: false},
            {text: 'Fe', correct: false},
        ]
    },
    {
        question: 'Which is the tallest mountain in the world?',
        answers: [
            {text: 'K2', correct: false},
            {text: 'Kangchenjunga', correct: false},
            {text: 'Mount Everest', correct: true},
            {text: 'Lhotse', correct: false},
        ]
    },
    {
        question: 'Which is the fastest land animal in the world?',
        answers: [
            {text: 'Lion', correct: false},
            {text: 'Cheetah', correct: true},
            {text: 'Horse', correct: false},
            {text: 'Kangaroo', correct: false},
        ]
    },
];


const questionelement = document.getElementById('question');
const answerButtons = document.getElementById('Answer-btn');
const nextButton = document.getElementById('next');

let currentQuestionIndex =0;
let score=0;

function startquiz (){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentquestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionelement.innerHTML = questionNo + '.' + currentquestion.question;

    currentquestion.answers.forEach(answer=>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    })
}

function resetState(){
    nextButton.style.display ='none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = true;
    });
    nextButton.style.display='block';
}
function showScore(){
    resetState();
    questionelement.innerHTML =`You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
});
startquiz();
