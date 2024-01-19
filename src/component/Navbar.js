import search from '../aset/search.svg'
import shop from '../aset/shoping.svg'
import logo from '../aset/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ()=>{
    const navigate = useNavigate()
    const  [cari , setCari] = useState(false)
    const nyari = ()=>{
        setCari(!cari)
    }
    return (
        <>
            <div className="container py-6 px-12 font-inter text-sm bg-abu h-full">
                    <div className='flex justify-between'>
                        <div className='ml-10 hover{cursor:pointer}'>
                            <ul  className='flex gap-10'>
                                <li><a href='/'>HOME</a></li>
                                <li><a href='/product'>PRODUCT</a></li>
                                <li><a href='/blog'>BLOG</a></li> 
                            </ul>
                        </div>
                        <div className=''>
                            <img src={logo} alt='logo'/>
                        </div>
                        <div className='flex gap-6 hover{cursor:ponter} mr-4'>
                            <img onClick={nyari} className='hover:cursor-pointer' src={search} alt='logo'/>
                            <img src={shop} alt='logo'/>
                        <button onClick={()=> navigate('/contact')} className=' border bg-black text-white rounded-full px-8 py-2 '> CONTACT</button>
                        </div>
                        {cari && <div class="absolute ml-[660px] mt-[6px] flex border h-10 w-64 border-black rounded-full bg-transparent overflow-hidden ">
                            <div class=" place-items-center h-full w-12 text-black">
                                <img src={search} alt=''/>   
                            </div>
                            <input class=" h-full w-full outline-none text-sm bg-transparent text-black pr-4" type="text" placeholder="Search" /> 
                        </div>}
                    </div>
                </div>
        </>
    )
}
export default Navbar