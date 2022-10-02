let gunler = ["Pazar", "Salı", "Çarşamba", "Perşembe", "Cuma","Cumartesi"];
let namee = document.querySelector("#myName");
namee.innerHTML = prompt("Adınızı Giriniz")
let clock = document.querySelector("#myClock")

function dsaat () {
    let diji = new Date();
    let gun = gunler[diji.getDay()];
    let saat = diji.getHours();
    let dakika = diji.getMinutes();
    let saniye = diji.getSeconds();

    clock.innerHTML = `${saat} : ${dakika} : ${saniye}`

}
setInterval(dsaat, 1000);