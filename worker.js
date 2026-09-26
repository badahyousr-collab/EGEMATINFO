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

async function handleUpdate(update,env){
  if(update.message?.text==="/start"){
    await telegram(env,"sendMessage",{
      chat_id:update.message.chat.id,
      text:"Привет! 👋\n\nВыбери экзамен:",
      reply_markup:MAIN_MENU
    });
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
  else if(q.data==="open_full_file"){await telegram(env,"answerCallbackQuery",{callback_query_id:q.id,text:"Файл пока подключаем.",show_alert:true});return}
  else if(q.data==="search_formulas"){await telegram(env,"answerCallbackQuery",{callback_query_id:q.id,text:"Поиск пока подключаем.",show_alert:true});return}
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