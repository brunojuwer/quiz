const form = document.querySelector('.quiz-form');
const correctAnswers = ['A', 'C', 'C', 'D'];
const percentScore = document.querySelector('.percent-score');
const popup = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-close');



const sumScore = (event) => {
        event.preventDefault();
    
        let score = 0
        const userAnswers = [
            form.inputQuestion1.value,
            form.inputQuestion2.value,
            form.inputQuestion3.value,
            form.inputQuestion4.value
        ];
    
     userAnswers.forEach((userAnswer, index) =>{
        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    })
    
    let counter = 0;
    
    popup.style.display = 'unset'
    
    const timer = setInterval(() => {
            if(counter === score){
                clearInterval(timer)
            }
    
            percentScore.textContent = `${counter}%`
            counter++
    }, 30);
    
    }

const closePopup = () =>{
    popup.style.display = 'none';
}

// soma a pontuação do usuário e mostra na tela 
form.addEventListener('submit', sumScore);

//fecha o popup com a pontuação
popupClose.addEventListener('click', closePopup);