<template>
    
        <!-- Topbar Navbar -->
        <ul class="navbar-nav ml-auto">
            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
                <NavItemSearchDropDown />
            </li>

            <!-- Nav Item - Alerts -->
            <li class="nav-item dropdown no-arrow mx-1">
                <NavItemAlerts />
            </li>

            <!-- Nav Item - Messages -->
            <li class="nav-item dropdown no-arrow mx-1">
                <NavItemMesages />
            </li>
            <TopbarDivider />

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
                <NavItemUserInformation />
            </li>
        </ul>
    
</template>

<script>
import NavItemSearchDropDown from "./NavItemSearchDropDown.vue"
import NavItemAlerts from "./NavItemAlerts.vue"
import NavItemMesages from "./NavItemMesages.vue"
import TopbarDivider from "./TopbarDivider.vue"
import NavItemUserInformation from "./NavItemUserInformation"

export default {
    name: "TopBarNavbar",
    components: {
        NavItemSearchDropDown,
        NavItemAlerts,
        NavItemMesages,
        TopbarDivider,
        NavItemUserInformation
    }
}
</script>

<style>
</style>