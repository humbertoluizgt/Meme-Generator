import React, {useState, useEffect} from "react";
import './Meme.css'

export default function Meme() {
  const [meme, setMeme] = useState(
    {
      topText: "", 
      bottomText: "", 
      randomImage: "https://i.imgflip.com/1bij.jpg"
    }
  )

  const [allMemes, setAllMemes] = useState("");

  useEffect(() => {
    console.log("Effect ran")
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
  }, [])
  

  function getImg() {
    setMeme(prevState => {
      return (
        {
          ...prevState,
          randomImage: allMemes[Math.floor(Math.random() * 100)].url
        }
      )
    })
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme( prevState => (
      {
        ...prevState,
        [name]: value
      }
    ) )
  }

  return (
    <main>
      <fieldset className="form-field">
        <div className="form-field--form" action="">
          <div className="form-field--inputs">            
            <input 
              type="text" 
              placeholder="Top Text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input 
              type="text" 
              placeholder="Bottom Text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
          <button onClick={getImg}>Get a new meme image</button>      
        </div>
      </fieldset>
      <div className="img-container">
        {meme.randomImage && <img className="meme-img" src={meme.randomImage} alt="meme" />}
        <h2 className="text-top">{meme.topText}</h2>
        <h2 className="text-bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}