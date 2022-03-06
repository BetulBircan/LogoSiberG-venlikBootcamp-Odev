<template>
 <!-- Nav Item - Pages Collapse Menu2 -->
    <div>
        <a
            class="nav-link"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
        >
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
        </a>
        <div
            id="collapsePages"
            class="collapse show"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
        >
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Login Screens:</h6>
                <a class="collapse-item" href="login.html">Login</a>
                <a class="collapse-item" href="register.html">Register</a>
                <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                <div class="collapse-divider"></div>
                <h6 class="collapse-header">Other Pages:</h6>
                <a class="collapse-item" href="404.html">404 Page</a>
                <a class="collapse-item active" href="blank.html">Blank Page</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"SidebarPagesCollapse2"
}
</script>

<style>
</style>