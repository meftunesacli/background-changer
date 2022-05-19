const body = document.querySelector("body")
const button = document.querySelector("button");
const colors=["blue","red","green","yellow","#821cd9","#18f0e5","#ff4dd2",];

button .addEventListener("click",changeBackground);
let sıra= 0;
function changeBackground() {
    //rastgele bir sayı
    /*
    const rastgeleSayı = Math.floor(Math.random() * colors.length);
    const secilenRenk = colors[rastgeleSayı];
    console.log(rastgeleSayı, secilenRenk);
    body.style.backgroundColor =secilenRenk;
    */
    //sırayla arkaplan rengi seç
    console.log(sıra);
    if (sıra==7) sıra = 0;
    const secilenRenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secilenRenk;

}