const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Токен Telegram и ID чата
const telegramToken = process.env.TELEGRAM_TOKEN;
const chatId = process.env.CHAT_ID;

// Обработка POST-запроса
app.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;

    // Формируем сообщение для Telegram
    const text = `Новое сообщение:\n\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

    try {
        // Отправляем сообщение в Telegram
        await axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
            chat_id: chatId,
            text: text
        });
        res.status(200).json({ message: 'Сообщение успешно отправлено!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при отправке сообщения.' });
    }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});