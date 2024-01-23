import React, {useState} from 'react'

const ButnuseState = () => {

    const [count, setCount] = useState(0);

    const handlebtn = () => {
        setCount(count+1);
    }


  return (
    <div>
    <button onClick={handlebtn}>You have clicked me {count} times</button>
    </div>
  )
}

export default ButnuseState