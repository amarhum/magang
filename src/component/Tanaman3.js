import logo from '../aset/logo.svg'
import search from '../aset/search.svg'
import shop from '../aset/shoping.svg'
import logo_putih from '../aset/logo_putih.svg'
import arrow_r from '../aset/arrow_right.svg'
import person1 from '../aset/aset_detail/person1.svg'
import person2 from '../aset/aset_detail/person2.svg'
import person3 from '../aset/aset_detail/person3.svg'
import star from '../aset/aset_detail/star.svg'
import shopG from '../aset/aset_detail/shopp_gray.svg'
import frame1 from '../aset/aset_detail/frame1_detail.svg'
import tanaman1 from '../aset/aset_tanaman/tanaman1.svg'
import tanaman2 from '../aset/aset_tanaman/tanaman2.svg'
import tanaman3 from '../aset/aset_tanaman/tanaman3.svg'
import tanaman4 from '../aset/aset_tanaman/tanaman4.svg'
import harga from '../aset/aset_detail/harga.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Tanaman3 = ()=>{

    const [count , setCount] = useState(0)

    const navigate = useNavigate()
    return(
        <>
        <div>
                <div className="container py-6 px-12 font-inter text-sm bg-abu ">
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
                                    <div className='flex  gap-6 hover{cursor:ponter} mr-4'>
                                        <img src={search} alt='logo'/>
                                        <img src={shop} alt='logo'/>
                                        <button onClick={()=> navigate('/contact')} className=' border border-black rounded-full px-8 py-2 '> CONTACT</button>
                                    </div>
                                </div>    
                </div>
                {/* bagian tanaman */}
                <div className='flex container py-6 px-[70px] font-inter text-sm bg-abu'>
                    <img className=' mr-10' src={frame1} alt='' />
                    <img className='mb-[60px] ' src={tanaman3} alt='' />
                    <div className='ml-[40px] mt-[20px]'>
                        <p className='font-inter text-sm text-ijo_c'>Tropical</p>
                        <h1 className='font-fair text-[48px] mt-4 text-ijo-tua'>Tanaman Aglaonema</h1>
                        <img className='mt-6 ml-2' src={harga} alt='' />
                        <div className='mt-8 ml-4'>
                            <p className='mb-4 text-sm font-inter font-bold'>pot color</p>
                            <button className='mr-4 hover:bg-ijo-tua hover:text-white text-ijo-tua border border-ijo-tua rounded-full py-2 px-4 font-inter'>white</button>
                            <button className='mr-4 hover:bg-ijo-tua hover:text-white text-ijo-tua border border-ijo-tua rounded-full py-2 px-4 font-inter'>orange</button>
                            <button className='border mr-4 hover:bg-ijo-tua hover:text-white text-ijo-tua border-ijo-tua rounded-full py-2 px-4 font-inter'>black</button>
                        </div>
                        <div className='mt-8 ml-4'>
                            <p className='mb-4 text-sm font-inter font-bold'>Package</p>
                            <button className='mr-4 hover:bg-ijo-tua hover:text-white text-ijo-tua border border-ijo-tua rounded-full py-2 px-4 font-inter'>Plant + Care</button>
                            <button className='mr-4 hover:bg-ijo-tua hover:text-white text-ijo-tua border border-ijo-tua rounded-full py-2 px-4 font-inter'>Plant + care + additional pot</button>
                            <button className='border mr-4 hover:bg-ijo-tua hover:text-white text-ijo-tua border-ijo-tua rounded-full py-2 px-4 font-inter'>Plant Only</button>
                        </div>
                        <div>
                            <p className='ml-[18px] mt-6 text-sm font-inter font-bold'>Quantity  </p>
                            <div className='flex border w-[98px] mt-4 ml-4  rounded-full border-ijo-tua py-2 px-4'>
                                <p onClick={()=> setCount(count-1)} className='text-lg mr-[5px] hover:cursor-pointer'>-</p>
                                <div className='h-[16px] ml-[5px] mr-[5px] mt-[6px] border border-gray'></div>
                                <p className='mt-[4px] mr-[5px] ml-[5px] '>{count}</p>
                                <div className='h-[16px] border-gray ml-[5px] mt-[6px] mr-[5px] border'></div>
                                <p onClick={()=> setCount(count+1)} className='text-lg ml-[5px]  hover:cursor-pointer'>+</p>
                            </div>
                        </div>
                        <button className='flex justify-center w-[562px] gap-[4px] mt-[52px] h-[56px] border bg-ijo-tua rounded-full'>
                            <img className='mt-4' src={shopG} alt=''/>
                            <p className='text-crem mt-4'>get the product</p>
                        </button>
                        <div className='flex gap-2 '>
                            <button onClick={()=>navigate('#more')} className='border flex text-ijo-muda border-black rounded-full px-[40px] py-[19px] mt-10'>Tokopedia
                                    <img className='ml-3 mt-2' src={arrow_r} alt=''/>
                            </button>
                            <button onClick={()=>navigate('#more')} className='border flex text-ijo-muda border-black rounded-full px-[40px] py-[19px] mt-10'>Shopee
                                <img className='ml-3 mt-2' src={arrow_r} alt=''/>
                            </button>
                            <button onClick={()=>navigate('#more')} className='border flex text-ijo-muda border-black rounded-full px-[40px] py-[19px] mt-10'>Viwhatsapp
                                    <img className='ml-3 mt-2' src={arrow_r} alt=''/>
                            </button>
                        </div>
                    </div>
                </div>
                {/* bagian review */}
                <div className='grid grid-cols-2'>
                    <div className='py-6 px-12'>
                        <h1 className='text-[48px] font-fair'>Description</h1>
                        <p className='font-inter text-sm'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                        </p>
                    </div>
                    <div className='py-6 px-12'>
                        <h1 className='text-[48px] font-fair'>Review</h1>
                        <div className='h-[230px]'>
                            <div className='flex'>
                                <div className='mt-[50px] w-[385px] h-[385px] mr-4'>
                                    <img src={person1} alt='' />
                                </div>
                                <div>
                                    <div className='flex'>
                                        <p className='mr-4 text-sm font-fair font-bold'>David Russel</p>
                                        <img src={star} alt='' />
                                    </div>
                                    <div>
                                        <p className='mt-[20px]'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-[230px]'>
                            <div className='flex'>
                                <div className='mt-[50px] w-[385px] h-[385px] mr-4'>
                                    <img src={person2} alt='' />
                                </div>
                                <div>
                                    <div className='flex'>
                                        <p className='mr-4 text-sm font-fair font-bold'>Claire Maxwell</p>
                                        <img src={star} alt='' />
                                    </div>
                                    <div>
                                        <p className='mt-[20px]'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-[230px]'>
                            <div className='flex'>
                                <div className='mt-[50px] w-[385px] h-[385px] mr-4'>
                                    <img src={person3} alt='' />
                                </div>
                                <div>
                                    <div className='flex'>
                                        <p className='mr-4 text-sm font-fair font-bold'>Darek O’Connor</p>
                                        <img src={star} alt='' />
                                    </div>
                                    <div>
                                        <p className='mt-[20px]'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* bagian similar product */}
                 <div className='h-[800px] py-6 px-12 bg-abu rounded-t-3xl '>
                    <div className='flex justify-center mb-4'>
                        <h1 className='text-[48px] mt-5 font-fair text-ijo-tua'>Similiar Product</h1>
                    </div>
                    <div className='grid gap-4 grid-cols-4'>
                        <img src={tanaman1} alt='' />
                        <img src={tanaman2} alt='' />
                        <img src={tanaman3} alt='' />
                        <img src={tanaman4} alt='' />
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
export default Tanaman3