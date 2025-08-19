import { Editor, type OnChange } from "@monaco-editor/react"
import type { JSX } from "react"

import { useEditorContext } from "@/web/data/EditorRefContext"

const EditorPage = (): JSX.Element => {
  const editorRef = useEditorContext()

  const handleEditorChange: OnChange = (value, event) => {
    console.log(value, event)
  }

  return (
    <Editor
      height="100%"
      defaultLanguage="asm"
      onChange={handleEditorChange}
      onMount={(editor) => {
        if (editorRef) {
          editorRef.current = editor
        }
      }}
    />
  )
}

export default EditorPage
