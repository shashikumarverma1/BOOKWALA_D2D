import React , {useState} from 'react'
import '../css/DropDown.css'
const DropDown = () => {
  
    const [data, setdata] = useState([])
    const [val, setval] = useState({"name": 'red'})
    const text=(e)=>{
     
    setval({...val, 'name': e.target.value})
    setdata([...data , val])
     //  console.log(val, data)

    }
  
    
    const deleteList=(i)=>{
     //  console.log(i)
       let temp=[...data]
       for(let j=0;j<temp.length ;j++){
        if(i==j){
            temp.splice(j,1)
        }
       }
       setdata(temp)
    }
  return (
    <div className='main_div' >
      <div className='header_parent'>
      <section className='section1'>
                {
                    data.map((e,i)=>{
                        return(
                            <div key={i} style={{display:"flex", marginLeft :10 ,color:`${e.name}`, height:"30px"  ,borderRadius: "30%"}}>
                            <span  onClick={(e)=>{deleteList(i)}}>
                                <span className='section1_span1'>{e.name}</span>
                            <span >x</span>
                            </span>
                            </div>
                        )
                    })
                }
            </section>
          <div>  <select className='section2' onChange={(e)=>{text(e)} }>
                  
                  <option style={{width :"80vw"}}>red</option>
                  <option  >green</option>
                  <option  >yellow</option>
                  <option >blue</option>
                  <option >purple</option>
                  <option >slate</option>
                  <option >silver</option>
              </select></div>
      </div>
    </div>
  )
}

export default DropDown