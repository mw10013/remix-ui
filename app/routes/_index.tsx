import type { MetaFunction } from "@remix-run/cloudflare";
import { Button as ScnButton } from "~/lib/components/ui/button";
import { ChevronRight, Mail, Loader2 } from "lucide-react";

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
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to remix-ui on Cloudflare</h1>
      <div className="flex flex-col gap-4 max-w-[175px]">
        <ScnButton>Button</ScnButton>
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
    </div>
  );
}
