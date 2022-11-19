async function handler(req, res) {
  //make sure the request method is only POSTING for sign up or login
  if (req !== "POST") {
    return;
  }

  const { enteredEmail, enteredPassword } = req.body;
}
