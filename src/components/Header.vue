<template>
    <header>
        <div class="menu-container">
            <ul>
                <li><router-link to="/">Hem</router-link></li>
                <li><router-link to="/account">Min Profil</router-link></li>
                <li><router-link to="/products">Produkter</router-link></li>
                <li><a href="#about">Om oss</a></li>
            </ul>
        </div>
        <nav>
            <div class="hamburger-container">
                <div class="hamburger-wrapper" @click="onMenuClick()">
                    <!-- <i class="bi bi-list kajsa"></i> -->
                    <div class="rectA"></div>
                    <div class="rectB"></div>
                    <div class="rectC"></div>
                </div>
            </div>

            <div class="logo-container">
                <p>GRÖNA GÅRDAR</p>
            </div>

            <div class="login-and-cart-container">

                <div class="login-wrapper">
                    <i class="bi bi-person"></i>
                </div>

                <div class="cart-wrapper">
                    <i class="bi bi-cart"></i>
                </div>

            </div>
        </nav>
    </header>
    <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem repudiandae temporibus et fugiat impedit ipsum, qui corporis vero architecto unde nulla tempora, laboriosam dolores accusamus praesentium sunt libero cupiditate. Incidunt, harum. Quos veniam nemo autem voluptatem saepe iste. Totam et voluptatibus doloribus. Possimus quae, non nam magnam ipsam iste eaque quasi veritatis incidunt eveniet blanditiis ducimus obcaecati explicabo tempora, in neque quod repellendus porro, assumenda debitis facere hic itaque ut. Consectetur similique tenetur ea. Cupiditate unde laborum voluptates nam fugiat saepe ducimus aliquid consequuntur culpa. Rem reiciendis modi minima dolore nisi consequatur tempora voluptatibus totam ratione et optio sed cum ipsum illum, quas mollitia aliquid esse, nulla excepturi sunt? Labore nam voluptate distinctio minima dolorem culpa ea consequuntur. Culpa hic, exercitationem, error dolores quos quibusdam pariatur explicabo expedita dolorum fugit numquam nesciunt cumque rem consequuntur eos ut. In, culpa, alias non blanditiis, obcaecati odit est vitae hic iste ratione sed placeat? Veniam, cumque. Molestiae, animi! Minus, quibusdam odio. Ducimus animi voluptate, ipsam quaerat voluptatem aut illo corporis adipisci eius accusamus est tempora illum. Aut incidunt ullam cum reprehenderit officiis voluptatum voluptas explicabo officia aliquam iste facilis sed voluptate repellendus tempore, ratione assumenda autem deleniti ea eveniet numquam optio. Dicta eveniet laborum illum distinctio repudiandae nam eligendi quia sint aliquid minus. Sit provident reprehenderit magnam error reiciendis laborum quibusdam voluptatem voluptatibus quia, inventore dolorum explicabo doloribus quos ipsa. Nulla repudiandae vitae optio odio illum voluptatibus accusamus debitis, dolor, similique repellendus fugit voluptates quae. Quod ipsa quas perspiciatis natus in vitae dignissimos consequatur eligendi eveniet iste hic, ex eos officia impedit repellat! Accusantium iusto est quod magni, earum expedita sequi aliquam eius quis atque nisi amet quas omnis nulla laudantium corporis! Earum impedit nesciunt, nostrum non quae corporis ducimus tenetur, quam expedita cum aspernatur animi minus commodi numquam asperiores, dignissimos doloremque delectus quas hic? Et ullam beatae deserunt aliquid quasi quae omnis ad eum. Ad non corporis ducimus, nobis nostrum eveniet aspernatur unde perferendis quidem inventore dignissimos, in aut hic atque dolor at aperiam architecto ipsam minus eaque. Dicta minima in ad libero nam facilis illo adipisci amet tenetur illum, eveniet corporis totam eum voluptatem saepe? Voluptatum, voluptates assumenda incidunt neque optio alias commodi ea corporis. Blanditiis tempora aut aliquam sit incidunt quod suscipit ut illum quas omnis eaque, eos provident hic laboriosam, cum animi impedit mollitia officia assumenda quis iure quaerat explicabo. Deserunt cum ducimus, ad velit at dolor esse dolorem accusamus tempore ab reiciendis aliquam possimus laborum necessitatibus perferendis tenetur dolores! Ratione, totam est. Illo doloremque nam ea incidunt sit. Quibusdam consequuntur nisi dolores? Provident quod, nulla numquam, impedit, necessitatibus id eveniet tempora maxime iusto at iure saepe nesciunt! Eos nemo inventore reprehenderit voluptatum natus omnis, doloribus illum dolorum enim nostrum. Nisi iusto hic alias quam quisquam totam saepe tempore repudiandae qui, quibusdam ratione odio neque quasi, dolor debitis pariatur doloremque eum! Voluptate quos ducimus laudantium laboriosam eveniet, accusantium asperiores cum aliquid, adipisci dolore similique tempora id ipsam fugit enim non a sed eligendi culpa modi doloribus? Nobis, voluptatibus.
        <div id="about">om oss</div>
    </main>
