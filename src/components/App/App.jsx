import React from 'react';
import './App.css'

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const tasks = [
  {text: 'Completed task', active: true, edit: false, id: 0},
  {text: 'Editing task', active: false, edit: true, id: 1},
  {text: 'Active task', active: false, edit: false, id: 2}
]

const App = () => {
  return (
    <div className="todoapp">
      <Header title="todos" />
      <Main tasks={tasks} />
      <Footer />
    </div>
  )
}

export default App