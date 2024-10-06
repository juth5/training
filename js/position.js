let $prev = {};
let $next = {};

document.addEventListener('DOMContentLoaded', function() {
  $prev = document.getElementById("prev");
  $next = document.getElementById("next");

  $prev.addEventListener('click', () => {
    window.location.href = `/templates/js/lesson${num - 1}.html`;  // 目的のURLを指定
  });
  $next.addEventListener('click', () => {
    window.location.href = `/templates/js/lesson${num + 1}.html`;  // 目的のURLを指定

  });
});
const currentUrl = window.location.href;
let url = currentUrl.split("/")[5];
let num = url.match(/\d+/);
num = Number(num);

let nextPage = () => {
  window.location.href = `/templates/js/lesson${num + 1}.html`;  // 目的のURLを指定

};

let prevPage = () => {
  window.location.href = `/templates/js/lesson${num - 1}.html`;  // 目的のURLを指定
};

