import Image from "next/image";
import React from "react";

import { PDFDownloadLink} from '@react-pdf/renderer';

import {
  Acoes,
  Container,
  Content,
  Created_in,
  N_Processo,
  Created_User,
  Cliente_Segurado,
  Status,
  Manager,
  ContainerIntensList,
} from "./styles";

interface IItemList {
  tagColor?: string;
  status: string;
  n_Processo: string | number;
  created_at: string;
  created_at_getTime: string | number;
  responsavel: string;
  supervisor: string;
  segurado?: string;
  n_step: number;
  titleN_step: string;
  qtdCommit: number;
  stepsReport: () => void;
  deleteReport: () => void;
  linkCommit: () => void;
  resumoReport: () => void;
}

export function ItemList(props: IItemList) {
  return (
    <Container>
      <ContainerIntensList>
        <Content onClick={props.stepsReport}>
          <Status color={props.tagColor}>
            <div className="Tag" />
            <h2>{props.status}</h2>
          </Status>
          <N_Processo>
            <h2>{props.n_Processo}</h2>
          </N_Processo>
          <Created_in
           title={props.created_at_getTime as string}
          >
            <h2>{props.created_at}</h2>
          </Created_in>
          <Created_User>
            <h2>{props.responsavel}</h2>
          </Created_User>
          <Manager>
            <h2>{props.supervisor}</h2>
          </Manager>
          <Cliente_Segurado color={props.tagColor}>
            <h2>{props.segurado}</h2>
          </Cliente_Segurado>
        </Content>
        <Acoes>
          <a onClick={props.stepsReport}>
            <Image
              src="/icons/iconsItemList/IconStep.svg"
              alt="Fases do Relatório"
              title={props.titleN_step}
              width={20}
              height={20}
            />
            <div className="StatusStep">{props.n_step}</div>
          </a>

          <a onClick={props.linkCommit}>
            <Image
              width={20}
              height={20}
              className="Icon"
              src="/icons/iconsItemList/IconCommits.svg"
              alt="Comentários"
              title="Comentários"
            />
            <span>{props.qtdCommit}</span>
          </a>
          <a onClick={props.resumoReport}>
            <Image
              width={20}
              height={20}
              src="/icons/iconsItemList/IconResumoReport.svg"
              alt="Preview do Relatório"
              title="Preview do Relatório"
            />
          </a>
          <a onClick={props.deleteReport}>
            <Image
              width={20}
              height={20}
              src="/icons/iconsItemList/IconDeleteReport.svg"
              alt="Deletar"
              title="Excluir o Relatório"
            />
          </a>
        </Acoes>
      </ContainerIntensList>
    </Container>
  );
}
