<template>
  <div class="p-4 h-screen">
    <el-card class="h-screen tableCard">
      <el-table class="font-body"
                :data="tableData"
                stripe
                style="width: 100%">
        <el-table-column
          prop="user"
          label="User"
          width="180"
          align="center">
        </el-table-column>
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
  const axios = require('axios');
  export default {
    name: 'History',
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      fileSizeFilter(val) {
        const digitCount = val.toString().length
        if (digitCount < 4) {
          return (val).toFixed(2) + " B"
        } else if (digitCount < 7) {
          return (val / 1000).toFixed(2) + " KB"
        } else {
          return (val / 1000 / 1000).toFixed(2) + " MB"
        }
      }
    },
    async mounted() {
      let res = await axios.get("http://13.232.245.32:8000/api/transactions/");
      let data = res.data;
      for (let i = 0; i < data.length; i++) {
        this.tableData.push({
          actionType: data[i].type,
          fileSize: this.fileSizeFilter(data[i].fileSize),
          ipfsTime: data[i].ipfsTime,
          nfTime: data[i].nwTime,
          user: data[i].user
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
