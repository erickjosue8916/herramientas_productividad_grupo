const config = { 
    listeners: {
      click: () => {
        const toggle = ["active"]
        editElelment("#sidebar", { toggle })
      }
    }
  }
  
  const information = [ 
    {
        title: "Misión",
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled`
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