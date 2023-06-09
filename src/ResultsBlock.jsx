import React from 'react'
import styled from 'styled-components'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Где правильно выведен компонент через рендер?',
    variants: [
      '<Test>',
      '<Test />',
      '</Test>',
    ],
    correct: 1,
  },
  {
    title: 'Какой метод отвечает за вывод информации через React JS компонент?',
    variants: [
      'ReactDOM',
      'console',
      'render',
    ],
    correct: 2,
  },
  {
    title: 'Сколько родительских HTML тегов может быть выведено в React JS компоненте?',
    variants: [
      'Не более 3',
      'Неограниченное количество',
      'Всегда 1',
    ],
    correct: 2,
  },
  {
    title: 'От какого класса идет наследование всех компонентов?',
    variants: [
      'React.Component',
      'ReactJS.Component',
      'ReactComponent',
    ],
    correct: 0,
  },
];

const ResultsBlock = ({correct}) => {
  return (
    <Container>
      <Img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <Title>Вы отгадали {correct} ответа из {questions.length}</Title>
      <MainButton> <StyledLink href='/'>Попробовать снова</StyledLink></MainButton>
    </Container>
  )
}

export default ResultsBlock

const Container = styled.div`
  text-align: center;
`;
const Img = styled.img`
  width: 150px;
`;
const Title = styled.h2`
  margin-bottom: 0;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #ffffff;
`;
const MainButton = styled.button`
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  border-radius: 30px;
  border: 0;
  padding: 15px 30px;
  font-size: 20px;
  background-color: #ff006e;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
`;