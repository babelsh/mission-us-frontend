<template>
  <v-container fluid>
    <activity-card
      description="Aqui vai a descrição da atividade"
      title="Aqui vai o nome da atividade"
      img-src="https://marvel-live.freetls.fastly.net/canvas/2018/9/8f55d061e8c346dbaf28636bb61ea2b4?quality=95&fake=.png"
    />
    <trail
      title="Trilha 1"
      abstract="Esta é a primeira trilha de todas. Vamos lá?"
      image-src=""
    />
  </v-container>
</template>

<script>
import ActivityCard from '@/components/ActivityCard.vue';
import Trail from '@/components/Trail.vue';

export default {
  name: 'home',
  components: {
    ActivityCard,
    Trail,
  },
};
</script>
