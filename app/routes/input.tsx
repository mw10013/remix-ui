import { Button } from '~/lib/components/rac/Button'
import { TextField } from '~/lib/components/rac/TextField'
import { Button as ShadcnButton } from '~/lib/components/ui/button'
import { Input as ShadcnInput } from '~/lib/components/ui/input'
import { Label as ShadcnLabel } from '~/lib/components/ui/label'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col gap-2 p-6">
      Input
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <TextField label="Email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <ShadcnLabel htmlFor="email">Email</ShadcnLabel>
        <ShadcnInput type="email" id="email" placeholder="Email" />
      </div>
      <TextField isDisabled placeholder="Email" />
      <ShadcnInput disabled type="email" placeholder="Email" />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <TextField placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <ShadcnInput type="email" placeholder="Email" />
        <ShadcnButton type="submit">Subscribe</ShadcnButton>
      </div>
    </div>
  )
}
