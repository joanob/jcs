import { type JSX } from "react"

import { useEditorContext } from "@/data/EditorRefContext"

const LoadFileComponent = (): JSX.Element => {
  const editorRef = useEditorContext()

  const handleFileUpload: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    const file = ev.target.files?.[0]

    if (!file || !editorRef?.current) {
      return
    }

    const reader = new FileReader()
    reader.onload = (e): void => {
      const text = e.target?.result as string
      editorRef.current.setValue(text)
    }
    reader.readAsText(file)
  }

  return (
    <>
      <button>
        <label role="button" htmlFor="fileUpload">
          Cargar código
        </label>
      </button>
      <input
        id="fileUpload"
        style={{ display: "none" }}
        type="file"
        accept=".s,.asm,.txt"
        onChange={handleFileUpload}
      />
    </>
  )
}

export default LoadFileComponent
