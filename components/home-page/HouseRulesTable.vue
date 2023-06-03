<template>
  <div>
    <b-table :items="items" :fields="fields" responsive="sm"></b-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HouseRulesTable',
  props: {
    items: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    const fields: any[] = [
      { name: 'name', label: 'Nome' },
      { name: 'active', label: 'Estado' },
      { name: 'actions', label: 'Opções' },
    ]
    return { fields }
  },
  computed: {
    pagination() {
      return this.$store.state['house-rules'].pagination
    },
  },
})
</script>

<style>
</style>