<template>
  <div class="grey lighten-3">  
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card dark flat>
              <v-img
                height="200"
                src="http://psicopedagogiacuritiba.com.br/wp-content/uploads/2016/05/o-livre-brincar-e-o-desempenho-escolar-1.jpg"                
                gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
              >
                <v-container fill-height>
                  <v-layout align-center>              
                    <v-layout column justify-end>
                      <h3 class="headline mb-0 has-padding">Trilha: Brincar e o desenvolvimento da criança</h3>
                      <div class="mb-0 has-padding">Março, 2019</div>
                    </v-layout>
                  </v-layout>
                </v-container>
              </v-img>
            </v-card>
          </v-flex>    
        </v-layout>
          
        <v-timeline align-top dense>
          <v-timeline-item :color="statusColor(1)">
            <v-layout pt-3>
              <v-flex>
                <v-avatar>
                  <v-img
                    src="http://isabelateixeiradacosta.com.br/wp-content/uploads/brincar-207x300.jpg"
                  />
                </v-avatar>
               <strong>Importância do brincar e os brinquedos pedagógicos</strong>
                <div class="caption">
                  Ambiente, afeto, rotina: tudo isso exerce influência na evolução da criança. E o brincar é melhor maneira para desenvolver a criança.
                </div>
              </v-flex>
            </v-layout>
            <v-btn v-if="isActive(1)" block color="blue" dark @click="goToObjetivo">iniciar</v-btn>
            <v-btn v-else block color="grey lighten-1" dark @click="goToObjetivo">rever</v-btn>
          </v-timeline-item>
  
          <v-timeline-item :color="statusColor(2)">
            <v-layout wrap pt-3>
              <v-flex>
                <v-avatar>
                  <v-img
                  src="https://demonstre.com/wp-content/uploads/2018/01/espacial.jpg"
                  />
                </v-avatar>
                <strong>Vamos brincar!</strong>
                <div class="caption mb-2">
                   A essência da infância está nos momentos que a criança tem para a exploração: o faz de conta, a brincadeira e o jogo. Vamos explorar estes momentos com uma brincadeira.
                </div>
                  <v-btn v-if="isActive(2)" block color="blue" dark @click="goToAtividade">
                    iniciar
                  </v-btn>
                  <v-btn v-else block color="grey lighten-1" dark>bloqueado</v-btn>
              </v-flex>
            </v-layout>
          </v-timeline-item>  
        </v-timeline> 
      </v-container>
      <v-bottom-nav absolute color="transparent">
        <v-btn flat color="primary">Progresso</v-btn>
        <v-btn flat color="primary">Dúvidas</v-btn>
        <v-btn flat color="primary">Profissionais</v-btn>
      </v-bottom-nav>
    </v-card>
  </div>
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
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    goToObjetivo() {
      this.$router.push({ name: 'objetivo' });
    },
    goToAtividade() {
      this.$router.push({ name: 'atividade' });
    },
    statusColor(index) {
      return this.step === index ? 'blue' : 'grey';
    },
    isActive(index) {
      return this.step === index;
    },
  },
};
</script>
<style scoped lang="scss">
.has-padding {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
