<template>
<div>
  <v-container text-xs-center>
    <v-layout>
      <v-flex lg8>
        <img src="../images/logo.png" height="150px">
      </v-flex>
    </v-layout>
  </v-container>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <p class="headline">{{ title }}</p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <p class="subheading grey--text">
          {{ abstract }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs7 offset-xs7 offset-lg0>
        <v-btn class="primary">SABER MAIS</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'trail',
  props: {
    title: {
      type: String,
      default: '',
    },
    abstract: {
      type: String,
      default: '',
    },
    imageSrc: {
      type: String,
      default: '',
    } 
  }
}
</script>

<style scoped>

</style>