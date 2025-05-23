document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = parseFloat(counter.innerText) || 0;
      const increment = target / 100;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
});
