<template>
<!-- Sidebar -->
    <div>
        <ul
            class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            <!-- Sidebar - Brand -->

            <a
                class="sidebar-brand d-flex align-items-center justify-content-center"
                href="index.html"
            >
                <SidebarBrand />
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0" />

            <!-- Nav Item - Dashboard -->
            <li class="nav-item">
                <SidebarNavitemDashboard />
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider" />

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <SidebarPagesCollapse />
            </li>

            <!-- Nav Item - Utilities Collapse Menu -->
            <li class="nav-item">
                <SidebarUtilitiesCollapse />
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider" />

            <!-- Heading -->
            <SidebarHeading2 />

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item active">
                <SidebarPagesCollapse2 />
            </li>

            <!-- Nav Item - Charts -->
            <li class="nav-item">
                <SidebarCharts />
            </li>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <SidebarTables />
            </li>

            <!-- Divider -->
            
            <hr class="sidebar-divider d-none d-md-block">

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline">
                <SidebarToggler />
            </div>
        </ul>
    </div>
</template>

<script>
import SidebarBrand from "./SidebarBrand.vue"
import SidebarNavitemDashboard from "./SidebarNavitemDashboard.vue"
import SidebarPagesCollapse from "./SidebarPagesCollapse.vue"
import SidebarUtilitiesCollapse from "./SidebarUtilitiesCollapse.vue"
import SidebarHeading2 from "./SidebarHeading2.vue"
import SidebarPagesCollapse2 from "./SidebarPagesCollapse2.vue"
import SidebarCharts from "./SidebarCharts.vue"
import SidebarTables from "./SidebarTables.vue"
import SidebarToggler from "./SidebarToggler.vue"

export default {
    name: "SidebarVue",
    components: {
        SidebarBrand,
        SidebarNavitemDashboard,
        SidebarPagesCollapse,
        SidebarUtilitiesCollapse,
        SidebarHeading2,
        SidebarPagesCollapse2,
        SidebarCharts,
        SidebarTables,
        SidebarToggler

    }


}
</script>

<style>
</style>