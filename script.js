const like=document.getElementById("like")
const disLike=document.getElementById("disLike")

const initLikes =33
const initDisLikes =5



let likeCount =initLikes
let disLikeCount =initDisLikes

like.innerText="👍 "+likeCount
disLike.innerText="👎 "+disLikeCount
function handleLike(){
    likeCount++
    like.innerText="👍 "+likeCount
    disable()
    setCookie()
}



function handleDisike(){
    disLikeCount++
    disLike.innerText="👎 "+disLikeCount
    disable()
    setCookie()
    
}

function disable(){
    like.disabled=true;
    disLike.disabled=true;
}

function setCookie(){
document.cookie = "voted=true; sameSite=Strict; Max-Age=20"
}


window.onload = function(){

    if(document.cookie && document.cookie.indexOf("voted")> -1){
    
    
    disable();
    }
    }