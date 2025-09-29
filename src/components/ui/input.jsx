import * as React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-12 w-full rounded-xl border border-[#262626] bg-[#1a1a1a] px-4 text-base text-white placeholder:text-[#a3a3a3] focus-visible:border-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
