function status(request, response) {
  response.status(200).json({ status: "testando server local" });
}

export default status;
