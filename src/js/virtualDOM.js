/**
 * CREATE ELEMENT
 */

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

  function formatDataCardsInfo(info) {
    return info.map(e => {
        let { title, body } = e
        return {
            body: [
                { tag: "h3", content: title },
                { tag: "div", attributes: { class: "divider" } },
                { tag: "p", content: body}
            ]
        }
    })
  }
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