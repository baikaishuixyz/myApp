<template>
  <div class="app">
      <div @click='say'>
        hello wor
      </div>
      <input id='test' v-focus>
      <el-dialog title="测试一下" :visible.sync='visiblity'>
        这是一段信息
        <span slot="footer" class="dialog-footer">
          <button>确定</button>
          <button>取消</button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        visiblity: false
      }
    },
    methods:{
      say() {
        this.sayName();
        this.visiblity = true;
      }
    }
  }
</script>
<style media="screen">

</style>
