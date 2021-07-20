import React from "react";
import {Link} from "react-router-dom";
import "./C.css";
import Service from "../service/Service";

class JavaScript extends React.Component{
    constructor(props){
        super(props)
        this.state={
            javascripts:[]
        }
    }
    componentDidMount(){
        Service.getJavaScript().then((response) => {
            this.setState({javascripts:response.data})

        });
    }
    render(){
        return(
            <div>
                <div class="feed1">
                <h3>JavaScript</h3>
                    {
                        
                            this.state.javascripts.map(
                                javascript =>
                                <ul key={javascript.id}>
                                   <Link to=""><li>{javascript.name}</li></Link>
                                </ul>
                            )                       

                    }
                </div>
                <div>
                    <div class="content12">
                        
                        <iframe src="http://localhost:9090/content/javascript" height="795" width="100%%"></iframe>                            
                            {/* {
                                this.state.javascripts.map(
                                    javascript =>
                                    <p key={javascript.id}>
                                        <p>{javascript.text}</p>
                                    </p>
                                )
                            } */}
                            
                        

                    </div>
                </div>
            </div>
        )
    }
}
export default JavaScript;