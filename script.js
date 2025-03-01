let boxes = document.querySelectorAll(".box")
console.dir(boxes)
turn = true
const winpat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === true) {
            box.innerText = "X"
            turn = false
        }
        else {
            box.innerText = "O"
            turn = true
        }
        box.classList.add("pointer-events-none")
        let isTie = true;
        for (let box of boxes) {
            if (box.innerText === "") {
                isTie = false; // Found an empty box, no tie yet
                break;
            }
        }
        
        if (isTie) {
            document.querySelector("h1").innerText = "It's a Tie!";
            document.querySelector("h1").classList.remove("hidden");
            document.querySelector("#newgame").classList.remove("hidden");
            document.querySelector("#reset").classList.add("hidden");
        } 
        checkwin();
    })
})
 let istie=true
const checkwin = () => {
     
    for (let pat of winpat) {
        // console.log(pat[0],pat[1],pat[2])
        let val1 = boxes[pat[0]].innerText
        let val2 = boxes[pat[1]].innerText
        let val3 = boxes[pat[2]].innerText

        if ( val1 !== '' && val2 !== '' && val3 !== '') {
            if (val1 === val2 && val2 === val3) {
            
                document.querySelector("h1").innerText = val1 + "  is winner "
                for (let box of boxes) {
                    box.classList.add("pointer-events-none")
                }
                document.querySelector("h1").classList.remove("hidden")
                document.querySelector("#newgame").classList.remove("hidden")
                reset.classList.add("hidden")
            }
             

             
        }
         
    }
     

         
    }

    
    
let reset = document.querySelector("#reset")
reset.addEventListener("click", () => {
    for (let box of boxes) {
        turn = true;
        box.innerText = "";
        box.classList.remove("pointer-events-none")
        document.querySelector("h1").classList.add("hidden")

    }
})

document.querySelector("#newgame").addEventListener("click", () => {
    for (let box of boxes) {
        turn = true;
        box.innerText = "";
        box.classList.remove("pointer-events-none")
        document.querySelector("h1").classList.add("hidden")
        document.querySelector("#newgame").classList.add("hidden")
        reset.classList.remove("hidden")
    }
})
