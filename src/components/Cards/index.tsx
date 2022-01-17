import { ShortcutContainer } from "./styles"
import { ShortcutCardProps } from "./types"

export const ShortcutCard = ({ title, icon }: ShortcutCardProps) => {
  return(
    <ShortcutContainer
      whileHover={{ y: -4 }}
    >
      <div>
        {icon}
      </div>
      <p>{title}</p>
    </ShortcutContainer>
  )
}