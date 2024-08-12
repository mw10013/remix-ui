import type { MetaFunction } from "@remix-run/cloudflare";
import { Button as ScnButton } from "~/lib/components/ui/button";

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
      <div>
        <ScnButton>Click me</ScnButton>
      </div>
    </div>
  );
}
