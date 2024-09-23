let pathname = window.location.pathname;
pathname = pathname.split("/")[1];

document.addEventListener('DOMContentLoaded', function() {
  let title = document.getElementById("title");
  title.innerHTML = `${pathname}のMenu`;
});