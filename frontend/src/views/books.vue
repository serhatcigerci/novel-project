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

<template lang="pug">
#app
  img(:src='image')
  img(:src='image2')
  img(:src='image3')

</template>

<style lang="scss" scoped>
.books {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>