<template>
    <select class='genres form-input' v-model="genreId" @change="searchById">
        <option value="" disabled selected >Genre</option>
        <option v-for="genreItem in genres" :key="genreItem.id" :value="genreItem.id" >{{ genreItem.name }}</option>
    </select>
</template>

<script>
export default {
    props: { genres: { type: Array }, },
    data() { return {genreId: null} },
    methods: { 
        searchById () {
            const genre = this.genres.filter((genre) => genre.id == this.genreId)
            this.$emit('searchByGenre', genre);
        },
    }
}
</script>

<style lang="scss" scoped>
    .form-input{
        border: 1px solid white !important;
        background-color: #474343;
        border-radius: 6px;
        color:white

    }
    .form-input:focus {
        outline:none !important ;
    }

    .genres {
        margin-right: 15px;
    }
</style>