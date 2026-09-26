const MAIN_MENU = {inline_keyboard: [[{text:"📐 Математика",callback_data:"math"}],[{text:"💻 Информатика",callback_data:"informatics"}]]};
const MATH_MENU = {inline_keyboard: [[{text:"📘 Профильная математика",callback_data:"profile_math"}],[{text:"⬅️ Назад",callback_data:"back_main"}]]};
const PROFILE_MENU = {
  inline_keyboard: [
    [{text:"📖 Открыть мини-шпору",web_app:{url:"https://egematinfo.badahyousr.workers.dev/app?v=20260926"}}],
    [{text:"🔎 Поиск",callback_data:"search_mode"}],
    [{text:"⬅️ Назад",callback_data:"back_math"}]
  ]
};

const TASKS_2027 = [
  [1,"Планиметрия",["Треугольник","Углы и параллельные прямые","Подобие треугольников","Площади фигур","Медиана и биссектриса","Окружность","Трапеция и четырёхугольники","Теорема Птолемея","Теорема косинусов","Чевиана и площади","Теорема Фалеса"]],
  [2,"Векторы",["Векторы","Скалярное произведение"]],
  [3,"Стереометрия: объёмы и площади",["Стереометрия","Призма","Пирамида","Куб и параллелепипед","Цилиндр и конус","Шар","Прямая и плоскость","Площади и объёмы","Векторы"]],
  [4,"Простейшая вероятность",["Вероятность"]],
  [5,"Сложение и умножение вероятностей",["Вероятность","Комбинаторика"]],
  [6,"Случайные величины",["Случайные величины","Статистика"]],
  [7,"Уравнения",["Квадратные уравнения","Степени и корни","Логарифмы","Тригонометрия","Модули и ОДЗ","Линейные уравнения и системы","Тригонометрический круг","Оси тангенсов и котангенсов"]],
  [8,"Вычисления и преобразования",["Формулы сокращённого умножения","Степени и корни","Логарифмы","Тригонометрия","Модули и ОДЗ","Проценты и пропорции","Тригонометрический круг","Оси тангенсов и котангенсов"]],
  [9,"Производная и первообразная",["Производная","Первообразная и интеграл","Функции и графики","Тригонометрия","Тригонометрический круг","Оси тангенсов и котангенсов"]],
  [10,"Прикладная задача с формулой",["Проценты и пропорции","Формулы сокращённого умножения","Степени и корни","Линейные уравнения и системы"]],
  [11,"Текстовая задача",["Текстовые задачи","Арифметическая прогрессия","Геометрическая прогрессия","Квадратные уравнения","Проценты и пропорции"]],
  [12,"Функции и графики",["Функции и графики","Линейная функция","Парабола","Показательная функция","Логарифмы","Тригонометрия","Производная","Тригонометрический круг","Оси тангенсов и котангенсов"]],
  [13,"Проценты, вклады и кредиты",["Финансовая математика","Проценты и пропорции","Арифметическая прогрессия","Геометрическая прогрессия"]],
  [14,"Уравнение с отбором корней",["Квадратные уравнения","Линейные уравнения и системы","Степени и корни","Логарифмы","Тригонометрия","Модули и ОДЗ","Тригонометрический круг","Оси тангенсов и котангенсов"]],
  [15,"Стереометрия: доказательство и вычисление",["Стереометрия","Призма","Пирамида","Куб и параллелепипед","Цилиндр и конус","Шар","Прямая и плоскость","Площади и объёмы","Векторы"]],
  [16,"Неравенство",["Квадратные уравнения","Степени и корни","Логарифмы","Тригонометрия","Модули и ОДЗ","Линейные уравнения и системы","Тригонометрический круг","Оси тангенсов и котангенсов"]],
  [17,"Прикладная задача: математическая модель",["Производная","Первообразная и интеграл","Квадратные уравнения","Парабола","Финансовая математика","Проценты и пропорции","Текстовые задачи"]],
  [18,"Планиметрия: доказательство и вычисление",["Треугольник","Углы и параллельные прямые","Подобие треугольников","Площади фигур","Медиана и биссектриса","Окружность","Трапеция и четырёхугольники","Теорема Птолемея","Теорема косинусов","Чевиана и площади","Теорема Фалеса"]],
  [19,"Задача с параметром",["Параметры","Квадратные уравнения","Парабола","Линейная функция","Логарифмы","Тригонометрия","Модули и ОДЗ","Функции и графики","Тригонометрический круг","Оси тангенсов и котангенсов"]],
  [20,"Числа и их свойства",["Числа и свойства","Степени и корни","Проценты и пропорции","Комбинаторика"]]
];
const FORMULAS = [
  ["Формулы сокращённого умножения","(a+b)²=a²+2ab+b²\n(a-b)²=a²-2ab+b²\na²-b²=(a-b)(a+b)\n(a+b)³=a³+3a²b+3ab²+b³\n(a-b)³=a³-3a²b+3ab²-b³\na³+b³=(a+b)(a²-ab+b²)\na³-b³=(a-b)(a²+ab+b²)"],
  ["Степени и корни","aᵐ·aⁿ=aᵐ⁺ⁿ\naᵐ/aⁿ=aᵐ⁻ⁿ\n(aᵐ)ⁿ=aᵐⁿ\n(ab)ⁿ=aⁿbⁿ\na⁰=1 (a≠0)\n√(ab)=√a·√b\n√(a/b)=√a/√b"],
  ["Модули и ОДЗ","|x|=x, если x≥0; |x|=-x, если x<0\n|x|=a ⇔ x=±a (a≥0)\nПри дробях знаменатель ≠0\nПодкоренное выражение ≥0 для корня чётной степени\nОснование логарифма >0 и ≠1"],
  ["Квадратные уравнения","ax²+bx+c=0\nD=b²-4ac\nx₁,₂=(-b±√D)/(2a)\nx₁+x₂=-b/a\nx₁x₂=c/a"],
  ["Логарифмы","logₐ(xy)=logₐx+logₐy\nlogₐ(x/y)=logₐx-logₐy\nlogₐ(xᵏ)=k·logₐx\nlogₐa=1\nlogₐ1=0\nlogₐb=ln b/ln a\na^(logₐx)=x"],
  ["Тригонометрия","sin²x+cos²x=1\ntg x=sin x/cos x\nctg x=cos x/sin x\n1+tg²x=1/cos²x\n1+ctg²x=1/sin²x\nsin(α±β)=sinαcosβ±cosαsinβ\ncos(α±β)=cosαcosβ∓sinαsinβ"],
  ["Тригонометрический круг","Единичная окружность: P(cos α; sin α).\nОсь тангенсов — касательная x=1. Ось котангенсов — касательная y=1.\ntg α не существует при α=π/2+πk; ctg α не существует при α=πk.\nОсновные углы: 0°, 30°, 45°, 60°, 90°, 120°, 135°, 150°, 180°, 210°, 225°, 240°, 270°, 300°, 315°, 330°, 360°.\nsin30°=1/2, cos30°=√3/2; sin45°=cos45°=√2/2; sin60°=√3/2, cos60°=1/2"],
  ["Оси тангенсов и котангенсов","tg откладывается на касательной x=1, ctg — на касательной y=1.\ntg(α+π)=tg α; ctg(α+π)=ctg α."],
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
  ["Числа и свойства","a делится на b ⇔ a=kb, k∈ℤ\nНОД(a,b) — наибольший общий делитель\nНОК(a,b) — наименьшее общее кратное\nНОД(a,b)·НОК(a,b)=|ab|\nПростое число имеет ровно два натуральных делителя: 1 и само себя"],
  ["Углы и параллельные прямые","Смежные углы: α+β=180°.\nВертикальные углы равны.\nПри параллельных прямых: соответственные и накрест лежащие углы равны; односторонние в сумме 180°."],
  ["Подобие треугольников","Соответствующие стороны подобных треугольников пропорциональны.\nКоэффициент подобия k — отношение соответствующих сторон.\nОтношение площадей подобных фигур равно k²."],
  ["Площади фигур","Треугольник: S=ah/2.\nПараллелограмм: S=ah.\nТрапеция: S=(a+b)h/2.\nКруг: S=πR².\nОкружность: L=2πR."],
  ["Трапеция и четырёхугольники","Средняя линия трапеции: m=(a+b)/2.\nПлощадь трапеции: S=(a+b)h/2.\nВ равнобедренной трапеции диагонали равны.\nДля вписанного четырёхугольника сумма противоположных углов равна 180°."],
  ["Призма","V=Sосн·h.\nДля прямой призмы боковые грани — прямоугольники.\nSполн=Sбок+2Sосн."],
  ["Пирамида","V=Sосн·h/3.\nДля правильной пирамиды Sбок=Pосн·aп/2, где aп — апофема."],
  ["Куб и параллелепипед","Куб: S=6a², V=a³.\nПрямоугольный параллелепипед: V=abc, S=2(ab+bc+ac).\nДиагональ: d=√(a²+b²+c²)."],
  ["Цилиндр и конус","Цилиндр: V=πR²h, Sбок=2πRh.\nКонус: V=πR²h/3, Sбок=πRl."],
  ["Площади и объёмы","Призма: V=Sосн·h.\nПирамида: V=Sосн·h/3.\nЦилиндр: V=πR²h.\nКонус: V=πR²h/3.\nШар: V=4πR³/3, S=4πR²."],
  ["Скалярное произведение","a·b=|a||b|cosφ.\nВ координатах: a·b=x₁x₂+y₁y₂(+z₁z₂).\nЕсли a·b=0, векторы перпендикулярны."],
  ["Комбинаторика","Перестановки: n!.\nРазмещения: Aₙᵏ=n!/(n-k)!.\nСочетания: Cₙᵏ=n!/(k!(n-k)!)."],
  ["Статистика","Среднее арифметическое: x̄=(x₁+...+xₙ)/n.\nВзвешенное среднее: x̄=Σxᵢpᵢ.\nДисперсия: D(X)=M(X²)-M(X)²."],
  ["Функции и графики","Нули функции: f(x)=0.\nОбласть определения — допустимые x.\nСдвиг y=f(x)+d — на d вверх; y=f(x-a) — на a вправо."],
  ["Линейная функция","y=kx+b.\nk — угловой коэффициент.\nПараллельные прямые имеют одинаковый k.\nk=(y₂-y₁)/(x₂-x₁)."],
  ["Показательная функция","y=aˣ, a>0, a≠1.\naˣ·aʸ=aˣ⁺ʸ; aˣ/aʸ=aˣ⁻ʸ; (aˣ)ʸ=aˣʸ.\nПри a>1 функция возрастает, при 0<a<1 — убывает."],
  ["Проценты и пропорции","p%=p/100.\nУвеличение на p%: A(1+p/100).\nУменьшение на p%: A(1-p/100).\na/b=c/d ⇔ ad=bc."],
  ["Текстовые задачи","Движение: S=vt.\nРабота: A=pt.\nПроизводительность: p=A/t.\nКонцентрация: mвещества/mраствора."],
];

