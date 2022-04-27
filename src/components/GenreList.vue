<template>
    <select v-model="genreId" @change="searchById">
        <option value="" selected disabled>Genre</option>
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