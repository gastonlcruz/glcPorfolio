import React, {useEffect, useRef} from "react";
import './/ItemListContainer.css';
import LocomotiveScroll from "locomotive-scroll";

function ItemListContainer({greeting}) {
    
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            multiplier:.5
    });

    return () => {
        scroll.destroy();
    }
    
},[]);
    
    return (
        <div data-scroll-container>
        <section data-scroll-section>
            <h1 data-scroll>Hey</h1>
            <p data-scroll data-scroll-speed="1">© 2024 Mi Portafolio</p>
        </section>
        <section data-scroll-section>
        <h2>Proyectos</h2>
         
        </section>
    </div>
    )
}

export default ItemListContainer;