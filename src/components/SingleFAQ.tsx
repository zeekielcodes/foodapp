import React, {useState} from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

interface Props {
    question:string,
    answer:string
}

function SingleFAQ({question, answer}:Props) {
    const [show, setShow] = useState(false)
  return (
    <div className='singlefaq'>
        <div className="top" onClick={() => setShow(!show)}>
            <h3>{question}</h3>
            {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
       {show && <p>{answer}</p>} 
    </div>
  )
}

export default SingleFAQ