<template>
  <v-container fluid>
     <v-container fluid grid-list-md ma-0 pa-0>
      <v-layout row wrap>
        <v-flex xs12>
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
          <v-card color="white">
            <v-layout>
              <v-flex xs12>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">A criança e seu desenvolvimento</div>
                    <div>LOREM IPSUM</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              <v-btn color="primary" block>INICIAR</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="white">
            <v-layout>
              <v-flex xs12>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Afeto é fundamental</div>
                    <div>LOREM IPSUM</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              <v-btn color="primary" block disabled>BLOQUEADO</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="white">
            <v-layout>
              <v-flex xs12>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Aprendizado toda hora e em todo lugar</div>
                    <div>LOREM IPSUM</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              <v-btn color="primary" block disabled>BLOQUEADO</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
     </v-container>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        currentStep: 1,
      }
    }
  }
</script>

<style scoped>

</style>