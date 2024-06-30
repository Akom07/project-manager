import React, { useState } from 'react'
import Nav from '../components/Nav'
import Table from '../components/Table'
import Regester from './Regester'
import { useNavigate, useParams } from 'react-router-dom'
import ActionPage from './ActionPage'
import Student from '../components/Student'
import logo from '../assets/logo.svg'

function Landing() {
    const [search, setSearch] = useState("")

    const navigate = useNavigate()
    const { navSwitch } = useParams()
    return (
        <div className='w-full h-screen flex justify-center items-center bg-slate-800'>
            <div className='max-h-[90vh] min-h-[90vh] w-[95vw] overflow-hidden grid rounded-3xl grid-cols-12 grid-rows-12'>
                <div className=' bg-stone-300 col-start-1 row-start-2 col-end-3 row-end-13 w-full h-full'>
                    <Nav
                    />
                </div>
                <div className='bg-stone-300 col-start-1 row-start-1 justify-items-center grid w-full h-full col-end-3'>
                    <img className='flex self-center' src={logo} alt="" />
                </div>
                <div className='bg-stone-300 col-start-3 row-start-1 col-end-13'>
                    <div className='grid grid-cols-10 grid-rows-1 h-full items-center'>
                        <div className='max-sm:col-start-2 max-sm:col-end-9 col-start-3 col-end-7 h-full flex items-center'>
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='البحث' className='placeholder:text-black bg-slate-200 text-black p-2 w-full h-1/2 rounded-lg' />
                        </div>
                    </div>
                </div>
                <div className='bg-stone-400 col-start-3 row-start-2 col-end-13 row-end-13 justify-center items-center'>
                    {navSwitch == 'table' ? <Table search={search} />
                        : navSwitch == 'regester' ? <Regester />
                            : navSwitch == 'add' ? <ActionPage />
                                : navSwitch == 'detail' ? <ActionPage />
                                    : navSwitch == 'editing' ? <ActionPage />
                                        : navSwitch == 'ideaState' ? <ActionPage />
                                            : navSwitch == 'student' ? <Student search={search} />
                                                : <Table search={search} />}
                </div>

            </div>
        </div>
    )
}

export default Landing