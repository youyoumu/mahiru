import { useEffect, useState } from "react";

export default function ImageWithFallback({ url }: { url: string | undefined }) {
  const [preview, setPreview] = useState(true);
  const [src, setSrc] = useState(url);

  useEffect(() => {
    if (preview) {
      setSrc("./fallback.png");
    }
  }, [preview]);

  return (
    <img
      width="100%"
      height="210px"
      className="object-contain"
      src={src}
      onError={() => {
        setPreview(false);
      }}
    />
  );
}