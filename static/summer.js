document.addEventListener('DOMContentLoaded', function(){

    var motto = document.querySelector("#motto")
    var hd = document.querySelector("#rob")
    var schoolMotto = "Dedicated to Excellence"
    var so = "Let your child(ren) join the ROBOLUTION!!!"

    function printer(text, elem, speed, func){
        var counter = -1;
        var interval = setInterval(function (){
            elem.innerText += text.charAt(++counter)
            if (counter === text.length) {
                clearInterval(interval)
                func(speed, counter)
            }
        },speed)
    }

    printer(schoolMotto, motto, 100, function(s, c){
        printer(so, hd, 100, function(a, b){
            _ = document.querySelector("#content")
            _.style.display = "block"
            _.style.animationPlayState = 'running'
        })
    })
})