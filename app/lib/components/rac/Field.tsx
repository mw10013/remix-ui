import {
  composeRenderProps,
  FieldErrorProps,
  Group,
  GroupProps,
  InputProps,
  LabelProps,
  FieldError as RacFieldError,
  Input as RacInput,
  Label as RacLabel,
  Text,
  TextProps,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import { composeTailwindRenderProps, focusRing } from './utils'

// shadcn label: text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
// rac: text-sm text-gray-500 dark:text-zinc-400 font-medium cursor-default w-fit
export function Label(props: LabelProps) {
  return (
    <RacLabel
      {...props}
      className={twMerge('text-sm font-medium leading-none', props.className)}
    />
  )
}

export function Description(props: TextProps) {
  return (
    <Text
      {...props}
      slot="description"
      className={twMerge('text-sm text-gray-600', props.className)}
    />
  )
}

export function FieldError(props: FieldErrorProps) {
  return (
    <RacFieldError
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'text-sm text-red-600 forced-colors:text-[Mark]'
      )}
    />
  )
}

// shadcn input: flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background
// file:border-0 file:bg-transparent file:text-sm file:font-medium
// placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
// disabled:cursor-not-allowed disabled:opacity-50
export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false:
        'border-gray-300 dark:border-zinc-500 forced-colors:border-[ButtonBorder]',
      true: 'border-gray-600 dark:border-zinc-300 forced-colors:border-[Highlight]',
    },
    isInvalid: {
      true: 'border-red-600 dark:border-red-600 forced-colors:border-[Mark]',
    },
    isDisabled: {
      true: 'border-gray-200 dark:border-zinc-700 forced-colors:border-[GrayText]',
    },
  },
})

export const fieldGroupStyles = tv({
  extend: focusRing,
  base: 'group flex h-9 items-center overflow-hidden rounded-lg border-2 bg-white dark:bg-zinc-900 forced-colors:bg-[Field]',
  variants: fieldBorderStyles.variants,
})

export function FieldGroup(props: GroupProps) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldGroupStyles({ ...renderProps, className })
      )}
    />
  )
}

// shadcn input: flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background
// file:border-0 file:bg-transparent file:text-sm file:font-medium
// placeholder:text-muted-foreground
// focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
// disabled:cursor-not-allowed disabled:opacity-50
export function Input(props: InputProps) {
  return (
    <RacInput
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground'
      )}
    />
  )
}
