<template>
  <el-color-picker class="color-picker w-full" v-model="data" :size="size" @change="$emit('change', $event)" />
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String,
    size: String
  },
  watch: {
    value: {
      handler() {
        this.data = this.value
      },
      immediate: true
    }
  },
  data() {
    return {
      data: null
    }
  }
}
</script>
