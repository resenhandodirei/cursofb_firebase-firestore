import { addPlansAcess as addPlansToDatabase } from "../dataAcess/plansAcess";

export async function addPlans() {
    try {
        const response = await addPlansToDatabase(); // Certifique-se de que response é um objeto com { id }
        return response.id; // Acessa a propriedade id
    } catch (error) {
        console.error("Error in addPlans: ", error);
        throw error; // Trata erros caso aconteçam
    }
}
