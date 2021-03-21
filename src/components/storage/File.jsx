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
            <h3>{file.originalName}</h3>
            <a
                href={`${streamURL}?key=${file.key}&name=${file.originalName}&owner=${file.owner}&token=${userData.token}`}
                target="_blank"
            >
                Open
            </a>
            <br />
            <a
                href={`${streamURL}?key=${file.key}&name=${file.originalName}&owner=${file.owner}&token=${userData.token}&download=true`}
                download={file.originalName}
            >
                Download
            </a>
            <br />
            <button onClick={() => onClickDeleteFile(file)}>Delete</button>
        </div>
    );
};

export default File;
