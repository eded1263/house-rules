<template>
  <div class="home-page">
    <div v-if="$fetchState.pending" class="loading">Carregando...</div>
    <HouseRulesTableVue v-else :items="items" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HouseRulesTableVue from '~/components/home-page/HouseRulesTable.vue'
import { HouseRulesActions } from '~/store/house-rules'
export default Vue.extend({
  name: 'IndexPage',
  components: { HouseRulesTableVue },
  async fetch() {
    return await this.$store.dispatch(
      `house-rules/${HouseRulesActions.FETCH_RULES}`
    )
  },
  computed: {
    items() {
      return this.$store.state['house-rules'].rules
    },
  },
})
</script>
