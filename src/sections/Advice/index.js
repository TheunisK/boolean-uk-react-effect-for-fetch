import { useEffect, useState } from "react"

function AdviceSection() {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    fetch('	https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => {
        setAdvice(data)
        console.log("advice", data)
      })
  }, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <section className="favourtite-slips-list"></section>
    </section>
  )
}

export default AdviceSection
