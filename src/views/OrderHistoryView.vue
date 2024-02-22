<script>

</script>

<style scoped>
article {
    padding-bottom: 3rem;
}

#orderHistory h2 {
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

#orderHistory_hr {
    border: 1px solid #475133;
}

#orderHistory {
    background-color: var(--mid-beige);
}

.orderHistory_list {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    gap: 1rem;
    /* justify-content: center; */
    align-items: center;
    color: black;
    padding-bottom: 1.5rem;
}

.orderHistory_list_li {
    display: flex;
    text-align: left;
    background-color: var(--dark-beige);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    /* flex-wrap: wrap; */
    flex-direction: row;
    /* padding: 0rem 5rem; */
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    /* padding: 0rem 1rem; */
    position: relative;
    font-size: 0.8rem;
    font-weight: lighter;
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


.orderHistory_list_li span {
    font-weight: bold;
}

.order_summary {
    padding: 1rem;
}

.button_seeOrder {
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
    font-size: 0.7rem;
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

    #orderHistory h2 {
        text-align: left;
        width: 0;
        margin: 1.5rem 0;
        font-size: 1.5rem;
    }

    .orderHistory_list_li {
        font-size: 1.2rem;
    }

    .button_seeOrder {
        font-size: 1rem;
        color: var(--dark-green)
    }

    #hrDiv {
        display: none;
    }
}
</style>

<template>
    <article>
        <section id="orderHistory">
            <h2>Orderhistorik</h2>
            <div id="hrDiv">
                <hr id="orderHistory_hr">
            </div>
            <ul class="orderHistory_list">
                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
                    </div>
                    <div class="summar_and_button">
                        <div class="order_summary">
                            <p><span>Ordernummer:</span> 43210</p>
                            <p>Datum: 2023-12-16</p>
                            <p>Total belopp: 1500kr</p>
                        </div>
                        <div class="button_seeOrder_div">
                            <button class="button_seeOrder">Se order</button>
                        </div>
                    </div>
                </li>

                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Cucumber_Sonja.jpg" alt="">
                    </div>
                    <div class="summar_and_button">
                        <div class="order_summary">
                            <p><span>Ordernummer:</span> 43210</p>
                            <p>Datum: 2023-12-16</p>
                            <p>Total belopp: 600kr</p>
                        </div>
                        <div class="button_seeOrder_div">
                            <button class="button_seeOrder">Se order</button>
                        </div>
                    </div>
                </li>
                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
                    </div>
                    <div class="summar_and_button">
                        <div class="order_summary">
                            <p><span>Ordernummer:</span> 43210</p>
                            <p>Datum: 2023-12-16</p>
                            <p>Total belopp: 1500kr</p>
                        </div>
                        <div class="button_seeOrder_div">
                            <button class="button_seeOrder">Se order</button>
                        </div>
                    </div>
                </li>
                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Apple_Elise.jpg" alt="">
                    </div>
                    <div class="summar_and_button">
                        <div class="order_summary">
                            <p><span>Ordernummer:</span> 43210</p>
                            <p>Datum: 2023-12-16</p>
                            <p>Total belopp: 365kr</p>
                        </div>
                        <div class="button_seeOrder_div">
                            <button class="button_seeOrder">Se order</button>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</template>