import { composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

// https://github.com/irsyadadl/justd/blob/main/components/ui/primitive.tsx
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/compose.ts
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/styles.ts
// https://github.com/mehdibha/dotUI/blob/main/src/lib/utils/classes.ts

export const focusRing = tv({
  base: 'outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2',
  variants: {
    isFocusVisible: {
      false: 'outline-0',
      true: 'outline-2'
    }
  }
});

export function composeTailwindRenderProps<T>(className: string | ((v: T) => string) | undefined, tw: string): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}
