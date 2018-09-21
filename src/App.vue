<template>
  <v-app>
    <v-navigation-drawer
      persistent
      clipped
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="{ name: item.route }"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app clipped-left class="primary">
      <v-toolbar-side-icon
        class="white--text"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="subheading white--text" v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      items: [
        {
          title: 'Login',
          route: 'login',
        },
        {
          icon: 'home',
          title: 'Início',
          route: 'home',
        },
      ],
      title: 'Ambiente Virtual da Família',
    };
  },
};
</script>

<style lang="scss">
p {
  margin-bottom: 5px;
}
</style>
