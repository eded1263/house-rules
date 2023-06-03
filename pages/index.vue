<template>
  <div class="home-page">Teste - Home page</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async fetch(ctx) {
    return await ctx.store.dispatch('house-rules/FETCH_RULES')
  },
})
</script>
