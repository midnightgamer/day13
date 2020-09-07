import React, {useEffect, Component} from 'react';
import './App.scss';
import {ReactComponent as BellIcon} from "./assets/notification.svg";
import {ReactComponent as HeartIcon} from "./assets/heart.svg";
import {ReactComponent as CartIcon} from "./assets/shopping-cart.svg";
import {ReactComponent as DropDownIcon} from "./assets/down-arrow.svg";
import user from './assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg'
import ReactFullpage from "@fullpage/react-fullpage";
import chair1 from './assets/chair1.png'
import chair2 from './assets/chair2.png'
import chair3 from './assets/chair3.png'
import chair4 from './assets/chair4.png'
import chair1Inner from './assets/chair1-inner.png'
import chair2Inner from './assets/chair2-inner.png'
import chair3Inner from './assets/chair3-inner.png'
import chair4Inner from './assets/chair4-inner.jpg'
import {TweenLite, Power3, gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


class App extends Component {
    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
        document.querySelector('.list').children[origin.index].classList.remove('active');

    }

    componentDidMount() {

        gsap.registerPlugin(ScrollTrigger)
        TweenLite.to('.section', {
            visibility: 'visible'})
        TweenLite.to('.info h2', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: Power3.easeIn,
            stagger: 0.2

        })
        TweenLite.to('.type', {opacity: 1, y: 0, duration: 0.8, ease: Power3.easeIn})
        TweenLite.to('.color-strip', {opacity: 1, y: 0, duration: 0.8, ease: Power3.easeIn})
        TweenLite.to('.input-group', {opacity: 1, y: 0, duration: 0.8, ease: Power3.easeIn, delay: 0.6})
        TweenLite.to('.video', {opacity: 1, y: 0, duration: 0.8, ease: Power3.easeIn})
        TweenLite.from('.img img', {y: 200, scale: 0.8, rotate: -45, duration: 0.8, ease: Power3.easeIn})
    }

    afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
        document.querySelector('.list').children[destination.index].classList.add('active');
    }

    render() {
        return (
            <>
                <header>
                    <div className="container">
                        <div className="header-inner">
                            <div className="header-left">
                                <div className="hamburger">
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                                <div className="logo">
                                    <h2>
                                        MUTTO
                                    </h2>
                                </div>
                            </div>
                            <div className="header-right">
                                <ul className={'nav-links'}>
                                    <li>
                                        <a href="/">
                                            <BellIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <HeartIcon/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <CartIcon/>
                                        </a>
                                    </li>
                                    <li className={'user'}>
                                        <a href="/">
                                            <img src={user} alt=""/>
                                            <DropDownIcon/>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={'pagination'}>
                    <ul className={'list'}>
                        <li><span className="dot">.</span> <span className="number">01</span></li>
                        <li><span className="dot">.</span> <span className="number">02</span></li>
                        <li><span className="dot">.</span> <span className="number">03</span></li>
                        <li><span className="dot">.</span> <span className="number">04</span></li>
                    </ul>
                </div>
                <ReactFullpage
                    scrollOverflow={true}
                    onLeave={this.onLeave.bind(this)}
                    afterLoad={this.afterLoad.bind(this)}
                    render={({state, fullpageApi}) => {
                        return (
                            <div id="fullpage-wrapper">
                                <section className={'section'}>
                                    <div className="section-inner">
                                        <div className="info">
                                            <div className="info-inner">
                                                <h2>
                                                    <span>Cover Side</span>
                                                    <span>Chair</span>
                                                </h2>
                                                <span className={'type'}>
                                                  /Thomas Bentzen
                                              </span>
                                                <div className="color-strip">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div className="input-group">
                                                    <input type="text" placeholder={'Size/Variant'}/>
                                                    <div className="btn">Find a Store</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img">
                                            <img src={chair1} alt=""/>
                                        </div>
                                        <div className="video">
                                            <span>01/04</span>
                                            <img src={chair1Inner} alt=""/>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                                asperiores blanditiis consequuntur.</p>
                                        </div>
                                    </div>
                                </section>
                                <section className={'section'}>
                                    <div className="section-inner">
                                        <div className="info">
                                            <div className="info-inner">
                                                <h2>
                                                    <span>Arm Side</span>
                                                    <span>Chair</span>
                                                </h2>
                                                <span className={'type'}>
                                                  /Thomas Bentzen
                                              </span>
                                                <div className="color-strip">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div className="input-group">
                                                    <input type="text" placeholder={'Size/Variant'}/>
                                                    <div className="btn">Find a Store</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img">
                                            <img src={chair2} alt=""/>
                                        </div>
                                        <div className="video">
                                            <span>01/04</span>
                                            <img src={chair2Inner} alt=""/>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                                asperiores blanditiis consequuntur.</p>
                                        </div>
                                    </div>
                                </section>
                                <section className={'section'}>
                                    <div className="section-inner">
                                        <div className="info">
                                            <div className="info-inner">
                                                <h2>
                                                    <span>Cover Side</span>
                                                    <span>Chair</span>
                                                </h2>
                                                <span className={'type'}>
                                                  /Thomas Bentzen
                                              </span>
                                                <div className="color-strip">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div className="input-group">
                                                    <input type="text" placeholder={'Size/Variant'}/>
                                                    <div className="btn">Find a Store</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img">
                                            <img src={chair3} alt=""/>
                                        </div>
                                        <div className="video">
                                            <span>01/04</span>
                                            <img src={chair3Inner} alt=""/>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                                asperiores blanditiis consequuntur.</p>
                                        </div>
                                    </div>
                                </section>
                                <section className={'section'}>
                                    <div className="section-inner">
                                        <div className="info">
                                            <div className="info-inner">
                                                <h2>
                                                    <span>Cover Side</span>
                                                    <span>Chair</span>
                                                </h2>
                                                <span className={'type'}>
                                                  /Thomas Bentzen
                                              </span>
                                                <div className="color-strip">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <div className="input-group">
                                                    <input type="text" placeholder={'Size/Variant'}/>
                                                    <div className="btn">Find a Store</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img">
                                            <img src={chair4} alt=""/>
                                        </div>
                                        <div className="video">
                                            <span>01/04</span>
                                            <img src={chair4Inner} alt=""/>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                                asperiores blanditiis consequuntur.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        );
                    }}
                />
            </>
        );
    }
}

export default App;
