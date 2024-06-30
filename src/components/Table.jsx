import axios from 'axios'
import React, { useEffect, useState } from 'react'
import defimg from '../assets/anonymous.png'

function Table({ search }) {
    const [items, setitems] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        getitems()
    }, [])

    const getitems = () => {
        axios.get('https://665736c59f970b3b36c866df.mockapi.io/manager')
            .then(function (response) {
                // handle success
                setitems(response.data)
                setisLoading(false)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            })
    }




    const searched = search ? items.filter((item) => {
        return item.userName.toLowerCase().includes(search.toLowerCase());
    })
        : items;
    return (
        <div className='text-black'><div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        {/* remove or fix */}
                        <th >

                        </th>
                        <th className='text-black' >الاسم</th>
                        <th className='text-black' >الفكرة</th>
                        <th className='text-black' >الحالة</th>
                        <th></th>
                    </tr>

                </thead>
                <tbody>
                    {/* row 1 */}
                    {isLoading ? <tr><th>loding</th></tr> : searched.map((e) => {
                        return e.ideas.map((a) => {
                            if (a.stats == 'مقبولة') {
                                return (
                                    <tr key={a.iid}>
                                        <th className='text-center'>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-16 w-16">
                                                        <img
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
                                        <th>
                                            {a.stats}
                                        </th>
                                    </tr>)
                            }
                        })

                    })
                    }



                </tbody>
            </table>
        </div></div>
    )
}

export default Table