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
      <div className="grid max-w-lg grid-cols-2 gap-4">
        <Button>RAC</Button>
        <ScnButton>Shad</ScnButton>
        <Button variant="secondary">RAC</Button>
        <ScnButton variant="secondary">Shad</ScnButton>
        <Button variant="destructive">RAC</Button>
        <ScnButton variant="destructive">Shad</ScnButton>
        <Button variant="outline">RAC</Button>
        <ScnButton variant="outline">Shad</ScnButton>
        <Button variant="ghost">RAC</Button>
        <ScnButton variant="ghost">Shad</ScnButton>
        <Button size="sm">sm</Button>
        <ScnButton size="sm">sm</ScnButton>
        <Button size="lg">lg</Button>
        <ScnButton size="lg">lg</ScnButton>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <ScnButton variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </ScnButton>
        <Button isDisabled>RAC</Button>
        <ScnButton disabled>Shad</ScnButton>
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
