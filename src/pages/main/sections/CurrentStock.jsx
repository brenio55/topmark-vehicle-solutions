import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// new Splide( '.splide' ).mount( { AutoScroll } );

import '@splidejs/splide/css';
import Car from './CurrentStock/Car';


function CurrentStock(){
    return (
        <>
           <section className="currentStockDIV">
                <h2 className='titleDefault'>CURRENT STOCK</h2>

                <span className='line'></span>
                <span className='line'></span>

                <Splide aria-label="My Favorite Images"
                    options={{
                        type   : 'loop',
                        drag   : 'free',
                        focus  : 'center',
                        perPage: 4,
                        autoScroll: {
                          speed: 0.4,
                        },
                        gap: '8px'
                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <Car carSrc="img/cars/car1.webp"
                             carName="BMW M4"
                             carPrice="0,000"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Car carSrc="img/cars/car2.webp"
                             carName="BMW 7 Series"
                             carPrice="0,000"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Car carSrc="img/cars/car3.webp"
                             carName="BMW Z4 "
                             carPrice="0,000"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Car carSrc="img/cars/car4.webp" 
                             carName="BMW M3"
                             carPrice="0,000"
                        />
                    </SplideSlide>
                </Splide>

                <a href="/showroom"><button type='button' className="buttonDefault exploreMore">EXPLORE MORE</button></a>
           </section>

           
        </>
    )
}

export default CurrentStock