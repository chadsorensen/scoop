<template>
  <md-list-item class="story">
    <span class="index">{{ index | increaseIndex }}</span>

    <div class="md-list-item-text">
      <span class="title">{{ story.data.title }}</span>
      <p>by {{ story.data.by }} | {{ story.data.time | timeFormat }} Ago | <span class="score">{{ story.data.score }}pts</span></p>
    </div>
    
    <md-button class="md-icon-button md-list-action">
      <router-link class="md-button-content" :to="{ name: 'Single', params: { id: story.data.id }}">
        <md-icon :md-src="commentIcon" />
      </router-link>
    </md-button>

    <a :href="story.data.url" class="cover" target="_blank"></a>
  </md-list-item>
</template>

<script>
const moment = require('moment-twitter');
const commentIcon = require('../assets/comment.svg');
export default {
  name: 'Item',
  props: [
    'story',
    'index'
  ],
  data() {
    return {
      commentIcon,
    };
  },
  filters: {
    increaseIndex(index) {
      console.log("index", index);
      return index += 1;
    },
    timeFormat(time) {
      const between = Date.now() / 1000 - Number(time)
      switch(true) {
        case between < 3600:
          return pluralize(~~(between / 60), ' minute')
          break;
        case between < 86400:
          return pluralize(~~(between / 3600), ' hour')
          break;
        default:
          return pluralize(~~(between / 86400), ' day')
      }
      function pluralize (time, label) {
        if (time === 1) {
          return time + label
        }
        return time + label + 's'
      }

    },
  },
  methods: {
  },
};
</script>
<style>
li {
  margin: 0;
}
.story {
  background-color: #fff;
  padding: 20px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;
}
.index {
  width: 40px;
  height: 40px;
  margin-right: 40px;
  background: #00cc93;
  color: #fff;
  font-size: .9em;
  font-weight: 700;
  line-height: 40px;
  border-radius: 100%;
  text-align: center;
}
/*.score {
  color: #00cc93;
}*/
.story a {
  color: #34495e;
  font-weight: 600;
  text-decoration: none;
}
.title {
  color: #202020;
}
.story a span {
  font-size: .85em;
  margin-left: 10px;
  color: #828282;
}
.story .meta {
  font-size: .85em;
  color: #828282;
}
.comment-icon {
  fill: #00cc93;
}
</style>
