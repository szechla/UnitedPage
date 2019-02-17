var newsTitle = $("h1.title");
const newsShortInfo = $("h3.shortInfo");
const newsText = $("p.text")

var blog = new Vue({
    el: '#blog',
    data: {
        news: [{
                title: "FA Cup draw.",
                img: "img/news1.jpg",
                shortInfo: "Next Manchester United rival in FA Cup is Chelsea.",
                postTime: "28.01.2019",
                text: "Manchester United i Chelsea spotkają się ze sobą w FA Cup po raz szesnasty. <br><br>Ostatnio drużyny rywalizowały ze sobą w ubiegłym sezonie. Wówczas The Blues pokonali Manchester United w finale Pucharu Anglii 1:0. <br><br>Spotkanie odbędzie się w weekend 16-17 lutego. <br>Mecz przypadnie więc pomiędzy pierwszym starciem z PSG w Champions League, a spotkaniem z Liverpoolem w Premier League. Dokładny termin zostanie potwierdzony w najbliższych dniach. <br>W przypadku remisu na Stamford Bridge mecz nie będzie powtórzony. Sędzia zarządzi dogrywkę i ewentualne rzuty karne."
            },
            {
                title: "Manchester - Brighton MOTM",
                img: "img/news2.png",
                shortInfo: "Marcus Rashford became a Man Of The Match today versus Brighton.",
                postTime: "19.01.2019",
                text: "Angielski napastnik wpisał się na listę strzelców tuż przed przerwą sobotniego meczu z Mewami na Old Trafford. <br><br>Rashford zdobył gola w czwartym z rzędu meczu Premier League. <br><br>Swoje głosy na Rashforda oddało 63% kibiców Manchesteru United. <br>Anglik pokonał w internetowym głosowaniu Victora Lindelofa i Anthony’ego Martiala. Rashford w starciu z Brighton zanotował sześć strzałów, w tym dwa celne. Więcej prób miał tylko Paul Pogba (7). <br>Anglik miał w spotkaniu 15 sprintów i był to najlepszy wynik z całego zespołu. <br>Łącznie Marcus przebiegł 9,82 km. Najszybszy sprint Rashforda w sobotnim starciu to 33,15 km/h. Szybszy był tylko Jesse Lingard (33,19 km/h). <br><br>Warto dodać, że mecz z Brighton był 150. występem Rashforda w Manchesterze United."
            },
            {
                title: "OFFICIAL: OGS in United",
                img: "img/news3.jpg",
                shortInfo: "Ole Gunnar Solkjear is new Manchester United temporary manager.",
                postTime: "19.12.2018",
                text: "Norweg będzie prowadził Manchester United do końca sezonu 2018/2019. <br>Solskjaerowi w obowiązkach menadżera mają pomagać Mike Phelan, Michael Carrick i Kieran McKenna. <br><br>– Manchester United jest w moim sercu i wspaniale jest wrócić tutaj w tej roli. Nie mogę doczekać się pracy z naprawdę utalentowanym składem, który mamy, sztabem szkoleniowym i wszystkimi w klubie – powiedział Solskjaer.<br><br>Ed Woodward, wiceprezes Manchesteru United dodaje: <br>– Ole jest legendą klubu i ma olbrzymie doświadczenie, zarówno na boisku jak i w roli szkoleniowej. Jego historia w Manchesterze United oznacza, że żyje i oddycha kulturą klubu. Wszyscy tutaj są zachwyceni, że wrócił razem z Mikiem Phelanem. Jesteśmy przekonani, że zjednoczą piłkarzy, kibiców, kiedy wkraczamy w drugą część sezonu. <br><br>Solskjaer został zatrudniony na Old Trafford po tym jak Manchester United we wtorek zwolnił Jose Mourinho ze stanowiska menadżera Czerwonych Diabłów. <br>Ole Gunnar Solskjaer był piłkarzem Manchesteru United w latach 1996-2007. Dla Czerwonych Diabłów rozegrał 366 meczów i zdobył 126 bramek. <br>Po zakończeniu piłkarskiej kariery pracował na Old Trafford w roli trenera zespołu rezerw. Ostatnio prowadził zespół Molde."
            },
            {
                title: "Good bye, Jose",
                img: "img/news4.jpg",
                shortInfo: "OFFICIAL: Jose Mourinho is no longer a Manchester United manager.",
                postTime: "19.12.2018",
                text: "Mourinho wygrał z Manchesterem United Tarczę Wspólnoty, Puchar Ligi i Ligę Europy. <br>W ostatnim sezonie zdobył z klubem wicemistrzostwo Anglii. Kiepski start sezonu 2018/2019 zaważył na przyszłości Mourinho na Old Trafford. <br>Czarę goryczy przelała porażka z Liverpoolem (1:3) na Anfield. <br><br>– Manchester United ogłasza, że menadżer Jose Mourinho opuścił klub z natychmiastowym efektem – czytamy w oświadczeniu wydanym przez klub z Old Trafford. <br>– Klub chciałby podziękować Jose za jego pracę w czasie spędzonym w Manchesterze United i życzy mu sukcesów w przyszłości. <br>– Do końca obecnego sezonu zostanie zatrudniony tymczasowy menadżer, a w tym czasie klub przeprowadzi dokładny proces rekrutacji nowego etatowego menadżera – głosi oświadczenie klubu. <br><br>Klub nie podał na razie nazwiska tymczasowego menadżera, ale ma to zrobić w ciągu najbliższych 48 godzin. Najbliższe sesje treningowe poprowadzą Michael Carrick i Kieran McKenna, dotychczasowi asystenci Jose Mourinho."
            }
        ]
    },
    methods: {
        makeNewsPage: function(e) {
            //Set page content
            let i = e.currentTarget.id;
            $("h1.title").html(this.news[i].title)
            $("h3.shortInfo").html(this.news[i].shortInfo);
            $("p.text").html(this.news[i].text);
            $("p.text").prepend(`<img src=${this.news[i].img} class="news-page-img float-left m-3" alt="Responsive image">`);
            //Show page
            $(".news-page").css("display", "initial");
            $("body").css("overflow", "hidden");
        },
        closeNewsPage: function() {
            $(".news-page").css("display", "none");
            $("body").css("overflow", "initial");
        }
    }


})