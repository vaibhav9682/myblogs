import { useState, useEffect } from "react"
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom"


export default function Home() {
    const [Posts, setPosts] = useState([])

    useEffect(() => {


        async function fetchPost() {
            const querySnapshot = await getDocs(collection(db, "blogs"));
            const posts = querySnapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            // console.log(posts)
            setPosts(posts)
        }

        fetchPost()


    }, [])

    return (
        <div className="home"   >
            <h1>Tech Blogs</h1>
            <div id="blog-by">Vaibhav</div>
            {Posts.map((post, index) => (
                <div className="post" key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <p>{post.createdAt}</p>
                </div>
            ))}
        </div>
    )
}