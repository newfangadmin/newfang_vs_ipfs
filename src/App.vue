<template>
  <div id="app" class="h-screen">
    <Navbar />
    <el-row :gutter="20">
      <el-col :md="24" class="main">
        <UpDown />
      </el-col>
      <!-- <el-col :md="12" class="main">
        <History />
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import UpDown from './components/UpDown.vue'
// import History from './components/History.vue'

export default {
  name: 'app',
  components: {
    UpDown,
    Navbar,
    // History
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.main {
  height: calc(100vh - 48px);
}
</style>
