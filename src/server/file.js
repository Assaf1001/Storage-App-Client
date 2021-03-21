import axios from "axios";

const URL = process.env.REACT_APP_DB;
const streamURL = process.env.REACT_APP_STREAM_URL;

export const uploadFile = async (formData, token) => {
    try {
        const res = await axios.post(URL, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });

        return res.data;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};

export const getFilesData = async (token) => {
    try {
        const res = await axios.get(URL, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return res.data;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};

export const getFile = async (key, name, token) => {
    try {
        const res = await axios.get(streamURL, {
            params: { key, name },
            headers: { Authorization: `Bearer ${token}` },
        });

        return res.data;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};

export const deleteFile = async (id, key, token) => {
    try {
        await axios.delete(URL, {
            data: { id, key },
            headers: { Authorization: `Bearer ${token}` },
        });
        return;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};
