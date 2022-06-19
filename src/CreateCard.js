import { useNavigate } from "react-location";
import { useFormData } from "./App";

const CreateCard = () => {
    const navigate = useNavigate();
    const { userObj, setUserObj } = useFormData();

    const techArray = ["HTML", "CSS", "JS", "Git", "React", "Node.js"];
    const handleChange = (e) => {
        let updateUserObj = {};
        let userKey = e.target.name;
        if (e.target.checked === true) {
            let userValue = e.target.checked;
            updateUserObj[userKey] = userValue;
            setUserObj(
                userObj => ({
                    ...userObj,
                    ...updateUserObj
                })
            ) 
            return true
        } 
        let userValue = e.target.value;
        updateUserObj[userKey] = userValue;
        setUserObj(
            userObj => ({
                ...userObj,
                ...updateUserObj
            })
        )};
    
    // const handleCheck = (e) => {
    //     let updateUserObj = {};
    //     let userKey = e.target.name;
    //     let userValue = e.target.checked;
    //     console.log(userValue)

    // }

    const handleClick = (e) => {
        e.preventDefault(); // DON'T REFRESH THE PAGE
        navigate({ to: "showcase", replace: true, search: userObj });
      };

        return (<div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
            }}>
            <div>
            <h style={{
                fontSize: '50px'
            }}>Create your DevCard</h>
        <form>
            <label>
                Name:
                <input type="text" onChange={handleChange} name="name" placeholder="Your Full Name" />
                About Me:
                <input type="text" onChange={handleChange} name="aboutMe" placeholder="About Me" />
                <h style={{
                fontSize: '50px'
            }}>
                Technologies you Know:
                    </h>
                {techArray.map( element => {
                   return (
                       <div>
                           {element}: <input type="checkbox" onChange={handleChange} name={element}></input>
                       </div>
                   )
                })}
                <input type="text" onChange={handleChange} name="gitHubUrl" placeholder="GitHub URL" />
                <input type="text" onChange={handleChange} name="twitterUrl" placeholder="Twitter URL" />
                <input type="text" onChange={handleChange} name="favouriteBooks" placeholder="Favorite Books" />
                <input type="text" onChange={handleChange} name="favouriteArtists" placeholder="Favorite Artists" />
            </label>
        </form>
            <button onClick={handleClick}>Create Site</button>
            </div>
        </div>);
  }

export default CreateCard;
  