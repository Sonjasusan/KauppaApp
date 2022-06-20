import './App.css'
import React, {useState} from 'react'
import KaupassakavijatService from './services/Kauppaskavijat'

const KaupassakavijaLisays = ({setLisäystila, setIsPositive, setMessage, setShowMessage}) => {
    const [uusiNimi, setUusiNimi] = useState('')
    const [uusiPuhelin, setUusiPuhelin] = useState('')
    const [aktiiviTila, setAktiiviTila] = useState('')

    const radioChange = (value) => {
        let radio = value //buttonin value
        if (radio === "false") {
          setNewActive(true)
          console.log("Aktiivinen: true");//logataan consolille (varmistus)
        }
        else {
          setNewActive(false)
          console.log("Aktiivinen: false");
        }
    }    
//Input kenttien alkuperäisen tilan palautuksen käsittelijä
 const emptyFields= () => {
    setUusiNimi("")
    setUusiPuhelin("")
    setAktiiviTila(true)
}
// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
    event.preventDefault()
    var uusiKaupassakavija = {
      nimi: uusiNimi,
      puhelin: uusiPuhelin,
      Aktiivisuustila: aktiiviTila
  }
}
console.log(uusiKaupassakavija)

KaupassakavijatService.create(uusiKaupassakavija)
.then(response => {
  if (response.status === 200) {
  setMessage(`Lisättiin uusi kaupassakavija: ${uusiKaupassakavija.nimi}`)
  setIsPositive(true)
  setShowMessage(true)
  
  setTimeout(() => {
    setShowMessage(false)
  }, 5000)

  setLisäystila(false)
}

})
.catch(error => {
  setMessage(error)
  setIsPositive(false)
  setShowMessage(true)

  setTimeout(() => {
    setShowMessage(false)
   }, 6000)
})

}

return (
    
    <div id="LisaaUusi">
       <h2>Kaupassakavijan lisäys</h2>

       <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={uusiNimi} placeholder="Nimi"
                    onChange={({ target }) => setUusiNimi(target.value)} required />
            </div>
            <div>
                <input type="text" value={uusiPuhelin} placeholder="Puhelin"
                    onChange={({ target }) => setUusiPuhelin(target.value)} required />
            </div>
  
            <fieldset>
                <legend>Aktiivisuustila</legend>                                 
                <div onChange={({target}) => radioChange(target.value)}>
                <label className="labeli">
                <input type='radio' name="aktiivisuustila" value="true"
                /> False</label> 
                <label className="labeli">
                <input type='radio' name="aktiivisuustila" value="false"
                /> True
                </label>
                </div>
                </fieldset>
           
        <input type='reset' value='empty'onClick={emptyFields} />
        <input type='button' value='back' onClick={() => setLisäystila(false)} />
       </form>
    </div>
  )
export default KaupassakavijaLisays