
const HeaderUser = props => {
    const {isLogged} = props
    return (
        <>
        <div className="rectangle"></div>
        <div className="personal-area">
            {isLogged ? (
                <>
                    <p>Profile</p>
                    <p>Log out</p>
                </>
            ) : (
                <p>Log in</p>
            )
            }
        </div>  
        </>
     )
}

export default HeaderUser