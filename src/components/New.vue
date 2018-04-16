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
  name: 'New',
  components: {
    Item,
  },
  data() {
    return {
      err: '',
      stories: this.$store.state.newStories,
    };
  },
  created() {
    if (this.$store.state.newStories.length === 0) this.$store.dispatch('fetch_new_stories');
  },
};
</script>
