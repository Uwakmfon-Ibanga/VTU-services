const faq = () => {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        const answer = faq.querySelector('.answer'); // Get the answer inside each FAQ
        const icon = faq.querySelector('.material-symbols-outlined'); // Get the arrow icon

        faq.addEventListener('click', () => {
            if (answer) {
                answer.classList.toggle('hidden'); // Toggle visibility
            }

            // Rotate the arrow icon (optional)
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        });
    });
}

faq();
