console.log('Script loaded')

const app = Vue.createApp({
    //template: '<h2>I am the template now</h2>'
    data() {
        return {
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
        changeTitle() {
            //console.log('You clicked me!')
            this.books.title = 'Something else'
        }
    }
}
)

app.mount('#app')