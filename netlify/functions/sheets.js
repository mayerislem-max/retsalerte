exports.handler = async function(event, context) {
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJfWl7hNnA36_AMqv4_LJWZQ2eYp1By4HiA3YBEsWTF0c7HYdZO6YPYrZBX1KHujU120DgUWNjiUtk/pub?gid=0&single=true&output=csv";
  
  try {
    const response = await fetch(url);
    const text = await response.text();
    
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      },
      body: text
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Erreur: " + err.message
    };
  }
};
