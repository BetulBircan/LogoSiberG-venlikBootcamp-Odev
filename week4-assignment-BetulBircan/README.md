# week4-assignment-BetulBircan

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Proje Açıklaması:
Bu projeyi sbadmin tasarımını vue.js ile componentlere ayırarak tasarlamak için yapıldı.

-Önce `npm install -g @vue/cli` ile vue.js frameworkünü proje dosyamda kurdum. Daha sonra da `vue create dosya-adi` ile yeni bir dosya yarattım. Derlemek için de `npm run serve ` ile de derledim.

-Sbadmindeki bootstrap dosyalarını eklemek için public dosyasına sbadmindeki css, img, js, scss ve vendor dosyalarını ekledim. Public klasöründeki index.html dosyasına ile sbadmindeki blank.html de bulunan head kısmının aynısını kopyaladım ve de body bölümünde scripts kısımları aldım.

```
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Blank</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>
  <body>
      <div id="app"></div>
    
    <!-- built files will be auto injected -->
     
    <!-- Bootstrap core JavaScript-->
     <script src="vendor/jquery/jquery.min.js"></script>
     <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
 
     <!-- Core plugin JavaScript-->
     <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
 
     <!-- Custom scripts for all pages-->
     <script src="js/sb-admin-2.min.js"></script>

  </body>
```

-Daha sonra da Sidebar menüsü için src/component dosyasının içine sidebar klasörü oluşturup onun içine componentslere böldüm.

![sidebar](https://user-images.githubusercontent.com/86554799/156847196-c9e98625-207c-4443-a9b0-25867fd406bb.jpg)

![sidebar2](https://user-images.githubusercontent.com/86554799/156847246-c53e9f66-0d09-4673-88d9-ccc23fc6ab48.jpg)

![sidebar3](https://user-images.githubusercontent.com/86554799/156847543-a799da45-2111-4d72-842f-67148a493ecd.jpg)

-Kodları detaylı incelemek için src/components/SideBar/SidebarVue.vue ve diğer dosyalara bakabilirsiniz.

-Aynı şekilde sbadmindeki navbar menüsü için de src/component/NavBar klaörünün içerisine componentleri dosya olarak ekledim.

![navbar](https://user-images.githubusercontent.com/86554799/156848379-b435213d-3fd2-4f83-a831-0083dec69051.jpg)

![navbar2](https://user-images.githubusercontent.com/86554799/156848416-4963334c-f222-40ed-9144-ecbe484cca50.jpg)

![navbar3](https://user-images.githubusercontent.com/86554799/156848568-607029d3-701f-46ab-8113-9045ceb471fd.jpg)

-Kodları detaylı incelemek için src/components/Navbar/NavBarVue.vue ve diğer dosyalara bakabilirsiniz.

-Daha sonra da PageContentdeki Blank yaısı için PageContent.Vue, Footer kısmı için de PageFooter.vue ve en sonunda LogoutModal comğonentlerini oluşturdum ve vue.js in ana componeti olan App.vue ya ekledim.

![footer](https://user-images.githubusercontent.com/86554799/156849826-f9074d62-ebea-4ca1-aaf4-6d45d0d5623c.jpg)

**App.vue** 

```
<template>
<div id="page-top">
  <div id="wrapper">
    <SidebarVue />
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- NavBarVue Component -->
        <NavBarVue />
        <!-- PageContent Component -->
        <PageContent />
      </div>
      <!-- PageFooter Component -->
        <PageFooter />
    </div>
  </div>
  </div>

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
     <i class="fas fa-angle-up"></i>
  </a>
  
  <!-- Logout Modal-->
  <LogoutModal />

</template>

<script>
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

```

**Son Hali**

![sbadmin tasarım](https://user-images.githubusercontent.com/86554799/156849877-7d983f61-9a07-4759-86a1-cbcbe725d7ed.jpg)





