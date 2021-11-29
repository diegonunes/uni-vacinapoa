import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 20px;
  padding: 14px 14px;
  margin-bottom: 80px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const VaccineContainer = styled.View`
  margin-top: 14px;
  padding: 14px;
  width: 100%;
  background-color: #017374;
  border-radius: 14px;
`;

export const VaccineTitle = styled.Text`
  font-weight: bold;
  color: #ddd;
  font-size: 16px;
  text-decoration: underline;
`;

export const VaccineDoses = styled.Text`
  margin-top: 5px;
  color: #ddd;
`;

export const VaccineReactions = styled.Text`
  margin-top: 5px;
  color: #ddd;
  text-align: justify;
`;

export const VaccineButton = styled.TouchableOpacity`
  margin-top: 5px;
`;

export const VaccineTextBtn = styled.Text`
  background-color: #017374;
  color: #ddd;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 14px;
  font-weight: bold;
`;
