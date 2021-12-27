<template>
  <div>
    <img :src="apple" />
    <span>{{ message }}</span>
    <span>{{ urlParams }}</span>
    <span @click="gotoMe">1</span>
    <!-- <uni-switch v-model="isSwitch">
      <span class="text">{{ switchText }}</span>
    </uni-switch> -->
  </div>
</template>
<script>
import apple from '@image/apple.png'
import { testFunction } from '@/config/common'
// import getUrlParameters from 'common-2021';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isSwitch: false,
      apple: apple,
      message: testFunction(),
      // urlParams: getUrlParameters('http://localhost:5000/shushan#/pages/board/boardDeatil?repairNo=BX2112200002')
    }
  },
  computed: {
    switchText () {
      return this.isSwitch ? '开' : '关';
    }
  },
  methods: {
    gotoMe () {
      this.$router.push('/me')
    },
  }
}
</script>

<style lang="less" scoped>
@import '@/styless/common';
span {
  color: #4caf50;
}
.allcover {
  position: absolute;
  top: 0;
  right: 0;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>