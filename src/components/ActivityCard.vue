<template>
  <v-card>
    <v-img
      :height="imageHeight"
      :src="imgSrc"
    ></v-img>
    <v-card-title>
      <div>
        <span class="title">{{ title }}</span>
      </div>
    </v-card-title>
    <v-card-actions style="padding-top: 0px">
      <v-btn flat>
        Saber mais
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="secondary">
        Feito
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'activity-card',
  props: {
    description: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '150px';
        case 'sm': return '200px';
        case 'md': return '200px';
        case 'lg': return '200px';
        case 'xl': return '200px';
        default: console.log('inválid screen size.');
      }

      return '';
    },
  },
};
</script>
