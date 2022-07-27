import React from 'react'
import { GameItem } from '../../components/header/game-item/game-item'
import './home-page.css'

const GAMES = [
    {
        image: '/image/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 2343,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: '/image/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 2433,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/image/dbd.jpg',
        title: 'Dead by Daylight',
        genres: ['Action, Survival horror, Файтинг'],
        video: 'https://www.youtube.com/watch?v=JGhIXLO3ul8',
        price: 3021,
        id: 3,
        description: 'Dead by Daylight — асимметричная многопользовательская компьютерная игра в жанре survival horror с видом от первого и третьего лица, разработанная канадской студией Behaviour Interactive и впервые выпущенная для Windows в 2016 году.'
    },
    {
        image: '/image/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 789,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: '/image/predator.jpg',
        title: 'Predator: Hunting Grounds',
        video: 'https://www.youtube.com/watch?v=W6OJhuH7PD0',
        genres: ['Тактика', 'Шутер'],
        price: 982,
        id: 5,
        description: 'Сразитесь против Хищника или сами станьте им в этом шутере с ассиметричным мультиплеером. Успейте выполнить миссии в составе команды, пока Хищник не нашел вас. Или станьте Хищником и поймайте свою добычу.'
    },
    {
        image: '/game-covers/assasin.jpg',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 2863,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    
]

    export const HomePage = () => {
    return (
        <div className="home-page">
        {GAMES.map(game =>{
            
           return( 
            <GameItem key={game.id} game={game}/>
           )
        })}
        </div>
    )
}