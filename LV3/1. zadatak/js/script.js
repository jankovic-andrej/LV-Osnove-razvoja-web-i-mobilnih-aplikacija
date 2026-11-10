const PrviBroj = document.querySelector("#a");
const drugiBroj = document. querySelector("#b");

const plus = document.querySelector("#zbroji");
const minus = document.querySelector("#oduzmi");
const puta = document.querySelector("#pomnozi");
const podijeli = document.querySelector("#podijeli");

const text = document.querySelector("#rezultat");

plus.addEventListener("click", ()=> {
    let a = Number(PrviBroj.value);
    let b = Number(drugiBroj.value);


    if(PrviBroj.value == "" || drugiBroj.value == "" || isNaN(a) || isNaN(b))
    {
        text.textContent = "Neispravan unos!";
    }
    else{
        text.textContent = a+b;
    }
})

minus.addEventListener("click", ()=> {
    let a = Number(PrviBroj.value);
    let b = Number(drugiBroj.value);


    if(PrviBroj.value == "" || drugiBroj.value == "" || isNaN(a) || isNaN(b))
    {
        text.textContent = "Neispravan unos!";
    }
    else{
        text.textContent = a-b;
    }
})

puta.addEventListener("click", ()=> {
    let a = Number(PrviBroj.value);
    let b = Number(drugiBroj.value);


    if(PrviBroj.value == "" || drugiBroj.value == "" || isNaN(a) || isNaN(b))
    {
        text.textContent = "Neispravan unos!";
    }
    else{
        text.textContent = a*b;
    }
})

podijeli.addEventListener("click", ()=> {
    let a = Number(PrviBroj.value);
    let b = Number(drugiBroj.value);


    if(PrviBroj.value == "" || drugiBroj.value == "" || isNaN(a) || isNaN(b) || b === 0)
    {
        text.textContent = "Neispravan unos!";
    }
    else{
        text.textContent = a/b;
    }
})