import React from 'react';
import axios from "axios";
import {Row, Col} from "react-bootstrap";
import './Users.css';
import Loader from  './Load.js';

const Users = () => {
    const [post, setPost] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const handleClick = (e) => {
      const myTimeout = setTimeout( setLoading(true), 5000);
      e.preventDefault();
      const baseUrl= `https://reqres.in/api/users?page=1`;
      axios.get(baseUrl).then((response) => {
      setPost(response.data.data);
      setLoading(false);
      console.log(response.data);
     });
   }

    return(
      <div>
        <nav class="navbar navbar-dark bg-dark">
         <div class="container-fluid">
         <a class="navbar-brand">Tintin Users Shop</a>
         <form class="d-flex">
           <button class="btn btn-outline-success" onClick={handleClick} type="submit">GET USERS</button>
         </form>
         </div>
        </nav>
                <Row>
                  {
                     loading ?<Loader/> :
                     post && post.length > 0 ? post.map((element, i) =>
                      <Col sm={3} key = {'product-'+i}>
                      <br/>
                      <br/>
                      <div class="card border-secondary mb-3" style={{width: "18rem"}}>
                         <img class="card-img-top" style={{height:"300px"}} src={element.avatar} alt="Card image cap"/>
                         <div class="card-img-overlay d-flex justify-content-end">
                          <a href="#" class="card-link text-danger like">
                          </a>
                        </div>
                         <div class="card-body border-warning bg-pink mb3" >
                          <h6 class="card-title">Name: {element.first_name + " " }{ element.last_name}</h6>
                          <h6 class="card-title">Email: {element.email}</h6>
                          <div class="buy d-flex justify-content-between align-items-center">
                         </div>
                         </div>
                      </div>
                      </Col>
                    ): <div class="d-flex justify-content-center" id="loading">
                     <div class="spinner-border" role="status">
                       <span class="visually-hidden">Loading...</span>
                     </div>
                   </div>
                  }
              </Row>
      </div>
    )
}
export default Users;
