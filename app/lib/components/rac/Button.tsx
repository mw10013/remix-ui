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

// https://github.com/nextui-org/tailwind-variants/issues/209 : compoundVariants does not recognize falsy boolean variant
// https://github.com/nextui-org/tailwind-variants/pull/210 : fix: treat undefined value for compoundVariants as false

export interface ButtonProps extends RacButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const button = tv({
  extend: focusRing,
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
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
      true: 'pointer-events-none opacity-50',
    },
    isHovered: {
      // true: 'border-2 border-lime-600',
      true: '',
    },
    compoundVariants: [
      {
        variant: 'default',
        isHovered: true,
        class: 'bg-primary/90',
      },
      {
        variant: 'destructive',
        isHovered: true,
        class: 'border-0 bg-destructive/90',
      },
    ],
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
        button({
          ...renderProps,
          variant: props.variant,
          size: props.size,
          className,
        })
      )}
    />
  )
}
