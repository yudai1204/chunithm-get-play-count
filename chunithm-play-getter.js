let str1 = "";
let str2 = "";
let num = document.getElementsByName("idx").length;
let i = 0;
setInterval(function(){
    const formData = new FormData(document.querySelectorAll("form")[i + 1]);
    fetch("https://new.chunithm-net.com/chuni-mobile/html/mobile/record/musicGenre/sendMusicDetail/", {
        method: "POST",
        cache: "no-cache",
        body: formData
    }).then(res => res.text())
        .then((text) => {
            const doc = new DOMParser().parseFromString(text, "text/html");
            const mas = doc.querySelectorAll(".bg_master .text_b");
            if (mas[1]) {
                str1 += doc.querySelector(".play_musicdata_title").innerHTML + "\n";
                str2 += mas[1].innerHTML + "\n";
            }
            console.log(doc.querySelector(".play_musicdata_title").innerHTML + ": " + mas[1].innerHTML);
            if (true || i == num - 1) {
                console.log(str1);
                console.log(str2);
            }
            sleep(2000); 
        })
    i++;
},2000);