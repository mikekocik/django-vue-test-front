<template>
  <div class="about">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key='post.id'>
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState('posts', [
    'posts',
  ]),
  methods: mapActions('posts', [
    'GET_POSTS',
  ]),
  mounted() {
    this.GET_POSTS();
  },
};
</script>
