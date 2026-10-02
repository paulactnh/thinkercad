/* =========================================================
   Quiz SAEP — banco de questões e lógica do quiz
   Formato: cada questão tem contexto, pergunta (gatilho)
   e 4 alternativas, com correção apenas ao final.
   ========================================================= */

var perguntas = [
// ---------- 1) ROBÓTICA INDUSTRIAL ----------
{
  tema: "Robótica Industrial",
  contexto: "Uma linha de montagem possui uma estação em que operadores precisam retirar peças de uma esteira enquanto um robô realiza operações de montagem ao lado deles. A empresa pretende reduzir o uso de barreiras físicas, mas precisa garantir que o robô identifique situações de contato ou aproximação e reduza ou interrompa seu movimento conforme as condições de segurança.",
  pergunta: "Considerando as características descritas para essa célula de trabalho, qual solução está mais alinhada à aplicação?",
  alternativas: [
    {
      id: "a",
      texto: "Utilizar um robô SCARA, pois sua elevada velocidade e precisão permitem que ele compartilhe o espaço com operadores sem necessidade de sistemas adicionais de segurança."
    },
    {
      id: "b",
      texto: "Utilizar um robô cartesiano equipado com sensores de posição, pois o controle dos eixos lineares é suficiente para detectar qualquer contato com um operador."
    },
    {
      id: "c",
      texto: "Utilizar um robô colaborativo, associado a recursos de detecção e limitação de força e velocidade, permitindo estratégias de operação compartilhada com pessoas."
    },
    {
      id: "d",
      texto: "Utilizar um robô articulado convencional, mantendo sua programação original, pois a redução da velocidade de movimento elimina a necessidade de sistemas específicos de segurança."
    }
  ],
  correta: "c",
  explicacao: "Robôs colaborativos são desenvolvidos para aplicações nas quais pessoas e robôs podem compartilhar determinadas áreas de trabalho. A colaboração depende de recursos de segurança, como monitoramento de força, velocidade e condições de operação, e não apenas do formato ou da velocidade do robô."
},

// ---------- 2) SENSORES IOT / INDUSTRIAIS (1) ----------
{
  tema: "Sensores IoT e Industriais",
  contexto: "Uma esteira industrial transporta peças metálicas de diferentes tamanhos. O sistema precisa identificar a presença de cada peça sem contato físico. O ambiente possui poeira e pequenas quantidades de óleo, e a detecção deve ocorrer mesmo quando a iluminação do local varia durante o turno.",
  pergunta: "Qual alternativa apresenta a escolha mais adequada para essa aplicação?",
  alternativas: [
    {
      id: "a",
      texto: "Sensor fotoelétrico, pois a variação de iluminação do ambiente permite diferenciar automaticamente peças metálicas de objetos não metálicos."
    },
    {
      id: "b",
      texto: "Sensor indutivo, pois utiliza um campo eletromagnético para detectar a aproximação de materiais metálicos sem depender diretamente da iluminação do ambiente."
    },
    {
      id: "c",
      texto: "Sensor LDR, pois a presença de uma peça metálica provoca uma alteração suficiente na intensidade luminosa recebida pelo sensor."
    },
    {
      id: "d",
      texto: "Sensor capacitivo, pois sua principal característica é detectar exclusivamente materiais metálicos a partir da variação do campo magnético."
    }
  ],
  correta: "b",
  explicacao: "O sensor indutivo é apropriado para detectar objetos metálicos sem contato e não depende da luminosidade ambiente para realizar a detecção. Isso o torna adequado para a situação descrita."
},

// ---------- 3) SENSORES IOT / INDUSTRIAIS (2) ----------
{
  tema: "Sensores IoT e Industriais",
  contexto: "Uma indústria instalou sensores de temperatura e vibração em motores. Os dados são enviados periodicamente para um servidor, onde são armazenados e analisados. Quando determinados padrões são identificados, a equipe de manutenção recebe um alerta antes que uma falha grave ocorra.",
  pergunta: "A situação descrita combina diferentes tecnologias. Qual alternativa identifica corretamente o conceito relacionado à conexão dos dispositivos e ao uso dos dados?",
  alternativas: [
    {
      id: "a",
      texto: "Trata-se principalmente de automação convencional, pois a existência de sensores elimina a necessidade de comunicação entre os equipamentos e o servidor."
    },
    {
      id: "b",
      texto: "Trata-se de IIoT, pois dispositivos físicos industriais coletam dados e utilizam comunicação em rede para possibilitar monitoramento, análise e tomada de decisão."
    },
    {
      id: "c",
      texto: "Trata-se exclusivamente de um sistema SCADA, pois qualquer sistema que apresente informações de sensores em um servidor passa automaticamente a ser classificado como SCADA."
    },
    {
      id: "d",
      texto: "Trata-se de um sistema embarcado isolado, pois os sensores realizam o processamento localmente e não dependem de comunicação para gerar os alertas."
    }
  ],
  correta: "b",
  explicacao: "A IIoT envolve a conexão de dispositivos e equipamentos industriais para coleta, transmissão e análise de dados. A situação também pode utilizar outras tecnologias, mas o conceito de IIoT descreve justamente essa integração entre dispositivos físicos, comunicação e dados."
},

// ---------- 4) MULTÍMETRO ----------
{
  tema: "Multímetro",
  contexto: "Um técnico precisa verificar se um cabo apresenta uma interrupção interna. O cabo está completamente desconectado da fonte de alimentação e suas duas extremidades estão acessíveis. Ao realizar o teste, o multímetro apresenta um valor muito elevado de resistência entre as pontas.",
  pergunta: "Qual interpretação é mais adequada para o resultado obtido?",
  alternativas: [
    {
      id: "a",
      texto: "O resultado indica baixa resistência e, portanto, confirma que existe continuidade elétrica entre as extremidades do cabo."
    },
    {
      id: "b",
      texto: "O resultado pode indicar uma interrupção ou resistência muito elevada no caminho elétrico, sendo compatível com um cabo rompido."
    },
    {
      id: "c",
      texto: "O resultado comprova que o cabo está conduzindo sua corrente nominal, pois valores elevados de resistência são esperados durante o teste de continuidade."
    },
    {
      id: "d",
      texto: "O resultado não pode ser utilizado para avaliar o cabo, pois medições de resistência devem ser realizadas obrigatoriamente com o circuito energizado."
    }
  ],
  correta: "b",
  explicacao: "Em um teste de resistência ou continuidade realizado com o circuito desenergizado, um caminho elétrico íntegro tende a apresentar resistência baixa. Uma resistência muito elevada pode indicar interrupção no condutor."
},

// ---------- 5) ARDUINO — CONCEITOS (1) ----------
{
  tema: "Arduino",
  contexto: "Um programa deve acionar um relé conectado ao pino 8 do Arduino. O relé deve permanecer desligado durante a inicialização e só será acionado posteriormente, quando uma determinada condição for satisfeita no programa.",
  pergunta: "Qual sequência apresenta uma configuração inicial coerente para esse comportamento?",
  alternativas: [
    {
      id: "a",
      texto: "Configurar o pino 8 como INPUT e utilizar digitalRead(8) no setup(), deixando o programa decidir posteriormente se o relé deve receber HIGH."
    },
    {
      id: "b",
      texto: "Configurar o pino 8 como OUTPUT e estabelecer seu estado inicial com digitalWrite(8, LOW), antes de executar a lógica responsável pelo acionamento."
    },
    {
      id: "c",
      texto: "Configurar o pino 8 como OUTPUT e utilizar analogRead(8), pois a leitura analógica impede que o relé seja acionado durante a inicialização."
    },
    {
      id: "d",
      texto: "Configurar o pino 8 como INPUT_PULLUP e utilizar digitalWrite(8, HIGH), pois qualquer pino configurado como entrada pode controlar diretamente um relé."
    }
  ],
  correta: "b",
  explicacao: "Para controlar uma carga por meio de um pino digital, o pino deve ser configurado como OUTPUT. Definir LOW inicialmente estabelece o estado inicial desejado antes da execução das condições de controle."
},

// ---------- 6) ARDUINO — CONCEITOS (2) ----------
{
  tema: "Arduino",
  contexto: "Um sistema utiliza um LDR para medir a luminosidade e um LED para indicar o resultado. O valor fornecido pelo LDR precisa ser comparado com um limite definido pelo programa. Quando a luminosidade muda gradualmente, o sistema também precisa perceber essa variação.",
  pergunta: "Qual arquitetura de entradas e saídas é mais coerente com essa aplicação?",
  alternativas: [
    {
      id: "a",
      texto: "Utilizar uma entrada analógica para o LDR e uma saída digital para o LED, permitindo obter uma leitura variável e controlar o estado do LED."
    },
    {
      id: "b",
      texto: "Utilizar uma entrada digital para o LDR, pois o Arduino converte automaticamente qualquer variação de tensão em uma escala analógica quando digitalRead() é utilizado."
    },
    {
      id: "c",
      texto: "Utilizar uma entrada analógica para o LDR e uma entrada digital para o LED, pois LEDs devem ser conectados a entradas para receber o comando do programa."
    },
    {
      id: "d",
      texto: "Utilizar exclusivamente pinos PWM, pois entradas PWM são responsáveis por medir sensores analógicos e saídas PWM não podem ser utilizadas como sinais digitais."
    }
  ],
  correta: "a",
  explicacao: "O LDR pode ser conectado a uma entrada analógica para que sua variação de tensão seja convertida em valores numéricos. O LED pode ser controlado por uma saída digital, utilizando HIGH e LOW."
},

// ---------- 7) ESP ----------
{
  tema: "ESP",
  contexto: "Um protótipo possui sensores de temperatura e umidade e deve enviar os dados para uma plataforma online. O equipamento ficará instalado em um local onde não haverá computador conectado continuamente ao dispositivo. O projeto também precisa manter baixo número de componentes externos.",
  pergunta: "Qual característica de uma placa baseada em ESP32 é particularmente relevante nesse cenário?",
  alternativas: [
    {
      id: "a",
      texto: "A presença de Wi-Fi e Bluetooth integrados permite que o microcontrolador realize comunicação sem depender obrigatoriamente de um módulo externo específico para essas funções."
    },
    {
      id: "b",
      texto: "A placa possui apenas funções de comunicação e, por isso, os sensores precisam ser processados por um Arduino separado antes do envio dos dados."
    },
    {
      id: "c",
      texto: "A conexão Wi-Fi do ESP32 substitui a necessidade de um programa, pois a placa consegue identificar automaticamente os sensores e definir como seus dados serão enviados."
    },
    {
      id: "d",
      texto: "O ESP32 utiliza exclusivamente Bluetooth para acessar serviços de internet, sendo necessário adicionar um módulo Wi-Fi externo para qualquer comunicação com a nuvem."
    }
  ],
  correta: "a",
  explicacao: "O ESP32 integra recursos de comunicação como Wi-Fi e Bluetooth, além de possuir entradas e saídas que permitem trabalhar diretamente com diversos sensores e atuadores. A comunicação com uma plataforma online ainda depende da programação e da configuração da rede."
},

// ---------- 8) CÓDIGO (1) — OPERADORES LÓGICOS ----------
{
  tema: "Código",
  contexto: "Um sistema controla a iluminação de uma sala com base na presença de pessoas e na luminosidade medida por um LDR.",
  codigo: `
if (movimento == HIGH && luz < limiteLuz) {
  digitalWrite(led, HIGH);
}
else {
  digitalWrite(led, LOW);
}
`,
  pergunta: "Considerando que movimento pode assumir HIGH ou LOW e luz representa o valor medido pelo LDR, qual situação fará o LED permanecer ligado?",
  alternativas: [
    {
      id: "a",
      texto: "movimento == HIGH e luz < limiteLuz, pois as duas condições precisam ser verdadeiras para que o primeiro bloco seja executado."
    },
    {
      id: "b",
      texto: "movimento == HIGH ou luz < limiteLuz, pois o operador && permite que qualquer uma das condições seja suficiente."
    },
    {
      id: "c",
      texto: "movimento == LOW e luz < limiteLuz, pois o sistema interpreta a ausência de movimento como condição para manter a iluminação."
    },
    {
      id: "d",
      texto: "movimento == HIGH e luz > limiteLuz, pois valores maiores de luminosidade representam ambientes mais adequados para ativar o LED."
    }
  ],
  correta: "a",
  explicacao: "O operador && representa uma condição lógica E. Portanto, movimento precisa ser HIGH e, simultaneamente, luz precisa ser menor que limiteLuz para o bloco do LED ser executado."
},

// ---------- 9) CÓDIGO (2) — map() ----------
{
  tema: "Código",
  contexto: "Um sensor fornece valores de 0 a 1023. O programa utiliza o seguinte comando para transformar a leitura em um valor usado como referência de distância:",
  codigo: `
limite = map(valorSensor, 0, 1023, 10, 150);
`,
  pergunta: "Um estudante afirma que, quando valorSensor aumenta, limite também aumenta de forma proporcional dentro da faixa configurada. Considerando o funcionamento de map(), qual interpretação está correta?",
  alternativas: [
    {
      id: "a",
      texto: "A afirmação está correta, pois o comando estabelece uma correspondência entre a faixa 0–1023 e a faixa 10–150, realizando uma transformação proporcional."
    },
    {
      id: "b",
      texto: "A afirmação está incorreta, pois map() apenas limita o valor recebido entre 10 e 150, sem alterar sua escala."
    },
    {
      id: "c",
      texto: "A afirmação está correta apenas se valorSensor estiver entre 10 e 150, pois esses são os limites utilizados como entrada da função."
    },
    {
      id: "d",
      texto: "A afirmação está incorreta, pois map() converte automaticamente qualquer valor analógico em centímetros independentemente das faixas informadas."
    }
  ],
  correta: "a",
  explicacao: "map() transforma um valor de uma faixa para outra. Nesse caso, valores da faixa 0–1023 são relacionados proporcionalmente à faixa 10–150."
},

// ---------- 10) CÓDIGO (3) — CONDIÇÕES COMBINADAS ----------
{
  tema: "Código",
  contexto: "Um sistema de monitoramento de uma estufa possui três indicadores: verde, amarelo e vermelho. O vermelho deve indicar uma situação em que a temperatura esteja acima do limite E a umidade esteja abaixo do limite.",
  codigo: `
if (temperaturaRuim && umidadeBaixa) {
  digitalWrite(vermelho, HIGH);
}
else if (temperaturaRuim || umidadeBaixa) {
  digitalWrite(amarelo, HIGH);
}
else {
  digitalWrite(verde, HIGH);
}
`,
  pergunta: "Em uma determinada leitura, temperaturaRuim é verdadeira e umidadeBaixa é falsa. Qual comportamento deve ocorrer?",
  alternativas: [
    {
      id: "a",
      texto: "O LED vermelho será acionado, pois basta uma das condições da primeira expressão ser verdadeira para que && seja satisfeita."
    },
    {
      id: "b",
      texto: "O LED amarelo será acionado, pois a primeira condição falha, mas pelo menos uma das condições da segunda expressão é verdadeira."
    },
    {
      id: "c",
      texto: "O LED verde será acionado, pois a ausência de umidade baixa indica que a condição geral da estufa é adequada."
    },
    {
      id: "d",
      texto: "Os LEDs vermelho e amarelo serão acionados simultaneamente, pois o programa executa todos os blocos cujas variáveis possuem valor verdadeiro."
    }
  ],
  correta: "b",
  explicacao: "A primeira condição usa &&, portanto temperaturaRuim e umidadeBaixa precisariam ser verdadeiras ao mesmo tempo para acionar o vermelho. Como apenas temperaturaRuim é verdadeira, o primeiro if falha. Em seguida, o || do else if é satisfeito e o amarelo é acionado."
}
];

