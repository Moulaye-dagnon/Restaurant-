ratio = .3
const options = {
    root: null,
    rootMargin : '0px',
    threshold : ratio
}
const callback = function (entries, observer){
    entries.forEach((entry )=> {
        if(entry.intersectionRatio > ratio){
            console.log('visible')
            entry.target.classList.remove('anim')
            t.unobserve(r)
        }
        
    });

}
const clas = document.querySelectorAll('.anim').forEach((r)=>{

    const t = new IntersectionObserver(callback, options)
    t.observe(r)
})