<template>
    <select v-model="genreId" @change="searchById">
        <option value="-1" >Popular</option>
        <option v-for="genreItem in genres" :key="genreItem.id" :value="genreItem.id" >{{ genreItem.name }}</option>
    </select>
</template>

<script>
export default {
    props: { genres: { type: Array }, },
    data() { return {genreId: -1} },
    methods: { 
        searchById () {
            this.$emit('searchByGenre', this.genreId);
        },
    }
}
</script>