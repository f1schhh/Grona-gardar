<template>
    <div @click="exitCart" class="cart-overlay"></div>

    <div v-if="isCartVisible" class="cart-content-container">

        <div class="exit-cart-content-container">
            <div class="title-container">
                <h1>Varukorg ({{ this.itemsInCart }})</h1>
            </div>


            <div @click="exitCart" class="exit-cart-icon-wrapper">
                <i class="bi bi-x-lg"></i>
            </div>

        </div>


        <div class="underline"></div>


        <div class="products-overview-container">

            <!--Show following div is cart is empty-->
            <div v-if="this.itemsInCart === 0" class="empty-cart-container">

                <div class="cart-immage-wrapper">
                    <i class="bi bi-basket3"></i>
                    <div class="zero-items-in-cart-wrapper">
                        <h1>{{ this.itemsInCart }}</h1>
                    </div>
                </div>

                <h5>Din varukorg är tom</h5>

                <p>Du kan behöva logga in för att komma åt tidigare tillagda produkter.</p>
            </div>
            <!--Show above div if items in cart > 0-->

            <div v-else class="cart-products-container">

                <div v-for="product in cartMirror" class="single-product-wrapper">

                    <div class="product-image-wrapper">
                        <router-link @click="exitCart" :to="`/product/${product.pId}`">
                            <img :src="product.pImage" alt="">
                        </router-link>

                    </div>

                    <div class="product-data-and-controls-container">
                        <div class="product-data-container">

                            <div class="product-data-wrapper">
                                <div class="p-name">
                                    <router-link @click="exitCart" :to="`/product/${product.pId}`">
                                        {{ product.pName }}
                                    </router-link>
                                </div>
                                <div class="p-type">
                                    {{ product.pType }}
                                </div>
                                <div class="p-price">
                                    {{ product.pPrice }} kr/kg
                                </div>
                            </div>

                        </div>

                        <div class="controls-container">
                            <div class="controls-wrapper">
                                <button @click="decreaseProduct(product.pId)">-</button>
                                <p>{{ product.pQuantity }}</p>
                                <button @click="increaseProduct(product.pId)">+</button>

                            </div>
                        </div>

                    </div>




                </div>


            </div>

        </div>

        <div v-if="this.itemsInCart === 0" class="empty-cart-footer">

            <div @click="exitCart" class="back-button">
                <i class="bi bi-arrow-left"></i>
                <p>Tillbaka</p>
            </div>

        </div>

        <div v-else class="to-checkout-footer">
            <p class="tot-cart-price"><b>Totalt: {{ this.totalCostOfItemsInCart }} kr</b></p>
            <p class="delivery-info">Fri frak & returer vid köp över 500 kr</p>
            <div class="to-checkout-btn">
                <p>Till kassan</p>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="payment-methods-container">
                <div class="klarna-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="40.4494" viewBox="0 0 100 40.4494">
                        <g id="Lager_2" data-name="Lager 2">
                            <g id="Layer_1" data-name="Layer 1">
                                <rect class="klarna-style" width="100" height="40.4494" rx="11.7384" />
                                <path
                                    d="M80.0772,17.7235a6.194,6.194,0,1,0,0,10.2373v.75h3.5145V16.9727H80.0772Zm-3.1964,8.1388a3.0243,3.0243,0,1,1,3.1849-3.02A3.1059,3.1059,0,0,1,76.8808,25.8623Z" />
                                <rect x="28.2027" y="11.7416" width="3.678" height="16.9694" />
                                <path
                                    d="M64.1542,16.6569a4.2694,4.2694,0,0,0-3.62,1.6383V16.9733h-3.5V28.711h3.5421V22.5424a2.4754,2.4754,0,0,1,2.6383-2.6591c1.5447,0,2.4325.9228,2.4325,2.6348V28.711h3.5107V21.2464C69.1577,18.5146,66.9857,16.6569,64.1542,16.6569Z" />
                                <path
                                    d="M43,17.7235a6.194,6.194,0,1,0,0,10.2373v.75h3.5145V16.9727H43Zm-3.1965,8.1388a3.0243,3.0243,0,1,1,3.1845-3.02A3.1058,3.1058,0,0,1,39.8034,25.8623Z" />
                                <path
                                    d="M51.9513,18.5017V16.9728H48.353V28.7111h3.606v-5.48c0-1.8491,2.0042-2.843,3.3949-2.843.014,0,.0276.0014.0417.0015V16.9735A4.3821,4.3821,0,0,0,51.9513,18.5017Z" />
                                <path
                                    d="M87.323,24.5476a2.2059,2.2059,0,1,0,2.206,2.2059A2.2057,2.2057,0,0,0,87.323,24.5476Z" />
                                <path
                                    d="M25.6675,11.7384H21.8558a9.7488,9.7488,0,0,1-3.9412,7.8678l-1.51,1.131,5.8513,7.9792h4.8106l-5.3837-7.342A13.5049,13.5049,0,0,0,25.6675,11.7384Z" />
                                <rect x="12.1204" y="11.7384" width="3.8185" height="16.9773" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="visa-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-74.7 -40.204 647.4 241.224">
                        <defs>
                            <linearGradient x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse"
                                gradientTransform="scale(89.72793 -89.72793) rotate(-20.218 .966 -.457)" spreadMethod="pad"
                                id="b">
                                <stop offset="0" stop-color="#222357" />
                                <stop offset="1" stop-color="#254aa5" />
                            </linearGradient>
                            <clipPath clipPathUnits="userSpaceOnUse" id="a">
                                <path
                                    d="M413.742 90.435c-.057-4.494 4.005-7.002 7.065-8.493 3.144-1.53 4.2-2.511 4.188-3.879-.024-2.094-2.508-3.018-4.833-3.054-4.056-.063-6.414 1.095-8.289 1.971l-1.461-6.837c1.881-.867 5.364-1.623 8.976-1.656 8.478 0 14.025 4.185 14.055 10.674.033 8.235-11.391 8.691-11.313 12.372.027 1.116 1.092 2.307 3.426 2.61 1.155.153 4.344.27 7.959-1.395l1.419 6.615c-1.944.708-4.443 1.386-7.554 1.386-7.98 0-13.593-4.242-13.638-10.314m34.827 9.744c-1.548 0-2.853-.903-3.435-2.289l-12.111-28.917h8.472l1.686 4.659h10.353l.978-4.659h7.467l-6.516 31.206h-6.894m1.185-8.43l2.445-11.718h-6.696l4.251 11.718m-46.284 8.43l-6.678-31.206h8.073l6.675 31.206h-8.07m-11.943 0l-8.403-21.24-3.399 18.06c-.399 2.016-1.974 3.18-3.723 3.18h-13.737l-.192-.906c2.82-.612 6.024-1.599 7.965-2.655 1.188-.645 1.527-1.209 1.917-2.742l6.438-24.903h8.532l13.08 31.206h-8.478" />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#a)" transform="matrix(4.98469 0 0 -4.98469 -1804.82 502.202)">
                            <path d="M0 0l98.437 36.252 22.394-60.809-98.436-36.252" fill="url(#b)"
                                transform="translate(351.611 96.896)" />
                        </g>
                    </svg>
                </div>
                <div class="master-card-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200" id="svg895" version="1.1"
                        viewBox="-96 -98.908 832 593.448">
                        <path id="rect887" display="inline" fill="#ff5f00" stroke-width="5.494"
                            d="M224.833 42.298h190.416v311.005H224.833z" />
                        <path id="path889"
                            d="M244.446 197.828a197.448 197.448 0 0175.54-155.475 197.777 197.777 0 100 311.004 197.448 197.448 0 01-75.54-155.53z"
                            fill="#eb001b" stroke-width="5.494" />
                        <path id="path891"
                            d="M621.101 320.394v-6.372h2.747v-1.319h-6.537v1.319h2.582v6.373zm12.691 0v-7.69h-1.978l-2.307 5.493-2.308-5.494h-1.977v7.691h1.428v-5.823l2.143 5h1.483l2.143-5v5.823z"
                            class="e" fill="#f79e1b" stroke-width="5.494" />
                        <path id="path893"
                            d="M640 197.828a197.777 197.777 0 01-320.015 155.474 197.777 197.777 0 000-311.004A197.777 197.777 0 01640 197.773z"
                            class="master-card-style" fill="#f79e1b" stroke-width="5.494" />
                    </svg>
                </div>
                <div class="amex-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200"
                        viewBox="-150 -249.37925 1300 1496.2755">
                        <path
                            d="M0 0h997.517v538.49l-49.375 77.147 49.375 68.661v313.219H0v-507.63l30.859-35.488L0 420.454z"
                            fill="#016fd0" />
                        <path
                            d="M193.64 695.099v-156.61h165.82l17.791 23.193 18.38-23.193h601.886V684.3s-15.74 10.643-33.945 10.8H630.295l-20.058-24.688V695.1h-65.73v-42.142s-8.979 5.882-28.39 5.882h-22.373v36.26h-99.52l-17.766-23.69-18.038 23.69zM0 420.454l37.393-87.177h64.668l21.22 48.833v-48.833h80.388l12.633 35.295 12.247-35.295h360.858v17.744s18.97-17.744 50.146-17.744l117.085.41 20.854 48.193v-48.603h67.273l18.515 27.683v-27.683h67.89v156.61h-67.89l-17.744-27.774v27.773h-98.838l-9.94-24.687h-26.57l-9.779 24.687h-67.028c-26.826 0-43.974-17.381-43.974-17.381v17.381H488.343L468.285 465.2v24.687H92.481L82.548 465.2H56.06l-9.86 24.686H0z"
                            fill="#fff" />
                        <path
                            d="M50.628 352.584L.193 469.848h32.836l9.306-23.482h54.1l9.257 23.482h33.56L88.863 352.584zm18.66 27.29l16.49 41.034H52.75zm73.435 89.954V352.564l46.661.173 27.14 75.605 26.49-75.778h46.289v117.264h-29.316v-86.405l-31.076 86.405h-25.71l-31.162-86.405v86.405zm166.638 0V352.564h95.663v26.23h-66.038v20.058h64.495v24.688h-64.495v20.83h66.038v25.458zm112.636-117.244v117.264h29.316v-41.66h12.343l35.15 41.66h35.826l-38.574-43.203c15.831-1.336 32.161-14.923 32.161-36.018 0-24.676-19.368-38.043-40.984-38.043zm29.316 26.23h33.51c8.04 0 13.887 6.288 13.887 12.343 0 7.79-7.577 12.344-13.452 12.344h-33.945zm118.807 91.014h-29.933V352.564h29.933zm70.975 0h-6.46c-31.262 0-50.243-24.63-50.243-58.15 0-34.349 18.768-59.114 58.246-59.114h32.402v27.773h-33.586c-16.026 0-27.36 12.507-27.36 31.63 0 22.71 12.96 32.248 31.63 32.248h7.715zm63.792-117.244l-50.435 117.264h32.836l9.305-23.482h54.1l9.258 23.482h33.559l-50.387-117.264zm18.66 27.29l16.49 41.034h-33.029zm73.386 89.954V352.564h37.272l47.59 73.676v-73.676h29.317v117.264h-36.067l-48.796-75.604v75.604zM213.699 675.04V557.776h95.662v26.23h-66.038v20.059h64.495v24.687h-64.495v20.83h66.038v25.458zm468.748 0V557.776h95.662v26.23h-66.038v20.059h64.187v24.687H712.07v20.83h66.038v25.458zm-369.373 0l46.578-57.908-47.687-59.356H348.9l28.4 36.693 28.497-36.693h35.488l-47.06 58.632 46.663 58.632H403.96l-27.576-36.114-26.905 36.114zM444.37 557.796V675.06h30.087v-37.03h30.859c26.111 0 45.903-13.853 45.903-40.792 0-22.317-15.523-39.442-42.094-39.442zm30.087 26.52h32.498c8.436 0 14.465 5.17 14.465 13.5 0 7.826-5.999 13.501-14.561 13.501h-32.402zm89.491-26.54V675.04h29.316v-41.66h12.344l35.15 41.66h35.825l-38.573-43.202c15.83-1.336 32.16-14.924 32.16-36.019 0-24.676-19.368-38.043-40.984-38.043zm29.316 26.23h33.511c8.039 0 13.887 6.288 13.887 12.344 0 7.79-7.577 12.343-13.453 12.343h-33.945zm198.423 91.034v-25.458h58.671c8.681 0 12.44-4.692 12.44-9.837 0-4.93-3.747-9.913-12.44-9.913h-26.513c-23.045 0-35.88-14.04-35.88-35.121 0-18.803 11.753-36.935 46-36.935h57.088l-12.343 26.385h-49.375c-9.438 0-12.343 4.952-12.343 9.682 0 4.86 3.59 10.222 10.8 10.222h27.773c25.69 0 36.838 14.572 36.838 33.655 0 20.517-12.422 37.32-38.236 37.32zm107.597 0v-25.458h58.67c8.682 0 12.44-4.692 12.44-9.837 0-4.93-3.746-9.913-12.44-9.913h-26.512c-23.046 0-35.88-14.04-35.88-35.121 0-18.803 11.753-36.935 45.999-36.935h57.089l-12.344 26.385h-49.374c-9.438 0-12.344 4.952-12.344 9.682 0 4.86 3.59 10.222 10.801 10.222h27.773c25.69 0 36.838 14.572 36.838 33.655 0 20.517-12.422 37.32-38.236 37.32z"
                            fill="#016fd0" />
                    </svg>
                </div>
                <div class="swish-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" height="800" width="1200"
                        viewBox="-86.643 -43.95675 750.906 263.7405">
                        <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(.90026 1.1108)" y2="11.39"
                            y1="83.349" x2="83.672" x1="112.948" id="a">
                            <stop stop-color="#ef2131" offset="0" />
                            <stop stop-color="#fecf2c" offset="1" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(.95514 1.04697)"
                            y2="141.159" y1="28.143" x2="11.106" x1="70.663" id="b">
                            <stop stop-color="#fbc52c" offset="0" />
                            <stop stop-color="#f87130" offset=".264" />
                            <stop stop-color="#ef52e2" offset=".561" />
                            <stop stop-color="#661eec" offset="1" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(.90026 1.1108)" y2="127.569"
                            y1="57.327" x2="56.739" x1="28.748" id="c">
                            <stop stop-color="#78f6d8" offset="0" />
                            <stop stop-color="#77d1f6" offset=".266" />
                            <stop stop-color="#70a4f3" offset=".554" />
                            <stop stop-color="#661eec" offset="1" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="scale(.95514 1.04697)" y2="7.542"
                            y1="120.138" x2="121.656" x1="62.58" id="d">
                            <stop stop-color="#536eed" offset="0" />
                            <stop stop-color="#54c3ec" offset=".247" />
                            <stop stop-color="#64d769" offset=".564" />
                            <stop stop-color="#fecf2c" offset="1" />
                        </linearGradient>
                        <g fill-rule="evenodd" fill="none">
                            <path fill-rule="nonzero" fill="#4a4a49"
                                d="M549.059 48.903c0-2.03.373-3.932 1.12-5.708.746-1.776 1.76-3.325 3.04-4.647a14.192 14.192 0 014.5-3.124c1.72-.762 3.567-1.142 5.54-1.142 2 0 3.874.38 5.62 1.142a14.303 14.303 0 014.56 3.124c1.294 1.322 2.314 2.871 3.061 4.647.747 1.776 1.12 3.679 1.12 5.708 0 2.03-.373 3.933-1.12 5.709-.747 1.776-1.767 3.325-3.06 4.646a14.303 14.303 0 01-4.56 3.125c-1.747.761-3.62 1.142-5.62 1.142-1.974 0-3.82-.38-5.541-1.142a14.192 14.192 0 01-4.5-3.125c-1.28-1.321-2.294-2.87-3.04-4.646-.747-1.776-1.12-3.679-1.12-5.709zm2.92 0c0 1.683.286 3.245.86 4.687a11.687 11.687 0 002.38 3.766 11.164 11.164 0 003.58 2.523c1.374.615 2.86.922 4.46.922 1.627 0 3.134-.307 4.52-.922a11.333 11.333 0 003.62-2.523 11.775 11.775 0 002.421-3.766c.587-1.442.88-3.004.88-4.687 0-1.682-.293-3.244-.88-4.687a11.775 11.775 0 00-2.42-3.765 11.333 11.333 0 00-3.62-2.524c-1.387-.614-2.894-.921-4.52-.921-1.6 0-3.087.307-4.46.921a11.164 11.164 0 00-3.581 2.524 11.671 11.671 0 00-2.38 3.765c-.574 1.443-.86 3.005-.86 4.687zm6.4-6.289c0-.881.44-1.322 1.32-1.322h4.52c1.44 0 2.587.414 3.44 1.242.854.828 1.28 1.95 1.28 3.365 0 .587-.086 1.108-.26 1.562a4.38 4.38 0 01-.66 1.182c-.266.334-.56.607-.88.821-.32.214-.64.36-.96.44v.08c.027.028.067.081.12.161a.88.88 0 01.16.26c.054.12.134.26.24.421l2.08 4.046c.24.454.294.821.16 1.102-.133.28-.426.42-.88.42h-.48c-.746 0-1.266-.32-1.56-.961l-2.32-4.887h-2.48v4.566c0 .855-.413 1.282-1.24 1.282h-.36c-.827 0-1.24-.427-1.24-1.282zm5.24 5.849c.774 0 1.374-.227 1.8-.681.427-.454.64-1.082.64-1.883 0-.775-.213-1.375-.64-1.803-.426-.427-1.013-.64-1.76-.64h-2.44v5.007zM447.016 58.04c4.522 0 8.357.577 11.505 1.731 3.148 1.155 5.608 2.22 7.382 3.197 1.507.8 2.394 1.865 2.66 3.197s.044 2.752-.665 4.262l-1.33 2.397c-.798 1.599-1.818 2.531-3.06 2.797-1.24.267-2.704.045-4.389-.666-1.507-.71-3.325-1.442-5.453-2.197-2.128-.755-4.61-1.132-7.448-1.132-2.927 0-5.188.577-6.784 1.731-1.596 1.155-2.394 2.797-2.394 4.928 0 1.865.82 3.375 2.46 4.529 1.641 1.154 3.725 2.176 6.252 3.064 2.527.887 5.232 1.842 8.114 2.863a40.313 40.313 0 018.113 3.93 20.588 20.588 0 016.251 6.126c1.64 2.487 2.461 5.639 2.461 9.457 0 3.02-.598 5.794-1.796 8.325-1.197 2.53-2.926 4.728-5.187 6.593-2.261 1.865-4.988 3.33-8.18 4.396-3.192 1.065-6.739 1.598-10.64 1.598-5.498 0-10.131-.8-13.9-2.398-3.768-1.598-6.672-3.107-8.712-4.528-1.507-.888-2.35-1.998-2.527-3.33-.177-1.332.222-2.753 1.197-4.262l1.596-2.398c.976-1.42 2.062-2.22 3.259-2.397 1.197-.178 2.638.177 4.323 1.065 1.596.888 3.657 1.887 6.185 2.997 2.527 1.11 5.52 1.665 8.978 1.665 2.926 0 5.231-.622 6.916-1.865 1.685-1.243 2.527-2.93 2.527-5.061 0-1.865-.82-3.352-2.46-4.462-1.641-1.11-3.725-2.131-6.252-3.064a9282.52 9282.52 0 01-8.113-2.997 43.077 43.077 0 01-8.114-3.995 20.588 20.588 0 01-6.251-6.127c-1.64-2.487-2.46-5.683-2.46-9.59 0-3.286.686-6.216 2.06-8.791a18.467 18.467 0 015.587-6.394c2.35-1.687 5.099-2.974 8.247-3.862 3.147-.888 6.495-1.332 10.042-1.332zm-197.709 0c4.523 0 8.358.577 11.506 1.731 3.147 1.155 5.608 2.22 7.382 3.197 1.507.8 2.394 1.865 2.66 3.197s.044 2.752-.665 4.262l-1.33 2.397c-.798 1.599-1.818 2.531-3.06 2.797-1.241.267-2.704.045-4.389-.666-1.507-.71-3.325-1.442-5.453-2.197-2.128-.755-4.611-1.132-7.449-1.132-2.926 0-5.187.577-6.783 1.731-1.596 1.155-2.394 2.797-2.394 4.928 0 1.865.82 3.375 2.46 4.529 1.641 1.154 3.725 2.176 6.252 3.064 2.527.887 5.232 1.842 8.113 2.863a40.313 40.313 0 018.114 3.93 20.588 20.588 0 016.251 6.126c1.64 2.487 2.46 5.639 2.46 9.457 0 3.02-.598 5.794-1.795 8.325-1.197 2.53-2.926 4.728-5.187 6.593-2.261 1.865-4.988 3.33-8.18 4.396-3.192 1.065-6.74 1.598-10.64 1.598-5.498 0-10.131-.8-13.9-2.398s-6.672-3.107-8.712-4.528c-1.507-.888-2.35-1.998-2.527-3.33-.177-1.332.222-2.753 1.197-4.262l1.596-2.398c.975-1.42 2.062-2.22 3.259-2.397 1.197-.178 2.638.177 4.323 1.065 1.596.888 3.657 1.887 6.184 2.997 2.528 1.11 5.52 1.665 8.978 1.665 2.927 0 5.232-.622 6.917-1.865 1.685-1.243 2.527-2.93 2.527-5.061 0-1.865-.82-3.352-2.46-4.462-1.641-1.11-3.725-2.131-6.252-3.064-2.527-.932-5.232-1.931-8.114-2.997a43.076 43.076 0 01-8.113-3.995 20.588 20.588 0 01-6.251-6.127c-1.64-2.487-2.461-5.683-2.461-9.59 0-3.286.687-6.216 2.062-8.791a18.467 18.467 0 015.586-6.394c2.35-1.687 5.099-2.974 8.246-3.862 3.148-.888 6.496-1.332 10.042-1.332zM491.832 33c3.724 0 5.587 1.865 5.587 5.594v27.438c0 .888-.023 1.665-.067 2.331-.044.666-.11 1.266-.2 1.798a11.567 11.567 0 00-.132 1.599h.266c.798-1.599 1.928-3.22 3.391-4.862 1.463-1.643 3.192-3.13 5.188-4.462 1.995-1.332 4.256-2.397 6.783-3.197 2.527-.799 5.254-1.198 8.18-1.198 7.537 0 13.367 2.042 17.49 6.127 4.124 4.084 6.185 10.655 6.185 19.713v38.093c0 3.73-1.862 5.595-5.586 5.595h-5.72c-3.724 0-5.586-1.865-5.586-5.595v-34.63c0-4.174-.71-7.526-2.128-10.057-1.419-2.53-4.256-3.796-8.512-3.796-2.927 0-5.609.578-8.047 1.732-2.439 1.154-4.5 2.73-6.185 4.728-1.685 1.998-2.993 4.374-3.924 7.126-.93 2.753-1.396 5.728-1.396 8.924v25.973c0 3.73-1.863 5.595-5.587 5.595h-5.72c-3.723 0-5.585-1.865-5.585-5.595v-83.38c0-3.73 1.862-5.594 5.586-5.594zM403.46 59.639c3.636 0 5.454 1.865 5.454 5.594v56.741c0 3.73-1.818 5.595-5.454 5.595h-5.852c-3.636 0-5.453-1.865-5.453-5.595v-56.74c0-3.73 1.817-5.595 5.453-5.595zm-112.855 0c3.37 0 5.364 1.643 5.985 4.928l10.907 39.692c.177.977.332 1.865.465 2.664.133.8.288 1.554.466 2.265.177.799.31 1.554.399 2.264h.266c.089-.71.222-1.465.399-2.264.177-.71.332-1.465.465-2.265.133-.799.333-1.687.599-2.664l11.439-39.692c.62-3.196 2.66-4.795 6.118-4.795h5.054c3.281 0 5.32 1.599 6.119 4.795l11.305 39.692c.266.977.466 1.865.599 2.664.133.8.288 1.554.465 2.265.178.799.31 1.554.4 2.264h.265a24.5 24.5 0 01.4-2.264c.177-.71.332-1.465.465-2.265.133-.799.332-1.687.598-2.664l10.774-39.692c.798-3.285 2.837-4.928 6.118-4.928h6.119c2.04 0 3.458.577 4.256 1.732.798 1.154.931 2.663.399 4.528l-17.424 57.008c-.887 3.108-2.97 4.662-6.251 4.662h-8.912c-3.37 0-5.453-1.599-6.251-4.795l-10.242-33.965a29.221 29.221 0 01-.665-2.664 52.127 52.127 0 00-.532-2.398 24.721 24.721 0 01-.399-2.264h-.266a88.49 88.49 0 00-.532 2.264c-.177.71-.355 1.51-.532 2.398a29.221 29.221 0 01-.665 2.664l-10.242 33.965c-.798 3.196-2.837 4.795-6.118 4.795h-9.177c-3.193 0-5.232-1.554-6.119-4.662l-17.557-57.008c-.532-1.865-.377-3.374.466-4.528.842-1.155 2.239-1.732 4.19-1.732z" />
                            <path fill="url(#a)"
                                d="M0 146.685c35.32 16.893 78.912 8.533 105.246-22.845C136.46 86.648 131.612 31.203 94.418 0L69.692 29.462c29.057 24.377 32.845 67.694 8.46 96.75C58.706 149.378 26.691 157.114 0 146.684"
                                transform="translate(50.006 20.581)" />
                            <path fill="url(#b)"
                                d="M0 146.685c35.32 16.893 78.912 8.533 105.246-22.845a88.51 88.51 0 008.524-12.067c4.159-25.843-4.987-53.159-26.5-71.207a76.989 76.989 0 00-17.575-11.1c29.055 24.377 32.84 67.691 8.456 96.745C58.707 149.38 26.693 157.115 0 146.685"
                                transform="translate(50.006 20.581)" />
                            <path fill="url(#c)"
                                d="M125.821 8.56C90.501-8.331 46.91.029 20.575 31.407c-31.214 37.192-26.366 92.637 10.828 123.84l24.727-29.462c-29.058-24.377-32.846-67.694-8.46-96.75C67.114 5.866 99.128-1.869 125.82 8.561" />
                            <path fill="url(#d)"
                                d="M125.821 8.56C90.501-8.331 46.91.029 20.575 31.407a88.492 88.492 0 00-8.524 12.067c-4.159 25.843 4.987 53.158 26.5 71.207a76.991 76.991 0 0017.575 11.1c-29.054-24.377-32.84-67.691-8.456-96.746C67.114 5.866 99.128-1.869 125.82 8.561" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { useProductStore } from '../store';

