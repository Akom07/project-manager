import axios from 'axios'
import React, { useEffect, useState } from 'react'
import defimg from '../assets/anonymous.png'
import { useNavigate } from 'react-router-dom'

function AllIdeas() {
    const [user, setuser] = useState([])
    const [items, setitems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getitems()
    }, [])

    const getitems = () => {
        axios.get('https://665736c59f970b3b36c866df.mockapi.io/manager')
            .then(function (response) {
                // handle success
                setitems(response.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            })
    }

    return (
        <div className='text-black'><div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th >

                        </th>
                        <th className='text-black' >الاسم</th>
                        <th className='text-black' >الفكرة</th>
                        <th className='text-black' >الحالة</th>
                        <th></th>
                        <th></th>
                    </tr>

                </thead>
                <tbody>
                    {/* row 1 */}
                    {items.map((e) => {

                        return e.ideas.map((a) => {
                            return (
                                <tr key={a.iid}>
                                    <th className='text-center'>

                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-16">
                                                    <img
                                                        className='image-full'
                                                        src={e.userImg == "" ? defimg : e.userImg}
                                                        alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{e.userName}</div>
                                                <div className="text-sm opacity-50">{e.state}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{a.title}</td>
                                    <td>{a.stats}</td>
                                    <th >
                                        <button onClick={() => navigate(`../detail/${a.iid}`)} className="btn bg-stone-700 text-white btn-sm">التفاصيل</button>
                                    </th>
                                    <th>
                                        <button onClick={() => navigate(`../editing/${a.iid}`)} className="btn bg-stone-700 text-white btn-sm">تعديل</button>

                                    </th>
                                </tr>)
                        })


                    })}


                </tbody>
            </table>
        </div></div>
    )
}


export default AllIdeas