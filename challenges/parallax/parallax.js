/* Start Helpers */
let c = variable => {
    console.log(variable)
}
// change page title
document.title = "Parallax challenge"

/* End Helpers */







/* Start Parallax */
const goTop = (element) => {
    element.onmousemove = (e) => {
        c(e.pageY)

        if(element.style.position != 'absolute') {
            element.style.position = 'absolute'
        }
        if(element.style.top < e.pageY) {
            element.style.top =  `${e.pageY}px`
        } else {
            const top = e.pageY - element.style.top
            element.style.top =  `${-top}px`
        }
        
        element.style.zIndex = 5
    }
  

}
/* End Parallax  */