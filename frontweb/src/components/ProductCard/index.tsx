import './styles.css';

import CarImg from 'assets/images/car-card.png';
import ButtonCatalog from 'components/ButtonCatalog';

const CarCard = () => {
    return (
        <div className="base-card car-card">
            <div className="card-top-container">
                <img src={CarImg} alt="Imagem do carro" />
            </div>
            <div className="card-bottom-container">
                <h6>Audi Supra TT</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                <ButtonCatalog />
            </div>
        </div>
    );
}

export default CarCard;