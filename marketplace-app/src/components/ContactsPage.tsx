import PolinaPhoto from '../assets/images/about_us/polina.jpeg';
import { useState } from 'react';

const contactMessage = () => {
    const result = window.confirm(`Do you want to contact with Polina?`);
    if (result) {
        alert("Thank you! We'll write to you!")
    } else {
        alert("Okay, but don't forget about us!")
    }
}

const date = new Date();
const hours = date.getHours();
const getTimeOfDay = () => {
    if (hours >= (6) && hours < (12)) {
        return 'morning';
    } else if (hours >= (12) && hours < (18)) {
        return 'afternoon';
    } else if (hours >= (18) && hours < (24)) {
        return 'evening';
    } else if (hours >= (24) && hours < (6)){
        return 'night';
    }
}
const timeOfDay = getTimeOfDay();

export const ContactsPage: React.FC = () => {
    const [time, setTime] = useState('')
    const [greeting, setGreeting] = useState('')

    setTimeout(() => {
        setTime(new Date().toLocaleTimeString());
        setGreeting(`Good ${timeOfDay}!`)
    }, 1000);

    return <div className="about_us" id="about_us">
        <div className="container">
            <p className='greeting__text'>{greeting}</p>
        <div className='time__block'>
            <p className='time__text'>Current time:</p>
            <time className="time">{time}</time>
        </div>
            <div className="about_us__wrapper" id="About">
                <p className='about_us__intro'>Our team so far consists of one enthusiastic member - me. I would be delighted if you would like to bring something new to my NFT Marketplace! The site is for entertainment purposes only :)</p>
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