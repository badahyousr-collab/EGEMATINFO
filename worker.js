const MAIN_MENU = {inline_keyboard: [[{text:"📚 ЕГЭ",callback_data:"ege"}]]};
const EGE_MENU = {inline_keyboard: [[{text:"📐 Математика",callback_data:"math"}],[{text:"⬅️ Назад",callback_data:"back_main"}]]};
const MATH_MENU = {inline_keyboard: [[{text:"📘 Профильная математика",callback_data:"profile_math"}],[{text:"⬅️ Назад",callback_data:"back_ege"}]]};
const PROFILE_MENU = {
  inline_keyboard: [
    [{text:"📖 Открыть мини-шпору",web_app:{url:"https://egematinfo.badahyousr.workers.dev/app"}}],
    [{text:"🔎 Поиск",web_app:{url:"https://egematinfo.badahyousr.workers.dev/app?search=1"}}],
    [{text:"⬅️ Назад",callback_data:"back_math"}]
  ]
};

const TASKS_2027 = [
  [1,"Планиметрия",["Треугольник","Окружность","Теорема Фалеса","Чевиана и площади"]],
  [2,"Векторы",["Векторы"]],
  [3,"Стереометрия",["Стереометрия","Шар","Прямая и плоскость"]],
  [4,"Вероятность случайного события",["Вероятность"]],
  [5,"Теоремы о вероятностях",["Вероятность"]],
  [6,"Случайная величина",["Случайные величины"]],
  [7,"Уравнения",["Квадратные уравнения","Степени и корни","Модули и ОДЗ","Логарифмы","Тригонометрия"]],
  [8,"Вычисления и преобразования",["Формулы сокращённого умножения","Степени и корни","Модули и ОДЗ","Логарифмы","Тригонометрия"]],
  [9,"Производная и первообразная",["Производная","Первообразная и интеграл"]],
  [10,"Прикладное содержание: расчёт по формуле",["Формулы сокращённого умножения","Степени и корни"]],
  [11,"Текстовая задача",["Арифметическая прогрессия","Геометрическая прогрессия","Квадратные уравнения"]],
  [12,"Функции и графики",["Парабола","Производная","Логарифмы","Тригонометрия"]],
  [13,"Текстовая задача, в том числе личные финансы",["Финансовая математика","Арифметическая прогрессия","Геометрическая прогрессия"]],
  [14,"Уравнение с отбором корней",["Квадратные уравнения","Логарифмы","Тригонометрия","Модули и ОДЗ"]],
  [15,"Стереометрия: доказательство и вычисление",["Стереометрия","Шар","Прямая и плоскость","Векторы"]],
  [16,"Неравенство",["Квадратные уравнения","Степени и корни","Логарифмы","Модули и ОДЗ","Тригонометрия"]],
  [17,"Прикладная задача: математическая модель",["Производная","Первообразная и интеграл","Квадратные уравнения","Парабола","Финансовая математика"]],
  [18,"Планиметрия: доказательство и вычисление",["Треугольник","Медиана и биссектриса","Окружность","Чевиана и площади","Теорема Фалеса","Теорема Птолемея"]],
  [19,"Задача с параметром",["Параметры","Квадратные уравнения","Парабола","Логарифмы","Модули и ОДЗ"]],
  [20,"Числа и их свойства",["Числа и свойства","Квадратные уравнения","Степени и корни"]]
];

