import { Checkbox } from '~/lib/components/rac/Checkbox'
import { Checkbox as ShadcnCheckbox } from '~/lib/components/ui/checkbox'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col gap-2 p-6">
      Checkbox
      <div className="grid max-w-lg grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox>Accept terms and conditions</Checkbox>
        </div>
        <div className="flex items-center space-x-2">
          <ShadcnCheckbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Accept terms and conditions
          </label>
        </div>
      </div>
    </div>
  )
}
