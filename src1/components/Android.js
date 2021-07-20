import React from "react";
import {Link} from "react-router-dom";
import "./C.css";
import Service from "../service/Service";

class Android extends React.Component{
    constructor(props){
        super(props)
        this.state={
            androids:[]
        }
    }
    componentDidMount(){
        Service.getAndroid().then((response) => {
            this.setState({androids:response.data})

        });
    }
    render(){
        return(
            <div>
                <div class="feed1">
                <h3>Android Tutorial</h3>
                    {
                        this.state.androids.map(
                        android =>
                        <ul key={android.id}>
                            <Link to=""><li>{android.name}</li></Link>
                        </ul>
                        )

                    }
                </div>
                <div>
                    <div class="content12">
                        
                        <iframe src="http://localhost:9090/content/android" height="795" width="100%%"></iframe>                            
                            {/* {
                                this.state.androids.map(
                                    android =>
                                    <p key={android.id}>
                                        <p>{android.text}</p>
                                    </p>
                                )
                            } */}
                            
                        

                    </div>
                </div>
            </div>
        )
    }
}
export default Android;