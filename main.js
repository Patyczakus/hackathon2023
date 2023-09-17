var md

var br = document.createElement("br")
var numberT = 0
var cardBefore
var blockAnswers = false
var cardJSON = [
    {
        answersInNewLine: false,
        qu: "Jaka była NAZWA PIERWSZEGO LAPTOPA NA ŚWIECIE",
        an: [
            ["IBM 5100 ", true],
            ["IBM 42069", false],
            ["Macintosh Portable", false],
        ],
    },
    {
        answersInNewLine: false,
        qu: "PIERWSZY JĘZYK PROGRAMOWANIA:",
        an: [
            ["PHP", false],
            ["C", false],
            ["FORTRAN", true],
        ],
    },
    {
        answersInNewLine: false,
        qu: "KONCEPT KLAWIATURY WYWODZI SIE OD",
        an: [
            ["maszyny do pisania", true],
            ["guzików dźwigów", false],
            ["dźwigń maszyn rolniczych", false],
        ],
    },
    {
        answersInNewLine: false,
        qu: "NAUKOWIEC KTóRY ZŁAMAŁ ENIGME",
        an: [
            ["Alan Turing", false],
            ["Marian Rejewski", true],
            ["Johnny Depp", false],
        ],
    },
    {
        answersInNewLine: false,
        qu: "KIEDY POWSTAł INTERNET",
        an: [
            ["1972", false],
            ["1969", true],
            ["1929", false],
        ],
    },
    {
        answersInNewLine: false,
        qu: "IBM Simon TO:",
        an: [
            ["SMARTFON", true],
            ["KOPARKA", false],
            ["KLAWIATURA", false],
        ],
    },
    {
        answersInNewLine: false,
        qu: "PIERWSZA KONSOLA DO GIER TO:",
        an: [
            ["Magnavox Odyssey", true],
            ["Nintendo 64", false],
            ["Pegasus", false],
        ],
    },
    {
        answersInNewLine: true,
        qu: "NA CZYM POLEGA CYBERBEZPIECZEŃSTWO?",
        an: [
            [
                "Polega na ochronie danych i systemów wewnętrznych firm przed zagrożeniami, jakie niosą za sobą cyberataki.",
                true,
            ],
            [
                "Zajmuje się nieautoryzowanymi próbami użycia, wykradzenia lub uszkodzenia poufnych informacji przez wykorzystanie systemów komputerowych z lukami w zabezpieczeniach.",
                false,
            ],
            ["To celowe zakłócenie interaktywnego, zorganizowanego obiegu informacji w cyberprzestrzeni.", false],
        ],
    },
    {
        answersInNewLine: true,
        qu: "Pierwsza procedura w działaniach hakerskich to:",
        an: [
            ["Rozpoznanie/Analiza", true],
            ["Usunięcie System32", false],
            ["Włączyć linuxa na komputerze", false],
        ],
    },
    {
        answersInNewLine: true,
        qu: "Czym są wirusy komputerowe?",
        an: [
            ["Polegają one na maskowaniu obecności pewnych uruchomionych programów lub procesów systemowych.", false],
            ["To szkodliwe oprogramowanie, rozprzestrzeniające się tylko poprzez sieć.", false],
            [
                "Są to małe programy komputerowe, które rozprzestrzeniają się między komputerami i zakłócają ich działanie.",
                true,
            ],
        ],
    },
    {
        answersInNewLine: true,
        qu: "Z jakich źródeł powinniśmy instalować aplikacje na smartfonach?",
        an: [
            ["Autoryzowane sklepy aplikacji", true],
            ["Ruskie strony z aplikacjami", false],
            ["Od kolegi z internetu", false],
        ],
    },
    {
        answersInNewLine: false,
        qu: "Czy program antywirusowy wykrywa wszystkie wirusy?",
        an: [
            ["Tak", false],
            ["Nie ", true],
        ],
    },
    {
        answersInNewLine: true,
        qu: "Czym jest atak DDoS?",
        an: [
            [
                "To rodzaj cyberataku, podczas którego cyberprzestępca próbuje wyłudzić od ofiary poufne informacje.",
                false,
            ],
            [
                "Jest to atak polegający na przeprowadzeniu ataku równocześnie z wielu miejsc jednocześnie (z wielu komputerów).",
                true,
            ],
            [
                "Jest atakiem polegającym na podszyciu się pod nasz prefiks i przekierowaniu ruchu kierowanego do nas – do obcej sieci.",
                false,
            ],
        ],
    },
    {
        answersInNewLine: true,
        qu: "Czym jest pharming?",
        an: [
            [
                "To grupa ataków na systemy teleinformatyczne polegająca na podszywaniu się pod inny element systemu informatycznego.",
                false,
            ],
            [
                "Jest próbą pozyskania poufnych informacji od celu poprzez podszywanie się pod godnego zaufania agenta.",
                false,
            ],
            [
                "Jest to atak polegający na modyfikacji zawartości adresu www w celu przekierowania użytkownika na fałszywą stronę, mimo wpisania prawidłowego adresu strony.",
                true,
            ],
        ],
    },
    {
        answersInNewLine: false,
        qu: "Czy haker zawsze przeprowadza swoje działania w negatywnym celu dla drugiej osoby?",
        an: [
            ["Tak", false],
            ["Nie", true],
        ],
    },
    {
        answersInNewLine: true,
        qu: "Kto to jest haker?",
        an: [
            [
                "To osoba wyszukująca i ewentualnie wykorzystująca dziury bezpieczeństwa w oprogramowaniu komputerowym, dające dostęp do zabezpieczonych zasobów.",
                true,
            ],
            ["Jest to osoba w kapturze siedząca przed laptopem.", false],
            ["To osoba łamiąca zabezpieczenia w celu dokonania przestępstwa.", false],
        ],
    },
    {
        answersInNewLine: true,
        qu: "Phishing to...",
        an: [
            [
                "...fałszywe oprogramowanie, które podszywa się pod aplikacje używane przez użytkownika danego urządzenia.",
                false,
            ],
            [
                "...rodzaj złośliwego oprogramowania, które szyfruje ważne pliki przechowywane na dysku lokalnym i sieciowym oraz żąda okupu za ich rozszyfrowanie.",
                false,
            ],
            [
                "...rodzaj cyberataku, podczas którego cyberprzestępca próbuje wyłudzić od ofiary poufne informacje.",
                true,
            ],
        ],
    },
]

