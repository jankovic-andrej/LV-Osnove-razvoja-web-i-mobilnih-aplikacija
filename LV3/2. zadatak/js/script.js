const unos = document.querySelector("#unos");
const dodaj = document.querySelector("#dodaj");
const lista = document.querySelector("#lista");


dodaj.addEventListener("click", ()=>{
    const text = unos.value.trim();

    if(text === ""){
        return;
    }
    
    const li = document.createElement("li");
    li.textContent = text;
    unos.value = "";

    const tipka = document.createElement("button");
    tipka.textContent = "X";
    
    li.appendChild(tipka);
    lista.appendChild(li);

    li.addEventListener("click", () => {
        li.classList.toggle("gotovo");
    });

    tipka.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    });

})

