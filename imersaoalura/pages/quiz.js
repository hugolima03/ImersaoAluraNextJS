import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../public/components/Widget';
import QuizLogo from '../public/components/QuizLogo';
import QuizBackground from '../public/components/QuizBackground';
import GithubCorner from '../public/components/GitHubCorner';
import BackgroundMask from '../public/components/BackgroundMask';
import QuizContainer from '../public/components/QuizContainer';

export default function QuizPage() {
  const router = useRouter();
  console.log(router.query.name);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <BackgroundMask>
        <QuizContainer>
          <QuizLogo />

          <Widget>
            <Widget.Header>
              <h1>
                Olá
                {' ' +router.query.name}
                !
                <br />
                Pergunta 1 de 5
              </h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>
        </QuizContainer>
        <GithubCorner projectUrl="https://github.com/hugolima03" />
      </BackgroundMask>
    </QuizBackground>
  );
}
