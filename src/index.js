import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/header'
import TodoList from './components/todoList'
import SearchPanel from './components/searchPanel'
const App = () => {

    const isLoggedIn = true
    const loginBox = <span>Log in plase</span>
    const welcomBox = <span>Welcom Back</span>
    return(
        <div>
            {isLoggedIn ? welcomBox : loginBox }
             
            <AppHeader />
            
            <SearchPanel />
            <TodoList />
            
        </div>

    )
}



ReactDOM.render(<App />,document.getElementById("root"))