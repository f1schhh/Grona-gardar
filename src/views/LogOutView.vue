<script></script>

<style scoped>
/* article {
    display: flex;
    flex-direction: column;
} */





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
    font-size: 0.8rem;
    width: 6.5rem;
}
</style>

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
                <button class="buttons_stay_logout">Logga ut</button>
            </div>
        </section>
    </article>
</template>