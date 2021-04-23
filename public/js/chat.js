document.querySelector("#start_chat").addEventListener("click", (event) => {
  const socket = io();

  const chat_help = document.querySelector("#chat_help");
  chat_help.style.display = "none";

  const chat_in_support = document.querySelector("#chat_in_support");
  chat_in_support.style.display = "block";

  const email = document.getElementById("email").value;
  const text = document.getElementById("txt_help").value;

  socket.on("connect", () => {
    const params = {
      email,
      text,
    };
    socket.emit("client_firts_access", params, (call, err) => {
      err ? console.error(err) : console.log(call);
    });
  });

  socket.on("client_list_all_messages", (messages) => {
    let template_client = document.querySelector("#message_user_template")
      .innerHTML;
    let template_admin = document.querySelector("#admin_template").innerHTML; // TOD

    messages.forEach((message) => {
      if (message.admin_id === null) {
        const rendered = Mustache.render(template_client, {
          message: message.text,
          email,
        });

        document.querySelector("#messages").innerHTML += rendered;
      } else {
        const rendered = Mustache.render(template_admin, {
          message_admin: message.text,
        });
        document.querySelector("#messages").innerHTML += rendered;
      }
    });
  });
});
