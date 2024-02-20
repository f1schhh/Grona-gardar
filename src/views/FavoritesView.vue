<script>

</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    background-color: var(--dark-beige);
}

#orderHistory h2 {
    font-weight: bold;
    font-size: 1rem;
}

#orderHistory_hr {
    border: 1px solid #475133;
}

#orderHistory {
    background-color: var(--mid-beige);
}

#orderHistory h2 {
    text-align: center;
    padding-top: 0.8rem;
    padding-bottom: 0.5rem;
}

.orderHistory_list {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    gap: 1rem;
    /* justify-content: center; */
    align-items: center;
    color: black;
    padding-top: 0.5rem;
    padding-bottom: 1.5rem;
}

.orderHistory_list_li {
    display: flex;
    text-align: left;
    background-color: var(--dark-beige);
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
    width: 17.5rem;
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

.order_summary h3 {
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
    main {
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
</style>

<template>
    <main>
        <section id="orderHistory">
            <h2>Favoriter</h2>
            <hr id="orderHistory_hr">
            <ul class="orderHistory_list">
                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
                    </div>
                    <div class="summar_and_button">
                        <div class="order_summary">
                            <div class="h3_and_heart">
                                <h3>Pumpa</h3>
                                <div class="button_like">
                                    <i class="bi bi-heart-fill"></i>
                                </div>
                            </div>
                            <p>Pumpa Biff</p>
                            <p>69,90kr/kg</p>
                        </div>
                        <div class="button_seeOrder_div">
                            <button class="button_seeOrder">Lägg i varukorg</button>
                        </div>
                    </div>
                </li>

                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
                    </div>
                    <div class="summar_and_button">
                        <div class="order_summary">
                            <div class="h3_and_heart">
                                <h3>Pumpa</h3>
                                <div class="button_like">
                                    <i class="bi bi-heart-fill"></i>
                                </div>
                            </div>
                            <p>Pumpa Biff</p>
                            <p>69,90kr/kg</p>
                        </div>
                        <div class="button_seeOrder_div">
                            <button class="button_seeOrder">Lägg i varukorg</button>
                        </div>
                    </div>
                </li>
                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
                    </div>
                    <div class="summar_and_button">
                        <div class="order_summary">
                            <div class="h3_and_heart">
                                <h3>Pumpa</h3>
                                <div class="button_like">
                                    <i class="bi bi-heart-fill"></i>
                                </div>
                            </div>
                            <p>Pumpa Biff</p>
                            <p>69,90kr/kg</p>
                        </div>
                        <div class="button_seeOrder_div">
                            <button class="button_seeOrder">Lägg i varukorg</button>
                        </div>
                    </div>
                </li>
                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
                    </div>
                    <div class="summar_and_button">
                        <div class="order_summary">
                            <div class="h3_and_heart">
                                <h3>Pumpa</h3>
                                <div class="button_like">
                                    <i class="bi bi-heart-fill"></i>
                                </div>
                            </div>
                            <p>Pumpa Biff</p>
                            <p>69,90kr/kg</p>
                        </div>
                        <div class="button_seeOrder_div">
                            <button class="button_seeOrder">Lägg i varukorg</button>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </main>
</template>