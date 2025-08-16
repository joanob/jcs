import DownloadFileComponent from "@/components/DownloadFileComponent"
import LoadFileComponent from "@/components/LoadFileComponent"

const Header = () => {
  return (
    <header>
      <div>Tabs</div>
      <div className="header-actions">
        <LoadFileComponent />
        <DownloadFileComponent />
      </div>
    </header>
  )
}

export default Header
