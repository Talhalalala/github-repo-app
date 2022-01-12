import React from 'react';


// required props 
// user repo information

const Banner = ( { user } ) => {
    return (
        <div>
            <h1>{user.login}</h1>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.location}</p>
            <img style={{ maxHeight: "10vh", maxWidth: "10vw" }} src={user.avatar_url} alt="user avatar"></img>
            <p>{user.followers}</p>
            <p>{user.following}</p>
            <p>{user.bio}</p>

        </div>
    )
}

export default Banner
