import { Switch } from '~/lib/components/rac/Switch'
import { Label as ShadcnLabel } from '~/lib/components/ui/label'
import { Switch as ShadcnSwitch } from '~/lib/components/ui/switch'

export default function RouteComponent() {
  return (
    <div className="container flex flex-col gap-2 p-6">
      Switch
      <div className="grid max-w-lg grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Switch>Airplane Mode</Switch>
        </div>
        <div className="flex items-center space-x-2">
          <ShadcnSwitch id="airplane-mode" />
          <ShadcnLabel htmlFor="airplane-mode">Airplane Mode</ShadcnLabel>
        </div>
        <Switch defaultSelected isDisabled>
          {''}
        </Switch>
        <ShadcnSwitch checked disabled aria-readonly />
      </div>
    </div>
  )
}