// ---------- estado do quiz ----------
var indiceAtual = 0;
var respostas = new Array(perguntas.length).fill(null);

// ---------- elementos ----------
var introScreen = document.getElementById('intro-screen');
var quizScreen = document.getElementById('quiz-screen');
var resultScreen = document.getElementById('result-screen');

var startBtn = document.getElementById('start-btn');
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');
var restartBtn = document.getElementById('restart-btn');

var progressFill = document.getElementById('progress-fill');
var progressText = document.getElementById('progress-text');
var temaBadge = document.getElementById('tema-badge');
var contextoBox = document.getElementById('contexto-box');
var perguntaText = document.getElementById('pergunta-text');
var alternativasContainer = document.getElementById('alternativas-container');

var scoreNumber = document.getElementById('score-number');
var scoreLabel = document.getElementById('score-label');
var reviewList = document.getElementById('review-list');

var letras = { a: 'A', b: 'B', c: 'C', d: 'D' };

// ---------- renderiza a questão atual ----------
function renderizarQuestao(){
  var q = perguntas[indiceAtual];

  progressFill.style.width = (((indiceAtual + 1) / perguntas.length) * 100) + '%';
  progressText.textContent = 'Questão ' + (indiceAtual + 1) + ' de ' + perguntas.length;
  temaBadge.textContent = q.tema;

  var htmlContexto = q.contexto;
  if (q.codigo) {
    htmlContexto += '<code>' + escaparHtml(q.codigo) + '</code>';
  }
  contextoBox.innerHTML = htmlContexto;

  perguntaText.textContent = q.pergunta;

  alternativasContainer.innerHTML = '';
  q.alternativas.forEach(function(alt){
    var btn = document.createElement('button');
    btn.className = 'alt-btn';
    btn.setAttribute('data-id', alt.id);
    if (respostas[indiceAtual] === alt.id) {
      btn.classList.add('selected');
    }

    var letra = document.createElement('span');
    letra.className = 'alt-letter';
    letra.textContent = letras[alt.id];

    var texto = document.createElement('span');
    texto.textContent = alt.texto;

    btn.appendChild(letra);
    btn.appendChild(texto);

    btn.addEventListener('click', function(){
      respostas[indiceAtual] = alt.id;
      renderizarQuestao();
    });

    alternativasContainer.appendChild(btn);
  });

  prevBtn.style.visibility = (indiceAtual === 0) ? 'hidden' : 'visible';
  nextBtn.disabled = (respostas[indiceAtual] === null);
  nextBtn.textContent = (indiceAtual === perguntas.length - 1) ? 'Finalizar quiz' : 'Próxima';
}

