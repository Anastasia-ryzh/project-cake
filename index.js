const orderBtns = document.querySelectorAll(".but");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".button-close");

const form = document.querySelector('.form');
const formBtn = document.querySelector('.form-btn');

orderBtns.forEach(but => {
    but.addEventListener("click", () => {
        modal.classList.add('active');
        document.body.classList.add('no-scroll');
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
});
