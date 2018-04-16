<template>
  <md-tabs md-sync-route>
    <md-tab id="tab-home" md-label="Top Stories" to="/"></md-tab>
    <md-tab id="tab-pages" md-label="New Stories" to="/new"></md-tab>
  </md-tabs>
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

<style>
  .md-tabs {
    margin-left: 30px;
  }
  .md-tabs .md-tabs-navigation .md-button {
    color: #202020;
  }
  .md-tabs .md-tabs-navigation .md-button.router-link-exact-active {
    color: #00cc93;
  }
  .md-button:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    opacity: 1;
    background: transparent;
    transition: .4s cubic-bezier(.4,0,.2,1);
    will-change: background-color,opacity;
    content: " "
  }
  .md-tabs-indicator {
    background: #00cc93;
  }
</style>

