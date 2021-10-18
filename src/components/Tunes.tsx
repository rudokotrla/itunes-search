
import { useState } from "react";
import {ISong} from './ISong';
import Result from "./Result";
import './Tunes.css';



interface IITunesResponse {
    resultsCount: number,
    results: ISong[]
}
 

const Tunes = () => {

    
    const fetchSongs = (searchTerm: string) => {
        console.log(searchTerm);
        const url = new URL('https://itunes.apple.com/search?media=music&limit=5&attribute=songTerm&entity=song');
        url.searchParams.set('term', searchTerm);
        console.log(url.toString());
        fetch(url.toString())
        .then(response => response.json())
        .then((data: IITunesResponse) => {
            console.log(data.results);
            setSongs(data.results);
        }); 
    }
    const [songs, setSongs] = useState<ISong[]>([]);
    return (
        <div className='tunes-container'>
           <input type="search" name="search" id="search" placeholder='Search a song...' autoComplete='off' onChange={e => {fetchSongs(e.target.value)}}/> 
           {songs.length > 0 && 
            <ul className='search-results'>
                {songs.map((val, index) => {
                    return (
                        <li key={index}>
                            <Result trackName={val.trackName} artistName={val.artistName} artworkUrl100={val.artworkUrl100} trackTimeMillis={val.trackTimeMillis} previewUrl={val.previewUrl} trackViewUrl={val.trackViewUrl}/>
                        </li>
                    )
                })}
            </ul>
           }
        </div>
    )
}

export default Tunes
