<template>
  <div class="home">
    <MusicComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import MusicComponent from '@/components/MusicComponent.vue'

export default {
  name: 'MusicView',
  components: {
    MusicComponent
  }
}
</script>
