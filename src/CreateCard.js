const CreateCard = ({userObj, setUserObj}) => {
    const techArray = ["HTML", "CSS", "JS", "Git", "React", "Node.js"];
    const handleChange = (e) => {
        let updateUserObj = {};
        let userKey = e.target.name;
        let userValue = e.target.value;
        updateUserObj[userKey] = userValue;
        setUserObj(
            userObj => ({
                ...userObj,
                ...updateUserObj
            })
        )
    };
        return (<div>
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
            <button onClick={() => console.log(userObj)}>Create Site</button>
        </div>);
  }

export default CreateCard;
  