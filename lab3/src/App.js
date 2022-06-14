import './App.css';
import albums from "./data.js";
import Album from "./Album.js";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Display">
          <div className="display-image">
            <img src={albums[0].coverImg} alt={ albums[0].name } height="300px" width="300px"/> 
          </div>
          <div className="display-tracks">
            <ol>
            { albums[0].tracks.map((track) => (
              <li> {track} </li>
            ))}
            </ol>
          </div>
        </div>
        <h1>Select An Album:</h1>
        { albums.map((album) => (
          <Album name={album.name} coverImg={album.coverImg}/>
        ))}
      </header>
    </div>
  );
}

export default App;