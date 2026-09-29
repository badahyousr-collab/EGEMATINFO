// DEPLOY_VERSION_20260929_BUILD_FIX
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
  [3,"Стереометрия",["Стереометрия","Призма","Пирамида","Куб и параллелепипед","Цилиндр и конус","Шар","Прямая и плоскость","Площади и объёмы","Векторы"]],
  [4,"Простейшая вероятность",["Вероятность"]],
  [5,"Вероятности сложных событий",["Вероятность","Комбинаторика"]],
  [6,"Случайные величины и статистика",["Случайные величины","Статистика"]],
  [7,"Уравнения",["Квадратные уравнения","Степени и корни","Логарифмы","Тригонометрия","Модули и ОДЗ","Линейные уравнения и системы","Тригонометрический круг","Оси тангенсов и котангенсов"]],
  [8,"Вычисления и преобразования",["Формулы сокращённого умножения","Степени и корни","Логарифмы","Тригонометрия","Модули и ОДЗ","Проценты и пропорции"]],
  [9,"Производная и первообразная",["Производная","Первообразная и интеграл","Функции и графики","Тригонометрия"]],
  [10,"Прикладная задача с формулой",["Проценты и пропорции","Формулы сокращённого умножения","Степени и корни","Линейные уравнения и системы","Текстовые задачи"]],
  [11,"Текстовая задача",["Текстовые задачи","Арифметическая прогрессия","Геометрическая прогрессия","Квадратные уравнения","Проценты и пропорции"]],
  [12,"Функции и графики",["Функции и графики","Линейная функция","Парабола","Обратная пропорциональность","Показательная функция","Логарифмическая функция"]],
  [13,"Финансовая математика",["Финансовая математика","Проценты и пропорции","Арифметическая прогрессия","Геометрическая прогрессия","Текстовые задачи"]],
  [14,"Тригонометрические уравнения",["Тригонометрия","Тригонометрический круг","Оси тангенсов и котангенсов","Модули и ОДЗ"]],
  [15,"Стереометрия: доказательство и вычисление",["Стереометрия","Призма","Пирамида","Куб и параллелепипед","Цилиндр и конус","Шар","Прямая и плоскость","Площади и объёмы","Векторы"]],
  [16,"Неравенства",["Квадратные уравнения","Степени и корни","Логарифмы","Тригонометрия","Модули и ОДЗ","Линейные уравнения и системы"]],
  [17,"Прикладная задача: модель и её исследование",["Производная","Первообразная и интеграл","Квадратные уравнения","Парабола","Функции и графики","Текстовые задачи"]],
  [18,"Планиметрия: доказательство и вычисление",["Треугольник","Углы и параллельные прямые","Подобие треугольников","Площади фигур","Медиана и биссектриса","Окружность","Трапеция и четырёхугольники","Теорема Птолемея","Теорема косинусов","Чевиана и площади","Теорема Фалеса"]],
  [19,"Задача с параметром",["Параметры","Квадратные уравнения","Парабола","Линейная функция","Логарифмы","Тригонометрия","Модули и ОДЗ","Функции и графики"]],
  [20,"Числа и их свойства",["Числа и свойства","Степени и корни","Комбинаторика"]]
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

