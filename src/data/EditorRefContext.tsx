import {
  createContext,
  useContext,
  useRef,
  type PropsWithChildren,
  type RefObject,
} from "react"

interface MonacoEditor {
  getValue: () => string
}

const EditorContext = createContext<RefObject<MonacoEditor> | null>(null)

export const useEditorContext = () => useContext(EditorContext)

export const EditorProvider = ({ children }: PropsWithChildren) => {
  const editorRef = useRef<any>(null)

  return (
    <EditorContext.Provider value={editorRef}>
      {children}
    </EditorContext.Provider>
  )
}
