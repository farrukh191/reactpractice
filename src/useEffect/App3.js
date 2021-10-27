import React, { useState } from 'react';

const FriendList = [
    { id: 1, name: 'farrukh' },
    { id: 2, name: 'ali' },
    { id: 3, name: 'asad' },
]

const App3 = () => {

    const [recipentId, setrecipentId] = useState(1);
    //const isRecipientOnline = useFriendStatus(recipentId);

    return (
        <div>
            <p>hy how are you</p>
            <p>{recipentId}</p>
            <circle color={recipentId ? 'green' : 'red'} />
            <select
            value={recipentId}
            onChange={e => setrecipentId(Number(e.target.value))}
            >
                {
                    FriendList.map(friend => (

                        <option key={friend.id} value={friend.id} >{friend.name}</option>

                    ))
                }
            </select>


        </div>
    );
}


export default App3;