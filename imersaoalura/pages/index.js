import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../public/components/Widget';
import QuizLogo from '../public/components/QuizLogo';
import QuizBackground from '../public/components/QuizBackground';
import GithubCorner from '../public/components/GitHubCorner';
import BackgroundMask from '../public/components/BackgroundMask';
import QuizContainer from '../public/components/QuizContainer';
import Input from '../public/components/Input';
import Button from '../public/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
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
                <Input
                  onChange={onChangeHandleName}
                  placeholder="Diz ai seu nome para jogar :)"
                  name="nomeDoUsuario"
                />
                <Button type="submit" disabled={name.length === 0}>
                  Jogar!
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>Opss, ainda não achei...</p>
            </Widget.Content>
          </Widget>
        </QuizContainer>
        <GithubCorner projectUrl="https://github.com/hugolima03" />
      </BackgroundMask>
    </QuizBackground>
  );
}
