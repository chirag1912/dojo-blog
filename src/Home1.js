import {useState} from "react"
const Home = () => {

    const[name,setName]=useState("Julie")
    const [age,setAge]=useState(24)
    function clickHandle(e){
        console.log("Hello Ninja",e)
    }
    const clickHandleagain=(name,event)=>{
        console.log("Hello", name, event.target)
    }

    // const changeName=(name)=>{
    //     setName("Mario Bhaiya")
    // }

    const changeName=(name)=>{
        setName(name)
        setAge(30)
        // name="Cesar"
        // console.log(name)
    }

    return (
        <>
            <h2>HomePage</h2>
            <button onClick={clickHandle}>ClickMe</button>
            <button onClick={(e)=>clickHandleagain("Mario",e)}>Click Me Again</button>

            {/* Cannot really write function() will directly execute the function rather than calling on the click of the button so writing a function and passing any event of the event as an argument to that function; */}
            {/* <button onClick={(e)=>clickHandleagain("Mario",e)}>Click Me Again</button> */}


            <p>Name is {name}, while the age is {age}.</p>
            <button onClick={()=>changeName("Mariyo Bhaiya")}>Change Values</button>

        </>
    );
}

export default Home;