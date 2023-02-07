function UI() {
    this.btn_start = document.querySelector(".btn-start"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.next_btn = document.querySelector(".next-btn"),
    this.option_list = document.querySelector(".option-list"),
    this.quiz_box = document.querySelector(".quiz-box"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.question_text = document.querySelector(".question-text"),
    this.score_box = document.querySelector(".score_box"),
    this.time_text = document.querySelector(".time_text"),
    this.time_line = document.querySelector(".time_line"),
    this.time_second = document.querySelector(".time_second")
}
UI.prototype.showQuestions = function (quest) {
    let questt = `<span>${quest.ques}</span>`;
    let optionss = '';
    for(let answer in quest.anwers){
        optionss += `
            <div class="option">
                <span><b>${answer}</b>: ${quest.anwers[answer]}</span>
            </div>
        `;
    }
    this.option_list.innerHTML = optionss;
    this.question_text.innerHTML = questt;
    const option_el = document.querySelectorAll(".option")
    for(let opt of option_el){
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}
UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz-box .question_index").innerHTML = tag;
}
UI.prototype.showScore = function(totalQue, corQue) {
    let tag = `You gave ${corQue} correct answers out of a total of ${totalQue} questions.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}