# Субагенты проекта

## Frontend Fullstack Developer

**Файлы конфигурации:**
- `agents/frontend-developer.json` - основная конфигурация
- `agents/frontend-developer-prompt.md` - системный промпт

**Область ответственности:**
- Frontend разработка (JavaScript, SCSS)
- Верстка из Figma макетов
- Создание UI компонентов
- Интеграция с Bitrix шаблонами

## Как использовать

### В Claude Code:
```bash
# Создать субагента
/agents

# Использовать субагента
> @frontend-developer создай модальное окно для расчета доставки
```

### В Cursor IDE:
```
# Использовать как контекст для промпта
@frontend-developer [ваша задача]
```

## Команды для субагента

- `@frontend-developer верстай из Figma [ссылка]`
- `@frontend-developer создай компонент [описание]`
- `@frontend-developer добавь функционал [описание]`
- `@frontend-developer оптимизируй [файл/компонент]`