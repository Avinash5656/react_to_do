import React, { useState , useEffect } from 'react'
import swal from 'sweetalert';
import '../App.css';

const Todo = () => {

  const [inputdata, setInputdata] = useState('');
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('todo_items');
    return storedItems ? JSON.parse(storedItems) : [];
  });
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

   // Function to load data from local storage on initial render
   useEffect(() => {
    const storedItems = localStorage.getItem('todo_items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Function to save data to local storage whenever items change
  useEffect(() => {
    localStorage.setItem('todo_items', JSON.stringify(items));
  }, [items]);
  
  // on pressing enter adds item
  const check = (e)=>{
    if (e.key === 'Enter'){
      additem();
    }

  }

 


  return (
    <>
      <div className='main-div'>
        <div className='child-div'>


          <h2 className='heading'>Task Planner</h2>
          <div className='additems'>
            <input type="text" placeholder='Type something' className='inputbox'
              value={inputdata}
              onChange={(e) => setInputdata(e.target.value)}
              onKeyUp={check}
            />
            <div><button onClick={additem} className='add-btn'>Add</button></div>
          </div>



          <div >
            {
              items.map((elem, index) => {
                return (
                  <div className='each-item' key={index}>
                    <h2 className='show-item'>{elem}</h2>
                    <i className="fa-solid fa-trash delicon trash-can" title='delte item' onClick={() => deleteitem(index)} ></i>

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
