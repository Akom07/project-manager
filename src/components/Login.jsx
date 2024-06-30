import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert'

function Login() {
    const [userName, setUserName] = useState("")
    const [userPass, setUserPass] = useState("")
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const navigate = useNavigate()

    const login = () => {
        axios.get('https://665736c59f970b3b36c866df.mockapi.io/manager')
            .then(function (response) {
                // handle success
                response.data.map((e) => {
                    if (e.userName == userName && e.password == userPass) {
                        localStorage.setItem('islogin', true)
                        localStorage.setItem('id', e.id)
                        localStorage.setItem('isAdmin', e.state)
                        navigate(`/table`)
                    } else {
                        setShowAlert(true);
                        setAlertMessage('الاسم او الرقم السري خاطئ')
                    }
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }


    return (

        <div className="flex flex-col items-center justify-center w-full dark h-full text-black ">
            <Alert
                showAlert={showAlert}
                alertMessage={alertMessage}
            />
            <div className="w-full max-w-md bg-stone-300 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">تسجيل الدخول</h2>
                <div className="flex flex-col">
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="اسم المستخدم" className="bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                    <input value={userPass} onChange={(e) => setUserPass(e.target.value)} placeholder="كلمة السر" className="bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <label className="text-sm text-gray-900 cursor-pointer" htmlFor="remember-me">
                            لا تمتلك حساب ؟
                        </label>

                        <button onClick={() => navigate('/regestration/false')} className='underline underline-offset-2' >سجل الان</button>
                    </div>
                    <button onClick={login} className="bg-stone-700 text-white font-bold py-2 px-4 rounded-md mt-4  transition ease-in-out duration-150">تسجيل الدخول</button>


                </div>
            </div>
        </div>

    )
}

export default Login