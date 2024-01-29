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
    
    const newLocal = "c-section";
    return (
        <div data-scroll-container>
        <section data-scroll-section>
            <h1 data-scroll>Hey</h1>
            <p data-scroll data-scroll-speed="1">© 2024 Mi Portafolio</p>
        </section>
        <section data-scroll-section>
        <h2>Proyectos</h2>
         
        </section>

        <section data-scroll-section>
                <div class="o-container">
                    <div class="c-damn">
                        <h1 class="o-title" data-scroll>
                            <span class="o-title_line">
                                <span>
                                    Damn
                                </span>
                            </span>
                            <span class="o-title_line">
                                <span>
                                    You really
                                </span>
                            </span>
                            <span class="o-title_line">
                                <span>
                                    like to
                                </span>
                            </span>
                            <span class="o-title_line u-white">
                                <span>
                                    scroll
                                </span>
                            </span>
                        </h1>
                    </div>
                </div>
            </section>

            <section data-scroll-section>
                <div class="c-section" id="scroll-direction">
                    <div class="c-direction-block_wrapper">
                        <div class="c-section_infos -padding" data-scroll data-scroll-sticky data-scroll-target="#scroll-direction">
                            <div class="c-section_infos_inner" data-scroll>
                                <h3>
                                    02. 
                                    Scroll direction
                                </h3>
                                <div class="c-sections_infos_text u-text">
                                    <p>
                                        And if that wasn't enough, make 'em go backwards. Or upwards. Or downwards!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="c-direction-block" id="direction">
                            <div class="c-direction-block_item -one">
                                <span class="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#direction">
                                    I'm moving in this direction
                                </span>
                            </div>
                            <div class="c-direction-block_item -two">
                                <span class="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-8" data-scroll-target="#direction">
                                    And in this direction
                                </span>
                            </div>
                            <div class="c-direction-block_item -three">
                                <span class="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="9" data-scroll-target="#direction" data-scroll-delay="0.05">
                                    Sooo customizable. Right?
                                </span>
                            </div>
                            <div class="c-direction-block_item -four">
                                <span class="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="15" data-scroll-target="#direction">
                                    I can also go in this direction
                                </span>
                            </div>
                            <div class="c-direction-block_item -five">
                                <span class="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-20" data-scroll-target="#direction" data-scroll-delay="0.05">
                                    Ok, enough!!!!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






    </div>
    )
}

export default ItemListContainer;