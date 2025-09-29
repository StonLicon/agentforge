import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        default: 'bg-[#d4af37] text-black hover:bg-[#c9a227]',
        subtle: 'bg-[#1a1a1a] text-white hover:bg-[#262626]',
        outline: 'border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black',
        ghost: 'text-[#a3a3a3] hover:text-white hover:bg-[#1a1a1a]',
        link: 'text-[#d4af37] underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-base',
        icon: 'h-11 w-11'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
