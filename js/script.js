var shareStatus = false;

const mobileShareButton = document.querySelector(".mobile>.share");
const mobileShareScreen = document.querySelector(".mobile");


mobileShareButton.addEventListener('click', () => {
    mobileShareScreen.classList.toggle("active");
})