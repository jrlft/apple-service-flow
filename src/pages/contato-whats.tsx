import { useEffect } from "react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=556536216000&text=Ol%C3%A1,%20achei%20voc%C3%AAs%20no%20Google%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20da%20sua%20autorizada%20Apple";

export default function ContatoWhats() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white">
      <main className="flex flex-col items-center justify-center flex-grow w-full px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Bem vindo à Link TI!</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-8 text-center max-w-2xl">
          Você está sendo redirecionado ao nosso Whatsapp.<br />
          Aguarde alguns segundos.
        </p>
        <div className="text-lg text-center">
          Caso não seja redirecionado automaticamente, <a href={WHATSAPP_URL} className="underline text-white font-bold">clique aqui</a>.
        </div>
      </main>
    </div>
  );
}
