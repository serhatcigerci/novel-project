<script>
import { mapActions } from 'vuex'
import image from "/src/views/lotm.jpg"
import image2 from "/src/views/ogd.jpg"
import image3 from "/src/views/pto.jpg"

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
    }, 
    data: function () {
        return {
           image: image,
           image2: image2,
           image3: image3
        }
    }
}
</script>

<template>
<div id="imgs" class="image">
    <img :src="image"/>
    <img :src="image2"/>
    <img :src="image3"/>
</div>
</template>

<style lang="scss">
.image {
    justify-content: center;
    display: flex;
    width: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>