const TASK_VISUALS={1:"planimetry",2:"vectors",3:"stereo",4:"probability",5:"probability",6:"random",7:"equations",8:"transformations",9:"derivative",10:"applied",11:"text",12:"graphs",13:"finance",14:"trig",15:"stereo",16:"inequality",17:"optimization",18:"planimetry",19:"parameter",20:"numbers"};
function svgDiagram(type){
  const titles={
    planimetry:["Планиметрия","треугольник · окружность · площади · подобие"],
    vectors:["Векторы","координаты · длина · скалярное произведение"],
    stereo:["Стереометрия","призма · пирамида · объёмы · площади · сечения"],
    probability:["Вероятность","события · сложение · умножение · дерево"],
    random:["Случайные величины","распределение · M(X) · D(X) · σ"],
    equations:["Уравнения","квадратные · корни · логарифмы · тригонометрия"],
    transformations:["Преобразования","степени · корни · логарифмы · тождества"],
    derivative:["Производная","график · касательная · экстремумы"],
    applied:["Прикладная формула","данные → формула → уравнение → ответ"],
    text:["Текстовые задачи","движение · работа · смеси · проценты"],
    finance:["Финансовая математика","кредит · вклад · проценты · платежи"],
    inequality:["Неравенства","ОДЗ · критические точки · интервалы · знак"],
    optimization:["Модель и исследование","функция → производная → максимум/минимум"],
    parameter:["Параметр","число решений · графики · касание · границы"],
    numbers:["Числа и свойства","делимость · остатки · НОД/НОК · цифры"]
  };
  const t=titles[type]||titles.numbers;
  let body='<rect x="90" y="155" width="820" height="285" rx="22" fill="#2b3138" stroke="#424a54" stroke-width="3"/>';
  if(type==="graphs"){
    body='<path d="M150 390H850M220 420V170" stroke="#aeb7c2" stroke-width="3"/><path d="M250 360L420 270L600 190" stroke="#8bb8ff" stroke-width="7" fill="none"/><path d="M250 350Q430 170 650 350" stroke="#e7eaee" stroke-width="7" fill="none"/><path d="M280 205C360 260 360 340 430 385M650 385C720 330 740 250 810 195" stroke="#aeb7c2" stroke-width="7" fill="none"/><text x="675" y="185" fill="#e7eaee" font-size="22" font-family="Arial">y=kx+b</text><text x="665" y="340" fill="#e7eaee" font-size="22" font-family="Arial">y=ax²+bx+c</text><text x="735" y="245" fill="#aeb7c2" font-size="22" font-family="Arial">y=k/x</text><text x="430" y="185" fill="#8bb8ff" font-size="22" font-family="Arial">y=aˣ</text><text x="455" y="330" fill="#e7eaee" font-size="22" font-family="Arial">y=logₐx</text>';
  }else if(type==="trig"){
    body='<circle cx="360" cy="300" r="115" fill="none" stroke="#e7eaee" stroke-width="5"/><path d="M210 300H510M360 150V450" stroke="#aeb7c2" stroke-width="3"/><path d="M475 300V180M360 185H475" stroke="#8bb8ff" stroke-width="4"/><text x="550" y="245" fill="#e7eaee" font-size="24" font-family="Arial">sin²x+cos²x=1</text><text x="550" y="290" fill="#8bb8ff" font-size="24" font-family="Arial">tg x = sin x/cos x</text><text x="550" y="335" fill="#8bb8ff" font-size="24" font-family="Arial">ctg x = cos x/sin x</text>';
  }else if(type==="planimetry"){
    body='<path d="M180 390L430 170L700 390Z" fill="none" stroke="#e7eaee" stroke-width="6"/><circle cx="430" cy="315" r="90" fill="none" stroke="#8bb8ff" stroke-width="5"/><path d="M430 170V390" stroke="#aeb7c2" stroke-width="3"/><text x="735" y="255" fill="#e7eaee" font-size="23" font-family="Arial">S=ah/2</text><text x="735" y="300" fill="#e7eaee" font-size="23" font-family="Arial">a/sin A=2R</text>';
  }else if(type==="vectors"){
    body='<path d="M170 390H820M240 430V170" stroke="#aeb7c2" stroke-width="3"/><path d="M270 360L650 190M270 360L570 405" stroke="#8bb8ff" stroke-width="7"/><text x="520" y="180" fill="#e7eaee" font-size="24" font-family="Arial">a·b=|a||b|cosφ</text><text x="520" y="225" fill="#aeb7c2" font-size="22" font-family="Arial">|a|=√(x²+y²)</text>';
  }else if(type==="stereo"){
    body='<path d="M180 390L380 280L610 390L410 500Z M380 280V150L610 260V390 M180 390V260L380 150" fill="none" stroke="#e7eaee" stroke-width="5"/><path d="M380 150L500 85L720 195L610 260Z" fill="none" stroke="#8bb8ff" stroke-width="5"/><text x="735" y="300" fill="#e7eaee" font-size="23" font-family="Arial">V=Sосн·h</text><text x="735" y="340" fill="#e7eaee" font-size="23" font-family="Arial">V=Sосн·h/3</text>';
  }else if(type==="probability"){
    body='<circle cx="190" cy="300" r="22" fill="#8bb8ff"/><path d="M215 300H360M360 300L510 220M360 300L510 380M510 220H670M510 380H670" stroke="#e7eaee" stroke-width="5" fill="none"/><text x="690" y="230" fill="#e7eaee" font-size="22" font-family="Arial">P(A∩B)</text><text x="690" y="385" fill="#e7eaee" font-size="22" font-family="Arial">P(A∪B)</text>';
  }else if(type==="random"){
    body='<path d="M170 400H650M230 430V170" stroke="#aeb7c2" stroke-width="3"/><rect x="300" y="315" width="70" height="85" fill="#8bb8ff"/><rect x="410" y="250" width="70" height="150" fill="#e7eaee"/><rect x="520" y="190" width="70" height="210" fill="#aeb7c2"/><text x="690" y="250" fill="#e7eaee" font-size="22" font-family="Arial">M(X)=Σxᵢpᵢ</text><text x="690" y="295" fill="#e7eaee" font-size="22" font-family="Arial">D=M(X²)-M(X)²</text><text x="690" y="340" fill="#e7eaee" font-size="22" font-family="Arial">σ=√D</text>';
  }else{
    body+='<text x="150" y="250" fill="#e7eaee" font-size="30" font-family="Arial">'+t[0]+'</text><text x="150" y="315" fill="#aeb7c2" font-size="24" font-family="Arial">'+t[1]+'</text>';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 560"><rect width="1000" height="560" rx="28" fill="#20252b"/><text x="50" y="70" fill="#e7eaee" font-size="36" font-family="Arial" font-weight="700">'+t[0]+'</text><text x="50" y="108" fill="#aeb7c2" font-size="21" font-family="Arial">'+t[1]+'</text>'+body+'</svg>';
}
function diagramUrl(type){
  const origin="https://egematinfo.badahyousr.workers.dev/diagram?type="+encodeURIComponent(type);
  return "https://wsrv.nl/?url="+encodeURIComponent(origin)+"&w=1000&output=jpg&q=82";
}
const SHPORA_PDF_URL = "https://raw.githubusercontent.com/badahyousr-collab/EGEMATINFO/main/%D0%A8%D0%BF%D0%BE%D1%80%D0%B0%20%D0%BE%D1%82%20%D0%90%D1%80%D1%82%D1%83%D1%80%D0%B0.pdf";
const SHPORA_TASK_PAGES = {
  1:6, 2:5, 3:8, 4:null, 5:null, 6:null,
  7:0, 8:0, 9:2, 10:3, 11:12, 12:4, 13:null,
  14:0, 15:9, 16:3, 17:2, 18:7, 19:11, 20:13
};
function shporaPageUrl(page){
  if(page===null || page===undefined)return null;
  return "https://wsrv.nl/?url="+encodeURIComponent(SHPORA_PDF_URL)+"&page="+page+"&w=1000&output=jpg";
}

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
  const visuals={};
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
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>Мини-шпора ЕГЭ 2027</title><style>:root{color-scheme:dark;--bg:#20252b;--card:#2b3138;--card2:#343b43;--text:#e7eaee;--muted:#aeb7c2;--accent:#8bb8ff;--line:#424a54}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif}.wrap{max-width:780px;margin:auto;padding:14px 12px 36px}.top{position:sticky;top:0;z-index:10;background:rgba(32,37,43,.97);padding:8px 2px 12px;backdrop-filter:blur(10px)}h1{font-size:23px;line-height:1.2;margin:3px 0 5px}.sub{color:var(--muted);font-size:13px;margin-bottom:12px}.note{margin:12px 0;color:var(--muted);font-size:12px;line-height:1.45}.task{background:var(--card);border:1px solid var(--line);border-radius:14px;margin:9px 0;overflow:hidden}.task-head{width:100%;border:0;background:var(--card2);color:var(--text);padding:14px 15px;text-align:left;display:flex;align-items:center;justify-content:space-between;font-size:16px;cursor:pointer}.task-head b{color:var(--accent);font-size:18px;margin-right:9px}.task-title{font-weight:650}.chevron{font-size:20px;color:var(--muted);transition:.15s}.task.open .chevron{transform:rotate(180deg)}.task-body{display:none;padding:0 9px 9px}.task.open .task-body{display:block}.formula-card{background:#30373f;border:1px solid #3e464f;border-radius:11px;margin:8px 0;overflow:hidden}.formula-title{padding:11px 12px;font-size:15px;font-weight:700}.formula{padding:10px 12px 13px;white-space:pre-line;font-family:"Times New Roman",serif;font-size:18px;line-height:1.62;color:#f0f2f4}.diagram{display:block;width:100%;max-height:185px;padding:8px 12px;color:#dbe7f7}.hidden{display:none!important}.count{color:var(--muted);font-size:12px;margin-top:7px}.all{margin-top:16px}.all summary{cursor:pointer;color:var(--accent);font-weight:650;padding:10px 2px}.all-body{margin-top:3px}</style></head><body><main class="wrap"><div class="top"><h1>📐 Мини-шпора — ЕГЭ профиль 2027</h1><div class="sub">№1–20 · формулы и правила по каждому типу задания</div><div class="count">Выбирай нужное задание или тему в списке ниже.</div></div><div class="note">Источник материала — «Шпора от Артура». Для каждого номера добавлена тематическая миниатюра с основными объектами и приёмами его вариаций.</div><section id="tasks">${taskSections}</section><details class="all"><summary>📚 Все формулы</summary><div class="all-body">${allSections}</div></details></main><script>function toggleTask(btn){btn.closest('.task').classList.toggle('open')}if(window.Telegram?.WebApp){Telegram.WebApp.ready();Telegram.WebApp.expand();}</script></body></html>`;
}

async function telegram(env,method,body){
  const r=await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)});
  return r.json();
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
    .split(/\s+/)
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
  // Telegram должен получать реальные переводы строк, а не буквальные \\n  // Последний слой нормализации защищает от двойного экранирования. 
  text=String(text||"").replace(/\\n/g,"\n");
  const parts=[];
  for(let i=0;i<text.length;i+=3900)parts.push(text.slice(i,i+3900));
  for(const part of parts)await telegram(env,"sendMessage",{chat_id,text:part});
}
async function sendTaskAnswer(env,chat_id,num){
  const task=TASKS_2027.find(x=>x[0]===num);
  if(!task)return false;
  const [n,title,names]=task;
  const byTitle=new Map(FORMULAS);
  let out="📘 Задание №"+n+" — "+title+"\n\n";
  for(const name of names){
    const body=byTitle.get(name);
    if(body)out+="📌 "+name+"\\n"+body+"\\n\\n";
  }
  await sendTextChunks(env,chat_id,out.trim());

  const page=SHPORA_TASK_PAGES[n];
  const imageUrl=shporaPageUrl(page);
  if(imageUrl)await telegram(env,"sendPhoto",{chat_id,photo:imageUrl,caption:"🖼️ «Шпора от Артура» — материал к заданию №"+n+"."});
  const visualType=TASK_VISUALS[n];
  if(visualType)await telegram(env,"sendPhoto",{chat_id,photo:diagramUrl(visualType),caption:"📌 Схема к заданию №"+n+" — основные объекты и приёмы для его вариаций."});

  await telegram(env,"sendMessage",{chat_id,text:"📖 Полный материал — в мини-шпоре.",reply_markup:{inline_keyboard:[[{text:"📖 Открыть мини-шпору",web_app:{url:"https://egematinfo.badahyousr.workers.dev/app?v=20260926"}}]]}});
  return true;
}

