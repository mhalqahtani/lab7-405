let asyBtn = document.getElementById('fetchAsync');
let input = document.getElementsByTagName("input")[0];
let searchResults = document.getElementById("searchResults");
let fetchPromiseBtn = document.getElementById('fetchPromise');
let xhrBtn = document.getElementById('XMLHTTP');
const apiKey = "YTYYEE7UoFraVgtjAE8BHkmihtLQ09DM";





xhrBtn.addEventListener("click", function() {


  searchResults.innerHTML = "";
  let q =input.value
  getImagesByxhr(q)

});




function getImagesByxhr(q){
let images = []
  let xhr = new XMLHttpRequest();

  let url ="https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&q="+q;

xhr.onreadystatechange = function(){

  if(xhr.readyState === 4 && xhr.status === 200){
    let texts = xhr.responseText;
    let objcts = JSON.parse(texts)

processResponse(objcts.data)
  }

}
xhr.open("GET",url,true)
xhr.send();
}




fetchPromiseBtn.addEventListener("click", function() {

    searchResults.innerHTML = "";

let q =input.value
getImagesByFetch(q)


  });


function getImagesByFetch(q){

let url ="https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&q="+q;


fetch(url)
.then((response)=>{
return response.json();

})
.then((respObj)=>{
  processResponse(respObj.data)

})
.catch((e)=>{

    console.log(e)
})

}





asyBtn.addEventListener("click", function() {

  searchResults.innerHTML = "";
  FetchAsyncAwait(input.value)
    .catch((e) => {
      console.error(e);
    });
});

async function FetchAsyncAwait(keyword) {
  var url = "https://api.giphy.com/v1/gifs/search";

  var params = "api_key=" + apiKey + "&limit=5&q=" + encodeURIComponent(keyword);
  if (!keyword) {
    return;
  }
  var requestOptions = {
    method: 'GET'
  };

  const response = await fetch(url + "?" + params, requestOptions); 
  const Obj = await response.json(); 
  processResponse(Obj.data);
}

function processResponse(respObj) {
  for (item of respObj) {
    let imgElement = document.createElement("img");
    imgElement.src = item.images.downsized_medium.url;
    imgElement.alt = item.title;
    searchResults.appendChild(imgElement);
  }

}