const APP_CSS = `
:root{color-scheme:dark;--bg:#20252b;--card:#2b3138;--card2:#343b43;--text:#e7eaee;--muted:#aeb7c2;--accent:#7fb3ff}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif}
.wrap{max-width:760px;margin:auto;padding:16px 14px 32px}.top{position:sticky;top:0;z-index:5;background:rgba(32,37,43,.96);padding:8px 0 14px;backdrop-filter:blur(10px)}
h1{font-size:24px;margin:4px 0 12px}.sub{color:var(--muted);font-size:13px;margin-bottom:14px}
.section{margin:16px 0 10px;font-size:18px;font-weight:700}.card{background:var(--card);border:1px solid #3b424a;border-radius:14px;margin:9px 0;overflow:hidden}
.title{padding:14px 15px;font-size:17px;font-weight:700;background:var(--card2)}.formula{padding:14px 15px;white-space:pre-line;font-family:"Times New Roman",serif;font-size:19px;line-height:1.7;color:#f0f2f4}
.hidden{display:none}.count{color:var(--muted);font-size:13px;margin-top:7px}
`;

function appHtml(){
  const byTitle=new Map(FORMULAS);
  const visuals={
    'Треугольник':'<svg viewBox="0 0 320 170" class="diagram"><path d="M35 140 L160 25 L285 140 Z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M160 25 L160 140" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/><text x="150" y="20">A</text><text x="25" y="158">B</text><text x="288" y="158">C</text><text x="165" y="135">h</text></svg>',
    'Окружность':'<svg viewBox="0 0 320 170" class="diagram"><circle cx="160" cy="85" r="62" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="160" cy="85" r="4" fill="currentColor"/><path d="M160 85 L222 85" stroke="currentColor" stroke-width="2"/><text x="166" y="79">O</text><text x="188" y="79">R</text></svg>',
    'Векторы':'<svg viewBox="0 0 320 170" class="diagram"><path d="M45 135 L250 55" stroke="currentColor" stroke-width="3"/><path d="M250 55 l-18 3 l8 14 z" fill="currentColor"/><path d="M45 135 L145 135 M145 135 L145 96" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/><text x="120" y="72">a</text></svg>',
    'Призма':'<svg viewBox="0 0 320 170" class="diagram"><path d="M60 120 L135 78 L255 105 L180 145 Z M60 120 L60 50 L180 75 L180 145 M135 78 L135 8 L255 35 L255 105 M60 50 L135 8 M180 75 L255 35" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>',
    'Пирамида':'<svg viewBox="0 0 320 170" class="diagram"><path d="M55 135 L265 135 L215 92 L105 92 Z M160 22 L55 135 M160 22 L265 135 M160 22 L105 92 M160 22 L215 92" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M160 22 L160 135" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/></svg>',
    'Шар':'<svg viewBox="0 0 320 170" class="diagram"><circle cx="160" cy="85" r="63" fill="none" stroke="currentColor" stroke-width="3"/><ellipse cx="160" cy="85" rx="63" ry="21" fill="none" stroke="currentColor" stroke-width="2"/><path d="M160 85 L223 85" stroke="currentColor" stroke-width="2"/><text x="172" y="78">R</text></svg>',
    'Парабола':'<svg viewBox="0 0 320 170" class="diagram"><path d="M25 145 H300 M160 160 V12" stroke="currentColor" stroke-width="1.5"/><path d="M65 140 C105 105 125 52 160 28 C195 52 215 105 255 140" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="160" cy="28" r="4" fill="currentColor"/><text x="168" y="27">В</text></svg>',
    'Трапеция и четырёхугольники':'<svg viewBox="0 0 320 170" class="diagram"><path d="M85 35 L225 35 L275 135 L45 135 Z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M45 135 H275 M85 35 H225" stroke="currentColor" stroke-width="2"/><text x="150" y="28">a</text><text x="150" y="158">b</text><text x="280" y="90">h</text></svg>',
    'Углы и параллельные прямые':'<svg viewBox="0 0 320 170" class="diagram"><path d="M35 45 H285 M35 125 H285 M85 15 L235 155" fill="none" stroke="currentColor" stroke-width="3"/><text x="98" y="43">α</text><text x="205" y="123">β</text></svg>',
    'Цилиндр и конус':'<svg viewBox="0 0 320 170" class="diagram"><ellipse cx="85" cy="35" rx="48" ry="15" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M37 35 V125 M133 35 V125" stroke="currentColor" stroke-width="2.5"/><ellipse cx="85" cy="125" rx="48" ry="15" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M190 125 L240 35 L290 125 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M240 35 V125" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/></svg>',
    'Куб и параллелепипед':'<svg viewBox="0 0 320 170" class="diagram"><path d="M70 55 L175 30 L255 70 L150 98 Z M70 55 V135 L150 165 V98 M255 70 V145 L150 165 M175 30 V105 L255 145" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>',
    'Тригонометрический круг':'<svg viewBox="0 0 720 360" class="diagram"><circle cx="220" cy="180" r="120" fill="none" stroke="currentColor" stroke-width="3"/><path d="M65 180 H375 M220 25 V335" stroke="currentColor" stroke-width="2"/><path d="M340 40 V320" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/><path d="M80 60 H360" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/><path d="M220 180 L324 120" stroke="currentColor" stroke-width="2.5"/><circle cx="324" cy="120" r="4" fill="currentColor"/><path d="M324 120 V180 M324 120 V60" stroke="currentColor" stroke-width="2"/><path d="M220 180 L160 284" stroke="currentColor" stroke-width="2.5"/><circle cx="160" cy="284" r="4" fill="currentColor"/><path d="M160 284 H220" stroke="currentColor" stroke-width="2"/><text x="345" y="45">ось tg: x=1</text><text x="335" y="174">tg α</text><text x="88" y="55">ось ctg: y=1</text><text x="168" y="302">ctg α</text><text x="202" y="198">O</text><text x="330" y="113">P</text><text x="55" y="178">−1</text><text x="342" y="198">1</text><text x="227" y="35">1</text><text x="227" y="333">−1</text><text x="235" y="48">π/2</text><text x="338" y="215">0, 2π</text><text x="126" y="208">π</text><path d="M470 90 H680 M575 45 V270" stroke="currentColor" stroke-width="1.5"/><text x="475" y="75">tg α = sin α / cos α</text><text x="475" y="135">ctg α = cos α / sin α</text><text x="475" y="190">tg: π/2+πk — не существует</text><text x="475" y="225">ctg: πk — не существует</text><text x="475" y="260">период обеих функций: π</text></svg>',    'Площади фигур':'<svg viewBox="0 0 320 170" class="diagram"><path d="M30 135 L100 35 L170 135 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M205 45 H285 V135 H205 Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M215 135 L275 45" stroke="currentColor" stroke-width="2"/></svg>'
  };
  const taskSections=TASKS_2027.map(([num,title,names])=>{
    const cards=names.map(name=>{
      const body=byTitle.get(name);
      if(!body)return '';
      const visual=visuals[name]||'';
      return `<div class="formula-card" data-search="${num} ${title} ${name} ${body}"><div class="formula-title">${name}</div>${visual}<div class="formula">${body}</div></div>`;
    }).join('');
    return `<article class="task" data-search="${num} ${title} ${names.join(' ')}"><button class="task-head" type="button" onclick="toggleTask(this)"><span><b>№${num}</b><span class="task-title">${title}</span></span><span class="chevron">⌄</span></button><div class="task-body">${cards}</div></article>`;
  }).join('');
  const allSections=FORMULAS.map(([title,body],i)=>`<div class="formula-card" data-search="${title} ${body}"><div class="formula-title">${i+1}. ${title}</div><div class="formula">${body}</div></div>`).join('');
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>Мини-шпора ЕГЭ 2027</title><style>:root{color-scheme:dark;--bg:#20252b;--card:#2b3138;--card2:#343b43;--text:#e7eaee;--muted:#aeb7c2;--accent:#8bb8ff;--line:#424a54}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif}.wrap{max-width:780px;margin:auto;padding:14px 12px 36px}.top{position:sticky;top:0;z-index:10;background:rgba(32,37,43,.97);padding:8px 2px 12px;backdrop-filter:blur(10px)}h1{font-size:23px;line-height:1.2;margin:3px 0 5px}.sub{color:var(--muted);font-size:13px;margin-bottom:12px}.note{margin:12px 0;color:var(--muted);font-size:12px;line-height:1.45}.task{background:var(--card);border:1px solid var(--line);border-radius:14px;margin:9px 0;overflow:hidden}.task-head{width:100%;border:0;background:var(--card2);color:var(--text);padding:14px 15px;text-align:left;display:flex;align-items:center;justify-content:space-between;font-size:16px;cursor:pointer}.task-head b{color:var(--accent);font-size:18px;margin-right:9px}.task-title{font-weight:650}.chevron{font-size:20px;color:var(--muted);transition:.15s}.task.open .chevron{transform:rotate(180deg)}.task-body{display:none;padding:0 9px 9px}.task.open .task-body{display:block}.formula-card{background:#30373f;border:1px solid #3e464f;border-radius:11px;margin:8px 0;overflow:hidden}.formula-title{padding:11px 12px;font-size:15px;font-weight:700}.formula{padding:10px 12px 13px;white-space:pre-line;font-family:"Times New Roman",serif;font-size:18px;line-height:1.62;color:#f0f2f4}.diagram{display:block;width:100%;max-height:185px;padding:8px 12px;color:#dbe7f7}.hidden{display:none!important}.count{color:var(--muted);font-size:12px;margin-top:7px}.all{margin-top:16px}.all summary{cursor:pointer;color:var(--accent);font-weight:650;padding:10px 2px}.all-body{margin-top:3px}</style></head><body><main class="wrap"><div class="top"><h1>📐 Мини-шпора — ЕГЭ профиль 2027</h1><div class="sub">№1–20 · формулы, правила и схемы по каждому типу задания</div><div class="count">Выбирай нужное задание или тему в списке ниже.</div></div><div class="note">Основа — «Шпора от Артура»; распределение сделано по проекту КИМ ЕГЭ-2027. Проект ФИПИ ещё может уточняться.</div><section id="tasks">${taskSections}</section><details class="all"><summary>📚 Все формулы</summary><div class="all-body">${allSections}</div></details></main><script>function toggleTask(btn){btn.closest('.task').classList.toggle('open')}if(window.Telegram?.WebApp){Telegram.WebApp.ready();Telegram.WebApp.expand();}</script></body></html>`;
}

async function telegram(env,method,body){
  const r=await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)});
  return r.json();
}


