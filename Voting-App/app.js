
let CreateCard = () => {
  try {
    let CardArray = [];
    let LocalStorageData = JSON.parse(localStorage.getItem('card-data'));//Main check karon k wo empty hai k nahi
    let Name = document.querySelector('.Name').value;
    let ImageUrl = document.querySelector('.ImageUrl').value;
    let CardContainer = document.querySelector('.CardContainer');
    let CardObject = new Object();
    CardObject.Name = Name;
    CardObject.ImageUrl = ImageUrl;
    CardObject.Id = Math.floor(Math.random() * 1000);
    CardObject.Points = 0;

    //Agar Reload Hoo Jae
    if (CardObject.Name === '' || CardObject.ImageUrl === '') {
      let TemporaryLocalStorage = JSON.parse(localStorage.getItem('card-data'));
      TemporaryLocalStorage.forEach(element => {
        CardContainer.innerHTML += `
        <div class="col mx-3 my-3">
        <div class="card" style="width: 18rem;">
        <img src="${element.ImageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <p>Name: ${element.Name}</p>
          <p>Points: ${element.Points}</p>
        </div>
            </div>
        </div>
    `
      })
      return
    }

    if (LocalStorageData === null || LocalStorageData.length === 0) {
      // CardArray = [];
      CardArray.push(CardObject);
      localStorage.setItem('card-data', JSON.stringify(CardArray));
      CardContainer.innerHTML = `
    <div class="col mx-3 my-3">
          <div class="card" style="width: 18rem;">
          <img src="${CardArray.ImageUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <p>Name: ${CardArray.Name}</p>
            <p>Points: ${CardArray.Points}</p>
          </div>
              </div>
          </div>
    `
      return
    }

    if (LocalStorageData.length !== 0) {
      // CardArray = [];
      LocalStorageData.forEach(element => {
        CardArray.push(element);
      });
      CardArray.push(CardObject);
      console.log(CardArray);
      localStorage.setItem('card-data', JSON.stringify(CardArray));
      let TemporaryLocalStorage = JSON.parse(localStorage.getItem('card-data'));
      TemporaryLocalStorage.forEach(element => {
        CardContainer.innerHTML += `
          <div class="col mx-3 my-3">
          <div class="card" style="width: 18rem;">
          <img src="${element.ImageUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <p>Name: ${element.Name}</p>
            <p>Points: ${element.Points}</p>
          </div>
              </div>
          </div>
    `
      })
      return
    }
  } catch (error) {
    console.log(error);
  }
}