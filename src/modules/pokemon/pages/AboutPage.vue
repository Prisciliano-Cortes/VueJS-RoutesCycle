<template>
    <h1>About Page</h1>
    <hr />
    <h2> {{ name }} </h2>

    <button @click="onChangeName">
        Change name
    </button>
</template>

<script>
    export default {
        name: 'AboutPage',
        data() {
            return {
                name: 'Prisciliano'
            }
        },
        methods: {
            onChangeName() {
                this.name = 'Prisciliano Cortes'
            }
        },

        //*** Use hooks Lifecycle when HTML is impacted with COMPUTED */
        beforeCreate() {
            //*** Use with you have validations for data */
            console.log("BeforeCreate");
        },
        created() {
            //*** HTTP Petitions */
            console.log("Created");
        },
        beforeMount() {
            console.log("BeforeMount");
        },
        mounted() {
            console.log("Mounted")
        },
        beforeUpdate() {
            console.log("BeforeUpdate");
        },
        updated() {
            console.log("Updated");
        },
        activated() {
            console.log("Activated");
        },
        deactivated() {
            console.log("Deactivated");
        },
        beforeUnmount() {
            console.log("BeforeUnMount");
        },
        unmounted() {
            //*** Clean and remove data */
            console.log("UnMounted");
        },
        errorCaptured() {
            console.log("ErrorCaptured");
        },
        renderTracked() {
            console.log("RenderTracked");
        },
        renderTriggered() {
            console.log("RenderTriggered");
        }
    }   
</script>

<style scoped>

</style>