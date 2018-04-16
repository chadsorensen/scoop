<template>
  <md-list-item class="story">
    <span class="score">{{ story.data.score }}</span>

    <div class="md-list-item-text">
      <span class="title">{{ story.data.title }}</span>
      <span>by {{ story.data.by }} | {{ story.data.time | timeFormat }} Ago</span>
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
  ],
  data() {
    return {
      commentIcon,
    };
  },
  filters: {
    timeFormat(time) {
      return moment(time).format("M.D.YY");
      console.log("time", time);
      let now = Date.now();
      console.log("now", now);
      console.log("36e5 * 5", 36e5 * 5)
      // return moment(moment() + (36e5 * 5)).twitterShort()
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
.score{
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
