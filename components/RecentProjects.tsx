import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
    return (
        <section className='py-20' id="projects">
            <h1 className="heading">
                A small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map(({ id, title, desc, img, iconLists, link }) => (
                    <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                        <PinContainer
                            title={link}
                            href={link}
                        >
                            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl' style={{ backgroundColor: "#13162D" }}>
                                    <Image
                                        src="/bg.png"
                                        alt="background"
                                        width={30}
                                        height={30}
                                        className="object-cover md:object-contain"
                                    />
                                </div>

                                <Image
                                    src={img}
                                    alt={title}
                                    fill
                                    className="absolute z-10 bottom-0 md:object-cover object-contain"
                                />
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {desc}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <Image
                                                src={icon}
                                                alt={icon}
                                                width={40}
                                                height={40}
                                                className="p-2 object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                        <a href={link} target="_blank">
                                            Check Live Site
                                        </a>
                                    </p>
                                    <FaLocationArrow
                                        className='ms-3'
                                        color='#CBACF9'
                                    />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RecentProjects