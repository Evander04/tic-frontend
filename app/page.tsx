'use client'
import { initGameWS, makeMoveWS } from '@/api/game';
import Navbar from '@/components/Navbar';
import Table from '@/components/table';
import useAuthToken from '@/hooks/useAuthToken';
import { MoveRequestType } from '@/type/gameType';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [board, setBoard] = useState<Array<String|null>>([]);
  const [localNext, setLocalNext] = useState(true);
  const [winner,setWinner] = useState("");
  const [error,setError] = useState("");
  const {auth} = useAuthToken();

  useEffect(()=>{
    initGame()
  },[]);

  const initGame = async ()=>{
    setError("");
    const response:Response|undefined = await initGameWS(auth);
    if(response?.ok){
      const data:any = await response.json();      

      setBoard(data.board);  
      setWinner(data.winner);
      setLocalNext(data.localNext);
    }
    else{
      setError("An error occurred, please try again.")
    }
  }
  const handleClick = async (index:number) =>{
    setError("");
    const body:MoveRequestType = {
      board,
      localNext,
      index,
    }
    const response:Response|undefined = await makeMoveWS(body,auth);
    if(response?.ok){
      const data:any = await response.json();      

      setBoard(data.board);  
      setWinner(data.winner);
      setLocalNext(data.localNext);
    }
    else{
      setError("An error occurred, please try again.")
    }    
  }
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">
          {error?`${error}`:"Players: 1"}
        </h1>
        <Table
        board={board}
        localNext={localNext}
        winner={winner}
        restart={initGame}
        handleClick={handleClick}
        />
      </main>
    </div>
  );
}
