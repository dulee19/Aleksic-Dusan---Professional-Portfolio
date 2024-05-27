import { socialMedia } from '@/data'
import Image from 'next/image'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'

const Footer = () => {
    return (
        <footer className='w-full pt-20 pb-10' id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <Image
                    src="/footer-grid.svg"
                    alt="Grid"
                    width={100}
                    height={100}
                    className='w-full h-full opacity-50'
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className='heading lg:max-w-[45vw]'>Ready to take {" "}
                    <span className='text-purple'>your </span>
                    digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="mailto:adusan53@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className="md:text-base mb-3 md:my-0">
                    Copyright &copy; {new Date().getFullYear()} |
                    Dušan Aleksić
                </p>

                <div className="flex items-center md:gap-3 gap-6 relative z-10">
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <a href={profile.link} className="cursor-pointer" target="_blank" aria-label="Socail Media">
                                <Image
                                    src={profile.img}
                                    alt={profile.img}
                                    width={25}
                                    height={25}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer