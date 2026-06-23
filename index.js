import blogsData from "./blogData.js"
import getBlogsCards from "./utils/blogsCards.js"
const mainContent = document.querySelector('.main-content')



document.body.addEventListener('click' , function(e){
         if(e.target.dataset.uuid){
            localStorage.setItem("renderId" , JSON.stringify(e.target.dataset.uuid))
         }
})

function render(){
    
  mainContent.innerHTML = getBlogsCards(blogsData) 

}
render()

