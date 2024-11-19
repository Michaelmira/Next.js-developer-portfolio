import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
            <div className="flex flex-col items-center" >
                <h1 className="heading lg:max-w-[45vw]">
                    Let&apos;s Elevate Your <span className="text-purple" >Brand or Workplace</span> to New Heights!?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help you achieve your goals. 
                </p>
                <a href="mailto:michaelmirisciotta@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Michael Mirisciotta

                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <a 
                        href={profile.url}
                        key={profile.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                      >
                            <Image src={profile.img} alt={`Visit my ${profile.url.split('.')[1]}`}  width={20} height={20}/>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer