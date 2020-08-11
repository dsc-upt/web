import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Events/Banner';
import Content from '../components/Events/Content';
import { getAllConfig, getAllEvents } from '../service/service';

export function Events(props) {
    // static async getInitialProps() {
    //     const res = await getAllEvents();
    //     console.log((await getAllConfig()).data);
    // return { events: res.data };
    // }

    // render() {
    return (
        <>
            <Navbar />
            <Banner />
            <Content events={getAllEvents().then()} />
            <Footer />
        </>
    );
    // }
}

export default Events;
