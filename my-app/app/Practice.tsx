import { Heading } from '@chakra-ui/react'
import React from 'react';
export default function Practice() {
  return (
    <>
    <Heading>Flexbox in HTML</Heading>  
    <div style={{
        color:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"500px",
        backgroundColor:"greenyellow"        
    }}>
    <div style={{backgroundColor:"red", padding:"50px",height:"100px"}}>Box 1</div>
    <div style={{backgroundColor:"blue", padding:"50px",height:"100px"}}>Box 2</div>
    <div style={{backgroundColor:"Green", padding:"50px",height:"100px"}}>Box 3</div>
    </div>
    
    </>
  )
}
