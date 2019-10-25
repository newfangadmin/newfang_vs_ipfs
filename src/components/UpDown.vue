<template>
  <div class="p-6 text-center md:text-left">
    <h1 class="text-4xl md:text-5xl font-display font-light">Test Newfang against IPFS</h1>
    <p class="font-body mb-4">...and see how our Uploads/Downloads compare.</p>
    <el-row class="mt-6">
      <el-col :span="24">
        <input type="file" ref="fileSelect" style="display: none" v-on:change="handleFileUpload()">
        <button class="rounded-full bg-white uppercase font-semibold p-2 w-32" @click="handleUploadBtnClick()">Upload</button>
      </el-col>
      <el-col :span="24" class="mt-3" v-if="active">
        <span class="font-body ml-2">Size: </span>
        <span class="font-body font-semibold">{{ fileSize | fileSizeFilter }}</span>
        <span class="font-body ml-2">Type: </span>
        <span class="font-body font-semibold">{{ fileType }}</span>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mt-4 font-body" v-if="active">
      <el-col :span="12">
        <el-card class="w-100 text-center">
          <div slot="header" class="clearfix flex font-semibold">
            <img class="h-6" src="../assets/ipfs.svg" />
            <span class="ml-2">IPFS</span>
          </div>
          <div v-loading="ipfsUp" element-loading-spinner="el-icon-loading" element-loading-text="Uploading...">
            <div class="mt-4 mb-4">
              <span>Upload time: </span>
              <span class="font-semibold">{{ ipfsUpTime }}</span><br/>
              <span>Download time: </span>
              <span class="font-semibold">{{ ipfsDownTime }}</span><br/>
              <button class="rounded-full bg-white uppercase text-sm font-semibold mt-4 pl-4 pr-4 p-2 w-32" @click="handleIPFSDownload()"><i class="el-icon-loading" v-if="ipfsDown"></i> Download</button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="w-100 text-center">
          <div slot="header" class="clearfix flex font-semibold">
            <img class="h-6 p-1" src="../assets/nf_sym.svg" />
            <span>Newfang</span>
          </div>
          <div v-loading="nfUp" element-loading-spinner="el-icon-loading" :element-loading-text="nfUpStatus" customClass="loadingC">
            <div class="mt-4 mb-4">
              <span>Upload time: </span>
              <span class="font-semibold">{{ nfUpTime }}</span><br/>
              <span>Download time: </span>
              <span class="font-semibold">{{ nfDownTime }}</span><br/>
              <button class="rounded-full bg-white uppercase text-sm font-semibold mt-4 pl-4 pr-4 p-2 w-32" @click="handleNFDownload()"><i class="el-icon-loading" v-if="nfDown"></i> Download</button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'UpDown',
  props: {
    msg: String
  },
  filters: {
    fileSizeFilter(val) {
      const digitCount = val.toString().length
      if(digitCount < 4) {
        return (val).toFixed(2) + " B"
      } else if(digitCount < 7) {
        return (val/1000).toFixed(2) + " KB"
      } else {
        return (val/1000/1000).toFixed(2) + " MB"
      }
    }
  },
  data() {
    return {
      fileSize: 0,
      fileType: "",
      active: false,
      ipfsUp: false,
      nfUp: false,
      ipfsDown: false,
      nfDown: false,
      ipfsUpTime: "--",
      nfUpTime: "--",
      ipfsDownTime: "--",
      nfDownTime: "--",
      nfUpStatus: "Waiting for IPFS upload to finish up."
    }
  },
  methods: {
    resetData() {
      this.fileSize = 0
      this.fileType = ""
      this.ipfsUpTime = "--"
      this.nfUpTime = "--"
      this.ipfsDownTime = "--"
      this.nfDownTime = "--"
      this.nfUpStatus = "Waiting for IPFS upload to finish up."
    },

    handleUploadBtnClick() {
      if(!this.active) {
        this.resetData()
        this.$refs.fileSelect.click()
      } else {
        this.$message({
          message: 'Upload/Download in progress.',
          type: 'warning'
        })
      }
    },

    handleFileUpload() {
      const file = this.$refs.fileSelect.files[0]
      if (file !== undefined) {
        this.active = true
        this.ipfsUp = true
        this.nfUp = true
        this.fileSize = file.size
        this.fileType = file.type
        // ipfs upload code
        // on success, update this.ipfsUp to false and update this.nfUpStatus to "Uploading..."
        // nf upload code
        // on success, update this.nfUp to false
        // after completion, update this.active to false
      }
    },

    handleIPFSDownload() {
      this.active = true
      this.ipfsDown = true
      // ipfs download code
      // on success, update this.ipfsDown, this.active to false
    },

    handleNFDownload() {
      this.active = true
      this.nfDown = true
      // nf download code
      // on success, update this.nfDown, this.active to false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button, button:focus {
  border: 1px solid #ff7500;
  color: #ff7500;
  outline: none;
}

button:hover {
  border: 1px solid #ff7500;
  color: white;
  background: #ff7500;
}
</style>
