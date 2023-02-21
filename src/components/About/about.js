import './about.scss'
import Pic from './images/undraw_learning_sketching_nd4f.svg'

const About = () => {
    return (
        <article className='about'>
            <div className='about-wrapper'>
                <div>Hello, my name is</div>
                <div>Cecilia Atabong </div>
                <div>Software Engineer</div>
                <div>I'm a software engineer based in Nigeria,
                who creates and designs scalable web applications with great
                user experience. I'm currently solving deceptively simple problems
                at ALX.<br/> In my free time i love to write blog posts
                about the challenges I faced when building and also deploying my projects.
                This way I get to provide others with materials I wish I had when
                working on these projects.<br/><br/> Feel free to check out a few of my blog posts</div>
            </div>
            <div>
                <img src={Pic} alt="woman sittiing in front of a laptop"></img>
            </div>
        </article>
     );
}

export default About;