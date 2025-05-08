import { Image } from "antd";
import { useState } from "react";

export default function ImageWithFallback({
  url,
}: {
  url: string | undefined;
}) {
  const [preview, setPreview] = useState(true);

  return (
    <Image
      width="100%"
      height="200px"
      className="object-contain"
      src={url}
      fallback="/fallback.png"
      preview={preview}
      onError={() => {
        setPreview(false);
      }}
    />
  );
}
