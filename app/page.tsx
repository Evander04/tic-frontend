'use client'
import { initGameWS } from '@/api/game';
import Navbar from '@/components/Navbar';
import Table from '@/components/table';
import useAuthToken from '@/hooks/useAuthToken';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [board, setBoard] = useState<Array<String|null>>([]);
  const [localNext, setLocalNext] = useState(true);
  const [winner,setWinner] = useState(false);
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
      console.log("Data =>",data);
      
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
        localNext={true}
        winner={null}
        restart={initGame}
        />
      </main>
    </div>
  );
}
