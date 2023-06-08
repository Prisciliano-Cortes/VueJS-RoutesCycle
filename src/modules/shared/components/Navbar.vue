<template>  
    <div>
        <CustomLink 
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue';

    export default {
        name: 'Navbar',
        data() {
            return {
                links: [
                    { to: 'pokemon-home', name: 'Pokemon' },
                    { to: 'pokemon-id', name: 'PokemonID', id: 151 },
                    { to: 'pokemon-about', name: 'About' },

                    { to: 'dbz-characters', name: 'Warrior' },
                    { to: 'dbz-about', name: 'DBZ-About' },

                    { to: 'https://google.com', name: 'Google' },
                ]
            }
        },
        components: {
            CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
        }
    }
</script>

<style scoped>
    div {
        padding: 0 30px;
    }
    
    div a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }

    .router-link-exact-active {
        color: #42b983;
    }
</style>