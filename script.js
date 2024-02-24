const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const QuestionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame) 
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    QuestionContainerElement.classList.remove('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = o
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion() {
    QuestionContainerElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}
function selectAnswer() {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
    

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        question: 'what is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false} 
        ]
    },
    {
        question: 'what is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false} 
        ]
    },
]