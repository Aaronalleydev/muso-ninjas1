<template>
  <div class="home">
    <div class="error" v-if="error">{{error}}</div>
    <div v-if="documents">
      <ListView :playlists="documents"/>
      <!-- <div v-for="doc in documents" :key="doc.id">
      {{ doc.title }}
    </div> -->
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import ListView from '../components/ListView.vue'

export default {
  name: 'HomeView',
  components: { ListView },

  setup(props) {
    const { documents, error } = getCollection('playlists')

    return { documents, error}
  }
}
</script>
