
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogPostShare() {
  return (
    <div className="border-t pt-6 mt-6">
      <h4 className="font-medium mb-4">Compartilhe este artigo</h4>
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <Facebook className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Twitter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Mail className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
