<template>
  <v-container fluid>
    <trail
      title="Trilha 1"
      abstract="Esta é a primeira trilha de todas. Vamos lá?"
      image-src=""
    />
  </v-container>
</template>

<script>
import Trail from '@/components/Trail'

export default {
  name: 'home',
  components: {
    Trail,
  },
}
</script>
