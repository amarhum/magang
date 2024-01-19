import logo from '../aset/logo.svg'
import logo_putih from '../aset/logo_putih.svg'
import search from '../aset/search.svg'
import shop from '../aset/shoping.svg'
import frame from '../aset/Frame.png'
import person from '../aset/person.png'
import arrow from '../aset/arrow.svg'
import arrow_r from '../aset/arrow_right.svg'
import arrow_a from '../aset/arrow_abu.svg'
import frame2 from '../aset/Frame-2.svg'
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

const Home = ()=> {
    const navigate = useNavigate()
    const  [cari , setCari] = useState(false)
    const nyari = ()=>{
        setCari(!cari)
    }
    return(
        <>
            <div className='h-lvh'>
                <div className="container py-6 px-12 font-inter text-sm bg-abu ">
                        <div className='flex justify-between'>
                            <div className='ml-10 hover{cursor:pointer}'>
                                <ul  className='flex gap-10'>
                                    <li className ="font-bold"><a href='/'>HOME</a></li>
                                    <li><a href='/product'>PRODUCT</a></li>
                                    <li><a href='/blog'>BLOG</a></li> 
                                </ul>
                            </div>
                            <div className=''>
                                <img src={logo} alt='logo'/>
                            </div>
                            <div className='flex  gap-6 hover{cursor:ponter} mr-4'>
                                <img onClick={nyari} className='hover:cursor-pointer' src={search} alt='logo'/>
                                <img onClick={()=>navigate('/cart')} className='cursor-pointer' src={shop} alt='logo'/>
                                <button onClick={()=> navigate('/contact')} className=' border border-black rounded-full px-8 py-2 '> CONTACT</button>
                            </div>
                            {cari && <div class="absolute ml-[660px] mt-[6px] flex border h-10 w-64 border-black rounded-full bg-white overflow-hidden ">
                            <div class=" place-items-center h-full w-12 text-black">
                                <img src={search} alt=''/>   
                            </div>
                                <input class=" h-full w-full outline-none text-sm  text-black pr-4" type="text" placeholder="Search Something" /> 
                            </div>}
                        </div>    
                </div>
                        {/* bagian card */} 
                <div className='container py-6 px-12 bg-abu '>
                    <div className='grid grid-cols-2 ml-8 mt-5'>
                            <div className=' mt-20' >
                                <p className='text-5xl font-fair text-ijo-tua'>Best plant you can put on your desk</p>
                                <p className='mt-4 text-sm'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                                </p>
                                <a href='#more'>
                                <button  className='border flex text-ijo-muda border-black rounded-full px-8 py-3 mt-10'>View detail
                                    <img className='ml-2' src={arrow} alt=''/>
                                </button>
                                </a>
                            </div>
                            <div className=''>
                                <img className='w-72 absolute  ml-28' src={frame}  alt=''/>
                                <img className='absolute w-80 ml-36 mt-3' src={person} alt=''/>
                            </div>
                        </div>
                </div>
                    {/* Bagian card 2 */}
                <section id='more' className='container  h-full rounded-t-3xl grid grid-cols-2 '>
                    <div className=' '>
                        <img className=' w-9/12 m-20' src={frame2}  alt=''/>
                    </div>
                    <div className='mt-52  px-12'>
                        <p className='text-5xl font-fair text-ijo-tua'>Our best product</p>
                        <p className='mt-4 text-sm'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        <a href='#tanaman'>
                            <button className='border flex text-ijo-muda border-black rounded-full px-8 py-3 mt-10'>View detail
                                    <img className='ml-3 mt-2' src={arrow_r} alt=''/>
                            </button>
                        </a>
                    </div>
                </section>

                    {/* bagian tanaman */}
                <div id='tanaman' className='rounded-t-3xl  container py-6 px-16 bg-abu'>
                    <div className='grid grid-rows-3 grid-cols-4 gap-4 hover{cursor:pointer}'>
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
                    <button onClick={()=>navigate('/product')} className='border  flex bg-ijo2 text-crem  rounded-full px-8 py-3 mt-10'>
                        View detail
                        <img className='ml-3 mt-2 ' src={arrow_a} alt=''/>
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
export default Home