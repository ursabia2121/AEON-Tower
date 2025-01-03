import Axios from "axios";


export const SubmitForm = async (data) => {
    try {
        const response = await Axios.post("/api/submit-form", data);
        return response.data;
    } catch (error) {
        console.error("Error submitting form:", error);
        throw error;
    }
};

export default {
    SubmitForm
};