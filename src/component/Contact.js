
import logo_putih from '../aset/logo_putih.svg'
import arrow_r from '../aset/arrow_right.svg'
import logo_abu from '../aset/logo_abu.svg'
import wa from '../aset/aset_contact/wa.svg'
import ig from '../aset/aset_contact/instagram.svg'
import linkdin from '../aset/aset_contact/linkdin.svg'
import twit from '../aset/aset_contact/twit.svg'
import surat from '../aset/aset_contact/surat.svg'
import telfon from '../aset/aset_contact/tefon.svg'
import lokasi from '../aset/aset_contact/lokasi.svg'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Contact = ()=>{
    const navigate = useNavigate()
    return(
        <>
            <div>
                {/* bagian navbar */}
                    <Navbar />
                {/* bagian contact */}
                <div className='flex justify-center m-14'>
                    <div className='py-6 flex px-12 w-[931px] pt-0 pl-0 rounded-2xl h-[500px]  bg-abu'>  
                         {/*bagian logo  */}
                        <div className='w-[382px] mx-2 my-1 rounded-2xl bg-ijo2 h-[489px]'>
                            <div>
                                <img className='pt-[57px] pl-[80px]' src={logo_abu} alt=''/>
                            </div>
                            <div className='flex justify-center gap-4 mt-4 mr-3'>
                                <img src={ig} alt='' />
                                <img src={wa} alt='' />
                                <img src={linkdin} alt='' />
                                <img src={twit} alt='' />
                            </div>
                            <div className=' px-[39px] mt-[57.5px]'>
                                <div className='flex mb-5'>
                                    <img className='mr-4' src={surat} alt='' />
                                    <p className='text-crem'>contact@mangstore.com</p>
                                </div>
                                <div className='flex mb-5'>
                                    <img className='mr-4' src={telfon} alt='' />
                                    <p className='text-crem'>(+62) 857 123 321 1</p>
                                </div>
                                <div className='flex mb-5'>
                                    <img className='mr-4 mb-[70px]' src={lokasi} alt='' />
                                    <p className='text-crem'>Jalan Melati No. 123 Kelurahan Bunga Indah Kecamatan Kota Bahagia Kota Semuanya Bahagia Provinsi Damai Sejahtera Kode Pos: 12345
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* bagian input */}
                        <div className='ml-[40px] mt-[80px]'>
                            <div className='flex'>
                                <div className='mr-[40px]'>
                                    <p>First name</p>
                                    <input className='outline-none bg-transparent' type='text' />
                                    <div className='w-[220px] border border-black'></div>
                                </div>
                                <div>
                                    <p>Last name</p>
                                    <input className='outline-none bg-transparent' type='text' />
                                    <div className='w-[220px] border border-black'></div>
                                </div>
                            </div>
                            <div className='flex mt-[48px]'>
                                <div className='mr-[40px]'>
                                    <p>Email</p>
                                    <input className='outline-none bg-transparent' type='text' />
                                    <div className='w-[220px] border border-black'></div>
                                </div>
                                <div>
                                    <p>Phone Number</p>
                                    <input className='outline-none bg-transparent' type='number' />
                                    <div className='w-[220px] border border-black'></div>
                                </div>
                            </div>
                                <div className='mt-[48px]'>
                                    <p>message</p>
                                    <input className='outline-none bg-transparent w-[460px]' type='message' placeholder='Write your message' />
                                    <div className='w-[473px] border border-black'></div>
                                </div>
                                <div>
                                    <button className='px-[36px] float-right mt-6 py-4 text-crem bg-ijo2 border rounded-full'>
                                    Send Message
                                    </button>
                                </div>
                        </div>
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
export default Contact