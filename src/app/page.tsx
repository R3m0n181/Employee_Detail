'use client'
import D_card from '@/components/D_card'
import { gamerProfiles } from '@/utils/data'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [Count, setCount] = useState(0)

  const handleCardClick = (id: number) => {
    setCount(id);
  }
  return (
    <main className="grid grid-cols-4 gap-8 justify-items-center p-4 m-1">
      {gamerProfiles.map(gamerProfiles => (
        <Link href={'/DetailPage'} onClick={() => handleCardClick(gamerProfiles.userId)} key={gamerProfiles.userId}>
          <D_card 
            name={gamerProfiles.name}
            imgUrl={gamerProfiles.imgUrl}
            email={gamerProfiles.email}
            id={gamerProfiles.userId}
          />
        </Link>
      ))}
    </main>
  )
}
