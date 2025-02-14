function Texto1(){
return <p>Um outro paragrafo de texto!</p>  
}

export default function Home() {
  const aula = 2;
  return (
    <div>
    <h1> Oi Professor! </h1>
    <p> Essa é a nossa {aula}° aula de react!</p>
    <Texto1/>
    </div>
  ) 
}