const galleries = {
    sliderGallery1: [
        'https://via.placeholder.com/400x300',
        'https://via.placeholder.com/400x300/ff0000',
        'https://via.placeholder.com/400x300/ff0000',
        'https://via.placeholder.com/400x300/ff0000',
        'https://via.placeholder.com/400x300/ff0000',
        'https://via.placeholder.com/400x300/00ff00'
    ]
};

function showSliderGallery(galleryId) {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById(galleryId).style.display = 'block';
    updateImage(galleryId);
}

function updateImage(galleryId) {
    const slider = document.getElementById('imageSlider');
    const img = document.getElementById('sliderImage');
    img.src = galleries[galleryId][slider.value];
}

function closeGallery() {
    document.getElementById('sliderGallery1').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}
