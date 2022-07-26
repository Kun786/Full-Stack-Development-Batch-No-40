// const valuesCards = [
//     { 
//     image: '../img/image1.png', 
//     title: 'title 1', 
//     content: 'super content 1',
//     },
//     {
//     image: '../img/image2.png', 
//     title: 'title 2', 
//     content: 'super content 2'
//     },
//     { 
//     image: '../img/image-3.png', 
//     title: 'title3', 
//     content: 'blablablablbalbalbabla blablaba'
//     },
//    ]
// valuesCards.map(card=> {
//   var cardDiv = document.createElement('div');
//   cardDiv.innerHTML = `
//                 <div class="product-header">
//                   <img src="${card.image}"/>
//                 </div>
//                 <div class="product-content">
//                   <h4>${card.title}</h4>
//                   <p>${card.content}</p>
//                 </div> 
//                 <button class="info-button">+ info</button>`
//   document.getElementsByClassName('products-cards')[0].appendChild(cardDiv);
// })

let CreateCard = () => {
    let Name = document.querySelector('.Name').value;
    let ImageUrl = document.querySelector('.ImageUrl').value;
    let CardObject = new Object();
    CardObject.Name = Name;
    CardObject.ImageUrl = ImageUrl;
    CardObject.Id = Math.floor(Math.random() * 1000);
    CardObject.Points = 0;
    
    
    


    let CardContainer = document.querySelector('.CardContainer');
    CardContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${CardObject.ImageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <p>Name: ${CardObject.Name}</p>
      <p>Points: ${CardObject.Points}</p>
    </div>
        </div>
    `
}