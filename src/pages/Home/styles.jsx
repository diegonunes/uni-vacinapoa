import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 20px;
  padding: 14px 14px;
  /* margin-bottom: 80px; */
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const SliderCard = styled.FlatList`
  height: 200px;
`;

export const SliderNews = styled.FlatList`
  height: 200px;
`;

export const ContainerDoses = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SliderDoses = styled.FlatList`
  margin-right: 14px;
`;

export const Icon = styled.TouchableOpacity`
  margin-left: 14px;
  margin-right: 32px;
`;