async function handleSourceDocument(update,env){
  const doc=update.message?.document;
  if(!doc)return false;
  const chat_id=update.message.chat.id;
  const name=doc.file_name||"";
  const isPdf=(doc.mime_type==="application/pdf")||/\.pdf$/i.test(name);
  if(!isPdf){
    await telegram(env,"sendMessage",{chat_id,text:"❌ Нужен именно PDF-файл «Шпора от Артура»."});
    return true;
  }
  // Telegram file_id is stable across Worker deployments. Store it in a Worker variable
  // by instructing the deployment to set SHPORA_FILE_ID; no repeated upload is needed afterwards.
  const pdfInfoMessage = ["✅ PDF «", name, "» получен. ID файла: ", doc.file_id, ". Добавь этот ID в SHPORA_FILE_ID один раз — после этого повторно загружать PDF при обновлениях кода не потребуется."].join("");
  await telegram(env,"sendMessage",{chat_id,text:pdfInfoMessage});
  await telegram(env,"sendMessage",{chat_id,text:"📌 Сейчас бот использует только материалы «Шпоры от Артура» и не подставляет внешние/сгенерированные схемы."});
  return true;
}

async function handleUpdate(update,env){
  if(update.message?.document){
    if(await handleSourceDocument(update,env))return;
  }
  if(update.message?.text?.startsWith("/source")){
    const fileId=env.SHPORA_FILE_ID;
    if(!fileId){
      await telegram(env,"sendMessage",{chat_id:update.message.chat.id,text:"⚠️ Файл «Шпора от Артура» ещё не привязан к постоянному ID. Отправь PDF боту один раз — он покажет file_id для SHPORA_FILE_ID."});
      return;
    }
    await telegram(env,"sendDocument",{chat_id:update.message.chat.id,document:fileId,caption:"📖 Шпора от Артура"});
    return;
  }
  if(update.message?.text?.startsWith("/start")){
    await telegram(env,"sendMessage",{chat_id:update.message.chat.id,text:"🎓 Выбор экзамена",reply_markup:MAIN_MENU}); return;
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
      let out="🔎 Материал по запросу: «"+raw+"»\n\n";
      if(matchedTasks.length){
        out+="📘 Связанные задания:\n";
        for(const [num,title] of matchedTasks)out+="№"+num+" — "+title+"\n";
        out+="\n";
      }
      if(matchedFormulas.length){
        out+="📚 Формулы и правила:\n\n";
        for(const [title,body] of matchedFormulas.slice(0,8))out+="📌 "+title+"\n"+body+"\n\n";
      }
      await sendTextChunks(env,chat_id,out.trim());

      // Если поиск попал сразу на несколько номеров, показываем и их соответствующие страницы из PDF.
      const visualTasks=matchedTasks.map(([num])=>({num,page:SHPORA_TASK_PAGES[num],visual:TASK_VISUALS[num]}));
      for(const item of visualTasks.slice(0,4)){
        const imageUrl=shporaPageUrl(item.page);
        if(imageUrl)await telegram(env,"sendPhoto",{chat_id,photo:imageUrl,caption:"🖼️ «Шпора от Артура» — материал к заданию №"+item.num+"."});
        if(item.visual)await telegram(env,"sendPhoto",{chat_id,photo:diagramUrl(item.visual),caption:"📌 Схема к заданию №"+item.num+"."});
      }

      await telegram(env,"sendMessage",{chat_id,text:"Если нужен полный материал конкретного номера — отправь только номер, например «15»."});
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
    await telegram(env,"sendMessage",{chat_id,text:"🔎 Введите номер задания или тему — бот выдаст всю нужную информацию для решения прямо в чат.\n\nНапример: 15\nИли: логарифмы, пирамида, параметры.",reply_markup:{force_reply:true,input_field_placeholder:"Номер задания или тема"}}); return;
  }
  else if(q.data==="open_full_file"){
    await telegram(env,"sendMessage",{chat_id,text:"📖 Открывай мини-шпору:",reply_markup:{inline_keyboard:[[{text:"📐 Открыть мини-шпору",web_app:{url:"https://egematinfo.badahyousr.workers.dev/app?v=20260926"}}]]}}); return;
  }
  else if(q.data==="back_main"){text="🎓 Выбор экзамена";reply_markup=MAIN_MENU}
  else if(q.data==="back_math"){text="📐 Математика\n\nВыбери вариант экзамена:";reply_markup=MATH_MENU}
  if(text)await telegram(env,"editMessageText",{chat_id,message_id,text,reply_markup});
}

export default {
  async fetch(request,env){
    const url=new URL(request.url);
    if(url.pathname==="/app")return new Response(appHtml(),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
    if(url.pathname==="/diagram"){
      const type=new URL(request.url).searchParams.get("type")||"numbers";
      return new Response(svgDiagram(type),{headers:{"content-type":"image/svg+xml; charset=utf-8","cache-control":"public,max-age=86400"}});
    }
    if(url.pathname==="/visual"){
      const page=Number(new URL(request.url).searchParams.get("page"));
      const imageUrl=shporaPageUrl(Number.isInteger(page)?page:null);
      if(!imageUrl)return new Response("Not Found",{status:404});
      return Response.redirect(imageUrl,302);
    }
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