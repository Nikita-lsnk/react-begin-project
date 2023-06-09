import React, { useState } from 'react'
import  styled  from 'styled-components'
import GameBlock from './GameBlock';
import ResultsBlock from './ResultsBlock';


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

const App = () => {

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];
  
  const onClickVariant = (index) => {
    console.log(step, index)
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }


  return (
    <Container>

      { step != questions.length ? (
        <GameBlock
        question = {question}
        onClickVariant = {onClickVariant}
        step={step}
      />
      ) : (
        <ResultsBlock
          correct = {correct}
        />
      )

      }
      
      
      {/* <ResultsBlock/> */}
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 500px;
  border-radius: 30px;
  padding: 40px;
  background-color: #fff;
  position: relative;
`;