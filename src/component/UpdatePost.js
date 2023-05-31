
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'


export default function UpdatePost() {


    const [title, setTitle] = useState("")
    const [subtitle, setSubTitle] = useState("")
    const [content, setContent] = useState("")

    const { postId } = useParams()
    const navigate = useNavigate();

    // fetching the data from db
    useEffect(() => {

        async function fetchDoc() {
            const docRef = doc(db, "blogs", postId);
            const docSnap = await getDoc(docRef);

            console.log("Document data:", docSnap.data())

            setContent(docSnap.data().content)
            setSubTitle(docSnap.data().subtitle)
            setTitle(docSnap.data().title)


        }
        fetchDoc()

    }, [])



    // updating the data to db
    async function handleUpdate() {


        const blogRef = doc(db, "blogs", postId);


        await updateDoc(blogRef, {
            title,
            subtitle,
            content
        });



    }



    return (



        <div className="create-post">
            <h2>UpdatePost</h2>

            <form onSubmit={handleUpdate} >
                <div className="form-field">
                    <label>Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="form-field">
                    <label>Sub Title</label>
                    <input value={subtitle} onChange={(e) => setSubTitle(e.target.value)} />
                </div>

                <div className="form-field">
                    <label>Content</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <button type='submit' className="create-post-btn" onClick={() => navigate(-1)}>Update Post</button>
            </form>


        </div>

    )
}