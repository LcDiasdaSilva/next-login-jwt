<style scooped lang="scss">
.full-loading {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba($color: #ffffff, $alpha: 0.7);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
</style>
<template>
  <div class="full-loading">
    <img src="/loading.svg" />
  </div>
</template>
