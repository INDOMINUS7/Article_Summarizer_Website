import { logo} from '../assets';


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-4' >
            <img src= {logo} alt="sumz_logo" className='w-28 object-contain opacity-90 mx-5 '/>


            <button type ="button" 
            onClick={() => window.open('https://github.com/INDOMINUS7/Article_Summarizer')}
            className='black_bt opacity-90 mx-7'>

                Github

            </button>


        </nav>


        <h1 className='head_text'>
            Summarise Articles with <br
            className='max-md:hidden' /> {/*only breaks on small devices not on large*/}

            <span className='orange_gradient'>
                GPT-4 
            </span>


        </h1 >

        <h2 className='desc'>
            Simplify reading lengthy articles using Sumz,
            an article summarizer that transforms these articles into clear and 
            concise summaries


        </h2>

    </header>
  )
}

export default Hero