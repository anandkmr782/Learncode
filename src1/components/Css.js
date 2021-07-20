import React from "react";
import {Link} from "react-router-dom";
import "./C.css";
import Service from "../service/Service";

class Css extends React.Component{
    constructor(props){
        super(props)
        this.state={
            csss:[]
        }
    }
    componentDidMount(){
        Service.getCss().then((response) => {
            this.setState({csss:response.data})

        });
        
    }
    render(){
        return(
            <div>
                <div class="feed1">
                <h3>CSS Tutorials</h3>
                    {
                        
                            this.state.csss.map(
                                css =>
                                <ul key={css.id}>
                                   <Link to=""><li>{css.name}</li></Link>
                                </ul>
                            )                       

                    }
                </div>
                <div>
                    <div class="content12">
                    <iframe src="http://localhost:9090/content/css" height="795" width="100%%"></iframe>
                    {/* {                        
                        this.state.csss.map(
                        css =>
                        <p>{css.text}</p>
                        )
                    } */}

                    </div>
                </div>
            </div>
        )
    }
}
export default Css;