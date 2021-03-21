import axios from "axios";

const filesURL = `${process.env.REACT_APP_DB}files`;
// const streamURL = `${process.env.REACT_APP_DB}file`;

export const uploadFile = async (formData, token) => {
    try {
        const res = await axios.post(filesURL, formData, {
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
        const res = await axios.get(filesURL, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return res.data;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};

// export const getFile = async (key, name, token) => {
//     try {
//         const res = await axios.get(streamURL, {
//             params: { key, name },
//             headers: { Authorization: `Bearer ${token}` },
//         });

//         return res.data;
//     } catch (err) {
//         throw new Error(err.response.data.message);
//     }
// };

export const deleteFile = async (id, key, token) => {
    try {
        await axios.delete(filesURL, {
            data: { id, key },
            headers: { Authorization: `Bearer ${token}` },
        });
        return;
    } catch (err) {
        throw new Error(err.response.data.message);
    }
};
