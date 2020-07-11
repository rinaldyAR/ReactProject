import React, { useState } from 'react'

const EditThingForm = (props) => {
  const [thing, setThing] = useState(props.currentThing)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    
    console.log(thing)
    setThing({ ...thing, [name]: value })
    console.log(thing)
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateThing(thing.id, thing)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={thing.name}
        onChange={handleInputChange}
      />
      <label>Price</label>
      <input
        type="number"
        name="price"
        value={thing.price}
        onChange={handleInputChange}
      />
      <label>Quantity</label>
      <input
        type="number"
        name="quantity"
        value={thing.quantity}
        onChange={handleInputChange}
      />
      <button>Update Item</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditThingForm