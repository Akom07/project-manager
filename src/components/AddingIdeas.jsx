import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


function AddingIdeas() {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const navigate = useNavigate()

    const sendidea = () => {
        const id = localStorage.getItem('id')
        const idea = {

            iid: uuid(),
            title: title,
            desc: desc,
            stats: 'قيد التقييم',
        }
        axios.get(`https://665736c59f970b3b36c866df.mockapi.io/manager/${id}`).then((response) => {
            axios.put(`https://665736c59f970b3b36c866df.mockapi.io/manager/${id}`, {

                ideas: [...response.data.ideas, idea]
            }).then(
                navigate('/')
            )
        })
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-10 pt-8'>
                <input className='input bg-gray-200 w-full text-black' placeholder='عنوان الفكرة' value={title} onChange={(e) => settitle(e.target.value)} type="text" />
                <textarea className='input bg-gray-200 h-fit w-full text-black' placeholder='وصف الفكرة' rows={5} cols={30} value={desc} onChange={(e) => setdesc(e.target.value)} type="text" />
                <button className='bg-stone-700 rounded-xl btn text-white w-full' onClick={sendidea}>ارسال</button>
            </div>
        </div>
    )
}

export default AddingIdeas