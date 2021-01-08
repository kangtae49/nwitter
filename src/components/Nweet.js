import { dbService } from 'fbase';
import React, { useState } from 'react';

function Nweet({ nweetObj, isOwner }) {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const onClick = async () => {
    const ok = window.confirm('are you sure?');
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
      //   console.log(nweetObj.id, isOwner, ok);
    }
  };

  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    console.log('submit');
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text" value={newNweet} onChange={onChange} required />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onClick}>delete</button>
              <button onClick={toggleEditing}>edit</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Nweet;
