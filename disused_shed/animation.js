//Get test
var test = document.querySelector(".test");
var stanza = document.querySelectorAll("p");

//Scroll event
window.addEventListener("scroll", function(){
    animate();
});

function animate(){
        //Get scroll position
        var scroll = window.pageYOffset;
        //Write scroll position
        //Blur stanzas based on scroll position
        var stanzaGap = 800;
        var scrollPos = scroll/stanzaGap;
        test.innerHTML = scrollPos;

        for(i=1; i<stanza.length+1; i++){
            let index = i-1;
            if(scrollPos < i+0.2){
                stanza[index].style.filter = "blur(" + Math.abs(15*(i+0.2 - scroll/stanzaGap)) + "px)";
            } else if(scrollPos >= i+0.2 && scrollPos <= i+0.8){
                stanza[index].style.filter = "blur(" + 0 + "px)";
            } else {
                stanza[index].style.filter = "blur(" + Math.abs(15*(i+0.8 - scroll/stanzaGap)) + "px)";
            }
            if(scrollPos < (i-0.3)){
                stanza[index].style.opacity = 0;
            } else if(scrollPos >= i-0.3 && scrollPos < i+1.3){
                stanza[index].style.opacity = 1;
            } else {
                stanza[index].style.opacity = 0;
            }
        }
    
}

animate();