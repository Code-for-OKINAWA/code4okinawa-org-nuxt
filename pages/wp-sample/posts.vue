<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold">Posts</h1>
    <div class="border p-4">
      <div v-for="post in posts" :key="post.id" class="border p-4 mb-4">
        <h2 class="text-xl font-bold">{{ post.title.rendered }}</h2>
        <p>{{ post.date }}</p>
        <p>{{ author(post.author) && author(post.author).name }}</p>
        <div v-html="post.excerpt.rendered" class="mt-2 bg-gray-200"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  WP_REST_API_Posts,
  WP_REST_API_Users,
  WP_REST_API_User,
} from "wp-types";

interface Data {
  posts: WP_REST_API_Posts;
  users: WP_REST_API_Users;
}

export default Vue.extend({
  layout: "tailwind",
  data(): Data {
    return {
      posts: [],
      users: [],
    };
  },

  async asyncData({ $wpapi, route }) {
    const page = parseInt(route.query.page?.toString()) || 1;
    const posts: WP_REST_API_Posts = await $wpapi
      .posts()
      .perPage(10)
      .page(page)
      .get();
    const users: WP_REST_API_Users = await $wpapi.users().get();
    return { posts, users };
  },

  computed: {
    titles(): string[] {
      return this.posts.map(p => p.title.rendered);
    },
  },

  methods: {
    author(id: number): WP_REST_API_User | undefined {
      return this.users.find(user => user.id == id);
    },
  },
});
</script>
