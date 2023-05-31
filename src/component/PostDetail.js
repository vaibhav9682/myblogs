import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase'
import { Link } from 'react-router-dom'


export default function PostDetail() {

    const [post, setPost] = useState({});
    const { postId } = useParams()
    const navigate = useNavigate();

    useEffect(() => {

        async function fetchDoc() {
            const docRef = doc(db, "blogs", postId);
            const docSnap = await getDoc(docRef);

            // console.log("Document data:", docSnap.data())
            setPost(docSnap.data())
        }
        fetchDoc()


    }, [])


    async function deleteBlog() {

        await deleteDoc(doc(db, "blogs", postId));
        navigate(-1)

    }


    return (
        <div className="post-detail">
            <h1>{post.title}</h1>
            <div className="blogFunction">
                <Link to={`/update-post/${postId}`} ><img className="imageResize" src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png " alt="update" /></Link>
                <button onClick={deleteBlog} ><i className="bi bi-trash"></i>  </button>
            </div>
            <p>{post.content}</p>

        </div>
    )
}