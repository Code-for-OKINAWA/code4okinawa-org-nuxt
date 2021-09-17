<template>
  <div>
    <h1>CodeforOkinawa</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  middleware({ redirect }) {
    redirect("/wp-sample/posts");
  },
});
</script>
