
import {ListingHeader} from '@components/ListingHeader'
import {Header} from '@components/Header'
import {ButtonReport} from '@components/Reports/Button'


import { FolderPlus } from "phosphor-react"


import { Container, Content, Heading, Pesquisa } from './styles'

export default function ReportList() {
  return (
     <>
       <Header />
        <Container>
          <Content>
            <Heading>
              <ListingHeader
                title="Relatórios"
                subTitle="Lista relatórios de averiguação"
              />
            </Heading>
            <Pesquisa>
                <form className="form-pesquisa" onSubmit={() => { }}>
                  <select className="input-filtro" onChange={() => { }}>
                    <option value="">Filtrar por status</option>
                    <option value="Formalização">Formalização</option>
                    <option value="Concluído">Concluído</option>
                    <option value="Em análise">Em análise</option>
                    <option value="Correção">Correção</option>
                  </select>
                  <input className="input-pesquisa" type="text" placeholder="Pesquisar" />
                  <ButtonReport
                    TextTitle="Novo Relatório"
                    Icon={<FolderPlus size={20} />}
                    onClick={() => {}}
                  />
                </form>
            </Pesquisa>
          </Content>
        </Container>
     </>
  )
}