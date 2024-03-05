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
    width: 100%;
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

dt {
    font-weight: bold;
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
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
        height: 150vh;
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
        padding: 3rem 10%;
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
                        Kontakta oss!
                    </h1>

                    <div>
                        <p>Vår gårdsbutik är lätt att hitta. Besök oss personligen och upplev det bästa av lokala råvaror.
                        </p>
                        <dl>
                            <dt>Besöksadress</dt>
                            <dd>Gröna Gårdar 12,</dd>
                            <dd>400 23 Lindome</dd>

                            <dt>Öppettider</dt>
                            <dd>Måndag - Torsdag: 11:00 - 18:00</dd>
                            <dd>Lördag - Söndag: 10:00 - 16:00</dd>

                            <dt>Telefon</dt>
                            <dd>032-234234</dd>

                            <dt>E-mail</dt>
                            <dd>info@gronagardar.com</dd>
                        </dl>
                    </div>
                </div>
                <img src="../assets/media/FarmShop.jpg" alt="" class="about_img about_img_div">
            </div>
        </section>
    </article>
</template>
