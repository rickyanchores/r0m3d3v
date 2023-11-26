import React from 'react'
import Card from '../../Components/Card/Card'

const Team = () => {

   let team = [
        {
            image: "",
            name: "Ricky A",
            role: "Front End / Data Analyst"
        },
        {
            image: "",
            name: "Rene JR",
            role: "Full Stack Developer"
        }
   ] 

  return (
    <div className='Team  h-screen bg-black text-white p-5 flex items-center justify-around'>
        <h1>Meet the team</h1>
        <div className="team-container">
            <Card Name={team[0].name} Role={team[0].role}/>
            <Card Name={team[1].name} Role={team[1].role}/>
        </div>
    </div>
  )
}

export default Team;