import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import WordListItem from "../components/voca/WordListItem";

import AddIcon from "../assets/icons/add.svg";
const VocaContainer = styled.div`
  width: 100%;
  min-height: calc(100% - 72px - 61px - 131px);

  &::-webkit-scrollbar {
    background: white;
    width: 5px;
    border-radius: 30px;
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 30px;
  }
`;

const VocaInputContainer = styled.div`
  width: calc(100%);
  padding: 0px 20px;

  position: sticky;
  bottom: 80px;

  margin-top: 20px;
`;

const VocaInputInnerContainer = styled.div`
  width: 100%;
  height: 111px;

  border-radius: 20px;
  background-color: #fff;

  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 10px 17px 20px;
  display: flex;
  align-items: flex-end;
`;

const VocaInput = styled.div`
  flex: 1;
`;

const VocaAddButton = styled.div`
  border-radius: 100%;

  width: 42px;
  height: 42px;

  background-color: #36afff;

  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

function Voca() {
  const [word, setWord] = useState("");
  const [mean, setMean] = useState("");

  const [vocaWord, setVocaWord] = useState([]);

  useEffect(() => {
    // 데이터 불러오기

    // 데이터 저장
  }, []);

  const createWord = () => {
    // 단어 저장
  };

  const deleteWord = (index) => {
    // 단어 삭제
  };

  return (
    <>
      <Header>단어장</Header>
      <VocaContainer>
       {/* 단어 리스트 .map() */}
      </VocaContainer>
      <VocaInputContainer>
        <VocaInputInnerContainer>
          <VocaInput>
            <Input
              innerStyle={css`
                font-size: 14px;
              `}
              inputBorderType="bottom-line"
              placeholder="단어"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            ></Input>

            <Input
              innerStyle={css`
                font-size: 14px;
              `}
              style={css`
                margin-top: 4px;
              `}
              inputBorderType="bottom-line"
              placeholder="뜻"
              value={mean}
              onChange={(e) => setMean(e.target.value)}
            ></Input>
          </VocaInput>
          <VocaAddButton onClick={createWord}>
            <img src={AddIcon} alt="단어 생성" />
          </VocaAddButton>
        </VocaInputInnerContainer>
      </VocaInputContainer>
    </>
  );
}

export default Voca;
