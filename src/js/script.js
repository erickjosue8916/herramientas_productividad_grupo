editElelment(".toggle-btn", config)
editElelment(".close-btn", config)
editElelment(".acive-sidebar", config)

let cInfo = document.getElementById("container_info")
const $cards = createCards(formatDataCardsInfo(information))

$cards.forEach(element => {
    cInfo.appendChild(element)    
});

const banner = document.querySelector(".hero")
function changeBackground(el, bg) {
    console.log(el, bg)
    el.style.background = bg
    el.style.backgroundSize = "cover"
    el.style.backgroundPosition = "center"
    el.style.backgroundAttachment = "fixed"
}

let i = 0

setInterval(() => {
    i = (i == slider.length - 1) ? 0: i + 1;
    changeBackground(banner, slider[i])
}, 5000)