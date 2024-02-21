<script>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
article {
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
    article {
        width: 100%;
    }
}
</style>


<template>
    <article>

        <aside id="profileInfo">
            <h1>Min profil</h1><img id="profilePic" src="../assets/media/profile_pictures/profilePic1.jpg" alt="">
            <h2>Namn</h2>
            <ul>

                <li class="profileInfo_li">
                    <router-link to="/account/orderhistory">

                        <i class="bi bi-basket3"></i>
                        <p>Orderhistorik</p>
                    </router-link>
                </li>

                <li class="profileInfo_li">
                    <hr class="hrAside">
                </li>
                <li class="profileInfo_li">
                    <router-link to="/account/editaccount">
                        <i class="bi bi-person"></i>
                        <p>Mitt konto</p>
                    </router-link>
                </li>
                <li class="profileInfo_li">
                    <hr class="hrAside">
                </li>
                <li class="profileInfo_li">
                    <router-link to="/account/favorites">
                        <i class="bi bi-heart"></i>
                        <p>
                            Favoriter
                        </p>
                    </router-link>
                </li>
                <li class="profileInfo_li">
                    <hr class="hrAside">
                </li>
                <li class="profileInfo_li">
                    <router-link to="/account/logout">
                        <i class="bi bi-box-arrow-left"></i>
                        <p>Logga ut</p>
                    </router-link>
                </li>
            </ul>
            <!-- <hr id="endAside"> -->
        </aside>
        <RouterView />

    </article>
</template>
