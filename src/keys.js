document.addEventListener("keypress", function (event){
    switch (event.code){
        case "KeyA":
            let audioA = new Audio("../sounds/A.mp3");
            audioA.play();
            break;
        case "KeyS":
            let audioS = new Audio("../sounds/S.mp3");
            audioS.play();
            break;
        case "KeyD":
            let audioD = new Audio("../sounds/D.mp3");
            audioD.play();
            break;
        case "KeyF":
            let audioF = new Audio("../sounds/F.mp3");
            audioF.play();
            break;
        case "KeyG":
            let audioG = new Audio("../sounds/G.mp3");
            audioG.play();
            break;
        case "KeyH":
            let audioH = new Audio("../sounds/H.mp3");
            audioH.play();
            break;
        case "KeyJ":
            let audioJ = new Audio("../sounds/J.mp3");
            audioJ.play();
            break;
        case "KeyW":
            let audioW = new Audio("../sounds/W.mp3");
            audioW.play();
            break;
        case "KeyE":
            let audioE = new Audio("../sounds/E.mp3");
            audioE.play();
            break;
        case "KeyT":
            let audioT = new Audio("../sounds/T.mp3");
            audioT.play();
            break;
        case "KeyY":
            let audioY = new Audio("../sounds/Y.mp3");
            audioY.play();
            break;
        case "KeyU":
            let audioU = new Audio("../sounds/U.mp3");
            audioU.play();
            break;
        default: console.warn("error");
        break;
    }
})

