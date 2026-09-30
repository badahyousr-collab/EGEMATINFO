// DEPLOY_VERSION_20260929_BUILD_FIX
const MAIN_MENU = {inline_keyboard: [[{text:"📐 Математика",callback_data:"math"}],[{text:"💻 Информатика",callback_data:"informatics"}]]};
const MATH_MENU = {inline_keyboard: [[{text:"📘 Профильная математика",callback_data:"profile_math"}],[{text:"⬅️ Назад",callback_data:"back_main"}]]};
const PROFILE_MENU = {
  inline_keyboard: [
    [{text:"📖 Открыть мини-шпору",web_app:{url:"https://egematinfo.badahyousr.workers.dev/app?v=20260930"}}],
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

const IMAGE_FILES=["vsya mat/Снимок экрана 2026-09-29 183414.png","vsya mat/Снимок экрана 2026-09-29 183421.png","vsya mat/Снимок экрана 2026-09-29 183454.png","vsya mat/Снимок экрана 2026-09-29 183508.png","vsya mat/Снимок экрана 2026-09-29 183515.png","vsya mat/Снимок экрана 2026-09-29 183521.png","vsya mat/Снимок экрана 2026-09-29 183526.png","vsya mat/Снимок экрана 2026-09-29 183533.png","vsya mat/Снимок экрана 2026-09-29 183540.png","vsya mat/Снимок экрана 2026-09-29 183548.png","vsya mat/Снимок экрана 2026-09-29 183556.png","vsya mat/Снимок экрана 2026-09-29 183603.png","vsya mat/Снимок экрана 2026-09-29 183613.png","vsya mat/Снимок экрана 2026-09-29 183627.png","vsya mat/Снимок экрана 2026-09-29 183636.png","vsya mat/Снимок экрана 2026-09-29 183729.png","vsya mat/Снимок экрана 2026-09-29 183740.png","vsya mat/Снимок экрана 2026-09-29 183820.png","vsya mat/Снимок экрана 2026-09-29 183827.png","vsya mat/Снимок экрана 2026-09-29 183834.png","vsya mat/Снимок экрана 2026-09-29 183840.png","vsya mat/Снимок экрана 2026-09-29 183848.png","vsya mat/Снимок экрана 2026-09-29 183855.png","vsya mat/Снимок экрана 2026-09-29 183902.png","vsya mat/Снимок экрана 2026-09-29 183911.png","vsya mat/Снимок экрана 2026-09-29 183918.png","vsya mat/Снимок экрана 2026-09-29 183926.png","vsya mat/Снимок экрана 2026-09-29 183937.png","vsya mat/Снимок экрана 2026-09-29 184004.png","vsya mat/Снимок экрана 2026-09-29 184012.png","vsya mat/Снимок экрана 2026-09-29 184038.png","vsya mat/Снимок экрана 2026-09-29 184043.png","vsya mat/Снимок экрана 2026-09-29 184049.png","vsya mat/Снимок экрана 2026-09-29 184055.png","vsya mat/Снимок экрана 2026-09-29 184102.png","vsya mat/Снимок экрана 2026-09-29 184110.png","vsya mat/Снимок экрана 2026-09-29 184121.png","vsya mat/Снимок экрана 2026-09-29 184652.png","vsya mat/Снимок экрана 2026-09-29 184658.png","vsya mat/Снимок экрана 2026-09-29 184707.png","vsya mat/Снимок экрана 2026-09-29 184716.png","vsya mat/Снимок экрана 2026-09-29 184735.png","vsya mat/Снимок экрана 2026-09-29 184747.png","vsya mat/Снимок экрана 2026-09-29 184757.png","vsya mat/Снимок экрана 2026-09-29 184810.png","vsya mat/Снимок экрана 2026-09-29 184819.png","vsya mat/Снимок экрана 2026-09-29 184827.png","vsya mat/Снимок экрана 2026-09-29 184842.png","vsya mat/Снимок экрана 2026-09-29 184851.png","vsya mat/Снимок экрана 2026-09-29 184901.png","vsya mat/Снимок экрана 2026-09-29 184916.png","vsya mat/Снимок экрана 2026-09-29 184929.png","vsya mat/Снимок экрана 2026-09-29 184936.png","vsya mat/Снимок экрана 2026-09-29 184947.png","vsya mat/Снимок экрана 2026-09-29 184952.png","vsya mat/Снимок экрана 2026-09-29 185001.png","vsya mat/Снимок экрана 2026-09-29 185011.png","vsya mat/Снимок экрана 2026-09-29 185143.png","vsya mat/Снимок экрана 2026-09-29 185153.png","vsya mat/Снимок экрана 2026-09-29 185202.png","vsya mat/Снимок экрана 2026-09-29 185211.png","vsya mat/Снимок экрана 2026-09-29 185219.png","vsya mat/Снимок экрана 2026-09-29 185240.png","vsya mat/Снимок экрана 2026-09-29 185249.png","vsya mat/Снимок экрана 2026-09-29 185258.png","vsya mat/Снимок экрана 2026-09-29 185307.png","vsya mat/Снимок экрана 2026-09-29 185319.png","vsya mat/Снимок экрана 2026-09-29 185325.png","vsya mat/Снимок экрана 2026-09-29 185339.png","vsya mat/Снимок экрана 2026-09-29 185348.png","vsya mat/Снимок экрана 2026-09-29 185359.png","vsya mat/Снимок экрана 2026-09-29 185407.png","vsya mat/Снимок экрана 2026-09-29 185414.png","vsya mat/Снимок экрана 2026-09-29 185422.png","vsya mat/Снимок экрана 2026-09-29 185428.png","vsya mat/Снимок экрана 2026-09-29 185447.png","vsya mat/Снимок экрана 2026-09-29 185513.png","vsya mat/Снимок экрана 2026-09-29 185524.png","vsya mat/Снимок экрана 2026-09-29 185530.png","vsya mat/Снимок экрана 2026-09-29 185539.png","vsya mat/Снимок экрана 2026-09-29 185548.png","vsya mat/Снимок экрана 2026-09-29 185557.png","vsya mat/Снимок экрана 2026-09-29 185604.png","vsya mat/Снимок экрана 2026-09-29 185611.png","vsya mat/Снимок экрана 2026-09-29 185620.png","vsya mat/Снимок экрана 2026-09-29 185632.png","vsya mat/Снимок экрана 2026-09-29 185655.png","vsya mat/Снимок экрана 2026-09-29 185704.png","vsya mat/Снимок экрана 2026-09-29 185718.png","vsya mat 2/Снимок экрана 2026-09-29 181210.png","vsya mat 2/Снимок экрана 2026-09-29 181223.png","vsya mat 2/Снимок экрана 2026-09-29 181251.png","vsya mat 2/Снимок экрана 2026-09-29 181304.png","vsya mat 2/Снимок экрана 2026-09-29 181316.png","vsya mat 2/Снимок экрана 2026-09-29 181327.png","vsya mat 2/Снимок экрана 2026-09-29 181354.png","vsya mat 2/Снимок экрана 2026-09-29 181451.png","vsya mat 2/Снимок экрана 2026-09-29 181501.png","vsya mat 2/Снимок экрана 2026-09-29 181512.png","vsya mat 2/Снимок экрана 2026-09-29 181533.png","vsya mat 2/Снимок экрана 2026-09-29 181545.png","vsya mat 2/Снимок экрана 2026-09-29 181718.png","vsya mat 2/Снимок экрана 2026-09-29 181735.png","vsya mat 2/Снимок экрана 2026-09-29 181745.png","vsya mat 2/Снимок экрана 2026-09-29 181905.png","vsya mat 2/Снимок экрана 2026-09-29 181913.png","vsya mat 2/Снимок экрана 2026-09-29 181924.png","vsya mat 2/Снимок экрана 2026-09-29 181941.png","vsya mat 2/Снимок экрана 2026-09-29 181952.png","vsya mat 2/Снимок экрана 2026-09-29 182000.png","vsya mat 2/Снимок экрана 2026-09-29 182017.png","vsya mat 2/Снимок экрана 2026-09-29 182033.png","vsya mat 2/Снимок экрана 2026-09-29 182040.png","vsya mat 2/Снимок экрана 2026-09-29 182048.png","vsya mat 2/Снимок экрана 2026-09-29 182057.png","vsya mat 2/Снимок экрана 2026-09-29 182104.png","vsya mat 2/Снимок экрана 2026-09-29 182109.png","vsya mat 2/Снимок экрана 2026-09-29 182115.png","vsya mat 2/Снимок экрана 2026-09-29 182134.png","vsya mat 2/Снимок экрана 2026-09-29 182143.png","vsya mat 2/Снимок экрана 2026-09-29 182152.png","vsya mat 2/Снимок экрана 2026-09-29 182201.png","vsya mat 2/Снимок экрана 2026-09-29 182211.png","vsya mat 2/Снимок экрана 2026-09-29 182222.png","vsya mat 2/Снимок экрана 2026-09-29 182231.png","vsya mat 2/Снимок экрана 2026-09-29 182239.png","vsya mat 2/Снимок экрана 2026-09-29 182253.png","vsya mat 2/Снимок экрана 2026-09-29 182311.png","vsya mat 2/Снимок экрана 2026-09-29 182318.png","vsya mat 2/Снимок экрана 2026-09-29 182326.png","vsya mat 2/Снимок экрана 2026-09-29 182340.png","vsya mat 2/Снимок экрана 2026-09-29 182355.png","vsya mat 2/Снимок экрана 2026-09-29 182405.png","vsya mat 2/Снимок экрана 2026-09-29 182415.png","vsya mat 2/Снимок экрана 2026-09-29 182431.png","vsya mat 2/Снимок экрана 2026-09-29 182441.png","vsya mat 2/Снимок экрана 2026-09-29 182449.png","vsya mat 2/Снимок экрана 2026-09-29 182500.png","vsya mat 2/Снимок экрана 2026-09-29 182520.png","vsya mat 2/Снимок экрана 2026-09-29 182534.png","vsya mat 2/Снимок экрана 2026-09-29 182544.png","vsya mat 2/Снимок экрана 2026-09-29 182554.png","vsya mat 2/Снимок экрана 2026-09-29 182605.png","vsya mat 2/Снимок экрана 2026-09-29 182615.png","vsya mat 2/Снимок экрана 2026-09-29 182623.png","vsya mat 2/Снимок экрана 2026-09-29 182657.png","vsya mat 2/Снимок экрана 2026-09-29 182711.png","vsya mat 2/Снимок экрана 2026-09-29 182719.png","vsya mat 2/Снимок экрана 2026-09-29 182731.png","vsya mat 2/Снимок экрана 2026-09-29 182742.png","vsya mat 2/Снимок экрана 2026-09-29 182804.png","vsya mat 2/Снимок экрана 2026-09-29 182816.png","vsya mat 2/Снимок экрана 2026-09-29 182830.png","vsya mat 2/Снимок экрана 2026-09-29 182840.png","vsya mat 2/Снимок экрана 2026-09-29 182852.png","vsya mat 2/Снимок экрана 2026-09-29 182901.png","vsya mat 2/Снимок экрана 2026-09-29 182908.png","vsya mat 2/Снимок экрана 2026-09-29 182916.png","vsya mat 2/Снимок экрана 2026-09-29 182925.png","vsya mat 2/Снимок экрана 2026-09-29 182931.png","vsya mat 2/Снимок экрана 2026-09-29 182948.png","vsya mat 2/Снимок экрана 2026-09-29 183015.png","vsya mat 2/Снимок экрана 2026-09-29 183034.png","vsya mat 2/Снимок экрана 2026-09-29 183118.png","vsya mat 2/Снимок экрана 2026-09-29 183124.png","vsya mat 2/Снимок экрана 2026-09-29 183133.png","vsya mat 2/Снимок экрана 2026-09-29 183140.png","vsya mat 2/Снимок экрана 2026-09-29 183147.png","vsya mat 2/Снимок экрана 2026-09-29 183153.png","vsya mat 2/Снимок экрана 2026-09-29 183159.png","vsya mat 2/Снимок экрана 2026-09-29 183205.png","vsya mat 2/Снимок экрана 2026-09-29 183212.png","vsya mat 2/Снимок экрана 2026-09-29 183218.png","vsya mat 2/Снимок экрана 2026-09-29 183227.png","vsya mat 2/Снимок экрана 2026-09-29 183239.png","vsya mat 2/Снимок экрана 2026-09-29 183247.png","vsya mat 2/Снимок экрана 2026-09-29 183253.png","vsya mat 2/Снимок экрана 2026-09-29 183301.png","vsya mat 2/Снимок экрана 2026-09-29 183331.png","vsya mat 2/Снимок экрана 2026-09-29 183337.png","vsya mat 2/Снимок экрана 2026-09-29 183343.png","vsya mat 2/Снимок экрана 2026-09-29 183350.png","vsya mat 2/Снимок экрана 2026-09-29 183357.png","vsya mat 2/Снимок экрана 2026-09-29 183408.png"];
const TASK_IMAGE_INDEX={"1":[27,31,32,33,34,35,36,37,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144],"2":[105,106,107,108,109,110,111],"3":[18,19,20,21,22,23,24,25,26,28,29,30,145,146,147,148,149,150,151,152,153,154,155,156,157],"4":[],"5":[],"6":[],"7":[10,11,12,40,41,46,47,48,49,50,90,91,92,93,94,95,96,100,158,159,160],"8":[40,41,42,90,92,93,94,95,100],"9":[4,5,6,7,8,9,43,44,45,51,97,98,99,164,170,171],"10":[102],"11":[172,173,174,175,176,177,178],"12":[4,5,8,9,43,44,45,50,51,161],"13":[172,173,174,175,176,177,178],"14":[38,39,40,41,52,53],"15":[18,19,20,21,22,23,24,25,26,28,29,30,145,146,147,148,149,150,151,152,153,154,155,156,157],"16":[90,91,93,94,95,103,158,159,160,165,170,171],"17":[6,15,16,17,43,44,45,46,47,48,49,50,51,102,161,163,164,165,166,167,168,169,170,171],"18":[27,31,32,33,34,35,36,37,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144],"19":[10,11,12,14,15,16,43,44,45,46,47,48,49,50,51,158,159,160,161,163,164,165,166,167,168,169,170,171],"20":[180,181,182,183,184]};
function imageUrl(i){const p=IMAGE_FILES[i-1];return p?"https://raw.githubusercontent.com/badahyousr-collab/EGEMATINFO/main/"+p.split("/").map(encodeURIComponent).join("/"):null;}
function taskImageUrls(n){return (TASK_IMAGE_INDEX[n]||[]).map(imageUrl).filter(Boolean);}
async function sendSourceImages(env,chat_id,n){const u=taskImageUrls(n);for(let i=0;i<u.length;i++){const payload={chat_id,photo:u[i]};if(i===0)payload.caption="🖼️ Материалы";await telegram(env,"sendPhoto",payload);}}

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
      const sourceImages=taskImageUrls(num).map((u,i)=>`<img class="source-img" loading="lazy" src="${u}" alt="Иллюстрация к заданию №${num} ${i+1}">`).join('');
      return `<div class="formula-card" data-search="${num} ${title} ${name} ${body}"><div class="formula-title">${name}</div><div class="formula">${body}</div></div>`;
    }).join('');
    return `<article class="task" data-search="${num} ${title} ${names.join(' ')}"><button class="task-head" type="button" onclick="toggleTask(this)"><span><b>№${num}</b><span class="task-title">${title}</span></span><span class="chevron">⌄</span></button><div class="task-body">${cards}<div class="source-gallery">${sourceImages}</div></div></article>`;
  }).join('');
  const allSections=FORMULAS.map(([title,body],i)=>`<div class="formula-card" data-search="${title} ${body}"><div class="formula-title">${i+1}. ${title}</div><div class="formula">${body}</div></div>`).join('');
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>Мини-шпора ЕГЭ 2027</title><style>:root{color-scheme:dark;--bg:#20252b;--card:#2b3138;--card2:#343b43;--text:#e7eaee;--muted:#aeb7c2;--accent:#8bb8ff;--line:#424a54}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif}.wrap{max-width:780px;margin:auto;padding:14px 12px 36px}.top{position:sticky;top:0;z-index:10;background:rgba(32,37,43,.97);padding:8px 2px 12px;backdrop-filter:blur(10px)}h1{font-size:23px;line-height:1.2;margin:3px 0 5px}.sub{color:var(--muted);font-size:13px;margin-bottom:12px}.note{margin:12px 0;color:var(--muted);font-size:12px;line-height:1.45}.task{background:var(--card);border:1px solid var(--line);border-radius:14px;margin:9px 0;overflow:hidden}.task-head{width:100%;border:0;background:var(--card2);color:var(--text);padding:14px 15px;text-align:left;display:flex;align-items:center;justify-content:space-between;font-size:16px;cursor:pointer}.task-head b{color:var(--accent);font-size:18px;margin-right:9px}.task-title{font-weight:650}.chevron{font-size:20px;color:var(--muted);transition:.15s}.task.open .chevron{transform:rotate(180deg)}.task-body{display:none;padding:0 9px 9px}.task.open .task-body{display:block}.formula-card{background:#30373f;border:1px solid #3e464f;border-radius:11px;margin:8px 0;overflow:hidden}.formula-title{padding:11px 12px;font-size:15px;font-weight:700}.formula{padding:10px 12px 13px;white-space:pre-line;font-family:"Times New Roman",serif;font-size:18px;line-height:1.62;color:#f0f2f4}.source-gallery{display:grid;grid-template-columns:1fr;gap:8px;padding:4px 0}.source-img{display:block;width:100%;height:auto;border-radius:10px;background:#222;object-fit:contain}.diagram{display:block;width:100%;max-height:185px;padding:8px 12px;color:#dbe7f7}.hidden{display:none!important}.count{color:var(--muted);font-size:12px;margin-top:7px}.all{margin-top:16px}.all summary{cursor:pointer;color:var(--accent);font-weight:650;padding:10px 2px}.all-body{margin-top:3px}</style></head><body><main class="wrap"><div class="top"><h1>📐 Мини-шпора — ЕГЭ профиль 2027</h1><div class="sub">№1–20 · формулы и правила по каждому типу задания</div><div class="count">Выбирай нужное задание или тему в списке ниже.</div></div><div class="note">Иллюстрации взяты из загруженного набора «Шпора от Артура» и привязаны к номерам по содержанию. Номера и типы заданий сверены с проектом КИМ ЕГЭ-2027.</div><section id="tasks">${taskSections}</section><details class="all"><summary>📚 Все формулы</summary><div class="all-body">${allSections}</div></details></main><script>function toggleTask(btn){btn.closest('.task').classList.toggle('open')}if(window.Telegram?.WebApp){Telegram.WebApp.ready();Telegram.WebApp.expand();}</script></body></html>`;
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
async function sendTaskAnswer(env,chat_id,num){const task=TASKS_2027.find(x=>x[0]===num);if(!task)return false;const [n,title,names]=task;const byTitle=new Map(FORMULAS);let out="📘 Задание №"+n+" — "+title+"\n\n";for(const name of names){const body=byTitle.get(name);if(body)out+="📌 "+name+"\n"+body+"\n\n";}await sendTextChunks(env,chat_id,out.trim());await sendSourceImages(env,chat_id,n);await telegram(env,"sendMessage",{chat_id,text:"📖 Полный материал — в мини-шпоре.",reply_markup:{inline_keyboard:[[{text:"📖 Открыть мини-шпору",web_app:{url:"https://egematinfo.badahyousr.workers.dev/app?v=20260930"}}]]}});return true;}

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
      for(const [num] of matchedTasks.slice(0,4)) await sendSourceImages(env,chat_id,num);

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