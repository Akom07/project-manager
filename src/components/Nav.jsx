import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <div className=" h-full">
            <div className='flex flex-col gap-4'>
                <button className='bg-stone-700 rounded-xl btn text-white' onClick={() => navigate('/table')} >قائمة الافكار</button>
                {localStorage.getItem('islogin') != 'true'
                    ? <button className='bg-stone-700 rounded-xl btn text-white' onClick={() => navigate('/regester')}> التسجيل</button >
                    : <>
                        <button className='bg-stone-700 rounded-xl btn text-white' onClick={logout}>تسجيل الخروج</button>
                        <button className='bg-stone-700 rounded-xl btn text-white' onClick={() => navigate('/add')}> اضافة فكرة</button>
                        {localStorage.getItem('isAdmin') == "اداري" ? <>
                            <button className='bg-stone-700 rounded-xl btn text-white' onClick={() => navigate('/student')} >قائمة الطلاب</button>
                            <button className='bg-stone-700 rounded-xl btn text-white' onClick={() => navigate('/ideaState')} >حالة الافكار</button>
                        </> : ""}</>}
            </div>
        </div >
    )
}

export default Nav