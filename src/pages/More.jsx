import Header from "../components/common/Header";
import styled from "styled-components";
import axios from "axios";

const MoreContainer = styled.div`
  min-height: calc(100% - 72px - 61px);
`;
const ListItem = styled.div`
  width: 100%;
  padding: 15px 20px;
  color: #333;

  font-size: 12px;
  font-weight: 500;

  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 6px;
  background-color: #efefef;
`;

const getWord = async () => {
  // 100개 단어 불러오기 ( API, AXIOS 이용 )
};
const initData = () => {
  // 단어 삭제하기
};

function More() {
  return (
    <>
      <Header>더보기</Header>
      <MoreContainer>
        <ListItem onClick={getWord}>수능 단어 100개 가져오기</ListItem>
        <ListItem onClick={initData}>데이터 초기화</ListItem>
        <Line></Line>
        <ListItem>로그아웃</ListItem>
      </MoreContainer>
    </>
  );
}

export default More;
