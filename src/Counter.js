import { useState } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';



export function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div>

      <IconButton aria-label="like-btn" color="primary" onClick={() => { setlike(like + 1); }}>
        <Badge badgeContent={like} color="secondary">
          👍
        </Badge>
      </IconButton>

      <IconButton aria-label="like-btn" color="error" onClick={() => { setdislike(dislike + 1); }}>
        <Badge badgeContent={dislike} color="secondary">
          👎
        </Badge>
      </IconButton>
      {/*<button onClick={()=>{setlike(like+1)}}>👍{like}</button>
           <button onClick={()=>{setdislike(dislike+1)}}>👎{dislike}</button>*/}
    </div>
  );
}
