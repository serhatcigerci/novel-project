<script>
import Counter from '@/components/counter.vue'
import UserCard from '@/components/user-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'UserDetail',
  components: { UserCard, Counter },
  data() {
    return {
      user: null
    }
  },
  async created() {
    this.user = await this.fetchUser(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchUser'])
  }
}
</script>

<template lang="pug">
  .about
    h1 This is a user detail
    UserCard(:user="user" v-if="user")
    Counter
</template>

<style lang="scss" scoped>
.about {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>