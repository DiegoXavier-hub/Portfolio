let Elementos = document.getElementsByClassName('Tech')

function AnimeScroll(){
    let windowTop = window.pageYOffset - 100
    try{
        for(let i=0; i<=Elementos.length; i++){
            if(windowTop >= Elementos[i].offsetTop){
                Elementos[i].classList.add('Tech--animation')
            }
            if (window.pageYOffset+1<Elementos[i].offsetTop){
                Elementos[i].classList.remove('Tech--animation')
            }
        }
    }catch(error){
    }
}
window.addEventListener('scroll', () => {
    AnimeScroll()
})
