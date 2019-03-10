<template>
  <div>
    <v-card v-if="step === 1">
      <v-container fluid grid-list-lg>
        <v-layout pt-1>
          <v-flex xs12>
            <v-card color="blue darken-1" class="white--text">
              <v-card-title primary-title>
                <div class="headline">A importância do brincar</div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>  
        <v-layout>
          <v-flex xs12>
            <v-card>
              <v-progress-linear color="blue" height="10" value="50" />              
              <v-carousel hide-delimiters interval="999000" height="250">
                  <v-carousel-item>
 <center>  <iframe height="250"  src="https://www.youtube.com/embed/E7Qs0afrURI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   </center>                    </v-carousel-item>
                </v-carousel>              
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Brincar na infância</h3>
                  <div>Você sabia que crianças que recebem maior atenção dos seus pais possuem um maior QI? 
                    Um estudo da Universidade da Pensilvânia, EUA, confirmou esse fato. Acompanhando 64 crianças 
                    desde o nascimento até os 20 anos de idade, pesquisadores constataram que aqueles que recebiam
                     atenção dos pais possuíam um QI mais alto quando adultos. Neste vídeo a psicóloga Sabrina irá falar sobre alguns benefícios do brincar e a importância para o desenvolvimento da criança.</div>                   
                </div>
              </v-card-title>
              <v-card-actions>       
                <v-layout align-center>
                  <v-flex xs5 @click="goToHome">
                    <v-btn color="grey darken-2" small dark>
                      <v-icon dark left>skip_previous</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs2> 
                    <div>1/2</div>
                  </v-flex>
                  <v-flex xs5 @click="step = 2">
                    <v-btn color="blue darken-2" small dark left>
                      <v-icon dark right>skip_next</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    <v-card v-if="step === 2">
        <v-container fluid grid-list-lg>
          <v-layout pt-1>
            <v-flex xs12>
              <v-card color="blue darken-1" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Brincar e educar</div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>               
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <v-card>
                <v-progress-linear color="green" height="10" value="100"/>
                <v-carousel hide-delimiters interval="999000" height="250">
                  <v-carousel-item>
                    <center> <iframe height="250"  src="https://www.youtube.com/embed/DdMWsvMxjIQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  </center>
                    </v-carousel-item>
                </v-carousel>
                <v-card-title primary-title>
                    <h3 class="headline mb-0">Brinquedos pedagógicos com a Educaliv</h3>
                    <div>
                      A essência da infância está nos momentos que a criança tem para a exploração: o faz de conta, 
                      a brincadeira e o jogo. Os brinquedos pedagógicos são os aliados dos pais nestes momentos especiais. 
                      Neste vídeo você irá conhecer dois destes brinquedos e uma loja especializada em jogos de inclusão, pedagógicos e de desafio.
                    </div>
                </v-card-title>
    
              <v-card-actions>      
                <v-layout align-center>      
                  <v-flex @click="step = 1" xs5>     
                    <v-btn color="grey darken-2" small dark>
                      <v-icon dark left>skip_previous</v-icon>
                    </v-btn>  
                  </v-flex>
                  <v-flex xs2>2/2</v-flex>    
                  <v-flex xs5 @click="concluir"> 
                    <v-btn color="green" small dark left>
                      Concluir
                    </v-btn>       
                  </v-flex>  
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>           
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Objetivo',
    data() {
      return {
        step: 1,
        items: [
          {
            src: 'https://www.primeirainfanciaempauta.org.br/img/cover-1.png'
          },
          {
            src: 'https://www.navegg.com/nvgadm/wp-content/uploads/2016/12/navegg-161212-modelo-de-atribuicao-a-visao-holistica-da-jornada-de-compra-2-940x400.jpg'
          },
        ],
      };
    },
    methods: {
      concluir() {
        this.$router.push({ name: 'home', params: { step: 2 } });
      },
      goToHome() {
        this.$router.push({ name: 'home' });
      },
    },
  };
</script>
