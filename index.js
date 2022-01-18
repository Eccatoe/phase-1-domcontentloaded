document.addEventListener('DOMContentLoaded', function(){
    const text=document.querySelector("#text")
    return text.textContent="This is really cool!"
})

console.log(
    "This console.log() fired when inde.js loads - before DOMContentLoaded is loaded"
)