import React from "react";
import {Link} from "react-router-dom";
import "./C.css";
import Service from "../service/Service";

class Java extends React.Component{
    constructor(props){
        super(props)
        this.state={
            javas:[]
        }
    }
    componentDidMount(){
        Service.getJava().then((response) => {
            this.setState({javas:response.data})

        });
    }
    render(){
        return(
            <div>
                <div class="feed1">
                <h3>Java Tutorials</h3>
                    {
                        
                            this.state.javas.map(
                                java =>
                                <ul key={java.id}>
                                   <Link to=""><li>{java.name}</li></Link>
                                </ul>
                            )                       

                    }
                </div>
                <div>
                    <div class="content12">
                        <iframe src="http://localhost:9090/content/java" height="795" width="100%%"></iframe>                            
                            {/* {
                                this.state.javas.map(
                                    java =>
                                    <p key={java.id}>
                                        <p>{java.text}</p>
                                    </p>
                                )
                            } */}
                            
                        

                    </div>
                </div>
                
            </div>
        )
    }
}
export default Java;