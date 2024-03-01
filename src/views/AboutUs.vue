<script></script>

<style scoped>
article {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 600px;



}

#about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-green);
    color: white;
    padding: 1rem 5rem;
    text-align: center;
    height: 500px;
}

img {
    height: 500px;
    padding: 0;
    margin: 0;
}
</style>

<template>
    <article>

        <div id="about">
            <h1>Ekologiskt och närodlat!</h1>
            <p>
                Välkommen till vår ekologiska gård, där naturen och hållbarhet står i fokus. Genom ekologisk odling och
                avståndstagande
                från kemiska ämnen skapar vi en miljö där jorden flödar av liv.

                Kretsloppsanpassning är kärnan i vårat arbete – från kompostering till återvinning, minimerar vi avfall
                och
                bidrar till
                en hållbar cykel. Energiförbrukningen optimeras genom investeringar i effektiva system, och vi
                prioriterar
                vattenbevarande metoder för att minimera påverkan på miljön.

                Lokala samarbeten är centralt för oss för att minska vårt koldioxidavtryck. Vi är inte bara odlare; vi
                är
                förkämpar för
                medvetenhet och utbildning. Genom att dela kunskap om ekologisk odling hoppas vi inspirera andra att
                välja
                en
                mer
                hållbar livsstil. Vår gård är en plats där varje gröda är en handling av kärlek till planeten och varje
                skörd
                ett
                framsteg mot en grönare framtid.
            </p>
        </div>
        <div>
            <img src="../assets/media/AppleGarden.jpg" alt="">
        </div>
    </article>
</template>