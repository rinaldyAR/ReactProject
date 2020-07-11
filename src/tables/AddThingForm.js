import React, { useState } from 'react'

const AddThingForm = (props) => {
  const initialFormState = { id: null, name: '', price: 0, quantity: 0 }
  const [thing, setThing] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setThing({ ...thing, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.addThing(thing)
        setThing(initialFormState)
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
      <button>Add New</button>
    </form>
  )
}

export default AddThingForm