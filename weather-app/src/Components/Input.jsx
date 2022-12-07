import React, {useState, useEffect} from 'react'

const Input = () => {
    const initialState = {
        longitude: "",
        latitude: "",
      }
    const [formState, setFormState] = useState(initialState)
    
    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
        console.log(formState)
      }
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
            <div className="Input">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="longitude">Longitude:</label>
                        <input
                        id="longitude"
                        type="number"
                        name="longitude"
                        value={formState.longitude}
                        onChange={handleChange}
                        />
                    <label htmlFor="latitude">Latitude:</label>
                        <input
                        id="latitude"
                        type="number"
                        name="latitude"
                        value={formState.latitude}
                        onChange={handleChange}
                        />
                    <button type="submit">Submit</button>
                </form>

            </div>


    </div>
  )
}

export default Input