<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"/>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"/>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-row:last-child {
    margin-bottom: 0;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .bg-purple-dark {
    background-color: purple;
  }

  .bg-purple {
    background-color: blue;
  }

  .bg-purple-light {
    background-color: lightblue;
  }
</style>
