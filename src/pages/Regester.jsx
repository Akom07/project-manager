import React, { useState } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Alert from '../components/Alert'

function Regester() {
    const [logging, setlogging] = useState(true)

    return (


        <div className=' flex justify-center items-center flex-col text-black'>
            <div className='flex items-center justify-center gap-4 my-4'>
                <label htmlFor="reg">تسجيل جديد</label>
                <input
                    type="checkbox"
                    checked={logging}
                    onChange={() => setlogging(!logging)}
                    className="toggle"
                    id='reg'
                />
                <label htmlFor="reg">تسجيل الدخول</label>
            </div>
            {logging ? <Login alert={<Alert />} /> : <SignUp logg={setlogging} alert={<Alert />} />}

        </div>
    )
}

export default Regester