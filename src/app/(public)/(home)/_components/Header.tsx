import { arialBlackFont } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import React from 'react'

export const Header = ({ top, main }: { top: string; main: string }) => {
  return (
    <div className="leading-none">
      <span className="text-[16px] font-light">{top}</span>
      <h3 className={cn("text-[32px] font-bold", arialBlackFont.className)}>{main}</h3>
    </div>
  )
}