const TASK_ADVICE = {
  1:"Определи фигуру и нужные элементы. Используй углы, подобие, площади, свойства окружности и пропорции. В геометрии сначала выпиши, что дано, затем найди связь между известными и искомыми величинами.",
  2:"Переводи условие в векторную форму. Для длины используй координаты, для угла — скалярное произведение. При перпендикулярности скалярное произведение равно нулю.",
  3:"Выбери формулу объёма или площади нужного тела. Для призмы V=Sосн·h, для пирамиды V=Sосн·h/3, для цилиндра V=πR²h, для конуса V=πR²h/3, для шара V=4πR³/3.",
  4:"Сначала посчитай число всех равновозможных исходов, затем число благоприятных. Для равновозможных исходов P(A)=m/n. При необходимости используй противоположное событие.",
  5:"Разбей событие на удобные случаи. Для независимых событий используй умножение вероятностей, для несовместных — сложение. Не забудь вычесть пересечение при формуле объединения.",
  6:"Составь таблицу значений случайной величины и вероятностей. Проверь сумму вероятностей. Затем считай M(X)=Σxᵢpᵢ и при необходимости D(X)=M(X²)-M(X)².",
  7:"Начни с ОДЗ. Приводи уравнение к стандартному виду, выбирай подходящую замену/формулу и после решения обязательно проверь корни в исходном уравнении.",
  8:"Сначала упрости выражение: раскрой или сверни скобки, вынеси общий множитель, используй формулы сокращённого умножения и свойства степеней/логарифмов. Следи за ОДЗ.",
  9:"Если дан график — ищи геометрический смысл производной и первообразной. Для формулы функции используй таблицу производных. При интеграле применяй Ньютон–Лейбница.",
  10:"Выдели величины из условия и найди формулу, связывающую их. Подставляй единицы в одной системе и вычисляй только после записи модели.",
  11:"Обозначь неизвестное одной переменной. Составь уравнение из условия, реши его и проверь ответ по смыслу задачи. Для движения используй S=vt, для работы — A=pt.",
  12:"По графику определяй область определения, значения, нули, промежутки возрастания/убывания и взаимное расположение графиков. Для преобразований учитывай сдвиги.",
  13:"Определи начальную сумму, процентную ставку и число периодов. При сложных процентах используй S=P(1+r)^n. В кредитах отдельно следи за остатком долга и платежами.",
  14:"Реши уравнение с полным контролем ОДЗ и ограничений. После преобразований проверь каждый найденный корень в исходном уравнении — лишние корни нужно исключить.",
  15:"Сделай рисунок тела и введи обозначения. Найди перпендикуляры, высоты и проекции. Для объёмов/площадей используй стереометрические формулы; для доказательства обосновывай каждый переход теоремой.",
  16:"Перенеси всё в одну часть, приведи к стандартному виду и выбери метод решения. Для квадратного неравенства используй корни и знаки на промежутках; для логарифмов и степеней сначала ОДЗ.",
  17:"Сначала построй математическую модель ситуации: введи переменную, вырази через неё остальные величины и составь функцию/уравнение. Затем реши и выбери ответ, имеющий смысл в исходной задаче.",
  18:"Сделай подробный чертёж. Для доказательства назови теорему, из которой следует каждый ключевой факт: подобие, окружность, параллельность, равенство углов или площадей.",
  19:"Рассматривай параметр как фиксированное число и исследуй, как меняется число/положение корней. Критические значения обычно возникают при D=0, касании, пересечении или попадании корня на границу ОДЗ.",
  20:"Разложи числа на простые множители и используй делимость, НОД/НОК, остатки и свойства степеней. Если есть несколько случаев, системно перебери их и проверь ограничения."
};

