import type { JSX } from "react"

import { useEditorContext } from "@/web/data/EditorRefContext"

const DownloadFileComponent = (): JSX.Element => {
  const editorRef = useEditorContext()

  const onDownloadCodeClick = (): void => {
    if (editorRef === null) {
      return
    }

    const code = editorRef.current.getValue()
    const blob = new Blob([code], { type: "text/plain" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "react-riscv.asm"
    a.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div className="header-action-button-container">
      <button onClick={onDownloadCodeClick}>Descargar código</button>
    </div>
  )
}

export default DownloadFileComponent
