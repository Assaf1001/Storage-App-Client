import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { deleteFile, getFile, getFilesData } from "../../server/file";
import AddFileForm from "./AddFileForm";

const StoragePage = () => {
    const streamURL = process.env.REACT_APP_STREAM_URL;

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

    // const onClickGetFile = (key, name, token) => {
    //     getFile(key, name, token).then((res) => {
    //         res;
    //     });
    // };

    const onClickDeleteFile = (file) => {
        deleteFile(file._id, file.key, userData.token)
            .then(() => getFilesData(userData.token))
            .then((filesData) => setFiles(filesData))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>StoragePage</h1>
            <AddFileForm />
            {files.map((file) => (
                <div key={file._id}>
                    {/* <div
                        onClick={() =>
                            onClickGetFile(
                                file.key,
                                file.originalName,
                                userData.token
                            )
                        }
                    >
                        Link
                    </div> */}
                    <a
                        href={`${streamURL}?key=${file.key}&name=${file.originalName}&token=${userData.token}`}
                    >
                        Link
                    </a>
                    <button onClick={() => onClickDeleteFile(file)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default StoragePage;
