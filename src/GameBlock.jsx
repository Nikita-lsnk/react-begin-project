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

const GameBlock = ({question, onClickVariant, step}) => {

  const percentage = Math.round((step / questions.length) * 100);

  console.log(percentage);

  return (
    <>
      <Progress>
        <ProgressLiner style={{width: `${percentage}%`}}></ProgressLiner>
      </Progress>
      <Title>{question.title}</Title>
      <List>
        {question.variants.map( (text, index) => (
        <Item onClick = { () => {onClickVariant(index)}} key={text}>{text}</Item>
        ))}
      </List>
    </>
  )
}

export default GameBlock

const Progress = styled.div`
  height: 10px;
  border-radius: 30px;
  background-color: rgb(232, 232, 232);
  margin-bottom: 25px;
`;

const ProgressLiner = styled.div`
  height: 100%;
  border-radius: 30px;
  width: 80%;
  background: rgb(18, 231, 48);
  transition: all 0.3s ease-in-out;
  background: linear-gradient(90deg, rgba(18, 231, 48, 1) 0%, rgba(0, 212, 255, 1) 100%);
`;

const Title = styled.h1`
  margin: 0;
  
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  padding: 15px;
  border: 2px solid #b5b5b5;
  border-radius: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover{
    border: 2px solid #333333;
  }
`;