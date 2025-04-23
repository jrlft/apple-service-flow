
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogPostShare() {
  return (
    <div className="mt-12 pt-6 border-t flex items-center justify-between flex-wrap gap-4">
      <div className="font-semibold">Compartilhe este artigo:</div>
      <div className="flex gap-2">
        <Button variant="outline" size="icon" className="rounded-full">
          <Facebook className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <Twitter className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <Linkedin className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
