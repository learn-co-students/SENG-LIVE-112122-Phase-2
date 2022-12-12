const Header = (props) => {
    // console.log(props.age);

    const { firstName, lastName, age } = props;
    
    return (
        <>
            <h1>Header Component</h1>
            <h1>Hi, my name is {firstName}</h1>
            <h1>I'm {age} years old.</h1>
        </>
    );
}

export default Header;