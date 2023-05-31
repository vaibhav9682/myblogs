import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'
import { Link } from 'react-router-dom'


export default function PostDetail() {

    const [post, setPost] = useState({});
    const { postId } = useParams()

    useEffect(() => {

        async function fetchDoc() {
            const docRef = doc(db, "blogs", postId);
            const docSnap = await getDoc(docRef);

            console.log("Document data:", docSnap.data())
            setPost(docSnap.data())
        }
        fetchDoc()


    }, [])

    return (
        <div className="post-detail">
            <div>
                <h1>{post.title}</h1>
                <Link to={`/update-post/${postId}`} >Update</Link>
            </div>
            <p>{post.content}</p>

        </div>
    )
}