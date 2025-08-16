import { useEditorContext } from "@/data/EditorRefContext"
import { Editor, type OnChange } from "@monaco-editor/react"

const EditorPage = () => {
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