function qcUrl(title, datasets, xMin=0, xMax=10, yMin=0, yMax=10){
  const chart={
    type:"scatter",
    data:{datasets:datasets.map(d=>({label:d.label||"",data:d.data,showLine:d.showLine!==false,pointRadius:d.pointRadius??0,borderWidth:d.borderWidth??3,borderColor:"#dbe7f7",backgroundColor:"transparent",fill:false}))},
    options:{
      animation:false,responsive:false,
      plugins:{legend:{display:false},title:{display:true,text:title,color:"#1f2933",font:{size:18,weight:"bold"}}},
      scales:{x:{type:"linear",min:xMin,max:xMax,display:false},y:{min:yMin,max:yMax,display:false}}
    }
  };
  return "https://quickchart.io/chart?width=700&height=360&format=png&c="+encodeURIComponent(JSON.stringify(chart));
}
function circlePoints(cx,cy,r,n=80){
  return Array.from({length:n+1},(_,i)=>{const t=2*Math.PI*i/n;return{x:cx+r*Math.cos(t),y:cy+r*Math.sin(t)};});
}
function taskDiagramUrls(num){
  const line=(label,data)=>({label,data});
  const out=[];
  if(num===1){
    out.push(qcUrl("Треугольник и высота",[line("triangle",[{x:1,y:1},{x:5,y:8},{x:9,y:1},{x:1,y:1}]),line("height",[{x:5,y:8},{x:5,y:1}])],0,10,0,10));
    out.push(qcUrl("Окружность и радиус",[line("circle",circlePoints(5,5,3)),line("radius",[{x:5,y:5},{x:8,y:5}])],0,10,0,10));
  } else if(num===2){
    out.push(qcUrl("Векторы и проекции",[line("vector",[{x:1,y:2},{x:8,y:7}]),line("projection",[{x:1,y:2},{x:8,y:2},{x:8,y:7}])],0,10,0,10));
  } else if(num===3||num===15){
    out.push(qcUrl("Призма",[line("body",[{x:2,y:2},{x:4,y:7},{x:8,y:6},{x:6,y:1},{x:2,y:2}]),line("vertical",[{x:2,y:2},{x:2,y:7},{x:4,y:7},{x:4,y:2}]),line("top",[{x:2,y:7},{x:6,y:6},{x:8,y:6}])],0,10,0,10));
    out.push(qcUrl("Пирамида",[line("base",[{x:2,y:2},{x:8,y:2},{x:7,y:5},{x:3,y:5},{x:2,y:2}]),line("edges",[{x:5,y:9},{x:2,y:2}]),line("edge2",[{x:5,y:9},{x:8,y:2}]),line("height",[{x:5,y:9},{x:5,y:2}])],0,10,0,10));
    out.push(qcUrl("Шар",[line("sphere",circlePoints(5,5,3)),line("diameter",[{x:2,y:5},{x:8,y:5}])],0,10,0,10));
  } else if(num===4||num===5){
    out.push(qcUrl("Дерево вероятностей",[line("branch1",[{x:1,y:5},{x:5,y:8}]),line("branch2",[{x:1,y:5},{x:5,y:2}]),line("branch3",[{x:5,y:8},{x:9,y:9}]),line("branch4",[{x:5,y:8},{x:9,y:6}]),line("branch5",[{x:5,y:2},{x:9,y:3}]),line("branch6",[{x:5,y:2},{x:9,y:0.5}])],0,10,0,10));
  } else if(num===6){
    out.push(qcUrl("Случайная величина: значения и вероятности",[line("distribution",[{x:2,y:2},{x:4,y:5},{x:6,y:3},{x:8,y:7}])],0,10,0,10));
  } else if(num===7||num===8||num===14||num===16){
    out.push(qcUrl("Числовая прямая и корни",[line("axis",[{x:1,y:5},{x:9,y:5}]),line("interval",[{x:2,y:5},{x:6,y:5}]),line("point1",[{x:2,y:4.6},{x:2,y:5.4}]),line("point2",[{x:6,y:4.6},{x:6,y:5.4}])],0,10,0,10));
  } else if(num===9){
    out.push(qcUrl("График функции и касательная",[line("curve",[{x:1,y:2},{x:2,y:2.8},{x:3,y:4.2},{x:4,y:6.5},{x:5,y:9}]),line("tangent",[{x:2,y:1.8},{x:5,y:7.8}])],0,6,0,10));
  } else if(num===10){
    out.push(qcUrl("Модель зависимости величин",[line("model",[{x:1,y:1.5},{x:2,y:2.7},{x:3,y:4.2},{x:4,y:6.0},{x:5,y:8.1}])],0,6,0,10));
  } else if(num===11){
    out.push(qcUrl("Схема движения",[line("path",[{x:1,y:5},{x:4,y:5},{x:8,y:5}]),line("time",[{x:1,y:4},{x:8,y:4}])],0,10,0,10));
  } else if(num===12||num===17||num===19){
    out.push(qcUrl("Функция / парабола",[line("parabola",[{x:1,y:8},{x:2,y:5},{x:3,y:3},{x:4,y:2},{x:5,y:3},{x:6,y:5},{x:7,y:8}])],0,8,0,10));
  } else if(num===13){
    out.push(qcUrl("Рост суммы по периодам",[line("money",[{x:1,y:2},{x:2,y:2.5},{x:3,y:3.2},{x:4,y:4.1},{x:5,y:5.3},{x:6,y:6.8},{x:7,y:8.8}])],0,8,0,10));
  } else if(num===18){
    out.push(qcUrl("Планиметрия: подобие и площади",[line("big",[{x:1,y:1},{x:7,y:1},{x:4,y:8},{x:1,y:1}]),line("small",[{x:2.5,y:1},{x:5.5,y:1},{x:4,y:4.5},{x:2.5,y:1}])],0,8,0,10));
    out.push(qcUrl("Четырёхугольник и диагонали",[line("quad",[{x:2,y:2},{x:8,y:2},{x:7,y:7},{x:3,y:8},{x:2,y:2}]),line("d1",[{x:2,y:2},{x:7,y:7}]),line("d2",[{x:8,y:2},{x:3,y:8}])],0,10,0,10));
  } else if(num===20){
    out.push(qcUrl("Делимость и разложение",[line("factors",[{x:1,y:2},{x:2,y:3},{x:3,y:5},{x:4,y:7},{x:5,y:11}])],0,6,0,12));
  }
  return out;
}

