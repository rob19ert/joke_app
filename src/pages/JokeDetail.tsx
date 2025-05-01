import './JokeDetail.css';
import React from 'react';
import {FC} from 'react';


export const JokeDetail: FC = () => {
    return (
        <>
            <header>
                <div className="container text-center">
                    <div className="row text-center col-12">
                        <h1>Анекдот, анекдот, анекдотина</h1>
                    </div>
                    <div className="row text-center text-black">
                        <a href="/home" className="col">темы</a>
                        <a href="#search" className="col">поиск</a>
                        <a href="#footer" className="col">авторы</a>
                        <a href="#footer" className="col">магазин</a>
                    </div>
                    <div className="row text-center">
                        <h2>Анекдоты про ментов</h2>
                    </div>
                    <div className="row text-center">
                        <form>
                            <input type="search" id='search' className="search" placeholder='Введите' />
                            <input type="submit" className="submit" value={"Найти"} />
                        </form>
                    </div>
                </div>

            </header>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p className='anecdot' >Выходит утром гаишник на дорогу, голова после вчерашнего раскалывается. Смотрит - джип несется. Ну он остановил его с целью сбора средств на опохмел. Смотрит, а там бомж сидит. Документы проверил - правда, бомжа машина. Ну мент его спрашивает:<br/>
                                - Ты же бомж. Ты где такую крутую тачку взял? <br/>
                                - А мне пьяные новые русские предложили, если я их рассмешу - джип мой. Ну я их и рассмешил. <br />
                                - А как?<br />
                                - Да я одному лысому на голову насрал, у него сразу волосы выросли, вот умора была. Мент шапку снимает, там лысина. <br />
                                Он и говорит: <br /> - А ты мне так насрать можешь? <br />
                                - Могу. <br />
                                Бомж срет менту на лысину, a из кустов раздается хохот и крик: <br />
                                 - Не, ну ваще, да я ему еще и хату подарю. 
                                 </p>
                            <div className="row">
                                <div className="col-2">
                                    <img src="../like.svg" alt="like" className="like text-left" />
                                </div>
                                <div className="col-10 text-left">
                                    <p className='author'>Автор: Слава Пупкин</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <p className='anecdot'>Выходит утром гаишник на дорогу, голова после вчерашнего раскалывается. Смотрит - джип несется. Ну он остановил его с целью сбора средств на опохмел. Смотрит, а там бомж сидит. Документы проверил - правда, бомжа машина. Ну мент его спрашивает: - Ты же бомж. Ты где такую крутую тачку взял? - А мне пьяные новые русские предложили, если я их рассмешу - джип мой. Ну я их и рассмешил. - А как? - Да я одному лысому на голову насрал, у него сразу волосы выросли, вот умора была. Мент шапку снимает, там лысина. Он и говорит: - А ты мне так насрать можешь? - Могу. Бомж срет менту на лысину, a из кустов раздается хохот и крик: - Не, ну ваще, да я ему еще и хату подарю.</p>
                            <div className="row">
                                <div className="col-2">
                                    <img src="../like.svg" alt="like" className="like text-left" />
                                </div>
                                <div className="col-2 text-left">
                                    <p className='author'>Автор: Слава Пупкин</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <p className='anecdot'>Гаишник останавливает автомобиль.  Опускается окно, водитель заискивающе улыбаясь:  "Здравия желаю, товарищ капитан! Вот пожалуйста права, техпаспорт,  доверенность, страховочка само собой, все как положено, как надо..."  С заднего сиденья детский голос:  "Папа, а где козлы?"</p>
                            <div className="row">
                                <div className="col-2">
                                
                                </div>
                                <div className="col-2 text-left">
                                    <p className='author'>Автор: Слава Пупкин</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id='footer'>
                        <img src="../ЗАСТАВКА.jpg" className="d-block mx-auto" alt="ЗАСТАВКА" />
                    
            </footer>
        </>
    )

}