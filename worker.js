const MAIN_MENU = {inline_keyboard: [[{text:"📚 ЕГЭ",callback_data:"ege"}]]};
const EGE_MENU = {inline_keyboard: [[{text:"📐 Математика",callback_data:"math"}],[{text:"⬅️ Назад",callback_data:"back_main"}]]};
const MATH_MENU = {inline_keyboard: [[{text:"📘 Профильная математика",callback_data:"profile_math"}],[{text:"⬅️ Назад",callback_data:"back_ege"}]]};
const PROFILE_MENU = {inline_keyboard: [[{text:"📖 Открыть полный файл",callback_data:"open_full_file"}],[{text:"🔎 Поиск",callback_data:"search_formulas"}],[{text:"⬅️ Назад",callback_data:"back_math"}]]};

async function telegram(env,method,body){
  const r=await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`,{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(body)
  });
  return r.json();
}

const FORMULAS = [
  ["Формулы сокращённого умножения","квадрат суммы, квадрат разности, разность квадратов, куб суммы, куб разности"],
  ["ОДЗ и модули","ОДЗ, область допустимых значений, модуль, раскрытие модуля"],
  ["Степени и корни","степени, свойства степеней, корни"],
  ["Логарифмы","логарифм, свойства логарифмов, логарифмическое уравнение"],
  ["Производная","производная, таблица производных, правила дифференцирования"],
  ["Первообразная и интеграл","первообразная, интеграл, площадь криволинейной трапеции"],
  ["Тригонометрия","sin, cos, tg, ctg, формулы приведения, основные тождества"],
  ["Арифметическая прогрессия","арифметическая прогрессия, an, Sn, разность d"],
  ["Геометрическая прогрессия","геометрическая прогрессия, bn, Sn, знаменатель q"],
  ["Треугольник","площадь треугольника, медиана, биссектриса, высота, подобие"],
  ["Окружность","вписанная окружность, описанная окружность, хорды, касательная, секущая"],
  ["Чевиана и площади","чевиана, лемма о площадях, отношение площадей"],
  ["Теорема Фалеса","Фалес, параллельные прямые, пропорциональные отрезки"],
  ["Теорема Птолемея","Птолемей, вписанный четырёхугольник, диагонали"],
  ["Теорема косинусов","косинусов, стороны треугольника"],
  ["Стереометрия","объём, площадь поверхности, расстояние, угол между прямой и плоскостью"],
  ["Шар","шар, радиус, объём шара, площадь поверхности шара"],
  ["Парабола","парабола, вершина параболы, дискриминант, коэффициент a"],
  ["Параметры","параметр, задачи с параметром"],
  ["Перпендикулярность","перпендикулярность прямой и плоскости, перпендикулярность плоскостей"]
];

async function handleUpdate(update,env){
  if(update.message?.document){
    await telegram(env,"sendMessage",{chat_id:update.message.chat.id,text:"Файл получен. Временный file_id:\n\n"+update.message.document.file_id+"\n\nСейчас подключаю его к кнопке «Открыть полный файл»."});
    return;
  }

  if(update.message?.text?.startsWith("/start")){
    await telegram(env,"sendMessage",{
      chat_id:update.message.chat.id,
      text:"Привет! 👋\n\nВыбери экзамен:",
      reply_markup:MAIN_MENU
    });
    return;
  }

  if(update.message?.text && !update.message.text.startsWith("/")){
    const query=update.message.text.toLowerCase().trim();
    const found=FORMULAS.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(query));
    if(found.length){
      const text="🔎 Найдено:\n\n"+found.map(x=>"📌 "+x[0]+"\n"+x[1]).join("\n\n");
      await telegram(env,"sendMessage",{chat_id:update.message.chat.id,text});
    }else{
      await telegram(env,"sendMessage",{chat_id:update.message.chat.id,text:"Ничего не нашёл по запросу «"+update.message.text+"».\n\nПопробуй: производная, логарифмы, треугольник, окружность, прогрессия, парабола, объём, шар."});
    }
    return;
  }

  const q=update.callback_query;
  if(!q)return;
  await telegram(env,"answerCallbackQuery",{callback_query_id:q.id});

  const chat_id=q.message.chat.id;
  const message_id=q.message.message_id;
  let text=null,reply_markup=null;

  if(q.data==="ege"){text="Выбери предмет:";reply_markup=EGE_MENU}
  else if(q.data==="math"){text="Выбери вариант математики:";reply_markup=MATH_MENU}
  else if(q.data==="profile_math"){text="📐 Профильная математика\n\nЧто хочешь сделать?";reply_markup=PROFILE_MENU}
  else if(q.data==="open_full_file"){await telegram(env,"sendMessage",{chat_id,text:"📖 Полный файл с формулами:"}); await telegram(env,"sendDocument",{chat_id,document:env.PDF_FILE_ID,caption:"Шпора от Артура"}); return}
  else if(q.data==="search_formulas"){await telegram(env,"sendMessage",{chat_id,text:"🔎 Напиши название формулы или темы. Например: производная, логарифмы, треугольник, окружность, прогрессия, парабола, объём."}); return}
  else if(q.data==="back_main"){text="Привет! 👋\n\nВыбери экзамен:";reply_markup=MAIN_MENU}
  else if(q.data==="back_ege"){text="Выбери предмет:";reply_markup=EGE_MENU}
  else if(q.data==="back_math"){text="Выбери вариант математики:";reply_markup=MATH_MENU}

  if(text)await telegram(env,"editMessageText",{chat_id,message_id,text,reply_markup});
}

export default {
  async fetch(request,env){
    const url=new URL(request.url);

    if(url.pathname==="/setup"){
      const result=await telegram(env,"setWebhook",{url:"https://egematinfo.badahyousr.workers.dev/telegram"});
      return new Response(JSON.stringify(result),{headers:{"content-type":"application/json"}});
    }

    if(request.method==="GET")return new Response("EGEMATINFO bot is running.");
    if(request.method!=="POST")return new Response("Method Not Allowed",{status:405});

    try{
      await handleUpdate(await request.json(),env);
      return new Response("OK");
    }catch(e){
      return new Response("Error",{status:500});
    }
  }
};