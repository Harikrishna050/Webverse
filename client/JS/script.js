// student features
// let feats=document.querySelectorAll(".fa-angle-down");
// feats.forEach(function(feat){
//     feat.addEventListener("click",function(event){
//         event.target.parentElement.nextElementSibling.classList.toggle("active")
//         event.target.parentElement.parentElement.classList.toggle("active")
//         event.target.classList.toggle('fa-angle-up');
//     })
// })


let warden_feats = document.querySelectorAll(".fa-angle-down");
warden_feats.forEach(function (feat) {
    feat.addEventListener("click", function (event) {
        if (event.target.parentElement.nextElementSibling.classList.contains("courseOpt")) {
            let childrens = event.target.parentElement.nextElementSibling.children;
            for (let index = 0; index < childrens.length; index++) {
                childrens[index].classList.toggle("active");

            }
        }
        event.target.parentElement.nextElementSibling.classList.toggle("active")


        event.target.classList.toggle('fa-angle-up');
    })
})

let account=document.querySelector(".fa-user");
account.addEventListener("click",function(e){
    document.querySelector(".account").classList.toggle("active");
})

let notift=document.querySelector(".fa-bell");
notift.addEventListener("click",function(e){
    document.querySelector(".notification").classList.toggle("active");
    console.log("not")
})




