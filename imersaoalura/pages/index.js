import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../public/components/Widget';
import QuizLogo from '../public/components/QuizLogo';
import QuizBackground from '../public/components/QuizBackground';
import Footer from '../public/components/Footer';
import GithubCorner from '../public/components/GitHubCorner';
import BackgroundMask from '../public/components/BackgroundMask';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('Seu Nome');
  function initQuizz(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }
  function onChangeHandleName(event) {
    setName(event.target.value);
  }
  return (
    <QuizBackground backgroundImage={db.bg}>
      <BackgroundMask>
        <QuizContainer>
          <QuizLogo />

          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={initQuizz}>
                <input onChange={onChangeHandleName} placeholder="" />
                <button type="submit" disabled={name.length === 0}>
                  Jogar!
                </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>Opss, ainda não achei...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GithubCorner projectUrl="https://github.com/hugolima03" />
      </BackgroundMask>
    </QuizBackground>
  );
}
