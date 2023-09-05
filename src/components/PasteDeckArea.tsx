import React, { ClipboardEventHandler, useCallback } from "react";

export function PasteDeckArea(props: { onPaste: (text: string) => void }) {
  const handlePaste = useCallback<ClipboardEventHandler>((event) => {
    const text = event.clipboardData?.getData("text/plain");
    if (text) props.onPaste(text);
    event.preventDefault();
  }, [props.onPaste]);
  const placeholder = `Paste your deck here.\nSeparate main deck from sideboard with "Sideboard".`;
  return <textarea
    className="border min-h-[200px] min-w-[400px]"
    placeholder={placeholder}
    onPaste={handlePaste}
  ></textarea>
}