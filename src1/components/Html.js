import React from "react";
import { Route, Switch} from 'react-router';
import {Link} from "react-router-dom";
import "./C.css";
import Service from "../service/Service";

class Html extends React.Component{
    constructor(props){
        super(props)
        this.state={
            htmls:[]
        }
    }
    componentDidMount(){
        Service.getHtml().then((response) => {
            this.setState({htmls:response.data})

        });
    }
    itemclick(pop){
        
        console.log(pop);
    }
    render(){
        return(
            <div>
                <div class="feed1">
                <h3>Html Tutorials</h3>
                    
                    {                        
                        this.state.htmls.map(
                        html =>
                        <ul key={html.id}>                            
                            <Link onClick={this.itemclick(this.id)}><li>{html.name}</li></Link>
                        </ul>
                        )
                    }
                </div>
                <div>
                    <div class="content12">
                    <iframe src="http://localhost:9090/content/html" height="795" width="100%%"></iframe>
                    
                        {/* {
                            this.state.htmls.map(
                                html =>
                                    <p>{html.text}</p>
                            )
                        }   */}
                                              
                    </div>
                </div>
            </div>
        )
    }
}
export default Html;

