
var app = new Vue({
    el: "#app",
    name: "App",
    data: {
        title: "Doge of the Day!"
    }
});

var photo = new Vue
({
	el: "#photo",
    data: 
    {
        image: {}
    },
    methods: 
    {
        getDoge: function() 
        {
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(json => this.image = {img: json.message})
        }
    },
    template: "<div><img :src='image.img' alt='doge' /><div class='controls'><button class='btn btn-primary' v-on:click='getDoge'>Next Doge</button></div></div>",
    mounted()
    {
  	    this.getDoge();
    },
});
