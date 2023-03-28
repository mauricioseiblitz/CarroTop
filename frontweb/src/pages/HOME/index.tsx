import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import ButtonIcon from 'components/ButtonIcon';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-card base-card">
                <div className="home-image-container">
                    <MainImage />
                    <h1>O carro perfeito para você </h1>
                    <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                </div>
            </div>
            <div className="button-card">
                <div className="home-button-container">
                    <div>
                        <ButtonIcon />
                    </div>
                    <p>Comece agora a navegar</p>
                </div>
            </div>
        </div>
    );
}

export default Home;