const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const products = [
    {
        title: 'product1',
        description: 'pf[boiseipojjaoenpgk',
        imageUrl: 'yeet.png',
        size: '4" x 4"',
        weight: '8oz',
        price1: '$4.20',
        price2: '$3.33',
        price3: '$1.69',
        validUntil: '11/1/1963'
    },
    {
        title: 'product2',
        description: 'pf[boiseipojjaoenpgk',
        imageUrl: 'yeet.png',
        size: '4" x 4"',
        weight: '8oz',
        price1: '$4.20',
        price2: '$3.33',
        price3: '$1.69',
        validUntil: '11/1/1963'
    },
    {
        title: 'product3',
        description: 'pf[boiseipojjaoenpgk',
        imageUrl: 'yeet.png',
        size: '4" x 4"',
        weight: '8oz',
        price1: '$4.20',
        price2: '$3.33',
        price3: '$1.69',
        validUntil: '11/1/1963'
    },
    {
        title: 'product4',
        description: 'pf[boiseipojjaoenpgk',
        imageUrl: 'yeet.png',
        size: '4" x 4"',
        weight: '8oz',
        price1: '$4.20',
        price2: '$3.33',
        price3: '$1.69',
        validUntil: '11/1/1963'
    },

    {
        title: 'product5',
        description: 'pf[boiseipojjaoenpgk',
        imageUrl: 'yeet.png',
        size: '4" x 4"',
        weight: '8oz',
        price1: '$4.20',
        price2: '$3.33',
        price3: '$1.69',
        validUntil: '11/1/1963'
    }
];

buildProducts = (ps) =>{
    let domString = '';
    ps.forEach((p)=>{

        domString += `<div class='container col-md-4 row align-items-center'>`;
        domString += `<h2>${p.title}</h2>`;
        domString +=            `    <div class="card">`;
        domString += `<div class="card-header"> featured </div>`
        domString +=             `   <img src=${p.imageUrl} class="card-img-top" alt="...">`;
        domString +=             `  <div class="card-body">`;
        domString +=              `  <p class="card-text">${p.description}</p>`;
        domString +=              ` </div>`;
        domString +=               ` </div>`;
        domString += `</div>`;
    });
    printToDom('productCard',domString);
};

const init = () =>{
    buildProducts(products);
};

init();
