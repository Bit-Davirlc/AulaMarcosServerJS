 const URL_API = "http://localhost:3001/tarefas";

 export async function buscarTarefas() {
  const resposta = await fetch (URL_API);
  if (!resposta.ok) {
    throw new error("Erro ao buscar tarefas");
  }

  return await resposta.json();
 }

 export async function criarTarefa(tarefa) {
    const resposta = await fetch(URL_API,{
        method: "POST",
        headers: {
            "Content-type": "aplication/json"
        },
        body: JSON.stringify(tarefa)
    });
    if (!resposta.ok){
        throw new Error("Erro ao criar tarefa");
    }
    
    return await resposta.json();
 }
 
  export async function excluirTarefa(id) {
    const resposta = await fetch(`${URL_API}/${id}`,{
        method: "DELETE"
        });
  }
