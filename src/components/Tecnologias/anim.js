let Elementos = document.getElementsByClassName('Tech')

function AnimeScroll(){
    let windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.5)

    try{
        for(let i=0; i<=Elementos.length; i++){
            if(windowTop >= Elementos[i].offsetTop){
                Elementos[i].classList.add('Tech--animation')
            }
            if (windowTop < Elementos[i].offsetTop - (window.innerHeight - 500)){
                Elementos[i].classList.remove('Tech--animation')
            }
        }
    }catch(error){
    }
}
window.addEventListener('scroll', () => {
    AnimeScroll()
})
