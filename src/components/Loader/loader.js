import { useEffect, useRef } from 'react';
import './loader.scss';
import gsap from 'gsap'

const Loader = () => {
    const name = useRef()
    const portfolio = useRef()
    const text = useRef()
    const loader = useRef()
    const mobile  = window.innerWidth


    useEffect(() => {

        let[ initial, final] = [{x: '-120px'}, {x: 0}]
       
        if (mobile <= 363) {
            [initial, final] = [{y: '-50px'}, {y: 0}]
        }
       
        gsap.to(name.current, {scale: 1, duration: .8})
        gsap.fromTo(text.current, {scale: 1}, {scale: 0, duration: 1, delay: 2.5})       
        gsap.fromTo(portfolio.current, initial, {...final, opacity: 1, duration: 1, delay: 1})
        gsap.fromTo(loader.current, {y: '0vh', display: 'flex'}, {y: '-100vh', display: 'none', duration: .8, delay: 3.5})

    }, [mobile])

    return ( 
        <section ref={loader} className='loader'>
            <div ref={text}>
                <p ref={name}>Atabong Cecilia</p>
                <p ref={portfolio}>Portfolio</p>
            </div>
        </section>
     );
}

export default Loader;