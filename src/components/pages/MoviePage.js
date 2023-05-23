import React from "react";
import MovieData from '../../data/top-250-movies.json'
import { Card, CardBody, CardImage, CardTitle } from "../styles/Card";
import {BrowserRouter as Link} from "react-router-dom";
const MoviePage = () => {
    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: "column",
            width: 'auto',
            paddingLeft : '15px',
            paddingRight : '15px',
            borderTop: '1px solid black',
          }}

        >
          <div>
            <h5 text-align= 'left' >Welcome to MOVIE Page</h5>
          <div
            style={{ 
              display:'grid',
              gridTemplateColumns: 'auto auto auto auto auto auto auto',
              width: '100%',
              gap: '5px',
              padding: '10px',  
            
             
            }}>
              {MovieData.map((item,keys)=>(
                <Link to='/top_movies'>
                <Card key={keys}>
                  <CardImage src={item.image} />
                  <CardBody>
                    <CardTitle>
                      {item.title} ({item.year})
                    </CardTitle>
                  </CardBody>
                </Card>
                </Link>
               ))}
          </div>
          </div>
        </div>
      );
    };
    export  default MoviePage;