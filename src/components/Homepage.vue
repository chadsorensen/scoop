<template>
  <div class="container">
    <md-list class="md-double-line">
      <item v-for="(story, index) in stories" :key="story.id" :story="story" :index="index"></item>
    </md-list>
  </div>
</template>

<script>
import Item from '@/components/Item';

export default {
  name: 'Homepage',
  components: {
    Item,
  },
  data() {
    return {
      err: '',
      stories: this.$store.state.topStories,
    };
  },
  created() {
    console.log('this.$store', this.$store);
    if (this.$store.state.topStories.length === 0) this.$store.dispatch('fetch_top_stories');
  },
};
</script>

<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #202020;
}
</style>
