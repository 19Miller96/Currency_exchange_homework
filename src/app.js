import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            currencies: [],
            selectedCurrency: null,
            favouriteCurrencies: []
        },
        computed: {
            
        },
        mounted(){
            this.getCurrency()
        },
        methods: {
            getCurrency: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(res => res.json())
                .then(currency => this.currency = currency)
            },
            addToFavourites: function(){
                this.favouriteCurrencies.push(this.selectedCurrency)
            },
        }
    })
})