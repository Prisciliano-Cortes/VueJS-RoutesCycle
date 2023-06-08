<template>
    <h1>Pokemon: <span> {{ id }} </span></h1>

    <div v-if="pokemon">
        <img 
            :src="pokemon.sprites.front_default"
            :alt="pokemon.name"
        />
    </div>
</template>

<script>
    export default {
        name: 'PokemonPage',
        data() {
            return {
                //id: null,
                //id: this.$route.params.id
                pokemon: null
            }
        },
        props: {
            id: {
                type: Number,
                required: true
            }
        },
        methods: {
            async getPokemon() {
                try {
                    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then( r => r.json() )
                    this.pokemon = pokemon
                } catch (error) {
                   this.$router.push('/')
                }
            }
        },

        created() {
            // const { id } = this.$route.params
            // this.id = id
            this.getPokemon()
        },

        watch: {
            id() {
                this.getPokemon()
            }
        }
    }
</script>

<style scoped>

</style>