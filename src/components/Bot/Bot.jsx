import { useEffect } from "react";

const Bot = () => {
  useEffect(() => {
    const send_message = () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "", //chatId
          text: "Hello world",
        }),
      };

      // Отправка запроса
      fetch(
        "https://api.telegram.org/bot/sendMessage", //idBot
        options
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Ответ от API Telegram:", data);
        })
        .catch((error) => {
          console.error("Ошибка:", error);
        });
    };

    const targetTime = new Date("2023-10-16T16:01:00");
    const currentTime = new Date();
    const delay = targetTime - currentTime;

    if (delay > 0) {
      setTimeout(send_message, delay);
    }
  }, []);

  return <div>Чат-бот для отправки сообщения</div>;
};

export default Bot;
