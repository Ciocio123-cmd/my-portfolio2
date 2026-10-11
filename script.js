
const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

const projectLinks = document.querySelectorAll(
  'a[href^="#"]'
);

projectLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log("Navigation clicked:", link.textContent);
  });
});
      
