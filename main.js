function show(){
    var bar=document.querySelector('.nav_center_mobile')
    bar.style.transform='translateX(0%)';
}
function closenav(){
    var bar=document.querySelector('.nav_center_mobile')
    bar.style.transform='translateX(-100%)';
}
var count=0;
var add_subnav=document.querySelector('.click_subnav_mobile');
var subnav=document.querySelector('.sub_nav_mobile');
var down=document.querySelector('.down');
var up=document.querySelector('.up');
add_subnav.addEventListener('click',function(){
   
    count++;
    if(count%2!=0){
        subnav.style.display='block';
        down.style.display='none';
        up.style.display='inline-block';
    }else{
        subnav.style.display='none';
        down.style.display='inline-block';
        up.style.display='none';
    }

});