// DOM = Document Object Model

/**
 * GET ATTRIBUTE
 */
function getAtribute(selector, param) {
    const el = document.getElementById(selector);
    console.log(el)
    return el[param]
}

/**
 * EDIT ELEMENT PROPERTIES
 *  
 * */
function editElelment(selector, config) {
    const el = document.querySelectorAll(selector);
    el.forEach(element => {
        const { toggle, styles, text, listeners } = config;
        if (toggle) {
            toggle.forEach(clase => {
                console.log(element, toggle)
                element.classList.toggle(clase)
            });
        }

        if (styles) {
            for (const style in styles) {
                element.style[style] = styles[style]
            }
        }

        if (text) {
            element.innerHTML = text
        }

        if (listeners) {
            for (const event in listeners) {
                element.addEventListener(event, listeners[event])
            }
        }
    });
}
const config = {
    toggle: [ "green", "big" ],
    styles: {
        height: "200px"
    }
}
const config2 = {
    text: "hola"
}

const config3 = {
    listeners: {
        click: () => {
            const value = getAtribute("input-text", "value")
            const $e = createElementDOM({ tag: "option", attributes: { value },  content: value });
            console.log($e)
            const $selector = document.getElementById("selector")
            $selector.appendChild($e)
            editElelment("#text", {text: `el valor de input-text es: ${getAtribute("input-text", "value")}`})
        }
    }
}
editElelment("#caja", config)
editElelment("#text", config2)
editElelment("#btn", config3)


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
            { tag: "p", content: "Mision"},
            { tag: "button", attributes: { class: "button-round" }, content: "Link"}
        ]
    }
]



/*
const h1 = document.createElement('h1')
h1.setAttribute("class", "title")
h1.textContent = "contenido del h1"
console.log(h1)
*/
//createCard(card)
let testDOM = document.getElementById("testing")
// formatDataCardsInfo(information)
const $cards = createCards(formatDataCardsInfo(information))

$cards.forEach(element => {
    testDOM.appendChild(element)    
});

//testDOM.appendChild(createCards(cards))