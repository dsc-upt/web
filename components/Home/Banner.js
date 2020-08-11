import React from 'react';
import ModalVideo from 'react-modal-video';

import homeImage from '../../images/home.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

class Banner extends React.Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({ isOpen: true });
    };

    componentDidMount() {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile: true,
            live: true
        }).init();
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-banner marketing-home">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="hero-content">
                                            <h1>
                                                Developer Student Clubs <br />
                                            </h1>
                                            <h1 style={{ fontWeight: 700 }}>UPT</h1>
                                            <p>
                                                Developer Student Clubs are university based community groups for
                                                students interested in Google developer technologies. Students from all
                                                undergraduate or graduate programs with an interest in growing as a
                                                developer are welcome.
                                            </p>

                                            {/*<a href="https://bit.ly/3efh7Ze" className="btn btn-primary">*/}
                                            {/*    Join DSC UPT*/}
                                            {/*</a>*/}

                                            <div className="social-icons-list" style={{ marginTop: '15px' }}>
                                                <ul className="social-list" style={{ paddingLeft: '0px' }}>
                                                    <li>
                                                        <a href="https://www.facebook.com/dsc-upt/">
                                                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                                        </a>
                                                    </li>
                                                    {/*<li>*/}
                                                    {/*    <a href="https://twitter.com/dscvjit">*/}
                                                    {/*        <FontAwesomeIcon icon={['fab', 'twitter']} />*/}
                                                    {/*    </a>*/}
                                                    {/*</li>*/}
                                                    {/*<li>*/}
                                                    {/*    <a href="https://www.instagram.com/dscvjit/">*/}
                                                    {/*        <FontAwesomeIcon icon={['fab', 'instagram']} />*/}
                                                    {/*    </a>*/}
                                                    {/*</li>*/}
                                                    <li>
                                                        <a href="https://github.com/dsc-upt">
                                                            <FontAwesomeIcon icon={['fab', 'github']} />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <div className="marketing-image">
                                            <img
                                                src={homeImage}
                                                className="wow fadeInDown"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img
                                                src={homeImage}
                                                className="wow fadeInLeft"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray shape-1" />
                    <div className="shape1">
                        <img src={require('../../images/shape1.png')} alt="img" />
                    </div>
                    <div className="shape3">
                        <img src={require('../../images/shape3.png')} alt="img" />
                    </div>
                    <div className="shape6">
                        <img src={require('../../images/shape6.png')} alt="img" />
                    </div>
                    <div className="shape8 rotateme">
                        <img src={require('../../images/shape8.svg')} alt="shape" />
                    </div>
                    <div className="shape9">
                        <img src={require('../../images/shape9.svg')} alt="shape" />
                    </div>
                    <div className="shape10">
                        <img src={require('../../images/shape10.svg')} alt="shape" />
                    </div>

                    <div className="bubble-animate">
                        <div className="circle small square1" />
                        <div className="circle small square2" />
                        <div className="circle small square3" />
                        <div className="circle small square5" />
                        <div className="circle medium square1" />
                        <div className="circle medium square3" />
                        <div className="circle medium square4" />
                        <div className="circle medium square5" />
                        <div className="circle large square1" />
                        <div className="circle large square2" />
                        <div className="circle large square4" />
                    </div>
                </div>
                <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="szuchBiLrEM"
                    onClose={() => this.setState({ isOpen: false })}
                />
            </React.Fragment>
        );
    }
}

export default Banner;
