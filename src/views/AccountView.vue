<script>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
@media screen and (min-width: 386px) {
    article {

        display: flex;
        flex-direction: row;
        /* justify-content: flex-start;
        align-items: flex-start;
        justify-self: flex-start;
        align-self: flex-start; */
        flex-wrap: nowrap;
        width: 100%;
    }

    #profileInfo {
        display: flex;
        flex-direction: row;
        /* justify-content: flex-start;
        align-items: flex-start;
        justify-self: flex-start;
        align-self: flex-start; */
        flex-wrap: nowrap;
        margin: 0;
        padding: 0;
    }

    #hrDividePage {
        display: none;
    }

    #test {
        flex-wrap: nowrap;
        /* float: left; */
        /* position: relative; */
        height: 5rem;
        margin: 0;
        padding: 0;
        width: 0rem;
        border: solid 3px var(--dark-beige);
    }
}

article {
    display: flex;
    flex-direction: column;
}

#test {
    display: none;
}

#hrDividePage {
    width: 100%;
    border: solid 5px var(--dark-beige);
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

.hrDivideLi {
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
                    <hr class="hrDivideLi">
                </li>
                <li class="profileInfo_li">
                    <router-link to="/account/editaccount">
                        <i class="bi bi-person"></i>
                        <p>Mitt konto</p>
                    </router-link>
                </li>
                <li class="profileInfo_li">
                    <hr class="hrDivideLi">
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
                    <hr class="hrDivideLi">
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
        <hr id="hrDividePage">
        <hr id="test">
        <RouterView />

    </article>
</template>