export default {
    components: {

    },
    data() {
        return {
            isCartVisible: false,
            productId: null,
            cartMirror: null,
            itemsInCart: null,
            totalCostOfItemsInCart: null,
            productStore: null, // Store the store instance
        }
    },
    emits: ['tot-items-in-cart', 'tot-cost-in-cart'],
    created() {

        // Initialize the store instance
        this.productStore = useProductStore();
    },
    props: {
        onCartClick: Boolean,

    },
    computed: {


    },
    emits: ['overlay-clicked'],
    methods: {

        //Method used to make cart visible
        cartClicked(isCartClicked) {

            if (isCartClicked === true) {

                //Toggle isCartVisible to show overlay and cart
                this.isCartVisible = true;

                //Show overlay
                document.querySelector(".cart-overlay").classList.add("show-overlay");

                //Increase opacity and blur of overlay, and animate cart left
                setTimeout(() => {

                    document.querySelector(".cart-overlay").style.transition = "background-color 0.75s, backdrop-filter 0.75s";

                    document.querySelector(".cart-overlay").classList.add("increase");

                    document.querySelector(".cart-content-container").classList.add("move-cart-content-container")
                }, 100)

            }
        },

        //Emit an event when the overlay is clicked
        exitCart() {

            if (this.isCartVisible === true) {

                //Animate cart to right, to hide it from showing
                document.querySelector(".cart-content-container").classList.remove("move-cart-content-container")

                //Remove blur and decrease opacity of ovarlay
                document.querySelector(".cart-overlay").classList.remove("increase");

                //Emit an event to parent that overlay or X is clicked
                this.$emit('overlay-clicked');

                setTimeout(() => {

                    document.querySelector(".cart-overlay").style.transition = "background-color 0.5s, backdrop-filter 0.5s";

                    //Make overlay disappear
                    document.querySelector(".cart-overlay").classList.remove("show-overlay");

                    //Notify local flag that cart is not visible anymore
                    this.isCartVisible = false;

                }, 550)
            }


        },


        onIncomingProduct() {
            // Retrieve the Pinia store instance
            const productStore = useProductStore();
            const products = productStore.products;

            // Set itemsInCart based on the number of products
            if (products.length > 0) {

                // Calculate the sum of all pQuantity values
                const totalQuantity = products.reduce((acc, product) => acc + product.pQuantity, 0);

                // Set itemsInCart to the sum of all pQuantity values
                this.itemsInCart = totalQuantity;

                // Calculate the sum of all cost for all products in cart
                const totalCost = products.reduce((acc, product) => {
                    return acc + (product.pPrice * product.pQuantity);
                }, 0);

                // Set total cost of items in cart
                this.totalCostOfItemsInCart = totalCost;


                //Emit amount of items and total cost to parent header
                this.$emit('tot-items-in-cart', this.itemsInCart);
                this.$emit('tot-cost-in-cart', this.totalCostOfItemsInCart);

            } else {
                // If there are no products, set itemsInCart to 0
                this.itemsInCart = 0;

                //If there are no products, set total cost to zero
                this.totalCostOfItemsInCart = 0;

                //Emit amount of items and total cost to parent header
                this.$emit('tot-items-in-cart', this.itemsInCart);
                this.$emit('tot-cost-in-cart', this.totalCostOfItemsInCart);
            }

            //add cart products into a local component variable
            this.cartMirror = products;

            // Log products in varukorg
            console.log("Products in varukorg:", products);
        },

        //Method that reduces items in the pinia cart
        decreaseProduct(productId) {
            // Find the index of the current product in the store's products array
            const productIndex = this.productStore.products.findIndex(product => product.pId === productId);
            // If the product is found and its quantity is greater than 0, decrease its quantity
            if (productIndex !== -1) {
                if (this.productStore.products[productIndex].pQuantity > 0) {
                    this.productStore.products[productIndex].pQuantity--;
                }
                // If the quantity becomes 0 after decrementing, remove the product from the store
                if (this.productStore.products[productIndex].pQuantity === 0) {
                    this.productStore.products.splice(productIndex, 1);
                }
            }
        },
        //Method that increases product quantity in the pinia cart
        increaseProduct(productId) {
            // Find the index of the current product in the store's products array
            const productIndex = this.productStore.products.findIndex(product => product.pId === productId);
            // If the product is found, increase its quantity
            if (productIndex !== -1) {
                this.productStore.products[productIndex].pQuantity++;
            }
        },

    },
    watch: {

        //Watch prop on cart click and call CartClicked method when value changes
        onCartClick(newValue) {
            if (newValue && !this.isCartVisible) {
                this.cartClicked(newValue)
            }
        },

        // Watch for changes in the products state and call onIncomingProductId method
        'productStore.products': {
            handler() {
                this.onIncomingProduct();
            },
            // Deep watch ensures changes in nested properties are detected
            deep: true,
        },

    },

}
</script>