const FORMULAS = [
  ["Формулы сокращённого умножения","(a+b)²=a²+2ab+b²\n(a-b)²=a²-2ab+b²\na²-b²=(a-b)(a+b)\n(a+b)³=a³+3a²b+3ab²+b³\n(a-b)³=a³-3a²b+3ab²-b³\na³+b³=(a+b)(a²-ab+b²)\na³-b³=(a-b)(a²+ab+b²)"],
  ["Степени и корни","aᵐ·aⁿ=aᵐ⁺ⁿ\naᵐ/aⁿ=aᵐ⁻ⁿ\n(aᵐ)ⁿ=aᵐⁿ\n(ab)ⁿ=aⁿbⁿ\na⁰=1 (a≠0)\n√(ab)=√a·√b\n√(a/b)=√a/√b"],
  ["Модули и ОДЗ","|x|=x, если x≥0; |x|=-x, если x<0\n|x|=a ⇔ x=±a (a≥0)\nПри дробях знаменатель ≠0\nПодкоренное выражение ≥0 для корня чётной степени\nОснование логарифма >0 и ≠1"],
  ["Квадратные уравнения","ax²+bx+c=0\nD=b²-4ac\nx₁,₂=(-b±√D)/(2a)\nx₁+x₂=-b/a\nx₁x₂=c/a"],
  ["Логарифмы","logₐ(xy)=logₐx+logₐy\nlogₐ(x/y)=logₐx-logₐy\nlogₐ(xᵏ)=k·logₐx\nlogₐa=1\nlogₐ1=0\nlogₐb=ln b/ln a\na^(logₐx)=x"],
  ["Тригонометрия","sin²x+cos²x=1\ntg x=sin x/cos x\nctg x=cos x/sin x\n1+tg²x=1/cos²x\n1+ctg²x=1/sin²x\nsin(α±β)=sinαcosβ±cosαsinβ\ncos(α±β)=cosαcosβ∓sinαsinβ"],
  ["Производная","(C)'=0\n(xⁿ)'=n·xⁿ⁻¹\n(eˣ)'=eˣ\n(ln x)'=1/x\n(sin x)'=cos x\n(cos x)'=-sin x\n(tg x)'=1/cos²x\n(fg)'=f'g+fg'\n(f/g)'=(f'g-fg')/g²"],
  ["Первообразная и интеграл","∫xⁿdx=xⁿ⁺¹/(n+1)+C, n≠-1\n∫dx/x=ln|x|+C\n∫eˣdx=eˣ+C\n∫sin x dx=-cos x+C\n∫cos x dx=sin x+C\n∫ₐᵇ f(x)dx=F(b)-F(a)"],
  ["Арифметическая прогрессия","aₙ=a₁+(n-1)d\nSₙ=n(a₁+aₙ)/2\nSₙ=n(2a₁+(n-1)d)/2\naₙ=(aₙ₋₁+aₙ₊₁)/2"],
  ["Геометрическая прогрессия","bₙ=b₁qⁿ⁻¹\nSₙ=b₁(qⁿ-1)/(q-1), q≠1\nS∞=b₁/(1-q), |q|<1\nbₙ²=bₙ₋₁bₙ₊₁"],
  ["Треугольник","S=ahₐ/2\nS=ab·sinγ/2\nS=√(p(p-a)(p-b)(p-c))\np=(a+b+c)/2\na/sin A=b/sin B=c/sin C=2R\na²=b²+c²-2bc·cos A\nS=pr\nS=abc/(4R)"],
  ["Медиана и биссектриса","mₐ=1/2·√(2b²+2c²-a²)\nБиссектриса: BD/DC=AB/AC\nТочка пересечения медиан делит медиану в отношении 2:1"],
  ["Окружность","L=2πR\nS=πR²\nДлина дуги: l=πRα/180°\nПлощадь сектора: S=πR²α/360°\nКасательная перпендикулярна радиусу в точке касания\nВписанный угол равен половине дуги"],
  ["Чевиана и площади","Если чевианы пересекаются в одной точке, отношения площадей можно сводить к отношениям соответствующих оснований и высот\nДля медианы: площади двух треугольников по разные стороны медианы равны"],
  ["Теорема Фалеса","Параллельные прямые, пересекающие стороны угла, отсекают на них пропорциональные отрезки"],
  ["Теорема Птолемея","Для вписанного четырёхугольника: AC·BD=AB·CD+BC·AD"],
  ["Стереометрия","V_призмы=S_осн·h\nV_пирамиды=S_осн·h/3\nV_цилиндра=πR²h\nV_конуса=πR²h/3\nS_бок цилиндра=2πRh\nS_бок конуса=πRl"],
  ["Шар","V=4πR³/3\nS=4πR²\nПлощадь большого круга=πR²"],
  ["Прямая и плоскость","Расстояние между параллельными плоскостями — длина перпендикуляра\nЕсли прямая перпендикулярна двум пересекающимся прямым плоскости, то она перпендикулярна плоскости\nsin угла между прямой и плоскостью = длина проекции / длина отрезка"],
  ["Парабола","y=ax²+bx+c\nx₀=-b/(2a)\ny₀=f(x₀)\nD=b²-4ac\nОсь симметрии: x=-b/(2a)"],
  ["Параметры","При задачах с параметром отдельно проверять допустимые значения параметра и количество корней\nГраницы областей удобно получать из условий касания: D=0"],
  ["Векторы","a·b=|a||b|cosα\n|a|=√(x²+y²+z²)\nДля перпендикулярных векторов: a·b=0"],
  ["Вероятность","P(A)=m/n при равновозможных исходах\nP(не A)=1-P(A)\nP(A∩B)=P(A)P(B), если события независимы\nP(A∪B)=P(A)+P(B)-P(A∩B)"],
  ["Случайные величины","Математическое ожидание: M(X)=Σxᵢpᵢ\nДисперсия: D(X)=M(X²)-[M(X)]²\nСреднее квадратическое отклонение: σ(X)=√D(X)\nДля равномерного распределения на [a;b]: M(X)=(a+b)/2"],
  ["Финансовая математика","S=P(1+r)^n — рост суммы при начислении процентов\nP=S/(1+r)^n — первоначальная сумма\nАннуитетный платёж: A=P·r(1+r)^n/((1+r)^n-1)\nПри сложных процентах проценты начисляются на накопленную сумму"],
  ["Числа и свойства","a делится на b ⇔ a=kb, k∈ℤ\nНОД(a,b) — наибольший общий делитель\nНОК(a,b) — наименьшее общее кратное\nНОД(a,b)·НОК(a,b)=|ab|\nПростое число имеет ровно два натуральных делителя: 1 и само себя"]
];

