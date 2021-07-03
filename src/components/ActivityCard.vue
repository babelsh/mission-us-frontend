<template>
  <v-container pa-0>
    <v-card>
      <v-img
        height="200px"
        :src="imgSrc"
      />
      <v-card-title class="no-padding-bottom">
        <div class="text-truncate">
          <p class="title text-truncate">
            {{ title }}
          </p>
          <p class="body-2 grey--text text-truncate">
            {{ description }}
          </p>
        </div>
      </v-card-title>
    </v-card>
  </v-container>
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
    finalized: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.no-padding-bottom {
  padding-bottom: 0px !important;
}

.no-padding-top {
  padding-top: 0px !important;
}

.v-icon {
  pointer-events: none !important;
}
</style>
