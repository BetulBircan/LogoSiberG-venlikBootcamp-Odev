<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <SidebarVue />
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
         <!-- Topbar -->
        <NavBarVue />
        <!-- Begin Page Content -->
        <PageContent />
      </div>
      <!-- Footer -->
        <PageFooter />
    </div>
  </div>
  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
     <i class="fas fa-angle-up"></i>
  </a>
  <LogoutModal />
  

</template>

<script>
//Add the components in this page
import NavBarVue from './components/NavBar/NavBarVue.vue'
import SidebarVue from "./components/SideBar/SidebarVue.vue"
import PageContent from "./components/PageContent.vue"
import PageFooter from "./components/PageFooter.vue"
import LogoutModal from "./components/LogoutModal.vue"

export default {
  name: 'App',
  components: {
    NavBarVue,
    SidebarVue,
    PageContent,
    PageFooter,
    
    LogoutModal

  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
