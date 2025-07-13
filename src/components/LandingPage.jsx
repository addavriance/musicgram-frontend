import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Music, Smartphone, Zap, Settings, Play, Users, TrendingUp, CheckCircle } from 'lucide-react'

const BOT_USERNAME = import.meta.env.VITE_BOT_USERNAME || 'spotify_to_tg_bot'

function LandingPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const handleOpenBot = () => {
        window.open(`https://t.me/${BOT_USERNAME}`, '_blank')
    }

    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Мгновенные обновления",
            description: "Трек обновляется каждые 5 секунд в реальном времени"
        },
        {
            icon: <Music className="w-6 h-6" />,
            title: "Красивый прогресс-бар",
            description: "Показывает время воспроизведения с анимацией"
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Обложка альбома",
            description: "Аватар канала автоматически синхронизируется"
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "Автоматическая работа",
            description: "Работает в фоне без вашего участия 24/7"
        }
    ]

    const steps = [
        {
            number: "1",
            title: "Открой бота",
            description: "Нажми на кнопку и запусти бота в Telegram"
        },
        {
            number: "2",
            title: "Подключи Spotify",
            description: "Авторизуйся безопасно через OAuth"
        },
        {
            number: "3",
            title: "Создай канал",
            description: "Следуй простым инструкциям бота"
        },
        {
            number: "4",
            title: "Добавь в профиль",
            description: "Настройки → Профиль → Канал"
        }
    ]

    return (
        <div className="min-h-screen bg-spotify-dark">
            {/* Hero Section */}
            <section className="section-padding">
                <div className="container-center">
                    <div className="text-center">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="inline-flex items-center gap-2 bg-spotify-light-gray px-4 py-2 rounded-full mb-8 border border-gray-700"
                        >
                            <div className="status-online"></div>
                            <span className="text-sm text-gray-300">Сейчас онлайн: 2,847 пользователей</span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            className="text-hero mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            Твоя музыка в{' '}
                            <span className="text-accent">Telegram</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            Покажи что слушаешь прямо в профиле через умный канал с автообновлением
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <button
                                onClick={handleOpenBot}
                                className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
                            >
                                <Play className="w-5 h-5" />
                                Открыть бота
                            </button>

                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Users className="w-4 h-4" />
                                <span>Уже пользуются 15,000+ человек</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding bg-spotify-gray">
                <div className="container-center">
                    <div className="text-center mb-16">
                        <h2 className="text-section mb-4">
                            Почему это круто?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Современные технологии для стильного отображения музыки
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card text-center hover-lift"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-spotify-green/10 rounded-lg mb-4">
                                    <div className="text-spotify-green">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="section-padding">
                <div className="container-center">
                    <div className="text-center mb-16">
                        <h2 className="text-section mb-4">
                            Запуск за 2 минуты
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Простой процесс настройки, который займет меньше времени чем выбор плейлиста
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="flex-center mb-6">
                                    <div className="w-12 h-12 bg-spotify-green rounded-full flex-center text-black font-bold text-lg">
                                        {step.number}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-300">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section className="section-padding bg-spotify-gray">
                <div className="container-center">
                    <div className="text-center mb-16">
                        <h2 className="text-section mb-4">
                            Вот как это выглядит
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Твои друзья увидят твой музыкальный вкус прямо в профиле
                        </p>
                    </div>

                    <div className="max-w-md mx-auto">
                        <div className="bg-spotify-light-gray rounded-2xl p-6 border border-gray-700">
                            {/* Status bar mockup */}
                            <div className="flex justify-between items-center mb-6 text-white text-sm">
                                <span>9:41</span>
                                <div className="flex gap-1">
                                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                                    <div className="w-1 h-2 bg-white rounded-sm"></div>
                                </div>
                            </div>

                            {/* Profile header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-spotify-green rounded-full"></div>
                                <div>
                                    <h3 className="text-white font-semibold">Твое имя</h3>
                                    <p className="text-gray-400 text-sm flex items-center gap-1">
                                        <span className="status-online"></span>
                                        Currently playing music
                                    </p>
                                </div>
                            </div>

                            {/* Channel preview */}
                            <div className="surface-elevated p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex-center text-xl">
                                        🎵
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-medium text-sm">
                                            🎵 Blinding Lights - The Weeknd
                                        </h4>
                                        <div className="mt-2 text-xs text-gray-400 font-mono">
                                            1:23 ━━━●────── -2:17
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <div className="container-center">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Готов стать самым стильным?
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                            Присоединяйся к тысячам пользователей, которые уже показывают свой музыкальный вкус
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                            <button
                                onClick={handleOpenBot}
                                className="btn-primary text-xl px-8 py-4 inline-flex items-center gap-3"
                            >
                                Начать сейчас
                            </button>

                            <div className="flex items-center gap-2 text-gray-400">
                                <TrendingUp className="w-5 h-5" />
                                <span>Бесплатно навсегда</span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-spotify-green">15K+</div>
                                <div className="text-gray-400 text-sm">Пользователей</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-spotify-green">24/7</div>
                                <div className="text-gray-400 text-sm">Работает</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-spotify-green">5сек</div>
                                <div className="text-gray-400 text-sm">Обновления</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage
