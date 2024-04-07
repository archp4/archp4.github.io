var btn = document.getElementById("btn");

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (email == null || email == "") {
    alert("Email can't be blank");
    return false;
  } else if (subject == null || subject == "") {
    alert("Subject can't be blank");
    return false;
  } else if (message == null || message == "") {
    alert("Message can't be blank");
    return false;
  }
  return true;
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var payload =
    "Name" +
    name +
    "<br/>\nEmail:" +
    email +
    "<br/>\nSubject: " +
    subject +
    "<br/>\nMessage : " +
    message;

  if (validateForm()) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "archpatel4@gmail.com",
      Password: "9905BE0F0F144ED3B99B040AE1A58C9278D9",
      To: "archpatel4@gmail.com",
      From: "archpatel4@gmail.com",
      Subject: "Portfolio Message From " + name,
      Body: payload,
    }).then((e) => alert("Message Sended"));
  }
});
