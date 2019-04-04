<template>
  <v-app>
    <v-toolbar app fixed color="orange">
      <v-toolbar-title>
        {{ items[bottomNavIndex].title }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon @click.stop="showMenu = !showMenu">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fill-height style="background-color:#f0f0f0">
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="showMenu" right temporary fixed>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon light>
              thumb_up
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Menüpunkt</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-bottom-nav app fixed :value="true" :active.sync="bottomNavIndex" color="grey">
      <v-btn v-for="(item, i) in items" :key="i" :to="item.to" router exact>
        <v-icon :color="i == bottomNavIndex ? 'orange' : 'white'">
          {{ item.icon }}
        </v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<style>
.dev_border {
  border: #7f7f7f 1px dashed;
}
</style>

<script>
export default {
  data() {
    return {
      title: 'Conference App',
      showMenu: false,
      bottomNavIndex: 0,
      items: [
        {
          icon: 'event',
          title: 'Agenda',
          to: '/'
        },
        {
          icon: 'room',
          title: 'Lageplan',
          to: '/location'
        },
        {
          icon: 'info',
          title: 'Informationen',
          to: '/infos'
        },
        {
          icon: 'settings',
          title: 'Einstellungen',
          to: '/settings'
        }
      ]
    }
  },
  created() {
    this.items.forEach((item, i) => {
      if (item.to === this.$route.path) {
        this.bottomNavIndex = i
      }
    })
  }
}
</script>
