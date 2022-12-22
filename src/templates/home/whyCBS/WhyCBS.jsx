import React from "react";
import { GiGems } from "react-icons/gi";
import { TbDevices } from "react-icons/tb";
import { SiAtom } from "react-icons/si";

import { SimpleCard } from "../../../components";
import "./whyCBS.scss";
const WhyCBS = () => {
    return (
        <div
            id="whyCBS"
            className="container display-flex jc-center  flex-column ai-center text-center pt-6"
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

            <div className="cbs-what">
                <p className="heading-5 w90 m-inline-auto gradient-text">
                    We are a team of young professionals seeking to provide a
                    sustainable and valuable product and service that will
                    enhance and improve your business standard.
                </p>

                <p className="heading-3 gradient-text">
                    The possibility are beyond your imagination
                </p>
                <ul className="cbs-what-item display-flex jc-evenly m-block-2 p-block-3 flex-wrap">
                    {data
                        .filter((x) => x.card === "what")
                        .map((i, index) => (
                            <li key={i.title + index}>
                                <SimpleCard
                                    class_name="what"
                                    title={i.title}
                                    content={
                                        i.content.substring(0, 100) + "..."
                                    }
                                />
                            </li>
                        ))}
                </ul>
            </div>

            <div className="cbs-why">
                <ul>
                    {data
                        .filter((x) => x.card === "why")
                        .map((i, index) => (
                            <li key={i.title + index}>
                                <SimpleCard
                                    title={i.title}
                                    content={i.content}
                                />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default WhyCBS;

const data = [
    {
        card: "what",
        title: "Affordable",
        content:
            "We provide an affordable pricing plans with high-quality products and services. No kidding, just plain commitment.",
    },
    {
        card: "what",
        title: "Customer Support",
        content:
            "Got some issues? No problem, we got your back. Our team will contact you as soon as possible.",
    },
    {
        card: "what",
        title: "Customizable Design",
        content:
            "Website created professionally just for you. You choose, we plan, we build, and we deliver.",
    },
    {
        card: "why",
        title: "Eco-Friendly Design",
        content:
            "Optimizing website by reducing image size. Strategically plan videos. Use lazy loading for images and media. Improve site navigation to find information easier. Choose a green web host. Finally, set up web caching.",
    },
    {
        card: "why",
        title: "Search Engine Optimization",
        content:
            "Guiding clients with a modern and updated step-by-step procedures on implementing SEO like Google Web Master (Google Console). A good site audit help's you understand how search engine index your website.",
    },
    {
        card: "why",
        title: "Minimalist",
        content:
            "A simple yet elegant design structure brings color and flavor to a website. Choose the right design and necessary elements to be used. Meeting the balanced approach, starting from the planning to the building phase, helps the developer decide and implement proper workflow resulting in a rich minimalist website.",
    },
    {
        card: "why",
        title: "Consistent Typography",
        content:
            "Choosing the right font, size, and color palette for a website isn't easy. Strategically planning what typography to use will make your user enjoy their stay on your website while browsing and finding the information they were looking for.",
    },
];
