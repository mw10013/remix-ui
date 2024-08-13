import type { MetaFunction } from "@remix-run/cloudflare";
import { Button as ScnButton } from "~/lib/components/ui/button";
import { ChevronRight, Mail, Loader2 } from "lucide-react";
import { Button as RacButton } from "~/lib/components/rac-starter/Button";
import { Button } from "~/lib/components/rac/Button";
import { Button as JollyButton } from "~/lib/components/jolly-ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "remix-ui" },
    {
      name: "description",
      content: "Welcome to remix-ui on Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4 flex flex-col gap-2">
      <h1 className="text-3xl">Welcome to remix-ui on Cloudflare</h1>
      <div className="flex flex-col gap-4 max-w-[175px]">
        <RacButton variant="primary">Rac Button</RacButton>
        <RacButton variant="secondary">Rac Button</RacButton>
        <RacButton variant="destructive">Rac Button</RacButton>
        <RacButton variant="icon">
          <ChevronRight className="h-4 w-4" />
        </RacButton>
        <JollyButton>Jolly Button</JollyButton>
      </div>
      <div className="flex flex-col gap-4 max-w-[175px]">
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
      <div className="flex justify-center mt-12">
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
  );
}
