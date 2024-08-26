import { button, Button } from '~/lib/components/rac/Button'

export function loader() {
  console.log(`button: ${button({ variant: 'default', isHovered: true })}`)
  return null
}

export default function RouteComponent() {
  return (
    <div className="container p-6">
      <Button>RAC</Button>
    </div>
  )
}
