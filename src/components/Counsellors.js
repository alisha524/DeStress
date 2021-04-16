import React from "react";
import axios from "axios";
import "./styling/Counselor.css";
  

export default class Counsellors extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counselors: [],
            isLoaded: false,
        }
        
    }

    componentDidMount(){
        axios.post("http://localhost:8080/api/auth/getcounselor",{
            username : "admin_005",
            password : "rachel123"
        }).then(
            res =>{
                console.log(res.data);
                const m = res.data;
                //this.state.isLoaded = true;
                this.setState({counselors: m, isLoaded: true});
            }
        )
    }
    /*render(){
        
    }*/
    render(){
        const{counselors} = this.state;
        const isLoaded = this.state.isLoaded;
        if(!isLoaded){
            return( <div class = "container-field">
                <p>Is Loading......</p>
            </div>);
        }else{
            return (
            <>
                <div class="container mx-auto mt-4">
                    <div class="row">
                    {counselors.map(item => (
                        <div class="card">
                        <img src="https://i.imgur.com/ZTkt4I5.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Pschyologist</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        </div>
                    )
                    )}
                    </div>
                </div>
            </>
            );
        }
    }
}
