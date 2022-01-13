import Devs from "../components/Devs"
import NavBar from '../components/Nav'
import Video from '../assets/Video.mp4'
import '../assets/Devs.css';

const Dev = () => {
    return (
        <div>
                <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
                </video>
                <NavBar/>
        <div id='title-container'>
                <br /> <br /> <br /> <br /> 
                <h1 id='home-title' style={{paddingLeft: '590px', color: 'blue', fontFamily: 'Trattatello, fantasy'}}>Meet The Devs</h1>
        <div id='pages-container' style={{paddingLeft: '280px'}} >
                <Devs/>
            </div>
            </div>
        </div>
    )
}

export default Dev