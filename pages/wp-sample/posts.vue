<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="title in titles" :key="title">
        {{ title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { WP_REST_API_Posts } from "wp-types";

interface Data {
  posts: WP_REST_API_Posts;
}

export default Vue.extend({
  data(): Data {
    return {
      posts: [],
    };
  },

  async asyncData({ $wpapi }): Promise<Data> {
    const posts: WP_REST_API_Posts = await $wpapi.posts().get();
    return { posts };
  },

  computed: {
    titles(): string[] {
      return this.posts.map(p => p.title.rendered);
    },
  },
});
</script>
