<template>
    <div class="w-100 sticky-top navbar">
        <div class="navbar-container container w-100">
            <div class="row justify-content-between w-100">
                <div class="col-lg-9 w-100">
                    <nav class="d-flex w-100">
                        <h1 class='logo'>MOVIEFINDER<span style='color:#ff0000'>Z<span style='color:#d10404'>Z</span></span><span style='color:#b60000'>Z</span></h1>
                        <div class='w-50 navbar-items d-flex justify-content-start align-items-center'>
                            <label class="label-navbar ">Genre :</label>
                            <GenreList :genres='genres' @searchByGenre='searchByGenre' />
                            <label class="label-navbar">Rechercher :</label>
                            <input class='form-input' type="text" placeholder="Rechercher un film" />
                        </div>
                    </nav>
                </div>
            </div>
        </div> 
    </div>
  
</template>

<script>
import GenreList from './GenreList.vue'

export default {
    components : { GenreList },
    props: { genres: { type: Object },
    },
    methods: {
        searchByGenre (genre) {
            this.$emit('searchByGenre', genre);
        },
    }
}
</script>

<style lang="scss" scoped>
    .navbar {
        background-color: #272829 !important;
    
    }
    .navbar-container{
        padding-left:0% !important;
    }
    .logo{
        margin-top: 8px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .label-navbar{
        margin-right: 8px;
        align-self: center;
        font-size: 20px;
    }
    .form-input{
        background-color: #474343;
        border:1px solid white !important;
        color:white
        
    }
    .form-input::placeholder{
        color:white
    }
    .form-input:focus {
        outline:none !important ;
    }

    .navbar-items {
        margin-left: 30px;
    }
    #logo-end{
        color: #b60000;
    }
</style>