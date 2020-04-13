function createElementDOM(element) {
    let {tag, attributes, content} = element
    let e = document.createElement(tag);
    if (attributes) {
        for (const attr in attributes) {
            e.setAttribute(attr, attributes[attr])
        }
    }
    if (content) {
        console.log('hay content')
        e.textContent = content
    }
    return e
}

function createCard(card) {
    let { body } = card
    let $body = createElementDOM({ tag: "div", attributes: { class: "card-body" } });
    let $card = createElementDOM({ tag: "div", attributes: { class: "card" } });
    body.forEach(element => {
        $body.appendChild(createElementDOM(element))
    });
    $card.appendChild($body)
    return $card
}

function createCards(cards) {
    let $cards = []
    
    cards.forEach(element => {
        let $wrapper = createElementDOM({ tag: "div", attributes: { class: "grid-center" } });
        $wrapper.appendChild(createCard(element))
        $cards.push($wrapper)
    });
    
    return $cards;
}

let cards = [
    {
        body: [
            { tag: "h3", content: "Mision" },
            { tag: "div", attributes: { class: "divider" } },
            { tag: "p", content: "Mision"}
        ]
    },
    {
        body: [
            { tag: "h3", content: "Mision" },
            { tag: "div", attributes: { class: "divider" } },
            { tag: "p", content: "Mision"}
        ]
    }
]

//createCard(card)
let testDOM = document.getElementById("testing")
const $cards = createCards(cards)
$cards.forEach(element => {
    testDOM.appendChild(element)    
});
//testDOM.appendChild(createCards(cards))