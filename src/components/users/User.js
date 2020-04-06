import React, { useEffect, useContext} from 'react'
import Spinner from '../layouts/Spinner';
import  Repos  from '../repos/Repos';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import githubContext from '../../context/github/githubContext';


const User = ({ match}) => {
 const GithubContext = useContext(githubContext);

const { getUser, loading, user, repos, getUserRepos } = GithubContext;

useEffect(() => {
  getUser(match.params.login);
  getUserRepos(match.params.login);
  // eslint-disable-next-line
}, []);
   

 

  const {
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
  } = user;


if (loading) return <Spinner />;
    return (
      <>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable: {' '}
        {hireable ? (
          <p>Yes</p>
        ) : (
          <p>No</p>
        )}
    
      <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px'}}
            />
          
          <p>{name}</p>
          <p>Location: {location}</p>
          </div>
            <div>
              { bio && (
                <>
                <h3>Bio</h3>
                <p>{bio}</p>
                </>
              )}
              <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
              <ul>
                <li>
                  {login && 
                  <>
                  <strong>Username:</strong> {login}
                  </>
                  }
                </li>

                <li>
                {company && 
                  <>
                  <strong>Company:</strong> {company}
                  </>
                  }
                </li>

                <li>
                {blog && 
                  <>
                  <strong>Website:</strong> {blog}
                  </>
                  }
                </li>
              </ul>
            </div>
      </div>
      
      <div className="card text-center">
        <div className="badge badge-primary">followers: {followers}</div>
        <div className="badge badge-success">followers: {following}</div>
        <div className="badge badge-danger">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      
      <Repos repos={repos} />
      </>
    )
}

export default User
