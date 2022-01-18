import { theme } from "../../styles/theme"
import { Bar, BarContainer, BasicContainer, Box, CreditContent, CreditHeader, Dot, ShortcutContainer } from "./styles"
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

export const CreditCard = () => {
  return(
    <BasicContainer>
      <CreditHeader>
        <img src="/credit-card.svg" alt="card" />
        <p>Cartão de crédito</p>
        <Dot color={theme.darkGray}/>
        <p>Fecha em <span>01 JAN</span></p>
      </CreditHeader>

      <CreditContent>
        <Box>
          <Dot color={theme.green} />
          <div>
            <h3>R$ 3.968,32</h3>
            <p>Limite disponível</p>
          </div>
        </Box>

        <Box>
          <Dot color={theme.blue} />
          <div>
            <h3>R$ 416,70</h3>
            <p>Fatura atual</p>
          </div>
        </Box>

        <Box>
          <Dot color={theme.orange} />
          <div>
            <h3>R$ 264,98</h3>
            <p>Próximas faturas</p>
          </div>
        </Box>
      </CreditContent>

      <BarContainer>
        <Bar color={theme.blue} porcentage={90}/>
        <Bar color={theme.green} porcentage={80}/>
      </BarContainer>
    </BasicContainer>
  )
}