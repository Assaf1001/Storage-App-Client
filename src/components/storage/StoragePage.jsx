import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { getFilesData } from "../../server/file";
import AddFileForm from "./AddFileForm";
import File from "./File";

const StoragePage = () => {
    const { userData } = useContext(LoginContext);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        getFilesData(userData.token)
            .then((filesData) => {
                console.log(filesData);
                setFiles(filesData);
            })
            .catch((err) => console.log(err));
    }, [userData.token]);

    return (
        <div>
            <h1>StoragePage</h1>
            <AddFileForm setFiles={setFiles} />
            {files.map((file) => (
                <File key={file._id} file={file} setFiles={setFiles} />
            ))}
        </div>
    );
};

export default StoragePage;
