let button = document.getElementById('frames');
button.addEventListener('click', function() {
    let images = document.getElementsByClassName('wire-Frame');
    for (let i = 0; i < images.length; i++) {
        if(images[i].style.display==='none'){
        images[i].style.display = 'block';
    }else{
        images[i].style.display='none';
    }
}
});