<script></script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    row-gap: 0.7rem;
    background-color: var(--dark-beige);
}

#profileInfo {
    background-color: var(--mid-beige);
    text-align: center;
}

#orderHistory {
    background-color: pink;

}

#orderHistory h2 {
    font-weight: bold;
    font-size: 1rem;
}

#profilePic {
    width: 4rem;
    border-radius: 100%;
}

h2 {
    font-weight: lighter;
    font-size: 1.2rem;

}

ul {
    display: flex;
    justify-content: center;
    /* align-items: center; */
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

.hrAside {
    height: 2.5rem;
}

#endAside {
    border: 1px solid #475133;
}

/* .product_list li {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
} */

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


/*CSS for buttons in general */
button:hover {
    cursor: pointer;
}

/* Knapp för varukorg */

/* button_seeOrder_div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
} */

.button_seeOrder {

    /* clear: both; */
    /* margin-left: auto;
    margin-right: 2; */
    background-color: #FFF8EE;
    border: 0;
    text-align: center;
    border-radius: 19px;
    padding: 0.3rem 0.6rem;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    position: absolute;
    right: 10px;
    bottom: 10px;
}

.orderHistory_list {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    gap: 1rem;
    /* justify-content: center; */
    align-items: center;
    color: black;
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
    padding: 0rem 2.7rem;
    position: relative;
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
        <aside id="profileInfo">
            <h1>Min Profil</h1><img id="profilePic" src="../assets/media/profile_pictures/profilePic1.jpg" alt="">
            <h2>Namn</h2>
            <ul>
                <li class="profileInfo_li">
                    <i class="bi bi-basket3"></i>
                    <p>Orderhistorik</p>
                </li>

                <li class="profileInfo_li">
                    <hr class="hrAside">
                </li>
                <li class="profileInfo_li"><i class="bi bi-person"></i>
                    <p>Mitt konto</p>
                </li>
                <li class="profileInfo_li">
                    <hr class="hrAside">
                </li>
                <li class="profileInfo_li">
                    <i class="bi bi-heart"></i>
                    <p>
                        Favoriter
                    </p>
                </li>
                <li class="profileInfo_li">
                    <hr class="hrAside">
                </li>
                <li class="profileInfo_li">
                    <i class="bi bi-box-arrow-left"></i>
                    <p>Logga ut</p>
                </li>
            </ul>
            <!-- <hr id="endAside"> -->
        </aside>

        <!-- start på section -->
        <!-- start på section -->
        <section id="orderHistory">
            <h2>Orderhistorik</h2>
            <hr id="endAside">
            <ul class="orderHistory_list">
                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
                    </div>
                    <div>
                        <div class="order_summary">
                            <h3>Ordernummer:</h3>
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
                    <div>
                        <div class="order_summary">
                            <h3>Ordernummer:</h3>
                        </div>

                        <button class="button_seeOrder">Se order</button>
                    </div>
                </li>
                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
                    </div>
                    <div>
                        <div class="order_summary">
                            <h3>Ordernummer:</h3>
                        </div>

                        <button class="button_seeOrder">Se order</button>
                    </div>
                </li>
                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
                    </div>
                    <div>
                        <div class="order_summary">
                            <h3>Ordernummer:</h3>
                        </div>

                        <button class="button_seeOrder">Se order</button>
                    </div>
                </li>
                <li class="orderHistory_list_li">
                    <div class="img-wrapper">
                        <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
                    </div>
                    <div>
                        <div class="order_summary">
                            <h3>Ordernummer:</h3>
                        </div>

                        <button class="button_seeOrder">Se order</button>
                    </div>
                </li>
            </ul>
        </section>
    </main>
</template>
