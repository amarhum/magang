import logo from '../aset/logo.svg'
import search from '../aset/search.svg'
import shop from '../aset/shoping.svg'
import text1 from '../aset/aset_blog/text1.svg'
import arrowR from '../aset/aset_blog/arrow_right.svg'
import frame1 from '../aset/aset_blog/Frame1.svg'
import frame2 from '../aset/aset_blog/Frame2.svg'
import frame3 from '../aset/aset_blog/Frame3.svg'
import tech1 from '../aset/aset_blog/tech1.svg'
import tech2 from '../aset/aset_blog/tech2.svg'
import tech3 from '../aset/aset_blog/tech3.svg'
import tech4 from '../aset/aset_blog/tech4.svg'
import arrow_r from '../aset/arrow_right.svg'
import logo_putih from '../aset/logo_putih.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Blog = ()=> {
    const navigate = useNavigate()
    const  [cari , setCari] = useState(false)
    const nyari = ()=>{
        setCari(!cari)
    }
    return(
        <>
        <div>
            {/* Navbar */}
            <div className="container py-6 px-12 font-inter text-sm bg-abu h-full">
                 <div className='flex justify-between'>
                    <div className='ml-10 hover{cursor:pointer}'>
                        <ul  className='flex gap-10'>
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/product'>PRODUCT</a></li>
                            <li className ="font-bold"><a href='/blog'>BLOG</a></li> 
                        </ul>
                    </div>
                    <div className=''>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div className='flex gap-6 hover{cursor:ponter} mr-4'>
                        <img onClick={nyari} className='cursor-pointer' src={search} alt='logo'/>
                        <img onClick={()=> navigate('/cart')} className='cursor-pointer' src={shop} alt='logo'/>
                       <button onClick={()=> navigate('/contact')} className=' border border-black rounded-full px-8 py-2 '> CONTACT</button>
                    </div>
                    {cari && <div class="absolute ml-[660px] mt-[6px] flex border h-10 w-64 border-black rounded-full bg-transparent overflow-hidden ">
                            <div class=" place-items-center h-full w-12 text-black">
                                <img src={search} alt=''/>   
                            </div>
                            <input class=" h-full w-full outline-none text-sm bg-transparent text-black pr-4" type="text" placeholder="Search" /> 
                        </div>}
                </div>
            </div>
            {/* bagian banner */}
            <div>
                <div className='bg-bunga h-[585px] w-[1100px] rounded-lg bg-no-repeat mt-[33px] mx-[95px]'>
                    <div className='w-[507px]'>
                        <img className='pl-[48px] pt-[277px]' src={text1} alt='' />
                        <p className='pl-[48px] mt-2 text-4xl text-white font-fair'>List of flower  you can buy to decorize your space</p>
                        <p className='pl-[48px] mt-2 text-sm text-putih'>12 September 2023</p>
                    </div>
                    <div className='mt-4 w-[668px]'>
                        <p className='pl-[48px] text-sm text-putih'>sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                        </p>
                        <div className='mt-4'>
                            <a className='pl-[48px] text-putih text-sm' href='#featured'>Read ...</a>
                        </div>
                    </div>
                </div>
                <div id='featured' className='px-[90px] mt-[29px] flex'>
                    <h1 className='font-fair text-[32px] font-bold'>Featured</h1>
                    <div className='w-[820px] ml-7 h-0 text-gray border mt-6'></div>
                    <h2 className='ml-4 font-inter text-ijo-tua font-bold text-sm mt-3'>Featured</h2>
                    <img className='ml-4' src={arrowR} alt='' />
                </div>
                <div className='grid grid-cols-3 gap-2 mt-[48px] mx-[95px] hover:cursor-pointer '>
                    <div>
                        <img src={frame1} alt='' />
                    </div>
                    <div>
                        <img src={frame2} alt='' />
                    </div>
                    <div>
                        <img src={frame3} alt='' />
                    </div>
                </div>
                <div className='px-[90px] mt-[29px] flex'>
                    <h1 className='font-fair text-[32px] font-bold'>Tech</h1>
                    <div className='w-[820px] ml-7 h-0 text-gray border mt-6'></div>
                    <h2 className='ml-4 font-inter text-ijo-tua font-bold text-sm mt-3'>Featured</h2>
                    <img className='ml-4' src={arrowR} alt='' />
                </div>
                <div className='grid grid-cols-4 gap-2 mt-[48px] mx-[95px] hover:cursor-pointer '>
                    <div>
                        <img src={tech1} alt='' />
                    </div>
                    <div>
                        <img src={tech2} alt='' />
                    </div>
                    <div>
                        <img src={tech3} alt='' />
                    </div>
                    <div>
                        <img src={tech4} alt='' />
                    </div>
                </div>
            </div>
            {/* bagian footer */}
            <footer className='bg-ijo-tua py-6 px-12 mt-[80px] rounded-t-3xl'>
                    <div className='flex text-white'>
                        <div>
                            <div className='w-80 ml-4'>
                                <img src={logo_putih} alt=''/>
                                <p className='text-white'>Mangstore is the solution for high quality goods you need</p>
                            </div>
                        </div>
                        <div className='flex ml-44 gap-12'>
                            <div className=''>
                                <p className='font-fair text-base'>Mangstore</p>
                                <ul className='text-sm mt-4 font-inter'>
                                    <li><a href='/home'>Abaout Mangstore</a></li>
                                    <li><a href='/home'>Home</a></li>
                                    <li><a href='/home'>Product</a></li>
                                    <li><a href='/home'>Blog</a></li>
                                </ul>   
                            </div>
                            <div className=''>
                                <p className='font-fair text-base'>Social Media</p>
                                <ul className='text-sm mt-4 font-inter'>
                                    <li><a href='/home'>Istagram</a></li>
                                    <li><a href='/home'>Whatsapp</a></li>
                                    <li><a href='/home'>Linkedin</a></li>
                                    <li><a href='/home'>Twitter</a></li>
                                </ul>
                                
                            </div>
                            <div className=''>
                                <p className='font-fair text-base'>Buy</p>
                                <ul className='text-sm mt-4 font-inter'>
                                    <li><a href='/home'>Men's Wear</a></li>
                                    <li><a href='/home'>Woman's Wear</a></li>
                                    <li><a href='/home'>Kids Wear</a></li>
                                    <li><a href='/home'>Sport Wear</a></li>
                                    <li><a href='/home'>Shoes</a></li>
                                    <li><a href='/home'>Head wear</a></li>
                                </ul>
                                
                            </div>
                                <div className=''>
                                    <p className='font-fair text-base'>Find us in</p>
                                    <button onClick={()=>navigate('#more')} className='border flex text-white border-white rounded-full px-5 py-3 mt-4'>View detail
                                    <img className='ml-3 mt-2' src={arrow_r} alt=''/>
                            </button>
                            <button onClick={()=>navigate('#more')} className='border flex text-white border-white rounded-full px-5 py-3 mt-2'>View detail
                                    <img className='ml-3 mt-2' src={arrow_r} alt=''/>
                            </button>
                                </div>
                        </div>
                        
                    </div>
                    <span class="block text-sm mt-6 text-white font-lato sm:text-center ">© 2023 <a href="https://mangcoding.com/" class="hover:underline">Mangcoding</a>. All Rights Reserved.</span>
            </footer>
        </div>
        
        </>
    )
}
export default Blog