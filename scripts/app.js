//select movie poster original image
let moviePoster = document.querySelector('.movie-poster-container');
//select model window layer
let modal = document.querySelector('#myModal');
//select close button
let closebtn = document.querySelector('.closebtn');

moviePoster.addEventListener('click', ()=>{
    modal.style.display = 'block';
    modalImage.src = moviePoster.src;
});

closebtn.addEventListener('click', ()=>{
    modal.style.display = 'none';
});

window.addEventListener('click', (event)=>{
    if(event.target === modal) {
        modal.style.display = 'none'
    }
});