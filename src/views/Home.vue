<template>
  <div class="grey lighten-3">  
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue darken-1" class="white--text" >
              <v-layout>            
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Descobrindo seu filho</div>
                      <div>O que você precisa saber sobre seu filho?</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <div class="text-xs-center">
                    <v-btn fab dark small color="blue " >
                      <div class="headline">1</div>
                    </v-btn>
                    <v-btn fab dark small color="blue " >
                      <div class="headline">2</div>
                    </v-btn>
                    <v-btn fab dark small color="blue " >
                      <div class="headline">3</div>                       
                    </v-btn>
                  </div>
                  <div class="text-xs-center">em progresso</div>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>               
            </v-card>
          </v-flex>    
        </v-layout>
          
        <v-timeline align-top dense>
          <v-timeline-item color="blue">
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
            <v-btn block color="blue" dark>iniciar</v-btn>
          </v-timeline-item>
  
          <v-timeline-item color="grey">
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
                 <v-btn block color="grey lighten-1" dark>bloqueado</v-btn>
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
