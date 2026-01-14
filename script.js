// Animasi sederhana saat scroll
window.addEventListener('scroll', function() {
    const produkItems = document.querySelectorAll('.produk-item');
    produkItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
});

// Inisialisasi opacity untuk animasi
document.addEventListener('DOMContentLoaded', function() {
    const produkItems = document.querySelectorAll('.produk-item');
    produkItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s, transform 0.5s';
    });
});


