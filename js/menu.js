import flexboxDataLength from "./data.js";

let pathname = window.location.pathname;
pathname = pathname.split("/")[1];
let $flexBoxBody = {};
let flexBoxData = [];
let flexBoxMenuHeight = 0;
let isOpen = false;

let $js = {};
let jsData = [];
let jsDataLength = 50;

const currentUrl = window.location.href;


document.addEventListener('DOMContentLoaded', function() {
  let title = document.getElementById("title");
  title.innerHTML = `${pathname}のMenu`;

  for (let i = 1; i <= flexboxDataLength; i++) {
    let flexBoxUrl = `flexbox/lesson${i}.html`;
    flexBoxData.push(flexBoxUrl);
  }
  for (let i = 1; i <= jsDataLength; i++) {
    let jsUrl = `js/lesson${i}.html`;
    jsData.push(jsUrl);
  }

  $flexBoxBody = document.getElementById("flexbox-body");
  $js = document.getElementById("js-body");

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
  });
  
  flexBoxMenuHeight = $flexBoxBody.offsetHeight;

  console.log(currentUrl);
});


document.getElementById('flexbox-title').addEventListener("click", () => {

  isOpen = !isOpen;

    if (isOpen) {
      $flexBoxBody.style.height = flexBoxMenuHeight + "px";
      
      $flexBoxBody.style.transition = "height 0.5s ease"; // 高さの変更に0.5秒のアニメーションを適用

    }
    else {
      $flexBoxBody.style.height = 0;
      $flexBoxBody.style.transition = "height 0.5s ease"; // 高さの変更に0.5秒のアニメーションを適用

      $flexBoxBody.style.overflow = "hidden";
    }
});


