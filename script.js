function bg(color){
   document.body.style.backgroundColor=color;
   let text=document.getElementsByClassName("text");
if(color=="#000000"){
   for(let element of text){
element.style.color="white"}}
   else{
      for(let element of text){
         element.style.color="black"
   }
}
}