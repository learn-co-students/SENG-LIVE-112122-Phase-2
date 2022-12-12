const Header = ({firstName, lastName, age}) => {
    return (
        <div>
            <h1>Header</h1>
            <h1>Hi, my name is {firstName}.</h1>
            <h1>I am {age} years old.</h1>
        </div>
    )
}

export default Header;