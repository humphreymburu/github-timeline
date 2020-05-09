import React, { useEffect, useContext} from 'react'
import Spinner from '../layouts/Spinner';
import  Repos  from '../repos/Repos';
import Timelines from '../timelines/Timelines';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import githubContext from '../../context/github/githubContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const User = ({ match}) => {
 const GithubContext = useContext(githubContext);

const { getUser, loading, user, repos, timelines, getUserRepos, getUserTimelines } = GithubContext;

useEffect(() => {
  getUser(match.params.login);
  getUserRepos(match.params.login);
  getUserTimelines(match.params.login);
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
    <Container>
  <Row>
    <Col><div className="card grid-2">
            <div className="all-center">
            <img src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px'}}
            />
          
          <p>{name}</p>
          <p>Location: {location}</p>
          </div>
          </div></Col>
    <Col><div className="card grid-2">
          <div className="all-center">
              { bio && (
                <>
                <h3>Bio</h3>
                <p>{bio}</p>
                </>
              )}
                <Button href={html_url} variant="success">Visit Github Profile</Button>
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
                  <br></br>
                  </>
                  }
                </li>
              </ul>

              <Container>
  <Row>
 
  <Col xs={8} md={3}>
  <div className="badge badge-primary">followers: {followers}</div>    </Col>
    <Col xs={8} md={3}>
    <div className="badge badge-success">following: {following}</div>
    </Col>
    <Col xs={8} md={3}>
    <div className="badge badge-danger">Public Repos: {public_repos}</div>   </Col>
    <Col xs={8} md={3}>
    <div className="badge badge-dark">Public Gists: {public_gists}</div>    </Col>
  </Row>
 

  </Container>
      </div></div></Col>
  </Row>
  </Container>
     
      
      <div>
        <h1><p>@{login}'s Timeline</p></h1>
      </div>
      

      <Container>
  <Row>
    <Col><Timelines timelines={timelines} /></Col>
  </Row>
  </Container>

  </>
     
    )
}

export default User
