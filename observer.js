const options = {
  threshold: 0.8,
};

function callback(entries) {
  entries.forEach((entry) => {
    console.log(entry);
    const img = entry.target.querySelector(".experience__img");
    const info = entry.target.querySelector(".experience__info");
    img.classList.toggle("unset-1", entry.isIntersecting);
    info.classList.toggle("unset-2", entry.isIntersecting);
  });
}

const observer = new IntersectionObserver(callback, options);
const experience__box = document.querySelectorAll(".experience__box");

experience__box.forEach((el) => {
  observer.observe(el);
});
// observer.observe(experience__box);
