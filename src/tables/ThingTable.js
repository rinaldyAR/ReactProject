import React, { useState } from 'react'

const ThingTable = (props) => {

  const handleQuantityChange = (thing, event) => {
    const value  = event.target.value
    thing.quantity = value;
    props.updateThing(thing.id, thing)
  }

  const handleNameChange = (thing, event) => {
    const value  = event.target.value
    thing.name = value;
    props.updateThing(thing.id, thing)
  }

  const handlePriceChange = (thing, event) => {
    const value  = event.target.value
    thing.price = value;
    props.updateThing(thing.id, thing)
  }

  return(
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.things.length > 0 ? (
        props.things.map((thing) => (
          <tr key={thing.id}>
            <td><input
                type="text"
                name="name"
                value={thing.name}
                onChange={(e)=> handleNameChange(thing,e)}
              />
            </td>
            <td><input
                type="number"
                name="price"
                value={thing.price}
                onChange={(e)=> handlePriceChange(thing,e)}
              />
              </td>
            <td><input
                type="number"
                name="quantity"
                value={thing.quantity}
                onChange={(e)=> handleQuantityChange(thing,e)}
              />
            </td>
            <td>Rp. <CountTotal price={thing.price} quantity={thing.quantity}></CountTotal></td>
            <td>
              <button
                onClick={() => props.deleteThing(thing.id)}
                className="button muted-button"
                >
                Delete
                </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Things</td>
        </tr>
      )}
    </tbody>
  </table>
)}

function CountTotal(props){
  return props.quantity * props.price;
}
export default ThingTable