function normalizeSearchText(text){
  return String(text || "")
    .toLowerCase()
    .replace(/ё/g,"е")
    .replace(/[^а-яa-z0-9]+/g," ")
    .trim();
}

// Простая русская лемматизация для поиска: сводим основные падежи,
// числа и формы слов к общей основе. Например: пирамида/пирамиды/
// пирамиду/пирамидами/пирамидах -> пирамид.
function stemRu(word){
  let w=word;
  if(w.length<4)return w;
  const suffixes=[
    "иями","ями","ами","ого","ему","ому","ее","ие","ые","ое","ей","ий","ый","ой",
    "иям","ия","ев","ов","ам","ем","ом","ах","ях","ию","ью","ию","ую","юю",
    "ою","ею","ая","яя","ое","ее","ые","ие","ым","им","ым","им","ых","их",
    "ую","юю","ую","юю","а","я","ы","и","е","о","у","ю","ь"
  ];
  for(const s of suffixes){
    if(w.length-s.length>=3 && w.endsWith(s)){
      w=w.slice(0,-s.length);
      break;
    }
  }
  return w;
}

function searchTokens(text){
  return normalizeSearchText(text)
    .split(/\\s+/)
    .filter(Boolean)
    .map(stemRu);
}

function searchableText(...parts){
  return searchTokens(parts.join(" ")).join(" ");
}

