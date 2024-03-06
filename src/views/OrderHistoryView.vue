<script>
export default {

    data() {
        return {
            order_history_data: null,
            order_image: []
        }
    },

    async created() {
        await this.find_orders()
    },

    methods: {
        async find_orders() {
            try {
                const response = await fetch('/src/database.json');
                const data = await response.json();

                const orders = data.order_history.filter(item => item.order_by === 1);

                if (orders.length !== 0) {
                    for (let i = 0; i < orders.length; i++) {
                        this.order_image.push(await this.find_image(orders[i].id));
                    }
                    this.order_history_data = orders;
                }

            } catch {

            }

        },

        async find_image(id) {
            try {
                const response = await fetch('/src/database.json');
                const data = await response.json();

                const orders = data.order_product_list.find(item => item.order_id === id);

                if (orders.length !== 0) {
                    const findImage = data.products.find(item => item.id === orders.product_id);
                    console.log(findImage.product_image);


                    if (findImage) {
                        return findImage.product_image
                    }

                }

            } catch {

            }
        }
    }

}


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
    width: 100%;
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
    flex-direction: row;
    text-align: left;
    background-color: var(--dark-beige);
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
    font-size: 0.9rem;
}

.button_seeOrder:active {
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
        /* justify-content: flex-start;
        align-items: flex-start; */
        padding-right: 0;
        max-width: 100%;
        padding-top: 2.8rem;
        margin-top: 0;
        /* height: 24rem; */
    }

    #orderHistory {
        padding-top: 0;
        margin-top: 0;
        height: 100%;
    }

    #orderHistory h2 {
        text-align: left;
        width: 0;
        padding-bottom: 1.5rem;
        font-size: 1rem;
        padding-top: 0;
        margin-top: 0;
    }

    .orderHistory_list {
        flex-direction: row;
        max-width: 100%;
        flex-wrap: wrap;
    }

    .orderHistory_list_li {
        font-size: 0.7rem;
        height: 8rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        width: 80%;
        max-width: 20rem;
    }

    .order_summary {
        padding-top: 2rem;
    }

    .img-wrapper {
        height: 100%;
        width: 8rem;
    }

    .button_seeOrder {
        margin-top: 0;
        font-size: 0.7rem;
        color: var(--dark-green)
    }


    #hrDiv {
        display: none;
    }
}

@media screen and (min-width: 750px) {
    .orderHistory_list_li {
        font-size: 0.9rem;

    }

    .order_summary {
        padding-top: 1rem;
    }
}


@media screen and (min-width: 850px) {
    article {
        padding-left: 2rem;
        display: flex;
        /* justify-content: flex-start;
        align-items: flex-start; */
        padding-right: 0;
        max-width: 50rem;
        padding-top: 2.8rem;
        margin-top: 0;
        /* height: 24rem; */
    }

    #orderHistory {
        padding-top: 0;
        margin-top: 0;
        height: 100%;
    }

    #orderHistory h2 {
        text-align: left;
        width: 0;
        padding-bottom: 1.5rem;
        font-size: 1rem;
        padding-top: 0;
        margin-top: 0;
    }

    .orderHistory_list {
        flex-direction: row;
        max-width: 80rem;
        flex-wrap: wrap;
    }

    .orderHistory_list_li {
        font-size: 0.9rem;
        height: 8rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        width: 60%;
        max-width: 20rem;
    }

    .order_summary {
        padding-top: 1rem;
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
                <li class="orderHistory_list_li" v-for="(items, index) in order_history_data">
                    <div class="img-wrapper" v-if="order_image.length !== 0">
                        <img :src="order_image[index]" alt="">
                    </div>
                    <div class="summar_and_button">
                        <div class="order_summary">
                            <p><span>Ordernummer:</span> {{ items.id }}</p>
                            <p>Datum: {{ items.order_date }}</p>
                            <p>Totalbelopp: {{ items.total_cost }}</p>
                        </div>

                        <button class="button_seeOrder">Se order</button>

                    </div>
                </li>

                <li class="orderHistory_list_li" v-for="(items, index) in order_history_data">
                    <div class="img-wrapper" v-if="order_image.length !== 0">
                        <img :src="order_image[index]" alt="">
                    </div>
                    <div class="summar_and_button">
                        <div class="order_summary">
                            <p><span>Ordernummer:</span> {{ items.id }}</p>
                            <p>Datum: {{ items.order_date }}</p>
                            <p>Totalbelopp: {{ items.total_cost }}</p>
                        </div>

                        <button class="button_seeOrder">Se order</button>

                    </div>
                </li>
            </ul>
        </section>
    </article>
</template>