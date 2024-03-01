<script>

</script>

<style scoped>
article {
    padding-bottom: 3rem;
}

#favorites {
    background-color: var(--mid-beige);
}

#favorites h2 {
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

#favorites_hr {
    border: 1px solid #475133;
}

.favorites_list {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    gap: 1rem;
    /* justify-content: center; */
    align-items: center;
    color: black;
    padding-bottom: 1.5rem;
}

.favorites_list_li {
    display: flex;
    text-align: left;
    background-color: var(--dark-beige);
    /* flex-wrap: wrap; */
    flex-direction: row;
    /* padding: 0rem 5rem; */
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    /* padding: 0rem 1rem; */
    position: relative;
    font-size: 0.8rem;
    font-weight: lighter;
    width: 17.5rem;
}

.favorites_list_li span {
    font-weight: bold;
}

.img-wrapper {
    width: 10.4375rem;
    height: 10.4375rem;
}

.img-wrapper img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 0rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 0rem;
    object-fit: cover;
    object-position: center;
}




.infoProduct {
    padding: 1rem;
}

.infoProduct h3 {
    font-size: 0.8rem;
    padding: 0rem;
    padding-bottom: 0.2rem;
}

.h3_and_heart {
    padding: 0rem;
}

.button_like {
    display: flex;
    position: absolute;
    right: 13px;
}

.button_addToShoppingCart {
    background-color: #FFF8EE;
    border: 0;
    text-align: center;
    border-radius: 19px;
    padding: 0.3rem 0.6rem;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    position: absolute;
    right: 10px;
    bottom: 9px;
    font-weight: lighter;
    font-size: 0.9rem;
}

.button_addToShoppingCart:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 385px) {
    article {
        width: 100%;
    }

    li {
        max-width: 20rem;
    }

    .img-wrapper {
        width: 6.5rem;
        height: 6.5rem;
    }
}

@media screen and (min-width: 600px) {
    article {
        padding-left: 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    #favorites h2 {
        text-align: left;
        width: 0;
        margin: 1.5rem 0;
        font-size: 1.5rem;
    }

    #hrDiv {
        display: none;
    }



    .favorites_list_li {
        width: 25rem;
        font-size: 1.2rem;
    }

    .infoProduct h3 {
        font-size: 1.5rem;
        font-weight: lighter;
    }

    .button_addToShoppingCart {
        font-size: 1rem;
        color: var(--dark-green);
    }
}
</style>

<template>
    <article>
        <section id="favorites">
            <h2>Favoriter</h2>
            <div id="hrDiv">
                <hr id="favorites_hr">
            </div>
            <ul class="favorites_list">
                <li class="favorites_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
                    </div>
                    <div>
                        <div class="infoProduct">
                            <div class="h3_and_heart">
                                <h3>Pumpa</h3>
                                <div class="button_like">
                                    <i class="bi bi-heart-fill"></i>
                                </div>
                            </div>
                            <p>Pumpa Howden</p>
                            <p>53kr/kg</p>
                        </div>
                        <div>
                            <button class="button_addToShoppingCart">Lägg i varukorg</button>
                        </div>
                    </div>
                </li>

                <li class="favorites_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Apple_Elise.jpg" alt="">
                    </div>
                    <div>
                        <div class="infoProduct">
                            <div class="h3_and_heart">
                                <h3>Äpple</h3>
                                <div class="button_like">
                                    <i class="bi bi-heart-fill"></i>
                                </div>
                            </div>
                            <p>Äpple Elise</p>
                            <p>52kr/kg</p>
                        </div>
                        <div>
                            <button class="button_addToShoppingCart">Lägg i varukorg</button>
                        </div>
                    </div>
                </li>
                <li class="favorites_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Cucumber_Sonja.jpg" alt="">
                    </div>
                    <div>
                        <div class="infoProduct">
                            <div class="h3_and_heart">
                                <h3>Gurka</h3>
                                <div class="button_like">
                                    <i class="bi bi-heart-fill"></i>
                                </div>
                            </div>
                            <p>Gurka Sonja</p>
                            <p>35kr/kg</p>
                        </div>
                        <div>
                            <button class="button_addToShoppingCart">Lägg i varukorg</button>
                        </div>
                    </div>
                </li>
                <li class="favorites_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Plum_Jubileum.jpg" alt="">
                    </div>
                    <div>
                        <div class="infoProduct">
                            <div class="h3_and_heart">
                                <h3>Plommon</h3>
                                <div class="button_like">
                                    <i class="bi bi-heart-fill"></i>
                                </div>
                            </div>
                            <p>Plommon Jubileum</p>
                            <p>58kr/kg</p>
                        </div>
                        <div>
                            <button class="button_addToShoppingCart">Lägg i varukorg</button>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</template>