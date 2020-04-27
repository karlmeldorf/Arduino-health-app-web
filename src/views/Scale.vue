<template>
    <div class="centerDiv">
        <h1>BMI Calculator</h1>
        <br>
        <h3>First we need your height: </h3>
        <input v-model="height" v-on:change="calculateBMI()">
        <br>
        <h3>Now step on the scale</h3>
        <br>
        <p>weight: {{weight}}</p>
        <p>BMI: {{BMI}}</p>
    </div>
</template>

<style scoped>
    .centerDiv {
        text-align: center;
        margin-top: 8rem;
    }
</style>

<script>
export default {
    data () {
        return {
            height: 0,
            weight: 80,
            BMI: 0
        }
    },

    methods: {
        // BMI = kg/m2
        calculateBMI () {
            this.BMI = Math.floor(this.weight / Math.pow(this.height / 100, 2)) 
        }
    }
}
</script>