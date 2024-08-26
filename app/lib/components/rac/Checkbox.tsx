import { ReactNode } from 'react'
import { Check, Minus } from 'lucide-react'
import {
  CheckboxProps,
  composeRenderProps,
  Checkbox as RacCheckbox,
  CheckboxGroup as RacCheckboxGroup,
  CheckboxGroupProps as RacCheckboxGroupProps,
  ValidationResult,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Description, FieldError, Label } from './Field'
import { composeTailwindRenderProps, focusRing } from './utils'

export interface CheckboxGroupProps
  extends Omit<RacCheckboxGroupProps, 'children'> {
  label?: string
  children?: ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <RacCheckboxGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex flex-col gap-2'
      )}>
      <Label>{props.label}</Label>
      {props.children}
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </RacCheckboxGroup>
  )
}

const checkboxStyles = tv({
  base: 'group flex items-center gap-2 text-sm transition',
  variants: {
    isDisabled: {
      false: 'text-gray-800 dark:text-zinc-200',
      true: 'text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]',
    },
  },
})

const boxStyles = tv({
  extend: focusRing,
  base: 'flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition',
  variants: {
    isSelected: {
      false:
        'dark:[--color:colors.zinc-400)] border-[--color] bg-white [--color:theme(colors.gray.400)] group-pressed:[--color:theme(colors.gray.500)] dark:bg-zinc-900 dark:group-pressed:[--color:theme(colors.zinc.300)]',
      true: 'border-[--color] bg-[--color] [--color:theme(colors.gray.700)] group-pressed:[--color:theme(colors.gray.800)] dark:[--color:theme(colors.slate.300)] dark:group-pressed:[--color:theme(colors.slate.200)] forced-colors:![--color:Highlight]',
    },
    isInvalid: {
      true: '[--color:theme(colors.red.700)] group-pressed:[--color:theme(colors.red.800)] dark:[--color:theme(colors.red.600)] dark:group-pressed:[--color:theme(colors.red.700)] forced-colors:![--color:Mark]',
    },
    isDisabled: {
      true: '[--color:theme(colors.gray.200)] dark:[--color:theme(colors.zinc.700)] forced-colors:![--color:GrayText]',
    },
  },
})

const iconStyles =
  'w-4 h-4 text-white group-disabled:text-gray-400 dark:text-slate-900 dark:group-disabled:text-slate-600 forced-colors:text-[HighlightText]'

export function Checkbox(props: CheckboxProps) {
  return (
    <RacCheckbox
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        checkboxStyles({ ...renderProps, className })
      )}>
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <div
            className={boxStyles({
              isSelected: isSelected || isIndeterminate,
              ...renderProps,
            })}>
            {isIndeterminate ? (
              <Minus aria-hidden className={iconStyles} />
            ) : isSelected ? (
              <Check aria-hidden className={iconStyles} />
            ) : null}
          </div>
          {props.children}
        </>
      )}
    </RacCheckbox>
  )
}
