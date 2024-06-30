import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import defimg from '../assets/anonymous.png'
import Alert from './Alert'


function Student({ search }) {
    const [user, setuser] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        getitems()
    }, [])

    const getitems = () => {
        axios.get('https://665736c59f970b3b36c866df.mockapi.io/manager')
            .then(function (response) {
                // handle success
                setuser(response.data)
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
    const deletes = (e) => {
        axios.delete(`https://665736c59f970b3b36c866df.mockapi.io/manager/${e}`).then(
            setShowAlert(true),
            setAlertMessage('تم الحذف'),
            navigate('/')

        )
    }


    const searched = search ? user.filter((item) => {
        return item.userName.toLowerCase().includes(search.toLowerCase());
    })
        : user;
    return (
        <>
            <Alert
                showAlert={showAlert}
                alertMessage={alertMessage}
            />
            <div className='text-black'><div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            {/* remove or fix */}
                            <th >

                            </th>
                            <th className='text-black' >الاسم</th>
                            <th className='text-black' >عدد الافكار</th>
                            <th className='text-black' ></th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {isLoading ? <tr><th>loding</th></tr> : searched.map((e) => {

                            if (e.state == 'طالب')
                                return (
                                    < tr key={e.id}>
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
                                        <td>{e.ideas.length}</td>

                                        <th>
                                            <button onClick={(a) => deletes(e.id)} className="btn bg-stone-700 text-white btn-sm">حذف الحساب</button>
                                        </th>



                                    </tr>


                                )
                        })}


                    </tbody>
                </table>
            </div>
            </div >
        </>
    )
}

export default Student