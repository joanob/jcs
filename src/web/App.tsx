import type { JSX } from "react"

import { EditorProvider } from "./data/EditorRefContext"
import Header from "./layout/Header"
import EditorPage from "./pages/EditorPage"

const App = (): JSX.Element => {
  return (
    <EditorProvider>
      <Header />
      <main>
        <EditorPage />
        {/* <DocsPage /> */}
      </main>
    </EditorProvider>
  )
}

export default App
