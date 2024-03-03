<script></script>

<style scoped>
article {
    background-color: var(--mid-beige);
    height: 80%;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    justify-content: center;

}


.section_about {
    background-color: var(--dark-green);
    display: flex;
    flex-direction: column;
    padding: 0;
}

.block_about {
    /* padding: 1rem; */
    color: var(--light-beige);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.block_about h1 {
    padding-bottom: 1rem;
}

.about_img {
    width: 100%;
    height: auto;
}

.about_text {
    padding: 3rem 10%;
}

@media screen and (min-width:650px) {

    article {
        height: 80%;
    }

    .block_about {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .block_about h1 {
        font-size: 1.5rem;
    }


    .about_img {
        object-fit: cover;
        width: 50vw;
        height: auto;
    }

    .about_img_div:first-child {
        order: 1;
    }

    .about_img_div {
        display: flex;
        justify-content: flex-end;
        padding: 0;
        margin: 0;
    }

    .about_text {
        display: flex;
        flex-direction: column;
        font-size: 1.25rem;
        line-height: 1.3rem;
        padding: 1rem 10%;
        margin: 0;
    }
}
</style>

<template>
    <article>
        <section class="section_about">
            <div class="block_about">

                <div class="about_text">

                    <h1>
                        Ekologiskt och närodlat!
                    </h1>

                    <div>
                        Välkommen till vår ekologiska gård, där naturen och hållbarhet står i fokus. Företaget grundades år
                        1991 av Glenn Olsson och har sedan dess levererat närodlat och ekologiskt till sina kunder. Genom
                        ekologisk odling och
                        avståndstagande
                        från kemiska ämnen skapar vi en miljö där jorden flödar av liv.

                        Kretsloppsanpassning är kärnan i vårat arbete – från kompostering till återvinning, minimerar vi
                        avfall
                        och
                        bidrar till
                        en hållbar cykel. Energiförbrukningen optimeras genom investeringar i effektiva system, och vi
                        prioriterar
                        vattenbevarande metoder för att minimera påverkan på miljön.

                        Lokala samarbeten är centralt för oss för att minska vårt koldioxidavtryck. Vi är inte bara odlare;
                        vi
                        är
                        förkämpar för
                        medvetenhet och utbildning. Genom att dela kunskap om ekologisk odling hoppas vi inspirera andra att
                        välja
                        en
                        mer
                        hållbar livsstil. Vår gård är en plats där varje gröda är en handling av kärlek till planeten och
                        varje
                        skörd
                        ett
                        framsteg mot en grönare framtid.
                    </div>
                </div>
                <img src="../assets/media/AppleGarden.jpg" alt="" class="about_img about_img_div">
            </div>
        </section>
    </article>
</template>