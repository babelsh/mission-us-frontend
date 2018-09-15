<template>
  <v-container text-xs-center>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <p class="headline">Bem-vindo ao Missão Nós!</p>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex>
        <img src="../images/logo.png" height="150px">
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex md6 lg6 xs10>
        <v-form>
          <v-text-field label="E-mail" required autofocus />
          <v-text-field
            label="Senha"
            required
            persistent-hint
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'visibility_off' : 'visibility'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs10 lg2>
        <v-btn color="primary" block>Prosseguir</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      showPassword: false,
    };
  },
}
</script>

<style scoped>

</style>
