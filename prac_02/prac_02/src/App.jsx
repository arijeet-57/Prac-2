function App() {

  return (
    // we can also use <div> in the below line to store the two Header siblings, but using <> </> is much better as it does not introduce a new element
    <>  
      <Header title="ROY"></Header>
      <Header title="ROY"></Header>
    </>
  )
}

function Header({title}) { //header component taken as function
  return <div>
    {title}
  </div>
}

export default App
