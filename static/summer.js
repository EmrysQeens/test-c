document.addEventListener('DOMContentLoaded', function(){

    var motto = document.querySelector("#rob")
    var schoolMotto = "Let your child(ren) join the ROBOLUTION!!!"

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
        _ = document.querySelector("#content")
        _.style.display = "block"
        _.style.animationPlayState = 'running'
    })
})