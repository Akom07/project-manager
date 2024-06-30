import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


function EditingIdea() {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const navigate = useNavigate()

    const { iid } = useParams()



    useEffect(() => {
        getitems()
    }, [])

    const getitems = () => {
        axios.get('https://665736c59f970b3b36c866df.mockapi.io/manager')
            .then(function (response) {
                // handle success

                response.data.map((e) => {
                    const m = e.ideas.find((a) => a.iid == iid)

                    setdesc(m.desc)
                    settitle(m.title)

                })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            })
    }


    const editidea = () => {
        axios.get(`https://665736c59f970b3b36c866df.mockapi.io/manager`)
            .then((res) => {
                res.data.map(a => {
                    const tar = a.ideas.find((i) => i.iid === iid);
                    if (tar) {
                        tar.title = title;
                        tar.desc = desc;
                        axios.put(`https://665736c59f970b3b36c866df.mockapi.io/manager/${a.id}`, { ideas: a.ideas })
                            .then(() => {
                                navigate('../ideaState')
                            })
                    }
                })
            })
    }


    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-10 pt-8'>
                <input className='input bg-gray-200 w-full text-black' placeholder='عنوان الفكرة' value={title} onChange={(e) => settitle(e.target.value)} type="text" />
                <textarea className='input bg-gray-200 h-fit w-full text-black' placeholder='وصف الفكرة' rows={5} cols={30} value={desc} onChange={(e) => setdesc(e.target.value)} type="text" />
                <button className='bg-stone-700 rounded-xl btn text-white w-full' onClick={editidea}>ارسال</button>
            </div>
        </div>
    )
}

export default EditingIdea