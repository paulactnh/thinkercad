// ---------- Botão copiar código ----------
document.querySelectorAll('.copy-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    var codeEl = document.getElementById(btn.getAttribute('data-target'));
    var texto = codeEl.textContent;

    function marcarCopiado(){
      var original = btn.textContent;
      btn.textContent = 'copiado ✓';
      btn.classList.add('done');
      setTimeout(function(){
        btn.textContent = original;
        btn.classList.remove('done');
      }, 1500);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(marcarCopiado);
    } else {
      var textarea = document.createElement('textarea');
      textarea.value = texto;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      marcarCopiado();
    }
  });
});

// ---------- Simulador Sistema 1: sensor de presença ----------
var presencaAtiva = false;
var toggleBtn = document.getElementById('toggle-presenca');
var presencaLabel = document.getElementById('presenca-label');
var luz1 = document.getElementById('luz1');
var luzVal1 = document.getElementById('luzVal1');
var led1 = document.getElementById('led1');
var status1 = document.getElementById('status1');
var limiteLuz = 500;

function atualizarSistema1(){
  var luz = parseInt(luz1.value, 10);
  luzVal1.textContent = luz;

  var ligado = presencaAtiva && luz < limiteLuz;

  led1.classList.toggle('on', ligado);
  status1.textContent = ligado ? 'LED ligado' : 'LED desligado';
}

toggleBtn.addEventListener('click', function(){
  presencaAtiva = !presencaAtiva;
  presencaLabel.textContent = presencaAtiva ? 'presente' : 'ausente';
  atualizarSistema1();
});
luz1.addEventListener('input', atualizarSistema1);
atualizarSistema1();

// ---------- Simulador Sistema 2: estacionamento ----------
var dist2 = document.getElementById('dist2');
var pot2 = document.getElementById('pot2');
var distVal2 = document.getElementById('distVal2');
var potVal2 = document.getElementById('potVal2');
var led2 = document.getElementById('led2');
var status2 = document.getElementById('status2');
var piscaInterval = null;

function atualizarSistema2(){
  var distancia = parseInt(dist2.value, 10);
  var limite = parseInt(pot2.value, 10);
  distVal2.textContent = distancia + ' cm';
  potVal2.textContent = limite + ' cm';

  clearInterval(piscaInterval);
  piscaInterval = null;

  if (distancia > limite) {
    led2.classList.remove('on');
    status2.textContent = 'LED desligado (objeto distante)';
  } else if (distancia > limite / 2) {
    status2.textContent = 'LED piscando (aproximando)';
    piscaInterval = setInterval(function(){
      led2.classList.toggle('on');
    }, 300);
  } else {
    led2.classList.add('on');
    status2.textContent = 'LED ligado (dentro da distância)';
  }
}

dist2.addEventListener('input', atualizarSistema2);
pot2.addEventListener('input', atualizarSistema2);
atualizarSistema2();

// ---------- Simulador Sistema 3: estufa ----------
var temp3 = document.getElementById('temp3');
var hum3 = document.getElementById('hum3');
var tempVal3 = document.getElementById('tempVal3');
var humVal3 = document.getElementById('humVal3');
var ledVerde3 = document.getElementById('ledVerde3');
var ledAmarelo3 = document.getElementById('ledAmarelo3');
var ledVermelho3 = document.getElementById('ledVermelho3');
var status3 = document.getElementById('status3');

function atualizarSistema3(){
  var temperatura = parseInt(temp3.value, 10);
  var umidade = parseInt(hum3.value, 10);
  tempVal3.textContent = temperatura;
  humVal3.textContent = umidade;

  ledVerde3.classList.remove('on');
  ledAmarelo3.classList.remove('on', 'yellow');
  ledVermelho3.classList.remove('on', 'red');

  var temperaturaRuim = temperatura > 30 || temperatura < -10;
  var umidadeBaixa = umidade < 50;

  if (!temperaturaRuim && !umidadeBaixa) {
    ledVerde3.classList.add('on');
    status3.textContent = 'Condição adequada';
  } else if (temperaturaRuim && umidadeBaixa) {
    ledVermelho3.classList.add('on', 'red');
    status3.textContent = 'Temperatura elevada e umidade inadequada';
  } else if (umidadeBaixa || temperaturaRuim) {
    ledAmarelo3.classList.add('on', 'yellow');
    status3.textContent = temperaturaRuim ? 'Temperatura elevada' : 'Umidade inadequada';
  }
}

temp3.addEventListener('input', atualizarSistema3);
hum3.addEventListener('input', atualizarSistema3);
atualizarSistema3();
