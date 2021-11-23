import React from 'react';
import { Container, ContainerCard, Local, Texto } from './styles';

const CardItem = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Local>{data.nomeLocal}</Local>
      <ContainerCard>
        <Texto>
          1ª dose aplicadas: {'\n'}
          {data.primeiraDoseNro} - {data.primeiraDosePor}%
        </Texto>
        <Texto>
          2ª dose aplicadas: {'\n'}
          {data.segundaDoseNro} - {data.segundaDosePor}%
        </Texto>
        <Texto>
          População total: {'\n'}
          {data.populacao}
        </Texto>
      </ContainerCard>
    </Container>
  );
};

export default CardItem;
