import { useState, useRef, useEffect } from "react";
import React from "react";
import data from "./data";
import MainCard from "./MainCard"

export default function SelectionBar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const scrollRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const toggleButton = () => {
        setIsToggled(!isToggled);
    };

    const handleScroll = () => {
        const scrollWidth = scrollRef.current.scrollWidth;
        const scrollLeft = scrollRef.current.scrollLeft;
        const offsetWidth = scrollRef.current.offsetWidth;

        setScrollLeft(scrollLeft);

        setShowLeftButton(scrollLeft > 0);

        setShowRightButton(scrollLeft <= (scrollWidth - offsetWidth) - 5);
        console.log(scrollWidth - offsetWidth)
    }

    useEffect(() => {
        handleScroll();
    }, []);

    //function to scroll

    const scrollTo = (direction) => {
        const offsetWidth = scrollRef.current.offsetWidth;
        const newPosition =
            direction === "left"
                ? Math.max(scrollLeft - offsetWidth, 0)
                : Math.min(scrollLeft + offsetWidth, scrollRef.current.scrollWidth - offsetWidth);

        scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });

        setScrollLeft(newPosition);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <>
            <div className="mobile_search">
                <div className="search_logo">
                    <img src="https://www.svgrepo.com/show/532555/search.svg" alt="logo"></img>
                </div>
                <div>
                    <span className="black">Anywhere</span><br></br>
                    <span>Anyweek . Add guests</span>

                </div>

            </div>
            <div className="mobile_filter">
                <img src="https://www.svgrepo.com/show/491027/filter.svg"></img>
            </div>

            <div className={`main_container ${isScrolled ? 'scrolled' : ' '}`}>

                {showLeftButton &&
                    (<button onClick={() => scrollTo('left')} className="scrollButton1" >{"<"}</button>)}
                <div ref={scrollRef} className="SelectionBar" onScroll={handleScroll}>
                    <div>
                        <img src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="img" /><br />
                        <span >Lakefront</span>
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" alt="img" /><br />
                        <span>A-frames</span>

                    </div><div>
                        <img src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="img" /><br />
                        <span>National parks</span>

                    </div><div>
                        <img src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="img" /><br />
                        <span>
                            Castles</span>

                    </div>
                    <div>
                        <img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="img" /><br />
                        <span>Amazing Views</span>

                    </div><div>
                        <img src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" alt="img" /><br />
                        <span>A-frames</span>

                    </div><div>
                        <img src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="img" /><br />
                        <span>National parks</span>

                    </div>

                    <div>
                        <img src="	https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" alt="img" /><br />
                        <span> Mansions</span>

                    </div>
                    <div>
                        <img src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" alt="img" /><br />
                        <span> Farms</span>
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="img" /><br />
                        <span>Castles</span>
                    </div>
                    <div>
                        <img src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="img" /><br />
                        <span> Castles</span>

                    </div>
                    <div>
                        <img src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="img" /><br />
                        <span> Castles</span>
                    </div>

                </div>
                {showRightButton &&
                    (<button onClick={() => scrollTo('right')} className="scrollButton2" >{">"}</button>)}
                <div className="two_btn">
                    <div className="filterBtn">
                        Filters
                    </div>
                    <div className="button2">
                        Display total before taxes


                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" > </span>
                        </label>


                    </div>
                </div>

            </div>

            <div className="main_tile">
                {data.map((item, index) => (
                    < MainCard
                        key={index}
                        img={item.img}
                        name={item.Name}
                        address={item.address}
                        date={item.Date}
                        price={item.Price}
                        day={item.Day}
                    />


                ))}
            </div>


        </>
    )
}




