<template>
    <div class="container">
        <h2>Simple health data table</h2>

        <div class="border border-light rounded p-4">
            <div class="row">
                <div class="col"><label>Sensor: </label></div>
                <div class="col">
                    <input type="radio" id="one" value="spo2" checked v-model="pickedSensor">
                    <label for="one">SPO2</label>
                </div>
                <div class="col">
                    <input type="radio" id="two" value="bp" v-model="pickedSensor">
                    <label for="two">Bloodpressure</label>
                </div>
                <div class="col">
                    <input type="radio" id="three" value="temperature" v-model="pickedSensor">
                    <label for="three">Temperature</label>
                </div>
            </div>

            <div class="row">
                <div class="col"><label>Time: </label></div>
                <div class="col"></div>
                <div class="col">
                    <datetime id="startTime" format="MM/DD/YYYY H:i" v-model="startTime"></datetime>
                </div>
                <div class="col">
                    <datetime id="endTime" format="MM/DD/YYYY H:i" v-model="endTime"></datetime>
                </div>
            </div>
            
            <br>
            <b-button type="button" class="btn btn-primary mx-auto col-md-4" variant="primary" @click="doFilter">Filter</b-button>
        </div>

        <br>
        <label style="float: left;">Total measurements: <b>{{NumberOfResults}}</b></label>
        <br>

        <div v-if="showSpo2">
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">SPO2 (%)</th>
                <th scope="col">Pulse (bpm)</th>
                <th scope="col">Time</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(result, index) in results" v-bind:key="index">
                    <th scope="row">{{(index+1)}}</th>
                    <td>{{result.spo2}}</td>
                    <td>{{result.pulse}}</td>
                    <td>{{formatTime(result.createdAt)}}</td>
                </tr>
            </tbody>
            </table>
        </div>

        <div v-if="showBp">
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Systolic</th>
                <th scope="col">Diastolic</th>
                <th scope="col">Pulse</th>
                <th scope="col">Time</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(result, index) in results" v-bind:key="index">
                    <th scope="row">{{(index+1)}}</th>
                    <td>{{result.systolic}}</td>
                    <td>{{result.diastolic}}</td>
                    <td>{{result.pulse}}</td>
                    <td>{{formatTime(result.createdAt)}}</td>
                </tr>
            </tbody>
            </table>
        </div>

        <div v-if="showTemperature">
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Temperature (°C)</th>
                <th scope="col">Time</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(result, index) in results" v-bind:key="index">
                    <th scope="row">{{(index+1)}}</th>
                    <td>{{result.temperature}}</td>
                    <td>{{formatTime(result.createdAt)}}</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
    .container {
        width: 80%;
    }

    tbody tr:nth-child(odd){
        background-color: #e0e0e0;
    }
</style>

<script>
import Api from '@/Api'
import datetime from 'vuejs-datetimepicker';

export default {

    components: { datetime },

    data () {
        return {
            results: [],
            NumberOfResults: 0,
            pickedSensor: 'spo2',
            showSpo2: true,
            showBp: false,
            showTemperature: false,
            startTime: null,
            endTime: null,
            start: 0,
            error: null
        }
    },

    methods: {
        formatTime (time) {
            let datetime = new Date(time)
            return datetime.toLocaleDateString() + " " + datetime.toLocaleTimeString()
        },

        doFilter () {
            let queryObj = {start: this.start}
            if (this.startTime == null || this.startTime == new Date('1980-01-01T00:00:00')) this.startTime = new Date('1980-01-01T00:00:00')
            if (this.endTime == null) this.endTime = new Date()
            queryObj['from'] = new Date(this.startTime).toUTCString()
            queryObj['to'] = new Date(this.endTime).toUTCString()
            queryObj['sensor'] = this.pickedSensor

            this.$router.push({query: queryObj}).catch(err => {
                this.error = err 
                console.log(this.results)
            })
            
            Api.getFilteredResult(this.$route.query)
                .then(res => {
                    console.log(res)
                    this.results = res.data.results
                    this.NumberOfResults = this.results.length
                    if (res.data.sensor == "bp") {
                        this.showBp = true
                        this.showSpo2 = false
                        this.showTemperature = false
                    } else if (res.data.sensor == "spo2") {
                        this.showBp = false
                        this.showSpo2 = true
                        this.showTemperature = false                      
                    } else {
                        this.showBp = false
                        this.showSpo2 = false
                        this.showTemperature = true 
                    }
                    console.log(this.results)
                })
                .catch(error => console.log(error))
        }
    },

    async created () {
        Api.getFilteredResult(this.$route.query)
            .then(res => {
                console.log(res)
                this.results = res.data.results
                this.NumberOfResults = this.results.length
                if (res.data.sensor == "bp") {
                    this.showBp = true
                    this.showSpo2 = false
                    this.showTemperature = false
                } else if (res.data.sensor == "spo2") {
                    this.showBp = false
                    this.showSpo2 = true
                    this.showTemperature = false                   
                } else if (res.data.sensor == "temperature") {
                    this.showBp = false
                    this.showSpo2 = false
                    this.showTemperature = true 
                }
                console.log(this.results)
            })
            .catch(error => console.log(error))
    }
}
</script>