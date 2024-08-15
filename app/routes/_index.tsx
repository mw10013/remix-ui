import type { MetaFunction } from '@remix-run/cloudflare'
import { ChevronRight, Loader2, Mail } from 'lucide-react'
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
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <ScnButton>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </ScnButton>
        <Button isDisabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        <ScnButton disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </ScnButton>
      </div>
    </div>
  )
}
