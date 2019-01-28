var blog = new Vue({
    el: '#blog',
    data: {
        news: [{
                title: "FA Cup draw.",
                img: "img/news1.jpg",
                shortInfo: "Next Manchester United rival in FA Cup is Chelsea.",
                postTime: "28.01.2019"
            },
            {
                title: "Manchester - Brighton MOTM",
                img: "img/news2.png",
                shortInfo: "Marcus Rashford became a Man Of The Match today versus Brighton.",
                postTime: "19.01.2019"
            },
            {
                title: "OFFICIAL: OGS in United",
                img: "img/news3.jpg",
                shortInfo: "Ole Gunnar Solkjear is new Manchester United temporary manager.",
                postTime: "19.12.2018"
            },
            {
                title: "Good bye, Jose",
                img: "img/news4.jpg",
                shortInfo: "OFFICIAL: Jose Mourinho is no longer a Manchester United manager.",
                postTime: "19.12.2018"
            }
        ]
    }
})