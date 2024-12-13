import React from 'react'
import { Link } from "react-router-dom"
import {HiOutlineArrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>ABOUT US</h1>
                    <p>The only thing we are serious about is food.</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tenetur eius dolorem quibusdam cumque eos omnis atque alias? At consequatur nemo sapiente aliquam earum dolore, natus quia, error recusandae praesentium, ipsum aperiam aliquid debitis nesciunt. Iusto a quo non similique fuga quisquam harum nisi, veritatis delectus quos? Iste, tempore ipsam?
                </p>
                <Link to={"/"}>Explore Menu <span>
                    <HiOutlineArrowRight />
                    </span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About