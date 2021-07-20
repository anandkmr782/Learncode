import React from "react";
import {Link} from "react-router-dom";
import "./C.css";
import Service from "../service/Service";

class AdvJava extends React.Component{
    constructor(props){
        super(props)
        this.state={
            advjavas:[]
        }
    }
    componentDidMount(){
        Service.getAdvJava().then((response) => {
            this.setState({advjavas:response.data})

        });
    }
    render(){
        return(
            <div>
                <div class="feed1">
                <h3>Advance Java</h3>
                    {
                        
                            this.state.advjavas.map(
                                advjava =>
                                <ul key={advjava.id}>
                                   <Link to=""><li>{advjava.name}</li></Link>
                                </ul>
                            )                       

                    }
                </div>
                <div>
                    <div class="content12">
                        
                        <iframe src="http://localhost:9090/content/advjava" height="795" width="100%%"></iframe>                            
                            {/* {
                                this.state.advjavas.map(
                                    advjava =>
                                    <p key={advjava.id}>
                                        <p>{advjava.text}</p>
                                    </p>
                                )
                            } */}
                            
                        

                    </div>
                </div>
            </div>
        )
    }
}
export default AdvJava;