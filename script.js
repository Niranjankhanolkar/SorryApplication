const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const againBtn = document.getElementById("againBtn");

const hearts = document.getElementById("hearts");
const confetti = document.getElementById("confetti");

/* ---------- Continue ---------- */

nextBtn.addEventListener("click", () => {

    page1.classList.add("hidden");
    page2.classList.remove("hidden");

});

/* ---------- No Button Runs Away ---------- */

function moveButton() {

    const card = document.getElementById("page2");

    const cardRect = card.getBoundingClientRect();

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const x = Math.random() * (cardRect.width - btnWidth - 40);
    const y = Math.random() * (cardRect.height - btnHeight - 40);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("click", moveButton);

/* ---------- Yes Button ---------- */

yesBtn.addEventListener("click", () => {

    page2.classList.add("hidden");
    page3.classList.remove("hidden");

    celebrate();

});

/* ---------- Restart ---------- */

againBtn.addEventListener("click", () => {

    location.reload();

});

/* ---------- Celebration ---------- */

function celebrate() {

    const emojis = [
        "❤️","💕","💖","💗",
        "🌸","✨","🎉","🎊",
        "🥳","💞"
    ];

    for(let i=0;i<150;i++){

        setTimeout(()=>{

            const c=document.createElement("div");

            c.className="confetti";

            c.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

            c.style.left=Math.random()*window.innerWidth+"px";

            c.style.fontSize=(18+Math.random()*25)+"px";

            c.style.animationDuration=(3+Math.random()*2)+"s";

            confetti.appendChild(c);

            setTimeout(()=>{

                c.remove();

            },5000);

        },i*25);

    }

}

/* ---------- Floating Hearts Forever ---------- */

setInterval(()=>{

    const h=document.createElement("div");

    h.className="heart";

    h.innerHTML=["💖","💕","❤️","🌸"][Math.floor(Math.random()*4)];

    h.style.left=Math.random()*window.innerWidth+"px";

    h.style.bottom="-40px";

    h.style.fontSize=(18+Math.random()*20)+"px";

    h.style.animationDuration=(4+Math.random()*3)+"s";

    hearts.appendChild(h);

    setTimeout(()=>{

        h.remove();

    },7000);

},350);

/* ---------- Sparkles ---------- */

setInterval(()=>{

    const s=document.createElement("div");

    s.className="heart";

    s.innerHTML="✨";

    s.style.left=Math.random()*window.innerWidth+"px";

    s.style.bottom="-20px";

    s.style.fontSize=(12+Math.random()*10)+"px";

    s.style.animationDuration="5s";

    hearts.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },5000);

},700);

/* ---------- Cute Page Title ---------- */

const titles = [
    "🥺 Sorry Pooman ❤️",
    "💖 Please Forgive Me",
    "🌸 Best Friends Forever"
];

let i = 0;

setInterval(()=>{

    document.title = titles[i];

    i++;

    if(i >= titles.length){

        i = 0;

    }

},2000);