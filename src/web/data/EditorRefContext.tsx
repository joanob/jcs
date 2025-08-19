import {
  createContext,
  type JSX,
  type PropsWithChildren,
  type RefObject,
  useContext,
  useRef,
} from "react"

interface MonacoEditor {
  getValue: () => string
  setValue: (newValue: string) => void
}

const EditorContext = createContext<RefObject<MonacoEditor> | null>(null)

export const useEditorContext = (): RefObject<MonacoEditor> | null =>
  useContext(EditorContext)

export const EditorProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const editorRef = useRef<any>(null)

  return (
    <EditorContext.Provider value={editorRef}>
      {children}
    </EditorContext.Provider>
  )
}
