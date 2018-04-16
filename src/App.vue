<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .15s cubic-bezier(.25, .46, .45, .94);
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .cover {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    cursor: pointer;
  }
</style>
