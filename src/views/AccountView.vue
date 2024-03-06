<script>
import { RouterLink } from 'vue-router';

export default {

    data() {
        return {
            user: null,
        }
    },

    created() {
        fetch('./src/database.json', {
            headers: {
                // Request JSON
                Accept: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => {
                this.user = result

            })
        localStorage.setItem("user_id", user.id);
    },



}
</script>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    padding-left: 0rem;
    /* justify-content: center;
    align-items: center; */
}

#test {
    display: none;
}

#hrDividePage {
    width: 100%;
    border-left: solid 5px var(--dark-beige);
}

#profileInfo {
    background-color: var(--mid-beige);
    text-align: center;
}

#profileInfo h1 {
    padding-top: 1.2rem;
    padding-bottom: 0.8rem;
}

#editProfilePic {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

#profilePic {
    width: 5rem;
    border-radius: 100%;
}

#editPicSymbol {
    width: 0;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-self: flex-end;
    align-self: flex-end;
}

#profileInfo h2 {
    padding-bottom: 0.7rem;
    font-weight: lighter;
}

ul {
    display: flex;
    justify-content: center;
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

#hrDividePage_Div {
    padding: 0;
    margin: 0;
}

@media screen and (max-width: 385px) {
    article {
        width: 100%;
    }
}

@media screen and (min-width: 500px) {
    #profilePic {
        width: 7rem;
    }
}

@media screen and (min-width: 600px) {
    article {
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-wrap: nowrap;
        gap: 0;
        padding-left: 2rem;
    }

    h1 {
        font-size: 1.5rem;
        margin: 1rem;
    }

    #profilePic {
        width: 7rem;
    }

    #editPicSymbol {
        width: 0;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: nowrap;
        justify-self: flex-end;
        align-self: flex-end;
    }

    h2 {
        font-weight: 100;
        font-size: 1.2rem;
        /* padding: 1.5rem; */
    }

    ul {
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 100%;
        /* padding-top: 2rem; */
    }

    .profileInfo_li {
        padding: 0;
        margin: 0;
        width: 100%;
    }

    .i_and_p {
        padding: 1rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        font-size: 1rem;
    }

    .hrDivideLi {
        height: 0;
        width: 10rem;
        border: solid 2px var(--dark-beige);
        margin: 0;
        padding: 0;
    }


    #hrDividePage_Div {
        padding-left: 2rem;
        padding-right: 0;
    }

    #hrDividePage {
        /* display: flex; */
        width: 0;
        /* Changed from 0% to take up the remaining space */
        height: 32rem;
        /* flex-wrap: nowrap; */
        border: solid 2px var(--dark-beige);
        margin: 0;
        /* Adjust margin as needed */
        padding: 0;
    }
}

@media screen and (min-width: 750px) {
    .hrDivideLi {
        width: 15rem;
    }
}


@media screen and (min-width: 900px) {
    article {
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-wrap: nowrap;
        gap: 0;
        padding-left: 2rem;
    }

    h1 {
        font-size: 1.5rem;
        margin: 1rem;
    }

    #profilePic {
        width: 7rem;
    }

    h2 {
        font-weight: 100;
        font-size: 1.2rem;
        /* padding: 1.5rem; */
    }

    ul {
        display: flex;
        flex-direction: column;
        text-align: left;
        /* padding-top: 2rem; */
    }

    .profileInfo_li {
        padding: 0;
        margin: 0;
    }

    .i_and_p {
        padding: 1rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        font-size: 1rem;
    }

    .hrDivideLi {
        height: 0;
        width: 23rem;
        border: solid 2px var(--dark-beige);
        margin: 0;
        padding: 0;
    }


    #hrDividePage_Div {
        padding-left: 2rem;
        padding-right: 0;
    }

    #hrDividePage {
        /* display: flex; */
        width: 0;
        /* Changed from 0% to take up the remaining space */
        height: 32rem;
        /* flex-wrap: nowrap; */
        border: solid 2px var(--dark-beige);
        margin: 0;
        /* Adjust margin as needed */
        padding: 0;
    }
}
</style>


<template>
    <article>

        <aside id="profileInfo">

            <h1>Min profil</h1>
            <div id="editProfilePic">
                <img id="profilePic" src="../assets/media/profile_pictures/profilePic1.jpg" alt="">

                <i id="editPicSymbol" class="bi bi-pencil-square"></i>
            </div>

            <h2>{{ user.id }}</h2>
            <ul>
                <router-link to="/account/orderhistory">
                    <li class="profileInfo_li">

                        <div class="i_and_p">
                            <i class="bi bi-basket3"></i>
                            <p>Orderhistorik</p>
                        </div>

                    </li>
                </router-link>
                <li class="profileInfo_li">
                    <hr class="hrDivideLi">
                </li>
                <router-link to="/account/editaccount">
                    <li class="profileInfo_li">

                        <div class="i_and_p">
                            <i class="bi bi-person"></i>
                            <p>Mitt konto</p>
                        </div>

                    </li>
                </router-link>
                <li class="profileInfo_li">
                    <hr class="hrDivideLi">
                </li>
                <router-link to="/account/favorites">

                    <li class="profileInfo_li">

                        <div class="i_and_p">
                            <i class="bi bi-heart"></i>
                            <p>
                                Favoriter
                            </p>
                        </div>

                    </li>
                </router-link>

                <li class="profileInfo_li">
                    <hr class="hrDivideLi">
                </li>
                <router-link to="/account/logout">
                    <li class="profileInfo_li">

                        <div class="i_and_p">
                            <i class="bi bi-box-arrow-left"></i>
                            <p>Logga ut</p>
                        </div>

                    </li>
                </router-link>
            </ul>

        </aside>
        <div id="hrDividePage_Div">
            <hr id="hrDividePage">
        </div>
        <RouterView />

    </article>
</template>
