import { Link2, Trash2 } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useState } from "react";

export default function FormEn() {
  const [url, setUrl] = useState("");
  const [id, setid] = useState(0);
  const [qrcodevalue, setQrcodeValue] = useState([]);

  const createQRcode = (e) => {
    setUrl(e.target.value);
    setid(id + 1);
  };

  useEffect(() => {
    if (url) {
      try {
        let link = new URL(url);
        console.log("valid" + link);
        if (link) {
          setQrcodeValue([url]);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setQrcodeValue([]);
    }
  }, [url]);

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={200}
      bgColor={"rgba(10,10,10,0.5)"}
      fgColor={"#c6c6c6"}
      level={"H"}
    />
  );
  return (
    <>
      <form
        method=""
        className="flex sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-4"
      >
        <div className="sm:w-80 w-[22rem] h-10 bg-neutral-900 outline-none rounded text-left flex items-center justify-between pr-2">
          <input
            type={"text"}
            placeholder={"Coloque o link"}
            required
            onChange={createQRcode}
            value={url}
            className="sm:w-72 w-80 pl-4 pr-4 bg-neutral-900 outline-none"
          />
          <Link2 cursor={"pointer"} />
        </div>
        <button
          disabled={!url}
          className="bg-neutral-900 outline-none rounded  font-medium text-sm flex items-center justify-center gap-2 p-2 cursor-pointer"
        >
          Limpar
          <Trash2 />
        </button>
      </form>
      {qrcodevalue.length > 0 && <div key={id}>{qrcode}</div>}
    </>
  );
}
