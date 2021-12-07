import { useEffect, useState } from "react"

function ArtsSection() {
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then(res => res.json())
      .then(art => {
        setArtList(art.data)
        // console.log("artList", art.data)
      })
  }, [])



  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
        {artList.map(piece => {
          return (
            <li key={piece.id}>
              <div className="frame">
                <img
                  src={`https://www.artic.edu/iiif/2/${piece.image_id}/full/843,/0/default.jpg`}
                />
              </div>
              <h3>{piece.title}</h3>
              <p>{`Artist: ${piece.artist_title}`}</p>
              <h4>Artistic Subjects:</h4>
              <ul>
                {piece.subject_titles.map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })}
              </ul>
            </li>
          )
        })}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
