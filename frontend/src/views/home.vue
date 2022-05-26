<script>
import UserCard from '@/components/user-card.vue'
import { mapActions } from 'vuex'

export default {
    name: 'HomePage',
    components: {},
    data() {
        return {}
    }
}
</script>

<template lang="pug">  
    .card
      .headline
        .name 
          h1.title NOVELSCHNELL
        .slogan
          p More than you can read!
      .summary
        p Start reading right ahead!
</template>

<style lang="scss">
.body{
  background-color: brown;
}
h1 {
  font-size: 30px;
  color: black;
  margin: 0px;
  padding: 5px;
}
p { 
  color: black;
  justify-content: flex-start;
  flex: 1;
  text-align: center;
}
.card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .headline {
    display: flex;
    flex-direction: column;
    align-items: center;
    .name > h1 {
      font-size: 50px;
    }
  }
  .summary, .slogan {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 30px;
    }
  }
}
</style>