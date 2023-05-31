// import { useState } from "react"
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";
import { useFormInput } from "../hooks";

export default function CreatePost() {

    const title = useFormInput('');
    const content = useFormInput('');
    const subtitle = useFormInput('');
    // console.log(typeof title)


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "blogs"), {
                title: title.value,
                subtitle: subtitle.value,
                content: content.value,
                createdAt: new Date().toDateString()
            });



            title.onChange({ target: { value: "" } });
            subtitle.onChange({ target: { value: "" } });
            content.onChange({ target: { value: "" } });

            console.log("document witten with ID", docRef.id)
        } catch (error) {
            console.log(error)
        }


    }

    return (
        <div className="create-post">
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit} >
                <div className="form-field">
                    <label>Title</label>
                    <input {...title} />
                </div>

                <div className="form-field">
                    <label>Sub Title</label>
                    <input {...subtitle} />
                </div>

                <div className="form-field">
                    <label>Content</label>
                    <textarea {...content}></textarea>
                </div>
                <button type='submit' className="create-post-btn">Create Post</button>
            </form>


        </div>
    )
}