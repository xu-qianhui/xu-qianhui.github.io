const filterButtons = document.querySelectorAll(".filter-btn");
const researchItems = document.querySelectorAll(".research-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    researchItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.type === filter;
      item.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const abstractButtons = document.querySelectorAll(".abstract-toggle");

abstractButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    panel.hidden = isExpanded;
    button.textContent = isExpanded ? "Abstract" : "Hide abstract";
  });
});
