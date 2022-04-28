<template>
    <select class='form-input' v-model="genreId" @change="searchById">
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

<style lang="scss" scoped>
    .form-input {
    background-color: #474343;
    border: 1px solid white !important;
    color: white;
    border-radius: 6px;
    margin-right: 15px;
    }
    .form-input::placeholder {
    color: white;
    }
    .form-input:focus {
    outline: none !important ;
    }
</style>