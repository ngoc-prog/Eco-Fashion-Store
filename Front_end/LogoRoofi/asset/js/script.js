const sliderItem = document.querySelectorAll('.slider-item')
for (let index= 0; index <sliderItem.length; index++) {
    
    sliderItem[index].style.left = index * 100 + "%"

}

const sliderItems = document.querySelector('.slider-items')
const arrowRight = document.querySelector('.ri-skip-right-fill')
const arrowLeft = document.querySelector('.ri-skip-left-fill')
let i = 0

arrowRight.addEventListener('click',()=>{
    i++
    if (i < sliderItem.length -1) {
        silerMove(i)
    }
    else {
        return false
    }

}) 

arrowLeft.addEventListener('click',() =>{
if(i<0){
    return false
}
{
    i--
    silerMove(i)
}
})

function autoSlider(){
    if(i<sliderItem.length)
    {
        i++
        silerMove(i)
    }
    else{
        i=0
    }

}
function silerMove(i){
    sliderItems.style.left = -i*100+"%"
}
setInterval(autoSlider,5000)