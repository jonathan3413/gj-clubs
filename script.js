document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("memberModal");
    const modalName = document.getElementById("modalName");
    const modalQuote = document.getElementById("modalQuote");
    const closeBtn = document.querySelector(".close-btn");

    const cards = document.querySelectorAll(".member-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const name = card.querySelector("h3").innerText;
            const quote = card.querySelector("p").innerText;

            modalName.innerText = name;
            modalQuote.innerText = `"${quote}" - Member GJ Circle`;
            
            modal.style.display = "block";
            // Timeout kecil untuk memicu transisi CSS
            setTimeout(() => { modal.classList.add("show"); }, 10);
        });
    });

    const closeModal = () => {
        modal.classList.remove("show");
        setTimeout(() => { modal.style.display = "none"; }, 300);
    };

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
        if (e.target == modal) closeModal();
    });
});
