export default function card({word}) {

  return (
    <div className="card">
      <div>
            <p className="word">{word['word']}</p>
            <p className="romanization">{word['romanization']}</p>
      </div>

      <p id="translation" class="translation">{word['translation']}</p>
      {/* <button class="revealButton">Reveal</button> */}
    </div>
  )
}
