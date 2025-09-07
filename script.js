// Theme toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Modal
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

function openModal(e, btn) {
  const title = btn.parentElement.querySelector("strong").innerText;
  modalContent.innerHTML = `<h2>${title}</h2><p>This is a demo modal popup for project details.</p>`;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

// Filters
const filterButtons = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    cards.forEach(card => {
      if (filter === "all" || card.dataset.tags.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Contact form
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", e => {
  e.preventDefault();
  formStatus.innerText = "Message sent (demo)!";
  form.reset();
});
