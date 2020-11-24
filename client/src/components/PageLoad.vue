<template>
  <div class="page-loader" v-if="!isloaded">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>

<script>
export default {
  name: 'PageLoad',
  data : () => {
    return{
      isloaded: false
    }
  },
  mounted() {

    document.onreadystatechange = () => {
      if(document.readyState == "complete") {
        return this.isloaded = true;
      }
    }
    console.log('Is loaded: ' + this.isloaded);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-loader {
  display: flex;
  justify-content: center;
  align-items:center;
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  z-index: 999;
}
.cube{
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.cube:nth-child() {
  background-color: red;
}

@keyframes left {
  40%{
    transform: translate(-60px);
  }
    60%{
    transform: translate(0);
  }
}

@keyframes right {
  40%{
    transform: translate(60px);
  }
    60%{
    transform: translate(0);
  }
}


</style>
