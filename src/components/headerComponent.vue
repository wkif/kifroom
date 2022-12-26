<template>
  <div class="headerView">
    <div class="logo"></div>
    <div class="titleView">
      {{ config.blogName }}
    </div>
    <div class="tabView">

    </div>
  </div>
</template>

<script setup lang="ts">
import config from '../config'
import { reactive } from 'vue'
type Tab = {
  id:number,
  name:string
}
const tabList: Array<Tab> = reactive([])
</script>

<style lang="less" scoped>

</style>
