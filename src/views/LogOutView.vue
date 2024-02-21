<script></script>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    background-color: var(--dark-beige);
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

#orderHistory {
    background-color: var(--mid-beige);
}
</style>

<template>
    <article>
        <section id="orderHistory">
            <h2>Favoriter</h2>
            <hr id="orderHistory_hr">
        </section>
    </article>
</template>