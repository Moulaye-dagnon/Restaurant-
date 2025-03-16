const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const choose = document.getElementById("number").value;
  const date = document.getElementById("date").value;

  alert("Mon nom est " + name + "et nous sommes " + choose + "pour le " + date);
  console.log(inputV);
  console.log(choose);
});

ratio = 0.3;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};
const callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      console.log("visible");
      entry.target.classList.remove("anim");
      t.unobserve(r);
    }
  });
};
const clas = document.querySelectorAll(".anim").forEach((r) => {
  const t = new IntersectionObserver(callback, options);
  t.observe(r);
});
