import React from 'react'


export const AuthScreen = () => {

    return (
        
            <div className="w-full max-w-md m-auto rounded p-4" >
                <header>
                    <img className="w-80 mx-auto mb-5" alt="Hal Mexico" src={require('../../assets/images/Hal-logo.png').default} />
                </header>
                <div className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-6 flex flex-col">
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                                id="username" 
                                type="text" 
                                placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                            id="password" 
                            type="password" 
                            placeholder="******************" />
                        <p className="text-red text-xs italic">Please choose a password.</p>
                    </div>
                    <div>          
                        <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" value="Sign in"/>
                    </div>    
                </div>
                <footer>
                    <button className="text-indigo-700 hover:text-pink-700 text-sm float-left btn" >Forgot Password?</button>
                    <button className="text-indigo-700 hover:text-pink-700 text-sm float-right btn" >Create Account</button>
                </footer> 
            </div>
        
    )
}
