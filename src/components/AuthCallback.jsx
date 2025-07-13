import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, ExternalLink, Home, Wrench } from 'lucide-react'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

function AuthCallback() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [status, setStatus] = useState('loading') // loading, success, error
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        handleAuthCallback()
    }, [])

    const handleAuthCallback = async () => {
        const code = searchParams.get('code')
        const state = searchParams.get('state')
        const error = searchParams.get('error')

        if (error) {
            setStatus('error')
            setError(`Ошибка авторизации: ${error}`)
            return
        }

        if (!code || !state) {
            setStatus('error')
            setError('Отсутствуют параметры авторизации')
            return
        }

        try {
            const response = await fetch(`${API_BASE_URL}/auth/callback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: code,
                    state: state
                })
            })

            if (response.ok) {
                const result = await response.json()
                setStatus('success')
                setMessage('Spotify успешно подключен!')

                setTimeout(() => {
                    window.close()
                }, 5000)
            } else {
                const errorData = await response.json()
                setStatus('error')
                setError(errorData.detail || 'Ошибка обработки авторизации')
            }
        } catch (err) {
            setStatus('error')
            setError('Ошибка соединения с сервером')
            console.error('Auth callback error:', err)
        }
    }

    const handleHome = () => {
        navigate('/')
    }

    const handleCloseWindow = () => {
        window.close()
    }

    if (status === 'loading') {
        return (
            <div className="min-h-screen bg-spotify-dark flex-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="card-glass max-w-md w-full text-center"
                >
                    <div className="spinner mx-auto mb-6"></div>

                    <h2 className="text-2xl font-bold text-white mb-3">
                        Обрабатываем авторизацию...
                    </h2>
                    <p className="text-gray-300">
                        Подключаем твой Spotify аккаунт
                    </p>
                </motion.div>
            </div>
        )
    }

    if (status === 'success') {
        return (
            <div className="min-h-screen bg-spotify-dark flex-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="card max-w-lg w-full text-center"
                >
                    <div className="w-16 h-16 bg-spotify-green rounded-full flex-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-white" />
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-4">
                        Отлично! 🎉
                    </h1>

                    <p className="text-lg text-gray-300 mb-8">
                        {message}
                    </p>

                    <div className="surface-elevated p-6 mb-8 text-left">
                        <h3 className="text-lg font-semibold text-white mb-4 text-center">
                            🚀 Что дальше:
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <span className="w-6 h-6 bg-spotify-green rounded-full flex-center text-xs font-bold text-black">1</span>
                                <span>Вернись в Telegram бота</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <span className="w-6 h-6 bg-spotify-green rounded-full flex-center text-xs font-bold text-black">2</span>
                                <span>Создай канал и добавь бота админом</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <span className="w-6 h-6 bg-spotify-green rounded-full flex-center text-xs font-bold text-black">3</span>
                                <span>Используй команду /channel</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <span className="w-6 h-6 bg-spotify-green rounded-full flex-center text-xs font-bold text-black">4</span>
                                <span>Добавь канал в профиль Telegram</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleCloseWindow}
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Закрыть окно
                    </button>

                    <p className="mt-4 text-sm text-gray-400">
                        Окно закроется автоматически через 5 секунд
                    </p>
                </motion.div>
            </div>
        )
    }

    if (status === 'error') {
        return (
            <div className="min-h-screen bg-spotify-dark flex-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="card max-w-lg w-full text-center"
                >
                    <div className="w-16 h-16 bg-red-600 rounded-full flex-center mx-auto mb-6">
                        <XCircle className="w-10 h-10 text-white" />
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-4">
                        Упс! Что-то пошло не так
                    </h1>

                    <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4 mb-6">
                        <p className="text-red-300 font-medium">{error}</p>
                    </div>

                    <div className="surface-elevated p-6 mb-8 text-left">
                        <div className="flex gap-2 items-center justify-center mb-4">
                            <Wrench/>
                            <h3 className="text-lg font-semibold text-white text-center">
                                Возможные причины
                            </h3>
                        </div>
                        <div className="space-y-2 text-gray-300 text-sm">
                            <div className="flex items-start gap-2">
                                <span className="text-gray-500">•</span>
                                <span>Отказ в авторизации Spotify</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-gray-500">•</span>
                                <span>Проблемы с интернет-соединением</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-gray-500">•</span>
                                <span>Временные неполадки сервиса</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-gray-500">•</span>
                                <span>Неправильная настройка приложения</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleHome}
                            className="btn-primary flex-1 inline-flex items-center justify-center gap-2"
                        >
                            <Home className="w-4 h-4" />
                            На главную
                        </button>

                        <button
                            onClick={handleCloseWindow}
                            className="btn-secondary flex-1"
                        >
                            Закрыть
                        </button>
                    </div>
                </motion.div>
            </div>
        )
    }

    return null
}

export default AuthCallback
