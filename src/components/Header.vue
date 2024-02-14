<template>
    <header>
        <nav>
            <div class="hamburger-container">
                <div class="hamburger-wrapper">
                    <i class="bi bi-list kajsa"></i>
                </div>

            </div>

            <div class="logo-container">
                <p>GRÖNA GÅRDAR</p>
            </div>

            <div class="login-and-cart-container">

                <div class="login-wrapper">
                    <i class="bi bi-person"></i>
                </div>

                <div class="cart-wrapper">
                    <i class="bi bi-cart"></i>
                </div>

            </div>
        </nav>
    </header>
</template>

<script>

</script>

<style>
nav {
    background-color: var(--dark-beige);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
}

.hamburger-container {
    width: 80px;
}

.logo-container {
    justify-content: center;
    flex-grow: 1;
    text-align: center;
}

.login-and-cart-container {
    width: 80px;
    display: flex;
    justify-content: space-between;
}


.bi {
    font-size: 25px;
    cursor: pointer;
}
</style>
