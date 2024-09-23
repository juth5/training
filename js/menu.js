import flexboxDataLength from "./data.js";

let pathname = window.location.pathname;
pathname = pathname.split("/")[1];
let $flexBoxBody = {};
let flexBoxData = [];
let flexBoxMenuHeight = 0;
let isOpen = false;

document.addEventListener('DOMContentLoaded', function() {
  let title = document.getElementById("title");
  title.innerHTML = `${pathname}のMenu`;
  
  for (let i = 1; i <= flexboxDataLength; i++) {
    let flexBoxUrl = `flexbox/lesson${i}.html`;
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
  
  flexBoxMenuHeight = $flexBoxBody.offsetHeight;
  // $flexBoxBody.style.height = 0;
  // $flexBoxBody.style.overflow = "hidden";
});
let hoge = () => {
  
};

document.getElementById('flexbox-title').addEventListener("click", () => {

  isOpen = !isOpen;

    if (isOpen) {
      $flexBoxBody.style.height = flexBoxMenuHeight + "px";
      $flexBoxBody.style.overflow = "visible";

    }
    else {
      $flexBoxBody.style.height = 0;
      $flexBoxBody.style.overflow = "hidden";
    }
});


