import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '../assets/Devs.css';
import niraj  from '../assets/Images/niraj.jpeg'
import holly  from '../assets/Images/holly.jpeg'
import louis  from '../assets/Images/louis.jpg'
import niraj1  from '../assets/Images/niraj1.jpg'
import holly1  from '../assets/Images/holly1.jpg'
import louis1  from '../assets/Images/louis1.jpg'


library.add(fab)


const Devs = () => {
    return (
        <>
        <div className="card-container1">
            <section className="img-card-section">
                <div className="img-card-square"></div>
                <img alt="background" className="img-card-style" src={niraj1}></img>
            </section>
            <section className="name-card-section">
                Niraj Patel
            </section>
            <section className="title-card-section">
                Software Engineer
            </section>
            <section className="desc-card-section">
                I’m a full-time Software Engineering student at Flatiron.
                My hobbies include playing basketball, playing video games and learning new programming frameworks.
            </section>
            <section className="social-card-section">
                <a href="https://nirajpatel23.medium.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'medium']} className="social-card-style" />
                </a>
                <a href="https://www.linkedin.com/in/niraj-p-a5a063156/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-card-style" />
                </a>
                <a href="https://github.com/niraj23" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} className="social-card-style" />
                </a>
            </section>
                <img alt="profile" className="profile-img-card" src={niraj}></img>
            </div>
        <div/>
        <div className="card-container1">
            <section className="img-card-section">
                <div className="img-card-square"></div>
                <img alt="background" className="img-card-style" src={louis1}></img>
            </section>
            <section className="name-card-section">
                Louis Jacob
            </section>
            <section className="title-card-section">
                Software Engineer
            </section>
            <section className="desc-card-section">
                I'm a full-time student at the Flatiron School. I enjoy being outdoors with my dog and watching soccer.
                I'm passionate about developing my skills to become a better developer.
            </section>
            <section className="social-card-section">
                <a href="https://medium.com/@loujacob2" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'medium']} className="social-card-style" />
                </a>
                <a href="https://www.linkedin.com/in/louis-jacob-b30b04b2/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-card-style" />
                </a>
                <a href="https://github.com/ljacob49" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} className="social-card-style" />
                </a>
            </section>
                <img alt="profile" className="profile-img-card" src={louis}></img>
            </div>
        <div/>
        <div className="card-container1">
            <section className="img-card-section">
                <div className="img-card-square"></div>
                <img alt="background" className="img-card-style" src={holly1}></img>
            </section>
            <section className="name-card-section">
                Holly Teunis
            </section>
            <section className="title-card-section">
                Software Engineer
            </section>
            <section className="desc-card-section">
            Holly Teunis is a software developer currently residing in NYC. 
            They love animals, music, meditation and political economy.
            </section>
            <section className="social-card-section">
                <a href="https://hashnode.com/@HMTeunis" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'meduim']} className="social-card-style" />
                </a>
                <a href="https://github.com/HMTEUNIS" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} className="social-card-style" />
                </a>
            </section>
                <img alt="profile" className="profile-img-card" src={holly}></img>
            </div>
        <div/>
        </>
    )
}

export default Devs
