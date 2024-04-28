import { QrCode } from "lucide-react";
import FormEn from "./components/form";

function App() {
  return (
    <div className="w-full h-screen bg-neutral-950 text-neutral-200 flex flex-col items-center justify-start pt-8 gap-8 pl-2 pr-2 pb-2">
      <h1 className="text-3xl flex items-center justify-center gap-4">
        Gerar QRCode
        <QrCode size={32} />
      </h1>

      <FormEn />
    </div>
  );
}

export default App;
