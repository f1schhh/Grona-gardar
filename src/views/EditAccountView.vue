<script></script>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    background-color: var(--dark-beige);
}

#orderHistory {
    background-color: var(--mid-beige);
}

#orderHistory h2 {
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    padding-top: 0.8rem;
    padding-bottom: 0.5rem;
}

#orderHistory_hr {
    border: 1px solid #475133;
}

#accountInfo {
    display: flex;
    flex-direction: column;
}
</style>

<template>
    <article>
        <section id="orderHistory">
            <h2>Mitt konto</h2>
            <hr id="orderHistory_hr">

            <form id="accountInfo">
                <div>
                    <label for="fname">Förnamn</label>
                    <input type="text" id="fname" name="fname">
                </div>
                <div>
                    <label for="lname">Efternamn</label>
                    <input type="text" id="lname" name="lname">
                </div>
                <div>
                    <label for="fname">E-post</label>
                    <input type="text" id="email" name="fname">
                </div>
                <div>
                    <label for="lname">Adress</label>
                    <input type="text" id="adress" name="lname">
                </div>
            </form>
        </section>
    </article>
</template>