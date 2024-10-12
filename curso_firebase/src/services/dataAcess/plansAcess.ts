// Este é o arquivo de acesso aos dados onde o plano é adicionado
import { db } from "../../firebaseConfig";

const plansReference = db.collection('planos');

// Função para adicionar o plano e retornar o ID do documento
export async function addPlansAcess(body: any) {
    try {
        const res = await plansReference.add({ text: "Mensal", value: 69 });
        return { id: res.id }; // Retorna o ID do documento
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
}

// Função para definir um plano com um ID gerado manualmente
export async function setPlansAcess(body: any) {
    try {
        const docRef = plansReference.doc('KwHwVR20rJBxn7YtSxJw').set(body); // Cria uma referência com um ID gerado manualmente
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error; // Propaga o erro
    }
}
