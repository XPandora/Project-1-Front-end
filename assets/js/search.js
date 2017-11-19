var penal = new Vue({
    el: '#search',
    data: {
        searchString: "",
        articles: [
            {
                "title": "The_Donald",
                "url": "https://www.reddit.com/r/The_Donald/",
            },
            {
                "title": "Politics",
                "url": "https://www.reddit.com/r/politics/",
            },
            {
                "title": "Gaming",
                "url": "https://www.reddit.com/r/gaming/",
            },
            {
                "title": "Funny",
                "url": "https://www.reddit.com/r/funny/",
            },
            {
                "title": "NBA",
                "url": "https://www.reddit.com/r/nba/",
            },
            {
                "title": "Videos",
                "url": "https://www.reddit.com/r/videos/",
            },
            {
                "title": "Today I learned",
                "url": "https://www.reddit.com/r/todayilearned/",
            },
            {
                "title": "Soccer",
                "url": "https://www.reddit.com/r/soccer/",
            },
            {
                "title": "World News",
                "url": "https://www.reddit.com/r/worldnews/",
            },
            {
                "title": "Movies",
                "url": "https://www.reddit.com/r/movies/",
            },
            {
                "title": "Aww",
                "url": "https://www.reddit.com/r/aww/",
            },
            {
                "title": "Gifs",
                "url": "https://www.reddit.com/r/gifs/",
            },
            {
                "title": "Television",
                "url": "https://www.reddit.com/r/television/",
            },
            {
                "title": "Black People Twitter",
                "url": "https://www.reddit.com/r/BlackPeopleTwitter/",
            },
            {
                "title": "League of Legends",
                "url": "https://www.reddit.com/r/leagueoflegends/",
            }
        ]

    },
    computed: {
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return [];
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })
            return articles_array;;
        }
    }
});
