var pic2 = $(".Nyomi");

//event listener
pic2.on("mouseover", showPic2);
pic2.on("mouseout", showPic1);

//event handler
function showPic2(){
    pic2.attr("src", "assets/Nyomi.jpeg"); 
 }

function showPic1(){
    pic2.attr("src", "assets/Nyomi2.png");
 }

var aaroheePic = $(".Aarohee");

aaroheePic.on("mouseover" , showAlternate);
aaroheePic.on("mouseout" , showOriginal);

function showAlternate(){
    aaroheePic.attr("src" , "assets/Aaroheehover.jpg")
}

function showOriginal(){
    aaroheePic.attr("src" , "assets/Aarohee.jpeg")
}

// var bullets = $(".bulletArtForms");

// bullets.on("mouseover" , changeFont);

// function changeFont(){
//     body.css: ("font-color" , "blue")
// }