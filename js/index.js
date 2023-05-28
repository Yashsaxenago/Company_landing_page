var wraper=document.querySelectorAll('.wraper');
var btn=document.querySelector('btn1');
var currenting=6;
btn1.addEventListener('click',
function(){
  for(var i=currenting;i<currenting+3;i++){
    if(wraper[i]){
      wraper[i].style.display='block';
    }
  }
  currenting +=3;
  if(currenting>=wraper.length){
    event.target.style.display='none';
  }
});