</template>

<script>
import { RouterLink } from 'vue-router';

export default{
    data(){

    },
    methods:{
        onMenuClick(){

            const rectA = document.querySelector(".rectA")
            const rectB = document.querySelector('.rectB')
            const rectC = document.querySelector('.rectC')

            const menuContainer = document.querySelector('.menu-container')

            if(rectA.classList.contains('move-rectA-down')){

                rectA.style.transition='top 0.5s 0.5s, transform 0.5s ease-in-out';
                rectB.style.transition='top 0.5s 0.5s, transform 0.5s ease-in-out';
                rectC.style.transition='top 0.5s 0.5s, transform 0.5s ease-in-out';

                rectA.classList.remove('rotate-rectA-rectB')
                rectB.classList.remove('rotate-rectA-rectB')
                rectC.classList.remove('rotate-rectC')

                rectA.classList.remove("move-rectA-down")
                rectC.classList.remove('move-rectC-up')

                menuContainer.classList.remove('move-menu-right')
            }
            else{
                rectA.style.transition='top 0.5s, transform 0.5s 0.5s ease-in-out';
                rectB.style.transition='top 0.5s, transform 0.5s 0.5s ease-in-out';
                rectC.style.transition='top 0.5s, transform 0.5s 0.5s ease-in-out';

                rectA.classList.add("move-rectA-down")
                rectC.classList.add('move-rectC-up')
                rectA.classList.add('rotate-rectA-rectB')
                rectB.classList.add('rotate-rectA-rectB')
                rectC.classList.add('rotate-rectC')

                menuContainer.classList.add('move-menu-right')


            }

        }
    }

}

</script>

<style scoped>
nav {
    background-color: var(--dark-beige);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
}

.hamburger-container {
    width: 80px;
}
.hamburger-wrapper{
    width: 25px;
    cursor: pointer;
    height: 14px;
    position: relative;
    z-index: 2;
}
.rectA, .rectB, .rectC{
    background-color: var(--dark-green);
    width: 25px;
    height: 1.5px;
    border-radius: 16px;
    transition: top 0.5s, transform 0.5s 0.5s ease-in-out;
}

.rectA{
    top: 0;
    position: absolute;
}

.rectB{
    top: 7px;
    position: absolute;
}

.rectC{
    top:14px;
    position: absolute;
}

.move-rectA-down{
   top: 7px;
}

.move-rectC-up{
   top: 7px;
}

.rotate-rectA-rectB{
    transform: rotate(45deg);
}

.rotate-rectC{
    transform: rotate(-45deg);
}

.logo-container {
    justify-content: center;
    flex-grow: 1;
    text-align: center;
}

.login-and-cart-container {
    width: 80px;
    display: flex;
    justify-content: space-between;
}

.bi {
    font-size: 25px;
    cursor: pointer;
}

main{
    /* background-color: antiquewhite; */
    display: flex;
    flex-direction: column;
}

.menu-container{
    background-color: var(--mid-beige);
    width: 300px;
    height: 100vh;
    z-index: 1;
    position: fixed;
    left: -300px;
    transition: left 0.75s ease-in-out;
}

.move-menu-right{
    left: 0;
}

ul{
    padding-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

li{
    padding-top: 20px;
    margin-left: 25px;
    font-size: 30px;
}

</style>
