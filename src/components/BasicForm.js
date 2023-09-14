import React from 'react'

function BasicForm(props) {
  return (
    <form>
        <div>
            <div>
                <label>First Name</label>
                <input type='text'/>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text'/>
            </div>
        </div>
        <div>
            <label>E-mail Address</label>
            <input type='email'/>
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
  )
}

export default BasicForm