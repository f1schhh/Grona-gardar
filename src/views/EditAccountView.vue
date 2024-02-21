<script></script>

<style scoped>
article {
    padding-bottom: 3rem;
}

#editAccount {
    background-color: var(--mid-beige);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
}

#editAccount h2 {
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

#editAccount_hr {
    border: 1px solid #475133;
}

#accountInfo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    width: 70%;
    background-color: var(--dark-beige);
    border-radius: 19px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    justify-items: center;
}

#accountInfo div {
    display: flex;
    flex-direction: column;
    width: 17rem;
    font-weight: bold;
}

#accountInfo input {
    background-color: var(--mid-beige);
    border-radius: 19px;
    padding: 0.3rem 0rem;
    text-align: center;
    color: black;
    font-size: 1rem;
}

/* #editProfilePic {
        display: flex;
        justify-items: center;
        justify-self: center;
        justify-content: center;
        text-align: center;
    } */

#profilePic {
    width: 5rem;
    border-radius: 100%;
    display: flex;
    align-self: center;
}

#editPicSymbol {
    display: flex;
    position: absolute;
    right: 8rem;
    bottom: 18.5rem;
    color: black;
}

#adressDiv {
    padding-bottom: 1rem;
}

.buttons {
    background-color: var(--mid-beige);
    border: 0;
    text-align: center;
    border-radius: 19px;
    padding: 0.3rem 0.6rem;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    font-weight: lighter;
    font-size: 0.8rem;
    width: 8rem;
}
</style>

<template>
    <article>
        <section id="editAccount">
            <h2>Mitt konto</h2>
            <div id="hrDiv">
                <hr id="editAccount_hr">
            </div>
            <form id="accountInfo">
                <div id="editProfilePic">
                    <img id="profilePic" src="../assets/media/profile_pictures/profilePic1.jpg" alt="">
                    <i id="editPicSymbol" class="bi bi-pencil-square"></i>
                </div>
                <div>
                    <label for="fname">Förnamn</label>
                    <input type="text" id="fname" name="fname" placeholder="Exempel" required>
                </div>
                <div>
                    <label for="lname">Efternamn</label>
                    <input type="text" id="lname" name="lname" placeholder="Exempelsson" required>
                </div>
                <div>
                    <label for="fname">E-post</label>
                    <input type="email" id="email" name="fname" placeholder="exempel@exempel.com" required>
                </div>
                <div id="adressDiv">
                    <label for="lname">Adress</label>
                    <input type="text" id="adress" name="lname" placeholder="Exempelgatan 123" required>
                </div>
                <button class="buttons">Ändra lösenord</button>
                <button class="buttons">Spara ändringar</button>
            </form>
        </section>
    </article>
</template>