<template>
  <fieldset>
    <legend>2021组件</legend>
    <h1>今天。。。</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ tel }}</h1>
    <slot></slot>
  </fieldset>
</template>
<script>
export default {
  name: 'FiledSet',
  data () {
    return {
      msg: 'first components'
    }
  },
  props: {
    tel: {
      type: Number,
      default: () => {
        return 18268217722
      }
    }
  }
}
</script>
<style scoped>
h1 {
  color: blue;
}
</style>