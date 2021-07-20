import React from "react";
import {Link} from "react-router-dom";
import "./C.css";
import Service from "../service/Service";

class ReactJ extends React.Component{
    constructor(props){
        super(props)
        this.state={
            reacts:[]
        }
    }
    componentDidMount(){
        Service.getReact().then((response) => {
            this.setState({reacts:response.data})

        });
    }
    render(){
        return(
            <div>
                <div class="feed1">
                <h3>React Tutorials</h3>
                    {
                        
                            this.state.reacts.map(
                                react =>
                                <ul key={react.id}>
                                   <Link to=""><li>{react.name}</li></Link>
                                </ul>
                            )                       

                    }
                </div>
                <div>
                    <div class="content12">
                        
                        <iframe src="http://localhost:9090/content/reactj" height="795" width="100%%"></iframe>

                    </div>
                </div>
            </div>
        )
    }
}
export default ReactJ;