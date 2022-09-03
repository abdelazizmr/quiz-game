// varibales
let next = document.getElementById('next')
let question = document.getElementById('question')
let count = document.getElementById('counter')
let suggestions = document.querySelector('.suggestions')

//console.log(buttons);

let allQuestions = [
    {
        question : 'What is the answer to the Ultimate Question of Life, the Universe, and Everything?',
        answers : ['pi', 'what' , "i don't know", '42'],
        correct : '42'
    },
    {
        question : "What's the best programming language",
        answers : ['javascript', 'php' , "html", 'python'],
        correct : 'html'
    },
    {
        question : 'Do you love to code',
        answers : ['yes', 'maybe' , "hell yes", 'sometimes'],
        correct : 'hell yes'
    },
    {
        question : 'Who\'s gonna win the world cup this year',
        answers : ['france', 'germany' , "brazil", 'morocco'],
        correct : 'france'
    }
]

let currentQuestion  = 0;
let score = 0 ;

//events 

window.addEventListener('load',()=>{
    nextQuestion(currentQuestion)
    
})



next.addEventListener('click',()=>{
    currentQuestion++;
    if (currentQuestion >= allQuestions.length){
        let finalScore  = document.createElement('h5')
        finalScore.innerHTML = `You got  ${score}  of  ${allQuestions.length}`
        question.innerHTML = ''
        suggestions.innerHTML = ''
        suggestions.append(finalScore)
        return
    }
    nextQuestion(currentQuestion)
})


//!displaying next question and suggestions
function nextQuestion(index){
    
    let displayedQuestion = allQuestions[index]
    question.innerHTML = ''
    question.innerHTML = displayedQuestion.question
    suggestions.innerHTML  = ''
    for (let answer of displayedQuestion.answers){
        let button = document.createElement('button')
        button.classList = 'btn btn-info'
        button.innerHTML = answer
        suggestions.append(button)
    }
    let buttons = document.querySelectorAll('.btn-info')
    buttons.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            let text = e.target.textContent
            let element = e.target
            checkAnswer(text,element)
        })
    })

    count.innerHTML = ''
    count.innerHTML = `Question ${currentQuestion+1} of ${allQuestions.length}`
}

function checkAnswer(text,element){
    
    for (let i = 0 ; i < allQuestions.length ; i++){
        if (text === allQuestions[i].correct){
            element.classList = 'btn btn-success';
            score++;
            return score
        }
    }
    element.classList = 'btn btn-danger'
    let buttons = document.querySelectorAll('.btn-info')
    buttons.forEach(btn=>{
        for (let i = 0 ; i < allQuestions.length ; i++){
            if (btn.textContent == allQuestions[i].correct){
                btn.classList = 'btn btn-success'
            }
        }
    })
}