function matchesSearch(query, ...parts){
  const tokens=searchTokens(query).filter(t=>t.length>=2);
  if(!tokens.length)return false;
  const haystack=searchableText(...parts);
  return tokens.every(token=>haystack.includes(token));
}

async function sendTextChunks(env,chat_id,text){
  const parts=[];
  for(let i=0;i<text.length;i+=3900)parts.push(text.slice(i,i+3900));
  for(const part of parts)await telegram(env,"sendMessage",{chat_id,text:part});
}
async function sendTaskAnswer(env,chat_id,num){
  const task=TASKS_2027.find(x=>x[0]===num);
  if(!task)return false;
  const [n,title,names]=task;
  const byTitle=new Map(FORMULAS);
  let out="📘 Задание №"+n+" — "+title+"\\n\\n";
  out+="🎯 Как решать:\\n"+TASK_ADVICE[n]+"\\n\\n";
  out+="📚 Что знать:\\n\\n";
  for(const name of names){
    const body=byTitle.get(name);
    if(body)out+="📌 "+name+"\\n"+body+"\\n\\n";
  }
  await sendTextChunks(env,chat_id,out.trim());
  const urls=taskDiagramUrls(n);
  for(const url of urls){
    const result=await telegram(env,"sendPhoto",{chat_id,photo:url});
    if(!result?.ok){
      await telegram(env,"sendMessage",{chat_id,text:"🖼️ Схема не загрузилась автоматически. Открыть мини-шпору со всеми встроенными схемами: https://egematinfo.badahyousr.workers.dev/app?v=20260926"});
    }
  }
  await telegram(env,"sendMessage",{chat_id,text:"✅ Это полный набор основных формул и приёмов для №"+n+". В мини-шпоре эти темы также собраны по карточкам.",reply_markup:{inline_keyboard:[[{text:"📖 Открыть мини-шпору",web_app:{url:"https://egematinfo.badahyousr.workers.dev/app?v=20260926"}}]]}});
  return true;
}

