'use client'
import React from "react";
import styles from '../styles/video.css';
import Image from 'next/image';
import YouTube from "react-youtube";

const Video = () => {
    return (
        <div className="video-cont w-100">
            <Image width={500} height={530} className="home-logo" src={"/img/NEWRELEASE.png"} alt=""></Image>
            {/* <video autoPlay loop muted className="video">
                <source src="videos/smoke.mp4" type="video/mp4" />
            </video> */}
            <iframe className="iframe-video" width="1800" height="1000" src="https://www.youtube.com/embed/CTw1VFeYnHM?autoplay=1&loop=1&mute=1&controls=0&playlist=CTw1VFeYnHM&showinfo=0&rel=0&enablejsapi=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>

        </div>
    );
};

export default Video;
