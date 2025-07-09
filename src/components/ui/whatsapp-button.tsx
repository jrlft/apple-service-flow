
import { Button, ButtonProps } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps extends ButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ 
  phoneNumber, 
  message = "Olá, gostaria de saber mais sobre seus serviços.",
  className,
  children,
  ...props 
}: WhatsAppButtonProps) {
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

  return (
    <Button
      className={cn(
        "bg-whatsapp text-white hover:bg-whatsapp/90 font-medium dark:text-white",
        className
      )}
      onClick={() => window.open(whatsappUrl, "_blank")}
      {...props}
    >
      <Phone className="mr-2 h-5 w-5" />
      {children || "Fale pelo WhatsApp"}
    </Button>
  );
}
