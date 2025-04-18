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
