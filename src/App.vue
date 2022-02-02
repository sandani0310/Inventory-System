<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 p-3">
        <SideMenu />
      </div>
      <div class="col-md-10 p-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from './components/sidemenu/SideMenu.vue'

export default {
  name: 'App',
  components: {
    SideMenu
  }
}
</script>

<style>

</style>
