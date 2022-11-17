var quiz = {
"JS": [
{
"id": 1,
"question": "What is the full meaning of sdg?",
"options": [
{
"a": "Sustainable deficiency goal",
"b": "super dream goal",
"c": "Sustainable development goal ",
"d": "Super demand goal"
}
],
"answer": "Sustainable development goal",
"score": 0,
"status": ""
},
{
"id": 2,
"question": "How many sdgs do we have?",
"options": [
{
"a": "4",
"b": "17",
"c": "8"
}
],
"answer": "17",
"score": 0,
"status": ""
},
{
"id": 3,
"question": " Sustainable development goal 1 talks about what?",
"options": [
{
"a": "poverty",
"b": "Wealth",
"c": "No poverty"
}
],
"answer": "No poverty",
"score": 0,
"status": ""
},
{
"id": 4,
"question": "What year were the Sdgs set up?",
"options": [
{
"a": "1999",
"b": "2000",
"c":"2022",
"d":"2015"
}
],
"answer": "2015",
"score": 0,
"status": ""
},
{
"id": 5,
"question": "What year was intended to achieve the sdgs?",
"options": [
{
"a": "2023",
"b": "2059",
"c": "2022",
"d": "2002",
}
],
"answer": "2023",
"score": 0,
"status": ""
},
{
"id": 6,
"question": "What is the full meaning of UN-GA?",
"options": [
{
"a": "Universal Nation Grand Auto",
"b": "United nations General Assembly",
"c": "United Nations Grant Affairs",
}
],
"answer": "United Nations General Assembly",
"score": 0,
"status": ""
},
{
"id": 7,
"question": "What year was the sdgs developed?",
"options": [
{
"a": "2012",
"b": "1980",
"c": "2015",
}
],
"answer": "2012",
"score": 0,
"status": ""
},
{
"id": 8,
"question": "What did the brundtland Report define the sustainable development as?",
"options": [
{
"a": "The means of meeting the needs",
"b": "way of communicating",
"c": "development that meets the needs of the present without compromising the ability of future generations to meet their own needs",
"d": " Saving souls",
}
],
"answer": "development that meets the needs of the present without compromising the ability of future generations to meet their own needs",
"score": 0,
"status": ""
},
{
"id": 9,
"question": "Is sustainable development necessary?",
"options": [
{
"a": "False",
"b": "True",
}
],
"answer": "True",
"score": 0,
"status": ""
},
{
"id": 10,
"question": "What can you do as a citizen for development to be more sustainable?",
"options": [
{
"a": "reducing consumption of over-packaged products",
"b": "walking,driving,bicycling or using public transit instead of your car",
"c": "choosing a more energy-efficient automobile",
"d": "All of the above",
}
],
"answer": "All of the above",
"score": 0,
"status": ""
},
{
"id": 11,
"question": "The sdgs are focused on",
"options": [
{
"a": "The past",
"b": "The present",
"c": "The present and future",
"d":"The future",
}
],
"answer": "The present and future",
"score": 0,
"status": ""
},
{
"id": 12,
"question": "Which SDG aims to Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
"options": [
{
"a": "No poverty",
"b": "Life below water",
"c": "Life on land",
"d": "Affordable and clean energy",
}
],
"answer": "Life below water",
"score": 0,
"status": ""
},
{
"id": 13,
"question": "Which competency enables people to analyse future possibilities.",
"options": [
{
"a": "Strategic competency",
"b": "Critical thinking competency",
"c": "Anticipatory competency",
"d":"Normative competency",
}
],
"answer": "Critical thinking competency",
"score": 0,
"status": ""
},

]
}
var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.JS.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.JS[this.currentque].id + '.');
$("#question").html(quiz.JS[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.JS[this.currentque].options[0]) {
if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.JS[this.currentque].options[0][key] +
"</span></label>"
);
}
}
}
if (this.currentque <= 0) {
$("#previous").attr("disabled", true);
}
if (this.currentque >= totalque) {
$('#next').attr('disabled', true);
for (var i = 0; i < totalque; i++) {
this.score = this.score + quiz.JS[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.JS[j].score == 0) {
res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.JS[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.JS[this.currentque].answer) {
if (quiz.JS[this.currentque].score == "") {
quiz.JS[this.currentque].score = 1;
quiz.JS[this.currentque].status = "correct";
}
} else {
quiz.JS[this.currentque].status = "wrong";
}
}
this.changeQuestion = function (cque) {
this.currentque = this.currentque + cque;
this.displayQuiz(this.currentque);
}
}
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
jsq.displayQuiz(0);
$('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
//var radio = $(this).find('input:radio');
$(this).prop("checked", true);
selectedopt = $(this).val();
});
});
$('#next').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(1);
});
$('#previous').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(-1);
});