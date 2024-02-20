<script></script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    background-color: var(--dark-beige);
}

#profileInfo {
    background-color: var(--mid-beige);
    text-align: center;
}

#profileInfo h1 {
    padding-top: 1.2rem;
    padding-bottom: 0.8rem;
}

#profilePic {
    width: 4rem;
    border-radius: 100%;
}

#profileInfo h2 {
    padding-bottom: 0.7rem;
    font-weight: lighter;
}

ul {
    display: flex;
    justify-content: center;
    /* align-items: center; */
}

.profileInfo_li {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    /* flex-wrap: wrap; */
    padding: 5px;
    row-gap: 0.5rem;
}

i {
    font-size: 1.2rem;
}

.hrAside {
    height: 2.5rem;
}


@media screen and (max-width: 385px) {
    main {
        width: 100%;
    }
}
</style>


<template>
    <main>

        <aside id="profileInfo">
            <h1>Min profil</h1><img id="profilePic" src="../assets/media/profile_pictures/profilePic1.jpg" alt="">
            <h2>Namn</h2>
            <ul>
                <li class="profileInfo_li">
                    <i class="bi bi-basket3"></i>
                    <p>Orderhistorik</p>
                </li>

                <li class="profileInfo_li">
                    <hr class="hrAside">
                </li>
                <li class="profileInfo_li"><i class="bi bi-person"></i>
                    <p>Mitt konto</p>
                </li>
                <li class="profileInfo_li">
                    <hr class="hrAside">
                </li>
                <li class="profileInfo_li">
                    <i class="bi bi-heart"></i>
                    <p>
                        Favoriter
                    </p>
                </li>
                <li class="profileInfo_li">
                    <hr class="hrAside">
                </li>
                <li class="profileInfo_li">
                    <i class="bi bi-box-arrow-left"></i>
                    <p>Logga ut</p>
                </li>
            </ul>
            <!-- <hr id="endAside"> -->
        </aside>
        <router-view></router-view>

    </main>
</template>
