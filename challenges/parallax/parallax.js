/* Start Helpers */
let c = variable => {
    console.log(variable)
}
// change page title
document.title = "Parallax challenge"

/* End Helpers */



/* Start Parallax */
let two = document.getElementById('two')

document.addEventListener('scroll', (event) => {
    two.style.height = window.pageYOffset < 500 ? window.pageYOffset + 'px' : two.style.height
})
/* End Parallax  */