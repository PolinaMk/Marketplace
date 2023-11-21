import PolinaPhoto from '../assets/images/about_us/polina.jpeg';

const contactMessage = () => {
    const result = window.confirm(`Do you want to contact with Polina?`);
    if (result) {
        alert("Thank you! We'll write to you!")
    } else {
        alert("Okay, but don't forget about us!")
    }
}

export const ContactsPage: React.FC = () => {
    return <div className="about_us" id="about_us">
      <div className="container">
        <div className="about_us__wrapper" id="About">
                <div className="about_us__item">
                    <div className="about_us__photo-wrapper">
                        <img className='about_us__img' src={PolinaPhoto} alt="about_us__photo" />
                    </div>
                    <div className="about_us__content">
                        <div className="about_us__text-content">
                            <p className="about_us__name">Polina Makarenko</p>
                            <p className="about_us__info">Polina is a budding frontend developer. Dreams of finding an internship in a friendly team.</p>
                        </div>
                        <button className="about_us__button card__bottom_btn" onClick={contactMessage}>Contact</button>
                    </div>
            </div>
        </div>
      </div>
    </div>
}