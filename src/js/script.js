editElelment(".toggle-btn", config)
editElelment(".close-btn", config)
editElelment(".acive-sidebar", config)

let cInfo = document.getElementById("container_info")
const $cards = createCards(formatDataCardsInfo(information))

$cards.forEach(element => {
    cInfo.appendChild(element)    
});