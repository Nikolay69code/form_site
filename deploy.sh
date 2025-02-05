#!/bin/bash

# Обновление репозитория
cd /var/www/devox-studio.ru
git pull origin main

# Установка зависимостей
npm install

# Перезапуск приложения
pm2 restart devox-studio