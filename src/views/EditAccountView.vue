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

#accountInfo {
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

#editProfilePic {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

#profilePic {
    width: 5rem;
    border-radius: 100%;
    display: flex;
    align-self: center;
}

#editPicSymbol {
    width: 0;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-self: flex-end;
    align-self: flex-end;
}

.inputBox,
#adressDiv {
    display: flex;
    flex-direction: column;
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

@media screen and (min-width: 600px) {
    article {
        padding-left: 2rem;
    }

    #editAccount {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    #editAccount h2 {
        text-align: left;
        margin: 0;
        padding: 2rem 0;
        font-size: 1.5rem;
    }

    #editProfilePic {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    #profilePic {
        width: 8rem;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    #accountInfo {
        display: flex;
        flex-direction: column;
        width: 17rem;
        font-weight: bold;
    }

    #editPicSymbol {
        width: 0;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: nowrap;
        justify-self: flex-end;
        align-self: flex-end;
    }

    label {
        font-size: 1.2rem;
    }

    .inputBox,
    #adressDiv {
        display: flex;
        flex-direction: column;
    }

    .buttons {
        font-size: 0.9rem;
        color: var(--dark-green);
    }

    #hrDiv {
        display: none;
    }
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
                <div class="inputBox">
                    <label for="fname">Förnamn</label>
                    <input type="text" id="fname" name="fname" placeholder="Exempel" required>
                </div>
                <div class="inputBox">
                    <label for="lname">Efternamn</label>
                    <input type="text" id="lname" name="lname" placeholder="Exempelsson" required>
                </div>
                <div class="inputBox">
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