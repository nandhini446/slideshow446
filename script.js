var slide=1;
show (slide);
function nextslide(n){
    show(slide +=n);
}
function prevslide(n){
    show (slide -=n);
}

function show(n){
    var i=0;
    var slide_img=document.getElementsByClassName('slide');
    for(i=0;i<slide_img.length;i++){
        slide_img[i].style.display="none";
    }
    if(n>slide_img.length){
        slide=1;
    }
    slide_img[slide-1].style.display="block";
    console.log(slide_img.length);

}