<script>
import { RouterLink } from 'vue-router';

export default{
    methods:{
    onLogOutClick(){

    localStorage.setItem("userName", "Konto");
    const changeAccountTitle = localStorage.getItem("userName")
        console.log("LocalStorage gets a new value " + localStorage.getItem("userName"))

    this.$emit('onLoggOut', 'changeAccountTitle')

    }
}

}
</script>

<template>
    <article>
        <section id="logOut_section">
            <h2>Logga ut</h2>
            <div id="hrDiv">
                <hr id="logOut_section_hr">
            </div>
            <p>Är du säker på att du vill logga ut?</p>
            <div id="buttons">
                <button class="buttons_stay_logout">Stanna</button>

               <router-link to="/"><button @click="onLogOutClick" class="buttons_stay_logout">Logga ut</button></router-link>

            </div>
        </section>
    </article>
</template>

<style scoped>
#logOut_section {
    background-color: var(--mid-beige);
}

#logOut_section h2 {
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    padding-top: 0.8rem;
    padding-bottom: 0.5rem;
}

#hrDiv {
    padding-bottom: 1rem;
    width: 100%;
}

#logOut_section_hr {
    border: 1px solid #475133;
}

#logOut_section p {
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    padding: 3rem
}

#buttons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding-bottom: 5rem;
}

.buttons_stay_logout {
    background-color: var(--dark-beige);
    border: 0;
    text-align: center;
    border-radius: 19px;
    padding: 0.5rem 1rem;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    font-weight: lighter;
    font-size: 0.9rem;
    width: 6.5rem;
}

.buttons_stay_logout:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

@media screen and (min-width: 600px) {
    article {
        padding-left: 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    #logOut_section h2 {
        width: 50rem;
        margin: 1.5rem 0;
        font-size: 1.5rem;
    }

    #logOut_section p {
        font-size: 1.2rem;
    }

    .buttons_stay_logout {
        font-size: 1rem;
        color: var(--dark-green);
    }

    #hrDiv {
        display: none;
    }
}
</style>
