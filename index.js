// Function to change umbrella color
function changeUmbrellaColor(color) {
    let umbrellaImage = document.getElementById("umbrellaImage");
    umbrellaImage.src = `umbrella_${color}.png`; 
    
    // Update the theme of the customizer
    document.body.style.backgroundColor = color;
}

// Function to handle logo upload
document.getElementById('logoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const logoPreview = document.getElementById('logoPreview');
        logoPreview.src = e.target.result;
        logoPreview.classList.remove('hidden');
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});