async function handleUpdate(update,env){
  if(update.message?.text?.startsWith("/start")){
    await telegram(env,"sendMessage",{chat_id:update.message.chat.id,text:"Привет! 👋\n\n🎓 Выбор экзамена:\nВыбери предмет:",reply_markup:MAIN_MENU}); return;
  }

  if(update.message?.text && !update.message.text.startsWith("/")){
    const raw=update.message.text.trim();
    const query=raw;
    const chat_id=update.message.chat.id;
    const taskNumber=/^№?\s*(\d{1,2})$/.exec(raw)?.[1];

    if(taskNumber){
      const ok=await sendTaskAnswer(env,chat_id,Number(taskNumber));
      if(!ok)await telegram(env,"sendMessage",{chat_id,text:"❌ Такого задания нет. В ЕГЭ профиль 2027 задания №1–20."});
      return;
    }

    // Поиск по теме: отдаём сам материал, а не список совпадений.
    const byTitle=new Map(FORMULAS);
    const matchedFormulas=FORMULAS.filter(([title,body])=>
      matchesSearch(query,title,body)
    );
    const matchedTasks=TASKS_2027.filter(([num,title,names])=>
      matchesSearch(query,title,...names)
    );

    if(matchedFormulas.length||matchedTasks.length){
      let out="🔎 Материал по запросу: «"+raw+"»\\n\\n";
      if(matchedTasks.length){
        out+="📘 Связанные задания:\\n";
        for(const [num,title] of matchedTasks)out+="№"+num+" — "+title+"\\n";
        out+="\\n";
      }
      if(matchedFormulas.length){
        out+="📚 Формулы и правила:\\n\\n";
        for(const [title,body] of matchedFormulas.slice(0,8))out+="📌 "+title+"\\n"+body+"\\n\\n";
      }
      await sendTextChunks(env,chat_id,out.trim());

      const nums=[...new Set(matchedTasks.map(x=>x[0]))];
      const urls=[];
      for(const n of nums)urls.push(...taskDiagramUrls(n).slice(0,2));
      for(const url of urls.slice(0,8))await telegram(env,"sendPhoto",{chat_id,photo:url});
      await telegram(env,"sendMessage",{chat_id,text:"Если нужен полный разбор конкретного номера — отправь только номер, например «15»."});
      return;
    }

    await telegram(env,"sendMessage",{chat_id,text:"❌ Ничего не нашёл. Попробуй номер задания (1–20) или тему: «пирамида», «логарифмы», «параметры», «вероятность»."});
    return;
  }

  const q=update.callback_query;if(!q)return;
  await telegram(env,"answerCallbackQuery",{callback_query_id:q.id});
  const chat_id=q.message.chat.id,message_id=q.message.message_id;
  let text=null,reply_markup=null;

  if(q.data==="math"){text="📐 Математика\n\nВыбери вариант экзамена:";reply_markup=MATH_MENU}
  else if(q.data==="informatics"){text="💻 Информатика\n\nРаздел информатики готовится.";reply_markup={inline_keyboard:[[{text:"⬅️ Назад",callback_data:"back_main"}]]}}
  else if(q.data==="profile_math"){text="📐 Профильная математика\n\nВыбери действие:";reply_markup=PROFILE_MENU}
  else if(q.data==="search_mode"){
    await telegram(env,"sendMessage",{chat_id,text:"🔎 Введите номер задания или тему — бот выдаст всю нужную информацию для решения прямо в чат.\\n\\nНапример: 15\\nИли: логарифмы, пирамида, параметры.",reply_markup:{force_reply:true,input_field_placeholder:"Номер задания или тема"}}); return;
  }
  else if(q.data==="open_full_file"){
    await telegram(env,"sendMessage",{chat_id,text:"📖 Открывай мини-шпору:",reply_markup:{inline_keyboard:[[{text:"📐 Открыть мини-шпору",web_app:{url:"https://egematinfo.badahyousr.workers.dev/app?v=20260926"}}]]}}); return;
  }
  else if(q.data==="back_main"){text="🎓 Выбор экзамена:\nВыбери предмет:";reply_markup=MAIN_MENU}
  else if(q.data==="back_math"){text="📐 Математика\n\nВыбери вариант экзамена:";reply_markup=MATH_MENU}
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