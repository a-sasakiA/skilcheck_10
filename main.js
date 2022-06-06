const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgName = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg",
]

/* Looping through images */
const setDisplayImg = (e)=>{
    const path = e.srcElement.attributes.src.value;
    displayedImage.setAttribute('src', path);

}

imgName.forEach((element, index) => {
    console.log(element);
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${element}`);

    newImage.addEventListener('click', setDisplayImg);
    thumbBar.appendChild(newImage);
});


/* Wiring up the Darken/Lighten button */
const switchOverlayColor = (e)=>{
    const overlayButton = btn.getAttribute('class');
    if(overlayButton.indexOf('dark') >= 0) {        
        btn.setAttribute('class', 'light');
        btn.innerText = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else if(overlayButton.indexOf('light') >= 0) {        
        btn.setAttribute('class', 'dark');
        btn.innerText = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

btn.addEventListener('click', switchOverlayColor);