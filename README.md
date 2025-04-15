# PROD — Командный этап

Welcome aboard!

В данном репозитории вы найдёте:
- Пример простого приложения на Python для генерации аватаров по никнейму.
- Рабочий пример конфигурации GitLab CI/CD, который поможет вам автоматически деплоить приложение на виртуальные машины.

## О проекте

### Цель
Цель этого проекта — предоставить участникам готовое решение для деплоя приложения с использованием GitLab CI/CD на виртуальные машинах. 

Мы ожидаем, что в первый день вместе с менторами вы настроите пайплайн, который:
- Соберёт и загрузит в Gitlab Registry образ приложения.
- Автоматически задеплоит его на предоставленную виртуальную машину `на 80 порту`.

### Приложение
Приложение написано на Python и генерирует уникальные аватары на основе введённого никнейма.

### Конфигурирование

> Мы добавим данные ENV в ваши командные проекты автоматически.

Для настройки деплоя на вашу виртуальную машину необходимо задать 3 ENV в проекте:
- `$ENV_SSH_USER` - имя пользователя
- `$ENV_SSH_HOST` - адрес вашей виртуальной машины
- `$ENV_PRIVATE_KEY_BASE64` - приватный ключ от пользователя в формате Base64



