import React from 'react'
import {
  Switch as RacSwitch,
  SwitchProps as RacSwitchProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps, focusRing } from './utils'

export interface SwitchProps extends Omit<RacSwitchProps, 'children'> {
  children: React.ReactNode
}

// shadcn switch: peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent
// transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
// disabled:cursor-not-allowed disabled:opacity-50
// data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
const track = tv({
  extend: focusRing,
  base: 'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent',
  variants: {
    isSelected: {
      false: 'bg-input',
      true: 'bg-primary',
    },
    isDisabled: {
      true: 'cursor-not-allowed opacity-50',
    },
  },
})

// shadcn: pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform
// data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
const handle = tv({
  base: 'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
  variants: {
    isSelected: {
      false: 'translate-x-0',
      true: 'translate-x-5',
    },
    isDisabled: {
      true: '',
    },
  },
})

export function Switch({ children, ...props }: SwitchProps) {
  return (
    <RacSwitch
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex items-center gap-2 text-sm text-gray-800 transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]'
      )}>
      {(renderProps) => (
        <>
          <div className={track(renderProps)}>
            <span className={handle(renderProps)} />
          </div>
          {children}
        </>
      )}
    </RacSwitch>
  )
}
