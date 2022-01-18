import { Container, Option } from "./styles"

export const Menu = () => {
  return (
    <Container>
      <Option>
        <div>
          <img src="/question-circle.svg" alt="help" />
          <p>Me ajuda</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option>
        <div>
          <img src="/user.svg" alt="help" />
          <p>Meus dados</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option>
        <div>
          <img src="/sliders-v.svg" alt="help" />
          <p>Configurar app</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option>
        <div>
          <img src="/shield.svg" alt="help" />
          <p>Segurança</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option>
        <div>
          <img src="/pix-black.svg" alt="help" />
          <p>Configurar chaves pix</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option>
        <div>
          <img src="/bag.svg" alt="help" />
          <p>Pedir conta PJ</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option>
        <div>
          <img src="/bell.svg" alt="help" />
          <p>Notificações</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option>
        <div>
          <img src="/setting.svg" alt="help" />
          <p>Configurar conta</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option>
        <div>
          <img src="/credit-card.svg" alt="help" />
          <p>Configurar cartão</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option>
        <div>
          <img src="/file-alt.svg" alt="help" />
          <p>Sobre</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>
    </Container>
  )
}