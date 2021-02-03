const video = document.querySelector('.video');
const previews = document.querySelectorAll('.Gallery img');
const full = document.querySelector('.amv');
const videoname = document.querySelector('.caption');

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        video.classList.add("open");
        full.classList.add("open")
        const originalsrc = preview.getAttribute('data-original')
           full.src = `${originalsrc}`;
         const altText = preview.alt;
         videoname.textContent = altText;
    });
});

video.addEventListener('click', (e) => {
    if(e.target.classList.contains('video')){
        video.classList.remove('open');
        full.classList.remove("open")
    };
});