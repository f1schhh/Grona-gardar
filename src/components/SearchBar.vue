<script>
</script>

<style scoped>
#searchDiv {
    width: 100%;
    max-width: 18rem;
    margin: 1rem auto;
}


#searchInput {
    border-radius: 2rem;
    height: 1.5rem;
    background-color: var(--light-beige);
    border: inset var(--dark-green) 1.5px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3) inset;
    text-align: left;
    color: var(--dark-green);

    width: 100%;
    padding: 0.25rem;
    padding-left: 1rem;
}


#searchIcon {
    position: absolute;
    margin-left: -2.5rem;
    margin-top: -0.25rem;
    font-size: 1.3rem;
    padding: 10px;
    min-width: 40px;
}
</style>

<template>
    <div id="searchDiv">

        <input type="text" id="searchInput" value="Sök i vårt sortiment..."><i id="searchIcon" class="bi bi-search"></i>
    </div>
</template>