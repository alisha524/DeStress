import React from "react";
import { Switch, Route,Link} from "react-router-dom";

import Counsellors from "./Counsellors";

const FindResources =() =>{
    //let history = useHistory();
  /*const redirect = () =>{
    history.push('/counselors');
  }*/
  return(
    <div class="container-fluid">
      <div class="header">
                <p>Hi from resources</p>
                <Link to={"/counselors"}>Find Counselors</Link>
      </div>
      <div className="container mt-3">
        <Switch>
          <Route exact path="/counselors" component={Counsellors}/>
        </Switch>
      </div>
    </div>
  );
}

export default FindResources;