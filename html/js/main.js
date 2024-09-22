
let $flexBoxBody = {};
let flexBoxData = [];
let flexBoxLessonNumber = 0;
let flexBoxTotalQuestionNumber = 12;

document.addEventListener('DOMContentLoaded', function() {
  for (let i = 1; i <= flexBoxTotalQuestionNumber; i++) {
    flexBoxLessonNumber = i;
    let flexBoxUrl = `flexbox/lesson${flexBoxLessonNumber}.html`;
    flexBoxData.push(flexBoxUrl);
  }
  $flexBoxBody = document.getElementById("flexbox-body");

  flexBoxData.forEach((item, index) => {
    let $li = document.createElement('li');
    let $a = document.createElement('a');
    $a.href = item;
    $a.textContent = `lesson${index + 1}`;
    $li.appendChild($a);
    $flexBoxBody.appendChild($li);
  });
  $flexBoxBody.style.height = 0;
  $flexBoxBody.style.overflow = "hidden";
});

let titleClick = () => {
  $flexBoxBody.style.height = "289px";
  $flexBoxBody.style.overflow = "visible";
};
