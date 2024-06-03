import React from 'react'
import Sidebar from './Sidebar';
import './CRUD.css';
import { useState } from "react";

function Remove_Pet() {

  return (
    <>
      <div className='container'>
        <header className='header'>
          <span>Busque o pet a ser removido</span>
        </header>

        <form>
          <div className='inputContainer'>
            <label>Insira o ID do Pet</label>
            <input
              type="text"
              name="ID"
              id="ID"
            >
            </input>
          </div>
        </form>

        <div className='pad'>
          
        </div>

      </div>
      <Sidebar />
    </>
  )
}

export default Remove_Pet
