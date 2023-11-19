import Card1 from '../src/assets/images/nft_monkey/monkey_punk.jpg';
import Card2 from '../src/assets/images/nft_monkey/monkey_modern.jpg';
import Card3 from '../src/assets/images/nft_monkey/monkey_adidas.png';
import Card4 from '../src/assets/images/nft_monkey/monkey_ceasar.jpg';
import Card5 from '../src/assets/images/nft_monkey/lizard_skater.png';
import Card6 from '../src/assets/images/nft_monkey/lizard_moster.png';
import Card7 from '../src/assets/images/nft_monkey/lizard_joga.png';
import Card8 from '../src/assets/images/nft_monkey/lizard_drakula.png';
import Card9 from '../src/assets/images/nft_monkey/lizard_developer.jpg';
import Card10 from '../src/assets/images/nft_monkey/lizard_rocker.jpg';
import Card11 from '../src/assets/images/nft_monkey/lizard_tattoo.png';
import Card12 from '../src/assets/images/nft_monkey/lizard_MetaSkull.png';
import Card13 from '../src/assets/images/nft_monkey/lizard_bone.png';

export const mockItems = [
    {
        id: 1,
        title: 'NFT punk',
        body: 'These ancient beings have been around since the dawn of time',
        price: 10,
        quantity: 1,
        img: Card1,
    },
    {
        id: 2,
        title: 'NFT modern',
        body: 'These ancient beings have been around since the dawn of time',
        price: 20,
        quantity: 1,
        img: Card2,
    },
    {
        id: 3,
        title: 'NFT Adidas',
        body: 'These ancient beings have been around since the dawn of time',
        price: 15,
        quantity: 1,
        img: Card3,
    },
    {
        id: 4,
        title: 'NFT Ceasar',
        body: 'These ancient beings have been around since the dawn of time',
        price: 90,
        quantity: 1,
        img: Card4,
    },
    {
        id: 5,
        title: 'NFT skater',
        body: 'These ancient beings have been around since the dawn of time',
        price: 9,
        quantity: 1,
        img: Card5,
    },
    {
        id: 6,
        title: 'NFT monster',
        body: 'These ancient beings have been around since the dawn of time',
        price: 19,
        quantity: 1,
        img: Card6,
    },
    {
        id: 7,
        title: 'NFT joga',
        body: 'These ancient beings have been around since the dawn of time',
        price: 60,
        quantity: 1,
        img: Card7,
    },
    {
        id: 8,
        title: 'NFT drakula',
        body: 'These ancient beings have been around since the dawn of time',
        price: 80,
        quantity: 1,
        img: Card8,
    },
    {
        id: 9,
        title: 'NFT developer',
        body: 'These ancient beings have been around since the dawn of time',
        price: 70,
        quantity: 1,
        img: Card9,
    },
    {
        id: 10,
        title: 'NFT rocker',
        body: 'These ancient beings have been around since the dawn of time',
        price: 5,
        quantity: 1,
        img: Card10,
    },
    {
        id: 11,
        title: 'NFT tattoo',
        body: 'These ancient beings have been around since the dawn of time',
        price: 88,
        quantity: 1,
        img: Card11,
    },
    {
        id: 12,
        title: 'NFT MetaSkull',
        body: 'These ancient beings have been around since the dawn of time',
        price: 10,
        quantity: 1,
        img: Card12,
    },
    {
        id: 13,
        title: 'NFT bone',
        body: 'These ancient beings have been around since the dawn of time',
        price: 7,
        quantity: 1,
        img: Card13,
    },
]

export const cardService = {
    getItems() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockItems)
            }, 1500)
        })
    }
}