import React, { useState } from 'react'
import ThingTable from './tables/ThingTable'
import AddThingForm from './tables/AddThingForm'
import EditThingForm from './tables/EditThingForm'

const App = () => {
  const thingsData = [
    { id: 1, name: 'Teh Bulat', price: 2000, quantity: 8 },
    { id: 2, name: 'Teh Segitiga', price: 3000, quantity: 2 },
    { id: 3, name: 'Teh Segilima', price: 5000, quantity: 6 },
  ]

  const [things, setThings] = useState(thingsData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', price: 0, quantity:0 }
  const [currentThing, setCurrentThing] = useState(initialFormState)
  
  const addThing = (thing) => {
    thing.id = things.length + 1
    setThings([...things, thing])
  }

  const deleteThing = (id) => {
    setThings(things.filter((thing) => thing.id !== id))
  }

  const editRow = (thing) => {
    setEditing(true)
  
    setCurrentThing({ id: thing.id, name: thing.name, price: thing.price, quantity: thing.quantity })
  }

  const updateThing = (id, updatedThing) => {
    setEditing(false)
  
    setThings(things.map((thing) => (thing.id === id ? updatedThing: thing)))
  }

  return (
    <div className="container">
      <h1>Pencatatan Pembelian Barang</h1>
      <div class="flex-row">
      <div class="flex-large one-third">
        {editing ? (
          <div>
            <h2>Edit Barang</h2>
            <EditThingForm
              setEditing={setEditing}
              currentThing={currentThing}
              updateThing={updateThing}
            />
          </div>
        ) : (
          <div>
            <h2>Tambah Barang</h2>
            <AddThingForm addThing={addThing} />
          </div>
        )}
      </div>
        <div class="flex-large two-third">
          <h2>List Barang</h2>
          <ThingTable things={things} deleteThing={deleteThing}
               updateThing={updateThing}/>
        </div>
      </div>
    </div>
  )
}

export default App