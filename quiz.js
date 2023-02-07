// quiz adında bir constructor oluşturdum. parametre olarak soru havuzunu göndereceğim.
function Quiz(questions){
    this.questions = questions;
    this.quesIndex = 0;
    this.dogruCevap = 0;
}
// buradaki getQuestion metodu soru havuzundan bir soru getirir. quize prototype edilmiştir.
Quiz.prototype.getQuestion = function() {return this.questions[this.quesIndex]};