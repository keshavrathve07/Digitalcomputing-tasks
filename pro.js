var index = 0
 function changebackgroundcolor(){
 document.body.style.backgroundColor = colors[index]; index = index + 1 
 if (index == 4) index = 0
 console.log("working") 
 const colors = ['#ff5733','#33ff57','#ff33a1', '#ffff33','#3357ff'];



}