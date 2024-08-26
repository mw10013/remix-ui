import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

// https://github.com/irsyadadl/justd/blob/main/components/ui/primitive.tsx
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/compose.ts
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/styles.ts
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/classes.ts

// shadcn button base: inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
// ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
// disabled:pointer-events-none disabled:opacity-50",

export const focusRing = tv({
  // base: 'outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2',
  base: 'ring-offset-background transition-colors',
  variants: {
    isFocusVisible: {
      // false: 'outline-0',
      // true: 'outline-2'
      true: 'outline-none ring-2 ring-ring ring-offset-2',
    },
  },
})

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className))
}
