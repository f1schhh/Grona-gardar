<script>
export default {
    props: {
        id: {
            type: Number,
        }
    },
    data() {
        return {
            heartClass: 'bi bi-heart',
        };
    },

    created(){
        this.loadClass();
    },

    methods: {
        loadClass(){
            const currentFavorite = localStorage.getItem('favorite')
            const checkFavorite = currentFavorite ? JSON.parse(currentFavorite) : [];

            if (checkFavorite.includes(this.id)){
                this.heartClass = 'bi bi-heart-fill';
            }
        },

        favoriteClick() {
            const currentFavorite = localStorage.getItem('favorite')
            const checkFavorite = currentFavorite ? JSON.parse(currentFavorite) : [];

            if (!checkFavorite.includes(this.id)){
                checkFavorite.push(this.id)
                localStorage.setItem('favorite', JSON.stringify(checkFavorite))
                this.heartClass = 'bi bi-heart-fill';
                localStorage.setItem(`heartClass_${this.id}`, this.heartClass);
                console.log("checkfavorite" + checkFavorite)
            } else {
                const deleteFavorite = checkFavorite.filter(item => item !== this.id)
                localStorage.setItem('favorite', JSON.stringify(deleteFavorite))
                this.heartClass = 'bi bi-heart';
                localStorage.setItem('heartClass_${this.id}', this.heartClass);
                console.log("else" +  checkFavorite)
            }

        },

        checkItem(){
            const currentFavorite = localStorage.getItem('favorite')
            const checkFavorite = currentFavorite ? JSON.parse(currentFavorite) : [];

            if (checkFavorite.includes(this.id)){
                return true
            } else {
                return false
            }

        }
    },

};

</script>


<template>
    <div class="button_like" >
        <i @click="favoriteClick" :class="heartClass"></i>
    </div>
</template>


<style scoped>
.button_like{
  cursor: pointer;
}
</style>
