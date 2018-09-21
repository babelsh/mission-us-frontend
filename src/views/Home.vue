<template>
  <v-container fluid>
    <trail
      title="Trilha 1"
      abstract="Esta é a primeira trilha de todas. Vamos lá?"
      image-src=""
    />
    <v-container fluid grid-list-md ma-0 pa-0>
      <v-layout row wrap>
        <v-flex
          xs12 sm6 md4 lg3 xl3
          v-for="activity in activities"
          :key="activity.title"
        >
          <activity-card
            :description="activity.description"
            :finalized="activity.finalized"
            :img-src="activity.imgsrc"
            :title="activity.title"
          />
        </v-flex>
      </v-layout>
    </v-container>
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
  data() {
    return {
      activities: [
        {
          title: 'Jogar futebol',
          description: 'Jogar futebol com os vizinhos no play',
          imgsrc: 'https://marvel-live.freetls.fastly.net/canvas/2018/9/8f55d061e8c346dbaf28636bb61ea2b4?quality=95&fake=.png',
          finalized: true,
        },
        {
          title: 'Estudar história',
          description: 'Utilizar de mídias audiovisuais para estudo de história',
          imgsrc: 'https://marvel-live.freetls.fastly.net/canvas/2018/9/8f55d061e8c346dbaf28636bb61ea2b4?quality=95&fake=.png',
          finalized: true,
        },
        {
          title: 'Jogar videogame',
          description: 'Utilizar de jogos sérios para incentivar o ensino de matemática',
          imgsrc: 'https://marvel-live.freetls.fastly.net/canvas/2018/9/8f55d061e8c346dbaf28636bb61ea2b4?quality=95&fake=.png',
        },
        {
          title: 'Celebração',
          description: 'Celebrar o desenvolvimento da trilha',
          imgsrc: 'https://marvel-live.freetls.fastly.net/canvas/2018/9/8f55d061e8c346dbaf28636bb61ea2b4?quality=95&fake=.png',
        },
      ],
    };
  },
};
</script>
