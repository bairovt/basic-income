<template>
  <v-app>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
          class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-icon dark left>spa</v-icon> Базовый доход
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
<!--todo: dropdown menu Еще (More) or sidebar-->
    </v-toolbar>
    <main>
      <v-content>
        <router-view>
        </router-view>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import VContent from "vuetify/es5/components/VGrid/VContent";

  export default {
    components: {VContent},
    data () {
      return {
        drawer: false,
        menuItems: [
          {icon:'supervisor_account', title: 'Проблема', link: '/problem'},
          {icon:'room', title: 'Технологии', link: '/hitech'},
          {icon:'person', title: 'Альтернатива', link: '/alternative'},
          {icon:'face', title: 'О проекте', link: '/about'}
        ]
      }
    }
  }

</script>
