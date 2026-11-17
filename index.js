console.log("JavaScript is connected!");

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const content = document.querySelector("." + button.dataset.target);

        if (content) {
            const isOpen = content.classList.toggle("hidden") === false;
            button.setAttribute("aria-expanded", isOpen);
        }
    });
});