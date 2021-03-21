import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { deleteFile, getFilesData } from "../../server/file";

const File = ({ file, setFiles }) => {
    const streamURL = `${process.env.REACT_APP_DB}file`;

    const { userData } = useContext(LoginContext);

    const onClickDeleteFile = (file) => {
        deleteFile(file._id, file.key, userData.token)
            .then(() => getFilesData(userData.token))
            .then((filesData) => setFiles(filesData))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <a
                href={`${streamURL}?key=${file.key}&name=${file.originalName}&owner=${file.owner}&token=${userData.token}`}
            >
                {file.originalName}
            </a>
            <button onClick={() => onClickDeleteFile(file)}>Delete</button>
        </div>
    );
};

export default File;
