document
  .getElementById("languageToggle")
  .addEventListener("click", function () {
    // বাংলা কন্টেন্ট টগল করুন
    const bnElements = document.querySelectorAll(".lang-bn");
    bnElements.forEach((el) => {
      el.classList.toggle("d-none");
    });

    // ইংরেজি কন্টেন্ট টগল করুন
    const enElements = document.querySelectorAll(".lang-en");
    enElements.forEach((el) => {
      el.classList.toggle("d-none");
    });

    // ভাষা ইনপুট ফিল্ড টগল করুন
    document.querySelectorAll('input[lang="bn"]').forEach((el) => {
      el.classList.toggle("d-none");
    });
    document.querySelectorAll('input[lang="en"]').forEach((el) => {
      el.classList.toggle("d-none");
    });

    // সিলেক্ট বক্স টগল করুন
    document.querySelectorAll("select.lang-bn").forEach((el) => {
      el.classList.toggle("d-none");
    });
    document.querySelectorAll("select.lang-en").forEach((el) => {
      el.classList.toggle("d-none");
    });
  });
document.querySelectorAll(".lang-bn").forEach((el) => {
  el.classList.add("d-none");
});

document.querySelectorAll(".lang-en").forEach((el) => {
  el.classList.remove("d-none");
});

// Activate Bootstrap tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
// Initialize Bootstrap tooltips
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// Add animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const featureCards = document.querySelectorAll(".feature-card");

  featureCards.forEach((card, index) => {
    // Add animation delay based on index
    card.style.animationDelay = `${index * 0.1}s`;

    // Add hover effect
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});
