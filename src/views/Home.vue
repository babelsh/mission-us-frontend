<template>
  <v-container fluid>
    <trail
      title="Trilhas: vamos começar esta jornada!"
      abstract="Comece agora a explorar o mundo de desenvolvimento do seu filho"
      image-src=""
    />
    <v-container fluid grid-list-md ma-0 pa-0>
      <v-layout row wrap>
        <v-flex xs12 @click="goToDescobrindoSeuFilho">
          <v-card color="primary" class="white--text">
            <v-card-title primary-title>
              <div>
                <div class="headline">Descobrindo seu filho</div>
                <span>O que você precisa saber sobre seu filho?</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="primary" class="white--text">
            <v-card-title primary-title>
              <div>
                <div class="headline">Vamos brincar?</div>
                <span>
                  Descubra como você pode desenvolver seu filho através de jogos educativos
                </span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <div>
                <div class="headline">Quero mais trilhas!</div>
                <span>
                  Você gostou e quer mais trilhas para desbravar o desenvolvimento do seu filho?
                  Clique aqui!
                </span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <router-view />
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
      
    };
  },
  methods: {
    goToDescobrindoSeuFilho() {
      console.log('opaa');
      this.$router.push({ name: 'descobrindo' })
    },
  },
};
</script>
