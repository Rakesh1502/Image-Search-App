


document.getElementById('search-button').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value;
    fetchImages(searchTerm);
});


function fetchImages(query) {
    const accessKey = "9f32vb_T4y8F4BcjoslbkmQoTYScpY2IESuN326Po3M";
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '<p>Loading ....</p>';

    fetch(url).then(response => response.json()).then(data=> {
        imageContainer.innerHTML = '';

        if(data.results.length ===0){
            imageContainer.innerHTML = '<p>No Images found</p>';
            return;
        }

        data.results.forEach( image  => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.small;
            imgElement.alt = image.alt_description;
            imageContainer.appendChild(imgElement);
            
        });
    })
    .catch(error => {
        imageContainer.innerHTML = '<p>Error fetching images</p>';
        console.error('Error fetching images:', error);
    })
}