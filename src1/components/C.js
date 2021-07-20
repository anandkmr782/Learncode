import React from "react";
import {Link} from "react-router-dom";
import "./C.css";
import Service from "../service/Service";

class C extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cs:[]
        }
    }
    componentDidMount(){
        Service.getC().then((response) => {
            this.setState({cs:response.data})

        });
    }
    render(){
        return(
            <div>
                <div class="feed1">
                <h3>C Tutorials</h3>
                    {
                        this.state.cs.map(
                        c =>
                        <ul key={c.id}>
                            <Link to=""><li>{c.name}</li></Link>
                        </ul>
                        )

                    }
                </div>
                <div>
                    <div class="content12">
                        
                        <iframe src="http://localhost:9090/content/c" height="795" width="100%%"></iframe>                            
                            {/* {
                                this.state.cs.map(
                                    c =>
                                    <p key={c.id}>
                                        <p>{c.text}</p>
                                    </p>
                                )
                            } */}
                            
                        

                    </div>
                </div>
            </div>           
        )
    }
}
export default C;