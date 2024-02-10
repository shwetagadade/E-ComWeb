import { useParams } from "react-router-dom"
import './About.css'
const About = ({Data}) => {
    const {id} = useParams()
    const data = Data.find((data)=>data.id===parseInt(id))


  return (
    <div className="About">
    
        <img className="img" src={data.image } height={'350px'}width={'350px'} ></img>
        {/* <p> <h2>{data.title}</h2>
        <br></br>
        {data.description}</p> */}
        <div className="aboutcontant">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>Rating:{data.rating.rate}</p>
          <p>Price:{data.price}</p>
          <button onClick={()=>handleClick(data)}>Add Cart</button>
        </div>
    </div>
  )
}

export default About