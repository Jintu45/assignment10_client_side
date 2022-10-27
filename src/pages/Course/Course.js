import axios from 'axios';
import fileDownload from 'js-file-download';
import React from 'react';

const Course = () => {
    const download = e => {
        e.preventDefault()
        axios({
            url: "http://localhost:5000/",
            method: "GET",
            responseType : "blob"
        })
        .then((res) => {
            console.log(res)
            fileDownload(res.data, ("index.pdf"))
        })
    }
    return (
        <div className='bg-white text-center'>
            <h2 className='text-danger'>Thanks for buy our course</h2>
            <p>very very congratulation for you and good luck your journey</p>

            <div>
                <h5 className='lead'>To know more details about our courses and mentors download our provided PDF file</h5>
                <button variant="dark" onClick={(e) =>download(e)}>download PDF</button>
            </div>
        </div>
    );
};

export default Course;