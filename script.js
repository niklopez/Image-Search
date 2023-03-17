//event listerners
document.querySelector("#button").addEventListener("click",displayImages);
displayBackground();
  




async function displayImages(){
  let keyword = document.querySelector("#keyword").value;
  let errorMsg = document.querySelector("#incorrectInput");

  console.log(keyword);
  console.log(keyword.length);
  if(keyword.length < 3){
    errorMsg.style.display = "block";
    return;
  }

  errorMsg.style.display = "none";
  
  let orientation = document.querySelector("input[name=flexRadioDefault]:checked").value;

  console.log(orientation);

  let url = `https://api.unsplash.com/photos/random/?client_id=OvVROpgzyveoKZW-Ulh230AoQenbKLOQNkwrJQrmKbs&featured=true&query=${keyword}&orientation=${orientation}&count=3&content_filter=high`;
  console.log(url);
  let response = await fetch(url);
  let data     = await response.json();
  console.log(data[0].urls.small);

  document.querySelector("#imageContainer").innerHTML = `<span>
      Likes: ${data[0].likes} <br> 
      <img src="${data[0].urls.small}"> <br> 
      ${data[0].description} <br>
    </span>`;

  document.querySelector("#imageContainer2").innerHTML = `<span>
      Likes: ${data[1].likes} <br>
      <img src="${data[1].urls.small}"> <br>
      ${data[1].description} <br>
    </span>`;

  document.querySelector("#imageContainer3").innerHTML = `<span>
        Likes: ${data[2].likes} <br> 
        <img src="${data[2].urls.small}"> <br> 
        ${data[2].description} <br>
    </span>`;
  
}

async function displayBackground(){
      console.log("displaying background image")
    let random = ["trees", "flowers", "ocean", "panda", "eggs"];
    pickNum = random[Math.floor(Math.random()*5)];
console.log(pickNum);

   let url = `https://api.unsplash.com/photos/random/?client_id=OvVROpgzyveoKZW-Ulh230AoQenbKLOQNkwrJQrmKbs&featured=true&query=${pickNum}&orientation=landscape&count=1&content_filter=high`;
    //API Key: OvVROpgzyveoKZW-Ulh230AoQenbKLOQNkwrJQrmKbs
    let response = await fetch(url);
    let data = await response.json();
    console.log(data[0].urls.regular);
    document.querySelector("#body").style.backgroundImage =`url(${data[0].urls.regular})`;
    document.querySelector("#body").style.backgroundSize = "cover";
}


