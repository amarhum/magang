import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logo from '../aset/logo.svg'
import search from '../aset/search.svg'
import shop from '../aset/shoping.svg'
import shopG from '../aset/aset_detail/shopp_gray.svg'
import logo_putih from '../aset/logo_putih.svg'
import arrow_r from '../aset/arrow_right.svg'
import tanaman1 from '../aset/aset_cart/tanaman1.svg'
import tanaman2 from '../aset/aset_cart/tanaman2.svg'
import tanaman3 from '../aset/aset_cart/tanaman3.svg'
import sampah from '../aset/aset_cart/sampah.svg' 

const Cart = ()=>{
    const navigate = useNavigate()
    const [count , setCount] = useState(0)
    const [count2 , setCount2] = useState(0)
    const [count3 , setCount3] = useState(0)
    return(
        <>
        <div>
            {/* bagian navbar */}
            <div className="container py-6 px-12 font-inter text-sm bg-abu h-full">
                            <div className='flex justify-between'>
                                <div className='ml-10 hover{cursor:pointer}'>
                                    <ul  className='flex gap-10'>
                                        <li><a href='/'>HOME</a></li>
                                        <li className =""><a href='/product'>PRODUCT</a></li>
                                        <li><a href='/blog'>BLOG</a></li> 
                                    </ul>
                                </div>
                                <div className=''>
                                    <img src={logo} alt='logo'/>
                                </div>
                                <div className='flex gap-6 hover{cursor:ponter} mr-4'>
                                    <img src={search} alt='logo'/>
                                    <img className='' src={shop} alt='logo'/>
                                    <button onClick={()=> navigate('/contact')} className=' border border-black rounded-full px-8 py-2 '> CONTACT</button>
                                </div>
                            </div>
            </div>
            {/* bagian cart */}
            <div className='container py-6 px-20 flex'>
                <div>
                    <div>
                        <h1 className='text-[48px] font-fair'>Your Cart</h1>
                        <div className='flex mt-[39px]'>
                            <input id="checkbox" type="checkbox" className="w-4 h-4 border border-ijo2 ml-9 mt-[70px]" />
                            <img className='ml-[36px]' src={tanaman1} alt=''/>
                            <div className='ml-[28px]'>
                                <h1 className='text-[24px] font-fair'>Tanaman Aglaonema</h1>
                                <p className='font-inter text-sm text-ijo_c'>Orange, Plant + care + Additional Pot</p>
                                <div className='flex mt-[65px]'>
                                    <p className='text-inter text-[24px] font-bold text-ijo-tua'>Rp. 500.000,-</p>
                                    <p className='line-through font-inter text-sm text-ijo_c mt-3 ml-3'>Rp. 500.000,-</p>
                                    <div className='flex ml-[100px]'>
                                        <img src={sampah} alt='' />
                                        <div className='flex border w-[79px] mt-1 ml-4  rounded-full border-ijo-tua py-[4px]'>
                                            <p onClick={()=> setCount(count-1)} className='text-lg mr-[5px] ml-[6px] hover:cursor-pointer'>-</p>
                                            <div className='h-[16px] ml-[5px] mr-[5px] mt-[6px] border border-gray'></div>
                                            <p className='px-[3px] '>{count}</p>
                                            <div className='h-[16px] border-gray ml-[5px] mt-[6px] mr-[5px] border'></div>
                                            <p onClick={()=> setCount(count+1)} className='text-lg ml-[4px]  hover:cursor-pointer'>+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='w-[750px] border border-abu2 h-0 mt-2'></div>
                    </div>
                    <div>
                        <div className='flex mt-[48px]'>
                            <input id="checkbox" type="checkbox" className="w-4 h-4 border border-ijo2 ml-9 mt-[70px]" />
                            <img className='ml-[36px]' src={tanaman2} alt=''/>
                            <div className='ml-[28px]'>
                                <h1 className='text-[24px] font-fair'>Tanaman Aglaonema</h1>
                                <p className='font-inter text-sm text-ijo_c'>Orange, Plant + care + Additional Pot</p>
                                <div className='flex mt-[65px]'>
                                    <p className='text-inter text-[24px] font-bold text-ijo-tua'>Rp. 500.000,-</p>
                                    <p className='line-through font-inter text-sm text-ijo_c mt-3 ml-3'>Rp. 500.000,-</p>
                                    <div className='flex ml-[100px]'>
                                        <img src={sampah} alt='' />
                                        <div className='flex border w-[79px] mt-1 ml-4  rounded-full border-ijo-tua py-[4px]'>
                                            <p onClick={()=> setCount2(count2-1)} className='text-lg mr-[5px] ml-[6px] hover:cursor-pointer'>-</p>
                                            <div className='h-[16px] ml-[5px] mr-[5px] mt-[6px] border border-gray'></div>
                                            <p className='px-[3px] '>{count2}</p>
                                            <div className='h-[16px] border-gray ml-[5px] mt-[6px] mr-[5px] border'></div>
                                            <p onClick={()=> setCount2(count2+1)} className='text-lg ml-[4px]  hover:cursor-pointer'>+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='w-[750px] border border-abu2 h-0 mt-2'></div>
                    </div>
                    <div>
                        <div className='flex mt-[48px]'>
                            <input id="checkbox" type="checkbox" className="w-4 h-4 border border-ijo2 ml-9 mt-[70px]" />
                            <img className='ml-[36px]' src={tanaman3} alt=''/>
                            <div className='ml-[28px]'>
                                <h1 className='text-[24px] font-fair'>Tanaman Aglaonema</h1>
                                <p className='font-inter text-sm text-ijo_c'>Orange, Plant + care + Additional Pot</p>
                                <div className='flex mt-[65px]'>
                                    <p className='text-inter text-[24px] font-bold text-ijo-tua'>Rp. 500.000,-</p>
                                    <p className='line-through font-inter text-sm text-ijo_c mt-3 ml-3'>Rp. 500.000,-</p>
                                    <div className='flex ml-[100px]'>
                                        <img src={sampah} alt='' />
                                        <div className='flex border w-[79px] mt-1 ml-4  rounded-full border-ijo-tua py-[4px]'>
                                            <p onClick={()=> setCount3(count3-1)} className='text-lg mr-[5px] ml-[6px] hover:cursor-pointer'>-</p>
                                            <div className='h-[16px] ml-[5px] mr-[5px] mt-[6px] border border-gray'></div>
                                            <p className='px-[3px] '>{count3}</p>
                                            <div className='h-[16px] border-gray ml-[5px] mt-[6px] mr-[5px] border'></div>
                                            <p onClick={()=> setCount3(count3+1)} className='text-lg ml-[4px]  hover:cursor-pointer'>+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[750px] border border-abu2 h-0 mt-2'></div>
                    </div>
                </div>
                <div>
                    <div className='container rounded-lg mt-[98px] bg-abu w-[380px] ml-3 h-[200px]'>
                        <div className='px-4 py-2'>
                            <h1 className='font-fair text-[24px]'>Summary</h1>
                            <div className='flex justify-between text-sm'>
                                <p className=''>Tax</p>
                                <p>Rp. 20.000</p>
                            </div>
                            <div className='flex justify-between text-sm mt-3'>
                                <p className=''>Service</p>
                                <p>Rp. 20.000</p>
                            </div>
                            <div className='flex justify-between text-sm mt-3'>
                                <p className=''>Shipping</p>
                                <p>Rp. 20.000</p>
                            </div>
                            <div className='border border-abu2 w-[270px] mt-2'></div>
                            <div className='flex justify-between mt-4'>
                                <p className='text-sm '>Total</p>
                                <p className=' text-[24px] font-inter text-ijo-tua'>Rp. 580.000</p>
                            </div>
                        </div>

                    </div>
                    <button className='flex justify-center w-[380px] gap-[4px] mt-[22px] h-[56px] border ml-3 bg-ijo-tua rounded-full'>
                    <img className='mt-4' src={shopG} alt=''/>
                    <p className='text-crem mt-4'>get the product</p>
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
export default Cart