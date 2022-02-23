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
  .welcome-card
    .card
      .headline
        .name 
          h1.title NOVELSCHNELL
        .slogan
          p Create and Share!
      .summary
        p This is a place for both writing and reading
        p Why are you even waiting?
</template>

<style lang="scss">
p,
h1 {
  font-size: 30px;
  color: var(--pink);
  margin: 0px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  .headline {
    display: flex;
    flex-direction: column;
    align-items: center;
    .name > h1 {
      font-size: 50px;
    }
  }
  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 30px;
    }
    @media (min-width: 768px) {
      p {
        font-size: 40px;
      }
    }
  }
}
</style>
