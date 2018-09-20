<template>
  <v-container fluid>
    <div>
      <v-layout text-xs-center>
        <v-flex>
          <img src="../images/logo.png" height="150px">
        </v-flex>
      </v-layout>
    </div>
    <p class="title">{{ title }}</p>
    <p class="body-2 grey--text text-truncate">
      {{ abstract }}
    </p>
    <v-layout>
      <v-flex xs12 :text-xs-right="isSmall">
        <v-btn class="primary">SABER MAIS</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
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
    },
  },
  computed: {
    isSmall() {
      return this.$vuetify.breakpoint.name === 'xs'
        || this.$vuetify.breakpoint.name === 'sm';
    },
  },
};
</script>
