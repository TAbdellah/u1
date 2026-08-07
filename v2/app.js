const toggle=document.querySelector('#teacherToggle');toggle?.addEventListener('click',()=>{document.body.classList.toggle('teacher-mode');const active=document.body.classList.contains('teacher-mode');toggle.textContent=active?'Élève':'Enseignant';if(active)document.querySelector('#enseignant')?.scrollIntoView({behavior:'smooth'});});

const reveal=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target);}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));

const explanations=[
  "Une situation concrète crée le besoin d'apprendre avant que la notion soit présentée.",
  "L'élève observe, manipule et formule des hypothèses avant l'explication formelle.",
  "Une trace courte stabilise le vocabulaire, la règle ou la procédure essentielle.",
  "Des activités progressives permettent de vérifier la compréhension et d'automatiser les acquis.",
  "Une tâche pratique mobilise les connaissances dans une situation proche du réel.",
  "Une vérification brève montre ce qui est acquis et ce qui doit encore être travaillé.",
  "L'erreur devient une information : une aide ciblée permet une nouvelle tentative."
];
const items=[...document.querySelectorAll('.method-item')];const detail=document.querySelector('#methodDetail');items.forEach((item,i)=>item.addEventListener('click',()=>{items.forEach(x=>x.classList.remove('active'));item.classList.add('active');if(detail){detail.innerHTML=`<span>${String(i+1).padStart(2,'0')}</span><p>${explanations[i]}</p>`;}}));
