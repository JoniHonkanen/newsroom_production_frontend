import SidebarComponentGptLab from "./SidebarComponentGptLab";
import SidebarComponentTaru from "./SidebarComponentTaru";

const sidebarVariants = [SidebarComponentGptLab, SidebarComponentTaru];

export default function SidebarComponent() {
  const SelectedSidebar =
    sidebarVariants[Math.floor(Math.random() * sidebarVariants.length)];

  return <SelectedSidebar />;
}