<style scoped>
.cart-overlay {
    display: none;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(0px);
    transition: background-color 0.75s, backdrop-filter 0.75s;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 3;
}

.show-overlay {
    display: block;
}

.increase {
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(1px);
}


.cart-content-container {
    width: 280px;
    height: 100vh;
    right: -340px;
    top: 0;
    background-color: var(--mid-beige);
    position: fixed;
    z-index: 3;
    transition: right 0.75s;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.4);
    padding-left: 0px;
    padding-right: 15px;
}

.move-cart-content-container {
    right: 0;
}

.exit-cart-content-container {
    height: 68px;
    width: 100%;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-left: 10px;
}

.exit-cart-icon-wrapper {
    width: fit-content;
    height: fit-content;
    line-height: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
    position: absolute;
    right: 0;
    margin-right: 17px;
}

.exit-cart-content-container h1 {
    font-size: 4.45vw;
    text-align: center;
}

.underline {
    height: 1.5px;
    width: 100%;
    left: 25px;
    background-color: rgba(71, 81, 51, 0.2);
    top: 67px;
    position: absolute;
    transform: translateX(-25px);
}

.products-overview-container {
    width: 100%;
    height: 69.5%;
    overflow-y: scroll;
    padding-left: 10px;
}

/* Hiding scrollbar for Chrome, Safari and Opera */
.products-overview-container::-webkit-scrollbar {
    display: none;
}

