import React from 'react';
import { Container, VaccineTitle, VaccineDate, VaccineName } from './styles';

const CardDoses = ({ data }) => {
  return (
    <Container>
      <VaccineTitle>{data.vaccineType}</VaccineTitle>
      <VaccineDate>{data.vaccineDate}</VaccineDate>
      <VaccineName>{data.vaccineName}</VaccineName>
    </Container>
  );
};

export default CardDoses;
