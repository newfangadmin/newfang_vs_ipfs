<template>
  <div class="p-6 text-center md:text-left">
    <h1 class="text-4xl md:text-5xl font-display font-light">Hi {{name}} test Newfang against IPFS</h1>
    <p class="font-body mb-4">...and see how our Uploads/Downloads compare.</p>
    <el-row class="mt-6">
      <el-col :span="24">
        <input type="file" ref="fileSelect" style="display: none" v-on:change="handleFileUpload()">
        <button class="rounded-full bg-white uppercase font-semibold p-2 w-32" @click="handleUploadBtnClick()">Upload
        </button>
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
            <img class="h-6" src="../assets/ipfs.svg"/>
            <span class="ml-2">IPFS</span>
          </div>
          <div v-loading="ipfsUp" element-loading-spinner="el-icon-loading" element-loading-text="Uploading...">
            <div class="mt-4 mb-4">
              <span>Upload time: </span>
              <span class="font-semibold">{{ ipfsUpTime }}</span><br/>
              <span>Download time: </span>
              <span class="font-semibold">{{ ipfsDownTime }}</span><br/>
              <button class="rounded-full bg-white uppercase text-sm font-semibold mt-4 pl-4 pr-4 p-2 w-32"
                      @click="handleIPFSDownload()"><i class="el-icon-loading" v-if="ipfsDown"></i> Download
              </button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="w-100 text-center">
          <div slot="header" class="clearfix flex font-semibold">
            <img class="h-6 p-1" src="../assets/nf_sym.svg"/>
            <span>Newfang</span>
          </div>
          <div v-loading="nfUp" element-loading-spinner="el-icon-loading" :element-loading-text="nfUpStatus"
               customClass="loadingC">
            <div class="mt-4 mb-4">
              <span>Upload time: </span>
              <span class="font-semibold">{{ nfUpTime }}</span><br/>
              <span>Download time: </span>
              <span class="font-semibold">{{ nfDownTime }}</span><br/>
              <button class="rounded-full bg-white uppercase text-sm font-semibold mt-4 pl-4 pr-4 p-2 w-32"
                      @click="handleNFDownload()"><i class="el-icon-loading" v-if="nfDown"></i> Download
              </button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  // import '../js/newfang_uploader.js';
  // import '../js/newfang_downloader.js';

  const ipfsClient = require('ipfs-http-client');
  const Uploader = window.newfang_uploader.default;
  const Downloader = window.newfang_downloader.default;
  const convergence = Uploader.generate_convergence();
  const axios = require('axios');
  const UsernameGenerator = require('username-generator');

  // window.axios = axios;

  export default {
    name: 'UpDown',
    filters: {
      fileSizeFilter(val) {
        const digitCount = val.toString().length;
        if (digitCount < 4) {
          return (val).toFixed(2) + " B"
        } else if (digitCount < 7) {
          return (val / 1000).toFixed(2) + " KB"
        } else {
          return (val / 1000 / 1000).toFixed(2) + " MB"
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
        nfUpStatus: "Waiting for IPFS upload to finish up.",
        hash: "",
        uri: "",
        ipfs2: ipfsClient({
          host: "13.235.113.102",
          port: 5001,
          protocol: "http"
        }),
        ipfs3: ipfsClient({
          host: "52.66.197.133",
          port: 5001,
          protocol: "http"
        }),
        ipfs: ipfsClient({
          host: "13.232.245.32",
          port: 5001,
          protocol: "http"
        }),
        dbId: "",
        transaction_server_url: "http://13.232.245.32:8000/api/transactions/",
        name: UsernameGenerator.generateUsername("_")
      }
    },
    methods: {
      resetData() {
        this.fileSize = 0;
        this.fileType = "";
        this.ipfsUpTime = "--";
        this.nfUpTime = "--";
        this.ipfsDownTime = "--";
        this.nfDownTime = "--";
        this.nfUpStatus = "Waiting for IPFS upload to finish up."
      },

      handleUploadBtnClick() {
        if (!this.active) {
          this.resetData();
          this.$refs.fileSelect.click()
        } else {
          this.$message({
            message: 'Upload/Download in progress.',
            type: 'warning'
          })
        }
      },

      async handleFileUpload() {
        const file = this.$refs.fileSelect.files[0];
        if (file !== undefined) {
          this.active = true;
          this.ipfsUp = true;
          this.nfUp = true;
          this.fileSize = file.size;
          this.fileType = file.type;
          this.fileName = file.name;
          // ipfs upload code
          let start = Date.now();
          let result = await this.ipfs2.add(file);
          this.ipfs3.add(file);
          this.hash = result[0].hash;
          let end = Date.now();
          this.ipfsUp = false;
          this.nfUpStatus = "Uploading...";
          this.ipfsUpTime = (end - start) / 1000;
          // nf upload code
          let start_time_newfang = Date.now();
          const uploader = new Uploader({
            file, // HTML5 file object
            convergence
          });

          uploader.on('upload_complete', async (uri) => {
            this.uri = uri;
            let end_time_newfang = Date.now();
            // console.log(start_time_newfang, end_time_newfang)
            this.nfUpTime = (end_time_newfang - start_time_newfang) / 1000;
            this.nfUp = false;
            await axios.post(this.transaction_server_url, {
              type: "upload",
              nwTime: this.nfUpTime,
              ipfsTime: this.ipfsUpTime,
              user: this.name,
              fileSize: this.fileSize
            });
          });

          uploader.start_upload()


          // on success, update this.nfUp to false
          // after completion, update this.active to false
          // write to db
        }
      }
      ,
      async downloadTransaction(){
        if (!this.dbId) {
          let res = await axios.post(this.transaction_server_url, {
            type: "download",
            nwTime: this.nfDownTime !== "--" ? this.nfDownTime : undefined,
            ipfsTime: this.ipfsDownTime !== "--" ? this.ipfsDownTime : undefined,
            user: this.name,
            fileSize: this.fileSize
          });
          this.dbId = res.data.id;
        } else {
          await axios.put(this.transaction_server_url + this.dbId, {
            type: "download",
            nwTime: this.nfDownTime !== "--" ? this.nfDownTime : undefined,
            ipfsTime: this.ipfsDownTime !== "--" ? this.ipfsDownTime : undefined,
            user: this.name,
            fileSize: this.fileSize
          })
        }
      },
      async handleIPFSDownload() {
        this.active = true;
        this.ipfsDown = true;
        let start = Date.now();
        let result = await this.ipfs.get(this.hash);
        var blob = new Blob([result[0].content], {type: this.fileType});
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = this.fileName + "_ipfs";
        link.click();
        let end = Date.now();
        this.ipfsDown = false;
        this.ipfsDownTime = (end - start) / 1000;
        // ipfs download code
        // on success, update this.ipfsDown, this.active to false
        // on success, update this.ipfsDownTime with time taken to download
        // write to db
        this.downloadTransaction();
      }
      ,

      async handleNFDownload() {
        this.active = true;
        this.nfDown = true;
        // nf download code
        let downloader = new Downloader(this.uri, {
          downloadPath: '/path/to/download',
          type: 'Download',
          useWorkers: true
        });

        let start = Date.now();
        downloader.on('download_complete', () => {
          let end = Date.now();
          this.nfDown = false;
          this.nfDownTime = (end - start) / 1000
          this.downloadTransaction();

        });
        downloader.start_download(this.fileName + '_newfang.' + this.fileType)

        // on success, update this.nfDown, this.active to false
        // write to db


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