/* Hiding scrollbar for IE, Edge and Firefox */
.products-overview-container {
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE and Edge */
}

.cart-products-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
}

.single-product-wrapper {
    background-color: var(--dark-beige);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    width: 90%;
    height: 90px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.product-image-wrapper {
    width: 40%;
}

.product-image-wrapper img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.product-data-and-controls-container {
    width: 60%;
}

.product-data-container {
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-data-wrapper {

    width: 85%;
    height: 80%;
}

.p-name {
    font-weight: bolder;
}

.p-name,
.p-type,
.p-price {
    font-size: 13px;
}

.controls-container {
    height: 35%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.controls-wrapper {
    background-color: var(--mid-beige);
    border-radius: 16px;
    height: 20px;
    width: 60px;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
}

.controls-wrapper button {
    background-color: var(--light-beige);
    border: none;
    width: 20px;
    border-radius: 16px;
    transition: box-shadow 0.3s;
}

.controls-wrapper button:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.empty-cart-container {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
}

.cart-immage-wrapper {
    font-size: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: fit-content;
    border-radius: 46px;
    width: 70px;
    height: 70px;
    background-color: rgba(218, 178, 158, 0.4);
}

.zero-items-in-cart-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    width: 15px;
    height: 15px;
    top: 52.5%;
    border-radius: 86px;
    position: absolute;
    background-color: var(--light-beige);
}

.empty-cart-container h5 {
    text-align: center;
    margin-top: 30px;
}

.empty-cart-container p {
    text-align: center;
    font-size: 12px;
    margin-top: 20px;
}

.empty-cart-footer {
    height: 20%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    -webkit-box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    -moz-box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--mid-beige);
}

.back-button {
    background-color: var(--dark-beige);
    border-radius: 26px;
    padding: 10px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: box-shadow 0.3s;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.back-button:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.bi-arrow-left {
    margin-right: 5px;
    font-size: 18px;
}

.to-checkout-footer {
    height: 20%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    -webkit-box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    -moz-box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 10;
    background-color: var(--mid-beige);
}

.tot-cart-price {
    width: fit-content;
    font-size: 12px;
}

.delivery-info {
    font-size: 10px;
}

.to-checkout-btn {
    background-color: var(--dark-beige);
    height: 20px;
    border-radius: 26px;
    padding: 10px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: box-shadow 0.3s;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.to-checkout-btn:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.bi-chevron-right {
    height: 16px;
}

.payment-methods-container {
    width: 65%;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.klarna-wrapper,
.visa-wrapper,
.master-card-wrapper,
.amex-wrapper {
    width: 30px;
    height: 20px;
}

.swish-wrapper {
    width: 45px;
    height: 35px;
}

.klarna-wrapper svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.klarna-style {
    fill: #ffb3c7;
}

.visa-wrapper svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.master-card-style {
    fill: #f79e1b
}

.master-card-wrapper svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.amex-wrapper svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swish-wrapper svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (min-width: 451px) {
    .cart-content-container h1 {
        font-size: 20px;
    }

}
</style>
