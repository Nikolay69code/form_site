document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('/send-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok) {
            document.getElementById('status').textContent = result.message;
            document.getElementById('contactForm').reset();
        } else {
            document.getElementById('status').textContent = result.error;
        }
    } catch (error) {
        document.getElementById('status').textContent = 'Произошла ошибка. Попробуйте позже.';
    }
});