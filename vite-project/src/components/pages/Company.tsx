import React from 'react';
import styles from '../styles/Company.module.css';

const Company: React.FC = () => {
  return (
    <div className={styles.companyContainer}>
      <h1>Cost Box: Sua Solução Completa para Gerenciamento de Projetos</h1>
      <p>
        <strong>Fundado em 12 de junho de 2022,</strong> o Cost Box surgiu com a missão de revolucionar a forma como empresas e profissionais independentes gerenciam seus projetos. Desde sua criação, o site tem se dedicado a fornecer ferramentas intuitivas e eficazes que facilitam o planejamento, a execução e o monitoramento de projetos de todas as dimensões e complexidades.
      </p>

      <h2>O Que é o Cost Box?</h2>
      <p>
        O Cost Box é uma plataforma online de gerenciamento de projetos projetada para ser uma solução completa para todas as necessidades de seus usuários. A plataforma oferece uma ampla gama de funcionalidades, incluindo:
      </p>
      <ul>
        <li><strong>Planejamento de Projetos:</strong> Crie cronogramas detalhados, defina marcos importantes e distribua tarefas de maneira eficiente.</li>
        <li><strong>Monitoramento e Relatórios:</strong> Acompanhe o progresso de seus projetos em tempo real com relatórios personalizados que fornecem insights valiosos para tomada de decisões.</li>
        <li><strong>Controle de Custos:</strong> Gerencie orçamentos, despesas e receitas, garantindo que seu projeto permaneça dentro dos limites financeiros estabelecidos.</li>
      </ul>

      <h2>Nossa Missão</h2>
      <p>
        A missão do Cost Box é simplificar o complexo mundo do gerenciamento de projetos, fornecendo uma plataforma que não apenas organiza e otimiza os processos, mas também capacita seus usuários a alcançarem resultados excepcionais. Entendemos que cada projeto é único e, por isso, oferecemos personalização e flexibilidade para atender às necessidades específicas de cada cliente.
      </p>

      <h2>Como Ajudamos Nossos Clientes</h2>
      <p>
        O Cost Box foi projetado para ser intuitivo e fácil de usar, mesmo para aqueles que não possuem experiência prévia em gerenciamento de projetos. Nosso objetivo é permitir que qualquer pessoa, de pequenas empresas a grandes corporações, possa gerenciar seus projetos com eficiência e eficácia. Desde a sua fundação, o Cost Box tem se comprometido a inovar e evoluir constantemente, ouvindo as necessidades dos clientes e adaptando suas funcionalidades para oferecer a melhor experiência possível. Junte-se a nós e descubra como podemos transformar a gestão dos seus projetos em um processo mais simples, eficaz e bem-sucedido.
      </p>
    </div>
  );
};

export default Company;
