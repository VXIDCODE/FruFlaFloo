window.__CHAT__ = {
  // users — необязательный блок. Если его нет — цвета и стороны назначатся автоматически.
  users: {
    "Tim": { side: "left",  color: "mauve",  avatar: "👽" },
    "Bob":  { side: "right", color: "green",  avatar: "🤖" }
  },
  messages: [
    { user: "Bob", text: "Привет, ты уже на месте?" },
    { user: "Tim", text: "Да, стою у входа. Тут очень холодно." },
    { user: "Tim", text: "Ты скоро?" },
    { user: "Bob", text: "Через пять минут буду. Пробки." },
    { user: "Bob", text: "Закажи пока два кофе, пожалуйста." },
    { user: "Tim", text: "Ок, только быстрее." }
  ]
};