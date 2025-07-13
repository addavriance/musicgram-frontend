import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, RotateCcw, MessageCircle } from 'lucide-react'

function ErrorPage({
                       title = "Упс! Что-то пошло не так",
                       message = "Страница не найдена или произошла ошибка",
                       showHomeButton = true
                   }) {
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/')
    }

    const handleGoBack = () => {
        window.history.back()
    }

    const handleRefresh = () => {
        window.location.reload()
    }

    return (
        <div className="min-h-screen bg-spotify-dark flex-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="card max-w-lg w-full text-center"
            >
                {/* Error Icon/Number */}
                <div className="mb-8">
                    <div className="text-6xl mb-4">🤔</div>
                    <div className="text-5xl font-black text-gray-600">404</div>
                </div>

                <h1 className="text-3xl font-bold text-white mb-4">
                    {title}
                </h1>

                <p className="text-lg text-gray-300 mb-8">
                    {message}
                </p>

                <div className="surface-elevated p-6 mb-8 text-left">
                    <h3 className="text-lg font-semibold text-white mb-4 text-center">
                        🛠️ Что можно сделать:
                    </h3>
                    <div className="space-y-2 text-gray-300 text-sm">
                        <div className="flex items-start gap-2">
                            <span className="text-gray-500">•</span>
                            <span>Проверь правильность ссылки</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-gray-500">•</span>
                            <span>Попробуй обновить страницу</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-gray-500">•</span>
                            <span>Вернись на главную страницу</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-gray-500">•</span>
                            <span>Если проблема повторяется - свяжись с поддержкой</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                    {showHomeButton && (
                        <button
                            onClick={handleGoHome}
                            className="btn-primary inline-flex items-center justify-center gap-2"
                        >
                            <Home className="w-4 h-4" />
                            <span className="hidden sm:inline">Главная</span>
                        </button>
                    )}

                    <button
                        onClick={handleGoBack}
                        className="btn-secondary inline-flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Назад</span>
                    </button>

                    <button
                        onClick={handleRefresh}
                        className="btn-secondary inline-flex items-center justify-center gap-2"
                    >
                        <RotateCcw className="w-4 h-4" />
                        <span className="hidden sm:inline">Обновить</span>
                    </button>
                </div>

                <div className="surface-elevated p-4">
                    <div className="flex items-center justify-center gap-2 text-spotify-green mb-2">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-semibold">Нужна помощь?</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                        Открой бота в Telegram и используй команду /help для получения поддержки
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default ErrorPage
