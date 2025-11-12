const baseUri = 'http://jsonplaceholder.typicode.com/todos/'
const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            posts:[],
        }
    },
    methods: {
        getData(){
            axios.get(baseUri)
            .then(response => {
                this.posts = response.data
                console.log(this.posts)
            })
            .catch(error => {
                console.error("There was an error"), error;
            })
        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
