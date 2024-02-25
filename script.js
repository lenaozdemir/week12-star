function submitComment() {
  let nameInput = document.getElementById("name").value.trim();
  let avatarInput = document.getElementById("avatar").value.trim();
  let messageInput = document.getElementById("message").value.trim();

  let formattedName =
    nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase();

  let formattedMessage = checkSpam(messageInput);

  let comment = document.createElement("div");
  comment.classList.add("comment");
  comment.innerHTML = `<img src="${avatarInput}" alt="Avatar" style="width: 50px; height: 50px;">
                      ${formattedName}: ${formattedMessage}`;

  let commentList = document.getElementById("commentChat");
  commentChat.appendChild(comment);

  document.getElementById("name").value = "";
  document.getElementById("avatar").value = "";
  document.getElementById("message").value = "";
}

function checkSpam(str) {
  let lowercaseStr = str.toLowerCase();
  let filteredStr = lowercaseStr.replace(/viagra|xxx/g, "***");

  return filteredStr;
}
