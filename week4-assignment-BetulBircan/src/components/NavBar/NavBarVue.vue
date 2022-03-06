<template>
    <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <TopBarSearch />
                    <TopBarNavbar />
                </nav>
                <!-- End of Topbar -->
</template>

<script>
// Add the components
import TopBarSearch from "./TopBarSearch.vue"
import TopBarNavbar from "./TopBarNavbar.vue"

export default {
    name: "NavBarVue",
    components:{
        TopBarSearch,
        TopBarNavbar
    }

}
</script>

<style>

</style>