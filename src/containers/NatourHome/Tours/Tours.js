import React from 'react';
import Card from '../../../components/UI/Card/Card';

const tours = (props) => {
    const toursContent = {
        title: "most popular tours",
        cardsContent: {
            c1: {
                frontSide: {
                    title: "EXPLORE THE WORLD",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
                    details: {
                        time: "3 day tours",
                        people: "Up to 30 people",
                        guide: "2 tour guides",
                        stay: "Sleep in cozy hotels",
                        difficulty: "Difficulty:easy"
                    }
                },
                backSide: {
                    priceOnly: "Only",
                    priceValue: "$200",
                    priceButton:"Book now!"
                },
                style: {
                    card: "card",
                    frontSide: {
                        side: "card__side card__side--front",
                        img: "card__picture card__picture-1",
                        heading: "card__heading",
                        headingSpan: "card__heading-span card__heading-span--1",
                        details: "card__details"

                    },
                    backSide: {
                        side: "card__side card__side--back card__side--back-1",
                        cta: "card__cta",
                        priceBox: "card__price-box",
                        priceOnly: "card__price-only",
                        priceValue: "card__price-value",
                        button: "btn btn--white"
                    }
                }
            },
            c2: {
                frontSide: {
                    title: "EXPLORE THE WORLD",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
                    details: {
                        time: "3 day tours",
                        people: "Up to 30 people",
                        guide: "2 tour guides",
                        stay: "Sleep in cozy hotels",
                        difficulty: "Difficulty:easy"
                    }
                },
                backSide: {
                    priceOnly: "Only",
                    priceValue: "$200",
                    priceButton:"Book now!"
                },
                style: {
                    card: "card",
                    frontSide: {
                        side: "card__side card__side--front",
                        img: "card__picture card__picture-2",
                        heading: "card__heading",
                        headingSpan: "card__heading-span card__heading-span--2",
                        details: "card__details"

                    },
                    backSide: {
                        side: "card__side card__side--back card__side--back-2",
                        cta: "card__cta",
                        priceBox: "card__price-box",
                        priceOnly: "card__price-only",
                        priceValue: "card__price-value",
                        button: "btn btn--white"
                    }
                }

            },
            c3: {
                frontSide: {
                    title: "EXPLORE THE WORLD",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
                    details: {
                        time: "3 day tours",
                        people: "Up to 30 people",
                        guide: "2 tour guides",
                        stay: "Sleep in cozy hotels",
                        difficulty: "Difficulty:easy"
                    }
                },
                backSide: {
                    priceOnly: "Only",
                    priceValue: "$200",
                    priceButton:"Book now!"
                },
                style: {
                    card: "card",
                    frontSide: {
                        side: "card__side card__side--front",
                        img: "card__picture card__picture-3",
                        heading: "card__heading",
                        headingSpan: "card__heading-span card__heading-span--3",
                        details: "card__details"

                    },
                    backSide: {
                        side: "card__side card__side--back card__side--back-3",
                        cta: "card__cta",
                        priceBox: "card__price-box",
                        priceOnly: "card__price-only",
                        priceValue: "card__price-value",
                        button: "btn btn--white"
                    }
                }

            }

        }
    }

    const Cards = Object.keys(toursContent.cardsContent).map(key => (
        <div class="col-1-of-3">
            <Card
                key={key}
                {...toursContent.cardsContent[key]}
            />
        </div>
    ))


    return (
        <div className="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    {toursContent.title}
                </h2>
            </div>
            <div className="row">
                {Cards}
            </div>
            <div className="u-center-text u-margin-top-big">
                <a href="#" className="btn btn--green">
                    DISCOVER ALL TOURS
                </a>
            </div>
        </div>
    );

};

export default tours;
