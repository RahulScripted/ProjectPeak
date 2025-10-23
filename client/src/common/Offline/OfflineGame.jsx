import React, { useEffect, useState } from 'react'
import {Home, Ghost, Wand2, DoorOpen, Castle, Dog, Bone} from 'lucide-react'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

// Maze Escape Game Structure
const MazeEscapeGame = () => {

  // Hooks
  const navigate = useNavigate()

  // Game State
  const [gameState, setGameState] = useState({
    playerPosition: {x: 1, y: 1},
    hasKey: false,
    gameOver: false,
    won: false,
    steps: 0,
    spellCoolDown: 0,
    spellActive: false,
    message: "Escape the dungeon! Find the key and reach the exit",
    ghosts: [
      {x: 3, y: 4, direction: 'right'},
      {x: 5, y: 2, direction: 'down'},
    ]
  });

  // Game Layout
  // 0 -> Wall, 1 -> Path, 2 = Exit, 3 -> Key
  const dungeon = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 3, 0],
    [0, 2, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  // Move Player
  const movePlayer = (dx,dy) => {
    if(gameState.gameOver) return;

    const newX = gameState.playerPosition.x + dx;
    const newY = gameState.playerPosition.y + dy;

    // Check movement valid or not
    if(
      newX >= 0 &&
      newX < dungeon[0].length &&
      newY >= 0 &&
      newY < dungeon.length &&
      dungeon[newY][newX] !== 0
    ){

      // Update Player Position
      const newGameState = {
        ...gameState,
        playerPosition: {x : newX, y : newY},
        steps: gameState.steps + 1,
        spellCoolDown: gameState.spellCoolDown > 0 ? gameState.spellCoolDown - 1 : 0
      };

      // Check For Key
      if(dungeon[newY][newX] === 3){
        newGameState.hasKey = true;
        newGameState.message = "You found the key! Now find the exit.";
      }

      // Check For Exit
      if(dungeon[newY][newX] === 2){

        // If Found key then exit
        if(newGameState.hasKey){
          newGameState.won = true;
          newGameState.gameOver = true;
          newGameState.message = `Victory🎉! You escaped in ${newGameState.steps} steps`
        } 
        
        // If Found home without key
        else{
          newGameState.message = "You need a key to unlock the exit🫢"
        }
      }

      // Check the ghost collision
      if(!newGameState.spellActive){
        const collideWithGhost = newGameState.ghosts.some(
          ghost => ghost.x === newX && ghost.y === newY
        );

        // If ghost found you
        if(collideWithGhost){
          newGameState.gameOver = true;
          newGameState.message = `Game Over! A Ghost 🎃 caught you after ${newGameState.steps} steps`
        }
      }

      setGameState(newGameState)
    }
  };

  // Move Ghosts
  useEffect(() => {

    const moveGhosts = () => {
      // If Already found
      if(gameState.gameOver) return;

      const newGhost = gameState.ghosts.map(ghost => {
        let {x, y, direction} = ghost;

        // Determine new position based on direction
        let newX = x;
        let newY = y;

        if(direction === 'right') newX++;
        else if(direction === 'left') newX--;
        else if(direction === 'down') newY++;
        else if(direction === 'up') newY--;

        // Check Position of Ghost are valid
        if(
          newX >= 0 &&
          newX < dungeon[0].length &&
          newY >= 0 &&
          newY < dungeon.length &&
          dungeon[newY][newX] !== 0
        ){
          return {x : newX, y: newY, direction};
        }

        // Change direction if hit by a wall
        else{
          const directions = ['right', 'left', 'up', 'down'];
          const newDirection = directions[Math.floor(Math.random() * directions.length)];
          return {...ghost,direction: newDirection}
        }
      });

      // Check whether Ghost collide with player
      const playerX = gameState.playerPosition.x;
      const playerY = gameState.playerPosition.y;

      // If Spell active then make ghost blind
      if(!gameState.spellActive){
        const collideWithGhost = newGhost.some(
          ghost => ghost.x === playerX && ghost.y === playerY
        );

        if(collideWithGhost){
          setGameState(prevState => ({
            ...prevState,
            gameOver: true,
            message: `Game Over! A Ghost 🎃 caught you after ${prevState.steps} steps`
          }));
          return;
        }
      }

      setGameState(prevState => ({
        ...prevState,
        ghosts: newGhost
      }));
    }
    

    const interval = setInterval(moveGhosts,1000);
    return () => clearInterval(interval)
  },[gameState]); 

  // Handle Keyboard Input
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch(event.key){
        case 'ArrowUp':
          movePlayer(0, -1);
          break;
        case 'ArrowDown':
          movePlayer(0, 1);
          break;
        case 'ArrowLeft': 
          movePlayer(-1, 0);
          break;
        case 'ArrowRight':
          movePlayer(1, 0);
          break;
        case ' ':
          event.preventDefault();
          castSpell();
          break;
        case 'r': 
          resetGame();
          break;
        default:
          break;
      }
    };

    // Add Event
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  },[gameState]);

  // Make Ghost blind spell
  const castSpell = () => {

    // If Game already over
    if(gameState.gameOver) return;

    // Active Spell
    if(gameState.spellCoolDown === 0){
      setGameState(prevState => ({
        ...prevState,
        spellActive: true,
        spellCoolDown: 5,
        message: "Invisibility spell cast! Ghost's can't see you for 3 seconds"
      }))

      // Turn Off Spell after 3 second
      setTimeout(() => {
        setGameState(prevState => ({
          ...prevState,
          spellActive: false,
          message: "Invisibility spell has worn off!"
        }))
      }, 3000);
    }
    
    // Set Cooldown of spell
    else{
      setGameState(prevState => ({
        ...prevState,
        message: `Spell on cooldown! Available in ${prevState.spellCoolDown} moves`
      }))
    }
  };

  // Reset Game
  const resetGame = () => {
    setGameState({
      playerPosition: {x: 1, y: 1},
      hasKey: false,
      gameOver: false,
      won: false,
      steps: 0,
      spellCoolDown: 0,
      spellActive: false,
      message: "Escape the dungeon! Find the key and reach the exit",
      ghosts: [
        {x: 3, y: 4, direction: 'right'},
        {x: 5, y: 2, direction: 'down'},
      ]
    });
  };

  // Make a fog
  const isVisible = (x, y) => {
    const playerX = gameState.playerPosition.x;
    const playerY = gameState.playerPosition.y;

    const distance = Math.sqrt(Math.pow(playerX - x, 2) + Math.pow(playerY - y, 2));

    return distance <= 2;
  }


  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 relative'>

      <img className='absolute top-0 left-0 cursor-pointer hover:bg-red-500 rounded-full w-7 md:w-10 h-7 md:h-10 p-1.5' src={assets.arrowLeft} alt="cross_icon" onClick={() => navigate('/') }/>

      {/* Top Part */}
      <div className='text-center mb-4 mt-10'>

        {/* Title */}
        <h1 className='text-3xl font-bold text-violet-500 mb-1'>Can You Escape?</h1>

        {/* Description */}
        <p className='text-gray-400 text-sm md:text-base'>{gameState.message}</p>

        {/* Show Other Value like steps, key */}
        <div className='flex space-x-4 justify-center mb-4 mt-3'>

          {/* 1st -> Key */}
          <div className='flex items-center px-3 py-1 rounded'>
            <Bone className="text-yellow-500 mr-2" size={16} />
            <span className='text-white'>{gameState.hasKey ? "Found" : "Missing"}</span>
          </div>

          {/* 2nd -> Spell */}
          <div className='flex items-center px-3 py-1 rounded'>
            <Wand2 className='text-violet-500 mr-2' size={16} />
            <span className='text-white'>{gameState.spellActive ? "Active" : gameState.spellCoolDown > 0 ? `Cooldown: ${gameState.spellCoolDown}` : "Ready"}</span>
          </div>

          {/* 3rd -> Steps */}
          <div className='flex items-center px-3 py-1 rounded'>
            <DoorOpen className='text-pink-500 mr-2' size={16} />
            <span className='text-white'>Steps: {gameState.steps}</span>
          </div>
        </div>
      </div>

      {/* Game board */}
      <div className='bg-transparent p-4 rounded-lg shadow-lg'>
        <div className='grid grid-cols-8 gap-2'>
          {dungeon.map((row, y) => (
            row.map((cell, x) => {

              // Load Player
              const isPlayerHere = gameState.playerPosition.x === x && gameState.playerPosition.y === y;

              // Load Ghosts
              const isGhostHere = gameState.ghosts.some(
                ghost => ghost.x === x && ghost.y === y
              );

              // Load Fogs
              const cellVisible = isVisible(x, y);

              // Load Cell
              let cellContent = null;
              let bgColor = "bg-gray-700";

              // For Fog Color change
              if(!cellVisible){
                bgColor = "bg-[#111]"
              } 
              
              // Change Color for obstacle, success and others
              else{
                if(cell === 0) bgColor = "bg-slate-500";
                else if(cell === 1) bgColor = "bg-[#222]"
                else if(cell === 2) bgColor = "bg-green-900"
                else if(cell === 3) bgColor = "bg-yellow-900";

                if(isPlayerHere){

                  // Change Color on Spell active
                  cellContent = <Dog size={20} className={`${gameState.spellActive ? 'text-purple-500' : 'text-blue-500'}`} />

                  // Change Color if game Won / Lose
                  bgColor= gameState.won ? "bg-green-500" : gameState.gameOver && !gameState.won ? "bg-red-500" : bgColor; 
                }

                // If Ghost Near make Cell red
                else if(isGhostHere && cellVisible){
                  cellContent = <Ghost size={20} className='text-red-500' />
                }

                // If Home is near
                else if(cell === 2 && cellVisible){
                  cellContent = <Home size={20} className='text-green-500' />
                }

                // If Key is not found
                else if(cell === 3 && cellVisible && !gameState.hasKey){
                  cellContent = <Bone size={20} className='text-yellow-500' />
                }
              }

              // If Spell is activated
              if(gameState.spellActive && isPlayerHere){
                return(
                  <div
                    key={`${x}-${y}`}
                    className={`${bgColor} w-8 h-8 flex items-center justify-center relative`}
                  >
                    {cellContent}

                    {/* Change Wand to Sparkle */}
                    <Castle className='text-purple-500 absolute' size={24} />
                  </div>
                );
              }
              
              // Else
              return (
                <div
                  key={`${x}-${y}`}
                  className={`${bgColor} w-8 h-8 flex items-center justify-center`}
                >
                  {cellContent}
                </div>
              );
            }) 
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className='mt-6 text-center'>
        <div className='grid grid-cols-3 gap-2 max-w-xs mx-auto mb-2'>

          {/* Up Button */}
          <div className='col-start-2'>
            <button 
              onClick={() => movePlayer(0, -1)}
              className='border bg-transparent border-slate-300 text-white w-12 h-12 rounded flex items-center justify-center hover:bg-violet-500 transition-all duration-300 cursor-pointer'
              aria-label='Move Up'
            >
              <img src={assets.arrowUp} alt="arrowUp" className='p-2' />
            </button>
          </div>

          {/* Left Button */}
          <div className='col-start-1 row-start-2'>
            <button
              onClick={() => movePlayer(-1, 0)}
              className='border bg-transparent border-slate-300 text-white w-12 h-12 rounded flex items-center justify-center hover:bg-violet-500 transition-all duration-300 cursor-pointer'
              aria-label='Move Left'
            >
              <img src={assets.arrowLeft} alt="arrowLeft" className='p-2' />
            </button>
          </div>

          {/* Down Button */}
          <div className='col-start-2 row-start-3'>
          <button
              onClick={() => movePlayer(0, 1)}
              className='border bg-transparent border-slate-300 text-white w-12 h-12 rounded flex items-center justify-center hover:bg-violet-500 transition-all duration-300 cursor-pointer'
              aria-label='Move Down'
            >
              <img src={assets.arrowDown} alt="arrowDown" className='p-2' />
            </button>
          </div>

          {/* Right Button */}
          <div className='col-start-3 row-start-2'>
          <button
              onClick={() => movePlayer(1, 0)}
              className='border bg-transparent border-slate-300 text-white w-12 h-12 rounded flex items-center justify-center hover:bg-violet-500 transition-all duration-300 cursor-pointer'
              aria-label='Move Right'
            >
              <img src={assets.arrowRight} alt="arrowRight" className='p-2' />
            </button>
          </div>
        </div>

        {/* Spell & Reset Game */}
        <div className='flex space-x-2 justify-center mt-10'>

          {/* Cast Spell */}
          <button
            onClick={castSpell}
            className={`px-4 py-2 rounded ${gameState.spellCoolDown === 0 ? 'bg-violet-500 border border-transparent rounded hover:bg-transparent hover:border-violet-500' : 'bg-gray-700'} text-white flex items-center ${gameState.spellCoolDown > 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            disabled={gameState.spellCoolDown > 0}
          >
            <Wand2 size={16} className='mr-2' /> Cast Spell
          </button>

          {/* Reset Game */}
          <button
            onClick={resetGame}
            className='px-4 py-2 rounded-md bg-red-600 border border-transparent hover:bg-transparent hover:border-red-500 text-white cursor-pointer'
          >
            Reset
          </button>
        </div>
      </div>

      {/* Suggestion to play */}
      <div className='mt-4 text-gray-400 text-sm'>
        <p>Controls: Arrow Keys to move, Spaces to cast spell, R to reset the game</p>
      </div>
    </div>
  )
}

export default MazeEscapeGame