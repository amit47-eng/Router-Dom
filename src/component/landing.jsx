import { useNavigate } from "react-router-dom";


function Landing(){

    const navigation = useNavigate(null);
    const handelNavigation = (type) => {
        switch (type){
            case "Home":
                navigation ("/Home")
                break;
            
            case "About":
                navigation ("/about")
                break;
            
            case "More":
                navigation ("/more")
                break;
        }
        
    }

    return(
        <div className="landing">
            <h4>landin page //</h4>
            <button onClick={(event)=> handelNavigation(event, "Home")}>home</button>
            <button onClick={(event)=> handelNavigation(event, "About")}>about</button>
            <button onClick={(event)=> handelNavigation(event, "More")}>see more</button>
        </div>
    )
}

export default Landing;