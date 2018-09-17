<template>
  <v-container fluid>
    <activity-card
      description="Aqui vai a descrição da atividade"
      title="Aqui vai o nome da atividade"
      img-src="https://marvel-live.freetls.fastly.net/canvas/2018/9/8f55d061e8c346dbaf28636bb61ea2b4?quality=95&fake=.png"
    ></activity-card>
  </v-container>
</template>

<script>
import ActivityCard from '@/components/ActivityCard.vue';

export default {
  name: 'home',
  components: {
    ActivityCard,
  },
};
</script>
