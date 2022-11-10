console.log('what uppppp')





const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

const imgDiv = document.getElementById ("dog-image-container");
const breedUl = document.getElementById("dog-breeds");

// challenge 1 below
const request = async () => {
  let req = await fetch (imgUrl)
  let res = await req.json()
  addImageElements(res.message)
}
request() 

const addImageElements = (imgArr) => {
  imgArr.forEach(addImage)
}
const addImage = (picpicUrl) => {
  const dogImg = document.createElement("img")
  dogImg.src = picpicUrl
  imgDiv.append(dogImg)
}
// fetch (imgUrl) 
//  .then ((res) => res.json())
//  .then ((data) => addImageElements (data.message))
//  .catch ((err) => console.log (err));
// function addImageElements(imgArr) {
//   imgArr.forEach(addImage)
// }
// function addImage(imgaUrl) {
//   const dogImg = document.createElement("img")
//   dogImg.src = imgaUrl
//   imgDiv.append(dogImg)
// }
// challenge two below
// const request2 = async () => {
//   let req2 = await fetch(breedUrl)
//   let res2 = await req2.json()
//   addBreedsListItems(res2.message)
// }
// request2()
fetch(breedUrl)
  .then((res) => res.json())
  .then((data) => addBreedListItems(data.message));

function addBreedListItems(itemObject) {
  const itemKeys = Object.keys(itemObject);
  itemKeys.forEach((item) => addBreedItem(item, itemObject[item]));
}

function addBreedItem(breed, subBreeds) {
  addBreed(breed);
  subBreeds.forEach((sb) => addBreed(`${sb} ${breed}`));
}

function addBreed(breed) {
  const breedLi = document.createElement("li");
  breedLi.innerText = breed;
  breedUl.append(breedLi);
}
// //function addBreedListItems (items) {
//   //const itemKeys = Object.keys(items);

//   itemKeys.forEach (key) => {
//     const breedLi = document.createElement("li")
//     breedLi.innerText = key;
//     breedUl.append(breedLi)
//   }
// }




//trying arrow and async




//   imgArr.forEach(img) => {

//     const dogImg = document.createElement ("img")
//     dogImg.src = img
//     imgDiv.append(dogImg);
//   }
//  }

//  fetch (breedUl)
//  .then ((res) => res.json())
//  .then ((req2) => addBreedListItems (req2.message))



// fetch(imgUrl)
//  .then((res) => res.json())
//  .then(renderDogPhotos)
//  .catch(err => console.log(err))


// function renderDogPhotos (json) {
  //   const dogPhotos = json.message
  //   dogPhotos.forEach(renderDogPhoto)
  // }
  
  // function renderDogPhoto (photoUrl) {
    //   const photo = document.createElement('img')
    //   photo.src = photoUrl
    //   dogImageContainer.append(photo)
    // }
    
//     const request = async () => {
//       let req = await (imgUrl)
//       let res = await req.json()
//       let req2 = await (breedUrl)
//       let res2 = await req2.json()
//       let img = document.createElement("img")
//       img.src = imgUrl.message
//       res.forEach (dogImageContainer)
//       // res2.forEach (dogBreedContainer)
// }





// fetch (breedUrl) 
//   .then ((res) => res.json())
//   .then (renderBreeds)
//   .catch(err => console.log(err))

//   function renderBreeds (json) {
//     const dogBreeds = json.message
//     dogBreeds.forEach(renderBreed)
// }
// function renderBreed (breedUrl) {
//   const ul = document.createElement ('li')
//   breed.src = breedUrl
//   dogBreedContainer.append(breed)
// }














// const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
// const dogDiv = document.getElementById("dog-image-container")

// const grabImgs = async () => {
//   let req = await fetch(imgUrl);
//   let res = await req.json();
//   res.forEach ((dog) => {
//   let img = document.createElement ("img")
//   img.src = dog.message
//   dogDiv.append(img)
  
// });
// }
// grabImgs()