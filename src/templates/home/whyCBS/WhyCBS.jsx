import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { GiGems } from "react-icons/gi";
import { TbDevices } from "react-icons/tb";
import { SiAtom } from "react-icons/si";

import { SimpleCard } from "../../../components";
import cbs_img from "../../../assets/images/whyCBS.png";
import "./whyCBS.scss";
import MainContext from "../../../context/MainContext";
const WhyCBS = () => {

    const {setHideDialog} = useContext(MainContext)

    return (
        <div
            id="whyCBS"
            className=" display-flex jc-center  flex-column ai-center text-center pt-6"
        >
            <ul className="cbs-item display-flex">
                <li className="cbs-list">
                    <GiGems />
                    <p>Bring value to your business</p>
                </li>
                <li className="cbs-list">
                    <TbDevices />
                    <p>Device compatibility</p>
                </li>
                <li className="cbs-list">
                    <SiAtom />
                    <p>Modern, responsive and reactive</p>
                </li>
            </ul>

            <div className="cbs-what pt-3">
                <p className="heading-3 gradient-text text-cap">
                    Possibility beyond your imagination
                </p>
                <p className="heading-6 w90 m-inline-auto gradient-text m-top-4">
                    We are a team of young professionals seeking to provide a
                    sustainable and valuable product and service that will
                    enhance and improve your business standard.
                </p>

                <ul className="cbs-what-item display-flex jc-evenly m-block-2 p-block-2">
                    {perks.map((i, index) => (
                        <li key={i.title + index} onClick={()=>setHideDialog(false)}>
                            <SimpleCard
                                title={i.title}
                                content={i.content.substring(0, 100) + "..."}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="cbs-why p-5">
                <div className="cbs-why-img m-inline-auto">
                    <img src={cbs_img} alt="Why Corebuso PNG" />
                </div>
                <div className="cbs-why-list">
                    <ul>
                        {whyCBS.map((i, index) => (
                            <li
                                key={i.title + index}
                                className="cbs-why-list-item"
                            >
                                <p className="gradient-text fw-bold heading-5 text-left m-bottom">
                                    {i.title}
                                </p>
                                <p className="clr-primary p-1 text-left">
                                    {i.content.substring(0, 150) + "...  "}
                                    <Link>Read more</Link>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhyCBS;

const perks = [
    {
        title: "Affordable",
        content:
            "We provide an affordable pricing plans with high-quality products and services. No kidding, just plain commitment.",
    },
    {
        title: "Customer Support",
        content:
            "Got some issues? No problem, we got your back. Our team will contact you as soon as possible.",
    },
    {
        title: "Customizable Design",
        content:
            "Website created professionally just for you. You choose, we plan, we build, and we deliver.",
    },
];

const whyCBS = [
    {
        title: "Eco-Friendly Design",
        image_url:
            "https://cdn.pixabay.com/photo/2017/12/07/10/35/country-3003574_960_720.jpg",
        content:
            "Optimizing website by reducing image size. Strategically plan videos. Use lazy loading for images and media. Improve site navigation to find information easier. Choose a green web host. Finally, set up web caching.",
    },
    {
        title: "Search Engine Optimization",
        image_url:
            "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_960_720.jpg",
        content:
            "Guiding clients with a modern and updated step-by-step procedures on implementing SEO like Google Web Master (Google Console). A good site audit help's you understand how search engine index your website.",
    },
    {
        title: "Minimalist",
        image_url:
            "https://images.unsplash.com/photo-1611572789411-6240f6cea970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        content:
            "A simple yet elegant design structure brings color and flavor to a website. Choose the right design and necessary elements to be used. Meeting the balanced approach, starting from the planning to the building phase, helps the developer decide and implement proper workflow resulting in a rich minimalist website.",
    },
    {
        title: "Consistent Typography",
        image_url:
            "https://cdn.pixabay.com/photo/2015/05/31/12/53/pencil-791598_960_720.jpg",
        content:
            "Choosing the right font, size, and color palette for a website isn't easy. Strategically planning what typography to use will make your user enjoy their stay on your website while browsing and finding the information they were looking for.",
    },
];
