import './HomePage.css'
import {FC} from "react"
import React from 'react';

export const HomePage: FC = () => {
    return (
        <><header>
            <div className='container text-center'>
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-black" >Анекдот, анекдот, анекдотина</h1>
                        
                    </div>
                </div>
                <div className="row text-black text-center">
                    <a href="#section" className="col">темы</a>
                    <a href="#search" className="col">поиск</a>
                    <a href="#footer" className="col">авторы</a>
                    <a href="#footer" className="col">магазин</a>
                </div>
                <div className="row text-left text-black">
                    <form>
                        <input type="search" className="search" id='search' placeholder='Введите' />
                        <input type="submit" className="submit" value={"Найти"}/>
                    </form>
                </div>
            </div>
        </header>
        <section className="about" id='section'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card_top">
                                <img src="../ДЕД МОРОЗ1.jpg" 
                                alt="ded_moroz" />
                            </div>
                            <div className="card_down">
                                <p className="title text-center">Дед Мороз</p>
                                <p className="count text-center">Анекдоты: </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">    
                        <div className="card">
                            <div className="card_top">
                                <img src="../РЫБАК.jpg" 
                                alt="ded_moroz" />
                            </div>
                            <div className="card_down">
                                <p className="title text-center">Рыбалка</p>
                                <p className="count text-center">Анекдоты: </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">    
                        <div className="card">
                            <div className="card_top">
                                <img src="../АЛКАШ.jpg" 
                                alt="ded_moroz" />
                            </div>
                            <div className="card_down">
                                <p className="title text-center">Алкаш</p>
                                <p className="count text-center">Анекдоты: </p>
                            </div>
                        </div>
                    </div>    
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card_top">
                                <img src="../ДОК.jpg" 
                                alt="ded_moroz" />
                            </div>
                            <div className="card_down">
                                <p className="title text-center">Врачи</p>
                                <p className="count text-center">Анекдоты: </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card_top">
                                <img src="../ЗЭК1.jpg" 
                                alt="ded_moroz" />
                            </div>
                            <div className="card_down">
                                <p className="title text-center">Тюрьма</p>
                                <p className="count text-center">Анекдоты: </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card_top">
                                <img src="../МЕНТ1.jpg" 
                                alt="ded_moroz" />
                            </div>
                            <div className="card_down">
                                <p className="title text-center">Полицейские</p>
                                <p className="count text-center">Анекдоты: </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card_top">
                                <img src="../НЕАНДЕРТАЛЕЦ.jpg" 
                                alt="ded_moroz" />
                            </div>
                            <div className="card_down">
                                <p className="title text-center">Первобытные</p>
                                <p className="count text-center">Анекдоты: </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card_top">
                                <img src="../ПРОСТИТУТКА.jpg" 
                                alt="ded_moroz" />
                            </div>
                            <div className="card_down">
                                <p className="title text-center">Проститутки</p>
                                <p className="count text-center">Анекдоты: </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card_top">
                                <img src="../АРМИЯ.jpg" 
                                alt="ded_moroz" />
                            </div>
                            <div className="card_down">
                                <p className="title text-center">Армия</p>
                                <p className="count text-center">Анекдоты: </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card_top">
                                <img src="../УЧИТЕЛЬНИЦА.jpg" 
                                alt="ded_moroz" />
                            </div>
                            <div className="card_down">
                                <p className="title text-center">Учительница</p>
                                <p className="count text-center">Анекдоты: </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div>
                <footer id='footer'>
                        <img src="../ЗАСТАВКА.jpg" className="d-block mx-auto" alt="ЗАСТАВКА" />
                    
                </footer>
        </div></>
          
        
    )

}