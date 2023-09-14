function addPixels(size){
    pixel=document.createElement('div')
    pixel.classList.add('pixel')
    pixel.setAttribute('draggable','false')
    pixel.style.width=size+"px"
    pixel.style.height=size+"px"
    document.getElementById('canvas').appendChild(pixel)
    pixel.addEventListener("mouseover",function(mouse){
        if(mouse.buttons==1){
            this.style.backgroundColor=document.getElementById("color").value
        }
    })
    pixel.addEventListener("mousedown",function(){
        this.style.backgroundColor=document.getElementById("color").value
    })
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function updateCanvas(size){
    document.getElementById('canvas').innerHTML=""
    document.getElementById("canvasSizeNumber").innerHTML=size+"x"+size
    canvasSize=500
    document.getElementById('canvas').style.gridTemplateRows=`repeat(${size},${canvasSize/size}px)`
    document.getElementById('canvas').style.gridTemplateColumns=`repeat(${size},${canvasSize/size}px)`
    for(i=0;i<size*size;i++){
        addPixels(canvasSize/size,size)
    }
}
function clear(){
    pixels=document.querySelectorAll(".pixel")
    for(i=0;i<pixels.length;i++){
        pixels[i].style.backgroundColor="white"
    }
}
function rainbowMode(){
    if(document.getElementById("rainbowMode").checked){
        rainbow=setInterval(()=>{
            pixels=document.querySelectorAll(".pixel")
            for(i=0;i<pixels.length;i++){
                pixels[i].style.backgroundColor=getRandomColor()
            }
        })
    }else{
        clearInterval(rainbow)
    }
}
document.getElementById("rainbowMode").onchange=rainbowMode
document.getElementById("clear").addEventListener("click",clear)
sizeSlider=document.getElementById("sizeSlider")
updateCanvas(sizeSlider.value)
sizeSlider.oninput=()=>{
    updateCanvas(sizeSlider.value)
}