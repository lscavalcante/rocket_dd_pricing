import { useState } from 'react'
import { Button } from '../components/Button';
import { CardPrice } from '../components/CardPrice';
import styles from './styles.module.scss';


function App() {

  return (
    <div className={styles.planes_bg}>
      <header className={styles.header}>
        <h1>Conheça nossos plano</h1>
        <span>Conheça nossas soluções e escolha o plano ideal para o seu próximo projeto.</span>
      </header>

      <section className={styles.prices}>
        <CardPrice
          title='Free'
          price='R$ 0,00'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          options={['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet',]}
          onClickBtn={() => {}}
          transparent
        />
        <CardPrice
          title='Básico'
          price='R$ 150,00'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          options={['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']}
          isPopular
          onClickBtn={() => {}}
        />
        <CardPrice
          title='Profissional'
          price='R$ 350,00'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          options={['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']}
          transparent
          onClickBtn={() => {}}
        />
      </section>
    </div>
  )
}

export default App
