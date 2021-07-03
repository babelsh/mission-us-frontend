<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card color="blue darken-1" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Parabéns! Vocês concluíram a trilha!</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>               
    </v-layout>  
    <v-layout>        
      <v-flex xs12>
        <v-card color="white darken-2" class="black--text">
          <v-layout>
            <v-flex xs4>
              <v-img
                :src="require('@/assets/logo.png')"
                height="125px"
                contain
              />
            </v-flex>
            <v-flex xs8>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Missão Nós</div>
                  <v-btn block color="blue" dark href="https://jlio16.typeform.com/to/h5lwwf">
                    quero mais
                  </v-btn>
                  <v-btn block color="grey" dark @click="voltar">voltar</v-btn>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>                            
        </v-card>
      </v-flex>
    </v-layout>    
  </v-container>
</template>

<script>
  export default {
    name: 'SaberMais',
    methods: {
      voltar() {
        this.$emit('voltar');
      },
    },
  };
</script>

<style scoped>

</style>