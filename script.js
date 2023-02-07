// let question1 = {
//     ques: "Which is a javacript package management application?",
//     ans: {
//         a:"Typescript",
//         b:"Node.js",
//         c:"Npm"
//     },
//     correctAnswer:"c",
//     checkAnswer: function (answer){
//         return answer === this.correctAnswer;
//     }
// }
// let question2 = {
//     ques: "Which is a .net package management application?",
//     ans: {
//         a:"Typescript",
//         b:"Nuget",
//         c:"Npm"
//     },
//     correctAnswer:"b",
//     checkAnswer: function (answer){
//         return answer === this.correctAnswer;
//     }
// }
// console.log(question1.checkAnswer("c"));
// console.log(question2.checkAnswer("b"));




//quiz adında bir nesne ürettim.
const quiz = new Quiz(questions);
// doğru ve yanlış cevaplar için ikonlar tanımladım.
// const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
// const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
// start butonuna eriştim ve tıklandığında quiz-box ın opacity sini 1 yaptım ve pointer-events ını auto yaptım.
// böylece oyun başlıyor
const ui = new UI();
ui.btn_start.addEventListener("click", function(){
    ui.quiz_box.classList.add("active");
    ui.showQuestions(quiz.getQuestion());
    startTimer(10);
    startTimerLine();
    ui.soruSayisiniGoster(quiz.quesIndex +1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
})
// next question butonuna ulaştım ve click eventine gerekli eventleri ekledim.
ui.next_btn.addEventListener("click", function() {
    if(quiz.questions.length != quiz.quesIndex +1){
        quiz.quesIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.showQuestions(quiz.getQuestion());
        ui.soruSayisiniGoster(quiz.quesIndex +1, quiz.questions.length);
        ui.next_btn.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.showScore(quiz.questions.length, quiz.dogruCevap);
    }
})
ui.btn_quit.addEventListener("click", function() {
    window.location.reload();
})
ui.btn_replay.addEventListener("click", function() {
    quiz.dogruCevap = 0;
    quiz.quesIndex = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
})
// option liste giden değişken ataması

// soruları dinamik bir şekilde havuzdan çekip ekranda gösteren fonsiyonu yazdım.

// bir seçenek seçildiğinde ne olması gerektiğini yazdım. en zorlandığım kısım burasıydı.
function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.getQuestion();
    if(soru.checkAnswer(cevap)){
        quiz.dogruCevap += 1;
        option.classList.add("correct")
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }
    for(let i = 0; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.next_btn.classList.add("show");
}
let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer(){
        ui.time_second.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter);
            ui.time_text.textContent = "Time Over";
            let cevap = quiz.getQuestion().dogruCevap;
            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent == cevap){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
            }
            ui.next_btn.classList.add("show");
        }
    }
}
let counterLine;
function startTimerLine() {
    let line_width = 0;
    counterLine = setInterval(timer, 20);
    function timer(){
        line_width += 1;
        ui.time_line.style.width = line_width + "px";
        if(line_width > 549){
            clearInterval(counterLine);
        }
    }
}