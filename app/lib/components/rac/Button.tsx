import {
  composeRenderProps,
  Button as RacButton,
  ButtonProps as RacButtonProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { focusRing } from './utils'

// https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/Button.tsx
// https://github.com/mehdibha/dotUI/blob/main/src/lib/components/core/default/button.tsx
// https://github.com/irsyadadl/justd/blob/main/components/ui/button.tsx

export interface ButtonProps extends RacButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' 
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const button = tv({
  extend: focusRing,
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    },
    isDisabled: {
      true: 'border-black/5 bg-gray-100 text-gray-300 dark:border-white/5 dark:bg-zinc-800 dark:text-zinc-600 forced-colors:text-[GrayText]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export function Button(props: ButtonProps) {
  return (
    <RacButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, variant: props.variant, size: props.size, className })
      )}
    />
  )
}
