const starE1=document.querySelectorAll(".fa-star")
console.log(starE1);

const emojiE1=document.querySelectorAll(".far")

const colors=["red","orange","lightblue","lightgreen","green"]

updateRating(0);

starE1.forEach((starE1,index)=>{
    starE1.addEventListener("click",()=>{
        // console.log("clicked",index)
        updateRating(index)
    })
})
function updateRating(index){
    starE1.forEach((starE1,idx)=>{
        if(idx<index+1){
            starE1.classList.add("active")
        }else{
            starE1.classList.remove("active")
        }
    })

    emojiE1.forEach((emojiE1)=>{
        emojiE1.style.transform=
        `translateX(-${index*50}px)`;
        emojiE1.style.color=colors[index]
    })
}