function informationWindow(type) {
    var startWindow = document.querySelector(".btns")

    var info = {
        fabuła: `Twój komputer został zaatakowany poprzez złośliwe oprogramowanie i zostałeś sprowadzony na Planetę **PANA W**.
        **Przed tobą ciężkie wyzwanie.**
        Musisz przejść **20 poziomów**, w każdym z nich będziesz miał do wybrania **jedną** z trzech opcji (jeżeli oczywiście to nie Prawda/Fałsz).
        Twoim zadaniem jest przejście wszystkich poziomów, aby pokonać strasznego wirusa.
        Ale uważaj, bo każde potknięcie **cofa twój postęp o 1**, co sprawia, że wirus jest coraz bliżej twojej egzekucji. 
        Natomiast jeśli odpowiesz prawidłowo, twoja postać **pędzi do przodu o 1 krok**, niczym *Usain Bolt*.
        Po przejściu wszystkich pozmiomów wirus zostaje pokonany i jesteś bezpieczny
        *Wracasz na swoją planetę i babcia czeka na ciebie z pyszniutkim i ciepłym obiadkiem*`,
        autorzy: `W ramach konkurencji Hackathon brało udział 5 osób, z czego każdy był za coś odpowiedzialny. Najśmieszniejsze w tym jest to, że nie wiadomo było, co to jest cały *Hackathon*, więc każda grupa myślała na swój sposób, czy to filmem, czy to prezentacją - sęk w tym, że należało przedstawić swój problem za pomocą programu komputerowego, i mogę zaryzykować, że my jako pierwsi odkryliśmy część Hackathonu.
        
        **Patryk "patYczakus" Topolski** - Kapitan, pomysłodawca i główny programista
        [Github](https://github.io/patYczakus/) | [Strona](https://patyczakus.github.io/me/)

        **Michał Hołdyński** - Informator o projekcie i szukacz grafiki
        [Github](https://github.com/OperatorTaczki)

        **Sebastian Zalewski** - Autor pytań, szukacz grafiki, planner i pomysłodawca
        [Github](https://github.com/Zejlew)

        **Agata Sysak** - Autorka pytań i pomysłodawczyni
        [Github](https://github.com/bober27)
        
        **Franciszek Chrulski** - Autor pytań i pomocnik w programowaniu
        [Github](https://github.com/Flodooo)`,
    }
    var infoElement = document.createElement("div")
    infoElement.innerHTML = md.render(info[type].replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br />"))
    infoElement.style.fontSize = "120%"

    startWindow.innerHTML = ""
    startWindow.appendChild(infoElement)

    var btnBack = document.createElement("button")
    btnBack.innerText = "WRÓĆ"
    btnBack.onclick = createStartWindow

    startWindow.appendChild(btnBack)
}

//tworzenie ekranu początkowego gry
function createStartWindow() {
    md = new Remarkable({
        html: true,
    })
    document.body.innerHTML = ""

    var startWindow = document.createElement("div")
    startWindow.className = "startWindow home"

    var header = document.createElement("div")
    header.className = "header"
    header.innerText = "Planeta\nPana W."

    var btns = document.createElement("div")
    btns.className = "btns"

    var btnStart = document.createElement("button")
    btnStart.innerText = "START"
    btnStart.onclick = createGameSkeleton
    var btnF = document.createElement("button")
    btnF.innerText = "Fabuła"
    btnF.onclick = () => {
        informationWindow("fabuła")
    }
    var btnInfo = document.createElement("button")
    btnInfo.innerText = "Zespół"
    btnInfo.onclick = () => {
        informationWindow("autorzy")
    }
    var instruction = document.createElement("div")
    instruction.style.textAlign = "center"
    instruction.style.marginBottom = "5px"
    instruction.innerText = `Gra wykonana przez uczniów Cyber.MIL 1 Liceum Ogólnokształcące w Suwałkach, z 2 miejscem w Hackathonie.
    Poprawiona wersja, na zasadzie open-source.`
    btns.appendChild(instruction)
    btns.appendChild(br)

    btns.appendChild(btnF)
    btns.appendChild(btnInfo)
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
    blockAnswers = false
    document.getElementById("cards").innerHTML = ""
    function a() {
        var table = document.querySelector("table")
        table.innerHTML = ""
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

    var card
    do {
        card = cardJSON[Math.floor(Math.random() * cardJSON.length)]
    } while (card == cardBefore)
    cardBefore = card
    var qu = document.createElement("div")
    qu.className = "qu"
    qu.innerText = card.qu.toUpperCase()
    document.getElementById("cards").appendChild(qu)

    card.an.forEach((an) => {
        var ane = document.createElement("button")
        ane.innerText = an[0]
        ane.className = "B_an"

        ane.addEventListener("click", () => {
            if (blockAnswers) return

            blockAnswers = true
            if (an[1]) {
                ane.style.background = "#346226"
                numberT++
                a()
                setTimeout(() => {
                    if (numberT > 19) endgane()
                    else gameFunc()
                }, 500)
            } else {
                ane.style.background = "#932525"
                numberT--
                numberT = Math.max(numberT, 0)
                card.an
                    .map((x, i) => i)
                    .filter((i) => card.an[i][1])
                    .forEach((i) => {
                        document.querySelectorAll(".B_an")[i].style.fontWeight = "900"
                        document.querySelectorAll(".B_an")[i].style.color = "#78A66A"
                    })
                a()
                setTimeout(gameFunc, 1500)
            }
        })

        document.getElementById("cards").appendChild(ane)
        if (card.answersInNewLine) {
            ane.style.width = "96%"
            document.getElementById("cards").appendChild(br)
        }
    })
}

function endgane() {
    document.body.innerHTML = ""

    var startWindow = document.createElement("div")
    startWindow.className = "startWindow"
    startWindow.style.fontSize = "750%"
    startWindow.style.fontWeight = "900"
    startWindow.innerText = "Wygrana!"

    var btns = document.createElement("div")
    btns.style.display = "flex"
    btns.style.flexDirection = "column"

    var btnBack = document.createElement("button")
    btnBack.innerText = "Zjedz smaczny i ciepły obiadek..."
    btnBack.onclick = createStartWindow
    var btnAgain = document.createElement("button")
    btnAgain.innerText = "Zagraj jeszcze raz"
    btnAgain.onclick = createGameSkeleton

    document.body.appendChild(startWindow)
    btns.appendChild(btnBack)
    btns.appendChild(btnAgain)
    startWindow.appendChild(btns)
}
