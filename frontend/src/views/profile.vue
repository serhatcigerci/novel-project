<script>
import Counter from '@/components/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  components: { Counter },
  data() {
    return {
      users: [],
      time: new Date(),
      message: '',
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },

  methods: {
    ...mapActions(['fetchUsers', 'goLive', 'sendMessageToLiveStream', 'joinStream']),
    sendMessage(e) {
      e.preventDefault()
      this.sendMessageToLiveStream(this.message)
      this.message = ''
    },
  },
  computed: {
    ...mapState(['currentLiveStream', 'liveStreams', 'user', 'liveStreamMessages']),
  },
}
</script>

<template lang="pug">
  .home
    h1 Novelproject {{ user.name }}
    p The time is: {{ time }}
    h2 Users
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{ user.name }}
</template>

<style lang="scss" scoped>
.home {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>