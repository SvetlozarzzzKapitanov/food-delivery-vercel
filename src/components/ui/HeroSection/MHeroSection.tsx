import './MHeroSection.css';
import RadialMenu from "./RadialMenu.tsx";
import bgImage from '/src/assets/MainPage.jpg';

const MHeroSection: React.FC = () => {
    return (
        <section
            className="hero-modern"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="hero-content">
                <div className="hero-text-box">
                    <h1>Food delivery made fun</h1>
                    <p>Find restaurants, groceries, and more in your city.</p>
                </div>
                <div className="hero-search">
                    <input type="text" placeholder="Enter your city or address..." />
                    <button className="location-button">📍 Use my location</button>
                </div>
            </div>

            <div className="radial-wrapper">
                <RadialMenu>
                    <div className="radial-bubble">
                        <div className="bubble-icon">🏠</div>
                        <div className="bubble-label">Профил</div>
                    </div>
                    <div className="radial-bubble">
                        <div className="bubble-icon">📋</div>
                        <div className="bubble-label">Поръчки</div>
                    </div>
                    <div className="radial-bubble">
                        <div className="bubble-icon">🍽️</div>
                        <div className="bubble-label">Ресторанти</div>
                    </div>
                    <div className="radial-bubble">
                        <div className="bubble-icon">ℹ️</div>
                        <div className="bubble-label">За Нас</div>
                    </div>
                    <div className="radial-bubble">
                        <div className="bubble-icon">📞</div>
                        <div className="bubble-label">Контакти</div>
                    </div>
                </RadialMenu>
            </div>
        </section>
    );
};

export default MHeroSection;
