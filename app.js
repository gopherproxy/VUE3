console.log('Script loaded')

const app = Vue.createApp({
    //template: '<h2>I am the template now</h2>'
    data() {
        return {
            showBooks : true, // bøgerne er synlige
            books: [
                {
                    title: 'Jurassic Park',
                    author: 'Michael Crichton',
                    date: 1990
                },
                {
                    title: 'Godzilla',
                    author: 'Marc Cerasini',
                    date: 1998
                },
                {
                    title: 'Godzilla returns',
                    author: 'Marc Cerasini',
                    date: 1996
                },
            ]
        }
    },

    methods: {
        changeTitle(i) {
            //console.log('You clicked me!')
            //console.log(this.books[0].title)
            this.books[i].title = 'Something else'
        },

        showHideBooks(){
                this.showBooks = !this.showBooks;
        }
    }
}
)

app.mount('#app')