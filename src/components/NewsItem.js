import React, { useState, useEffect } from 'react'


const NewsItem = (props)=> {

        let { title, description, imageUrl, newsUrl, author, date, source} = props;
        const [ButtonColor, setButtonColor] = useState(null);
        useEffect(() => {
            switch (props.category) {
              case 'general':
                setButtonColor('danger');
                break;
              case 'business':
                setButtonColor('info');
                break;
                case 'entertainment':
                setButtonColor('dark');
                break;
                case 'technology':
                setButtonColor('primary');
                break;
                case 'health':
                setButtonColor('success');
                break;
                case 'science':
                setButtonColor('secondary');
                break;
                case 'sports':
                setButtonColor('warning');
                break;
              default:
                setButtonColor('defaultColor');
            }
          }, [props.category]);
        return (
            <div className="my-3">
                <div className="card" style={{boxshadow: "5px 5px 10px rgba(0, 0, 0, 1.5)", zIndex:5, backgroundColor: "gray",margin:"2px",border:"solid black 3px",borderTopLeftRadius:"35px", borderBottomRightRadius:"100px"}}>
                    <span className={`badge rounded-pill position-absolute top-0 bg-${ButtonColor}`} style={{zIndex:1,padding:"2.3%", left:"-4%"}}> {source} </span>
                    
                    <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrCr3lah9UEqNswuNToEzX4cu4ifBxLcsYw&usqp=CAU" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{color:"white",fontFamily:"Times new Roman"}}>{title}  </h5>
                        <p className="card-text" style={{color:"white",fontFamily:"serif"}}>{description}...</p>
                        <p className="card-text" style={{color:"white", fontFamily:"cursive"}}><small>By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Explore More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem