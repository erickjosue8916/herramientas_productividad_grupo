const information = [ // JSON
    {
        title: "Misión",
        body: `hdksdksdh`
    },
    {
        title: "Visión",
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled`
    },
    {
        title: "Historia",
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled`
    }
]

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

console.log(formatDataCardsInfo(information))