<template>
  <div>
    <v-card>
      <v-container fluid grid-list-lg>
    <v-layout pt-1>       
          <v-flex xs12>
            <v-card color="blue darken-1" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Objetivo</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>               
        </v-layout>  
          <v-layout>
      <v-flex xs12>
        <v-card>
            <v-progress-linear
      color="blue"
      height="10"
      value="25"
    ></v-progress-linear>
          
    <v-carousel            
                hide-delimiters
                interval="999000"
                height="250">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
         
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Informações que valem ser divulgadas</h3>
              <div>Experiências positivas na primeira infância contribuem para o desenvolvimento saudável do cérebro, permitindo que a arquitetura cerebral seja sólida e tenha uma estrutura mais apta a superar dificuldades.
</div>
            </div>
          </v-card-title>
  
          <v-card-actions>      
 
<v-layout align-center>           
  <v-flex xs5>     
     <v-btn color="grey darken-2" small dark  >
        <v-icon dark left>skip_previous</v-icon>
      </v-btn>  
        </v-flex>
        
    <v-flex xs3> 
           <div> 1 de 2
            </div>
         </v-flex>    
     <v-flex  > 
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
  </div>
</template>

<script>
  export default {
    name: 'Objetivo',
    data() {
      return {
        items: [
          {
            src: 'https://www.primeirainfanciaempauta.org.br/img/cover-1.png'
          },
          {
            src: 'https://www.navegg.com/nvgadm/wp-content/uploads/2016/12/navegg-161212-modelo-de-atribuicao-a-visao-holistica-da-jornada-de-compra-2-940x400.jpg'
          }        
        ],
      };
    },
  };
</script>

<style scoped>

</style>