import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Details() {
    console.log();
    const { iid } = useParams()
    const [idea, setIdea] = useState([])
    const [delReason, setDelReason] = useState([])
    const [isLoading, setisLoading] = useState(true)


    const navigate = useNavigate()

    useEffect(() => {
        getitems()
    }, [])

    const getitems = () => {
        axios.get('https://665736c59f970b3b36c866df.mockapi.io/manager')
            .then(function (response) {
                // handle success
                response.data.forEach((e) => {
                    e.ideas.forEach((a) => {
                        if (a.iid == iid) {
                            setIdea(a)
                            setisLoading(false)
                        }
                    });

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
    const aproval = (e) => {
        axios.get('https://665736c59f970b3b36c866df.mockapi.io/manager').then((res) => {
            res.data.map(a => {
                const tar = a.ideas.find((i) => i.iid === iid);
                if (tar) {
                    if (e == 'مقبولة') {
                        tar.stats = 'مقبولة';
                        axios.put(`https://665736c59f970b3b36c866df.mockapi.io/manager/${a.id}`, { ideas: a.ideas })
                            .then(() => {
                                navigate('../ideaState')
                            })
                    } else if (e == 'مرفوضة') {
                        tar.stats = 'مرفوضة';
                        axios.put(`https://665736c59f970b3b36c866df.mockapi.io/manager/${a.id}`, { ideas: a.ideas })
                            .then(() => {

                                navigate('../ideaState')
                            })
                    } else if (e == 'مسح' && delReason != "") {
                        a.ideas = a.ideas.filter((k) => k.iid != tar.iid);
                        axios.put(`https://665736c59f970b3b36c866df.mockapi.io/manager/${a.id}`, { ideas: a.ideas })
                            .then(() => {
                                navigate('../ideaState');
                            });
                    }
                }
            })

        })
    }
    return (isLoading ? <div>loding</div> :
        <div className='flex justify-around items-center gap-10'>
            <div className='flex flex-col justify-center items-center '>
                <div className='flex flex-col justify-center items-center gap-8 mt-8 text-black'>
                    <h1 className='text-4xl'>{idea && idea.title}</h1>
                    <h2 className='text-xl'>{idea && idea.stats}</h2>
                    <p className='text-justify'>{idea && idea.desc}</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 bg-stone-300 w-80 h-40 rounded-xl justify-center items-center'>
                <div className='flex justify-center text-black items-center gap-10'>
                    <button className='btn bg-stone-700 text-white w-32' onClick={() => aproval('مرفوضة')}>رفض</button>
                    <button className='btn bg-stone-700 text-white w-32' onClick={() => aproval('مقبولة')}>قبول</button>
                </div>
                {idea && idea.stats == "مرفوضة" ?
                    <div className='flex justify-center text-black items-center gap-2'>
                        <input className='p-1 bg-gray-200 rounded-lg' placeholder='سبب الحذف' value={delReason} onChange={(e) => setDelReason(e.target.value)} type="text" />
                        <button className='btn btn-sm bg-stone-700 text-white ' onClick={() => aproval('مسح')} >حذف الفكرة</button> </div>
                    : ""
                }
            </div>
        </div >
    )
}

export default Details