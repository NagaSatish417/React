import React from 'react';

const ListRender = () => {
    const stunames = ["rahul","lahari","mohan","kiran"];
    return (
        <div>
            {
                stunames.map((sname)=><li>{sname}</li>)
            }
        </div>
    );
};

export default ListRender;