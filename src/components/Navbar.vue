<template>
  <div class="pure-menu pure-menu-horizontal">
    <div class="container">
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link :to="{ path: '/' }" class="pure-menu-link">Top Stories</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link :to="{ path: '/new' }" class="pure-menu-link">New Stories</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
  .pure-menu {
    background-color: #E17842;
  }
  .pure-menu a {
    color: white;
  }
</style>

