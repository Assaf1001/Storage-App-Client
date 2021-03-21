import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { getFilesData, uploadFile } from "../../server/file";

const AddFileForm = () => {
    const { userData } = useContext(LoginContext);

    const onSubmitForm = (event) => {
        event.preventDefault();

        const file = event.target.elements.file.files[0];
        const formData = new FormData();
        formData.append("file", file);

        if (file) {
            uploadFile(formData, userData.token)
                .then(() => getFilesData(userData.token))
                .catch((err) => console.log(err));
        }
    };

    return (
        <form onSubmit={onSubmitForm}>
            <input type="file" name="file" />
            <button>Add File</button>
        </form>
    );
};

export default AddFileForm;
