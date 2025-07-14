import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AuthCallback from './components/AuthCallback'
import ErrorPage from './components/ErrorPage'
import './styles/main.css'

function App() {
    return (
        <Router basename="/musicgram-frontend">
            <div className="app">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/auth/callback" element={<AuthCallback />} />
                    <Route
                        path="/error"
                        element={
                            <ErrorPage
                                title="Что-то пошло не так 😔"
                                message="Произошла ошибка при загрузке страницы"
                            />
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <ErrorPage
                                title="Страница не найдена 🔍"
                                message="Кажется, ты попал не туда. Но это не страшно!"
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
