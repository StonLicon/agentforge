import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-4 py-1 text-sm font-semibold transition-colors duration-300',
  {
    variants: {
      variant: {
        default: 'border-[#d4af37] bg-[#1a1a1a] text-[#d4af37] hover:bg-[#d4af37] hover:text-black',
        subtle: 'border-[#262626] bg-[#0a0a0a] text-[#a3a3a3]',
        solid: 'border-transparent bg-[#d4af37] text-black'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => (
  <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
))
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
