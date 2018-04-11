import axios from 'axios';

export default {
  fetch_top_stories: ({ commit }) => {
    const endpoint = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    axios.get(endpoint)
      .then((response) => {
        const results = response.data.slice(0, 25);
        results.forEach((element) => {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${element}.json`)
            .then((story) => {
              commit('APPEND_TOP_STORY', story);
            }).catch((err) => {
              console.log('err', err);
            });
        });
      }).catch((err) => {
        console.log('err', err);
      });
  },
  fetch_new_stories: ({ commit }) => {
    const endpoint = 'https://hacker-news.firebaseio.com/v0/newstories.json';
    axios.get(endpoint)
      .then((response) => {
        const results = response.data.slice(0, 25);
        results.forEach((element) => {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${element}.json`)
            .then((story) => {
              commit('APPEND_NEW_STORY', story);
            }).catch((err) => {
              console.log('err', err);
            });
        });
      }).catch((err) => {
        console.log('err', err);
      });
  },
};
