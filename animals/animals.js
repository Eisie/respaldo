let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta");
let modal = document.querySelectorAll(".modala")[0];
let modalC = document.querySelectorAll(".modal-containera")[0];

const enlaces = ["fjVt02OibAA?start=16", "U2wd-gO9tuY", "ntb_RQD9aSU?t=57", "67EbYNCaQ1Y?start=15", "b0WKMcy0LVI?start=t=7"];  

abrir.forEach((item, index) => {
	item.addEventListener("click", function(e){
		e.preventDefault();
		modalC.style.opacity= "1";
		modalC.style.visibility= "visible";
		modal.classList.toggle("modal-close");
		document.getElementById("video-youtube").src = "https://www.youtube.com/embed/" + enlaces[index];
	});
});
cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    modalC.style.opacity= "0";
    modalC.style.visibility="hidden";

})



