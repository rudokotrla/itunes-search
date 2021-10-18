import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className='home'>
            <h1>This is a job interview task</h1>
            <p>The task was to implement iTunes music search 
                with playable results. Navigate to <Link to='/tunes' >Tunes</Link> tab where
                search bar is located.
                Just type the name of the desired song into search bar and 5 results will appear.
                You can play the preview by clicking on play button. You 
                can get to Apple Music store by clicking on the artwork.
            </p>
            <p> Created by Rudolf Kotrla</p>
        </div>
    )
}

export default Home
