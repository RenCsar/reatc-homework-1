import './estilo.css'
import image from "../../img/estudante.svg"

export default function Intro(){
    return(
        <>
            <section className='intro'>
                <div className='info-container'>
                    <h5>Best dental surgeons</h5>
                    <h1>25K+ STUDENTS TRUST US</h1>
                    <h4>Our goal is to make online education work for everyone</h4>
                    <div className='btn-info-container'>
                        <button className='quote'>Get Quote Now</button>
                        <button className='learn'>Learn More</button>
                    </div>
                </div>
                <div className='img-container'>
                    <img src={image} alt='detail'></img>
                </div>
            </section>
        </>
    )
}