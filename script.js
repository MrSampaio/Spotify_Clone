document.addEventListener('DOMContentLoaded', ()=>{

    const recentes = [
        { name: "Recente 1", image: "imgs/recentes1.png"},
        { name: "Recente 2", image: "imgs/recentes2.png"},
        { name: "Recente 3", image: "imgs/recentes3.png"},
        { name: "Recente 4", image: "imgs/recentes4.png"},
        { name: "Recente 5", image: "imgs/recentes5.png"},
        { name: "Recente 1", image: "imgs/recentes1.png"},
        { name: "Recente 2", image: "imgs/recentes2.png"},
        { name: "Recente 3", image: "imgs/recentes3.png"},
        { name: "Recente 1", image: "imgs/recentes1.png"},
        { name: "Recente 2", image: "imgs/recentes2.png"},
        { name: "Recente 3", image: "imgs/recentes3.png"},
        { name: "Recente 1", image: "imgs/recentes1.png"},
        { name: "Recente 2", image: "imgs/recentes2.png"},
        { name: "Recente 3", image: "imgs/recentes3.png"},
        { name: "Recente 4", image: "imgs/recentes4.png"},
        { name: "Recente 5", image: "imgs/recentes5.png"},
        { name: "Recente 1", image: "imgs/recentes1.png"},
        { name: "Recente 2", image: "imgs/recentes2.png"}
    ]

    const containerRecentes = document.getElementById('container-recentes');

    const contagemRecentes = recentes.length;

    //for(let i = 0; i <= contagemRecentes; contagemRecentes++){
      //   containerRecentes.innerHTML = `<img src="${recentes[contagemRecentes].image}" class="recente-img">`;
    //}
    
    recentes.forEach(recente =>{
       containerRecentes.innerHTML += `<img src="${recente.image}" class='recente-img'>`;
    })

})