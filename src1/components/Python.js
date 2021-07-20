import React from "react";
import {Link} from "react-router-dom";
import "./C.css";
import Service from "../service/Service";

class Python extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pythons:[]
        }
    }
    componentDidMount(){
        Service.getPython().then((response) => {
            this.setState({pythons:response.data})

        });
    }
    render(){
        return(
            <div>
            <div class="feed1">
            <h3>Python Tutorials</h3>
                {
                    this.state.pythons.map(
                    python =>
                    <ul key={python.id}>
                        <Link to=""><li>{python.name}</li></Link>
                    </ul>
                    )

                }
            </div>
            <div>
                <div class="content12">
                    <iframe src="http://localhost:9090/content/python" height="795" width="100%%"></iframe>                            
                            {/* {
                                this.state.pythons.map(
                                    python =>
                                    <p key={python.id}>
                                        <p>{python.text}</p>
                                    </p>
                                )
                            } */}
                            
                        
                    
                </div>
            </div>
        </div>   
        )
    }
}
export default Python;