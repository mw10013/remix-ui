import { TextField } from '~/lib/components/rac/TextField'
import { Input as ShadcnInput } from '~/lib/components/ui/input'
import { Label as ShadcnLabel } from '~/lib/components/ui/label'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col gap-2 p-6">
      Input
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <TextField label="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <ShadcnLabel htmlFor="email">Email</ShadcnLabel>
        <ShadcnInput type="email" id="email" placeholder="Email" />
      </div>
    </div>
  )
}
