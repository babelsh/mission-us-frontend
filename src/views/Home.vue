<template>
  <div class="grey lighten-3">  
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card dark flat>
              <v-img
                height="200"
                src="https://www.navegg.com/nvgadm/wp-content/uploads/2016/12/navegg-161212-modelo-de-atribuicao-a-visao-holistica-da-jornada-de-compra-2-940x400.jpg"                
                gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
              >
                <v-container fill-height>
                  <v-layout align-center>              
                    <v-layout column justify-end>
                      <h3 class="headline mb-0 has-padding">Trilha: descobrindo seu filho</h3>
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWMekAs_Ldlhug3VGPGqv-0qSstNzs2SgxDCEMl79OAMMKbca"
                  />
                </v-avatar>
               <strong>A Criança e seu Desenvolvimento</strong>
                <div class="caption">
                  Ambiente, afeto, rotina: tudo isso exerce influência na evolução da criança. E os cuidados devem começar ainda na gravidez.
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnhr8k4XVKfUomGttYdMbEVQafTcRkdyFMvI1YspFltIpoCCv"
                  />
                </v-avatar>
                <strong>Afeto é fundamental</strong>
                <div class="caption mb-2">
                  A maior parte das pessoas não relaciona as ligações afetivas ao desenvolvimento infantil.
                  Apesar de reconhecer que o carinho dos adultos é importante e influencia o temperamento da criança,
                  apenas 12% da população] considera o afeto importante para o desenvolvimento.
                </div>
                  <v-btn v-if="isActive(2)" block color="blue" dark @click="goToAtividade">
                    iniciar
                  </v-btn>
                  <v-btn v-else block color="grey lighten-1" dark>bloqueado</v-btn>
              </v-flex>
            </v-layout>
          </v-timeline-item>
  
          <v-timeline-item color="grey">
            <v-layout wrap pt-3>
              <v-flex>
                <v-avatar>
                  <v-img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Sl_A75vqKCouBWwshmzdokwnBILnYctL-C4TCw-9XPCocFMyBg"                    
                  />
                </v-avatar>
                <strong>&nbsp; &nbsp; Aprendizado a toda hora e em todo lugar</strong>
                <div class="caption mb-2">ara muitos brasileiros, o período mais importante da infância se inicia juntamente com a formação das lembranças que a criança levará consigo até a fase adulta, ou seja, entre os 2 e os 4 anos. E a maioria da população não considera que atividades como andar, correr, falar, entre outras, também façam parte do aprendizado cognitivo.</div>                        
                <v-btn block color="grey lighten-1" dark>bloqueado</v-btn>
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
