const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el) => revealObserver.observe(el));

const partData = {
  wing: {
    title: 'Asa',
    description: 'A asa cria a sustentação necessária para manter a aeronave no ar. Seu formato, perfil aerodinâmico, a extensão e as superfícies móveis influenciam diretamente a eficiência do voo.'
  },
  engine: {
    title: 'Motor',
    description: 'O motor produz empuxo ou potência para empurrar o avião para frente. Em aviões comerciais modernos, a maioria usa turbinas de alto rendimento com sistemas de controle e monitoramento integrados.'
  },
  fuselage: {
    title: 'Fuselagem',
    description: 'A fuselagem concentra a estrutura principal da aeronave, abriga passageiros, carga e sistemas, e transmite cargas aerodinâmicas para as asas e a empenagem.'
  },
  tail: {
    title: 'Empenagem',
    description: 'A empenagem dá estabilidade longitudinal e direcional ao avião. Profundores, leme de direção e estabilizadores ajudam o piloto a controlar arfagem e guinada.'
  },
  landing: {
    title: 'Trem de pouso',
    description: 'O trem de pouso suporta o avião no solo, absorve impacto no pouso e permite taxi, decolagem e manobras na superfície.'
  },
  hydraulic: {
    title: 'Sistemas hidráulicos',
    description: 'Os sistemas hidráulicos movem superfícies de controle, freios, trem de pouso e outros componentes críticos, com força elevada e resposta rápida.'
  }
};

const partButtons = document.querySelectorAll('.part-item');
const partHotspots = document.querySelectorAll('.hotspot');
const partTitle = document.getElementById('part-title');
const partDescription = document.getElementById('part-description');

const updatePart = (part) => {
  const data = partData[part];
  if (!data) return;
  if (partTitle) partTitle.textContent = data.title;
  if (partDescription) partDescription.textContent = data.description;

  partButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.part === part);
  });

  partHotspots.forEach((hotspot) => {
    hotspot.classList.toggle('active', hotspot.dataset.part === part);
  });
};

partButtons.forEach((button) => {
  button.addEventListener('click', () => updatePart(button.dataset.part));
});

partHotspots.forEach((hotspot) => {
  hotspot.addEventListener('click', () => updatePart(hotspot.dataset.part));
  hotspot.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      updatePart(hotspot.dataset.part);
    }
  });
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
