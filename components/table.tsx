'use client';

import { FC, useMemo, useState } from 'react';

interface Props {
    board:Array<String|null>,
    localNext:Boolean,
    winner:string | null,
    restart:Function,
    handleClick:Function
}
const Table:FC<Props> = ({board,localNext,winner,restart,handleClick})=> {
    
    const disabled = useMemo(()=>{
        if(winner)
            return true;
        else
            return false;
    },[winner]);

    const clickAction = (index: number) => {
        handleClick(index);
    };

    const handleRestart = () => {
            //restart board
            restart();
    };

    return (
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
        <div className="grid grid-cols-3 gap-2">
            {board.map((square, index) => (
            <button
                key={index}
                className="w-20 h-20 text-2xl font-bold border border-gray-400 bg-gray-100"
                onClick={() => clickAction(index)}
                disabled={disabled}
            >
                {square}
            </button>
            ))}
        </div>
        <div className="mt-4">
            {winner ? (
            <p className="text-xl font-semibold">{winner} wins!</p>
            ) : (
            <p className="text-xl">Next player: {localNext ? 'X' : 'O'}</p>
            )}
        </div>
        <button
            onClick={handleRestart}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
            Restart Game
        </button>
        </div>
  );
}

// Helper function to determine the winner
function calculateWinner(board: Array<string | null>) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}


export default Table;