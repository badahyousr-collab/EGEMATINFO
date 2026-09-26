import os
import logging

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.ext import (
    Application,
    CallbackQueryHandler,
    CommandHandler,
)

TOKEN = os.getenv("BOT_TOKEN")
PORT = int(os.getenv("PORT", "10000"))
EXTERNAL_URL = os.getenv("RENDER_EXTERNAL_URL")

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)


def main_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup([
        [InlineKeyboardButton("📚 ЕГЭ", callback_data="ege")],
    ])


def ege_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup([
        [InlineKeyboardButton("📐 Математика", callback_data="math")],
        [InlineKeyboardButton("⬅️ Назад", callback_data="back_main")],
    ])


def math_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup([
        [InlineKeyboardButton("📘 Профильная математика", callback_data="profile_math")],
        [InlineKeyboardButton("⬅️ Назад", callback_data="back_ege")],
    ])


def profile_math_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup([
        [InlineKeyboardButton("📖 Открыть полный файл", callback_data="open_full_file")],
        [InlineKeyboardButton("🔎 Поиск", callback_data="search_formulas")],
        [InlineKeyboardButton("⬅️ Назад", callback_data="back_math")],
    ])


async def start(update: Update, context) -> None:
    await update.message.reply_text(
        "Привет! 👋\n\nВыбери экзамен:",
        reply_markup=main_menu(),
    )


async def button_handler(update: Update, context) -> None:
    query = update.callback_query
    await query.answer()

    if query.data == "ege":
        await query.edit_message_text("Выбери предмет:", reply_markup=ege_menu())
    elif query.data == "math":
        await query.edit_message_text("Выбери вариант математики:", reply_markup=math_menu())
    elif query.data == "profile_math":
        await query.edit_message_text(
            "📐 Профильная математика\n\nЧто хочешь сделать?",
            reply_markup=profile_math_menu(),
        )
    elif query.data == "open_full_file":
        await query.answer(
            "Файл пока не подключён. Подключим его следующим шагом.",
            show_alert=True,
        )
    elif query.data == "search_formulas":
        await query.answer(
            "Поиск формул пока не подключён. Сделаем его следующим шагом.",
            show_alert=True,
        )
    elif query.data == "back_main":
        await query.edit_message_text("Привет! 👋\n\nВыбери экзамен:", reply_markup=main_menu())
    elif query.data == "back_ege":
        await query.edit_message_text("Выбери предмет:", reply_markup=ege_menu())
    elif query.data == "back_math":
        await query.edit_message_text("Выбери вариант математики:", reply_markup=math_menu())


def build_application() -> Application:
    if not TOKEN:
        raise RuntimeError("Не задан BOT_TOKEN.")

    return (
        Application.builder()
        .token(TOKEN)
        .updater(None)
        .build()
    )


def main() -> None:
    if not EXTERNAL_URL:
        raise RuntimeError("Не задан RENDER_EXTERNAL_URL.")

    application = build_application()
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CallbackQueryHandler(button_handler))

    application.run_webhook(
        listen="0.0.0.0",
        port=PORT,
        url_path="telegram",
        webhook_url=f"{EXTERNAL_URL}/telegram",
        allowed_updates=Update.ALL_TYPES,
    )


if __name__ == "__main__":
    main()
