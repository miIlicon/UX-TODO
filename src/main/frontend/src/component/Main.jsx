import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'


const fadeIn = keyframes`
    0% {
        opacity: 40%;
        transform: translate3d(0, 15%, 0);
    }

    50% {
        opacity: 60%;
        transform: translateZ(10);
    }

    70% {
        opacity: 80%;
        transform: translateZ(30);
    }

    100% {
        opacity: 100%;
        transform: translateZ(50);
    }
`

const Section = styled.section`
    display: flex;
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);

    column-gap : 17.3em;
`;

const Article = styled.article`
    display : flex;
    flex-direction : column;
    row-gap : 2.6em;
`;

const Title = styled.div`
    font-size : 24px;
    letter-spacing: -0.35px;
    font-family: 'Pretendard-Bold';
    animation : ${fadeIn} 2s ease-in-out;
`;

const Container = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 12px;
    width : 44.3em;
    height : 33em;
    border : solid 1.5px;
    border-color : #636161;
    border-radius : 20px;
    animation : ${fadeIn} 1s ease-in-out;
`;

const ContentBox = styled.div`
    display : flex;
    flex-direction : ${(props) => (props.list ? "row" : "column")};
    font-size : 12px;
    row-gap : 31px;
    margin-bottom : ${(props) => (props.list && "auto")};
    margin-top : ${(props) => (props.list && "3.3em")};
    column-gap : ${(props) => (props.list ? "8em" : "0px")};
`;

const Content = styled.div`
    display : flex;
    flex-direction : column;
    row-gap : 31px;
`;

const SubTitle = styled.p`
    font-size: 11px;
    font-family: 'Pretendard-Bold';
    color: #09CE5B;
`;

const Input = styled.input.attrs((props) => ({
    type: "text",
    placeholder: "제목을 입력해주세요",
}))`
    border-top : 0px;
    border-left : 0px;
    border-right : 0px;
    font-size : 12px;
    color : #09CE5B;
    border-color : ${(props) => (props.defaultValue ? "#09CE5B" : "#636161")};
    caret-color : black;
    width : 24.3em;
    padding-bottom : 0.5em;
    border-width : 1.5px;
    border-color : #636161;
    padding-left : 0px;
    font-family: 'Pretendard-Medium';

    &:focus {
        outline : none;
        border-color : #09CE5B; 
        transition : 0.5s all;
    }
`;

const Button = styled.button.attrs({
    type: "submit",
})`
    font-size : 15px;
    color : white;
    background-color #09CE5B;
    font-family: 'Pretendard-Bold';
    width : 19.4em;
    height : 3.1em;
    border : none;
    border-radius : 50px;
`;

export default function Main() {

    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();

    const [userDate, setUserDate] = useState(() => {
        return `${year}년 ${month}월 ${date}일`
    });

    return (
        <>
            <Section>
                <Article>
                    <Title>오늘의 다이어리를 작성하고, 손쉽게 확인해요</Title>
                    <Container>
                        <ContentBox>
                            <div>
                                <SubTitle>날짜</SubTitle>
                                <Input defaultValue={userDate} />
                            </div>
                            <div>
                                <SubTitle>오늘의 할 일</SubTitle>
                                <Input />
                            </div>
                            <Button>나의 오늘을 기록하기</Button>
                        </ContentBox>
                    </Container>
                </Article>
                <Article>
                    <Title>내가 작성한 리스트의 내역을 여기서 볼 수 있어요</Title>
                    <Container>
                        <ContentBox list>
                            <Content>
                                <SubTitle>상태</SubTitle>
                            </Content>
                            <Content>
                                <SubTitle>날짜</SubTitle>
                            </Content>
                            <Content>
                                <SubTitle>오늘 내가 할 일</SubTitle>
                            </Content>
                            <Content>
                                <SubTitle>리스트 삭제</SubTitle>
                            </Content>
                        </ContentBox>
                    </Container>
                </Article>
            </Section>
        </>
    )
}
