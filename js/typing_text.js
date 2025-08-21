document.addEventListener("DOMContentLoaded", ()=> {
    const target = document.getElementById("typing-text");
    const fullText = target.textContent; //grabbing the text from the DOM
    target.textContent = ""; //Clearing the text on the DOM before typing so that it doesnt appear twice
    
    let index = 0;

    function type () {
        if (index < fullText.length) {
            target.textContent += fullText.charAt(index);
            index++;
            setTimeout(type, 100);
        }
        else {
            setTimeout(() => {
                target.innerText = "";
                index = 0;
                type(); //this is what creates the loop and the text keeps on repeating
            }, 1500);
        }
    }

    type(); //function is invoked here
});