const APP_CSS = `
:root{color-scheme:dark;--bg:#20252b;--card:#2b3138;--card2:#343b43;--text:#e7eaee;--muted:#aeb7c2;--accent:#7fb3ff}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif}
.wrap{max-width:760px;margin:auto;padding:16px 14px 32px}.top{position:sticky;top:0;z-index:5;background:rgba(32,37,43,.96);padding:8px 0 14px;backdrop-filter:blur(10px)}
h1{font-size:24px;margin:4px 0 12px}.sub{color:var(--muted);font-size:13px;margin-bottom:14px}
input{width:100%;background:#292f36;border:1px solid #414953;color:var(--text);border-radius:12px;padding:13px 14px;font-size:16px;outline:none}
input:focus{border-color:#6e9edb}.section{margin:16px 0 10px;font-size:18px;font-weight:700}.card{background:var(--card);border:1px solid #3b424a;border-radius:14px;margin:9px 0;overflow:hidden}
.title{padding:14px 15px;font-size:17px;font-weight:700;background:var(--card2)}.formula{padding:14px 15px;white-space:pre-line;font-family:"Times New Roman",serif;font-size:19px;line-height:1.7;color:#f0f2f4}
.hidden{display:none}.count{color:var(--muted);font-size:13px;margin-top:9px}
`;

