
const images =
[
    'chihiro007.jpg',
    'chihiro008.jpg',
    'chihiro009.jpg',
    'chihiro011.jpg'
];

let currentIndex = localStorage.getItem('savedBgIndex') ? parseInt(localStorage.getItem('savedBgIndex')): 0;

document.body.style.backgroundImage = `url('${images[currentIndex]}')`;

document.addEventListener('DOMContentLoaded', () => {
    const bgBtn = document.getElementById('bgBtn');

    if (bgBtn) {
        bgBtn.addEventListener('click', function() {
        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        document.body.style.backgroundImage = `url('${images[currentIndex]}')`;

        localStorage.setItem('savedBgIndex', currentIndex);

        });
    }

    const fbBtn = document.getElementById('fbBtn');
    fbBtn.addEventListener('click', function() {
        window.open('https://web.facebook.com/marizza.apis', '_blank');
    })

    const igBtn = document.getElementById('igBtn');
    igBtn.addEventListener('click', function() {
        window.open('https://www.instagram.com/marzaps/', '_blank');
    })

    const ghBtn = document.getElementById('ghBtn');
    ghBtn.addEventListener('click', function() {
        window.open('https://github.com/marzaps', '_blank');
    })

    const lnBtn = document.getElementById('lnBtn');
    lnBtn.addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/marizza-apis-98968941a/', '_blank');
    })
});
