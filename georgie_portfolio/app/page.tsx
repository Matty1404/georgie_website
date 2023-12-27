'use client'

import ParallaxWindow from '@/components/ParallaxWindow'
import AboutMe from '@/components/aboutme'
import MyAchievements from '@/components/achievements'
import MyEducation from '@/components/education'
import MyExperiences from '@/components/experiences'
import MyProjects from '@/components/projects'
import Image from 'next/image'


export default function Home() { 
  return (
    <div className='flex flex-col gap-16 mb-[10rem] overflow-x-hidden'>
      <AboutMe />
      <MyProjects />
      <MyAchievements />
      <MyExperiences />
      <MyEducation />
    </div>
  )
}