function appHtml(){
  const byTitle=new Map(FORMULAS);
  const taskSections=TASKS_2027.map(([num,title,names])=>{
    const cards=names.map(name=>{
      const body=byTitle.get(name);
      if(!body)return "";
      return \`<div class="formula-card" data-search="\${num \${title \${name \${body"><div class="formula-title">\${name</div><div class="formula">\${body</div></div>\`;
    }).join("");
    return \`<article class="task" data-search="\${num \${title \${names"><button class="task-head" type="button" onclick="toggleTask(this)"><span><b>№\${num</b><span class="task-title">\${title</span></span><span class="chevron">⌄</span></button><div class="task-body">\${cards</div></article>\`;
  }).join("");
  const allSections=FORMULAS.map(([title,body],i)=>\`<div class="formula-card" data-search="\${title \${body"><div class="formula-title">\${i. \${title</div><div class="formula">\${body</div></div>\`).join("");
  return \`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>Мини-шпора ЕГЭ 2027</title><style>
  :root{color-scheme:dark;--bg:#20252b;--card:#2b3138;--card2:#343b43;--text:#e7eaee;--muted:#aeb7c2;--accent:#8bb8ff;--line:#424a54}
  *{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif}
  .wrap{max-width:780px;margin:auto;padding:14px 12px 36px}.top{position:sticky;top:0;z-index:10;background:rgba(32,37,43,.97);padding:8px 2px 12px;backdrop-filter:blur(10px)}
  h1{font-size:23px;line-height:1.2;margin:3px 0 5px}.sub{color:var(--muted);font-size:13px;margin-bottom:12px}
  input{width:100%;background:#292f36;border:1px solid #414953;color:var(--text);border-radius:12px;padding:13px 14px;font-size:16px;outline:none}
  input:focus{border-color:var(--accent)}.note{margin:12px 0;color:var(--muted);font-size:12px;line-height:1.45}
  .task{background:var(--card);border:1px solid var(--line);border-radius:14px;margin:9px 0;overflow:hidden}
  .task-head{width:100%;border:0;background:var(--card2);color:var(--text);padding:14px 15px;text-align:left;display:flex;align-items:center;justify-content:space-between;font-size:16px;cursor:pointer}
  .task-head b{color:var(--accent);font-size:18px;margin-right:9px}.task-title{font-weight:650}.chevron{font-size:20px;color:var(--muted);transition:.15s}.task.open .chevron{transform:rotate(180deg)}
  .task-body{display:none;padding:0 9px 9px}.task.open .task-body{display:block}
  .formula-card{background:#30373f;border:1px solid #3e464f;border-radius:11px;margin:8px 0;overflow:hidden}.formula-title{padding:11px 12px;font-size:15px;font-weight:700}.formula{padding:10px 12px 13px;white-space:pre-line;font-family:"Times New Roman",serif;font-size:18px;line-height:1.62;color:#f0f2f4}
  .hidden{display:none!important}.count{color:var(--muted);font-size:12px;margin-top:7px}.all{margin-top:16px}.all summary{cursor:pointer;color:var(--accent);font-weight:650;padding:10px 2px}.all-body{margin-top:3px}
  </style></head><body><main class="wrap"><div class="top"><h1>📐 Мини-шпора — ЕГЭ профиль 2027</h1><div class="sub">Формулы распределены по номерам заданий №1–20</div><input id="search" placeholder="🔎 Поиск по номеру, теме или формуле..." autocomplete="off"><div id="count" class="count"></div></div>
  <div class="note">Структура сделана по проекту КИМ ЕГЭ-2027. Документы ФИПИ пока имеют статус проекта и могут быть уточнены.</div>
  <section id="tasks">\${taskSections</section><details class="all"><summary>📚 Все формулы</summary><div class="all-body">\${allSections</div></details>
  </main><script>
  const input=document.getElementById("search"),tasks=[...document.querySelectorAll(".task")],count=document.getElementById("count");
  function toggleTask(btn){btn.closest(".task").classList.toggle("open")}
  function filter(){const q=input.value.toLowerCase().trim();let n=0;tasks.forEach(t=>{const ok=!q||t.dataset.search.toLowerCase().includes(q)||[...t.querySelectorAll(".formula-card")].some(x=>x.dataset.search.toLowerCase().includes(q));t.classList.toggle("hidden",!ok);if(ok)n++;if(q&&ok)t.classList.add("open")});count.textContent=q?"Найдено заданий: "+n:"";}
  input.addEventListener("input",filter);if(new URLSearchParams(location.search).get("search")==="1")setTimeout(()=>input.focus(),150);if(window.Telegram?.WebApp){Telegram.WebApp.ready();Telegram.WebApp.expand();}
  </script></body></html>\`;
}

async function telegram(env,method,body){
  const r=await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)});
  return r.json();
}

async function handleUpdate(update,env){
  if(update.message?.text?.startsWith("/start")){
    await telegram(env,"sendMessage",{chat_id:update.message.chat.id,text:"Привет! 👋\n\nВыбери экзамен:",reply_markup:MAIN_MENU}); return;
  }

  if(update.message?.text && !update.message.text.startsWith("/")){
    const query=update.message.text.toLowerCase().trim();
    const found=FORMULAS.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(query));
    await telegram(env,"sendMessage",{chat_id:update.message.chat.id,text:found.length?"🔎 Найдено:\n\n"+found.map(x=>"📌 "+x[0]+"\n"+x[1]).join("\n\n"):"Ничего не нашёл. Открой мини-шпору и попробуй поиск по ней."}); return;
  }

  const q=update.callback_query;if(!q)return;
  await telegram(env,"answerCallbackQuery",{callback_query_id:q.id});
  const chat_id=q.message.chat.id,message_id=q.message.message_id;
  let text=null,reply_markup=null;

  if(q.data==="ege"){text="Выбери предмет:";reply_markup=EGE_MENU}
  else if(q.data==="math"){text="Выбери вариант математики:";reply_markup=MATH_MENU}
  else if(q.data==="profile_math"){text="📐 Профильная математика\n\nВыбери действие:";reply_markup=PROFILE_MENU}
  else if(q.data==="open_full_file"){
    await telegram(env,"sendMessage",{chat_id,text:"📖 Открывай мини-шпору:",reply_markup:{inline_keyboard:[[{text:"📐 Открыть мини-шпору",web_app:{url:"https://egematinfo.badahyousr.workers.dev/app"}}]]}}); return;
  }
  else if(q.data==="search_formulas"){
    await telegram(env,"sendMessage",{chat_id,text:"🔎 Открывай поиск по мини-шпаре:",reply_markup:{inline_keyboard:[[{text:"🔎 Поиск формулы",web_app:{url:"https://egematinfo.badahyousr.workers.dev/app?search=1"}}]]}}); return;
  }
  else if(q.data==="back_main"){text="Привет! 👋\n\nВыбери экзамен:";reply_markup=MAIN_MENU}
  else if(q.data==="back_ege"){text="Выбери предмет:";reply_markup=EGE_MENU}
  else if(q.data==="back_math"){text="Выбери вариант математики:";reply_markup=MATH_MENU}
  if(text)await telegram(env,"editMessageText",{chat_id,message_id,text,reply_markup});
}

export default {
  async fetch(request,env){
    const url=new URL(request.url);
    if(url.pathname==="/app")return new Response(appHtml(),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
    if(url.pathname==="/setup"){
      const result=await telegram(env,"setWebhook",{url:"https://egematinfo.badahyousr.workers.dev/telegram",allowed_updates:["message","callback_query"]});
      return new Response(JSON.stringify(result),{headers:{"content-type":"application/json"}});
    }
    if(url.pathname==="/debug"){const result=await telegram(env,"getWebhookInfo",{});return new Response(JSON.stringify(result),{headers:{"content-type":"application/json"}});}
    if(request.method==="GET")return new Response("EGEMATINFO bot is running.");
    if(request.method!=="POST")return new Response("Method Not Allowed",{status:405});
    try{await handleUpdate(await request.json(),env);return new Response("OK");}catch(e){return new Response("Error",{status:500});}
  }
};