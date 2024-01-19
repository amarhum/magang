import logo from '../aset/logo.svg'
import search from '../aset/search.svg'
import shop from '../aset/shoping.svg'
import arrow_up from '../aset/arrow-up.svg'
import logo_putih from '../aset/logo_putih.svg'
import arrow_r from '../aset/arrow_right.svg'
import no from '../aset/no.svg'
import tanaman1 from '../aset/aset_tanaman/tanaman1.svg'
import tanaman2 from '../aset/aset_tanaman/tanaman2.svg'
import tanaman3 from '../aset/aset_tanaman/tanaman3.svg'
import tanaman4 from '../aset/aset_tanaman/tanaman4.svg'
import tanaman5 from '../aset/aset_tanaman/tanaman5.svg'
import tanaman6 from '../aset/aset_tanaman/tanaman6.svg'
import tanaman7 from '../aset/aset_tanaman/tanaman7.svg'
import tanaman8 from '../aset/aset_tanaman/tanaman8.svg'
import tanaman9 from '../aset/aset_tanaman/tanaman9.svg'
import tanaman10 from '../aset/aset_tanaman/tanaman10.svg'
import tanaman11 from '../aset/aset_tanaman/tanaman11.svg'
import tanaman12 from '../aset/aset_tanaman/tanaman12.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



