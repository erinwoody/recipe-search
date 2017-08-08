var recipeSearch = document.querySelector(".bodyContainer");

const url = 'http://www.recipepuppy.com/api/';

fetch(url).then(function (response) {
    response.json().then(function (data) {
        console.log(data);


        recipeSearch.innerHTML +=
            `    
    <div>
        <input type="text" placeholder="Search">
    </div>

    <hr>

    <div class="images">
        <img src="http://placekitten.com/260/260" alt="" class="thumb">
        <img src="http://placekitten.com/260/260" alt="" class="thumb">
        <img src="http://placekitten.com/260/260" alt="" class="thumb">
        <img src="http://placekitten.com/260/260" alt="" class="thumb">
        <img src="http://placekitten.com/260/260" alt="" class="thumb">
        <img src="http://placekitten.com/260/260" alt="" class="thumb">
        <img src="http://placekitten.com/260/260" alt="" class="thumb">
        <img src="http://placekitten.com/260/260" alt="" class="thumb">
    </div>
        `
    });
});