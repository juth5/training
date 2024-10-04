import flexboxDataLength from "./data.js";

let $flexBoxBody = {};
let flexBoxData = [];
let $js = {};
let jsData = [];
let jsDataLength = 13;
document.addEventListener('DOMContentLoaded', function() {

  for (let i = 1; i <= flexboxDataLength; i++) {
    let flexBoxUrl = `flexbox/lesson${i}.html`;
    flexBoxData.push(flexBoxUrl);
  }
  for (let i = 1; i <= jsDataLength; i++) {
    let jsUrl = `js/lesson${i}.html`;
    jsData.push(jsUrl);
    console.log(jsData)
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
  jsData.forEach((item, index) => {
    let $li = document.createElement('li');
    let $a = document.createElement('a');
    $a.href = item;
    $a.textContent = `lesson${index + 1}`;
    $li.appendChild($a);
    $js.appendChild($li);
    console.log($js,'ooo')
  });
  // $flexBoxBody.style.height = 0;
  // $flexBoxBody.style.overflow = "hidden";
});

let titleClick = () => {
  return ;
  $flexBoxBody.style.height = "289px";
  $flexBoxBody.style.overflow = "visible";
};
