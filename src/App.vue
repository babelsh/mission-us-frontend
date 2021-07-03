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
      <v-toolbar-side-icon class="white--text" @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-toolbar-side-icon>
      <h3 class="title white--text font-weight-light text-xs-center grow">{{ title }}</h3>
      <v-avatar>
        <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"></v-img>
      </v-avatar>
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
          icon: 'lock',
          title: 'Login',
          route: 'login',
        },
        {
          icon: 'home',
          title: 'Início',
          route: 'home',
        },
      ],
      title: 'Filho Mariazinha',
    };
  },
};
</script>

<style lang="scss">
p {
  margin-bottom: 5px;
}
</style>
