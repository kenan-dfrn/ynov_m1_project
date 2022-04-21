<template>
    <div class="navbar">
        <GenreList :genres='genres' @searchByGenre='searchByGenre' />
    </div>
    
</template>

<script>
import GenreList from './GenreList.vue'

export default {
    components : { GenreList },
    props: { genres: { type: Object },
    },
    methods: {
        searchByGenre (genreId) {
            this.$emit('searchByGenre', genreId);
        },
    }
}
</script>
