<template>
    <footer :style="{ backgroundColor: $route.meta.footerBackgroundColor }">
        <div class="svg-container">
            <svg id="Lager_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 519.54 50.15">
                <defs></defs>
                <path class="cls-1"
                    d="M519.54,50.15H0v-30.13s72.54,26.65,149.74,26.75c48.5.06,87-7.98,111.49-15.03,21.91-6.31,81.6-29.73,135.69-29.73,62.44,0,122.62,26.33,122.62,26.33v21.81Z" />
            </svg>
        </div>
        <div class="footer-text-wrapper">

            <div class="company-info-container">
                <div class="about-us-container">
                    <h2>Om oss</h2>
                    <p>Gröna gårdar startades 1991 av Glenn Olsson och har sedan dess levererat närodlat och ekologiskt till
                        kunder, både nära och från långa vägar.</p>
                    <h4 style="font-family: Anevir Next Cyr Medium;">
                        <span>Detta är en fiktiv sida designad av:</span>
                    </h4>
                    <span>Bahareh, Emil, Kajsa och Ramin.</span>
                    <h4 style="font-family: Anevir Next Cyr Medium; margin-top: 20px;">
                        <span>Och framtagen av:</span>
                    </h4>
                    <p>Adam, Anna, Atko, Kajsa och Mela.</p>
                </div>

                <div class="visit-us-container">
                    <h2>Besök oss</h2>
                    <p>Vår gårdsbutik är lätt att hitta. Besök oss personligen och upplev det bästa av lokala råvaror.</p>

                    <h4 style="font-family: Anevir Next Cyr Medium;">Adress:</h4>
                    <p>Grönagårdar 12, 400 23 Lindome</p>

                    <h4 style="font-family: Anevir Next Cyr Medium;">Öppettider:</h4>
                    <span>Måndag - Torsdag: 11:00 - 18:00</span>
                    <p>Lördag - Söndag: 10:00-16:00</p>
                </div>

                <div class="contact-us-container">
                    <h2>Kontakt</h2>
                    <p>Har du frågor eller vill komma i kontakt med oss? Tveka inte att nå ut till vår kundtjänst.</p>
                    <p><b style="font-family: Anevir Next Cyr Medium;">Kundtjänst:</b> info@grönagårdar.com</p>
                    <p><b style="font-family: Anevir Next Cyr Medium;">Telefon:</b> 032-234234</p>
                </div>



            </div>


            <p class="last-paragraph">© 2023 Copyright: Adam, Anna, Atko, Bahareh, Emil, Kajsa, Mela och Ramin.</p>
        </div>
        <!-- <div class="shapedividers_com-2880"></div> -->
    </footer>
</template>



<style scoped>
footer {
    font-size: 3vw;
    width: 100vw;
    text-align: center;
}

.svg-container {
    width: 100%;
    background-color: transparent;
}

.svg-container svg {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    margin-bottom: -5px;
}

.cls-1 {
    fill: var(--dark-green);
    stroke-width: 0px;
    bottom: 0;
}

.footer-text-wrapper {
    background-color: var(--dark-green);
    color: var(--light-beige);
    width: 100vw;
    height: 100%;
    padding-top: 30px;
}


.footer-text-wrapper h2 {
    margin-top: 20px;
    margin-bottom: 20px;
}

.about-us-container {
    padding-top: 20px;
    padding-left: 35px;
    padding-right: 35px;
    padding-left: 8vw;
    padding-right: 8vw;
}

.about-us-container p {
    padding-bottom: 20px;
}


.visit-us-container {
    padding-left: 35px;
    padding-right: 35px;
}

.visit-us-container p {
    padding-bottom: 20px;
}

span::after {
    content: "\a";
    white-space: pre;
}

.contact-us-container {
    padding-left: 35px;
    padding-right: 35px;
    padding-bottom: 20px;
}

.contact-us-container p {
    padding-bottom: 20px;
}

.last-paragraph {
    height: fit-content;
    margin-top: 20px;
    padding-bottom: 20px;
    font-size: 12px;
}

@media screen and (min-width: 530px) {
    footer {
        font-size: 16px;
    }
}

@media screen and (min-width: 980px) {

    .company-info-container {
        display: flex;
        text-align: left;
        justify-content: center;
        padding-top: 60px;
        padding-bottom: 60px;
        gap: 10vw;
    }

    .about-us-container {
        width: 300px;

        padding-left: 0;
        padding-right: 0;
        margin-left: 40px;
    }

    .about-us-container h2 {
        margin-top: 0;
    }

    .about-us-container p {
        margin-top: 0;
    }


    .visit-us-container {
        width: 250px;
        max-width: 250px;
        padding-left: 0;
        padding-right: 0;
    }

    .contact-us-container {
        width: 220px;

        padding-left: 0;
        padding-right: 0;
        margin-right: 40px;
    }

    .last-paragraph {
        padding-bottom: 20px;
    }
}
</style>
