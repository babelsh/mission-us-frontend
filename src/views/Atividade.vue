<template>
  <v-card>
    <v-container fluid grid-list-lg>
      <v-layout pt-1>       
        <v-flex xs12>
          <v-card color="blue darken-1" class="white--text">
            <v-card-title primary-title>
              <div class="headline">Atividade: Reforço no desenvolvimento da criança </div>
            </v-card-title>
          </v-card>
        </v-flex>               
      </v-layout>  
          
    <v-stepper v-model="currentStep" vertical>
      <v-stepper-step :complete="currentStep > 1" step="1">
        Dados gerais
      </v-stepper-step>  
      <v-stepper-content step="1">      
        <div class="has-margin-bottom">
          <h3>O objetivo desta atividade:</h3>
          <span>Praticar exercícios para estimulação de comportamentos desejáveis</span>         
        </div>       
        <div class="has-margin-bottom">
          <h3>Áreas do desenvolvimento humano envolvidas nesta atividade</h3>
          <v-flex xs12 sm9>
          <v-chip >Psicosocial</v-chip>
          <v-chip >Cognitivo</v-chip>
          <v-chip >Físico</v-chip>
          </v-flex>  
        </div>
        <v-layout>
          <v-flex xs5>
            <v-btn small color="primary" @click="currentStep = 2">Continuar</v-btn>
          </v-flex>
          <v-flex xs5>
            <v-btn small dark flat color="grey" @click="goToHome">Cancelar</v-btn>
          </v-flex>
        </v-layout>
      </v-stepper-content>
  
      <v-stepper-step :complete="currentStep > 2" step="2">
        Vamos começar!
      </v-stepper-step>  
      <v-stepper-content step="2">
        <h3>Preparação:</h3>         
        <div class="has-margin-bottom">
          Antes de começar esta atividade, certifique-se que sua criança está confortável,
          como por exemplo
          <ul>
            <li>Não está com fome</li>
            <li>Está em um local que não possui distrações (televisão, video grames, etc...)</li>
          </ul>
        </div>  
        <div class="has-margin-bottom">
          <h3>Etapa 1</h3>        
          <span> Peça ao seu filho para que ele pegue seus brinquedos.</span> 
          <h3>Etapa 2</h3>           
          <span> Brinque com seu filho e após a brincadeira peça para que ele guarde os brinquedos em um local adequado.</span> 
          <h3>Etapa 3</h3>           
          <span>
            Após finalizar a organização, agradeça ele pela sua dedicação e carinho,
            demonstrando o quanto ele é importante para você.
          </span>
        </div>
        <div class="has-margin-bottom">
          <h3>Dica</h3>
          <span> Crianças gostam de atenção, ao falar com seu filho olhe nos seus olhos e
            demonstre expressões de afeto.
          </span>
        </div>
        <v-layout>
          <v-flex xs5>
            <v-btn small color="primary" @click="currentStep = 3">Continuar</v-btn>
          </v-flex>
          <v-flex xs5>
            <v-btn small flat dark color="grey"  @click="currentStep = 1">Voltar</v-btn>
          </v-flex>
        </v-layout>
      </v-stepper-content>
  
      <v-stepper-step :complete="currentStep > 3" step="3">Conclusão da atividade</v-stepper-step>  
        <v-stepper-content step="3">
          <h3>Parabéns!</h3>
          <div class="has-margin-bottom">
            Continue reforçando e agradencendo seu filho quando ele demonstra boas ações
            e comportamentos.
          </div>
          <v-layout>
        </v-layout>
        <v-layout>
          <v-flex xs5>
            <v-btn small color="primary" @click="concluido = true">Concluir</v-btn>
          </v-flex>
          <v-flex xs5>
            <v-btn small dark flat color="grey" @click="goToHome">Voltar</v-btn>            
          </v-flex>
        </v-layout>
        </v-stepper-content>
      </v-stepper>           
    </v-container>
    <v-dialog
      v-model="concluido"
      width="500"
    >
      <saber-mais @voltar="concluido = false" />
    </v-dialog>         
  </v-card>
</template>

<script>
import SaberMais from './SaberMais';

  export default {
    name: 'Atividade',
    components: {
      SaberMais,
    },
    data() {
      return {
        concluido: false,
        currentStep: 1,
        items: ['Físico', 'Cognitivo', 'Psicosocial'],
        value: ['Físico', 'Cognitivo', 'Psicosocial'],
      };
    },
    methods: {
      goToHome() {
        this.$router.push({ name: 'home', params: { step: 2 } });
      },
    }
  };
</script>

<style scoped lang="scss">

.has-margin-bottom {
  padding-bottom: 10px !important;
}

</style>