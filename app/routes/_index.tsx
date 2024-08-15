import type { MetaFunction } from '@remix-run/cloudflare'
import { ChevronRight, Loader2, Mail } from 'lucide-react'
import { Button as JollyButton } from '~/lib/components/jolly-ui/button'
import { Button as RacButton } from '~/lib/components/rac-starter/Button'
import { Button } from '~/lib/components/rac/Button'
import { Button as ScnButton } from '~/lib/components/ui/button'

export const meta: MetaFunction = () => {
  return [
    { title: 'remix-ui' },
    {
      name: 'description',
      content: 'Welcome to remix-ui on Cloudflare!',
    },
  ]
}

export default function Index() {
  return (
    <div className="flex flex-col gap-4 p-4 font-sans">
      <h1 className="text-3xl">Welcome to remix-ui on Cloudflare</h1>
      <div className="grid grid-cols-3 gap-4 max-w-lg">
        <Button>Button 1</Button>
        <ScnButton>Button 2</ScnButton>
      </div>

      <div className="mt-8 flex max-w-[175px] flex-col gap-4">
        <RacButton variant="primary">Rac Button</RacButton>
        <RacButton variant="secondary">Rac Button</RacButton>
        <RacButton variant="destructive">Rac Button</RacButton>
        <RacButton variant="icon">
          <ChevronRight className="h-4 w-4" />
        </RacButton>
        <JollyButton>Jolly Button</JollyButton>
      </div>
      <div className="flex max-w-[175px] flex-col gap-4">
        <ScnButton disabled>Button</ScnButton>
        <ScnButton variant="secondary">Secondary</ScnButton>
        <ScnButton variant="destructive">Destructive</ScnButton>
        <ScnButton variant="outline">Outline</ScnButton>
        <ScnButton variant="ghost">Ghost</ScnButton>
        <ScnButton variant="link">Link</ScnButton>
        <ScnButton variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </ScnButton>
        <ScnButton>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </ScnButton>
        <ScnButton disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </ScnButton>
      </div>
      <div className="mt-12 flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
          <Button>Button 4</Button>
          <Button>Button 5</Button>
          <Button>Button 6</Button>
          <Button>Button 7</Button>
          <Button>Button 8</Button>
          <Button>Button 9</Button>
        </div>
      </div>
    </div>
  )
}
