// src/components/VideoGallery.js

import React from "react";
import "./videogallary.css"; // Create this CSS file for styling

const videosData = [
    {
        id: 1,
        title: "Best Places in Dolby Vision - 4K HDR 120FPS with Dolby Atmos",
        thumbnail: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKfEhtM1yVJKXYcdlMZ7Opdx8mh687JGglKPS02-Wq3bfyKiyu",
        views: "78K",
        likes: "20K",
        channel: {
            name: "Dolby Vision Demo 4K",
            logo: "https://yt3.googleusercontent.com/awVuVCCoX2i_e1yCdbzeIYT7OTdrrnO9tHV-SP4wQ2HXV-h3JLp_f4CUPwfLuHEGR4lMDQOVRtM=s176-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 2,
        title: "The Last Day of the Cretaceous | Prehistoric Planet tribute",
        thumbnail: "https://i.ytimg.com/vi/PjryN2F6fF0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbEv1UwxiwoEiqjPV8-W90HXqHFg",
        views: "360K",
        likes: "20K",
        channel: {
            name: "Paleo Edits",
            logo: "https://yt3.ggpht.com/rdwzZePF6hdJ_y_J9u3Tqjv2kdKF44LT49_uAen7DZQ8qiysg-lfX2WwFSYkt1JKNcLwTllNOQ=s88-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 3,
        title: "Travel to Aagra to see Tajmahal",
        thumbnail: "https://i.ytimg.com/vi/49HTIoCccDY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB69CCCh0ogDVkeMrbeTV1whz0wPw",
        views: "400K",
        likes: "25K",
        channel: {
            name: "Telugu Traveler",
            logo: "https://yt3.ggpht.com/ytc/APkrFKYCCb_nJ-yv0bzBIWAuD9QPxTYsEIgDCTKt3JMJNA=s88-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 4,
        title: "Filmymoji || Middle Class Madhu || Vakrathunda || Episode 04 || Double Game || MCM",
        thumbnail: "https://i.ytimg.com/vi/zBnooLQBngE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLWgR4PgPI5abMdEyA9yzcK4ZuqQ",
        views: "2.1M",
        likes: "167K",
        channel: {
            name: "Filmymoji",

            logo: "https://yt3.googleusercontent.com/ytc/APkrFKbrRuB2spuPZDEowqyccnHxarRIoe1i_8UXlR_yUg=s176-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 5,
        title: "Hukum Video Song (Telugu) - Jailer | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson",
        thumbnail: "https://i.ytimg.com/vi/fgZ9pJbVA3c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDspPWF86XUH337YgIOH-6dsXOAWQ",
        views: "23M",
        likes: "200K",
        channel: {
            name: "Gemini TV",
            logo: "https://yt3.ggpht.com/ytc/APkrFKa3yJqVa3C5QAd_ZECrQWKDMViPBd_NtcuGc5x_o1c=s88-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 6,
        title: "Salaar Title Song Lyrical Video | Prabhas, Prashanth Neel | Salaar: Part 1 – Ceasefire | Fan Made |",
        thumbnail: "https://i.ytimg.com/vi/7QjFV85RVEE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGKrsaDN9Pslk90Q3LdSHcAP2CAA",
        views: "3.1M",
        likes: "170k",
        channel: {
            name: "Webseries Wave",
            logo: "https://yt3.ggpht.com/IsWYQOfD7N2SrVaMM39YJNPCovu-P3Q2ze6PXvDkYp5BjWYdpwtEk9YWc7ZhWTxpw9JSl40PhA=s88-c-k-c0x00ffffff-no-rj",
        },
    },

    {
        id: 7,
        title: "Why is South India more Developed than North India? | Dhruv Rathee",
        thumbnail: "https://i.ytimg.com/vi/MJ_vmdIJIRw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfi4qFDDiJc3zXNhXb7Ekt3JF1sA",
        views: "7.6M",
        likes: "276K",
        channel: {
            name: "Dhruv Rathee",
            logo: "https://yt3.googleusercontent.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s176-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 8,
        title: "Ghost (Hindi) Official Trailer | Dr. Shivarajkumar | Sandesh N | Dr. Jayantilal Gada | Srini| 19 Oc",
        thumbnail: "https://i.ytimg.com/vi/zUOrzMTgVKk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdG0afLIBwjZJj22IveD6tHyq_gA",
        views: "2.3M",
        likes: "103K",
        channel: {
            name: "Pen Movies",
            logo: "https://yt3.googleusercontent.com/c6a-lZ4G5X2R3mlxLO-BWsQM7Q6qiTtA6kJlRaUdX1WY003-pTVzDfzf9UXgsxtKJLzltLJ6=s176-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 9,
        title: "THE HISTORY OF INDIA in 14 Minutes - Part 2",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoi2Td3bptVKklTvYbzgZO7k0zvgHYZVMe9Jf578LI5yFFJXcE",
        views: "389K",
        likes: "10K",
        channel: {
            name: "Knowledgia",
            logo: "https://yt3.googleusercontent.com/ytc/APkrFKYEoVIcMK-bsuWANtM8FftcgJ8fiUL8XgRjH7-1eQ=s176-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 10,
        title: "Jawan: Dhumme Dhulipelaa Song |Shah Rukh Khan |Atlee |Anirudh |Nayanthara |Vijay Sethupathi |Deepika",
        thumbnail: "https://i.ytimg.com/vi/G-DhyBJ5SOs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBSrS43lM-VFUBkf-hLCLVIvR5VGg",

        views: "7.9M",
        likes: "170K",
        channel: {
            name: "T-Series Telugu ",
            logo: "https://yt3.googleusercontent.com/ytc/APkrFKYkn9Q9VM_xwhxA6ik3lGkWyRZ5N62fLHtuuUuy2w=s176-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 11,
        title: "KONG vs GIANT SQUID - Fight Scene - Kong: Skull Island (2017) Movie Clip HD",
        thumbnail: "https://i.ytimg.com/vi/CKSNR7Q8UdU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCKltmrq4Fg9aUR45JZWVkajkFvbw",
        views: "389M",
        likes: "10M",
        channel: {
            name: "BestClips",
            logo: "https://yt3.googleusercontent.com/ytc/APkrFKYbBoTKjOxjuCOLIU0DQHf0_SepQWszSh4-Ec-K=s176-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 12,
        title: "100 Days Building A Modern Underground Hut With A Grass Roof And A Swimming Pool",
        thumbnail: "https://i.ytimg.com/vi/tYf0BoFe9D8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBIvfXSuJPGtMf2NQMfFQZyvgAZHA",
        views: "857M",
        likes: "5.6M",
        channel: {
            name: "Mr.Heang Update",
            logo: "https://yt3.googleusercontent.com/ytc/APkrFKaQxFA7wUSi-faMIOoZDJdOUIjNm7ASsQFzyZV4hA=s176-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 13,
        title: "Rohit Sharma Hits 140! | India v Pakistan - Match Highlights | ICC Cricket World Cup 2019",
        thumbnail: "https://i.ytimg.com/vi/AFEZzf9_EHk/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBBei3ssGKvwotbtHY1VZVTGF5GNg",
        views: "107M",
        likes: "1.1M",
        channel: {
            name: "ICC",
            logo: "https://yt3.ggpht.com/3K6h6gpMPf4mK9qh6SXTl0W3PLxnOMzUnFHc2lbS9t-ucS-b4JGcR8nW7ja9XDYkHM-kAnijk2c=s88-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 14,
        title: "FULL MATCH - Brock Lesnar vs. Roman Reigns - Universal Title Match: SummerSlam 2018",
        thumbnail: "https://i.ytimg.com/vi/nSNkwIvlWJU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDypark_QdO1uSWnEL_YiJ7EqMKtQ",
        views: "77M",
        likes: "1M",
        channel: {
            name: "WWE",
            logo: "https://yt3.ggpht.com/ytc/APkrFKaERKeBTY6Z-ktDAHmsZ38tbAi2M84InFei9RtiPmQ=s88-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 15,
        title: "CHICKEN GHEE ROAST | Fried Country Chicken Recipe Cooking in Village | Chicken Recipe | Ghee Recipes",
        thumbnail: "https://i.ytimg.com/vi/fuWC3NrkFsw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCNKK58z4Xa2Lf-9xy-MTyS-xxzEw",
        views: "20M",
        likes: "345K",
        channel: {
            name: "Village Cooking Chanel",
            logo: "https://yt3.ggpht.com/4eEETdAR33227A9KRhQ1T4P2NyYReiZKMeaN_rZ8QZ1LSCLUudaggLhZ1C40RkDyw6SejAmW=s88-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 16,
        title: "Impossible Climb Arette | Modified Monster Bikes | Hill Climb",
        thumbnail: "https://i.ytimg.com/vi/4x678Pwpk6A/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCnrniXsqmDFUupW_bicWYEr5IEag",
        views: "439M",
        likes: "10M",
        channel: {
            name: "Enduro Life Media",
            logo: "https://yt3.googleusercontent.com/8VAqGC4I5sOODzXu6_wD2cTJguGneJ6FPAK3WeaTbs0t0dh3qR7x3y55gl7Swv8bz6DvIwIBRw=s176-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 17,
        title: "$1 Vs $100,000,000 Car!",
        thumbnail: "https://i.ytimg.com/vi/KrLj6nc516A/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA9Czm6Wz-dMKZHVYi3le3KU-e0aA",
        views: "125M",
        likes: "4.6M",
        channel: {
            name: "MrBeast",
            logo: "https://yt3.ggpht.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s88-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 18,
        title: "New Evo Groza Dangerous Weapon Good or Bad Gameplay in Free Fire in Telugu",
        thumbnail: "https://i.ytimg.com/vi/KPSi0aDpQzE/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBfb5jzw1FOMFeNLs2xf_bqG9rdbw",
        views: "243K",
        likes: "75K",
        channel: {
            name: "Telugu Gaming FF",
            logo: "https://yt3.ggpht.com/rVSBwOcmYA11LsIOZ19Hwx6U78WGs55DkNh4uy3rw4TLsLBoM2TDe1LL7azhjVmjNCxXwa8byw=s88-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 19,
        title: "THE HISTORY OF INDIA in 14 Minutes - Part 2",
        thumbnail: "https://i.ytimg.com/vi/_PzUjdsoPWw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCkcsgkeI_D_TO-mLcHNpUG-8US-w",
        views: "146K",
        likes: "4.5K",
        channel: {
            name: "Sevou",
            logo: "https://yt3.googleusercontent.com/ytc/APkrFKa3xC9f8eNrPLLdwyMdFcb64Hy6ySPPrw3soFGl=s176-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 20,
        title: "Le match de foot le plus violent 🌀 4K",
        thumbnail: "https://i.ytimg.com/vi/YlBkuKMINNE/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDhmE9DdFKi4DiZ5NZIqugCvJtlGw",
        views: "16M",
        likes: "56K",
        channel: {
            name: "Boxoffice | Movie Scenes in French",
            logo: "https://yt3.googleusercontent.com/juJumrz8W2Mt1r3JA8Cdsc0ZjDf0C0HNfSgBF4ThUwOalYoLyuOQq2tFcXG9_LrnP7R1ji6SPg=s176-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 21,
        title: "ASMR MUKBANG | FIRE Noodle & Spicy Seafood & Octopus & Kingcrab | COOKING & EATING SOUND!",
        thumbnail: "https://i.ytimg.com/vi/b2RownYoNoU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD4zdZGmSrtVVrFqXh2l9PAgdKQGA",
        views: "37M",
        likes: "506K",
        channel: {
            name: "GONGSAM TABLE 이공삼 ",
            logo: "https://yt3.googleusercontent.com/ytc/APkrFKY5rUp4CV4KTSJdfbT_KfTHhMSmAsvL3AgdehZIEA=s176-c-k-c0x00ffffff-no-rj",
        },
    },



];

function VideoGallery() {
    return (
        <div className="video-gallery">
            {videosData.map((video) => (
                <div className="video-card" key={video.id}>
                    <img
                        className="thumbnail"
                        src={video.thumbnail}
                        alt={video.title}
                    />
                    <div className="video-details">
                        <h3 >{video.title}</h3>
                        <div className="channel-info">
                            <img
                                className="channel-logo"
                                src={video.channel.logo}
                                alt={video.channel.name}
                            />
                            <p className="channel-name">{video.channel.name}</p>
                        </div>
                        <div className="records">
                            <p className="views">{video.views} views</p>
                            <p className="likes">{video.likes} likes</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VideoGallery;