const Product = ()=>{
    const navigate = useNavigate()

    const [dropdown, isdropdown] = useState(false)
    const down = ()=>{
        isdropdown(!dropdown)
    }
    const [dropdown2, isdropdown2] = useState(false)
    const down2 = ()=>{
        isdropdown2(!dropdown2)
    }
    const [dropdown3, isdropdown3] = useState(false)
    const down3 = ()=>{
        isdropdown3(!dropdown3)
    }

    return(

        <>
        <div>
                <div className="container py-6 px-12 font-inter text-sm bg-abu h-full">
                        <div className='flex justify-between'>
                            <div className='ml-10 hover{cursor:pointer}'>
                                <ul  className='flex gap-10'>
                                    <li><a href='/'>HOME</a></li>
                                    <li className ="font-bold"><a href='/product'>PRODUCT</a></li>
                                    <li><a href='/blog'>BLOG</a></li> 
                                </ul>
                            </div>
                            <div className=''>
                                <img src={logo} alt='logo'/>
                            </div>
                            <div className='flex gap-6 hover{cursor:ponter} mr-4'>
                                <img src={search} alt='logo'/>
                                <img src={shop} alt='logo'/>
                                <button onClick={()=> navigate('/contact')} className=' border border-black rounded-full px-8 py-2 '> CONTACT</button>
                            </div>
                        </div>
                </div>
                {/* bagian card */}
                <div className='container py-6 px-12 bg-abu'>
                    <div className=' ml-8'>
                        <div className=' w-3/6' >
                            <p className='text-5xl font-fair text-ijo-tua'>Our Product</p>     
                             <p className='mt-4 text-sm'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.

                            </p>
                        </div>
                    </div>
                </div>

                {/* Bagian Tanaman, search bar dan kategori*/}
                <div className='rounded-t-3xl  container py-6 px-16 '>

                        {/* search bar */}
                        <div class='mb-6 mt-12 flex justify-between w-auto '>
                            <div class="relative flex border h-10 w-64 border-black rounded-full bg-white overflow-hidden ">
                                <div class=" place-items-center h-full w-12 text-black">
                                    <img src={search} alt=''/>   
                                </div>
                                <input
                                class=" h-full w-full outline-none text-sm  text-black pr-4"
                                type="text"
                                placeholder="Search" /> 
                            </div>

                            {/* bagian kategori */}
                            <div className='flex gap-4'>
                                <div>
                                    <div onClick={down} className='relative flex px-4 pt-2 text-sm border h-10 w-[268px] border-black rounded-full bg-white cursor-pointer '>
                                            <p className='font-bold'>Category</p>
                                            <div className='border border-black h-[25px] ml-4'/>
                                            <p className='ml-2'>home decoration</p>
                                            <img id='arrow' className='ml-3 mb-2' src={arrow_up} alt=''/>                      
                                    </div>
                                    {dropdown && <div id='dropdown1' className='absolute px-8 bg-abu w-[214px] border-gray-400 text-sm mt-4 ml-[50px] border rounded-[20px] cursor-pointer'>
                                        <h1 className='mb-4 mt-4 hover:font-bold'>Home Decoration</h1>
                                        <div className='border border-black border-opacity-25 w-[140px] '/>
                                        <h1 className='mb-4 mt-4 hover:font-bold'>Outdoor Plant</h1>
                                        <div className='border border-black border-opacity-25 w-[140px] '/>
                                        <h1 className='mb-4 mt-4 hover:font-bold'>Fruit Plant</h1>
                                        <div className='border border-black border-opacity-25 w-[140px] '/>
                                        <h1 className='mb-4 mt-4 hover:font-bold'>Desk Plant</h1>
                                        <div className='border border-black border-opacity-25 w-[140px] '/>
                                        <h1 className='mb-4 mt-4 hover:font-bold'>Cactus</h1>
                                    </div>}
                                </div>
                                <div>
                                    <div onClick={down2} className='relative flex px-4 pt-2  text-sm border h-10 w-[204px] border-black rounded-full bg-white cursor-pointer'>
                                        <p className='font-bold'>Price</p>
                                        <div className='border border-black h-[25px] ml-4'/>
                                        <p className='ml-2'>$200 - $500</p>
                                        <img className='ml-3 mb-2' src={arrow_up} alt=''/>
                                    </div>
                                    {dropdown2 && <div id='dropdown2' className='absolute px-10 bg-abu w-[190px] border-gray-400 text-sm mt-4 ml-[17px] border rounded-[20px] cursor-pointer'>
                                        <div className='mb-4 mt-4 hover:font-bold'>$50 - $200</div>
                                        <div className='border border-black border-opacity-25 w-[120px] '/>
                                        <div className='mb-4 mt-4 hover:font-bold'>$200 - $500</div>
                                        <div className='border border-black border-opacity-25 w-[120px] '/>
                                        <div className='mb-4 mt-4 hover:font-bold'>$500 - $1000</div>
                                        <div className='border border-black border-opacity-25 w-[120px] '/>
                                        <div className='mb-4 mt-4 hover:font-bold'>$1000 - $1500</div>
                                        <div className='border border-black border-opacity-25 w-[120px] '/>
                                        <div className='mb-4 mt-4 hover:font-bold'>$1500 - $2000</div>
                                    </div>}
                                </div>
                                <div>
                                    <div onClick={down3} className='relative flex px-4 pt-2 text-sm border h-10 w-[226px] border-black rounded-full bg-white cursor-pointer'>
                                        <p className='font-bold'>Short by</p>
                                        <div className='border border-black h-[25px] ml-4'/>
                                        <p className='ml-2'>Newest first</p>
                                        <img className='ml-3 mb-2' src={arrow_up} alt=''/>
                                    </div>
                                    {dropdown3 && <div id='dropdown3' className='absolute px-10 bg-abu w-[190px] text-sm border-gray-400 mt-4 ml-[30px] border rounded-[20px] cursor-pointer'>
                                        <div className='mb-4 mt-4 hover:font-bold'>Newest first</div>
                                        <div className='border border-black border-opacity-25 w-[100px] '/>
                                        <div className='mb-4 mt-4 hover:font-bold'>Newest first</div>
                                        <div className='border border-black border-opacity-25 w-[100px] '/>
                                        <div className='mb-4 mt-4 hover:font-bold'>Newest first</div>
                                        <div className='border border-black border-opacity-25 w-[100px] '/>
                                        <div className='mb-4 mt-4 hover:font-bold'>Newest first</div>
                                        <div className='border border-black border-opacity-25 w-[100px] '/>
                                        <div className='mb-4 mt-4 hover:font-bold'>Newest first</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        
                        {/* bagian tanaman */}
                    <div className='grid grid-rows-3 grid-cols-4 gap-4 cursor-pointer'>
                        <div>
                            <a href='/Tanaman1'>
                                <img src={tanaman1} alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='/Tanaman2'>
                                <img src={tanaman2} alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='/Tanaman3'>
                                <img src={tanaman3} alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='/Tanaman4'>
                                <img src={tanaman4} alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='/Tanaman5'>
                                <img src={tanaman5} alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='/Tanaman6'>
                                <img src={tanaman6} alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='/Tanaman7'>
                                <img src={tanaman7} alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='/Tanaman8'>
                                <img src={tanaman8} alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='/Tanaman9'>
                                <img src={tanaman9} alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='/Tanaman10'>
                                <img src={tanaman10} alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='/Tanaman11'>
                                <img src={tanaman11} alt=''/>
                            </a>
                        </div>
                        <div>
                            <a href='/Tanaman12'>
                                <img src={tanaman12} alt=''/>
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                    <button onClick={()=>navigate('/product')} className=' flex text-crem  px-8 py-3 mt-10'>
                        <img className='ml-3 mt-2 ' src={no} alt=''/>
                    </button>
                    </div>
                </div>

                {/* bagian footer */}
                <footer className='bg-ijo-tua py-6 px-12 rounded-t-3xl'>
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
export default Product