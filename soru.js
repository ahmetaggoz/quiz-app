// Question adında constructor oluşturdum.
function Question(ques, anwers, correctAnswer) {
    this.ques = ques; this.anwers = anwers; this.correctAnswer = correctAnswer;
}
// constructor un içinde olsaydı bütün nesnelere yani objelere ekleneceğinden dolayı checkAnswer metodunu prototype içine aldm
// buradaki metod cevap kontrolü yapar doğruysa true değilse false değer döndürür.
Question.prototype.checkAnswer = function(ans){return ans === this.correctAnswer};
// her nesnemi questions adlı bir listeye doldurdum ve her seferinde buradan çağırdım. Soru Havuzu gibi. 
let questions = [
    new Question("1-Which is a javacript package management application?",{a:"Typescript",b:"Node.js",c:"Npm", d:"Nuget"}, "c"),
    new Question("2-Which is not considered a frontend??",{a:"css",b:"html",c:"javascript", d:"sql"}, "d"),
    new Question("3-which is considered in the backend?",{a:"node.js",b:"typescript",c:"angular", d:"react"}, "a"),
    new Question("4-which does not use javascript language?",{a:"react",b:"angular",c:"vue.js", d:"asp.net"}, "d")
];