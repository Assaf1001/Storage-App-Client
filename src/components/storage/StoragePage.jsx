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
        <div className="storage">
            <h2>Add New File:</h2>
            <div className="add-file">
                <AddFileForm setFiles={setFiles} />
            </div>
            <div className="your-files">
                <h2>Your Files:</h2>
                {files.map((file) => (
                    <File key={file._id} file={file} setFiles={setFiles} />
                ))}
            </div>
        </div>
    );
};

export default StoragePage;