function escaparHtml(texto){
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ---------- navegação ----------
startBtn.addEventListener('click', function(){
  introScreen.hidden = true;
  quizScreen.hidden = false;
  renderizarQuestao();
});

prevBtn.addEventListener('click', function(){
  if (indiceAtual > 0) {
    indiceAtual--;
    renderizarQuestao();
  }
});

nextBtn.addEventListener('click', function(){
  if (respostas[indiceAtual] === null) return;

  if (indiceAtual < perguntas.length - 1) {
    indiceAtual++;
    renderizarQuestao();
  } else {
    mostrarResultado();
  }
});

restartBtn.addEventListener('click', function(){
  indiceAtual = 0;
  respostas = new Array(perguntas.length).fill(null);
  resultScreen.hidden = true;
  introScreen.hidden = false;
});

// ---------- tela de resultado ----------
function mostrarResultado(){
  quizScreen.hidden = true;
  resultScreen.hidden = false;

  var acertos = 0;
  reviewList.innerHTML = '';

  perguntas.forEach(function(q, i){
    var respostaAluno = respostas[i];
    var acertou = respostaAluno === q.correta;
    if (acertou) acertos++;

    var item = document.createElement('div');
    item.className = 'review-item';

    var head = document.createElement('div');
    head.className = 'review-item-head';

    var numero = document.createElement('span');
    numero.className = 'review-q-num';
    numero.textContent = 'Questão ' + (i + 1) + ' · ' + q.tema;

    var status = document.createElement('span');
    status.className = 'review-status ' + (acertou ? 'correct' : 'wrong');
    status.textContent = acertou ? 'correta' : 'incorreta';

    head.appendChild(numero);
    head.appendChild(status);

    var perguntaEl = document.createElement('p');
    perguntaEl.className = 'review-pergunta';
    perguntaEl.textContent = q.pergunta;

    var suaResposta = document.createElement('p');
    suaResposta.className = 'review-answer';
    suaResposta.innerHTML = 'Sua resposta: <b>' + letras[respostaAluno] + '</b> — ' + q.alternativas.find(function(a){ return a.id === respostaAluno; }).texto;

    var respostaCorreta = document.createElement('p');
    respostaCorreta.className = 'review-answer';
    respostaCorreta.innerHTML = 'Alternativa correta: <b>' + letras[q.correta] + '</b> — ' + q.alternativas.find(function(a){ return a.id === q.correta; }).texto;

    var explicacao = document.createElement('p');
    explicacao.className = 'review-explicacao';
    explicacao.textContent = q.explicacao;

    item.appendChild(head);
    item.appendChild(perguntaEl);
    item.appendChild(suaResposta);
    if (!acertou) item.appendChild(respostaCorreta);
    item.appendChild(explicacao);

    reviewList.appendChild(item);
  });

  scoreNumber.textContent = acertos + '/' + perguntas.length;

  var percentual = Math.round((acertos / perguntas.length) * 100);
  var mensagem;
  if (percentual >= 80) mensagem = 'Excelente domínio dos conteúdos avaliados.';
  else if (percentual >= 60) mensagem = 'Bom resultado — revise os temas das questões erradas.';
  else mensagem = 'Vale revisar os conteúdos abaixo antes de tentar novamente.';

  scoreLabel.textContent = percentual + '% de acerto · ' + mensagem;
}
