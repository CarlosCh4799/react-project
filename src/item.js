import React, { useEffect,useState } from 'react';
import './Item.css'

/*class item extends React.Component{

    
    constructor(props){
        super(props);

        this.state = {
            stars: []
        };
    }

    componentDidMount(){
        this.setState({
            stars: Array(parseInt(this.props.rating)).fill(0)
        });
        
    }
    

    render(){
        let ref = this.props.ref
        return(
            <div className="item">

                <div ref={ref} className="image"><img src={'img/' + this.props.image} width="100%" alt="" /></div>
                <div className="title">{this.props.title}</div>
                <div className="rating">
                Rating
                    <p>
                    {
                        this.state.stars.map(x => 
                            <img src="img/star.png" width="32" alt="" />
                            )
                    }
                    </p>
                </div>
                <div className="actions"></div>
            </div>
        );
    }
}

export default item;*/

const item = React.forwardRef(( props , ref ) => {

    const [stars, setStars] = useState([]);
    
    useEffect(() => {
        
        setStars(stars => stars.concat(Array(parseInt(props.rating)).fill(0)))
     
    }, []);

    return(
        <div className="item">

            <div ref={ref} className="image"><img src={'img/' + props.image} width="100%" alt="" /></div>
            <div className="title">{props.title}</div>
            <div className="rating">
            Rating
                <p>
                {
                    stars.map(x => 
                        <img src="img/star.png" width="32" alt="" />
                        )
                }
                </p>
            </div>
            <div className="actions"></div>
        </div>
    );
});

export default item;