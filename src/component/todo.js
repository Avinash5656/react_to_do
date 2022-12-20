import React, { useState } from 'react'
import swal from 'sweetalert';
import '../App.css';

const Todo = () => {

  const [inputdata, setInputdata] = useState('');
  const [items, setItems] = useState([]);


  // adding a task
  const additem = () => {
    if (!inputdata) {
      swal("Add Something", "To your task list", "info")

    }
    else {
      setItems([...items, inputdata])
      setInputdata('')

    }


  }
  // deleting a task
  const deleteitem = (id) => {
    const updateditems = items.filter((elem, index) => {
      return index !== id;
    })

    setItems(updateditems)

  }

  // removing all

  const removeall = () => {
    setItems([]);
  }



  return (
    <>
      <div className='main-div'>
        <div className='child-div'>


          <h2>Add your task's below</h2>
          <div className='additems'>
            <input type="text" placeholder='Add here' className='inputbox'
              value={inputdata}
              onChange={(e) => setInputdata(e.target.value)}
            />
            <i className="fa-duotone fa-plus fonticon" title='add item' onClick={additem} ></i>
          </div>



          <div >
            {
              items.map((elem, index) => {
                return (
                  <div className='each-item' key={index}>
                    <h2 className='show-item'>{elem}</h2>
                    <i className="fa-solid fa-trash delicon" title='delte item' onClick={() => deleteitem(index)}></i>

                  </div>

                )
              })
            }



            
          </div>
        </div>

      </div>
      <div className='remove-div'>
              <button onClick={removeall} className='remove' > Remove all</button>
            </div>
    </>
  )
}

export default Todo
