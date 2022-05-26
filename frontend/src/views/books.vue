<script>
import { mapActions } from 'vuex'


export default {
    name: 'Books',
    components: {},
    data() {
        return {
            books: [],
        }
    },
    async created() {
        this.books = await this.fetchBooks()
    },
    methods: {
        ...mapActions(['fetchBooks'])
    }
}
</script>

<template>
    <div id="app">
        <img :src="require('./src/images/lotm.jpg')"/>
    </div>
</template>

<template lang="pug">  
    .books  
        div(v-for="book in books")
            h1 {{ book.filename }}

</template>
<style lang="scss" scoped>
.books {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>