console.log('Script loaded')

const app = Vue.createApp({
    //template: '<h2>I am the template now</h2>'
    data() {
        return {
            title: 'Jurassic Park',
            author: 'Michael Crichton',
            date: 1990
        }
    }

}
)

app.mount('#app')