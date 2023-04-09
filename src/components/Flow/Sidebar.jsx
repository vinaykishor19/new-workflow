import React, { useState, useEffect } from 'react';

export default () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=1&limit=5")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className='module'>Modules</div>
      <div className='contain'>
        {user && user.length > 0 && user.map((userObj, index) => (
          <div className="dndnode" onDragStart={(event) => onDragStart(event, userObj.name)} draggable>
            <div className="input-type" key={userObj.id} >{userObj.input_type}</div>
            <div className="user-name" key={userObj.id} >{userObj.name}</div>
            <div className="output-type" key={userObj.id} >{userObj.output_type}</div>
          </div>
        ))}
      </div>
    </aside>
  );
};
