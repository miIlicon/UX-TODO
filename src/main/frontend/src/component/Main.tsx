import React, { useEffect, useState, useRef } from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import checkF from '../images/checkF.svg';
import checkT from '../images/checkT.svg';
import enrollImg from '../images/enrollImg.png';
import lstImg from '../images/lstImg.png';
import delBtn from '../images/delBtn.svg';
import axios from 'axios';


const fadeIn = keyframes`
    0% {
        opacity : 40%;
    }

    50% {
        opacity : 70%;
    }

    100 % {
        opacity : 100%;
    }
`;

const fadeInContainer = keyframes`
    0% {
        opacity: 40%;
        transform: translate3d(0, 10%, 0);
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

const fadeInDiv = keyframes`
    0% {
        opacity: 40%;
        transform: translate3d(0, 40%, 0);
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
    box-sizing : border-box;
`;

const TitleSection = styled.div`
    display : flex;
    align-items : center;
    animation : ${fadeInDiv} 1s ease-in-out;
    margin-bottom : 0.6em;
`;

const TitleImg = styled.img.attrs((props) => ({
    src: props.src,
}))`
    position : absolute;
    width : ${(props) => (props.src === enrollImg ? "10em" : "8em")};
    margin-left : 25em;
    margin-top : ${(props) => (props.src === enrollImg ? "-2em" : "-1.7em")};
`;

const Title = styled.div`
    font-size : 30px;
    letter-spacing: -0.35px;
    font-family: 'Pretendard-Bold';
`;

const Container = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 12px;
    width : 44.3em;
    height : 33em;
    border : none 1.5px;
    border-color : #636161;
    border-radius : 20px;
    animation : ${fadeInContainer} 1.3s ease-in-out;
    box-shadow : 7px 7px 20px 0px #636161;
    overflow-y: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ContentBox = styled.div<{ list?: boolean }>`
    display : flex;
    flex-direction : ${(props) => (props.list ? "row" : "column")};
    font-size : 12px;
    row-gap : 31px;
    margin-bottom : ${(props) => (props.list && "auto")};
    margin-top : ${(props) => (props.list && "2.5em")};
    column-gap : ${(props) => (props.list ? "5em" : "0px")};
    animation : ${fadeIn} 1.5s ease-in-out;
`;

const Content = styled.div`
    display : flex;
    flex-direction : column;
    row-gap : 1.3em;
    align-items : center;
`;

const ContentText = styled.p`
    font-family : 'Pretendard-Medium';
    font-size : 14px;
    letter-spacing: -0.35px;
    margin: 0;
`;

const SubTitle = styled.p`
    font-size: 14px;
    font-family: 'Pretendard-Bold';
    letter-spacing: -0.35px;
    color: #09CE5B;
`;

const CheckBox = styled.img.attrs<{ state: boolean }>((props) => ({
    src: props.state ? checkT : checkF,
})) <{ state: boolean }>`
    cursor : pointer;
    width : 1.3em;
`

const DeleteBtn = styled.img.attrs({
    src: delBtn,
})`
    width : 5.2em;

    &:hover {
        cursor : pointer;
        opacity : 80%;
        transition : 0.5s all;
    }
`;

const Input = styled.input.attrs((props) => ({
    type: "text",
    placeholder: props.placeholder,
}))`
    border-top : 0px;
    border-left : 0px;
    border-right : 0px;
    font-size : 15px;
    color : #09CE5B;
    border-color : ${(props) => (props.defaultValue ? "#09CE5B" : "#636161")};
    caret-color : black;
    width : 24.3em;
    padding-bottom : 0.5em;
    border-width : 1.5px;
    border-color : #636161;
    padding-left : 0px;
    font-family: 'Pretendard-Medium';
    letter-spacing: -0.35px;

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
    width : 24.7em;
    height : 3.4em;
    border : none;
    border-radius : 50px;
    letter-spacing: -0.35px;

    &:hover {
        opacity : 90%;
        transition : 0.8s ease-in-out;
        cursor : pointer;
    }
`;

export default function Main(): JSX.Element {

    const time: Date = new Date();
    const year: number = time.getFullYear();
    const month: number = time.getMonth() + 1;
    const date: number = time.getDate();
    const inputRef = useRef<any>(null);

    const [userDate, setUserDate] = useState(() => {
        return `${year}년 ${month}월 ${date}일`
    });
    const [userDate_B, setUserDate_B] = useState(() => {
        return `${year}-${month}-${date}`
    })
    const [checkState, setCheckState] = useState(false);
    const [lst, setLst] = useState([]);
    const [value, setValue] = useState("");
    const [postState, setPostState] = useState(false);

    //  타입 스크립트 인터페이스 정의
    interface dataSet {
        id: number;
        date: string;
        content: string;
        state: boolean;
    };

    // 

    useEffect(() => {
        axios.get('/select')
            .then((res) => {
                setLst(res.data);
            });

        console.log(lst)

        return setPostState(false);
    }, [postState]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleCheck = (item: dataSet) => {
        if (window.confirm("해당 일정을 완료하셨나요?")) {
            axios.put(`/update/${item.id}`, JSON.stringify({
                ...item,
                state: !item.state,
            }),
                {
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            )
                .then((res) => {
                    setPostState(true);
                })
        }
    }

    const handleDelete = (item: dataSet) => {
        if (window.confirm("해당 일정을 삭제하시겠어요?")) {
            axios.delete(`/delete/${item.id}`)
                .then((res) => {
                    setPostState(true);
                })
        }
    }

    const handleSubmit = () => {
        if (window.confirm("게시물을 작성하시겠어요?")) {
            if (value !== "") {
                axios.post('/create', JSON.stringify({
                    date: userDate_B,
                    content: value,
                    state: false,
                }),
                    {
                        headers: {
                            "Content-type": "application/json",
                        },
                    }
                )
                    .then((res) => {
                        alert("데이터를 성공적으로 넘겼어요!");
                        setValue("");
                        setPostState(true);
                        inputRef.current.value = "";
                    })

                    .catch((err) => {
                        alert(`오류,, ${err}`);
                        inputRef.current.value = "";
                    })
            } else {
                alert("제대로된 값을 입력해주세요!");
            }
        }
    };

    return (
        <>
            <Section>
                <Article>
                    <TitleSection>
                        <Title>오늘의 다이어리를 작성하고 <br />손쉽게 확인해요</Title>
                        <TitleImg src={enrollImg} />
                    </TitleSection>
                    <Container>
                        <ContentBox>
                            <div>
                                <SubTitle>날짜</SubTitle>
                                <Input placeholder="ex. 2022년 08월 18일" defaultValue={userDate} />
                            </div>
                            <div>
                                <SubTitle>오늘의 할 일</SubTitle>
                                <Input placeholder="제목을 입력해주세요" onChange={handleChange} ref={inputRef} defaultValue={value} />
                            </div>
                            <Button onClick={handleSubmit}>나의 오늘을 기록하기</Button>
                        </ContentBox>
                    </Container>
                </Article>
                <Article>
                    <TitleSection>
                        <Title>내가 작성한 리스트의 내역을 <br /> 여기서 볼 수 있어요</Title>
                        <TitleImg src={lstImg} />
                    </TitleSection>
                    <Container>
                        <ContentBox list>
                            <Content>
                                <SubTitle>상태</SubTitle>
                                {lst.map((item: dataSet) => {
                                    return (<CheckBox key={item.id} state={item.state} onClick={() => { handleCheck(item) }} />)
                                })}
                            </Content>
                            <Content>
                                <SubTitle>날짜</SubTitle>
                                {lst.map((item: dataSet) => {
                                    return (<ContentText key={item.id}>{item.date}</ContentText>)
                                })}
                            </Content>
                            <Content>
                                <SubTitle>리스트</SubTitle>
                                {lst.map((item: dataSet) => {
                                    return (<ContentText key={item.id}>{item.content}</ContentText>)
                                })}
                            </Content>
                            <Content>
                                <SubTitle>리스트 삭제</SubTitle>
                                {lst.map((item: dataSet) => {
                                    return (<DeleteBtn key={item.id} onClick={() => { handleDelete(item) }} />)
                                })}
                            </Content>
                        </ContentBox>
                    </Container>
                </Article>
            </Section>
        </>
    )
}
