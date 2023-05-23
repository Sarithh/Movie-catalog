import React from 'react';
import TvShowData from '../../data/top-250-series.json'
import { Card, CardBody, CardImage, CardTitle } from "../styles/Card";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
const TvShowPage = () => {
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
        <h5  text-align= 'left' >Welcome to TV SHOWS Page</h5>
        
          <div
            style={{ 
              display:'grid',
              gridTemplateColumns: 'auto auto auto auto auto auto auto',
              width: '100%',
              gap: '10px',
             
             
            }}>
               {TvShowData.map ((item,keys)=>(
                <Link to ='/top_tvshows'>
                <Card key={keys}>
                  <CardImage src={item.image}/>
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
  
export default TvShowPage;