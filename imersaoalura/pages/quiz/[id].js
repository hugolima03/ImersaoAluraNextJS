/* eslint-disable react/prop-types */
import React from 'react';
import QuizScreen from '../../public/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
      <pre style={{ color: 'black' }}>{JSON.stringify(dbExterno)}</pre>
    </>
  );
}

export async function getServerSideProps() {
  const dbExterno = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Falha em pegar os dados');
    })
    .then((responsaDoServerJSON) => responsaDoServerJSON)
    .catch((err) => {
      console.error(err);
    });
  return {
    props: {
      dbExterno,
    },
  };
}
