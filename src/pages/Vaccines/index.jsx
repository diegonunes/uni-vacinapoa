import React, { useState } from 'react';
import { ScrollView, Text, Modal, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {
  Container,
  Title,
  VaccineButton,
  VaccineContainer,
  VaccineDoses,
  VaccineReactions,
  VaccineTextBtn,
  VaccineTitle,
} from './styles';
import ModalLink from '../../components/ModalLink';
import logo from '../../../assets/logo.png';

const Vaccines = () => {
  const [openLink, setOpenLink] = useState(false);
  const [vaccineURI, setVaccineURI] = useState('');
  const [vaccineName, setVaccineName] = useState('');

  return (
    <Container>
      <ScrollView>
        <Image source={logo} style={{ width: '100%', resizeMode: 'stretch', marginBottom: 14 }} />
        <Title>Vacinas aplicadas em Porto Alegre</Title>
        <VaccineContainer>
          <VaccineTitle>Astrazeneca/Oxford</VaccineTitle>
          <VaccineDoses>
            <Text style={{ fontWeight: 'bold' }}>Quantidade de doses:</Text> 2 doses + reforço {'\n'}
            <Text style={{ fontWeight: 'bold' }}>Intervalo 2ª dose:</Text> 8 semanas após 1a dose {'\n'}
            <Text style={{ fontWeight: 'bold' }}>Intervalo reforço:</Text> 5 meses após 2ª dose
          </VaccineDoses>
          <VaccineReactions>
            <Text style={{ fontWeight: 'bold' }}>Reações comuns: </Text>
            Pessoas que tomaram a dose do imunizante AstraZeneca relatam dores no corpo, mal estar e febre. A bula do
            medicamento traz que as reações podem ir de sensibilidade, dor, sensação de calor, vermelhidão, coceira,
            inchaço ou hematomas no local da aplicação, sensação de indisposição de forma geral, sensação de cansaço,
            calafrio ou sensação febril, dor de cabeça, enjoos, dor nas articulações ou dor muscular, febre acima de 38
            °C, dor de garganta, coriza e tosse. Os sintomas, que já estavam previstos nos testes clínicos, costumam
            começar algumas horas depois da aplicação da dose e podem durar até 48 horas.
          </VaccineReactions>
          <VaccineButton
            activeOpacity={0.8}
            onPress={() => {
              setOpenLink(true);
              setVaccineURI('https://www.gov.br/anvisa/pt-br/assuntos/paf/coronavirus/vacinas/astrazeneca');
              setVaccineName('Astrazeneca');
            }}
          >
            <VaccineTextBtn>
              Mais informações <FontAwesome name='external-link' size={14} color='white' />
            </VaccineTextBtn>
          </VaccineButton>
        </VaccineContainer>
        <VaccineContainer>
          <VaccineTitle>Coronavac</VaccineTitle>
          <VaccineDoses>
            <Text style={{ fontWeight: 'bold' }}>Quantidade de doses:</Text> 2 doses + reforço {'\n'}
            <Text style={{ fontWeight: 'bold' }}>Intervalo 2ª dose:</Text> 28 dias após 1a dose {'\n'}
            <Text style={{ fontWeight: 'bold' }}>Intervalo reforço:</Text> 5 meses após 2ª dose
          </VaccineDoses>
          <VaccineReactions>
            <Text style={{ fontWeight: 'bold' }}>Reações comuns: </Text>
            Com menos relatos de reações adversas, a bula da Coronavac prevê que pode ocorrer dor de cabeça, cansaço,
            dor no local da aplicação, enjoo, diarreia, dor muscular, dor ao engolir, calafrios, perda de apetite,
            tosse, dor nas articulações, coceira, coriza e congestão nasal, vermelhidão, inchaço e coceira no local da
            aplicação.
          </VaccineReactions>
          <VaccineButton
            activeOpacity={0.8}
            onPress={() => {
              setOpenLink(true);
              setVaccineURI('https://www.gov.br/anvisa/pt-br/assuntos/paf/coronavirus/vacinas/coronavac');
              setVaccineName('Coronavac');
            }}
          >
            <VaccineTextBtn>
              Mais informações <FontAwesome name='external-link' size={14} color='white' />
            </VaccineTextBtn>
          </VaccineButton>
        </VaccineContainer>
        <VaccineContainer>
          <VaccineTitle>Pfizer</VaccineTitle>
          <VaccineDoses>
            <Text style={{ fontWeight: 'bold' }}>Quantidade de doses:</Text> 2 doses + reforço {'\n'}
            <Text style={{ fontWeight: 'bold' }}>Intervalo 2ª dose:</Text> 8 semanas após 1a dose {'\n'}
            <Text style={{ fontWeight: 'bold' }}>Intervalo reforço:</Text> 5 meses após 2ª dose
          </VaccineDoses>
          <VaccineReactions>
            <Text style={{ fontWeight: 'bold' }}>Reações comuns: </Text>
            No caso da vacina da Pfizer, segundo a bula, é possível ter dor e inchaço no local de injeção, cansaço, dor
            de cabeça, diarreia, dor muscular, dor nas articulações, calafrios, febre, vermelhidão no local de injeção,
            náusea e vômito.
          </VaccineReactions>
          <VaccineButton
            activeOpacity={0.8}
            onPress={() => {
              setOpenLink(true);
              setVaccineURI('https://www.gov.br/anvisa/pt-br/assuntos/paf/coronavirus/vacinas/pfizer');
              setVaccineName('Pfizer');
            }}
          >
            <VaccineTextBtn>
              Mais informações <FontAwesome name='external-link' size={14} color='white' />
            </VaccineTextBtn>
          </VaccineButton>
        </VaccineContainer>
        <VaccineContainer>
          <VaccineTitle>Janssen</VaccineTitle>
          <VaccineDoses>
            <Text style={{ fontWeight: 'bold' }}>Quantidade de doses:</Text> 1 doses + reforço {'\n'}
            <Text style={{ fontWeight: 'bold' }}>Intervalo reforço:</Text> Outra dose da Janssen de 2 até 6 meses após
            1ª dose
          </VaccineDoses>
          <VaccineReactions>
            <Text style={{ fontWeight: 'bold' }}>Reações comuns: </Text>
            Os eventos adversos da vacina da Janssen mais comuns relatados incluem: no local da aplicação, dor,
            vermelhidão na pele e inchaço. Além disso, outros efeitos colaterais gerais são dor de cabeça, sensação de
            muito cansaço, dores musculares, náusea, febre.
          </VaccineReactions>
          <VaccineButton
            activeOpacity={0.8}
            activeOpacity={0.8}
            onPress={() => {
              setOpenLink(true);
              setVaccineURI('https://www.gov.br/anvisa/pt-br/assuntos/paf/coronavirus/vacinas/janssen');
              setVaccineName('Janssen');
            }}
          >
            <VaccineTextBtn>
              Mais informações <FontAwesome name='external-link' size={14} color='white' />
            </VaccineTextBtn>
          </VaccineButton>
        </VaccineContainer>
      </ScrollView>
      <Modal animationType='slide' transparent={true} visible={openLink}>
        <ModalLink link={vaccineURI} title={vaccineName} closeModal={() => setOpenLink(false)} />
      </Modal>
    </Container>
  );
};

export default Vaccines;
