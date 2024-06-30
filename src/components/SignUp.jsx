import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import annon from '../assets/anonymous.png'
import Alert from './Alert'

function SignUp({ logg }) {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userImg, setUserImg] = useState("")
    const [userPass, setUserPass] = useState("")
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const navigate = useNavigate()

    const signup = () => {
        if (userName < 4) {
            setShowAlert(true);
            setAlertMessage('يجب أن يكون اسم المستخدم أكثر من 3 أحرف')
        } else if (!userEmail.match('[a-zA-z0-9]@tuwaiq.[a-zA-z0-9]')) {
            setShowAlert(true);
            setAlertMessage('@tuwaiq يجب ان يحتوي الايميل على')
        } else if (userPass < 4 && !userPass.match('[0 - 9][a - z][A - Z]')) {
            setShowAlert(true);
            setAlertMessage('يجب أن تحتوي كلمة المرور على حرف واحد صغير وحرف كبير ورقم واحد')
        } else {
            axios.post('https://665736c59f970b3b36c866df.mockapi.io/manager', {
                userName: userName,
                userEmail: userEmail,
                userImg: userImg,
                password: userPass,
                state: 'طالب',
                ideas: []
            }).then(
                logg(true),
                navigate('/regester')
            )
        }

    }

    return (

        < div className="flex flex-col items-center justify-center w-full h-full text-black " >
            <Alert
                showAlert={showAlert}
                alertMessage={alertMessage}
            />
            <div className="w-full max-w-md bg-stone-300 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">تسجيل جديد</h2>
                <div className="flex flex-col">
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="اسم المستخدم" className="bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" required />
                    <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="الايميل" className="bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" required />
                    <input value={userImg} onChange={(e) => setUserImg(e.target.value)} placeholder="الصورة الشخصية" className="bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                    <input value={userPass} onChange={(e) => setUserPass(e.target.value)} placeholder="كلمة السر" className="bg-gray-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" required />
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <label className="text-sm text-gray-900 cursor-pointer" htmlFor="remember-me">
                            تمتلك حساب؟
                        </label>

                        <Link className='underline underline-offset-2' to={'/regestration/true'} >تسجيل الدخول</Link>
                    </div>
                    <button
                        onClick={signup}
                        className="bg-stone-700 text-white font-bold py-2 px-4 rounded-md mt-4 transition ease-in-out duration-150">تسجيل جديد</button>


                </div>
            </div>
        </div >

    )
}

export default SignUp