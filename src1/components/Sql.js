import React from "react";
import {Link} from "react-router-dom";
import "./C.css";
import Service from "../service/Service";

class Sql extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sqls:[]
        }
    }
    componentDidMount(){
        Service.getSql().then((response) => {
            this.setState({sqls:response.data})

        });
    }
    render(){
        return(
            <div>
                <div class="feed1">
                <h3>Sql Tutorials</h3>
                    {
                        this.state.sqls.map(
                        sql =>
                        <ul key={sql.id}>
                            <Link to=""><li>{sql.name}</li></Link>
                        </ul>
                        )

                    }
                </div>
                <div>
                    <div class="content12">
                        
                        <iframe src="http://localhost:9090/content/sql" height="795" width="100%%"></iframe>                            
                            {/* {
                                this.state.sqls.map(
                                    sql =>
                                    <p key={sql.id}>
                                        <p>{sql.text}</p>
                                    </p>
                                )
                            } */}

                    </div>
                </div>
            </div>   
        )
    }
}
export default Sql;