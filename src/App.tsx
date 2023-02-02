import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./Hooks";
import { getComments } from "./Redux/ActionCreator";

const App = () => {
   const [postId, setPostId] = useState("");
   const dispatch = useAppDispatch();
   const { loading, comments } = useAppSelector((state) => state.comments);

   const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => { 
      event.preventDefault();
      dispatch<any>(getComments(postId));
   };
   
   return (
      <React.Fragment>
         <div>
            <form onSubmit={submitHandler}>
               <input
                  type={"number"}
                  value={postId}
                  onChange={(e) => setPostId(e.target.value)}
               />
               <button type="submit"> submit </button>
            </form>
         </div>
         {loading ? (
            <div>Loading...</div>
         ) : (
            <ul>
               {comments.map((comment) => {
                  return <li key={comment.id}>{comment.body}</li>;
               })}
            </ul>
         )}
      </React.Fragment>
   )
};

export default App;
