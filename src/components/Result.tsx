
import { useState, useEffect } from 'react';
import {ISong} from './ISong';
import './Result.css';
import {FaPlay, FaStop} from 'react-icons/fa';


function millisToMinutesAndSeconds(miliseconds: number) {
    const minutes = Math.floor(miliseconds / 60000);
    const seconds = ((miliseconds % 60000) / 1000);
    return seconds === 60 ? ((minutes + 1) + ':00') : minutes + ':' + (seconds >= 10 ? '' : '0') + seconds.toFixed();
}

function useAudio(url: string): [boolean, () => void] {
    const [player] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        if (playing) {
            player.pause();
            player.currentTime = 0;
        } else {
            player.play();
        }
        setPlaying(!playing);
    } 

    useEffect(() => {
        playing ? player.play() : player.pause();
        return () => player.pause();
    }, [playing]);

    useEffect(() => {
        player.addEventListener('ended', () => setPlaying(false));
        return () => {
            player.removeEventListener('ended', () => setPlaying(false));

        }
    }, []);

    return [playing, toggle];

}

const Result = ({artistName, trackName, artworkUrl100, trackTimeMillis, previewUrl, trackViewUrl }: ISong) => {
    
    const [playing, togglePlayStop] = useAudio(previewUrl);

    return (
        <div className='search-result'>
            <a href={trackViewUrl} target='_blank'><img src={artworkUrl100} alt="Song artwork" /></a>
            <div className='song-info'>
                <p>{artistName}</p>
                <p>{trackName}</p>
            </div>
            <p className='song-duration'>{millisToMinutesAndSeconds(trackTimeMillis)}</p>
            <button className='song-play-stop' onClick={togglePlayStop} >
                { playing ? <FaStop size='24px'/> : <FaPlay size='24px'/>} 
                
            </button>
            
        </div>
    )
}

export default Result
