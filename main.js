const main = document.querySelector(".qr-code"),
    btn = main.querySelector(".form button"),
    input= main.querySelector(".form input"),
    image= main.querySelector(".img img");

btn.addEventListener("click" , ()=>{
    let valueinput=input.value;
    if(!valueinput) return;
    btn.innerHTML="Generating QR Code..."
    image.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${valueinput}`
    image.addEventListener("load",()=>{
        main.classList.add("active");
        btn.innerHTML="Generate QR Code";
    })
});
input.addEventListener("keyup",()=>{
    if(!input.value){
        main.classList.remove("active");
    }
});