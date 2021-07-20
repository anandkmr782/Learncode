import React from "react";
import {Link} from "react-router-dom";
import "./C.css";
import Service from "../service/Service";

class Cpp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cpps:[]
        }
    }
    componentDidMount(){
        Service.getCpp().then((response) => {
            this.setState({cpps:response.data})

        });
    }
    render(){
        return(
            <div>
                <div class="feed1">
                <h3>C++ Tutorials</h3>
                    {
                        this.state.cpps.map(
                        cpp =>
                        <ul key={cpp.id}>
                            <Link to=""><li>{cpp.name}</li></Link>
                        </ul>
                        )

                    }
                </div>
                <div>
                    <div class="content12">
                        
                        <iframe src="http://localhost:9090/content/cpp" height="795" width="100%%"></iframe>                            
                            {/* {
                                this.state.cpps.map(
                                    cpp =>
                                    <p key={cpp.id}>
                                        <p>{cpp.text}</p>
                                    </p>
                                )
                            } */}
                            
                    

                    </div>
                </div>
            </div>   
        )
    }
}
export default Cpp;