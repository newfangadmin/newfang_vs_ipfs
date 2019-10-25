<template>
  <div class="p-4 h-screen">
    <el-card class="h-screen tableCard">
      <el-table class="font-body"
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="actionType"
          label="Action Type"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          prop="fileSize"
          label="File Size"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          prop="ipfsTime"
          label="IPFS"
          align="center">
        </el-table-column>
        <el-table-column
          prop="nfTime"
          label="Newfang"
          align="center">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'History',
  data() {
    return {
      tableData: [{
        actionType: 'Upload',
        fileSize: '2.3MB',
        ipfsTime: '112s',
        nfTime: '23s'
      }]
    }
  },
  mounted() {
    for(var i=0; i<20; i++) {
      this.tableData.push({
        actionType: 'Upload',
        fileSize: '2.3MB',
        ipfsTime: '112s',
        nfTime: '23s'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-card__body {
  padding: 0 !important;
}

.tableCard {
  overflow: auto;
}
</style>
