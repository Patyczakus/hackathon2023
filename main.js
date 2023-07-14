//zmnienna pionki - lista[] jako JSON - typ (kolor), img (zdjęcie) i kolor ("rgb(0,0,0)")
var br = document.createElement("br")
var numberT = 0
var cardJSON = [
    { qu: "NAZWA PIERWSZEGO LAPTOPA NA ŚWIECIE",
    an: [ 
    [ "IBM 5100 ", true ],
    [ "IBM 42069", false ],
    [ "Macintosh Portable", false ]
    ] },
    { qu: "PIERWSZY JĘZYK PROGRAMOWANIA",
    an: [ 
    [ "PHP", false ],
    [ "C", false ],
    [ "FORTRAN", true ]
    ] },
    { qu: "KOINCEPT KLAWIATURY WYWODZI SIE OD",
    an: [ 
    [ "maszyny do pisania ", true ],
    [ "guzików dźwigów", false ],
    [ "dźwigń maszyn rolniczych", false ]
    ] },
    { qu: "NAUKOWIEC KTORY ZŁAMAŁ ENIGME",
    an: [ 
    [ "Alan Turing", false ],
    [ "Marian Rejewski", true ],
    [ "Johnny Depp", false ]
    ] },
    { qu: "KIEDY POWSTAL INTERNET",
    an: [ 
    [ "1972", false ],
    [ "1969", true ],
    [ "1929", false ]
    ] },
    { qu: "IBM Simon TO:",
    an: [ 
    [ "SMARTFON", true ],
    [ "KOPARKA", false ],
    [ "KLAWIATURA", false ]
    ] },
    { qu: "PIERWSZA KONSOLA DO GIER TO:",
    an: [ 
    [ "Magnavox Odyssey", true ],
    [ "Nintendo 64", false ],
    [ "Pegasus", false ]
    ] },
    { qu: "NA CZYM POLEGA CYBERBEZPIECZEŃSTWO?",
    an: [ 
    [ "ochrona danych i systemów wewnętrznych firm przed zagrożeniami, jakie niosą za sobą cyberataki", true ],
    [ "nieautoryzowane próby użycia, wykradzenia lub uszkodzenia poufnych informacji przez wykorzystanie systemów komputerowych z lukami w zabezpieczeniach", false ],
    [ "celowe zakłócenie interaktywnego, zorganizowanego obiegu informacji w cyberprzestrzeni", false ]
    ] },
    { qu: "Pierwsza procedura w działaniach hakerskich to :",
    an: [ 
    [ "Rozpoznanie/Analiza", true ],
    [ "Usunięcie System32", false ],
    [ "Włączyć linuxa na komputerze", false ]
    ] },
    { qu: "Czym są wirusy komputerowe?",
    an: [ 
    [ "polegają one na maskowaniu obecności pewnych uruchomionych programów lub procesów systemowych ", false ],
    [ "szkodliwe oprogramowanie, rozprzestrzeniające się tylko poprzez sieć", false ],
    [ " to mały program komputerowy, który rozprzestrzenia się między komputerami i zakłóca ich działanie ", true ]
    ] },
    { qu: "Z jakich źródeł powinniśmy instalować aplikacje na smartfonach?",
    an: [ 
    [ "Autoryzowane sklepy aplikacj", true ],
    [ "Ruskie strony z aplikacjami", false ],
    [ "Od kolegi z internetu", false ]
    ] }
]

//tworzenie ekranu początkowego gry
function createStartWindow() {
    document.body.innerHTML = ""

    var startWindow = document.createElement("div")
    startWindow.className = "startWindow"
    
    var header = document.createElement("div")
    header.className = "header"
    header.innerText = "Planeta Pana W."

    var btns = document.createElement("div")
    btns.className= "btns"

    var btnStart = document.createElement("button")
    btnStart.innerText = "START"
    btnStart.onclick = createGameSkeleton
    var instruction = document.createElement("div")
    instruction.style.textAlign = "center"
    instruction.innerText= `Gra wykonana przez uczniów 1 Liceum Ogólnokształcące w Suwałkach.

    WPROWADZENIE DO GRY
    Twój komputer został zaatakowany popprzez złoścliwe oprogramowanie.
    I zostałeś sprowadzony na Planetę PANA W.
    Przed tobą cięzkie wyzwanie.
    Musisz przejść 20 poziomów, w każdym z nich będziesz miał do wybrania JEDNĄ z trzech opcji.
    Twoim zadaniem jest przejście wszystkich poziomów, aby pokonać strasznego wirusa.
    Ale uważaj, bo każde potknięcie cofa twój postęp o 1 co sprawia, że wirus jest coraz bliżej twojej egzekucji. 
    Natomiast jeśli odpowiesz prawidłowo, twoja postać pędzi do przodu o 1 krok, niczym Usain Bolt.
    Po przejściu wszystkich pozmiomów wirus zostaje pokonany i jesteś bezpieczny
    (Wracasz na swoją planetę i babcia czeka na ciebie z PYSZNIUTKIM I CIEPŁYM obiadkiem)`

    btns.appendChild(instruction)
    btns.appendChild(br)
    btns.appendChild(btnStart)
    startWindow.appendChild(header)
    startWindow.appendChild(btns)
    document.body.appendChild(startWindow)
}

window.onload = createStartWindow
//Tworzenie szkieletu gry
function createGameSkeleton() {
    document.body.innerHTML = ""
    var startWindow = document.createElement("div")
    startWindow.className = "startWindow"
    startWindow.style.background = "rgb(0,0,0,0.85)"

    var table = document.createElement("table")
    table.className = "gboard"
    var tr = document.createElement("tr")
    table.appendChild(tr)
    for (let i = 0; i < 20; i++) {
        var td = document.createElement("td")
        td.className = "move"
        tr.appendChild(td)
    }

    startWindow.appendChild(table)

    var cards = document.createElement("div")
    cards.id = "cards"
    startWindow.appendChild(cards)
    document.body.appendChild(startWindow)

    gameFunc()
}

function gameFunc() {
    document.getElementById('cards').innerHTML = ""
    function a() {
        var table = document.querySelector("table")
        table.innerHTML = 0
        var tr = document.createElement("tr")
        table.appendChild(tr)
        for (let i = 0; i < numberT; i++) {
            var td = document.createElement("td")
            td.className = "move"
            td.style.background = "lime"
            tr.appendChild(td)
        }
        for (let i = numberT; i < 20; i++) {
            var td = document.createElement("td")
            td.className = "move"
            tr.appendChild(td)
        }
    }

    var card = cardJSON[Math.floor(Math.random() * cardJSON.length)]
    var qu = document.createElement("div")
    qu.className = "qu"
    qu.innerText = card.qu
    document.getElementById('cards').appendChild(qu)

    card.an.forEach(an => {
        var ane = document.createElement("button")
        ane.innerText = an[0]
        ane.addEventListener("click", () => {
            if (an[1]) {
                ane.style.background = "#346226"
                numberT++
                a()
                setTimeout(() => {
                    if (numberT >= 19) endgane()
                    else gameFunc()
                }, 500)
            } else {
                ane.style.background = "#932525"
                numberT--
                numberT = Math.max(numberT, 0)
                a()
                setTimeout(gameFunc, 1000)
            }
        })

        document.getElementById('cards').appendChild(ane)
    })
}

function endgane() {
    document.body.innerHTML = ""

    var startWindow = document.createElement("div")
    startWindow.className = "startWindow"
    startWindow.style.fontSize = "750%"
    startWindow.innerText = "Wygrana!"

    document.appendChild(startWindow)
}